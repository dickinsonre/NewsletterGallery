import { newsletters, linkedInArticles, documents, linkedInPosts, tools, ALL_CATEGORIES, learningPaths, Category } from "@/lib/data";
import { NewsletterCard } from "@/components/newsletter-card";
import { ArticleCard } from "@/components/article-card";
import { DocumentCard } from "@/components/document-card";
import { PostCard } from "@/components/post-card";
import { ToolCard } from "@/components/tool-card";
import robertPhoto from "@assets/image_1763939729281.png";
import timeEngineerImage from "@assets/image_1764203582124.png";
import { BookOpen, Search, GraduationCap, Filter, X, ArrowRight, SortAsc, LayoutGrid, List, Wrench } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ThemeToggle } from "@/components/theme-toggle";
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
  const [searchQuery, setSearchQuery] = useState("");
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("newsletters");
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(null);
  const [sortOrder, setSortOrder] = useState<"newest" | "oldest">("newest");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  const filteredNewsletters = newsletters.filter(n => {
    const matchesSearch = n.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      n.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = !selectedCategory || n.categories.includes(selectedCategory);
    return matchesSearch && matchesCategory;
  }).sort((a, b) => sortOrder === "oldest" ? a.issueNumber - b.issueNumber : b.issueNumber - a.issueNumber);

  const filteredArticles = linkedInArticles.filter(a => {
    const matchesSearch = a.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      a.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = !selectedCategory || a.categories.includes(selectedCategory);
    return matchesSearch && matchesCategory;
  });

  const filteredDocuments = documents.filter(d => {
    const matchesSearch = d.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      d.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = !selectedCategory || d.categories.includes(selectedCategory);
    return matchesSearch && matchesCategory;
  });

  const filteredPosts = linkedInPosts.filter(p => {
    const matchesSearch = p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = !selectedCategory || p.categories.includes(selectedCategory);
    return matchesSearch && matchesCategory;
  });

  const clearFilters = () => {
    setSearchQuery("");
    setSelectedCategory(null);
  };

  return (
    <div 
      className="min-h-screen w-full"
      style={{ 
        background: 'linear-gradient(135deg, #e0d5f0 0%, #c8b8e8 25%, #b0a0e0 50%, #98a0e8 75%, #a0b0f0 100%)',
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
              <h1 className="font-serif text-xl font-bold leading-none tracking-tight">SWMM5 and ICM Modeling Expertise</h1>
              <p className="text-xs text-muted-foreground tracking-widest uppercase mt-1">Newsletter Archive</p>
            </div>
          </div>
          
          <nav className="hidden md:flex gap-6 text-sm font-medium text-muted-foreground items-center">
            <a href="/" className="text-foreground hover:text-primary transition-colors">Library</a>
            
            <a href="/docs" className="hover:text-primary transition-colors">Docs</a>
            
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
                      <span className="bg-secondary px-3 py-1 rounded-full text-secondary-foreground">SWMM (50+ yrs)</span>
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

            <a href="https://www.linkedin.com/newsletters/7159940733972434944/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
              Subscribe
            </a>

            <a href="https://www.linkedin.com/in/robert-dickinson-899011/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
              LinkedIn
            </a>
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
                  <span className="font-medium text-foreground">50+ years of SWMM expertise</span> — from punch cards in 1978 to modern ICM InfoWorks. 
                  A searchable repository of technical insights on hydraulic modeling.
                </p>
                <div className="flex flex-wrap justify-center md:justify-start gap-2 text-xs">
                  <Badge variant="secondary">Autodesk Water Technologist</Badge>
                  <Badge variant="secondary">17+ yrs at Innovyze</Badge>
                  <Badge variant="secondary">{newsletters.length} Newsletters</Badge>
                  <Badge variant="secondary">{linkedInArticles.length} Articles</Badge>
                </div>
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

          {/* Search and Filters */}
          <div className="space-y-4">
            <div className="flex flex-col sm:flex-row gap-4 items-center">
              <div className="relative flex-grow max-w-md">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input 
                  placeholder="Search by title, topic, or keyword..." 
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
          <TabsList className="grid w-full max-w-4xl mx-auto grid-cols-6 mb-12">
            <TabsTrigger value="newsletters" data-testid="tab-newsletters">Newsletters</TabsTrigger>
            <TabsTrigger value="articles" data-testid="tab-articles">Articles</TabsTrigger>
            <TabsTrigger value="posts" data-testid="tab-posts">Posts</TabsTrigger>
            <TabsTrigger value="documents" data-testid="tab-documents">Documents</TabsTrigger>
            <TabsTrigger value="tools" data-testid="tab-tools">
              <Wrench className="w-4 h-4 mr-1" /> Tools
            </TabsTrigger>
            <TabsTrigger value="paths" data-testid="tab-paths">
              <GraduationCap className="w-4 h-4 mr-1" /> Paths
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
            </div>
          </TabsContent>

          <TabsContent value="paths" data-testid="content-paths">
            <div className="max-w-4xl mx-auto space-y-8">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-serif font-medium mb-2">Learning Pathways</h3>
                <p className="text-muted-foreground">Structured learning paths to guide your journey through stormwater modeling.</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {learningPaths.map((path) => (
                  <Card key={path.id} className="bg-card/50 backdrop-blur-sm hover:bg-card transition-colors">
                    <CardHeader>
                      <div className="flex items-center justify-between mb-2">
                        <Badge 
                          variant="outline" 
                          className={
                            path.difficulty === "beginner" ? "bg-green-500/20 text-green-700 border-green-500/30" :
                            path.difficulty === "intermediate" ? "bg-yellow-500/20 text-yellow-700 border-yellow-500/30" :
                            "bg-red-500/20 text-red-700 border-red-500/30"
                          }
                        >
                          {path.difficulty.charAt(0).toUpperCase() + path.difficulty.slice(1)}
                        </Badge>
                        <span className="text-xs text-muted-foreground">{path.steps.length} steps</span>
                      </div>
                      <CardTitle className="font-serif text-lg">{path.title}</CardTitle>
                      <CardDescription>{path.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ol className="space-y-2">
                        {path.steps.map((step, idx) => (
                          <li key={idx} className="flex items-start gap-3 text-sm">
                            <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 text-primary flex items-center justify-center text-xs font-medium">
                              {idx + 1}
                            </span>
                            <span className="text-muted-foreground pt-0.5">{step.title}</span>
                          </li>
                        ))}
                      </ol>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </TabsContent>
        </Tabs>

        {/* Footer */}
        <footer className="mt-24 border-t border-border/40 pt-12 pb-8 text-center space-y-4">
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
