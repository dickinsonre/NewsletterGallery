import { useState, useMemo, useRef, useEffect } from "react";
import { Search, X, FileText, BookOpen, File, MessageSquare, ExternalLink } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { newsletters, linkedInArticles, documents, linkedInPosts } from "@/lib/data";

interface SearchResult {
  id: string;
  type: "newsletter" | "article" | "document" | "post";
  title: string;
  description: string;
  link: string;
  matchedIn: string[];
  issueNumber?: number;
}

export function GlobalSearch() {
  const [query, setQuery] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

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
      }
    }
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  const results = useMemo(() => {
    if (!query || query.length < 2) return [];
    
    const searchLower = query.toLowerCase();
    const allResults: SearchResult[] = [];

    newsletters.forEach(n => {
      const matchedIn: string[] = [];
      if (n.title.toLowerCase().includes(searchLower)) matchedIn.push("title");
      if (n.description.toLowerCase().includes(searchLower)) matchedIn.push("description");
      if (n.keywords?.some(k => k.toLowerCase().includes(searchLower))) matchedIn.push("keywords");
      if (n.categories.some(c => c.toLowerCase().includes(searchLower))) matchedIn.push("category");
      
      if (matchedIn.length > 0) {
        allResults.push({
          id: n.id,
          type: "newsletter",
          title: `Edition #${n.issueNumber}: ${n.title}`,
          description: n.description,
          link: n.link,
          matchedIn,
          issueNumber: n.issueNumber
        });
      }
    });

    linkedInArticles.forEach(a => {
      const matchedIn: string[] = [];
      if (a.title.toLowerCase().includes(searchLower)) matchedIn.push("title");
      if (a.description.toLowerCase().includes(searchLower)) matchedIn.push("description");
      if (a.keywords?.some(k => k.toLowerCase().includes(searchLower))) matchedIn.push("keywords");
      if (a.categories.some(c => c.toLowerCase().includes(searchLower))) matchedIn.push("category");
      
      if (matchedIn.length > 0) {
        allResults.push({
          id: a.id,
          type: "article",
          title: a.title,
          description: a.description,
          link: a.link,
          matchedIn
        });
      }
    });

    documents.forEach(d => {
      const matchedIn: string[] = [];
      if (d.title.toLowerCase().includes(searchLower)) matchedIn.push("title");
      if (d.description.toLowerCase().includes(searchLower)) matchedIn.push("description");
      if (d.categories.some(c => c.toLowerCase().includes(searchLower))) matchedIn.push("category");
      
      if (matchedIn.length > 0) {
        allResults.push({
          id: d.id,
          type: "document",
          title: d.title,
          description: d.description,
          link: d.link,
          matchedIn
        });
      }
    });

    linkedInPosts.forEach(p => {
      const matchedIn: string[] = [];
      if (p.title.toLowerCase().includes(searchLower)) matchedIn.push("title");
      if (p.description.toLowerCase().includes(searchLower)) matchedIn.push("description");
      if (p.categories.some(c => c.toLowerCase().includes(searchLower))) matchedIn.push("category");
      
      if (matchedIn.length > 0) {
        allResults.push({
          id: p.id,
          type: "post",
          title: p.title,
          description: p.description,
          link: p.link,
          matchedIn
        });
      }
    });

    return allResults.slice(0, 20);
  }, [query]);

  const highlightMatch = (text: string, query: string) => {
    if (!query || query.length < 2) return text;
    const regex = new RegExp(`(${query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi');
    const parts = text.split(regex);
    return parts.map((part, i) => 
      regex.test(part) ? <mark key={i} className="bg-yellow-200 dark:bg-yellow-800 rounded px-0.5">{part}</mark> : part
    );
  };

  const typeIcons = {
    newsletter: BookOpen,
    article: FileText,
    document: File,
    post: MessageSquare
  };

  const typeLabels = {
    newsletter: "Newsletter",
    article: "Article",
    document: "Document",
    post: "Post"
  };

  return (
    <div ref={containerRef} className="relative w-full max-w-2xl mx-auto">
      <div className="relative">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
        <Input 
          ref={inputRef}
          placeholder="Search all content... (⌘K)" 
          className="pl-12 pr-12 py-6 text-base bg-background/90 border-primary/30 focus-visible:ring-primary/30 shadow-lg"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setIsOpen(true);
          }}
          onFocus={() => setIsOpen(true)}
          data-testid="input-global-search"
        />
        {query && (
          <button
            onClick={() => { setQuery(""); setIsOpen(false); }}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-1 hover:bg-muted rounded-md"
            data-testid="button-clear-search"
          >
            <X className="w-4 h-4 text-muted-foreground" />
          </button>
        )}
      </div>

      {isOpen && query.length >= 2 && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-background border border-border rounded-xl shadow-2xl max-h-[60vh] overflow-y-auto z-50">
          {results.length > 0 ? (
            <div className="p-2">
              <div className="px-3 py-2 text-xs text-muted-foreground font-medium">
                {results.length} result{results.length !== 1 ? 's' : ''} for "{query}"
              </div>
              {results.map((result) => {
                const Icon = typeIcons[result.type];
                return (
                  <a
                    key={`${result.type}-${result.id}`}
                    href={result.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-3 p-3 rounded-lg hover:bg-muted transition-colors group"
                    onClick={() => setIsOpen(false)}
                    data-testid={`search-result-${result.type}-${result.id}`}
                  >
                    <div className="flex-shrink-0 mt-0.5">
                      <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                        <Icon className="w-4 h-4 text-primary" />
                      </div>
                    </div>
                    <div className="flex-grow min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <Badge variant="secondary" className="text-xs px-1.5 py-0">
                          {typeLabels[result.type]}
                        </Badge>
                        {result.matchedIn.map(m => (
                          <span key={m} className="text-xs text-muted-foreground">
                            in {m}
                          </span>
                        ))}
                      </div>
                      <h4 className="font-medium text-sm group-hover:text-primary transition-colors line-clamp-1">
                        {highlightMatch(result.title, query)}
                      </h4>
                      <p className="text-xs text-muted-foreground line-clamp-2 mt-1">
                        {highlightMatch(result.description, query)}
                      </p>
                    </div>
                    <ExternalLink className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0 mt-1" />
                  </a>
                );
              })}
            </div>
          ) : (
            <div className="p-8 text-center">
              <p className="text-muted-foreground">No results found for "{query}"</p>
              <p className="text-xs text-muted-foreground mt-2">Try searching for terms like "Ruby", "SWMM5", "hydraulics", "CSV export"</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
