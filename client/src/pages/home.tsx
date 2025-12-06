import { newsletters, linkedInArticles, documents, ALL_CATEGORIES, learningPaths, Category } from "@/lib/data";
import { NewsletterCard } from "@/components/newsletter-card";
import { ArticleCard } from "@/components/article-card";
import { DocumentCard } from "@/components/document-card";
import robertPhoto from "@assets/image_1763939729281.png";
import timeEngineerImage from "@assets/image_1764203582124.png";
import { BookOpen, Search, GraduationCap, Filter, X } from "lucide-react";
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

  const filteredNewsletters = newsletters.filter(n => {
    const matchesSearch = n.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      n.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = !selectedCategory || n.categories.includes(selectedCategory);
    return matchesSearch && matchesCategory;
  });

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
        {/* Hero / Intro */}
        <div className="max-w-4xl mx-auto text-center mb-16 space-y-8">
          <div className="w-full rounded-lg overflow-hidden shadow-2xl border border-border/50">
            <img src={timeEngineerImage} alt="Time-Traveling Hydraulic Engineer" className="w-full h-auto" />
          </div>

          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-serif font-medium text-foreground leading-tight">
              A collection of thoughts on stormwater, modeling, and engineering history from an ICM and SWMM5 perspective
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              Explore the archive of newsletters by Robert Dickinson. A digital library dedicated to understanding 
              the complex systems of water management and the software that powers them.
            </p>
            
            <div className="relative max-w-md mx-auto pt-4">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input 
                placeholder="Search the archives..." 
                className="pl-10 bg-background/50 border-primary/20 focus-visible:ring-primary/20 font-serif"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                data-testid="input-search"
              />
            </div>

            {/* Category Filters */}
            <div className="flex flex-wrap justify-center gap-2 pt-6">
              {ALL_CATEGORIES.map((cat) => (
                <Button
                  key={cat}
                  variant={selectedCategory === cat ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(selectedCategory === cat ? null : cat)}
                  className="text-xs"
                  data-testid={`filter-${cat.toLowerCase().replace(/[^a-z]/g, '-')}`}
                >
                  {cat}
                </Button>
              ))}
              {(selectedCategory || searchQuery) && (
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={clearFilters}
                  className="text-xs text-muted-foreground"
                  data-testid="button-clear-filters"
                >
                  <X className="w-3 h-3 mr-1" /> Clear
                </Button>
              )}
            </div>
          </div>
        </div>

        {/* Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full max-w-2xl mx-auto grid-cols-4 mb-12">
            <TabsTrigger value="newsletters" data-testid="tab-newsletters">Newsletters</TabsTrigger>
            <TabsTrigger value="articles" data-testid="tab-articles">Articles</TabsTrigger>
            <TabsTrigger value="documents" data-testid="tab-documents">Documents</TabsTrigger>
            <TabsTrigger value="paths" data-testid="tab-paths">
              <GraduationCap className="w-4 h-4 mr-1" /> Paths
            </TabsTrigger>
          </TabsList>

          <TabsContent value="newsletters" data-testid="content-newsletters">
            {filteredNewsletters.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredNewsletters.map((newsletter, index) => (
                  <NewsletterCard 
                    key={newsletter.id} 
                    newsletter={newsletter} 
                    index={index} 
                  />
                ))}
              </div>
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
