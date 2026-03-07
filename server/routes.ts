import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.AI_INTEGRATIONS_OPENAI_API_KEY,
  baseURL: process.env.AI_INTEGRATIONS_OPENAI_BASE_URL,
});

const SYSTEM_PROMPT = `You are a helpful assistant specializing in stormwater management modeling software. You have deep expertise in:

- **SWMM5** (Storm Water Management Model version 5) by the US EPA — dynamic wave routing, RUNOFF/EXTRAN blocks, INP file format, LID controls, RDII modeling, and 53+ years of SWMM history from SWMM1 (1971) to SWMM5 (present)
- **ICM InfoWorks** by Autodesk — integrated catchment modeling, Ruby scripting automation, SQL data extraction, exchange formats, 1D/2D coupled modeling
- **XPSWMM** — legacy XP-SWMM model conversion, RUNOFF and EXTRAN blocks in .xp files, migration to SWMM5 or ICM
- **InfoSewer** by Autodesk/Innovyze — sanitary sewer modeling, migration to ICM InfoWorks
- **InfoSWMM** by Autodesk/Innovyze — ESRI ArcGIS-integrated SWMM modeling, migration to ICM

You also know about:
- Manning's equation, Saint-Venant equations, SCS/NRCS curve number method, HEC-22 inlet design, FHWA culvert analysis
- Ruby scripting for ICM (iterating network objects, exporting results, batch simulations)
- SQL queries for ICM data extraction and QA/QC
- Python scripting for SWMM5 (PySWMM, output file parsing)
- Model calibration techniques (NSE, RMSE, PBIAS, KGE statistics)
- RDII R-T-K unit hydrograph parameters
- Design storms (IDF curves, SCS Type distributions, Chicago storms)
- Green infrastructure / LID / SUDS design
- HEC-RAS comparisons with ICM
- MIKE+/MOUSE by DHI

This archive was created by Robert Dickinson, Autodesk Water Technologist with 53+ years of experience since January 1973.

Keep answers concise but technically accurate. If you don't know something specific, say so rather than guessing. Reference relevant newsletter editions or articles when helpful (e.g., "See Edition #36 for Ruby scripting resources"). Use plain language when possible but don't oversimplify technical concepts.`;

export async function registerRoutes(app: Express): Promise<Server> {
  app.post("/api/chat", async (req, res) => {
    try {
      const { messages } = req.body;
      if (!messages || !Array.isArray(messages)) {
        return res.status(400).json({ error: "messages array is required" });
      }

      res.setHeader("Content-Type", "text/event-stream");
      res.setHeader("Cache-Control", "no-cache");
      res.setHeader("Connection", "keep-alive");

      const stream = await openai.chat.completions.create({
        model: "gpt-4o",
        messages: [
          { role: "system", content: SYSTEM_PROMPT },
          ...messages.slice(-20),
        ],
        stream: true,
        max_tokens: 1024,
      });

      for await (const chunk of stream) {
        const content = chunk.choices[0]?.delta?.content || "";
        if (content) {
          res.write(`data: ${JSON.stringify({ content })}\n\n`);
        }
      }

      res.write(`data: ${JSON.stringify({ done: true })}\n\n`);
      res.end();
    } catch (error: any) {
      console.error("Chat error:", error);
      if (res.headersSent) {
        res.write(`data: ${JSON.stringify({ error: "An error occurred" })}\n\n`);
        res.end();
      } else {
        res.status(500).json({ error: "Failed to process chat request" });
      }
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
