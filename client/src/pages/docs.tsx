import { BookOpen, Newspaper, FileText, FolderOpen, Filter, GraduationCap, Moon, Search, Tag, AppWindow, Wrench, Brain, Route, MessageCircleQuestion, Palette } from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";
import { useTheme, colorSchemes } from "@/components/theme-provider";

export default function Docs() {
  const { colorScheme } = useTheme();
  const currentGradient = colorSchemes[colorScheme].gradient;

  return (
    <div 
      className="min-h-screen w-full"
      style={{ 
        background: currentGradient,
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
              <h1 className="font-serif text-xl font-bold leading-none tracking-tight">SWMM5, ICM, XPSWMM, InfoSewer & InfoSWMM Modeling</h1>
              <p className="text-xs text-muted-foreground tracking-widest uppercase mt-1">Documentation</p>
            </div>
          </div>
          
          <nav className="hidden md:flex gap-6 text-sm font-medium text-muted-foreground items-center">
            <a href="/" className="hover:text-primary transition-colors">Library</a>
            <a href="/docs" className="text-primary">Docs</a>
            <ThemeToggle />
          </nav>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12 max-w-6xl">
        <div className="max-w-4xl mx-auto space-y-8">
          <h2 className="text-4xl md:text-5xl font-serif font-medium text-foreground leading-tight text-center">
            Library Documentation
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed text-center max-w-2xl mx-auto">
            A comprehensive guide to the SWMM5, ICM, XPSWMM, InfoSewer & InfoSWMM Modeling library, featuring Robert Dickinson's curated collection of stormwater modeling resources.
          </p>

          <div className="bg-card/50 backdrop-blur-sm border border-border rounded-lg p-8 space-y-4">
            <h3 className="text-2xl font-serif font-medium text-foreground">About This Library</h3>
            <p className="text-muted-foreground leading-relaxed">
              This digital library showcases 53+ years of expertise in stormwater modeling, hydraulic analysis, and water infrastructure software development. Created by Robert Dickinson, Autodesk Water Technologist, the collection spans topics from SWMM5 fundamentals to advanced Ruby scripting for ICM InfoWorks automation, XPSWMM model conversion, and InfoSewer/InfoSWMM migration.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              The library serves as a comprehensive resource for engineers, modelers, and students looking to deepen their understanding of stormwater management software and techniques.
            </p>
          </div>

          <div className="bg-card/50 backdrop-blur-sm border border-border rounded-lg p-8 space-y-6">
            <h3 className="text-2xl font-serif font-medium text-foreground">Content Organization</h3>
            <p className="text-muted-foreground leading-relaxed">
              Content is organized into eight main sections, each accessible via tabs on the home page:
            </p>
            
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              <div className="bg-background/50 rounded-lg p-4 space-y-2">
                <div className="flex items-center gap-2 text-primary">
                  <Newspaper className="w-5 h-5" />
                  <span className="font-medium">Newsletters</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  58 editions of "The Time-Traveling Hydraulic Engineer" covering SWMM5 history, ICM techniques, Ruby scripting, and AI integration.
                </p>
              </div>
              
              <div className="bg-background/50 rounded-lg p-4 space-y-2">
                <div className="flex items-center gap-2 text-primary">
                  <FileText className="w-5 h-5" />
                  <span className="font-medium">Articles</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  154 LinkedIn technical articles covering specific modeling scenarios, code examples, quiz questions, and practical tutorials.
                </p>
              </div>

              <div className="bg-background/50 rounded-lg p-4 space-y-2">
                <div className="flex items-center gap-2 text-primary">
                  <MessageCircleQuestion className="w-5 h-5" />
                  <span className="font-medium">Posts</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  Short-form LinkedIn posts with quick tips, insights, and community discussions on stormwater modeling topics.
                </p>
              </div>
              
              <div className="bg-background/50 rounded-lg p-4 space-y-2">
                <div className="flex items-center gap-2 text-primary">
                  <FolderOpen className="w-5 h-5" />
                  <span className="font-medium">Documents</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  20 technical PDFs and reference guides for model migration, stream restoration, and SWMM5 import/export procedures.
                </p>
              </div>

              <div className="bg-background/50 rounded-lg p-4 space-y-2">
                <div className="flex items-center gap-2 text-primary">
                  <AppWindow className="w-5 h-5" />
                  <span className="font-medium">Apps</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  13 featured web applications for SWMM5 simulation, model conversion, code analysis, and interactive exploration.
                </p>
              </div>

              <div className="bg-background/50 rounded-lg p-4 space-y-2">
                <div className="flex items-center gap-2 text-primary">
                  <Wrench className="w-5 h-5" />
                  <span className="font-medium">Tools</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  45 scripts, calculators, and Claude artifacts including Manning's equation explorers, HEC-22 inlet calculators, Ruby exporters, and more.
                </p>
              </div>

              <div className="bg-background/50 rounded-lg p-4 space-y-2">
                <div className="flex items-center gap-2 text-primary">
                  <Brain className="w-5 h-5" />
                  <span className="font-medium">Quiz</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  30 quiz questions across 6 categories and 3 difficulty levels to test your knowledge of SWMM5, hydraulics, ICM, and Ruby scripting.
                </p>
              </div>

              <div className="bg-background/50 rounded-lg p-4 space-y-2">
                <div className="flex items-center gap-2 text-primary">
                  <Route className="w-5 h-5" />
                  <span className="font-medium">Learning Paths</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  Curated step-by-step learning sequences for beginners through advanced users, with estimated times and rationale for each step.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-card/50 backdrop-blur-sm border border-border rounded-lg p-8 space-y-6">
            <h3 className="text-2xl font-serif font-medium text-foreground">Features</h3>
            
            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Search className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium text-foreground">Global Search</h4>
                  <p className="text-sm text-muted-foreground">
                    Powerful search across all content types with relevance scoring, multi-word matching, type/category/difficulty filters with counts, keyboard navigation, and smart snippets highlighting matched terms.
                  </p>
                </div>
              </div>

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
                  <Palette className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium text-foreground">11 Color Themes</h4>
                  <p className="text-sm text-muted-foreground">
                    Choose from 11 color themes: Water Blue, Forest Green, Sunset Orange, Deep Ocean, Lavender Dreams, Classic Gray, Dark Mode, EPA, UF Gators, OSU Buckeyes, and Auburn Tigers. Toggle dark/light mode separately or use the dedicated Dark Mode theme. Your preferences are saved for future visits.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Brain className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium text-foreground">Interactive Quiz</h4>
                  <p className="text-sm text-muted-foreground">
                    Test your knowledge with 30 questions across SWMM5 Fundamentals, Hydraulics & Hydrology, ICM InfoWorks, Ruby Scripting, Model Testing, and History. Tracks your high score with localStorage.
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
                  <li>• Storm Water Management Model history & evolution (SWMM1-SWMM5)</li>
                  <li>• Hydraulic engine internals and C code analysis</li>
                  <li>• Dynamic wave routing & Saint-Venant equations</li>
                  <li>• Manning's equation, SCS methods, and design storms</li>
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
                  <li>• Manhole and inlet design</li>
                </ul>
              </div>
              <div className="space-y-2">
                <h4 className="font-medium text-foreground text-sm uppercase tracking-wider">XPSWMM & Migration</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• XP-SWMM file reading and conversion</li>
                  <li>• InfoSewer to ICM migration</li>
                  <li>• InfoSWMM to ICM conversion</li>
                  <li>• SWMM5 import/export procedures</li>
                  <li>• MIKE+/MOUSE model data conversion</li>
                </ul>
              </div>
              <div className="space-y-2">
                <h4 className="font-medium text-foreground text-sm uppercase tracking-wider">Advanced Topics</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• AI and machine learning integration</li>
                  <li>• HEC-22 inlet design & FHWA culverts</li>
                  <li>• RDII R-T-K parameter estimation</li>
                  <li>• Calibration visualization and statistics</li>
                  <li>• Batch processing and automation</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-card/50 backdrop-blur-sm border border-border rounded-lg p-8 space-y-4">
            <h3 className="text-2xl font-serif font-medium text-foreground">Technology Stack</h3>
            <ul className="text-muted-foreground leading-relaxed space-y-2">
              <li>• <strong>Frontend:</strong> React 18 with TypeScript for type-safe development</li>
              <li>• <strong>Styling:</strong> Tailwind CSS with 11 custom color themes</li>
              <li>• <strong>Components:</strong> Radix UI primitives with Shadcn/ui styling</li>
              <li>• <strong>Routing:</strong> Wouter for lightweight client-side navigation</li>
              <li>• <strong>State:</strong> TanStack Query for server state management</li>
              <li>• <strong>Backend:</strong> Express.js with Node.js</li>
              <li>• <strong>Build:</strong> Vite for fast development and optimized production builds</li>
            </ul>
          </div>

          <div className="bg-card/50 backdrop-blur-sm border border-border rounded-lg p-8 space-y-4">
            <h3 className="text-2xl font-serif font-medium text-foreground">Getting Started</h3>
            <ol className="text-muted-foreground leading-relaxed space-y-3 list-decimal list-inside">
              <li><strong>Browse the Library:</strong> Start on the home page and explore newsletters, articles, posts, documents, apps, tools, quiz, or learning paths using the tabs.</li>
              <li><strong>Use Global Search:</strong> Press the search bar at the top to search across all content types with smart filtering and keyboard navigation.</li>
              <li><strong>Filter by Category:</strong> Click category buttons to filter content by topic within any tab.</li>
              <li><strong>Try Learning Paths:</strong> If you're new to SWMM5 or want structured learning, check the Learning Paths tab for curated sequences.</li>
              <li><strong>Take the Quiz:</strong> Test your knowledge with 30 questions across 6 categories in the Quiz tab.</li>
              <li><strong>Explore Apps:</strong> Try out 13 featured web applications for simulation, conversion, and analysis in the Apps tab.</li>
              <li><strong>Choose a Theme:</strong> Use the palette icon in the navigation to pick from 11 color themes, or toggle dark/light mode with the sun/moon icon.</li>
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
