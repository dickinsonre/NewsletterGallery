import { BookOpen } from "lucide-react";
import bgTexture from "@assets/generated_images/warm,_textured_paper_background_for_a_library_website.png";

export default function Docs() {
  return (
    <div 
      className="min-h-screen w-full"
      style={{ 
        background: 'linear-gradient(135deg, #e0d5f0 0%, #c8b8e8 25%, #b0a0e0 50%, #98a0e8 75%, #a0b0f0 100%)',
        backgroundAttachment: 'fixed'
      }}
    >
      <header className="border-b border-border/40 bg-background/80 backdrop-blur-md sticky top-0 z-50">
        <div className="container mx-auto px-4 h-20 flex items-center justify-between max-w-6xl">
          <div className="flex items-center gap-3">
            <div className="bg-primary text-primary-foreground p-2 rounded-md">
              <BookOpen className="w-6 h-6" />
            </div>
            <div>
              <h1 className="font-serif text-xl font-bold leading-none tracking-tight">SWMM5 and ICM Modeling Expertise</h1>
              <p className="text-xs text-muted-foreground tracking-widest uppercase mt-1">Documentation</p>
            </div>
          </div>
          
          <nav className="hidden md:flex gap-6 text-sm font-medium text-muted-foreground items-center">
            <a href="/" className="hover:text-primary transition-colors">Library</a>
            <a href="/docs" className="text-primary">Docs</a>
          </nav>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12 max-w-6xl">
        <div className="max-w-4xl mx-auto space-y-8">
          <h2 className="text-4xl md:text-5xl font-serif font-medium text-foreground leading-tight text-center">
            Source Code Documentation
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed text-center max-w-2xl mx-auto">
            This section provides documentation and visual guides for the source code that powers this library.
          </p>

          <div className="bg-card/50 backdrop-blur-sm border border-border rounded-lg p-8 space-y-4">
            <h3 className="text-2xl font-serif font-medium text-foreground">Architecture Overview</h3>
            <p className="text-muted-foreground leading-relaxed">
              This application is built with a modern React frontend and Node.js backend, designed to showcase Robert Dickinson's expertise in SWMM5 and ICM modeling. The content is organized into three main sections: Newsletters, LinkedIn Articles, and Technical Documents, all stored in a PostgreSQL database and served through a RESTful API.
            </p>
          </div>

          <div className="bg-card/50 backdrop-blur-sm border border-border rounded-lg p-8 space-y-4">
            <h3 className="text-2xl font-serif font-medium text-foreground">Technology Stack</h3>
            <ul className="text-muted-foreground leading-relaxed space-y-2">
              <li>• <strong>Frontend:</strong> React with TypeScript, Tailwind CSS, and Radix UI components</li>
              <li>• <strong>Backend:</strong> Express.js with Node.js</li>
              <li>• <strong>Database:</strong> PostgreSQL with Drizzle ORM</li>
              <li>• <strong>Styling:</strong> Tailwind CSS with custom theme configuration</li>
              <li>• <strong>Routing:</strong> Wouter for client-side routing</li>
            </ul>
          </div>

          <div className="text-center pt-8">
            <a href="/" className="inline-block bg-primary text-primary-foreground px-8 py-3 rounded-md font-medium hover:bg-primary/90 transition-colors">
              Back to Library
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}
