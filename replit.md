# swmm4, swmm5, swmm5+, swmm6, xpswmm, infosewer, infoswmm and ICM InfoWorks Modeling — The Robert Dickinson Archive

## Overview

This project is a comprehensive digital library and knowledge hub showcasing Robert Dickinson's extensive expertise in stormwater modeling and water infrastructure software. It serves as a curated archive for newsletters, LinkedIn articles and posts, technical documents, interactive web applications, scripting tools, quizzes, and guided learning paths related to SWMM5, ICM, XPSWMM, InfoSewer, and InfoSWMM modeling. The platform aims to centralize and make accessible a vast repository of knowledge accumulated over 48+ years.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Technology Stack:** React 18 with TypeScript, Vite, Wouter for routing, TanStack Query for server state, Tailwind CSS v4 with custom design tokens, Shadcn/ui component library (Radix UI primitives), and custom fonts (Inter, Playfair Display).
- **Core Pages:**
    - `/`: Home page featuring a comprehensive library with 8 content tabs.
    - `/docs`: Documentation page for platform usage and features.
- **Key Features:**
    - **Global Search:** Relevance-scored search across all content types with filters, counts, and smart snippets.
    - **AI Chatbot:** A floating widget powered by `gpt-4o` (via Replit AI Integrations) for answering questions related to stormwater modeling. It uses Server-Sent Events (SSE) for streaming responses and is stateless, with conversation history managed in React state.
    - **Interactive Quiz:** A 30-question quiz with score tracking via localStorage.
    - **Theming:** Supports 11 distinct color schemes and dark/light modes, persisted in localStorage.
- **Content Tabs:** Organized into 8 categories on the home page: Newsletters, Articles, Posts, Documents, Apps, Tools, Quiz, and Paths.
- **Content Types:** All content data is statically defined in `client/src/lib/data.ts` and `client/src/lib/quiz-data.ts`, including newsletters, LinkedIn articles/posts, documents, featured applications, code tools/scripts, and learning paths.

### Backend Architecture
- **Technology Stack:** Express.js and Node.js with ESM module system.
- **API Endpoints:**
    - `POST /api/chat`: Handles AI chatbot streaming requests.
- **AI Chatbot:** Utilizes `gpt-4o` from Replit AI Integrations. The system prompt is highly specialized in various water modeling topics (SWMM5, ICM InfoWorks, XPSWMM, etc.). It is designed to be stateless, with context passed per request.

### Data Architecture
- All content is static TypeScript data, defined as typed arrays in `client/src/lib/data.ts` and `client/src/lib/quiz-data.ts`.
- Content includes newsletters, LinkedIn articles and posts, documents, featured apps, tools/scripts, and learning paths, each with specific metadata (e.g., difficulty, categories, links).
- Quiz data includes questions, options, correct answers, explanations, categories, and difficulty levels.
- Images for newsletters, apps, and the author are stored in `attached_assets/`.

## External Dependencies

### Core Libraries
- **React 18**: UI framework.
- **Vite**: Build tool and development server.
- **Express.js**: Backend HTTP server.
- **OpenAI SDK**: For AI chatbot functionality (integrated via Replit AI Integrations).
- **Wouter**: Lightweight client-side routing.
- **TanStack Query**: For server state management.

### UI Libraries
- **Radix UI**: Provides accessible, unstyled UI primitives.
- **Shadcn/ui**: Pre-styled components built on Radix UI.
- **Tailwind CSS v4**: Utility-first CSS framework.
- **Lucide React**: Icon library.

### Data & Validation
- **Zod**: For schema validation.
- **Drizzle ORM**: Configured for PostgreSQL (though not actively used in the current stateless setup).