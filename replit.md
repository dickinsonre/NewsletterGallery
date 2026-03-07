# Overview

This is a web application showcasing Robert Dickinson's expertise in stormwater modeling, SWMM5 (Storm Water Management Model), ICM (InfoWorks), XPSWMM, InfoSewer, and InfoSWMM software. The application serves as a curated digital library organizing newsletters, LinkedIn articles, and technical documents related to hydraulic engineering, Ruby scripting for ICM, SQL data extraction, and water infrastructure modeling.

The application features a modern React-based frontend with a Node.js/Express backend, designed to present technical content in an accessible, visually appealing format with filtering, search, and categorization capabilities.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture

**Technology Stack:**
- React 18 with TypeScript for type-safe component development
- Vite as the build tool and development server for fast HMR (Hot Module Replacement)
- Wouter for lightweight client-side routing
- TanStack Query for server state management and data fetching
- Tailwind CSS v4 with custom design tokens for styling
- Shadcn/ui component library built on Radix UI primitives

**Design Decisions:**
- **Component-Based Architecture:** The UI is organized into reusable components (NewsletterCard, ArticleCard, DocumentCard) that share common styling patterns but display different content types
- **Theme System:** Custom theme provider supports light/dark modes with CSS variables for colors, using a water-themed blue-green palette
- **Responsive Design:** Mobile-first approach with breakpoint-aware layouts
- **Client-Side Filtering:** All content filtering and search happens in the browser for instant feedback without server requests
- **Static Asset Management:** Images and content are bundled at build time, with aliases for clean import paths

**Trade-offs:**
- Client-side filtering provides instant UX but loads all data upfront (acceptable for current content volume)
- Static data structure in TypeScript files rather than CMS provides version control and type safety but requires rebuilds for content updates

## Backend Architecture

**Technology Stack:**
- Express.js for HTTP server and routing
- Node.js with ESM module system
- Separate dev (index-dev.ts) and production (index-prod.ts) entry points
- Vite middleware integration for development

**Design Decisions:**
- **Development vs Production Split:** 
  - Dev mode uses Vite middleware for HMR and dynamic imports
  - Production serves pre-built static files from dist/public
- **Minimal Backend Logic:** Currently implements a basic storage interface but doesn't actively use database features
- **Session Management:** Configured with connect-pg-simple for PostgreSQL session storage (infrastructure prepared but not actively used)
- **Request Logging:** Custom logging middleware tracks API requests with timing and response data

**Trade-offs:**
- Prepared for database integration (Drizzle ORM configured) but currently operates as a static site
- Session infrastructure exists but authentication is not implemented

## Data Architecture

**AI Chatbot:**
- Floating chat widget (bottom-right corner) available on all pages
- Powered by OpenAI via Replit AI Integrations (env vars: AI_INTEGRATIONS_OPENAI_API_KEY, AI_INTEGRATIONS_OPENAI_BASE_URL)
- Server-side streaming endpoint at POST /api/chat
- Domain-specific system prompt covering SWMM5, ICM, XPSWMM, InfoSewer, InfoSWMM
- Component: `client/src/components/chatbot.tsx`
- No database required — stateless conversation (messages kept in React state)

**Content Organization:**
- Eight content types: Newsletters, LinkedIn Articles, Posts, Documents, Apps, Tools, Quiz, Learning Paths
- Each content item includes:
  - Metadata (title, description, date, read time)
  - Categorization (Category enums for filtering)
  - Difficulty levels (beginner, intermediate, advanced)
  - Keywords for enhanced search
  - Image URLs for visual presentation

**Storage Strategy:**
- Content defined as TypeScript constants in `client/src/lib/data.ts`
- Type-safe with Zod schema validation where needed
- Images stored in `attached_assets` directory
- Currently no database persistence (prepared with Drizzle schema but not connected)

**Rationale:**
- Static data approach eliminates database queries for read-heavy workload
- TypeScript provides compile-time validation of content structure
- Easy to version control content changes

## Styling System

**Tailwind Configuration:**
- Custom CSS variables mapped to Tailwind theme
- Design tokens for colors, fonts, and spacing
- Custom fonts: Inter (sans-serif) and Playfair Display (serif)
- Water-themed color palette with blue-green gradients

**Component Styling:**
- Shadcn/ui components with "new-york" style variant
- Custom backdrop blur and card effects
- Hover elevate animations for interactive elements
- Responsive image aspect ratios

# External Dependencies

## Third-Party UI Libraries
- **Radix UI:** Comprehensive suite of accessible, unstyled UI primitives (@radix-ui/* packages)
  - Provides foundation for dialogs, dropdowns, tooltips, tabs, and form controls
  - Chosen for accessibility compliance and headless component architecture
- **Shadcn/ui:** Pre-styled component library built on Radix UI
  - Configuration in `components.json` specifies "new-york" style variant
  - Provides consistent design system across all UI elements

## Development Tools
- **Vite:** Build tool and dev server
  - Custom plugin (`vite-plugin-meta-images`) for dynamic OpenGraph image meta tag updates
  - Replit-specific plugins for development banners and cartographer integration
- **TypeScript:** Type checking and compile-time validation
- **ESBuild:** Used in production build for server-side code bundling

## Database Infrastructure (Configured but Inactive)
- **Drizzle ORM:** Type-safe ORM configured for PostgreSQL
  - Schema defined in `shared/schema.ts` (minimal user table example)
  - Migration configuration in `drizzle.config.ts`
- **@neondatabase/serverless:** PostgreSQL driver for serverless environments
- **connect-pg-simple:** PostgreSQL session store for Express sessions

**Note:** Database infrastructure is configured but the application currently operates without persistent storage. Content is statically defined in TypeScript files.

## Styling and Animation
- **Tailwind CSS:** Utility-first CSS framework with custom configuration
- **class-variance-authority:** Type-safe variant styling for components
- **Framer Motion:** Animation library (noted as removed in package.json but import still exists in some components)

## Data Management
- **TanStack Query:** Server state management and caching
- **Zod:** Schema validation (used with Drizzle for runtime validation)
- **date-fns:** Date manipulation and formatting

## Replit Integration
- Custom Vite plugins for Replit-specific features (dev banner, cartographer, runtime error modal)
- Domain detection for OpenGraph image URL generation
- Development-only plugins excluded from production builds

## Asset Management
- Images stored in `attached_assets` directory
- Custom Vite alias (`@assets`) for clean imports
- Static asset serving through Express in production