import { newsletters, linkedInArticles, documents, linkedInPosts, tools, featuredApps, ALL_CATEGORIES, learningPaths, Category, githubRepos } from "@/lib/data";
import { NewsletterCard } from "@/components/newsletter-card";
import { ArticleCard } from "@/components/article-card";
import { DocumentCard } from "@/components/document-card";
import { PostCard } from "@/components/post-card";
import { ToolCard } from "@/components/tool-card";
import { GlobalSearch } from "@/components/global-search";
import robertPhoto from "@assets/image_1763939729281.png";
import timeEngineerImage from "@assets/image_1764203582124.png";
import { BookOpen, Search, GraduationCap, Filter, X, ArrowRight, SortAsc, LayoutGrid, List, Wrench, Mail, Send, Github, MessageCircleQuestion, ExternalLink, AppWindow, Globe, Brain, GitFork } from "lucide-react";
import { QuizSection } from "@/components/quiz-section";
import { RepoCard } from "@/components/repo-card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ThemeToggle } from "@/components/theme-toggle";
import { useTheme, colorSchemes } from "@/components/theme-provider";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

export default function Home() {
  const { colorScheme } = useTheme();
  const [searchQuery, setSearchQuery] = useState("");
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("newsletters");
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(null);
  const [sortOrder, setSortOrder] = useState<"newest" | "oldest">("newest");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [repoFilter, setRepoFilter] = useState<string>("All");

  const searchLower = searchQuery.toLowerCase();
  
  const filteredNewsletters = newsletters.filter(n => {
    const matchesSearch = !searchQuery || 
      n.title.toLowerCase().includes(searchLower) ||
      n.description.toLowerCase().includes(searchLower) ||
      n.keywords?.some(k => k.toLowerCase().includes(searchLower)) ||
      n.categories.some(c => c.toLowerCase().includes(searchLower));
    const matchesCategory = !selectedCategory || n.categories.includes(selectedCategory);
    return matchesSearch && matchesCategory;
  }).sort((a, b) => sortOrder === "oldest" ? a.issueNumber - b.issueNumber : b.issueNumber - a.issueNumber);

  const filteredArticles = linkedInArticles.filter(a => {
    const matchesSearch = !searchQuery ||
      a.title.toLowerCase().includes(searchLower) ||
      a.description.toLowerCase().includes(searchLower) ||
      a.keywords?.some(k => k.toLowerCase().includes(searchLower)) ||
      a.categories.some(c => c.toLowerCase().includes(searchLower));
    const matchesCategory = !selectedCategory || a.categories.includes(selectedCategory);
    return matchesSearch && matchesCategory;
  });

  const filteredDocuments = documents.filter(d => {
    const matchesSearch = !searchQuery ||
      d.title.toLowerCase().includes(searchLower) ||
      d.description.toLowerCase().includes(searchLower) ||
      d.categories.some(c => c.toLowerCase().includes(searchLower));
    const matchesCategory = !selectedCategory || d.categories.includes(selectedCategory);
    return matchesSearch && matchesCategory;
  });

  const filteredPosts = linkedInPosts.filter(p => {
    const matchesSearch = !searchQuery ||
      p.title.toLowerCase().includes(searchLower) ||
      p.description.toLowerCase().includes(searchLower) ||
      p.categories.some(c => c.toLowerCase().includes(searchLower));
    const matchesCategory = !selectedCategory || p.categories.includes(selectedCategory);
    return matchesSearch && matchesCategory;
  });

  const clearFilters = () => {
    setSearchQuery("");
    setSelectedCategory(null);
  };

  return (
    <div 
      className="min-h-screen w-full transition-all duration-500"
      style={{ 
        background: colorSchemes[colorScheme].gradient,
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Header Section */}
      <header className="border-b border-border/40 bg-background/80 backdrop-blur-md sticky top-0 z-50">
        <div className="container mx-auto px-4 h-20 flex items-center justify-between max-w-6xl">
          <div className="flex items-center gap-3">
            <div className="bg-primary text-primary-foreground p-2 rounded-md">
              <BookOpen className="w-6 h-6" />
            </div>
            <div>
              <h1 className="font-serif text-xl font-bold leading-none tracking-tight">SWMM5, ICM, XPSWMM, InfoSewer & InfoSWMM Modeling</h1>
              <p className="text-xs text-muted-foreground tracking-widest uppercase mt-1">Newsletter Archive</p>
            </div>
          </div>
          
          <nav className="hidden md:flex gap-6 text-sm font-medium text-muted-foreground items-center">
            <a href="/" className="text-foreground hover:text-primary transition-colors">Library</a>
            
            <a href="/docs" className="hover:text-primary transition-colors">Docs</a>

            <a href="https://www.linkedin.com/newsletters/7159940733972434944/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
              Subscribe
            </a>

            <a href="https://www.linkedin.com/in/robert-dickinson-899011/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
              LinkedIn
            </a>
            
            <Dialog open={isAboutOpen} onOpenChange={setIsAboutOpen}>
              <DialogTrigger asChild>
                <button className="hover:text-primary transition-colors focus:outline-none">About</button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-lg bg-card/95 backdrop-blur-sm border-border max-h-[90vh] overflow-y-auto">
                <DialogHeader className="flex flex-col items-center text-center space-y-4 pt-4">
                  <div className="w-32 h-32 rounded-full border-4 border-background shadow-xl overflow-hidden">
                    <img src={robertPhoto} alt="Robert Dickinson" className="w-full h-full object-cover" />
                  </div>
                  <div className="space-y-2">
                    <DialogTitle className="text-2xl font-serif">Robert Dickinson</DialogTitle>
                    <DialogDescription className="text-sm font-medium text-primary uppercase tracking-wider">
                      Autodesk Water Technologist
                    </DialogDescription>
                  </div>
                </DialogHeader>
                <div className="space-y-6 py-4">
                  <div className="text-center">
                    <p className="text-muted-foreground leading-relaxed text-sm">
                      17+ years at Innovyze & Autodesk specializing in stormwater modeling, 
                      hydraulic analysis, and software development for water infrastructure.
                    </p>
                  </div>
                  
                  <div className="space-y-2">
                    <h4 className="text-xs font-medium text-muted-foreground uppercase tracking-wider text-center">Expertise Areas</h4>
                    <div className="flex flex-wrap justify-center gap-2 text-sm">
                      <span className="bg-secondary px-3 py-1 rounded-full text-secondary-foreground">SWMM (53+ yrs)</span>
                      <span className="bg-secondary px-3 py-1 rounded-full text-secondary-foreground">InfoSWMM/ESRI (20 yrs)</span>
                      <span className="bg-secondary px-3 py-1 rounded-full text-secondary-foreground">InfoWorks ICM (15 yrs)</span>
                      <span className="bg-secondary px-3 py-1 rounded-full text-secondary-foreground">Ruby Scripting</span>
                      <span className="bg-secondary px-3 py-1 rounded-full text-secondary-foreground">AI/ML Integration</span>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <h4 className="text-xs font-medium text-muted-foreground uppercase tracking-wider text-center">Featured Picks</h4>
                    <div className="space-y-2 text-sm">
                      <a href="#" onClick={() => { setIsAboutOpen(false); setActiveTab("newsletters"); }} className="block p-2 rounded bg-secondary/50 hover:bg-secondary transition-colors">
                        <span className="font-medium">New to SWMM?</span>
                        <span className="text-muted-foreground text-xs block">Start with the Learning Paths tab</span>
                      </a>
                      <a href="#" onClick={() => { setIsAboutOpen(false); setActiveTab("newsletters"); setSelectedCategory("Ruby Scripting"); }} className="block p-2 rounded bg-secondary/50 hover:bg-secondary transition-colors">
                        <span className="font-medium">Ruby Scripting</span>
                        <span className="text-muted-foreground text-xs block">Automate ICM workflows</span>
                      </a>
                    </div>
                  </div>

                  <div className="text-center pt-2">
                    <a 
                      href="https://www.linkedin.com/in/robert-dickinson-899011/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm text-primary hover:underline"
                    >
                      Connect on LinkedIn
                    </a>
                  </div>
                </div>
              </DialogContent>
            </Dialog>

            <ThemeToggle />
          </nav>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12 max-w-6xl">
        {/* Hero Section - Redesigned for clarity */}
        <div className="max-w-5xl mx-auto mb-16">
          {/* Author Introduction */}
          <div className="bg-card/60 backdrop-blur-sm border border-border rounded-xl p-8 mb-8">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="flex-shrink-0">
                <div className="w-24 h-24 rounded-full border-4 border-primary/20 shadow-lg overflow-hidden">
                  <img src={robertPhoto} alt="Robert Dickinson" className="w-full h-full object-cover" />
                </div>
              </div>
              <div className="text-center md:text-left flex-grow">
                <h1 className="text-2xl font-serif font-bold mb-2">The Robert Dickinson Archive</h1>
                <p className="text-muted-foreground mb-3">
                  <span className="font-medium text-foreground">53+ years documenting stormwater modeling</span> — from SWMM 2.5 punch cards in 1978 to AI-integrated ICM InfoWorks today. 
                  This living archive captures decades of hydraulic engineering knowledge, Ruby scripting techniques, and the untold history of urban drainage software.
                </p>
                <div className="flex flex-wrap justify-center md:justify-start gap-2 text-xs mb-3">
                  <Badge variant="secondary">Autodesk Water Technologist</Badge>
                  <Badge variant="secondary">17+ yrs at Innovyze</Badge>
                  <Badge variant="secondary">{newsletters.length} Newsletters</Badge>
                  <Badge variant="secondary">{linkedInArticles.length} Articles</Badge>
                  <Badge variant="secondary">{tools.length} Tools</Badge>
                </div>
                {/* Quick Glossary with Linkable Terms */}
                <details className="text-xs" id="glossary">
                  <summary className="cursor-pointer text-primary hover:underline">What is SWMM5? ICM? New here? Quick glossary...</summary>
                  <div className="mt-2 p-3 bg-background/80 rounded-md border border-border space-y-2 text-muted-foreground">
                    <p id="term-swmm5" className="scroll-mt-24">
                      <strong className="text-foreground">SWMM5</strong> — Storm Water Management Model (EPA). The gold standard for urban drainage simulation.
                      <a href={newsletters.find(n => n.issueNumber === 1)?.link} target="_blank" rel="noopener noreferrer" className="ml-1 text-primary hover:underline text-xs">(See Edition #1)</a>
                    </p>
                    <p id="term-icm" className="scroll-mt-24">
                      <strong className="text-foreground">ICM InfoWorks</strong> — Integrated Catchment Modeling software by Autodesk for sewer/stormwater networks.
                      <a href={newsletters.find(n => n.issueNumber === 2)?.link} target="_blank" rel="noopener noreferrer" className="ml-1 text-primary hover:underline text-xs">(See Edition #2)</a>
                    </p>
                    <p id="term-ruby" className="scroll-mt-24">
                      <strong className="text-foreground">Ruby Scripting</strong> — Automation language built into ICM for batch processing and custom workflows.
                      <a href={newsletters.find(n => n.issueNumber === 36)?.link} target="_blank" rel="noopener noreferrer" className="ml-1 text-primary hover:underline text-xs">(See Edition #36)</a>
                    </p>
                    <p id="term-lids" className="scroll-mt-24">
                      <strong className="text-foreground">LIDs/SUDS</strong> — Low Impact Development / Sustainable Urban Drainage Systems (green infrastructure).
                      <a href={newsletters.find(n => n.issueNumber === 6)?.link} target="_blank" rel="noopener noreferrer" className="ml-1 text-primary hover:underline text-xs">(See Edition #6)</a>
                    </p>
                    <p id="term-extran" className="scroll-mt-24">
                      <strong className="text-foreground">Extran</strong> — The dynamic wave routing module in SWMM for pipe flow simulation.
                      <a href={newsletters.find(n => n.issueNumber === 13)?.link} target="_blank" rel="noopener noreferrer" className="ml-1 text-primary hover:underline text-xs">(See Edition #13)</a>
                    </p>
                    <p id="term-dwf" className="scroll-mt-24">
                      <strong className="text-foreground">DWF</strong> — Dry Weather Flow. Base sanitary flow in sewer systems when there's no rain.
                      <a href={newsletters.find(n => n.issueNumber === 23)?.link} target="_blank" rel="noopener noreferrer" className="ml-1 text-primary hover:underline text-xs">(See Edition #23)</a>
                    </p>
                    <p id="term-rdii" className="scroll-mt-24">
                      <strong className="text-foreground">RDII</strong> — Rainfall-Derived Inflow & Infiltration. Stormwater entering sanitary sewers.
                      <a href={newsletters.find(n => n.issueNumber === 7)?.link} target="_blank" rel="noopener noreferrer" className="ml-1 text-primary hover:underline text-xs">(See Edition #7)</a>
                    </p>
                  </div>
                </details>
              </div>
            </div>
          </div>

          {/* Start Here - Quick Paths */}
          <div className="bg-primary/5 border border-primary/20 rounded-xl p-6 mb-8">
            <div className="flex items-center gap-2 mb-4">
              <GraduationCap className="w-5 h-5 text-primary" />
              <h2 className="font-serif font-medium text-lg">Start Here</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <button 
                onClick={() => { setActiveTab("paths"); }}
                className="text-left p-4 bg-background/80 rounded-lg border border-border hover:border-primary/50 transition-all group"
                data-testid="button-start-learning-paths"
              >
                <h3 className="font-medium mb-1 group-hover:text-primary transition-colors">New to SWMM5?</h3>
                <p className="text-sm text-muted-foreground">Start with the fundamentals and build your knowledge step by step.</p>
                <span className="text-xs text-primary mt-2 inline-flex items-center gap-1">View Learning Paths <ArrowRight className="w-3 h-3" /></span>
              </button>
              <button 
                onClick={() => { setSelectedCategory("Ruby Scripting"); setActiveTab("newsletters"); }}
                className="text-left p-4 bg-background/80 rounded-lg border border-border hover:border-primary/50 transition-all group"
                data-testid="button-start-ruby"
              >
                <h3 className="font-medium mb-1 group-hover:text-primary transition-colors">Ruby Scripting</h3>
                <p className="text-sm text-muted-foreground">Automate ICM workflows with powerful Ruby scripts.</p>
                <span className="text-xs text-primary mt-2 inline-flex items-center gap-1">Browse Ruby Content <ArrowRight className="w-3 h-3" /></span>
              </button>
              <button 
                onClick={() => { setSortOrder("oldest"); setActiveTab("newsletters"); }}
                className="text-left p-4 bg-background/80 rounded-lg border border-border hover:border-primary/50 transition-all group"
                data-testid="button-start-edition-1"
              >
                <h3 className="font-medium mb-1 group-hover:text-primary transition-colors">Read from Edition #1</h3>
                <p className="text-sm text-muted-foreground">Start from the beginning: "SWMM5 Inside ICM InfoWorks".</p>
                <span className="text-xs text-primary mt-2 inline-flex items-center gap-1">Start from Beginning <ArrowRight className="w-3 h-3" /></span>
              </button>
            </div>
          </div>

          {/* Essential Reads - Most Important for Newcomers */}
          <div className="bg-card/40 border border-border rounded-xl p-6 mb-8">
            <div className="flex items-center gap-2 mb-4">
              <BookOpen className="w-5 h-5 text-primary" />
              <h2 className="font-serif font-medium text-lg">Essential Reads</h2>
              <Badge variant="outline" className="text-xs">Start with these</Badge>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {[
                { num: 1, title: "SWMM5 Inside ICM InfoWorks", why: "The foundation - where it all begins" },
                { num: 36, title: "Ruby Resources for ICM InfoWorks", why: "Essential scripting reference" },
                { num: 21, title: "100 SWMM5 Quiz Questions", why: "Test your knowledge" },
                { num: 47, title: "Ruby and ICM Exchange Tables", why: "Data extraction mastery" },
                { num: 30, title: "SWMM5 1D Polygon Networks", why: "Advanced network modeling" },
                { num: 48, title: "ICM SWMM5 Networks with Ruby", why: "Ruby scripting deep dive" },
              ].map((item) => (
                <a
                  key={item.num}
                  href={newsletters.find(n => n.issueNumber === item.num)?.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 p-3 rounded-lg bg-background/60 hover:bg-primary/5 border border-transparent hover:border-primary/20 transition-all group"
                  data-testid={`essential-read-${item.num}`}
                >
                  <span className="text-lg font-bold text-primary/70 group-hover:text-primary transition-colors">#{item.num}</span>
                  <div className="min-w-0">
                    <h4 className="font-medium text-sm leading-tight group-hover:text-primary transition-colors line-clamp-2">{item.title}</h4>
                    <p className="text-xs text-muted-foreground mt-1">{item.why}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Global Search */}
          <div className="mb-8">
            <GlobalSearch />
          </div>

          {/* Tab Filters */}
          <div className="space-y-4">
            <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
              <div className="relative flex-grow max-w-md">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input 
                  placeholder="Filter current tab..." 
                  className="pl-10 bg-background/50 border-primary/20 focus-visible:ring-primary/20"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  data-testid="input-search"
                />
              </div>
              <div className="flex items-center gap-2">
                <SortAsc className="w-4 h-4 text-muted-foreground" />
                <select 
                  value={sortOrder} 
                  onChange={(e) => setSortOrder(e.target.value as "newest" | "oldest")}
                  className="text-sm bg-background border border-border rounded-md px-3 py-2"
                  data-testid="select-sort-order"
                >
                  <option value="newest">Newest First</option>
                  <option value="oldest">Oldest First (Recommended for Learning)</option>
                </select>
              </div>
            </div>

            {/* Category Filters - More Prominent */}
            <div className="bg-card/40 rounded-lg p-4 border border-border">
              <div className="flex items-center gap-2 mb-3">
                <Filter className="w-4 h-4 text-muted-foreground" />
                <span className="text-sm font-medium">Filter by Topic:</span>
                {selectedCategory && (
                  <Badge variant="default" className="ml-2">
                    {selectedCategory}
                    <button onClick={() => setSelectedCategory(null)} className="ml-1">
                      <X className="w-3 h-3" />
                    </button>
                  </Badge>
                )}
              </div>
              <div className="flex flex-wrap gap-2">
                {ALL_CATEGORIES.map((cat) => (
                  <Button
                    key={cat}
                    variant={selectedCategory === cat ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedCategory(selectedCategory === cat ? null : cat)}
                    className={`text-xs transition-all ${selectedCategory === cat ? 'ring-2 ring-primary/50' : 'hover:bg-primary/10'}`}
                    data-testid={`filter-${cat.toLowerCase().replace(/[^a-z]/g, '-')}`}
                  >
                    {cat}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full max-w-6xl mx-auto grid-cols-9 mb-12">
            <TabsTrigger value="newsletters" data-testid="tab-newsletters">Newsletters</TabsTrigger>
            <TabsTrigger value="articles" data-testid="tab-articles">Articles</TabsTrigger>
            <TabsTrigger value="posts" data-testid="tab-posts">Posts</TabsTrigger>
            <TabsTrigger value="documents" data-testid="tab-documents">Documents</TabsTrigger>
            <TabsTrigger value="apps" data-testid="tab-apps">
              <AppWindow className="w-4 h-4 mr-1" /> Apps
            </TabsTrigger>
            <TabsTrigger value="tools" data-testid="tab-tools">
              <Wrench className="w-4 h-4 mr-1" /> Tools
            </TabsTrigger>
            <TabsTrigger value="quiz" data-testid="tab-quiz">
              <Brain className="w-4 h-4 mr-1" /> Quiz
            </TabsTrigger>
            <TabsTrigger value="paths" data-testid="tab-paths">
              <GraduationCap className="w-4 h-4 mr-1" /> Paths
            </TabsTrigger>
            <TabsTrigger value="repos" data-testid="tab-repos">
              <Github className="w-4 h-4 mr-1" /> Repos
            </TabsTrigger>
          </TabsList>

          <TabsContent value="newsletters" data-testid="content-newsletters">
            <div className="flex justify-between items-center mb-6">
              <p className="text-sm text-muted-foreground">{filteredNewsletters.length} newsletters</p>
              <div className="flex items-center gap-2">
                <span className="text-xs text-muted-foreground">View:</span>
                <Button
                  variant={viewMode === "grid" ? "default" : "outline"}
                  size="sm"
                  onClick={() => setViewMode("grid")}
                  className="h-8 w-8 p-0"
                  data-testid="button-view-grid"
                >
                  <LayoutGrid className="w-4 h-4" />
                </Button>
                <Button
                  variant={viewMode === "list" ? "default" : "outline"}
                  size="sm"
                  onClick={() => setViewMode("list")}
                  className="h-8 w-8 p-0"
                  data-testid="button-view-list"
                >
                  <List className="w-4 h-4" />
                </Button>
              </div>
            </div>
            {filteredNewsletters.length > 0 ? (
              viewMode === "grid" ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredNewsletters.map((newsletter, index) => (
                    <NewsletterCard 
                      key={newsletter.id} 
                      newsletter={newsletter} 
                      index={index} 
                    />
                  ))}
                </div>
              ) : (
                <div className="space-y-2 bg-card/50 rounded-lg border border-border p-4">
                  {filteredNewsletters.map((newsletter) => (
                    <a 
                      key={newsletter.id}
                      href={newsletter.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between p-3 rounded-md hover:bg-primary/5 transition-colors group"
                    >
                      <div className="flex items-center gap-4 flex-grow min-w-0">
                        <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded shrink-0">
                          #{newsletter.issueNumber}
                        </span>
                        <div className="min-w-0 flex-grow">
                          <h4 className="font-medium text-sm group-hover:text-primary transition-colors truncate">
                            {newsletter.title}
                          </h4>
                          <p className="text-xs text-muted-foreground truncate">{newsletter.description}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3 shrink-0 ml-4">
                        <Badge variant="outline" className="text-xs hidden sm:inline-flex">{newsletter.categories[0]}</Badge>
                        <span className="text-xs text-muted-foreground hidden md:inline">{newsletter.date}</span>
                      </div>
                    </a>
                  ))}
                </div>
              )
            ) : (
              <div className="text-center py-20">
                <p className="text-muted-foreground font-serif italic">No newsletters found matching your search.</p>
              </div>
            )}
          </TabsContent>

          <TabsContent value="articles" data-testid="content-articles">
            {filteredArticles.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredArticles.map((article, index) => (
                  <ArticleCard 
                    key={article.id} 
                    article={article} 
                    index={index} 
                  />
                ))}
              </div>
            ) : (
              <div className="text-center py-20">
                <p className="text-muted-foreground font-serif italic">No articles found matching your search.</p>
              </div>
            )}
          </TabsContent>

          <TabsContent value="posts" data-testid="content-posts">
            {filteredPosts.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredPosts.map((post, index) => (
                  <PostCard 
                    key={post.id} 
                    post={post} 
                    index={index} 
                  />
                ))}
              </div>
            ) : (
              <div className="text-center py-20">
                <p className="text-muted-foreground font-serif italic">No posts found matching your search.</p>
              </div>
            )}
          </TabsContent>

          <TabsContent value="documents" data-testid="content-documents">
            {filteredDocuments.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredDocuments.map((document, index) => (
                  <DocumentCard 
                    key={document.id} 
                    document={document} 
                    index={index} 
                  />
                ))}
              </div>
            ) : (
              <div className="text-center py-20">
                <p className="text-muted-foreground font-serif italic">No documents found matching your search.</p>
              </div>
            )}
          </TabsContent>

          <TabsContent value="apps" data-testid="content-apps">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-serif font-medium mb-2">Featured Web Apps</h3>
                <p className="text-muted-foreground">Interactive tools and explorers for SWMM5, stormwater modeling, and hydraulic engineering — all running in your browser.</p>
                <Badge variant="secondary" className="mt-3 bg-primary/10 text-primary">
                  {featuredApps.length} Apps
                </Badge>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {featuredApps.map((app) => (
                  <a
                    key={app.id}
                    href={app.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group bg-card/60 border border-border rounded-xl overflow-hidden hover:shadow-lg hover:border-primary/30 hover:-translate-y-1 transition-all duration-200"
                    data-testid={`app-card-${app.id}`}
                  >
                    <div className="aspect-[4/3] overflow-hidden bg-muted">
                      <img
                        src={app.imageUrl}
                        alt={app.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        loading="lazy"
                      />
                    </div>
                    <div className="p-4">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-medium text-sm group-hover:text-primary transition-colors line-clamp-1 flex-grow">{app.name}</h4>
                        <span className={`text-[10px] font-semibold uppercase tracking-wider px-1.5 py-0.5 rounded flex-shrink-0 ml-2 ${
                          app.platform === "Replit" 
                            ? "bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300" 
                            : app.platform === "Lovable"
                            ? "bg-pink-100 text-pink-700 dark:bg-pink-900 dark:text-pink-300"
                            : "bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300"
                        }`}>
                          {app.platform}
                        </span>
                      </div>
                      <p className="text-xs text-muted-foreground leading-relaxed line-clamp-2 mb-3">{app.description}</p>
                      <div className="flex items-center justify-between">
                        <div className="flex gap-1.5 flex-wrap">
                          {app.categories.map(c => (
                            <span key={c} className="text-[10px] px-2 py-0.5 rounded-full bg-muted text-muted-foreground">{c}</span>
                          ))}
                        </div>
                        <ExternalLink className="w-3.5 h-3.5 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0" />
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </TabsContent>

          <TabsContent value="tools" data-testid="content-tools">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-serif font-medium mb-2">Scripts & Utilities</h3>
                <p className="text-muted-foreground">Practical tools for SWMM5 and ICM automation. Copy code snippets or download full scripts.</p>
                <Badge variant="secondary" className="mt-3 bg-yellow-500/20 text-yellow-600 dark:text-yellow-400">
                  Beta - More tools coming soon
                </Badge>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {tools.map((tool) => (
                  <ToolCard key={tool.id} tool={tool} />
                ))}
              </div>
              
              {/* GitHub Community Section */}
              <div className="mt-12 bg-card/60 border border-border rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-gray-900 dark:bg-white p-2 rounded-lg">
                    <Github className="w-5 h-5 text-white dark:text-gray-900" />
                  </div>
                  <div>
                    <h4 className="font-medium">Community Scripts Repository</h4>
                    <p className="text-sm text-muted-foreground">Share your Ruby scripts, SQL queries, and utilities with the community</p>
                  </div>
                </div>
                <div className="bg-background/80 rounded-lg p-4 border border-border">
                  <p className="text-sm mb-4 text-muted-foreground">
                    We're building a community repository for SWMM5 and ICM scripts! Submit your own Ruby scripts, SQL queries, or Python utilities. The best contributions will be featured on this site.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <a 
                      href="https://github.com/SWMM5-ICM-Scripts" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-lg hover:opacity-90 transition-opacity text-sm font-medium"
                      data-testid="link-github-repo"
                    >
                      <Github className="w-4 h-4" />
                      View on GitHub
                      <ExternalLink className="w-3 h-3" />
                    </a>
                    <a 
                      href="https://github.com/SWMM5-ICM-Scripts/issues/new" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 border border-border rounded-lg hover:bg-muted transition-colors text-sm"
                      data-testid="link-submit-script"
                    >
                      Submit Your Script
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="quiz" data-testid="content-quiz">
            <QuizSection />
          </TabsContent>

          <TabsContent value="paths" data-testid="content-paths">
            <div className="max-w-5xl mx-auto space-y-8">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-serif font-medium mb-2">Guided Learning Pathways</h3>
                <p className="text-muted-foreground">Step-by-step sequences curated for different skill levels. Click each step to read.</p>
              </div>
              <div className="space-y-6">
                {learningPaths.map((path) => (
                  <Card key={path.id} className="bg-card/50 backdrop-blur-sm" data-testid={`path-${path.id}`}>
                    <CardHeader>
                      <div className="flex flex-wrap items-center gap-2 mb-2">
                        <Badge 
                          variant="outline" 
                          className={
                            path.difficulty === "beginner" ? "bg-green-500/20 text-green-700 dark:text-green-400 border-green-500/30" :
                            path.difficulty === "intermediate" ? "bg-yellow-500/20 text-yellow-700 dark:text-yellow-400 border-yellow-500/30" :
                            "bg-red-500/20 text-red-700 dark:text-red-400 border-red-500/30"
                          }
                        >
                          {path.difficulty.charAt(0).toUpperCase() + path.difficulty.slice(1)}
                        </Badge>
                        <Badge variant="secondary" className="text-xs">{path.steps.length} steps</Badge>
                        <Badge variant="outline" className="text-xs">{path.estimatedTime}</Badge>
                      </div>
                      <CardTitle className="font-serif text-xl">{path.title}</CardTitle>
                      <CardDescription className="text-sm">{path.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ol className="space-y-3">
                        {path.steps.map((step, idx) => {
                          const newsletter = newsletters.find(n => n.issueNumber.toString() === step.id);
                          return (
                            <li key={idx}>
                              <a 
                                href={newsletter?.link || "#"}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-start gap-4 p-3 rounded-lg bg-background/60 hover:bg-primary/5 border border-transparent hover:border-primary/20 transition-all group"
                                data-testid={`path-step-${path.id}-${idx}`}
                              >
                                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center text-sm font-bold group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                                  {idx + 1}
                                </span>
                                <div className="flex-grow min-w-0">
                                  <h4 className="font-medium text-sm group-hover:text-primary transition-colors">
                                    Edition #{step.id}: {step.title}
                                  </h4>
                                  <p className="text-xs text-muted-foreground mt-0.5">{step.why}</p>
                                </div>
                                <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0 mt-1" />
                              </a>
                            </li>
                          );
                        })}
                      </ol>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </TabsContent>

          <TabsContent value="repos" data-testid="content-repos">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-serif font-medium mb-2">GitHub Repositories</h3>
                <p className="text-muted-foreground">All {githubRepos.length} public repositories from <a href="https://github.com/dickinsonre" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-medium">@dickinsonre</a> — covering SWMM5, ICM, EPANET, Ruby scripting, and more.</p>
                <div className="flex items-center justify-center gap-3 mt-4 flex-wrap">
                  <Badge variant="secondary" className="bg-primary/10 text-primary">
                    {githubRepos.length} Repos
                  </Badge>
                  <Badge variant="outline" className="gap-1">
                    <GitFork className="w-3 h-3" /> {githubRepos.filter(r => r.fork).length} Forks
                  </Badge>
                  <Badge variant="outline" className="gap-1 bg-primary/5 border-primary/30 text-primary">
                    {githubRepos.filter(r => !r.fork).length} Originals
                  </Badge>
                </div>
              </div>

              {/* Filter bar */}
              <div className="flex flex-wrap gap-2 justify-center mb-8">
                {(["All", "Original", "Fork", "SWMM5", "ICM InfoWorks", "Ruby Scripting", "AI/ML", "History", "Code Analysis", "SQL/Data"] as const).map((filter) => {
                  const count = filter === "All" ? githubRepos.length
                    : filter === "Original" ? githubRepos.filter(r => !r.fork).length
                    : filter === "Fork" ? githubRepos.filter(r => r.fork).length
                    : githubRepos.filter(r => r.categories.includes(filter as any)).length;
                  return (
                    <Button
                      key={filter}
                      variant={repoFilter === filter ? "default" : "outline"}
                      size="sm"
                      onClick={() => setRepoFilter(filter)}
                      data-testid={`repo-filter-${filter.toLowerCase().replace(/\s+/g, "-")}`}
                      className="text-xs"
                    >
                      {filter} <span className="ml-1 opacity-70">{count}</span>
                    </Button>
                  );
                })}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {githubRepos
                  .filter(r =>
                    repoFilter === "All" ? true
                    : repoFilter === "Original" ? !r.fork
                    : repoFilter === "Fork" ? r.fork
                    : r.categories.includes(repoFilter as any)
                  )
                  .map((repo, idx) => (
                    <RepoCard key={repo.id} repo={repo} index={idx} />
                  ))
                }
              </div>
            </div>
          </TabsContent>
        </Tabs>

        {/* Ask a Question */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-card/60 border border-border rounded-xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-primary/20 p-2 rounded-full">
                <MessageCircleQuestion className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-serif text-lg font-medium">Ask a Question</h3>
            </div>
            <p className="text-sm text-muted-foreground mb-4">
              Have a question about SWMM5, Ruby scripting, or ICM? Your questions could inspire the next newsletter edition!
            </p>
            <form 
              className="space-y-3"
              onSubmit={(e) => {
                e.preventDefault();
                const form = e.target as HTMLFormElement;
                const name = (form.elements.namedItem('name') as HTMLInputElement).value;
                const question = (form.elements.namedItem('question') as HTMLTextAreaElement).value;
                const subject = encodeURIComponent(`SWMM5/ICM Question from ${name}`);
                const body = encodeURIComponent(`Name: ${name}\n\nQuestion:\n${question}`);
                window.location.href = `mailto:robert.dickinson@gmail.com?subject=${subject}&body=${body}`;
              }}
            >
              <Input 
                type="text" 
                name="name"
                placeholder="Your name" 
                className="bg-background/80"
                data-testid="input-question-name"
                required
              />
              <textarea 
                name="question"
                placeholder="What would you like to know about SWMM5, ICM, or Ruby scripting?"
                className="w-full min-h-[100px] px-3 py-2 text-sm rounded-md border border-input bg-background/80 placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                data-testid="input-question-text"
                required
              />
              <Button type="submit" variant="outline" className="w-full gap-2" data-testid="button-send-question">
                <Send className="w-4 h-4" />
                Send Question
              </Button>
            </form>
            <p className="text-xs text-muted-foreground mt-3 text-center">
              Questions may be featured in "Your Top Questions Answered" editions
            </p>
          </div>

          {/* Newsletter Signup */}
          <div className="bg-primary/10 border border-primary/20 rounded-xl p-6 flex flex-col">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-primary/20 p-2 rounded-full">
                <Mail className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-serif text-lg font-medium">Stay Updated</h3>
            </div>
            <p className="text-sm text-muted-foreground mb-4 flex-grow">
              Get notified when Edition #61 drops. Join fellow stormwater modelers and Ruby scripting enthusiasts.
            </p>
          <form 
            className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
            onSubmit={(e) => {
              e.preventDefault();
              const form = e.target as HTMLFormElement;
              const email = (form.elements.namedItem('email') as HTMLInputElement).value;
              if (email) {
                const subject = encodeURIComponent('New Newsletter Subscriber');
                const body = encodeURIComponent(`New subscriber request:\n\nEmail: ${email}\n\nPlease add them to your newsletter list.`);
                window.location.href = `mailto:robert.dickinson@gmail.com?subject=${subject}&body=${body}`;
              }
            }}
          >
            <Input 
              type="email" 
              name="email"
              placeholder="your@email.com" 
              className="flex-grow bg-background/80"
              data-testid="input-newsletter-email"
              required
            />
            <Button type="submit" className="gap-2" data-testid="button-subscribe">
              <Send className="w-4 h-4" />
              Subscribe
            </Button>
          </form>
          <p className="text-xs text-muted-foreground mt-3 text-center">No spam, ever. Unsubscribe anytime.</p>
          </div>
        </div>

        {/* Footer */}
        <footer className="mt-12 border-t border-border/40 pt-12 pb-8 text-center space-y-4">
          <p className="font-serif text-2xl italic text-primary/80">EPASWMM5 Related Software Library</p>
          <p className="text-sm text-muted-foreground">
            &copy; 2025 Robert Dickinson. All rights reserved. <br />
            Published on LinkedIn.
          </p>
        </footer>
      </main>
    </div>
  );
}
