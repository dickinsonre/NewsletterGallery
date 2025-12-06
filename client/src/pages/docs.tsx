import { BookOpen, Newspaper, FileText, FolderOpen, Filter, GraduationCap, Moon, Search, Tag } from "lucide-react";

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
            Library Documentation
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed text-center max-w-2xl mx-auto">
            A comprehensive guide to the SWMM5 and ICM Modeling Expertise library, featuring Robert Dickinson's curated collection of stormwater modeling resources.
          </p>

          <div className="bg-card/50 backdrop-blur-sm border border-border rounded-lg p-8 space-y-4">
            <h3 className="text-2xl font-serif font-medium text-foreground">About This Library</h3>
            <p className="text-muted-foreground leading-relaxed">
              This digital library showcases over 17 years of expertise in stormwater modeling, hydraulic analysis, and water infrastructure software development. Created by Robert Dickinson, Autodesk Water Technologist, the collection spans topics from SWMM5 fundamentals to advanced Ruby scripting for ICM InfoWorks automation.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              The library serves as a comprehensive resource for engineers, modelers, and students looking to deepen their understanding of stormwater management software and techniques.
            </p>
          </div>

          <div className="bg-card/50 backdrop-blur-sm border border-border rounded-lg p-8 space-y-6">
            <h3 className="text-2xl font-serif font-medium text-foreground">Content Organization</h3>
            <p className="text-muted-foreground leading-relaxed">
              Content is organized into three main sections, each accessible via tabs on the home page:
            </p>
            
            <div className="grid gap-4 md:grid-cols-3">
              <div className="bg-background/50 rounded-lg p-4 space-y-2">
                <div className="flex items-center gap-2 text-primary">
                  <Newspaper className="w-5 h-5" />
                  <span className="font-medium">Newsletters</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  48 editions of "The Time-Traveling Hydraulic Engineer" covering SWMM5 history, ICM techniques, Ruby scripting, and AI integration.
                </p>
              </div>
              
              <div className="bg-background/50 rounded-lg p-4 space-y-2">
                <div className="flex items-center gap-2 text-primary">
                  <FileText className="w-5 h-5" />
                  <span className="font-medium">LinkedIn Articles</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  146 technical articles covering specific modeling scenarios, code examples, quiz questions, and practical tutorials.
                </p>
              </div>
              
              <div className="bg-background/50 rounded-lg p-4 space-y-2">
                <div className="flex items-center gap-2 text-primary">
                  <FolderOpen className="w-5 h-5" />
                  <span className="font-medium">Documents</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  Technical PDFs and reference guides for model migration, stream restoration, and SWMM5 import/export procedures.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-card/50 backdrop-blur-sm border border-border rounded-lg p-8 space-y-6">
            <h3 className="text-2xl font-serif font-medium text-foreground">Features</h3>
            
            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Tag className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium text-foreground">Category System</h4>
                  <p className="text-sm text-muted-foreground">
                    All content is tagged with categories like Ruby Scripting, SWMM5, ICM InfoWorks, SQL/Data, AI/ML, History, Migration, Quiz, Code Analysis, and Model Testing. Filter by category to find exactly what you need.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                  <GraduationCap className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium text-foreground">Learning Paths</h4>
                  <p className="text-sm text-muted-foreground">
                    Curated learning sequences for different skill levels and goals: Getting Started with SWMM5 (beginner), Ruby Scripting Mastery (intermediate), Model Migration Guide, Advanced Hydraulics & Code, and AI-Assisted Modeling.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Filter className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium text-foreground">Difficulty Levels</h4>
                  <p className="text-sm text-muted-foreground">
                    Content is marked as Beginner, Intermediate, or Advanced to help you find material appropriate for your experience level. Look for color-coded badges on each card.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Search className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium text-foreground">Search & Filter</h4>
                  <p className="text-sm text-muted-foreground">
                    Use the search bar to find content by title, description, or keywords. Combine with category filters to narrow down results quickly.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Moon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium text-foreground">Dark Mode</h4>
                  <p className="text-sm text-muted-foreground">
                    Toggle between light and dark themes using the sun/moon icon in the navigation bar. Your preference is saved for future visits.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-card/50 backdrop-blur-sm border border-border rounded-lg p-8 space-y-4">
            <h3 className="text-2xl font-serif font-medium text-foreground">Topic Coverage</h3>
            <div className="grid gap-3 md:grid-cols-2">
              <div className="space-y-2">
                <h4 className="font-medium text-foreground text-sm uppercase tracking-wider">SWMM5 & Hydraulics</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Storm Water Management Model history & evolution</li>
                  <li>• Hydraulic engine internals and C code analysis</li>
                  <li>• Flow routing algorithms and hydrology</li>
                  <li>• Classic test files and validation</li>
                </ul>
              </div>
              <div className="space-y-2">
                <h4 className="font-medium text-foreground text-sm uppercase tracking-wider">ICM InfoWorks</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Model building and network configuration</li>
                  <li>• Ruby scripting for automation</li>
                  <li>• SQL queries for data extraction</li>
                  <li>• Results analysis and reporting</li>
                </ul>
              </div>
              <div className="space-y-2">
                <h4 className="font-medium text-foreground text-sm uppercase tracking-wider">Model Migration</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• InfoSewer to ICM migration</li>
                  <li>• InfoSWMM to ICM conversion</li>
                  <li>• SWMM5 import/export procedures</li>
                  <li>• DWF troubleshooting guides</li>
                </ul>
              </div>
              <div className="space-y-2">
                <h4 className="font-medium text-foreground text-sm uppercase tracking-wider">Advanced Topics</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• AI and machine learning integration</li>
                  <li>• Statistical analysis methods</li>
                  <li>• Batch processing and automation</li>
                  <li>• Quiz questions for self-assessment</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-card/50 backdrop-blur-sm border border-border rounded-lg p-8 space-y-4">
            <h3 className="text-2xl font-serif font-medium text-foreground">Technology Stack</h3>
            <ul className="text-muted-foreground leading-relaxed space-y-2">
              <li>• <strong>Frontend:</strong> React 18 with TypeScript for type-safe development</li>
              <li>• <strong>Styling:</strong> Tailwind CSS with custom water-themed color palette</li>
              <li>• <strong>Components:</strong> Radix UI primitives with Shadcn/ui styling</li>
              <li>• <strong>Animations:</strong> Framer Motion for smooth transitions</li>
              <li>• <strong>Routing:</strong> Wouter for lightweight client-side navigation</li>
              <li>• <strong>State:</strong> TanStack Query for server state management</li>
              <li>• <strong>Backend:</strong> Express.js with Node.js</li>
              <li>• <strong>Build:</strong> Vite for fast development and optimized production builds</li>
            </ul>
          </div>

          <div className="bg-card/50 backdrop-blur-sm border border-border rounded-lg p-8 space-y-4">
            <h3 className="text-2xl font-serif font-medium text-foreground">Getting Started</h3>
            <ol className="text-muted-foreground leading-relaxed space-y-3 list-decimal list-inside">
              <li><strong>Browse the Library:</strong> Start on the home page and explore newsletters, articles, or documents using the tabs.</li>
              <li><strong>Use Filters:</strong> Click category buttons to filter content by topic. Use the search bar for keyword searches.</li>
              <li><strong>Try Learning Paths:</strong> If you're new to SWMM5 or want structured learning, check the Learning Paths tab for curated sequences.</li>
              <li><strong>Adjust Theme:</strong> Use the theme toggle in the navigation to switch between light and dark modes.</li>
              <li><strong>Subscribe:</strong> Click "Subscribe" in the navigation to follow the newsletter on LinkedIn for new editions.</li>
            </ol>
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
