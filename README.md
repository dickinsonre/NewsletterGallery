# Newsletter Gallery — Robert Dickinson Archive

A comprehensive, searchable web library of stormwater modeling knowledge curated by Robert Dickinson. The application organizes decades of newsletters, articles, posts, documents, apps, and learning resources into a single interactive React/TypeScript single-page application, enhanced with an AI chatbot and an interactive quiz.

Live app: https://replit.com/@robertdickinson/NewsletterGallery

## Features

| Feature | Description |
| --- | --- |
| 8-tab content library | Newsletters, Articles, Posts, Documents, Apps, Tools, Quiz, and Learning Paths |
| Global search | Fast client-side search across all content categories |
| AI chatbot | GPT-4o assistant specialized in SWMM and stormwater modeling |
| Interactive quiz | 30-question quiz to test stormwater modeling knowledge |
| Theming | 11 color themes plus dark/light mode, persisted in localStorage |
| Learning paths | Curated sequences of resources for structured learning |
| Responsive UI | Mobile-friendly layout built with Tailwind CSS and Shadcn/ui |

## Tech Stack

- **Frontend:** React 18, TypeScript, Vite
- **Routing:** Wouter
- **Data fetching:** TanStack Query
- **Styling:** Tailwind CSS, Shadcn/ui component library
- **Backend:** Express.js (Node)
- **AI:** OpenAI GPT-4o via the OpenAI SDK (SSE streaming)
- **ORM:** Drizzle ORM

## Project Structure

```
NewsletterGallery/
├── client/             # React frontend
│   ├── src/
│   │   ├── components/  # UI components (Shadcn/ui based)
│   │   ├── pages/       # Page-level views
│   │   ├── data.ts      # Static content model
│   │   └── quiz-data.ts # Quiz questions
├── server/             # Express backend + chat API
├── shared/             # Types shared between client and server
├── vite.config.ts
└── package.json
```

## Getting Started

```bash
# Clone the repository
git clone https://github.com/dickinsonre/NewsletterGallery.git
cd NewsletterGallery

# Install dependencies
npm install

# Start the development server
npm run dev
```

Set the `OPENAI_API_KEY` environment variable to enable the AI chatbot:

```bash
export OPENAI_API_KEY=your_key_here
```

## Content Categories

| Tab | Description |
| --- | --- |
| Newsletters | Archive of stormwater modeling newsletters |
| Articles | Technical articles on SWMM and hydraulics |
| Posts | Shorter posts and notes |
| Documents | Reference documents and PDFs |
| Apps | Interactive modeling applications |
| Tools | Utilities and helper tools |
| Quiz | 30-question knowledge quiz |
| Paths | Curated learning paths |

## AI Chatbot

The chatbot uses OpenAI's GPT-4o model with a specialized system prompt focused on SWMM and stormwater modeling. Responses are streamed to the browser using Server-Sent Events (SSE). The chat is stateless — each request is independent.

### Backend API

`POST /api/chat`

Request:

```json
{ "message": "How does SWMM route flow through a conduit?" }
```

Response: a streamed (SSE) text completion from GPT-4o.

## Theming

The app ships with 11 color schemes and supports both dark and light modes. The selected theme is saved to `localStorage` so it persists across sessions.

## Data Architecture

Content is defined as a static TypeScript content model in `client/src/data.ts`, with quiz questions in `client/src/quiz-data.ts`. This keeps the library fast and fully client-rendered, with no database required for browsing content.

## Author

**Robert Dickinson** — Water resources engineer with 48+ years of experience in stormwater modeling and co-author of SWMM3. Specialist in SWMM5, EPANET, and ICM InfoWorks.

- GitHub: https://github.com/dickinsonre
- Replit: https://replit.com/@robertdickinson
