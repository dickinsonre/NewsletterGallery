import { useState, useMemo, useRef, useEffect, useCallback } from "react";
import { Search, X, FileText, BookOpen, File, MessageSquare, ExternalLink, Wrench, Filter, ChevronDown, ArrowUp, ArrowDown, CornerDownLeft, SlidersHorizontal, AppWindow } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { newsletters, linkedInArticles, documents, linkedInPosts, tools, featuredApps } from "@/lib/data";
import type { Category, Difficulty } from "@/lib/data";

type ContentType = "newsletter" | "article" | "document" | "post" | "tool" | "app";

interface SearchResult {
  id: string;
  type: ContentType;
  title: string;
  description: string;
  link: string;
  score: number;
  matchedFields: string[];
  categories: string[];
  difficulty?: string;
  readTime?: string;
  issueNumber?: number;
  snippet: string;
}

function tokenize(text: string): string[] {
  return text.toLowerCase().split(/\s+/).filter(t => t.length > 0);
}

function scoreMatch(item: { title: string; description: string; categories?: string[]; keywords?: string[] }, queryTokens: string[], rawQuery: string): { score: number; matchedFields: string[] } {
  const q = rawQuery.toLowerCase();
  const titleLower = item.title.toLowerCase();
  const descLower = item.description.toLowerCase();
  const categoriesLower = (item.categories || []).map(c => c.toLowerCase());
  const keywordsLower = (item.keywords || []).map(k => k.toLowerCase());
  
  let score = 0;
  const matchedFields: string[] = [];

  if (titleLower.includes(q)) {
    score += 100;
    matchedFields.push("title");
  }
  if (descLower.includes(q)) {
    score += 40;
    if (!matchedFields.includes("description")) matchedFields.push("description");
  }
  if (categoriesLower.some(c => c.includes(q))) {
    score += 30;
    matchedFields.push("category");
  }
  if (keywordsLower.some(k => k.includes(q))) {
    score += 50;
    matchedFields.push("keywords");
  }

  let allTokensMatchTitle = true;
  let allTokensMatchDesc = true;
  let tokenTitleMatches = 0;
  let tokenDescMatches = 0;
  let tokenKeywordMatches = 0;

  for (const token of queryTokens) {
    if (titleLower.includes(token)) {
      tokenTitleMatches++;
    } else {
      allTokensMatchTitle = false;
    }
    if (descLower.includes(token)) {
      tokenDescMatches++;
    } else {
      allTokensMatchDesc = false;
    }
    if (keywordsLower.some(k => k.includes(token))) {
      tokenKeywordMatches++;
    }
  }

  if (queryTokens.length > 1) {
    score += tokenTitleMatches * 15;
    score += tokenDescMatches * 5;
    score += tokenKeywordMatches * 10;
    
    if (allTokensMatchTitle) {
      score += 60;
      if (!matchedFields.includes("title")) matchedFields.push("title");
    }
    if (allTokensMatchDesc) {
      score += 20;
      if (!matchedFields.includes("description")) matchedFields.push("description");
    }
  }

  if (titleLower.startsWith(q)) score += 30;

  if (score > 0 && matchedFields.length === 0) {
    if (tokenTitleMatches > 0) matchedFields.push("title");
    if (tokenDescMatches > 0) matchedFields.push("description");
    if (tokenKeywordMatches > 0) matchedFields.push("keywords");
  }

  return { score, matchedFields };
}

function createSnippet(description: string, queryTokens: string[], maxLen: number = 150): string {
  const descLower = description.toLowerCase();
  
  let bestPos = -1;
  for (const token of queryTokens) {
    const pos = descLower.indexOf(token);
    if (pos !== -1 && (bestPos === -1 || pos < bestPos)) {
      bestPos = pos;
    }
  }

  if (bestPos === -1) {
    return description.slice(0, maxLen) + (description.length > maxLen ? "..." : "");
  }

  const start = Math.max(0, bestPos - 40);
  const end = Math.min(description.length, start + maxLen);
  let snippet = description.slice(start, end);
  if (start > 0) snippet = "..." + snippet;
  if (end < description.length) snippet = snippet + "...";
  return snippet;
}

const typeConfig: Record<ContentType, { icon: typeof BookOpen; label: string; color: string }> = {
  newsletter: { icon: BookOpen, label: "Newsletter", color: "bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300" },
  article: { icon: FileText, label: "Article", color: "bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300" },
  document: { icon: File, label: "Document", color: "bg-amber-100 text-amber-700 dark:bg-amber-900 dark:text-amber-300" },
  post: { icon: MessageSquare, label: "Post", color: "bg-purple-100 text-purple-700 dark:bg-purple-900 dark:text-purple-300" },
  tool: { icon: Wrench, label: "Tool", color: "bg-rose-100 text-rose-700 dark:bg-rose-900 dark:text-rose-300" },
  app: { icon: AppWindow, label: "App", color: "bg-indigo-100 text-indigo-700 dark:bg-indigo-900 dark:text-indigo-300" }
};

const allCategories: Category[] = ["Ruby Scripting", "SWMM5", "ICM InfoWorks", "SQL/Data", "AI/ML", "History", "Migration", "Quiz", "Code Analysis", "Model Testing"];
const allDifficulties: Difficulty[] = ["beginner", "intermediate", "advanced"];

export function GlobalSearch() {
  const [query, setQuery] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [typeFilter, setTypeFilter] = useState<ContentType | "all">("all");
  const [categoryFilter, setCategoryFilter] = useState<Category | "all">("all");
  const [difficultyFilter, setDifficultyFilter] = useState<Difficulty | "all">("all");
  const [showFilters, setShowFilters] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const resultsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        inputRef.current?.focus();
        setIsOpen(true);
      }
      if (e.key === "Escape") {
        setIsOpen(false);
        inputRef.current?.blur();
      }
    }
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  const results = useMemo(() => {
    if (!query || query.length < 2) return [];
    
    const queryTokens = tokenize(query);
    const allResults: SearchResult[] = [];

    newsletters.forEach(n => {
      const { score, matchedFields } = scoreMatch(
        { title: n.title, description: n.description, categories: n.categories, keywords: n.keywords },
        queryTokens, query
      );
      if (score > 0) {
        allResults.push({
          id: n.id, type: "newsletter",
          title: `#${n.issueNumber}: ${n.title}`,
          description: n.description, link: n.link, score, matchedFields,
          categories: n.categories, difficulty: n.difficulty,
          readTime: n.readTime, issueNumber: n.issueNumber,
          snippet: createSnippet(n.description, queryTokens)
        });
      }
    });

    linkedInArticles.forEach(a => {
      const { score, matchedFields } = scoreMatch(
        { title: a.title, description: a.description, categories: a.categories, keywords: a.keywords },
        queryTokens, query
      );
      if (score > 0) {
        allResults.push({
          id: a.id, type: "article",
          title: a.title, description: a.description, link: a.link, score, matchedFields,
          categories: a.categories, difficulty: a.difficulty,
          readTime: a.readTime,
          snippet: createSnippet(a.description, queryTokens)
        });
      }
    });

    documents.forEach(d => {
      const { score, matchedFields } = scoreMatch(
        { title: d.title, description: d.description, categories: d.categories },
        queryTokens, query
      );
      if (score > 0) {
        allResults.push({
          id: d.id, type: "document",
          title: d.title, description: d.description, link: d.link, score, matchedFields,
          categories: d.categories, difficulty: d.difficulty,
          snippet: createSnippet(d.description, queryTokens)
        });
      }
    });

    linkedInPosts.forEach(p => {
      const { score, matchedFields } = scoreMatch(
        { title: p.title, description: p.description, categories: p.categories },
        queryTokens, query
      );
      if (score > 0) {
        allResults.push({
          id: p.id, type: "post",
          title: p.title, description: p.description, link: p.link, score, matchedFields,
          categories: p.categories,
          snippet: createSnippet(p.description, queryTokens)
        });
      }
    });

    tools.forEach(t => {
      const { score, matchedFields } = scoreMatch(
        { title: t.name, description: t.description, categories: t.categories },
        queryTokens, query
      );
      if (score > 0) {
        allResults.push({
          id: t.id, type: "tool",
          title: t.name, description: t.description, link: t.link, score, matchedFields,
          categories: t.categories,
          snippet: createSnippet(t.description, queryTokens)
        });
      }
    });

    featuredApps.forEach(a => {
      const { score, matchedFields } = scoreMatch(
        { title: a.name, description: a.description, categories: a.categories },
        queryTokens, query
      );
      if (score > 0) {
        allResults.push({
          id: a.id, type: "app",
          title: a.name, description: a.description, link: a.url, score, matchedFields,
          categories: a.categories,
          snippet: createSnippet(a.description, queryTokens)
        });
      }
    });

    let filtered = allResults;
    if (typeFilter !== "all") {
      filtered = filtered.filter(r => r.type === typeFilter);
    }
    if (categoryFilter !== "all") {
      filtered = filtered.filter(r => r.categories.includes(categoryFilter));
    }
    if (difficultyFilter !== "all") {
      filtered = filtered.filter(r => r.difficulty === difficultyFilter);
    }

    filtered.sort((a, b) => b.score - a.score);
    return filtered;
  }, [query, typeFilter, categoryFilter, difficultyFilter]);

  const typeCounts = useMemo(() => {
    if (!query || query.length < 2) return {};
    const queryTokens = tokenize(query);
    const counts: Record<string, number> = { all: 0 };
    
    const countType = (items: any[], type: ContentType, getSearchable: (item: any) => { title: string; description: string; categories?: string[]; keywords?: string[] }) => {
      items.forEach(item => {
        const { score } = scoreMatch(getSearchable(item), queryTokens, query);
        if (score > 0) {
          counts[type] = (counts[type] || 0) + 1;
          counts.all++;
        }
      });
    };

    countType(newsletters, "newsletter", n => ({ title: n.title, description: n.description, categories: n.categories, keywords: n.keywords }));
    countType(linkedInArticles, "article", a => ({ title: a.title, description: a.description, categories: a.categories, keywords: a.keywords }));
    countType(documents, "document", d => ({ title: d.title, description: d.description, categories: d.categories }));
    countType(linkedInPosts, "post", p => ({ title: p.title, description: p.description, categories: p.categories }));
    countType(tools, "tool", t => ({ title: t.name, description: t.description, categories: t.categories }));
    countType(featuredApps, "app", a => ({ title: a.name, description: a.description, categories: a.categories }));

    return counts;
  }, [query]);

  const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setSelectedIndex(prev => Math.min(prev + 1, results.length - 1));
      const el = resultsRef.current?.children[Math.min(selectedIndex + 1, results.length - 1)] as HTMLElement;
      el?.scrollIntoView({ block: "nearest" });
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setSelectedIndex(prev => Math.max(prev - 1, 0));
      const el = resultsRef.current?.children[Math.max(selectedIndex - 1, 0)] as HTMLElement;
      el?.scrollIntoView({ block: "nearest" });
    } else if (e.key === "Enter" && results[selectedIndex]) {
      e.preventDefault();
      window.open(results[selectedIndex].link, "_blank");
      setIsOpen(false);
    }
  }, [results, selectedIndex]);

  useEffect(() => {
    setSelectedIndex(0);
  }, [query, typeFilter, categoryFilter, difficultyFilter]);

  const highlightMatch = (text: string, query: string) => {
    if (!query || query.length < 2) return text;
    const tokens = tokenize(query);
    const pattern = tokens.map(t => t.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).join('|');
    const regex = new RegExp(`(${pattern})`, 'gi');
    const parts = text.split(regex);
    return parts.map((part, i) => 
      regex.test(part) ? <mark key={i} className="bg-yellow-200/80 dark:bg-yellow-700/60 rounded px-0.5 font-medium">{part}</mark> : part
    );
  };

  const activeFilterCount = (typeFilter !== "all" ? 1 : 0) + (categoryFilter !== "all" ? 1 : 0) + (difficultyFilter !== "all" ? 1 : 0);

  return (
    <div ref={containerRef} className="relative w-full max-w-3xl mx-auto">
      <div className="relative group">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground group-focus-within:text-primary transition-colors" />
        <Input 
          ref={inputRef}
          placeholder="Search newsletters, articles, docs, apps & tools... (⌘K)" 
          className="pl-12 pr-24 py-6 text-base bg-background/90 border-primary/30 focus-visible:ring-primary/30 shadow-lg rounded-xl"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setIsOpen(true);
          }}
          onFocus={() => setIsOpen(true)}
          onKeyDown={handleKeyDown}
          data-testid="input-global-search"
        />
        <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-1">
          {query && (
            <button
              onClick={() => { setQuery(""); setIsOpen(false); }}
              className="p-1.5 hover:bg-muted rounded-md transition-colors"
              data-testid="button-clear-search"
            >
              <X className="w-4 h-4 text-muted-foreground" />
            </button>
          )}
          <kbd className="hidden sm:inline-flex h-6 items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground">
            <span className="text-xs">⌘</span>K
          </kbd>
        </div>
      </div>

      {isOpen && query.length >= 2 && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-background border border-border rounded-xl shadow-2xl max-h-[70vh] overflow-hidden z-50 flex flex-col">
          <div className="border-b border-border p-3 space-y-3 flex-shrink-0">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 flex-wrap">
                {(["all", "newsletter", "article", "document", "post", "tool", "app"] as const).map(type => {
                  const count = type === "all" ? typeCounts.all || 0 : typeCounts[type] || 0;
                  if (type !== "all" && count === 0) return null;
                  const isActive = typeFilter === type;
                  return (
                    <button
                      key={type}
                      onClick={() => setTypeFilter(type)}
                      className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-medium transition-all ${
                        isActive 
                          ? "bg-primary text-primary-foreground shadow-sm" 
                          : "bg-muted/60 text-muted-foreground hover:bg-muted hover:text-foreground"
                      }`}
                      data-testid={`filter-type-${type}`}
                    >
                      {type === "all" ? "All" : typeConfig[type].label}
                      <span className={`text-[10px] ${isActive ? "opacity-80" : "opacity-60"}`}>
                        {count}
                      </span>
                    </button>
                  );
                })}
              </div>
              <button
                onClick={() => setShowFilters(!showFilters)}
                className={`inline-flex items-center gap-1 px-2 py-1 rounded-lg text-xs font-medium transition-all ${
                  showFilters || activeFilterCount > 0
                    ? "bg-primary/10 text-primary"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted"
                }`}
                data-testid="button-toggle-filters"
              >
                <SlidersHorizontal className="w-3.5 h-3.5" />
                Filters
                {activeFilterCount > 0 && (
                  <span className="bg-primary text-primary-foreground rounded-full w-4 h-4 text-[10px] flex items-center justify-center">
                    {activeFilterCount}
                  </span>
                )}
              </button>
            </div>

            {showFilters && (
              <div className="flex flex-wrap gap-4 pt-1">
                <div className="space-y-1">
                  <label className="text-[10px] uppercase tracking-wider font-medium text-muted-foreground">Category</label>
                  <select
                    value={categoryFilter}
                    onChange={(e) => setCategoryFilter(e.target.value as Category | "all")}
                    className="block w-full text-xs bg-muted/60 border-0 rounded-lg px-2 py-1.5 text-foreground focus:ring-1 focus:ring-primary"
                    data-testid="filter-category"
                  >
                    <option value="all">All Categories</option>
                    {allCategories.map(c => <option key={c} value={c}>{c}</option>)}
                  </select>
                </div>
                <div className="space-y-1">
                  <label className="text-[10px] uppercase tracking-wider font-medium text-muted-foreground">Difficulty</label>
                  <select
                    value={difficultyFilter}
                    onChange={(e) => setDifficultyFilter(e.target.value as Difficulty | "all")}
                    className="block w-full text-xs bg-muted/60 border-0 rounded-lg px-2 py-1.5 text-foreground focus:ring-1 focus:ring-primary"
                    data-testid="filter-difficulty"
                  >
                    <option value="all">All Levels</option>
                    {allDifficulties.map(d => <option key={d} value={d}>{d.charAt(0).toUpperCase() + d.slice(1)}</option>)}
                  </select>
                </div>
                {(categoryFilter !== "all" || difficultyFilter !== "all") && (
                  <button
                    onClick={() => { setCategoryFilter("all"); setDifficultyFilter("all"); }}
                    className="self-end text-xs text-primary hover:underline pb-1"
                    data-testid="button-clear-filters"
                  >
                    Clear filters
                  </button>
                )}
              </div>
            )}
          </div>

          <div className="overflow-y-auto flex-grow" ref={resultsRef}>
            {results.length > 0 ? (
              <div className="p-2">
                <div className="px-3 py-1.5 text-xs text-muted-foreground font-medium flex items-center justify-between">
                  <span>{results.length} result{results.length !== 1 ? 's' : ''} for "{query}"</span>
                  <span className="text-[10px] hidden sm:inline">
                    <ArrowUp className="w-3 h-3 inline" /><ArrowDown className="w-3 h-3 inline" /> navigate · <CornerDownLeft className="w-3 h-3 inline" /> open
                  </span>
                </div>
                {results.map((result, index) => {
                  const config = typeConfig[result.type];
                  const Icon = config.icon;
                  const isSelected = index === selectedIndex;
                  return (
                    <a
                      key={`${result.type}-${result.id}`}
                      href={result.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-start gap-3 p-3 rounded-lg transition-colors group ${
                        isSelected ? "bg-primary/10 ring-1 ring-primary/20" : "hover:bg-muted"
                      }`}
                      onClick={() => setIsOpen(false)}
                      onMouseEnter={() => setSelectedIndex(index)}
                      data-testid={`search-result-${result.type}-${result.id}`}
                    >
                      <div className="flex-shrink-0 mt-0.5">
                        <div className={`w-9 h-9 rounded-lg flex items-center justify-center ${config.color}`}>
                          <Icon className="w-4 h-4" />
                        </div>
                      </div>
                      <div className="flex-grow min-w-0">
                        <div className="flex items-center gap-2 mb-0.5 flex-wrap">
                          <span className={`text-[10px] font-semibold uppercase tracking-wider px-1.5 py-0.5 rounded ${config.color}`}>
                            {config.label}
                          </span>
                          {result.difficulty && (
                            <span className={`text-[10px] px-1.5 py-0.5 rounded ${
                              result.difficulty === "beginner" ? "bg-emerald-100 text-emerald-700 dark:bg-emerald-900 dark:text-emerald-300" :
                              result.difficulty === "intermediate" ? "bg-amber-100 text-amber-700 dark:bg-amber-900 dark:text-amber-300" :
                              "bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-300"
                            }`}>
                              {result.difficulty}
                            </span>
                          )}
                          {result.readTime && (
                            <span className="text-[10px] text-muted-foreground">{result.readTime}</span>
                          )}
                          <span className="text-[10px] text-muted-foreground/60 hidden sm:inline">
                            matched in {result.matchedFields.join(", ")}
                          </span>
                        </div>
                        <h4 className="font-medium text-sm group-hover:text-primary transition-colors line-clamp-1">
                          {highlightMatch(result.title, query)}
                        </h4>
                        <p className="text-xs text-muted-foreground line-clamp-2 mt-0.5 leading-relaxed">
                          {highlightMatch(result.snippet, query)}
                        </p>
                        {result.categories.length > 0 && (
                          <div className="flex gap-1 mt-1.5 flex-wrap">
                            {result.categories.slice(0, 3).map(c => (
                              <span key={c} className="text-[10px] px-1.5 py-0.5 rounded-full bg-muted text-muted-foreground">
                                {c}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>
                      <ExternalLink className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0 mt-1" />
                    </a>
                  );
                })}
              </div>
            ) : (
              <div className="p-10 text-center">
                <Search className="w-10 h-10 text-muted-foreground/30 mx-auto mb-3" />
                <p className="text-muted-foreground font-medium">No results found for "{query}"</p>
                <p className="text-xs text-muted-foreground mt-2 max-w-sm mx-auto">
                  Try different keywords like "Ruby scripting", "SWMM5 solver", "design storm", "hydraulic model", or "Python"
                </p>
                {activeFilterCount > 0 && (
                  <button
                    onClick={() => { setTypeFilter("all"); setCategoryFilter("all"); setDifficultyFilter("all"); }}
                    className="mt-3 text-xs text-primary hover:underline"
                  >
                    Clear all filters and try again
                  </button>
                )}
              </div>
            )}
          </div>

          <div className="border-t border-border px-4 py-2 flex-shrink-0 bg-muted/30">
            <div className="flex items-center justify-between text-[10px] text-muted-foreground">
              <span>Searching across {newsletters.length} newsletters, {linkedInArticles.length} articles, {documents.length} docs, {featuredApps.length} apps, {tools.length} tools</span>
              <span className="hidden sm:inline">ESC to close</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
