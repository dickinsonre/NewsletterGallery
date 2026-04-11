# SWMM5, ICM, XPSWMM, InfoSewer & InfoSWMM Modeling — The Robert Dickinson Archive

## Project Handover Document

**Last Updated:** March 2026
**Author:** Robert Dickinson, Autodesk Water Technologist
**Contact:** robert.dickinson@gmail.com
**LinkedIn:** https://www.linkedin.com/in/robert-dickinson-899011/
**GitHub:** https://github.com/SWMM5-ICM-Scripts

---

## 1. Project Overview

This is a comprehensive digital library and knowledge hub showcasing Robert Dickinson's 53+ years of expertise (since January 1973) in stormwater modeling and water infrastructure software. The application serves as a curated archive organizing newsletters, LinkedIn articles, posts, technical documents, interactive web apps, scripting tools, quizzes, and guided learning paths.

**Live Title:** "SWMM5, ICM, XPSWMM, InfoSewer & InfoSWMM Modeling"
**Subtitle:** "The Robert Dickinson Archive"

The platform covers the following modeling domains:
- **SWMM5** (Storm Water Management Model version 5) by US EPA
- **ICM InfoWorks** by Autodesk — integrated catchment modeling
- **XPSWMM** — legacy XP-SWMM stormwater modeling
- **InfoSewer** by Autodesk/Innovyze — sanitary sewer modeling
- **InfoSWMM** by Autodesk/Innovyze — ESRI ArcGIS-integrated SWMM modeling

---

## 2. Content Inventory (Current Counts)

| Content Type       | Count | Data Source File                     | Array Name         |
|--------------------|-------|--------------------------------------|--------------------|
| Newsletters        | 58    | `client/src/lib/data.ts` (line 185)  | `newsletters`      |
| LinkedIn Articles  | 156   | `client/src/lib/data.ts` (line 945)  | `linkedInArticles`  |
| LinkedIn Posts     | 3     | `client/src/lib/data.ts` (line 2991) | `linkedInPosts`     |
| Documents          | 20    | `client/src/lib/data.ts` (line 2793) | `documents`         |
| Featured Apps      | 13    | `client/src/lib/data.ts` (line 3003) | `featuredApps`      |
| Tools/Scripts      | 45    | `client/src/lib/data.ts` (line 3123) | `tools`             |
| Quiz Questions     | 30    | `client/src/lib/quiz-data.ts` (line 14) | `quizQuestions` |
| Learning Paths     | 5     | `client/src/lib/data.ts` (line 129)  | `learningPaths`     |
| Color Themes       | 11    | `client/src/components/theme-provider.tsx` (line 6) | `colorSchemes` |

**Total data file size:** 3,574 lines (`data.ts`) + 404 lines (`quiz-data.ts`) = 3,978 lines of content

**Note:** Newsletter signup text references "Edition #59" — update when new editions are added.

---

## 3. Technology Stack

### Frontend
| Technology | Purpose | Version |
|-----------|---------|---------|
| React | UI framework | 19.2.0 |
| TypeScript | Type-safe development | — |
| Vite | Build tool + dev server with HMR | — |
| Wouter | Lightweight client-side routing | — |
| TanStack Query | Server state management | 5.60.5 |
| Tailwind CSS v4 | Utility-first CSS framework | — |
| Shadcn/ui | Pre-styled component library ("new-york" variant) | — |
| Radix UI | Accessible headless UI primitives | — |
| Lucide React | Icon library | 0.545.0 |
| class-variance-authority | Type-safe component variants | 0.7.1 |
| Framer Motion | Animation library | 12.23.24 |

### Backend
| Technology | Purpose | Version |
|-----------|---------|---------|
| Express.js | HTTP server and API routes | 4.21.2 |
| Node.js | Runtime with ESM module system | — |
| OpenAI SDK | AI chatbot (via Replit AI Integrations) | 6.27.0 |

### Fonts
| Font | Usage |
|------|-------|
| Inter | Primary sans-serif (body text) |
| Playfair Display | Serif headings |

### Database Infrastructure (Configured but Inactive)
| Technology | Purpose |
|-----------|---------|
| Drizzle ORM | Type-safe PostgreSQL ORM |
| @neondatabase/serverless | PostgreSQL driver |
| connect-pg-simple | Session storage |
| drizzle-zod | Schema validation bridge |

The database layer is fully configured but the application operates entirely with static TypeScript data. No database is needed to run the app.

---

## 4. Application Pages

### Page: Home (`/`)
- **File:** `client/src/pages/home.tsx` (811 lines)
- **Features:**
  - Hero section with title, author photo, subtitle, and stats bar
  - Global search bar with relevance-scored results
  - 8-tab content library (see Tab System below)
  - "Ask a Question" form (sends mailto: to robert.dickinson@gmail.com)
  - Newsletter signup form (sends mailto: to robert.dickinson@gmail.com)
  - GitHub community call-to-action
  - Footer with contact info and social links

### Page: Docs (`/docs`)
- **File:** `client/src/pages/docs.tsx` (305 lines)
- **Features:**
  - Dynamic gradient background matching current theme
  - ThemeToggle in navigation bar
  - Platform documentation with feature descriptions
  - 8-section content grid covering all content types with current counts

### Page: 404 Not Found
- **File:** `client/src/pages/not-found.tsx`

---

## 5. Navigation Bar

**Desktop order (left to right):**

| Position | Label | Behavior |
|----------|-------|----------|
| 1 | Library | Scrolls to content tabs on home page |
| 2 | Docs | Links to `/docs` |
| 3 | Subscribe | Scrolls to newsletter signup on home page |
| 4 | LinkedIn | External link to Robert Dickinson's LinkedIn |
| 5 | About | Opens a dialog with author bio, photo, expertise, featured picks |
| 6 | ThemeToggle | Sun/moon dark/light toggle + color palette dropdown |

---

## 6. Tab System (8 Tabs)

The home page features a tabbed interface using `grid-cols-8` layout.

| Tab # | Label | Value | Content Type | Count | Features |
|-------|-------|-------|-------------|-------|----------|
| 1 | Newsletters | `newsletters` | Newsletter editions | 58 | Category images, difficulty badges, keyword tags |
| 2 | Articles | `articles` | LinkedIn articles | 156 | Read time, difficulty, category filters |
| 3 | Posts | `posts` | LinkedIn posts | 3 | Date, category badges |
| 4 | Documents | `documents` | Technical documents | 20 | Page count, category badges |
| 5 | Apps | `apps` | Featured web apps | 13 | Thumbnail images with hover zoom, platform badges |
| 6 | Tools | `tools` | Code tools/scripts | 45 | Code preview, language badge, status badge |
| 7 | Quiz | `quiz` | Interactive quiz | 30 Qs | Score tracking, category/difficulty selection |
| 8 | Paths | `paths` | Learning paths | 5 | Step-by-step guided journeys |

---

## 7. Color Themes (11 Schemes)

Stored in localStorage under key `swmm-library-theme-color`.
Light/dark mode stored under key `swmm-library-theme`.

| Key | Display Name | Primary HSL | Gradient Style |
|-----|-------------|-------------|----------------|
| `water` | Water Blue | 210 100% 50% | Purple-blue (default) |
| `forest` | Forest Green | 142 70% 35% | Green to emerald |
| `sunset` | Sunset Orange | 25 95% 50% | Orange to red |
| `ocean` | Deep Ocean | 200 80% 45% | Cyan to blue |
| `lavender` | Lavender Dreams | 270 60% 55% | Purple to violet |
| `classic` | Classic Gray | 220 15% 50% | Neutral gray to slate |
| `darkmode` | Dark Mode | 220 15% 60% | Dark navy (forces dark CSS class) |
| `epa` | EPA | 207 80% 38% | EPA official blue |
| `uf` | UF Gators | 22 100% 50% | Orange/blue University of Florida |
| `osu` | OSU Buckeyes | 0 100% 30% | Scarlet/gray Ohio State |
| `auburn` | Auburn Tigers | 18 100% 35% | Orange/navy Auburn University |

**Special behavior:** The `darkmode` scheme forces the `dark` CSS class on the HTML root element regardless of system preference.

---

## 8. AI Chatbot

### Overview
A floating chat widget appears at the bottom-right corner of every page. It provides real-time streaming answers to questions about stormwater modeling.

### Technical Details

| Setting | Value |
|---------|-------|
| Model | `gpt-4o` |
| Provider | Replit AI Integrations (OpenAI) |
| API Endpoint | `POST /api/chat` |
| Streaming | Server-Sent Events (SSE) |
| Max context | Last 20 messages |
| Max response tokens | 1,024 |
| State management | React state (stateless — no database) |
| Frontend component | `client/src/components/chatbot.tsx` |
| Backend route | `server/routes.ts` |

### Environment Variables (auto-provided by Replit)
- `AI_INTEGRATIONS_OPENAI_API_KEY`
- `AI_INTEGRATIONS_OPENAI_BASE_URL`

### System Prompt Coverage
The chatbot system prompt covers expertise in:
- SWMM5 (all versions from SWMM1 1971 to present), INP file format, LID controls, RDII modeling
- ICM InfoWorks — Ruby scripting, SQL data extraction, 1D/2D modeling
- XPSWMM — .xp file format, RUNOFF/EXTRAN blocks, migration
- InfoSewer and InfoSWMM — migration to ICM
- Manning's equation, Saint-Venant equations, SCS/NRCS curve number method
- HEC-22 inlet design, FHWA culvert analysis
- Python (PySWMM), Ruby, and SQL scripting
- Calibration statistics (NSE, RMSE, PBIAS, KGE)
- Design storms (IDF curves, SCS Type distributions, Chicago storms)
- Green infrastructure / LID / SUDS design
- HEC-RAS and MIKE+/MOUSE comparisons

### Suggested Starter Questions (shown in chat widget)
1. "What is SWMM5 and how does it model urban drainage?"
2. "How do I use Ruby scripting in ICM InfoWorks?"
3. "What are the key differences between SWMM5 and ICM?"
4. "How do I calibrate a stormwater model?"

---

## 9. Global Search

**File:** `client/src/components/global-search.tsx`

### Features
- Relevance-scored search algorithm with multi-word matching
- Searches across ALL content types simultaneously (newsletters, articles, docs, posts, tools, apps)
- Filters by type, category, and difficulty with result counts
- Keyboard navigation (↑↓ arrows, Enter to select)
- Smart snippets highlighting matched terms
- Debounced input for performance
- Click-to-navigate for any result

---

## 10. Interactive Quiz

**File:** `client/src/components/quiz-section.tsx`
**Data:** `client/src/lib/quiz-data.ts`

### Features
- 30 questions across 6 categories
- 3 difficulty levels per category
- Each question has 4 options, correct answer index, and detailed explanation
- High scores tracked via localStorage key `swmm-quiz-high-score`
- Category selection before starting
- Score summary at completion

### Quiz Categories
| Category | Topics |
|----------|--------|
| SWMM5 Fundamentals | Core concepts, routing, INP files |
| Hydraulics & Hydrology | Manning's equation, SCS methods, design storms |
| ICM InfoWorks | Software features, modeling approaches |
| Ruby Scripting | ICM Ruby automation, syntax, network iteration |
| Model Testing | Calibration, validation, QA/QC |
| History | SWMM history from 1971 to present |

---

## 11. Data Types & Interfaces

All data types are defined at the top of `client/src/lib/data.ts`:

### Category Type
```typescript
type Category = 
  | "Ruby Scripting" | "SWMM5" | "ICM InfoWorks" | "SQL/Data"
  | "AI/ML" | "History" | "Migration" | "Quiz"
  | "Code Analysis" | "Model Testing";
```

### Difficulty Type
```typescript
type Difficulty = "beginner" | "intermediate" | "advanced";
```

### Newsletter Interface
```typescript
interface Newsletter {
  id: string;           // e.g., "newsletter-58"
  title: string;
  description: string;
  date: string;         // e.g., "2025-01-15"
  readTime: string;     // e.g., "8 min read"
  imageUrl: string;     // imported image reference
  link: string;         // LinkedIn article URL
  issueNumber: number;  // 1–58
  categories: Category[];
  difficulty: Difficulty;
  keywords: string[];
}
```

### LinkedInArticle Interface
```typescript
interface LinkedInArticle {
  id: string;           // e.g., "article-154"
  title: string;
  description: string;
  date: string;
  readTime: string;
  imageUrl: string;
  link: string;         // LinkedIn article URL
  categories: Category[];
  difficulty: Difficulty;
  keywords: string[];
}
```

### Document Interface
```typescript
interface Document {
  id: string;           // e.g., "doc-20"
  title: string;
  description: string;
  pages: number;
  imageUrl: string;
  link: string;
  categories: Category[];
}
```

### LinkedInPost Interface
```typescript
interface LinkedInPost {
  id: string;           // e.g., "post-3"
  title: string;
  description: string;
  date: string;
  link: string;
  categories: Category[];
}
```

### FeaturedApp Interface
```typescript
interface FeaturedApp {
  id: string;           // e.g., "app-13"
  name: string;
  description: string;
  platform: "Replit" | "Lovable" | "Other";
  url: string;          // Full app URL
  imageUrl: string;     // Imported thumbnail image
  categories: Category[];
}
```

### Tool Interface
```typescript
type ToolStatus = "stable" | "beta" | "alpha";

interface Tool {
  id: string;           // e.g., "tool-45"
  title: string;
  description: string;
  language: "Python" | "Ruby" | "JavaScript" | "SQL" | "JSON" | "HTML" | "React" | "Markdown";
  status: ToolStatus;
  version: string;      // e.g., "1.0.0"
  downloadUrl?: string;
  githubUrl?: string;
  artifactUrl?: string; // Claude artifact URL
  codePreview: string;  // Code snippet shown on card
  categories: Category[];
}
```

### LearningPath Interface
```typescript
interface LearningPath {
  id: string;
  title: string;
  description: string;
  difficulty: Difficulty;
  estimatedTime: string;
  steps: {
    type: "newsletter" | "article";
    id: string;
    title: string;
    why: string;
  }[];
}
```

### Quiz Question Interface (in `quiz-data.ts`)
```typescript
type QuizCategory = "SWMM5 Fundamentals" | "Hydraulics & Hydrology" | "ICM InfoWorks" | "Ruby Scripting" | "Model Testing" | "History";

interface QuizQuestion {
  question: string;
  options: string[];      // Array of 4 options
  correctAnswer: number;  // Index 0–3
  explanation: string;
  category: QuizCategory;
  difficulty: Difficulty;
}
```

---

## 12. Featured Apps (All 13)

| # | App Name | Platform | URL | Image File |
|---|----------|----------|-----|------------|
| 1 | Rain Canvas Studio | Lovable | rain-canvas-studio.lovable.app | `app_rain_canvas_studio.png` |
| 2 | Repo Insights | Replit | repo-insights--robertdickinson.replit.app | `app_repo_insights.png` |
| 3 | SWMM ICM St. Venant | Replit | swmm-icm-st-venant--robertdickinson.replit.app | `app_st_venant.png` |
| 4 | SWMM Engine | Replit | swmm-engine--robertdickinson.replit.app | `app_swmm_engine.png` |
| 5 | Batch SWMM Runner | Replit | batch-swmm-runner-robertdickinson.replit.app | `app_batch_runner.png` |
| 6 | Historical Mystery | Replit | historical-mystery-robertdickinson.replit.app | `app_historical_mystery.png` |
| 7 | SWMM5 File Stats | Replit | swmm5filestats.com | `app_file_stats.png` |
| 8 | HydroCouple Explorer | Replit | hydrocouple-explorer-robertdickinson.replit.app | `app_hydrocouple.png` |
| 9 | SWMM Docs Explorer | Replit | swmmdocs.com | `app_docs_explorer.png` |
| 10 | SWMManywhere Explorer | Replit | swmmr-explorer-robertdickinson.replit.app | `app_swmmanywhere.png` |
| 11 | SWMM5 Rosetta Stone | Replit | code-rosetta-stone.replit.app | `app_rosetta_stone.png` |
| 12 | SWMM5 INP Maker | Replit | swmm-inp-maker-robertdickinson.replit.app | `app_inp_maker.png` |
| 13 | XP to SWMM Bridge | Lovable | xp-to-swmm-bridge.lovable.app | `app_xp_bridge.png` |

App cards display thumbnail images with a hover zoom effect and platform badges (Replit/Lovable).

---

## 13. Tools/Scripts (All 45)

### Original Tools (1–6)
| # | Title | Language | Status |
|---|-------|----------|--------|
| 1 | SWMM5 Output Parser | Python | stable |
| 2 | ICM Ruby Network Iterator | Ruby | stable |
| 3 | SWMM-JSON Schema | JSON | stable |
| 4 | ICM SQL Query Library | SQL | stable |
| 5 | SWMM INP File Validator | Python | stable |
| 6 | Ruby Batch Simulation Runner | Ruby | stable |

### Claude Artifact Tools (7–45)
| # | Title | Language |
|---|-------|----------|
| 7 | Manning's Equation Explorer | HTML |
| 8 | HEC-22 Inlet Explorer | HTML |
| 9 | ICM SQL Cookbook | HTML |
| 10 | SWMM5 to IDDX Converter | HTML |
| 11 | SCS Rainfall & Curve Number Calculator | HTML |
| 12 | Vibe Coding Assessment | React |
| 13 | ICM Network Converter | HTML |
| 14 | Mike Urban / MIKE+ Suibing Converter | HTML |
| 15 | HNRA Simulator v2 | React |
| 16 | SWMM5 Simulator | React |
| 17 | Design Storm Equations Reference | HTML |
| 18 | HEC-HMS API Explorer | HTML |
| 19 | RDII R-Value Infographic Generator | React |
| 20 | Factors of 1729 Explorer | React |
| 21 | ModelFlow Dashboard | React |
| 22 | Calibration Visualizer | React |
| 23 | SWMM5 INP Generator | React |
| 24 | ICM SWMM Inlet Designer | React |
| 25 | FHWA Culvert Simulator | React |
| 26 | Manhole Flooding Simulator | React |
| 27 | XP-SWMM File Reader | React |
| 28 | ICM Manhole Simulator | React |
| 29 | RTK MicroGPT v2 | React |
| 30 | Manning's MicroGPT | React |
| 31 | Spatial Analysis Proposal Generator | React |
| 32 | Yarra Network Design Report | Markdown |
| 33 | LA County Rational Method Calculator | HTML |
| 34 | LA County Modified Rational for ICM | Ruby |
| 35 | SWMM Dynamic Wave Explainer | React |
| 36 | Export to SWMM5 Exchange (Ruby) | Ruby |
| 37 | InfoSWMM/H2OMAP Import Exchange (Ruby) | Ruby |
| 38 | SWMM5 Input File Format Documentation | Markdown |
| 39 | SWMM5 Force Mains Modeling App | React |
| 40 | ICM Results Field Exporter | Ruby |
| 41 | InfoSewer RPT File Reader | Ruby |
| 42 | Conference Presentation Guide | Markdown |
| 43 | InfoWorks ICM vs HEC-RAS Comparison | Markdown |
| 44 | RUNOFF & EXTRAN in XP-SWMM | Markdown |
| 45 | Visual SWMM Fortran Input Format | Markdown |

Languages represented: Python, Ruby, JavaScript, SQL, JSON, HTML, React, Markdown.

---

## 14. Learning Paths (All 5)

| # | Title | Difficulty | Time |
|---|-------|-----------|------|
| 1 | Getting Started with SWMM5 | Beginner | 2-3 hours |
| 2 | Ruby Scripting for ICM | Intermediate | 3-4 hours |
| 3 | SQL Mastery for ICM | Intermediate | 2-3 hours |
| 4 | Advanced Calibration Techniques | Advanced | 4-5 hours |
| 5 | Migration Guide: InfoSWMM to ICM | Advanced | 3-4 hours |

Each path consists of ordered steps linking to specific newsletter editions and articles with explanations of why each step is important.

---

## 15. Complete File Structure

```
/
├── replit.md                              # Project overview for Replit agent memory
├── handover.md                            # This handover document
├── package.json                           # NPM dependencies and scripts
├── tsconfig.json                          # TypeScript configuration
├── tailwind.config.ts                     # Tailwind CSS configuration
├── components.json                        # Shadcn/ui configuration ("new-york" variant)
├── drizzle.config.ts                      # Drizzle ORM config (inactive)
├── vite.config.ts                         # Vite build configuration
│
├── client/
│   ├── index.html                         # Entry HTML with OG/Twitter meta tags
│   └── src/
│       ├── App.tsx                        # Root: Router + ThemeProvider + QueryClient + Chatbot
│       ├── main.tsx                       # React DOM render entry point
│       ├── index.css                      # Tailwind imports + custom CSS variables + fonts
│       │
│       ├── pages/
│       │   ├── home.tsx                   # Main library page (811 lines)
│       │   ├── docs.tsx                   # Documentation page (305 lines)
│       │   └── not-found.tsx              # 404 error page
│       │
│       ├── components/
│       │   ├── chatbot.tsx                # Floating AI chat widget (bottom-right)
│       │   ├── global-search.tsx          # Full-site relevance search
│       │   ├── quiz-section.tsx           # Interactive 30-question quiz
│       │   ├── theme-provider.tsx         # 11 color schemes + dark/light mode
│       │   ├── theme-toggle.tsx           # Sun/moon toggle + palette dropdown
│       │   ├── newsletter-card.tsx        # Newsletter edition display card
│       │   ├── article-card.tsx           # LinkedIn article display card
│       │   ├── post-card.tsx              # LinkedIn post display card
│       │   ├── document-card.tsx          # Technical document display card
│       │   ├── tool-card.tsx              # Code tool/script display card
│       │   └── ui/                        # Shadcn/ui components (50+ files)
│       │       ├── accordion.tsx
│       │       ├── alert-dialog.tsx
│       │       ├── badge.tsx
│       │       ├── button.tsx
│       │       ├── card.tsx
│       │       ├── dialog.tsx
│       │       ├── dropdown-menu.tsx
│       │       ├── input.tsx
│       │       ├── select.tsx
│       │       ├── tabs.tsx
│       │       ├── toast.tsx
│       │       ├── tooltip.tsx
│       │       └── ... (40+ more)
│       │
│       ├── lib/
│       │   ├── data.ts                    # ALL content data (3,574 lines)
│       │   ├── quiz-data.ts               # 30 quiz questions (404 lines)
│       │   ├── queryClient.ts             # TanStack Query client config
│       │   └── utils.ts                   # cn() class merge utility
│       │
│       └── hooks/
│           ├── use-mobile.tsx             # Mobile breakpoint detection hook
│           └── use-toast.ts               # Toast notification hook
│
├── server/
│   ├── index-dev.ts                       # Dev entry (Vite middleware + HMR)
│   ├── index-prod.ts                      # Production entry (static file serving)
│   ├── routes.ts                          # API routes: POST /api/chat (80 lines)
│   ├── storage.ts                         # Storage interface (IStorage — minimal)
│   ├── vite.ts                            # Vite dev server setup
│   └── replit_integrations/               # AI integration scaffolding (mostly unused)
│       ├── audio/                          # Voice chat utilities (unused)
│       ├── batch/                          # Batch processing utilities (unused)
│       ├── chat/                           # Chat DB storage (unused — chatbot is stateless)
│       └── image/                          # Image generation utilities (unused)
│
├── shared/
│   ├── schema.ts                          # Drizzle ORM schema (users table — inactive)
│   └── models/
│       └── chat.ts                        # Chat DB models (unused)
│
└── attached_assets/
    ├── robert_dickinson.jpg               # Author photo (used in About dialog + hero)
    ├── generated_images/                  # AI-generated images (30 files)
    │   ├── ai_and_machine_learning_integration.png
    │   ├── ai_and_network_node_connection.png
    │   ├── app_batch_runner.png
    │   ├── app_docs_explorer.png
    │   ├── app_file_stats.png
    │   ├── app_historical_mystery.png
    │   ├── app_hydrocouple.png
    │   ├── app_inp_maker.png
    │   ├── app_rain_canvas_studio.png
    │   ├── app_repo_insights.png
    │   ├── app_rosetta_stone.png
    │   ├── app_st_venant.png
    │   ├── app_swmm_engine.png
    │   ├── app_swmmanywhere.png
    │   ├── app_xp_bridge.png
    │   ├── code_and_data_visualization_abstract.png
    │   ├── friendly_senior_engineer_avatar_illustration.png
    │   ├── geometric_water_flow_diagram_aesthetic.png
    │   ├── historical_engineering_blueprint_style.png
    │   ├── historical_timeline_of_swmm_evolution.png
    │   ├── hydraulic_simulation_abstract.png
    │   ├── icm_infoworks_software_interface.png
    │   ├── minimalist_abstract_book_cover_art_1.png
    │   ├── minimalist_abstract_book_cover_art_2.png
    │   ├── minimalist_abstract_book_cover_art_3.png
    │   ├── quiz_and_testing_knowledge_check.png
    │   ├── ruby_code_and_scripting_automation.png
    │   ├── sql_database_queries_and_data_extraction.png
    │   ├── urban_water_management_abstract.png
    │   └── warm,_textured_paper_background_for_a_library_website.png
    └── *.txt                              # Pasted content source files
```

---

## 16. API Reference

### POST `/api/chat`

**Description:** Streams AI chatbot responses about stormwater modeling topics.

**Request Body:**
```json
{
  "messages": [
    { "role": "user", "content": "What is SWMM5?" },
    { "role": "assistant", "content": "SWMM5 is..." },
    { "role": "user", "content": "How does dynamic wave routing work?" }
  ]
}
```

**Response:** Server-Sent Events stream
```
data: {"content":"SWMM5 "}
data: {"content":"uses "}
data: {"content":"the Saint-Venant equations..."}
data: {"done":true}
```

**Error Response (non-streaming):**
```json
{ "error": "Failed to process chat request" }
```

**Error Response (mid-stream):**
```
data: {"error":"An error occurred"}
```

---

## 17. localStorage Keys

| Key | Purpose | Example Value |
|-----|---------|---------------|
| `swmm-library-theme` | Light/dark mode | `"light"`, `"dark"`, `"system"` |
| `swmm-library-theme-color` | Color scheme | `"water"`, `"epa"`, `"auburn"` |
| `swmm-quiz-high-score` | Quiz high score | `"27"` |

---

## 18. Image Assets

### Newsletter Category Cover Images (6)
These are used as `imageUrl` for newsletters based on their primary category:

| Import Name | File | Used For Category |
|------------|------|-------------------|
| `quizCover` | `quiz_and_testing_knowledge_check.png` | Quiz |
| `rubyCover` | `ruby_code_and_scripting_automation.png` | Ruby Scripting |
| `icmCover` | `icm_infoworks_software_interface.png` | ICM InfoWorks |
| `historyCover` | `historical_timeline_of_swmm_evolution.png` | History |
| `aiCover` | `ai_and_machine_learning_integration.png` | AI/ML |
| `sqlCover` | `sql_database_queries_and_data_extraction.png` | SQL/Data |

### App Thumbnail Images (13)
Each featured app has a dedicated AI-generated thumbnail (see Section 12 table).

### Vite Import Alias
Images are imported using the `@assets` alias which maps to `attached_assets/`:
```typescript
import rubyCover from "@assets/generated_images/ruby_code_and_scripting_automation.png";
```

---

## 19. Community Features

### Ask a Question Form
- Located on home page below the content tabs
- Fields: Name (text input) + Question (textarea)
- Action: Opens `mailto:robert.dickinson@gmail.com` with subject "SWMM5/ICM Question from {name}"
- Note displayed: "Questions may be featured in 'Your Top Questions Answered' editions"

### Newsletter Signup Form
- Located on home page below Ask a Question
- Field: Email address
- Action: Opens `mailto:robert.dickinson@gmail.com` with subject "New Newsletter Subscriber"
- Displays "Edition #59 coming soon!" (update number when new editions are published)

### GitHub Community
- Call-to-action box linking to https://github.com/SWMM5-ICM-Scripts
- Encourages contributions, script sharing, and collaboration

---

## 20. How to Add New Content

### Adding a Newsletter Edition
1. Open `client/src/lib/data.ts`
2. Add a new object to the `newsletters` array (at the top — newest first)
3. Required fields: `id` (e.g., `"newsletter-59"`), `issueNumber` (59), `title`, `description`, `date`, `readTime`, `imageUrl` (use one of the 6 category cover imports), `link` (LinkedIn URL), `categories`, `difficulty`, `keywords`
4. Update "Edition #59" text in `client/src/pages/home.tsx` newsletter signup section

### Adding a LinkedIn Article
1. Add a new object to `linkedInArticles` array in `data.ts`
2. Required fields: `id` (e.g., `"article-155"`), `title`, `description`, `date`, `readTime`, `imageUrl`, `link`, `categories`, `difficulty`, `keywords`

### Adding a LinkedIn Post
1. Add to `linkedInPosts` array in `data.ts`
2. Required fields: `id`, `title`, `description`, `date`, `link`, `categories`

### Adding a Document
1. Add to `documents` array in `data.ts`
2. Required fields: `id`, `title`, `description`, `pages`, `imageUrl`, `link`, `categories`

### Adding a Featured App
1. Generate a thumbnail image and save to `attached_assets/generated_images/`
2. Add an import statement at the top of `data.ts`: `import appNewApp from "@assets/generated_images/app_new_app.png";`
3. Add to `featuredApps` array: `id`, `name`, `description`, `platform`, `url`, `imageUrl` (use the import), `categories`

### Adding a Tool
1. Add to `tools` array in `data.ts`
2. Required fields: `id`, `title`, `description`, `language`, `status`, `version`, `codePreview`, `categories`
3. Optional: `downloadUrl`, `githubUrl`, `artifactUrl`

### Adding Quiz Questions
1. Open `client/src/lib/quiz-data.ts`
2. Add to `quizQuestions` array
3. Required fields: `question`, `options` (array of 4 strings), `correctAnswer` (0–3 index), `explanation`, `category` (one of the 6 QuizCategory values), `difficulty`

### Adding a Learning Path
1. Add to `learningPaths` array in `data.ts`
2. Required fields: `id`, `title`, `description`, `difficulty`, `estimatedTime`, `steps` (array of `{type, id, title, why}`)

### Adding a Color Theme
1. Open `client/src/components/theme-provider.tsx`
2. Add the new key to the `ColorScheme` type union
3. Add the theme object to `colorSchemes` record with: `name`, `primary` (HSL), `gradient` (CSS linear-gradient), `preview` (Tailwind classes)

---

## 21. Deployment Configuration

| Setting | Value |
|---------|-------|
| Workflow | `npm run dev` (Start application) |
| Port | 5000 (Express server) |
| Dev entry | `server/index-dev.ts` (Vite middleware) |
| Prod entry | `server/index-prod.ts` (static serving) |
| Frontend build output | `dist/public/` |
| Server build output | `dist/` |
| Build tool (server) | ESBuild |
| Database required | No |
| Environment variables | `AI_INTEGRATIONS_OPENAI_API_KEY`, `AI_INTEGRATIONS_OPENAI_BASE_URL` (auto-provided) |

---

## 22. Design Decisions & Trade-offs

| Decision | Rationale | Trade-off |
|----------|-----------|-----------|
| Static TypeScript data (no CMS) | Version control, type safety, no database needed | Requires code changes + rebuild for content updates |
| Client-side filtering/search | Instant feedback, no server requests | Loads all data upfront (acceptable for current volume) |
| Stateless chatbot (no DB) | Simple, no session management needed | Conversation lost on page refresh |
| SSE for chat streaming | Real-time token-by-token display | One-directional server→client stream |
| 11 color themes | University/organization branding options | More CSS to maintain |
| mailto: for forms | No backend form processing needed | Requires user's email client |
| AI-generated images | Consistent aesthetic, no copyright issues | May not perfectly match real software |

---

## 23. Known Inactive/Unused Code

The following code exists in the codebase but is **not actively used**:

| Directory/File | Purpose | Status |
|---------------|---------|--------|
| `server/replit_integrations/audio/` | Voice recording/playback | Unused scaffolding |
| `server/replit_integrations/batch/` | Batch AI processing | Unused scaffolding |
| `server/replit_integrations/chat/` | Chat DB persistence | Unused (chatbot is stateless) |
| `server/replit_integrations/image/` | AI image generation | Unused scaffolding |
| `client/replit_integrations/` | Client-side audio utilities | Unused scaffolding |
| `shared/schema.ts` | Drizzle ORM user table | Configured but inactive |
| `shared/models/chat.ts` | Chat conversation DB models | Unused |
| `drizzle.config.ts` | Database migration config | Configured but inactive |
| Passport.js packages | Authentication | Installed but not implemented |
| connect-pg-simple | Session storage | Installed but not used |

These can be safely removed if you want to clean up the codebase, but they don't affect performance since they're not imported by active code paths.
