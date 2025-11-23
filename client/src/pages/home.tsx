import { newsletters } from "@/lib/data";
import { NewsletterCard } from "@/components/newsletter-card";
import bgTexture from "@assets/generated_images/warm,_textured_paper_background_for_a_library_website.png";
import { BookOpen, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useState } from "react";

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredNewsletters = newsletters.filter(n => 
    n.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    n.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div 
      className="min-h-screen w-full bg-repeat"
      style={{ 
        backgroundImage: `url(${bgTexture})`,
        backgroundSize: '500px'
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
              <h1 className="font-serif text-xl font-bold leading-none tracking-tight">The Archive</h1>
              <p className="text-xs text-muted-foreground tracking-widest uppercase mt-1">Newsletter Library</p>
            </div>
          </div>
          
          <nav className="hidden md:flex gap-6 text-sm font-medium text-muted-foreground">
            <a href="#" className="text-foreground hover:text-primary transition-colors">Library</a>
            <a href="#" className="hover:text-primary transition-colors">About</a>
            <a href="#" className="hover:text-primary transition-colors">Subscribe</a>
          </nav>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12 max-w-6xl">
        {/* Hero / Intro */}
        <div className="max-w-2xl mx-auto text-center mb-16 space-y-6">
          <h2 className="text-4xl md:text-5xl font-serif font-medium text-foreground leading-tight">
            A curated collection of thoughts on leadership, technology, and design.
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Explore the archive of newsletters. A digital library dedicated to understanding 
            the complex systems that shape our modern world.
          </p>
          
          <div className="relative max-w-md mx-auto pt-4">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input 
              placeholder="Search the archives..." 
              className="pl-10 bg-background/50 border-primary/20 focus-visible:ring-primary/20 font-serif"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        {/* Grid */}
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
            <p className="text-muted-foreground font-serif italic">No volumes found matching your search.</p>
          </div>
        )}

        {/* Footer */}
        <footer className="mt-24 border-t border-border/40 pt-12 pb-8 text-center space-y-4">
          <p className="font-serif text-2xl italic text-primary/80">The Archive</p>
          <p className="text-sm text-muted-foreground">
            &copy; 2025. All rights reserved. <br />
            Published on LinkedIn.
          </p>
        </footer>
      </main>
    </div>
  );
}
