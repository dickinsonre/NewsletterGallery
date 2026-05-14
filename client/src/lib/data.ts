import quizCover from "@assets/generated_images/quiz_and_testing_knowledge_check.png";
import rubyCover from "@assets/generated_images/ruby_code_and_scripting_automation.png";
import icmCover from "@assets/generated_images/icm_infoworks_software_interface.png";
import historyCover from "@assets/generated_images/historical_timeline_of_swmm_evolution.png";
import aiCover from "@assets/generated_images/ai_and_machine_learning_integration.png";
import sqlCover from "@assets/generated_images/sql_database_queries_and_data_extraction.png";
import hydraulicCover from "@assets/generated_images/hydraulic_simulation_abstract.png";
import urbanCover from "@assets/generated_images/urban_water_management_abstract.png";
import blueprintCover from "@assets/generated_images/historical_engineering_blueprint_style.png";
import codeDataCover from "@assets/generated_images/code_and_data_visualization_abstract.png";
import geometricCover from "@assets/generated_images/geometric_water_flow_diagram_aesthetic.png";
import networkCover from "@assets/generated_images/ai_and_network_node_connection.png";
import appRainCanvas from "@assets/generated_images/app_rain_canvas_studio.png";
import appRepoInsights from "@assets/generated_images/app_repo_insights.png";
import appStVenant from "@assets/generated_images/app_st_venant.png";
import appSwmmEngine from "@assets/generated_images/app_swmm_engine.png";
import appBatchRunner from "@assets/generated_images/app_batch_runner.png";
import appHistoricalMystery from "@assets/generated_images/app_historical_mystery.png";
import appFileStats from "@assets/generated_images/app_file_stats.png";
import appHydrocouple from "@assets/generated_images/app_hydrocouple.png";
import appDocsExplorer from "@assets/generated_images/app_docs_explorer.png";
import appSwmmanywhere from "@assets/generated_images/app_swmmanywhere.png";
import appRosettaStone from "@assets/generated_images/app_rosetta_stone.png";
import appInpMaker from "@assets/generated_images/app_inp_maker.png";
import appXpBridge from "@assets/generated_images/app_xp_bridge.png";

export type Category = 
  | "Ruby Scripting"
  | "SWMM5"
  | "ICM InfoWorks"
  | "SQL/Data"
  | "AI/ML"
  | "History"
  | "Migration"
  | "Quiz"
  | "Code Analysis"
  | "Model Testing";

export type Difficulty = "beginner" | "intermediate" | "advanced";

export interface Newsletter {
  id: string;
  title: string;
  description: string;
  date: string;
  readTime: string;
  imageUrl: string;
  link: string;
  issueNumber: number;
  categories: Category[];
  difficulty: Difficulty;
  keywords: string[];
}

export interface LinkedInArticle {
  id: string;
  title: string;
  description: string;
  date: string;
  readTime: string;
  imageUrl: string;
  link: string;
  categories: Category[];
  difficulty: Difficulty;
  keywords: string[];
}

export interface Document {
  id: string;
  title: string;
  description: string;
  pages: number;
  imageUrl: string;
  link: string;
  categories: Category[];
}

export interface LinkedInPost {
  id: string;
  title: string;
  description: string;
  date: string;
  link: string;
  categories: Category[];
}

export interface FeaturedApp {
  id: string;
  name: string;
  description: string;
  platform: "Replit" | "Lovable" | "Other";
  url: string;
  imageUrl: string;
  categories: Category[];
}

export type ToolStatus = "stable" | "beta" | "alpha";

export interface Tool {
  id: string;
  title: string;
  description: string;
  language: "Python" | "Ruby" | "JavaScript" | "SQL" | "JSON" | "HTML" | "React" | "Markdown";
  status: ToolStatus;
  version: string;
  downloadUrl?: string;
  githubUrl?: string;
  artifactUrl?: string;
  codePreview: string;
  categories: Category[];
}

export const ALL_CATEGORIES: Category[] = [
  "Ruby Scripting",
  "SWMM5",
  "ICM InfoWorks",
  "SQL/Data",
  "AI/ML",
  "History",
  "Migration",
  "Quiz",
  "Code Analysis",
  "Model Testing"
];

export const CATEGORY_IMAGE_MAP: Record<string, string> = {
  "Ruby Scripting": rubyCover,
  "SQL/Data": sqlCover,
  "AI/ML": aiCover,
  "History": historyCover,
  "ICM InfoWorks": networkCover,
  "SWMM5": hydraulicCover,
  "Code Analysis": codeDataCover,
  "Model Testing": geometricCover,
  "Migration": blueprintCover,
  "Quiz": quizCover,
};

export function getCategoryImage(categories: Category[]): string {
  const priority: Category[] = [
    "Ruby Scripting", "SQL/Data", "AI/ML", "History", "Code Analysis",
    "Model Testing", "Migration", "Quiz", "ICM InfoWorks", "SWMM5"
  ];
  for (const cat of priority) {
    if (categories.includes(cat) && CATEGORY_IMAGE_MAP[cat]) {
      return CATEGORY_IMAGE_MAP[cat];
    }
  }
  return urbanCover;
}

export interface GitHubRepo {
  id: string;
  name: string;
  description: string;
  url: string;
  language: string;
  stars: number;
  fork: boolean;
  updatedAt: string;
  categories: Category[];
}

export interface LearningPath {
  id: string;
  title: string;
  description: string;
  difficulty: Difficulty;
  estimatedTime: string;
  steps: { type: "newsletter" | "article"; id: string; title: string; why: string }[];
}

export const learningPaths: LearningPath[] = [
  {
    id: "beginner-swmm5",
    title: "Getting Started with SWMM5",
    description: "A beginner's journey through SWMM5 fundamentals. Start here if you're new to urban drainage modeling.",
    difficulty: "beginner",
    estimatedTime: "2-3 hours",
    steps: [
      { type: "newsletter", id: "1", title: "SWMM5 Inside ICM InfoWorks", why: "Understand the foundation - how SWMM5 works within ICM" },
      { type: "newsletter", id: "39", title: "History of SWMM", why: "Learn where it all began and how SWMM evolved" },
      { type: "newsletter", id: "21", title: "100 SWMM5 Quiz Questions", why: "Test your understanding with real quiz questions" },
      { type: "newsletter", id: "37", title: "Classic SWMM5 Test Files", why: "Practice with actual test models used by experts" }
    ]
  },
  {
    id: "ruby-scripting",
    title: "Ruby Scripting Mastery",
    description: "Learn to automate ICM InfoWorks workflows. Ruby scripting is the key to productivity.",
    difficulty: "intermediate",
    estimatedTime: "4-5 hours",
    steps: [
      { type: "newsletter", id: "36", title: "Ruby Resources for ICM", why: "Your reference guide to all Ruby capabilities" },
      { type: "newsletter", id: "41", title: "Export to CSV with Ruby", why: "Start with a practical, useful script" },
      { type: "newsletter", id: "47", title: "Ruby and ICM Exchange Tables", why: "Master data extraction from models" },
      { type: "newsletter", id: "43", title: "Statistics with Ruby Prompts", why: "Combine Ruby with AI for advanced analysis" },
      { type: "newsletter", id: "48", title: "Import 2K SWMM5 Files with Ruby", why: "Handle bulk operations like a pro" }
    ]
  },
  {
    id: "migration-guide",
    title: "Model Migration Guide",
    description: "Moving from InfoSewer or InfoSWMM to ICM? This path covers the essential migration steps.",
    difficulty: "intermediate",
    estimatedTime: "3-4 hours",
    steps: [
      { type: "newsletter", id: "2", title: "Importing to ICM", why: "Learn the import process and common pitfalls" },
      { type: "newsletter", id: "23", title: "DWF Troubleshooting", why: "Fix dry weather flow issues post-migration" },
      { type: "newsletter", id: "30", title: "InfoSewer to ICM", why: "Specific techniques for InfoSewer migrations" },
      { type: "newsletter", id: "35", title: "Report File Migration", why: "Ensure your reports transfer correctly" }
    ]
  },
  {
    id: "advanced-hydraulics",
    title: "Advanced Hydraulics & Code",
    description: "Deep dive into the C code, hydraulic equations, and internal workings of SWMM5.",
    difficulty: "advanced",
    estimatedTime: "5-6 hours",
    steps: [
      { type: "newsletter", id: "13", title: "C Code Link Hydraulics", why: "Understand DWFLOWC - the heart of pipe routing" },
      { type: "newsletter", id: "12", title: "C Code Node Hydraulics", why: "Learn DYNWAVEC for junction calculations" },
      { type: "newsletter", id: "14", title: "Statistics Deep Dive", why: "Advanced statistical analysis techniques" },
      { type: "newsletter", id: "26", title: "SQL for Results Analysis", why: "Query simulation results like a database" }
    ]
  }
];

export const newsletters: Newsletter[] = [
  {
    id: "60",
    title: "New Graphical User Interface for EPANET 2.3 Now Available - Lew Rossman on GitHub",
    description: "The new UX looks great and even has GIS features. EPANET-UI allows users to create, edit, and run EPANET water distribution models through a modern graphical interface. The code is on GitHub and the UX is available at sites.google.com/view/epanet-ui.",
    date: "2025-04-01",
    readTime: "2 min read",
    imageUrl: historyCover,
    link: "https://www.linkedin.com/pulse/edition-60-new-graphical-user-interface-epanet-23-now-robert-dickinson",
    issueNumber: 60,
    categories: ["SWMM5", "History"],
    difficulty: "beginner",
    keywords: ["EPANET", "EPANET 2.3", "GUI", "graphical user interface", "GIS", "Lew Rossman", "GitHub", "water distribution"]
  },
  {
    id: "59",
    title: "How One Web App Unlocks Two Worlds of Hydraulic Modeling: EPASWMM5 and EPANET",
    description: "Or: Who is the common thread between SWMM5 and EPANET. Dedicated to the still active Dr. Lewis A. Rossman, creator of EPANET at the US EPA (1991–2026).",
    date: "2025-03-15",
    readTime: "17 min read",
    imageUrl: icmCover,
    link: "https://www.linkedin.com/pulse/edition-59-how-one-web-app-unlocks-two-worlds-hydraulic-robert-dickinson",
    issueNumber: 59,
    categories: ["SWMM5", "History"],
    difficulty: "intermediate",
    keywords: ["EPASWMM5", "EPANET", "hydraulic modeling", "web app", "Lewis Rossman", "EPA", "water distribution", "stormwater"]
  },
  {
    id: "58",
    title: "An APP ROSETTA Stone: Code Translations of SWMM5 and EPANET across 37 Programming Languages",
    description: "What if you could read the EPA's stormwater engine or EPANET in any programming language? Exploring code translations of SWMM5 and EPANET across 37 programming languages.",
    date: "2025-03-01",
    readTime: "11 min read",
    imageUrl: aiCover,
    link: "https://www.linkedin.com/pulse/edition-58-app-rosetta-stone-code-translations-swmm5-robert-dickinson",
    issueNumber: 58,
    categories: ["SWMM5", "Code Analysis"],
    difficulty: "advanced",
    keywords: ["SWMM5", "EPANET", "Rosetta Stone", "programming languages", "code translation", "37 languages"]
  },
  {
    id: "57",
    title: "The 250K-Element Question: What If You Could Generate Any SWMM5 Model in Seconds?",
    description: "On the quiet revolution of synthetic drainage networks, and why 2000 real-world models taught a machine to build better sewers than most of us do by hand.",
    date: "2025-02-15",
    readTime: "15 min read",
    imageUrl: aiCover,
    link: "https://www.linkedin.com/pulse/250k-element-question-what-you-could-generate-any-robert-dickinson",
    issueNumber: 57,
    categories: ["SWMM5", "AI/ML"],
    difficulty: "advanced",
    keywords: ["SWMM5", "synthetic models", "drainage networks", "machine learning", "model generation", "250K elements"]
  },
  {
    id: "56",
    title: "The $350,000 Model That Built a Billion-Dollar Ecosystem: 55 Years of EPASWMM",
    description: "A history of the world's most important software you've never heard of. The $350,000 model that built a billion-dollar ecosystem over 55 years of EPA SWMM.",
    date: "2025-02-01",
    readTime: "8 min read",
    imageUrl: historyCover,
    link: "https://www.linkedin.com/pulse/edition-56-350000-model-built-billion-dollar-55-years-robert-dickinson",
    issueNumber: 56,
    categories: ["History", "SWMM5"],
    difficulty: "beginner",
    keywords: ["SWMM5", "EPA", "history", "billion-dollar ecosystem", "55 years", "stormwater"]
  },
  {
    id: "55",
    title: "Design Storm App for 6 Continents and 66 Patterns",
    description: "Sixty-six patterns. Nine regions. Thirty countries. Six continents. Eight export formats. Three steps. Every piece of infrastructure you walk on, drive on, or live near was designed using one of these patterns.",
    date: "2025-01-15",
    readTime: "9 min read",
    imageUrl: icmCover,
    link: "https://www.linkedin.com/pulse/design-storm-app-6-continents-66-patterns-robert-dickinson",
    issueNumber: 55,
    categories: ["SWMM5", "Model Testing"],
    difficulty: "intermediate",
    keywords: ["design storm", "rainfall patterns", "continents", "export formats", "infrastructure", "app"]
  },
  {
    id: "54",
    title: "Two Solvers, One Equation, and the Argument That Has Lasted Forty Years",
    description: "A 150-year-old equation, two different ways to solve it, and why your pipe design might depend on which one you choose. The ongoing debate in hydraulic engineering.",
    date: "2025-01-01",
    readTime: "11 min read",
    imageUrl: sqlCover,
    link: "https://www.linkedin.com/pulse/edition-54-two-solvers-one-equation-argument-has-robert-dickinson",
    issueNumber: 54,
    categories: ["SWMM5", "Code Analysis"],
    difficulty: "advanced",
    keywords: ["solvers", "Saint-Venant", "equations", "hydraulics", "pipe design", "numerical methods"]
  },
  {
    id: "53",
    title: "The Measure of Honest Numbers: App Version of Rules for Responsible Modeling by William James (CHI)",
    description: "It is a peculiar feature of the human mind that we are most easily deceived by things that look precisely the way we expect. An app version of William James' rules for responsible modeling.",
    date: "2024-12-15",
    readTime: "9 min read",
    imageUrl: quizCover,
    link: "https://www.linkedin.com/pulse/edition-53-measure-honest-numbers-app-version-rules-robert-dickinson",
    issueNumber: 53,
    categories: ["SWMM5", "Model Testing"],
    difficulty: "intermediate",
    keywords: ["responsible modeling", "William James", "CHI", "honest numbers", "best practices", "quality assurance"]
  },
  {
    id: "52",
    title: "300,000 Years of Water Engineering in an Interactive App",
    description: "There is a fact about human beings that should be taught in every engineering school on the planet, and it is this: the very first problem we solved — before language, before writing — was water.",
    date: "2024-12-01",
    readTime: "6 min read",
    imageUrl: historyCover,
    link: "https://www.linkedin.com/pulse/edition-52-300000-years-water-engineering-interactive-robert-dickinson",
    issueNumber: 52,
    categories: ["History", "SWMM5"],
    difficulty: "beginner",
    keywords: ["water engineering", "history", "interactive app", "infrastructure", "civilization"]
  },
  {
    id: "51",
    title: "The Memory of Water: Two Apps That Remember What We Built in 5 SWMM Releases",
    description: "There is a peculiar thing about institutional knowledge. It accumulates slowly, over decades, in manuals and reports and technical memoranda that circulate among specialists.",
    date: "2024-11-15",
    readTime: "3 min read",
    imageUrl: icmCover,
    link: "https://www.linkedin.com/pulse/edition-51-memory-water-two-apps-remember-what-we-robert-dickinson",
    issueNumber: 51,
    categories: ["SWMM5", "History"],
    difficulty: "beginner",
    keywords: ["SWMM", "institutional knowledge", "apps", "releases", "documentation", "memory"]
  },
  {
    id: "50",
    title: "An App to Read and Create 3000 Informative Charts and Tables from the SWMM5 Report File",
    description: "There is quite a long backstory on this app. I started working on SWMM 2.5 programming in 1978 using punch cards to run the model and voluminous print outputs.",
    date: "1 day ago",
    readTime: "2 min read",
    imageUrl: aiCover,
    link: "https://www.linkedin.com/pulse/edition-50-app-read-create-3000-informative-charts-robert-dickinson",
    issueNumber: 50,
    categories: ["SWMM5", "Code Analysis"],
    difficulty: "beginner",
    keywords: ["SWMM5", "report file", "charts", "tables", "visualization", "app"]
  },
  {
    id: "49",
    title: "EPASWMM5 and EPANET INP File Data Section Educational Tool",
    description: "This newsletter is about an app that shows you the inp file data sections of SWMM5 and EPANET with all of the parameters for educational purposes.",
    date: "3 days ago",
    readTime: "2 min read",
    imageUrl: icmCover,
    link: "https://www.linkedin.com/pulse/edition-49-epaswmm5-epanet-inp-file-data-section-robert-dickinson",
    issueNumber: 49,
    categories: ["SWMM5", "Code Analysis"],
    difficulty: "beginner",
    keywords: ["SWMM5", "EPANET", "INP file", "data sections", "educational tool"]
  },
  {
    id: "48",
    title: "Using ICM Ruby Scripts to Import 2K SWMM5 Files to ICM",
    description: "This 48th Edition of the newsletter is about the awesomeness of Ruby scripting in ICM InfoWorks. Now with thousands of SWMM5 models in ICM.",
    date: "3 days ago",
    readTime: "2 min read",
    imageUrl: rubyCover,
    link: "https://www.linkedin.com/pulse/edition-48-using-icm-ruby-scripts-import-2k-swmm5-robert-dickinson",
    issueNumber: 48,
    categories: ["Ruby Scripting", "ICM InfoWorks", "Migration"],
    difficulty: "intermediate",
    keywords: ["Ruby", "SWMM5", "import", "automation", "batch processing"]
  },
  {
    id: "47",
    title: "20K Words on ICM InfoWorks Ruby Scripting, Nano Banana Diagram Version",
    description: "Detailed diagrams of engineering concepts made by Nano Banana on LinkedIn and X or Twitter, exploring Ruby scripting in ICM InfoWorks.",
    date: "4 days ago",
    readTime: "2 min read",
    imageUrl: rubyCover,
    link: "https://www.linkedin.com/pulse/edition-47-20k-words-icm-infoworks-ruby-scripting-robert-dickinson",
    issueNumber: 47,
    categories: ["Ruby Scripting", "ICM InfoWorks"],
    difficulty: "intermediate",
    keywords: ["Ruby", "diagrams", "Nano Banana", "scripting", "visualization"]
  },
  {
    id: "46",
    title: "An App for People Who Have Been Seeing the SWMM5 Report file for 1 - 50 Years",
    description: "Part of the Vibe coding revolution - an app that helps fix a many-decades-long pain point for SWMM5 users viewing report files.",
    date: "5 days ago",
    readTime: "2 min read",
    imageUrl: aiCover,
    link: "https://www.linkedin.com/pulse/edition-46-app-people-seeing-swmm5-report-robert-dickinson",
    issueNumber: 46,
    categories: ["SWMM5", "AI/ML", "Code Analysis"],
    difficulty: "beginner",
    keywords: ["SWMM5", "report file", "app", "Vibe coding", "automation"]
  },
  {
    id: "45",
    title: "ICM InfoWorks Simulation Parameters 100-Question Quiz",
    description: "Test your knowledge on simulation parameters within ICM InfoWorks. A comprehensive quiz for modelers.",
    date: "2 weeks ago",
    readTime: "10 min read",
    imageUrl: quizCover,
    link: "https://www.linkedin.com/pulse/icm-infoworks-simulation-parameters-100-question-quiz-dickinson-oh8ke",
    issueNumber: 45,
    categories: ["SWMM5", "ICM InfoWorks"],
    difficulty: "intermediate",
    keywords: ["SWMM", "modeling", "hydraulics"]
  },
  {
    id: "44",
    title: "AI Ruby Time Travel Prompts for SWMM4, ICM InfoWorks, InfoSewer, InfoSWMM and SWMM5",
    description: "Exploring the intersection of AI prompts and legacy water modeling software versions.",
    date: "6 months ago",
    readTime: "8 min read",
    imageUrl: aiCover,
    link: "https://www.linkedin.com/pulse/ai-ruby-time-travel-prompts-swmm4-icm-infoworks-swmm5-dickinson-7cjse",
    issueNumber: 44,
    categories: ["SWMM5", "ICM InfoWorks"],
    difficulty: "intermediate",
    keywords: ["SWMM", "modeling", "hydraulics"]
  },
  {
    id: "43",
    title: "Streamlining InfoWorks ICM SWMM: Simple Statistics of Thousands of Network Parameters with Ruby Prompts",
    description: "Using Ruby scripting to extract and analyze statistical data from vast network parameters in ICM SWMM.",
    date: "6 months ago",
    readTime: "7 min read",
    imageUrl: rubyCover,
    link: "https://www.linkedin.com/pulse/streamlining-infoworks-icm-swmm-simple-statistics-ruby-dickinson-dxtre",
    issueNumber: 43,
    categories: ["SWMM5", "ICM InfoWorks"],
    difficulty: "intermediate",
    keywords: ["SWMM", "modeling", "hydraulics"]
  },
  {
    id: "42",
    title: "Streamlining InfoWorks ICM: Simple Statistics of Thousands of Network Parameters with Ruby Prompts",
    description: "A guide to simplifying the statistical analysis of network parameters in InfoWorks ICM using Ruby.",
    date: "6 months ago",
    readTime: "6 min read",
    imageUrl: rubyCover,
    link: "https://www.linkedin.com/pulse/streamlining-infoworks-icm-simple-statistics-network-ruby-dickinson-cnbve",
    issueNumber: 42,
    categories: ["SWMM5", "ICM InfoWorks"],
    difficulty: "intermediate",
    keywords: ["SWMM", "modeling", "hydraulics"]
  },
  {
    id: "41",
    title: "Streamlining InfoWorks ICM SWMM: Exporting Thousands of Network Parameters to CSV with Ruby Prompts",
    description: "Automating the export of large datasets from ICM SWMM to CSV format using Ruby scripts.",
    date: "6 months ago",
    readTime: "5 min read",
    imageUrl: rubyCover,
    link: "https://www.linkedin.com/pulse/streamlining-infoworks-icm-swmm-exporting-thousands-csv-dickinson-gcpce",
    issueNumber: 41,
    categories: ["SWMM5", "ICM InfoWorks"],
    difficulty: "intermediate",
    keywords: ["SWMM", "modeling", "hydraulics"]
  },
  {
    id: "40",
    title: "Streamlining InfoWorks ICM: Exporting Thousands of Network Parameters to CSV with Ruby Prompts",
    description: "Efficient techniques for exporting InfoWorks ICM network data to CSV for external analysis.",
    date: "6 months ago",
    readTime: "5 min read",
    imageUrl: rubyCover,
    link: "https://www.linkedin.com/pulse/streamlining-infoworks-icm-exporting-thousands-csv-ruby-dickinson-cov5c",
    issueNumber: 40,
    categories: ["SWMM5", "ICM InfoWorks"],
    difficulty: "intermediate",
    keywords: ["SWMM", "modeling", "hydraulics"]
  },
  {
    id: "39",
    title: "History of SWMM from 1978 Onwards from PDF Files",
    description: "A historical journey through the development of the Storm Water Management Model (SWMM) since 1978.",
    date: "8 months ago",
    readTime: "12 min read",
    imageUrl: historyCover,
    link: "https://www.linkedin.com/pulse/edition-40-history-swmm-from-1978-onwards-pdf-files-robert-dickinson-z9kje",
    issueNumber: 39,
    categories: ["SWMM5", "ICM InfoWorks"],
    difficulty: "intermediate",
    keywords: ["SWMM", "modeling", "hydraulics"]
  },
  {
    id: "38",
    title: "SWMM4, SWMM5, RUBY AND AI FOR SWMM5",
    description: "Integrating modern AI and Ruby scripting with classic and current SWMM versions.",
    date: "8 months ago",
    readTime: "9 min read",
    imageUrl: aiCover,
    link: "https://www.linkedin.com/pulse/edition-39-swmm4-swmm5-ruby-ai-robert-dickinson-m31le",
    issueNumber: 38,
    categories: ["SWMM5", "ICM InfoWorks"],
    difficulty: "intermediate",
    keywords: ["SWMM", "modeling", "hydraulics"]
  },
  {
    id: "37",
    title: "Seven Classic SWMM5 Hydraulics Test Files from Extran3 or SWMM3 in 1981 Used in SWMM4 and SWMM5 Testing",
    description: "Reviewing classic hydraulic test files that have stood the test of time across multiple SWMM generations.",
    date: "9 months ago",
    readTime: "8 min read",
    imageUrl: icmCover,
    link: "https://www.linkedin.com/pulse/edition-38-seven-classic-swmm5-hydraulics-test-files-from-dickinson-izrye",
    issueNumber: 37,
    categories: ["SWMM5", "ICM InfoWorks"],
    difficulty: "intermediate",
    keywords: ["SWMM", "modeling", "hydraulics"]
  },
  {
    id: "36",
    title: "Ruby scripting resources for ICM and ICM SWMM, including help files, AI learning locations, and GitHub repositories",
    description: "A curated list of resources for mastering Ruby scripting in the context of ICM and ICM SWMM.",
    date: "9 months ago",
    readTime: "7 min read",
    imageUrl: rubyCover,
    link: "https://www.linkedin.com/pulse/edition-37-ruby-scripting-resources-icm-swmm-help-files-dickinson-7safe",
    issueNumber: 36,
    categories: ["SWMM5", "ICM InfoWorks"],
    difficulty: "intermediate",
    keywords: ["SWMM", "modeling", "hydraulics"]
  },
  {
    id: "35",
    title: "PDF Files for SWMM1, SWMM2, SWMM3, SWMM4 and SWMM5 for AI Queries",
    description: "Digitizing and organizing historical SWMM documentation for use with AI-driven queries.",
    date: "1 year ago",
    readTime: "6 min read",
    imageUrl: aiCover,
    link: "https://www.linkedin.com/pulse/edition-36-pdf-files-swmm1-swmm2-swmm3-swmm4-swmm5-ai-dickinson-juhke",
    issueNumber: 35,
    categories: ["SWMM5", "ICM InfoWorks"],
    difficulty: "intermediate",
    keywords: ["SWMM", "modeling", "hydraulics"]
  },
  {
    id: "34",
    title: "SWMM5+, InfoSewer, ICM SWMM, ICM InfoWorks, Ruby, Water Quality",
    description: "A broad overview of water quality modeling across various software platforms and the role of Ruby.",
    date: "1 year ago",
    readTime: "8 min read",
    imageUrl: icmCover,
    link: "https://www.linkedin.com/pulse/edition-35-swmm5-infosewer-icm-swmm-infoworks-ruby-water-dickinson-qbvye",
    issueNumber: 34,
    categories: ["SWMM5", "ICM InfoWorks"],
    difficulty: "intermediate",
    keywords: ["SWMM", "modeling", "hydraulics"]
  },
  {
    id: "33",
    title: "Misc Ruby Tools for ICM InfoWorks SWMM Modeling",
    description: "A collection of miscellaneous yet useful Ruby tools for enhancing your modeling workflow.",
    date: "1 year ago",
    readTime: "5 min read",
    imageUrl: rubyCover,
    link: "https://www.linkedin.com/pulse/edition-34-misc-ruby-tools-icm-infoworks-swmm-robert-dickinson-g7z5e",
    issueNumber: 33,
    categories: ["SWMM5", "ICM InfoWorks"],
    difficulty: "intermediate",
    keywords: ["SWMM", "modeling", "hydraulics"]
  },
  {
    id: "32",
    title: "Using Ruby to make ICM SWMM more like InfoSWMM Output Report Tables",
    description: "Customizing ICM SWMM output reports to match the familiar format of InfoSWMM using Ruby.",
    date: "1 year ago",
    readTime: "7 min read",
    imageUrl: rubyCover,
    link: "https://www.linkedin.com/pulse/edition-33-using-ruby-make-icm-swmm-more-like-output-report-robert-8cuse",
    issueNumber: 32,
    categories: ["SWMM5", "ICM InfoWorks"],
    difficulty: "intermediate",
    keywords: ["SWMM", "modeling", "hydraulics"]
  },
  {
    id: "31",
    title: "How the EPASWMM5 Related Software Newsletter is Organized using the Number 1729",
    description: "An intriguing look into the organizational structure of the newsletter and the significance of the number 1729.",
    date: "1 year ago",
    readTime: "4 min read",
    imageUrl: quizCover,
    link: "https://www.linkedin.com/pulse/how-epaswmm5-related-software-newsletter-organized-using-dickinson-6ybme",
    issueNumber: 31,
    categories: ["SWMM5", "ICM InfoWorks"],
    difficulty: "intermediate",
    keywords: ["SWMM", "modeling", "hydraulics"]
  },
  {
    id: "30",
    title: "InfoSewer to ICM InfoWorks using ODIC and Ruby with SQL, Extended FY2025 Version",
    description: "A guide on migrating from InfoSewer to ICM InfoWorks using advanced data import and scripting techniques.",
    date: "1 year ago",
    readTime: "10 min read",
    imageUrl: sqlCover,
    link: "https://www.linkedin.com/pulse/edition-31-infosewer-icm-infoworks-using-odic-ruby-sql-dickinson-3e80e",
    issueNumber: 30,
    categories: ["SWMM5", "ICM InfoWorks"],
    difficulty: "intermediate",
    keywords: ["SWMM", "modeling", "hydraulics"]
  },
  {
    id: "29",
    title: "Ruby Code for Altering 2D Polygons, Making 2D Results Points Inside the Polygon for both ICM InfoWorks and SWMM Networks",
    description: "Advanced Ruby scripting for spatial manipulation of 2D polygons and results points in network models.",
    date: "1 year ago",
    readTime: "8 min read",
    imageUrl: rubyCover,
    link: "https://www.linkedin.com/pulse/edition-30-ruby-code-altering-2d-polygons-making-points-dickinson-xklwe",
    issueNumber: 29,
    categories: ["SWMM5", "ICM InfoWorks"],
    difficulty: "intermediate",
    keywords: ["SWMM", "modeling", "hydraulics"]
  },
  {
    id: "28",
    title: "From 1988 to 2024: SWMM's Incredible 54,000-fold Engine or PC Speed Improvement",
    description: "Tracking the exponential performance improvements in SWMM engines over nearly four decades.",
    date: "1 year ago",
    readTime: "6 min read",
    imageUrl: historyCover,
    link: "https://www.linkedin.com/pulse/edition-29-from-1988-2024-swmms-incredible-54000-fold-dickinson-9chye",
    issueNumber: 28,
    categories: ["SWMM5", "ICM InfoWorks"],
    difficulty: "intermediate",
    keywords: ["SWMM", "modeling", "hydraulics"]
  },
  {
    id: "27",
    title: "How many runoff surfaces do I actually use in my ICM InfoWorks network? Ruby can answer this question.",
    description: "Using Ruby to audit and analyze runoff surface usage in your hydraulic networks.",
    date: "1 year ago",
    readTime: "5 min read",
    imageUrl: rubyCover,
    link: "https://www.linkedin.com/pulse/edition-28-how-many-runoff-surfaces-do-i-actually-use-dickinson-h3jie",
    issueNumber: 27,
    categories: ["SWMM5", "ICM InfoWorks"],
    difficulty: "intermediate",
    keywords: ["SWMM", "modeling", "hydraulics"]
  },
  {
    id: "26",
    title: "SQL for ALL ICM SWMM Results for Nodes, Links and Subcatchments and LIDS Input and Results Parameters",
    description: "Comprehensive SQL queries for extracting all types of results and parameters from ICM SWMM.",
    date: "1 year ago",
    readTime: "9 min read",
    imageUrl: sqlCover,
    link: "https://www.linkedin.com/pulse/edition-27-sql-all-icm-swmm-results-nodes-links-lids-input-dickinson-si1ye",
    issueNumber: 26,
    categories: ["SWMM5", "ICM InfoWorks"],
    difficulty: "intermediate",
    keywords: ["SWMM", "modeling", "hydraulics"]
  },
  {
    id: "25",
    title: "SQL for ALL ICM InfoWorks Results for Nodes, Links, Subcatchments, and SUDS Input and Results Parameters",
    description: "Comprehensive SQL queries for extracting all types of results and parameters from ICM InfoWorks.",
    date: "2 years ago",
    readTime: "9 min read",
    imageUrl: sqlCover,
    link: "https://www.linkedin.com/pulse/edition-26-sql-all-icm-infoworks-results-nodes-links-suds-dickinson-d7oae",
    issueNumber: 25,
    categories: ["SWMM5", "ICM InfoWorks"],
    difficulty: "intermediate",
    keywords: ["SWMM", "modeling", "hydraulics"]
  },
  {
    id: "24",
    title: "ICM SQL Functions and Network Parameter Extraction for SWMM and InfoWorks",
    description: "Deep dive into SQL functions available in ICM InfoWorks for efficient network analysis.",
    date: "2 years ago",
    readTime: "8 min read",
    imageUrl: sqlCover,
    link: "https://www.linkedin.com/pulse/edition-25-icm-sql-functions-swmm-infoworks-robert-dickinson-q7qxe",
    issueNumber: 24,
    categories: ["SWMM5", "ICM InfoWorks"],
    difficulty: "intermediate",
    keywords: ["SWMM", "modeling", "hydraulics"]
  },
  {
    id: "23",
    title: "I Imported InfoSWMM to ICM SWMM: Where Are All the DWF Dry Flow Rates?",
    description: "Troubleshooting data migration and understanding parameter mapping in model conversions.",
    date: "2 years ago",
    readTime: "7 min read",
    imageUrl: rubyCover,
    link: "https://www.linkedin.com/pulse/i-imported-infoswmm-icm-swmm-where-all-dwf-dry-flow-dickinson-r16qe",
    issueNumber: 23,
    categories: ["SWMM5", "ICM InfoWorks"],
    difficulty: "intermediate",
    keywords: ["SWMM", "modeling", "hydraulics"]
  },
  {
    id: "22",
    title: "SWMM5 Components in ICM InfoWorks Networks",
    description: "Understanding how SWMM5 components integrate within ICM InfoWorks architecture.",
    date: "2 years ago",
    readTime: "8 min read",
    imageUrl: icmCover,
    link: "https://www.linkedin.com/pulse/swmm5-components-icm-infoworks-networks-robert-dickinson-aadee",
    issueNumber: 22,
    categories: ["SWMM5", "ICM InfoWorks"],
    difficulty: "intermediate",
    keywords: ["SWMM", "modeling", "hydraulics"]
  },
  {
    id: "21",
    title: "100 SWMM5 Quiz Questions",
    description: "A comprehensive quiz covering SWMM5 fundamentals, test your expertise.",
    date: "2 years ago",
    readTime: "15 min read",
    imageUrl: quizCover,
    link: "https://www.linkedin.com/pulse/100-swmm5-quiz-questions-robert-dickinson-jonke",
    issueNumber: 21,
    categories: ["SWMM5", "ICM InfoWorks"],
    difficulty: "intermediate",
    keywords: ["SWMM", "modeling", "hydraulics"]
  },
  {
    id: "20",
    title: "Seven InfoSWMM Blogs for Readers in the Years 2024-2030+",
    description: "A curated collection of InfoSWMM resources and best practices for modern modeling.",
    date: "2 years ago",
    readTime: "7 min read",
    imageUrl: icmCover,
    link: "https://www.linkedin.com/pulse/seven-infoswmm-blogs-readers-years-2024-2030-robert-dickinson-aflue",
    issueNumber: 20,
    categories: ["SWMM5", "ICM InfoWorks"],
    difficulty: "intermediate",
    keywords: ["SWMM", "modeling", "hydraulics"]
  },
  {
    id: "19",
    title: "Summary of Last 19 Newsletter Edition Topics",
    description: "Comprehensive overview and summary of the previous nineteen editions.",
    date: "2 years ago",
    readTime: "6 min read",
    imageUrl: quizCover,
    link: "https://www.linkedin.com/pulse/summary-last-19-newsletter-edition-topics-robert-dickinson-wzn4e",
    issueNumber: 19,
    categories: ["SWMM5", "ICM InfoWorks"],
    difficulty: "intermediate",
    keywords: ["SWMM", "modeling", "hydraulics"]
  },
  {
    id: "18",
    title: "ICM Ruby: Read InfoSewer and InfoSWMM Scenario Facilities and Loads",
    description: "Using Ruby scripting to extract facility and load data from InfoSewer and InfoSWMM scenarios.",
    date: "2 years ago",
    readTime: "8 min read",
    imageUrl: rubyCover,
    link: "https://www.linkedin.com/pulse/icm-ruby-read-infosewer-infoswmm-scenario-facilities-loads-dickinson-qnnme",
    issueNumber: 18,
    categories: ["SWMM5", "ICM InfoWorks"],
    difficulty: "intermediate",
    keywords: ["SWMM", "modeling", "hydraulics"]
  },
  {
    id: "17",
    title: "From Legacy to Future: Recalling Engine InfoSewer ICM 2030",
    description: "Reflecting on the evolution from InfoSewer to modern ICM systems.",
    date: "2 years ago",
    readTime: "7 min read",
    imageUrl: historyCover,
    link: "https://www.linkedin.com/pulse/from-legacy-future-recalling-engine-infosewer-icm-2030-dickinson-m269e",
    issueNumber: 17,
    categories: ["SWMM5", "ICM InfoWorks"],
    difficulty: "intermediate",
    keywords: ["SWMM", "modeling", "hydraulics"]
  },
  {
    id: "16",
    title: "InfoSWMM Graphical Tools: Understanding SWMM5 and ICM SWMM",
    description: "Visual tools and techniques for better understanding stormwater models.",
    date: "2 years ago",
    readTime: "8 min read",
    imageUrl: icmCover,
    link: "https://www.linkedin.com/pulse/infoswmm-graphical-tools-understanding-swmm5-icm-swmm-dickinson-gul2c",
    issueNumber: 16,
    categories: ["SWMM5", "ICM InfoWorks"],
    difficulty: "intermediate",
    keywords: ["SWMM", "modeling", "hydraulics"]
  },
  {
    id: "15",
    title: "Embedded Posts from Autodesk Water Infrastructure Zone",
    description: "Collection of insights from the Autodesk Water Infrastructure community.",
    date: "2 years ago",
    readTime: "5 min read",
    imageUrl: icmCover,
    link: "https://www.linkedin.com/pulse/embedded-posts-from-autodesk-water-infrastructures-one-dickinson-borge",
    issueNumber: 15,
    categories: ["SWMM5", "ICM InfoWorks"],
    difficulty: "intermediate",
    keywords: ["SWMM", "modeling", "hydraulics"]
  },
  {
    id: "14",
    title: "Ruby: See Statistics of All Items in Both ICM InfoWorks and SWMM",
    description: "Ruby scripting for comprehensive statistical analysis across different modeling platforms.",
    date: "2 years ago",
    readTime: "7 min read",
    imageUrl: rubyCover,
    link: "https://www.linkedin.com/pulse/ruby-see-statistics-all-items-both-icm-infoworks-swmm-dickinson-ghvse",
    issueNumber: 14,
    categories: ["SWMM5", "ICM InfoWorks"],
    difficulty: "intermediate",
    keywords: ["SWMM", "modeling", "hydraulics"]
  },
  {
    id: "13",
    title: "Story: C Code Link Hydraulics SWMM5 DWFLOWC",
    description: "Deep technical dive into the C code underlying SWMM5 hydraulic calculations.",
    date: "2 years ago",
    readTime: "10 min read",
    imageUrl: icmCover,
    link: "https://www.linkedin.com/pulse/story-c-code-link-hydraulics-swmm5-dwflowc-robert-dickinson-mvv3e",
    issueNumber: 13,
    categories: ["SWMM5", "ICM InfoWorks"],
    difficulty: "intermediate",
    keywords: ["SWMM", "modeling", "hydraulics"]
  },
  {
    id: "12",
    title: "Story: C Code Node Hydraulics SWMM5 DYNWAVEC",
    description: "Examining the C code for dynamic wave node hydraulics in SWMM5.",
    date: "2 years ago",
    readTime: "9 min read",
    imageUrl: icmCover,
    link: "https://www.linkedin.com/pulse/story-c-code-node-hydraulics-swmm5-dynwavec-robert-dickinson-cgnte",
    issueNumber: 12,
    categories: ["SWMM5", "ICM InfoWorks"],
    difficulty: "intermediate",
    keywords: ["SWMM", "modeling", "hydraulics"]
  },
  {
    id: "11",
    title: "Story: C Code Hydrology SWMM5",
    description: "Understanding the hydrological calculations at the core of SWMM5.",
    date: "2 years ago",
    readTime: "8 min read",
    imageUrl: icmCover,
    link: "https://www.linkedin.com/pulse/story-c-code-hydrology-swmm5-robert-dickinson-2x0we",
    issueNumber: 11,
    categories: ["SWMM5", "ICM InfoWorks"],
    difficulty: "intermediate",
    keywords: ["SWMM", "modeling", "hydraulics"]
  },
  {
    id: "10",
    title: "Blogs: Modeling Components General SDSU SWMM5",
    description: "Educational resources on SWMM5 modeling components from SDSU.",
    date: "2 years ago",
    readTime: "6 min read",
    imageUrl: quizCover,
    link: "https://www.linkedin.com/pulse/blogs-modeling-components-general-sdsu-swmm5-robert-dickinson-xvfhe",
    issueNumber: 10,
    categories: ["SWMM5", "ICM InfoWorks"],
    difficulty: "intermediate",
    keywords: ["SWMM", "modeling", "hydraulics"]
  },
  {
    id: "9",
    title: "Interesting Modeling Blogs: InfoWorks ICM",
    description: "Curated collection of interesting blogs about water modeling and InfoWorks ICM.",
    date: "2 years ago",
    readTime: "7 min read",
    imageUrl: icmCover,
    link: "https://www.linkedin.com/pulse/interesting-modeling-blogs-interesante-infoworks-icm-robert-dickinson-3gr8e",
    issueNumber: 9,
    categories: ["SWMM5", "ICM InfoWorks"],
    difficulty: "intermediate",
    keywords: ["SWMM", "modeling", "hydraulics"]
  },
  {
    id: "8",
    title: "Roaming Around Singapore: Commenting on Drainage Features",
    description: "Travel observations and commentary on stormwater drainage systems in Singapore.",
    date: "2 years ago",
    readTime: "5 min read",
    imageUrl: icmCover,
    link: "https://www.linkedin.com/pulse/roaming-around-singapore-commenting-drainage-features-dickinson-pchpe",
    issueNumber: 8,
    categories: ["SWMM5", "ICM InfoWorks"],
    difficulty: "intermediate",
    keywords: ["SWMM", "modeling", "hydraulics"]
  },
  {
    id: "7",
    title: "Ruby and SQL: InfoWorks ICM SWMM Networks",
    description: "Combining Ruby and SQL for advanced InfoWorks ICM and SWMM network analysis.",
    date: "2 years ago",
    readTime: "8 min read",
    imageUrl: sqlCover,
    link: "https://www.linkedin.com/pulse/ruby-sql-infoworks-icm-swmm-networks-robert-dickinson-qvuwe",
    issueNumber: 7,
    categories: ["SWMM5", "ICM InfoWorks"],
    difficulty: "intermediate",
    keywords: ["SWMM", "modeling", "hydraulics"]
  },
  {
    id: "6",
    title: "Deep Dive: Inner Workings of XPSWMM and SWMM5 Through the Lens of ICM",
    description: "Technical analysis of XPSWMM and SWMM5 architecture as implemented in ICM.",
    date: "2 years ago",
    readTime: "11 min read",
    imageUrl: icmCover,
    link: "https://www.linkedin.com/pulse/deep-dive-inner-workings-xpswmm-swmm5-icm-through-lens-dickinson-ugoxe",
    issueNumber: 6,
    categories: ["SWMM5", "ICM InfoWorks"],
    difficulty: "intermediate",
    keywords: ["SWMM", "modeling", "hydraulics"]
  },
  {
    id: "5",
    title: "Deep Dive: Inside SWMM5 Using Tables",
    description: "Exploring SWMM5 internal structure and data tables.",
    date: "2 years ago",
    readTime: "9 min read",
    imageUrl: sqlCover,
    link: "https://www.linkedin.com/pulse/deep-dive-inside-swmm5-using-tables-robert-dickinson-ukjfe",
    issueNumber: 5,
    categories: ["SWMM5", "ICM InfoWorks"],
    difficulty: "intermediate",
    keywords: ["SWMM", "modeling", "hydraulics"]
  },
  {
    id: "4",
    title: "Seven Blogs about SWMM and Myself at Autodesk",
    description: "Personal reflections on SWMM development and water management innovation.",
    date: "2 years ago",
    readTime: "6 min read",
    imageUrl: icmCover,
    link: "https://www.linkedin.com/pulse/seven-blogs-swmm-myself-autodesk-robert-dickinson-pyafe",
    issueNumber: 4,
    categories: ["SWMM5", "ICM InfoWorks"],
    difficulty: "intermediate",
    keywords: ["SWMM", "modeling", "hydraulics"]
  },
  {
    id: "3",
    title: "Seven Blogs about ChatGPT and SWMM5",
    description: "Exploring the intersection of AI language models and stormwater modeling.",
    date: "2 years ago",
    readTime: "7 min read",
    imageUrl: aiCover,
    link: "https://www.linkedin.com/pulse/seven-blogs-chatgpt-swmm5-robert-dickinson-gqyxe",
    issueNumber: 3,
    categories: ["SWMM5", "ICM InfoWorks"],
    difficulty: "intermediate",
    keywords: ["SWMM", "modeling", "hydraulics"]
  },
  {
    id: "2",
    title: "Seven Blogs about Importing InfoSewer or InfoSWMM to ICM",
    description: "Comprehensive guide to model migration and data integration strategies.",
    date: "2 years ago",
    readTime: "11 min read",
    imageUrl: icmCover,
    link: "https://www.linkedin.com/pulse/seven-blogs-importing-infosewer-infoswmm-icm-robert-dickinson-bi47e",
    issueNumber: 2,
    categories: ["SWMM5", "ICM InfoWorks"],
    difficulty: "intermediate",
    keywords: ["SWMM", "modeling", "hydraulics"]
  },
  {
    id: "1",
    title: "SWMM5 Inside ICM InfoWorks",
    description: "How SWMM5 engine powers ICM InfoWorks and integration architecture.",
    date: "3 years ago",
    readTime: "8 min read",
    imageUrl: icmCover,
    link: "https://www.linkedin.com/pulse/swmm5-inside-icm-infoworks-robert-dickinson-b0tge",
    issueNumber: 1,
    categories: ["SWMM5", "ICM InfoWorks"],
    difficulty: "intermediate",
    keywords: ["SWMM", "modeling", "hydraulics"]
  }
];

export const linkedInArticles: LinkedInArticle[] = [
  {
    id: "linkedin-156",
    title: "Why Conduit Discretization Matters — and How ReSWMM Automates It for Your SWMM5 Models",
    description: "A practical look at a common modeling problem most stormwater engineers know but few talk about. Long conduits in EPA SWMM models are one of those hidden sources of inaccuracy — and ReSWMM automates the discretization process to fix it.",
    date: "2025",
    readTime: "22 min read",
    imageUrl: icmCover,
    link: "https://www.linkedin.com/pulse/why-conduit-discretization-matters-how-reswmm-automates-dickinson",
    categories: ["SWMM5"],
    difficulty: "advanced",
    keywords: ["conduit discretization", "ReSWMM", "SWMM5", "EPA SWMM", "dynamic wave", "routing", "pipe length", "modeling accuracy"]
  },
  {
    id: "linkedin-155",
    title: "From a 1982 Water Resources Paper to an Interactive App: Honoring Jim Heaney's Legacy Through Game Theory and Fair Cost Allocation",
    description: "An app honoring James 'Papa' Heaney, Head of Environmental Engineering at UC and UF for many years and a professor of Water Resources Engineering for 50 years. Based on a WRR 1982 paper about applying game theory to fair cost allocation in water resources. Heaney was also a coauthor of the first three SWMM manuals and passed away on August 24, 2024, at the age of 84.",
    date: "2025",
    readTime: "7 min read",
    imageUrl: historyCover,
    link: "https://www.linkedin.com/feed/update/urn:li:ugcPost:7436543013381844992/",
    categories: ["SWMM5", "History"],
    difficulty: "beginner",
    keywords: ["James Heaney", "game theory", "cost allocation", "water resources", "SWMM", "history", "UF", "UC"]
  },
  {
    id: "linkedin-154",
    title: "People of PySWMM and The Man Who Gave the Pipes a Python Voice",
    description: "A brief history of how one engineer connected a fifty-year-old government program to the future of intelligent infrastructure using Python and PySWMM.",
    date: "Today",
    readTime: "9 min read",
    imageUrl: aiCover,
    link: "https://www.linkedin.com/pulse/people-pyswmm-man-who-gave-pipes-python-voice-robert-dickinson",
    categories: ["SWMM5", "Code Analysis"],
    difficulty: "intermediate",
    keywords: ["PySWMM", "Python", "SWMM5", "open source", "API", "intelligent infrastructure"]
  },
  {
    id: "linkedin-153",
    title: "SWMM1 to SWMM5 Documentation Archive and Explorer (1970 to 2026)",
    description: "The SWMM Documentation Archive and Explorer is a web application that organizes, preserves, and makes searchable over five decades of EPA Storm Water Management Model documentation.",
    date: "Today",
    readTime: "9 min read",
    imageUrl: historyCover,
    link: "https://www.linkedin.com/pulse/swmm1-swmm5-documentation-archive-explorer-1970-2026-dickinson",
    categories: ["History", "SWMM5"],
    difficulty: "beginner",
    keywords: ["SWMM", "documentation", "archive", "history", "1970", "EPA", "explorer"]
  },
  {
    id: "linkedin-152",
    title: "From 53 Chapters in 5 PDF Files to One Search Box: Making the SWMM5 Manuals More Usable",
    description: "After four decades of working with EPA's Storm Water Management Model, I got tired of the same workflow every engineer knows: open an 800-page PDF, hunt for the right section. So I built a better way.",
    date: "Today",
    readTime: "6 min read",
    imageUrl: icmCover,
    link: "https://www.linkedin.com/pulse/from-53-chapters-5-pdf-files-one-search-box-making-robert-dickinson",
    categories: ["SWMM5", "Code Analysis"],
    difficulty: "beginner",
    keywords: ["SWMM5", "manuals", "search", "PDF", "documentation", "usability"]
  },
  {
    id: "linkedin-151",
    title: "Could You Rebuild Your ICM InfoWorks Model from Results (the IWR File) Alone?",
    description: "Here's a question that stumped me today: If all you had was the IWR results file, could you reconstruct your entire ICM InfoWorks model? A deep dive into what the results file really contains.",
    date: "Today",
    readTime: "5 min read",
    imageUrl: icmCover,
    link: "https://www.linkedin.com/pulse/could-you-rebuild-your-icm-infoworks-model-from-robert-dickinson",
    categories: ["ICM InfoWorks", "Model Testing"],
    difficulty: "advanced",
    keywords: ["ICM", "InfoWorks", "IWR file", "results", "model reconstruction", "reverse engineering"]
  },
  {
    id: "linkedin-150",
    title: "What Kind of Hydraulic Modeller (Modeler) Are You? Discover Your Modeling Style",
    description: "A fun exploration of the different types of hydraulic modelers in the water industry. Discover your modeling personality and approach to stormwater and sewer modeling.",
    date: "Today",
    readTime: "5 min read",
    imageUrl: quizCover,
    link: "https://www.linkedin.com/pulse/what-kind-hydraulic-modeller-modeler-you-discover-your-dickinson-nr85e",
    categories: ["SWMM5", "ICM InfoWorks", "Quiz"],
    difficulty: "beginner",
    keywords: ["hydraulic modeling", "modeler types", "personality", "water industry", "career"]
  },
  {
    id: "linkedin-149",
    title: "When Hyperbolic Geometry Meets Urban Drainage: Making Beautiful Subcatchments",
    description: "I've been exploring an unusual intersection: hyperbolic geometry and hydrological modeling. The result is a web-based tool that generates subcatchments.",
    date: "2 days ago",
    readTime: "1 min read",
    imageUrl: aiCover,
    link: "https://www.linkedin.com/pulse/when-hyperbolic-geometry-meets-urban-drainage-making-dickinson",
    categories: ["SWMM5", "AI/ML"],
    difficulty: "intermediate",
    keywords: ["hyperbolic geometry", "subcatchments", "hydrological modeling", "web tool"]
  },
  {
    id: "linkedin-148",
    title: "An App to Read and Create 3000 Informative Charts and Tables from the SWMM5 Report File",
    description: "There is quite a long backstory on this app. I started working on SWMM 2.5 programming in 1978 using punch cards to run the model and voluminous print outputs.",
    date: "2 days ago",
    readTime: "2 min read",
    imageUrl: aiCover,
    link: "https://www.linkedin.com/pulse/app-read-create-3000-informative-charts-tables-swmm5-dickinson",
    categories: ["SWMM5", "Code Analysis"],
    difficulty: "beginner",
    keywords: ["SWMM5", "report file", "charts", "tables", "visualization", "app"]
  },
  {
    id: "linkedin-147",
    title: "Using 31 Chaotic Systems with Almost Infinite Possibilities to Make SWMM5 Networks",
    description: "The problem with using 50 year old simple models or even test models that started out as real models as we did in the SWMM5 redevelopment project.",
    date: "2 days ago",
    readTime: "4 min read",
    imageUrl: aiCover,
    link: "https://www.linkedin.com/pulse/using-31-chaotic-systems-almost-infinite-possibilities-dickinson",
    categories: ["SWMM5", "Model Testing"],
    difficulty: "advanced",
    keywords: ["chaotic systems", "SWMM5", "network generation", "test models"]
  },
  {
    id: "linkedin-14",
    title: "Using ICM Ruby Scripts to Import 2K SWMM5 Files to ICM",
    description: "A simple yet powerful article about the awesomeness of Ruby scripting in ICM InfoWorks. Now with thousands of SWMM5 models imported into ICM.",
    date: "3 days ago",
    readTime: "2 min read",
    imageUrl: rubyCover,
    link: "https://www.linkedin.com/pulse/using-icm-ruby-scripts-import-2k-swmm5-files-icm-robert-dickinson",
    categories: ["Ruby Scripting", "ICM InfoWorks"],
    difficulty: "intermediate",
    keywords: ["Ruby", "SWMM5", "import", "automation"]
  },
  {
    id: "linkedin-15",
    title: "20K Words on ICM InfoWorks Ruby Scripting, Nano Banana Diagram Version",
    description: "Detailed diagrams of engineering concepts made by Nano Banana, exploring Ruby scripting in ICM InfoWorks and X or Twitter.",
    date: "4 days ago",
    readTime: "2 min read",
    imageUrl: rubyCover,
    link: "https://www.linkedin.com/pulse/20k-words-icm-infoworks-ruby-scripting-nano-banana-robert-dickinson",
    categories: ["SWMM5", "ICM InfoWorks"],
    difficulty: "intermediate",
    keywords: ["SWMM", "modeling", "hydraulics"]
  },
  {
    id: "linkedin-16",
    title: "An App for People Who Have Been Seeing the SWMM5 Report file for 1 - 50 Years",
    description: "Part of the Vibe coding revolution - an app that helps fix a many-decades-long pain point for SWMM5 users viewing report files.",
    date: "5 days ago",
    readTime: "2 min read",
    imageUrl: aiCover,
    link: "https://www.linkedin.com/pulse/app-people-who-have-been-seeing-swmm5-report-file-robert-dickinson",
    categories: ["SWMM5", "ICM InfoWorks"],
    difficulty: "intermediate",
    keywords: ["SWMM", "modeling", "hydraulics"]
  },
  {
    id: "linkedin-17",
    title: "InfoSewer to ICM InfoWorks App (for AI and Humans)",
    description: "An app you can run on a desktop or cell phone to convert an InfoSewer model from the native DBF files of Innovyze InfoSewer.",
    date: "1 week ago",
    readTime: "2 min read",
    imageUrl: icmCover,
    link: "https://www.linkedin.com/pulse/infosewer-icm-infoworks-app-ai-humans-robert-dickinson-nhuye",
    categories: ["SWMM5", "ICM InfoWorks"],
    difficulty: "intermediate",
    keywords: ["SWMM", "modeling", "hydraulics"]
  },
  {
    id: "linkedin-18",
    title: "EPA SWMM5 Inp File Reader App for Stats and Images of the Network Elements",
    description: "A tool for water resources professionals to analyze SWMM input files and generate statistics and visualizations of network elements.",
    date: "2 weeks ago",
    readTime: "4 min read",
    imageUrl: sqlCover,
    link: "https://www.linkedin.com/pulse/epa-swmm5-inp-file-reader-app-stats-images-network-robert-dickinson-6o7ye",
    categories: ["SWMM5", "ICM InfoWorks"],
    difficulty: "intermediate",
    keywords: ["SWMM", "modeling", "hydraulics"]
  },
  {
    id: "linkedin-19",
    title: "Level Up Your ICM InfoWorks Skills: Try This Interactive Technical Quiz App on Replit",
    description: "An interactive quiz app for stormwater engineers to test their knowledge of ICM InfoWorks, covering unit conversions and advanced hydraulics.",
    date: "2 weeks ago",
    readTime: "2 min read",
    imageUrl: quizCover,
    link: "https://www.linkedin.com/pulse/level-up-icm-infoworks-skills-interactive-technical-quiz-robert-dickinson",
    categories: ["SWMM5", "ICM InfoWorks"],
    difficulty: "intermediate",
    keywords: ["SWMM", "modeling", "hydraulics"]
  },
  {
    id: "linkedin-20",
    title: "Level Up Your SWMM5 Skills: Try This Interactive Technical Quiz App on Replit",
    description: "Test your expertise with an interactive quiz covering SWMM5 fundamentals, unit conversions, and advanced hydraulic concepts.",
    date: "2 weeks ago",
    readTime: "2 min read",
    imageUrl: quizCover,
    link: "https://www.linkedin.com/pulse/level-up-swmm5-skills-interactive-technical-quiz-robert-dickinson",
    categories: ["SWMM5", "ICM InfoWorks"],
    difficulty: "intermediate",
    keywords: ["SWMM", "modeling", "hydraulics"]
  },
  {
    id: "linkedin-21",
    title: "Revolutionizing Hydraulic Network Data Export: A Universal Ruby Script Tool for InfoWorks ICM and SWMM Networks",
    description: "A comprehensive Ruby data exporter that adapts to your network type for SWMM and InfoWorks ICM data extraction.",
    date: "2 weeks ago",
    readTime: "3 min read",
    imageUrl: rubyCover,
    link: "https://www.linkedin.com/pulse/revolutionizing-hydraulic-network-data-export-universal-ruby-robert-dickinson",
    categories: ["SWMM5", "ICM InfoWorks"],
    difficulty: "intermediate",
    keywords: ["SWMM", "modeling", "hydraulics"]
  },
  {
    id: "linkedin-22",
    title: "Eight ICMs in One. ICM Ultimate, Sewer, Flood, and Viewer for InfoWorks and SWMM Networks",
    description: "An overview of the evolution of ICM Standard into ICM Flood and ICM Sewer, and the capabilities of ICM Ultimate.",
    date: "3 weeks ago",
    readTime: "1 min read",
    imageUrl: icmCover,
    link: "https://www.linkedin.com/pulse/eight-icms-one-icm-ultimate-sewer-flood-viewer-infoworks-robert-dickinson",
    categories: ["SWMM5", "ICM InfoWorks"],
    difficulty: "intermediate",
    keywords: ["SWMM", "modeling", "hydraulics"]
  },
  {
    id: "linkedin-23",
    title: "Bridging Decades: Reading InfoSewer Report RPT Output for ICM InfoWorks in 2030+",
    description: "Solutions for accessing and interpreting InfoSewer output from legacy projects dating back decades.",
    date: "3 weeks ago",
    readTime: "2 min read",
    imageUrl: historyCover,
    link: "https://www.linkedin.com/pulse/bridging-decades-reading-infosewer-report-rpt-output-icm-robert-dickinson",
    categories: ["SWMM5", "ICM InfoWorks"],
    difficulty: "intermediate",
    keywords: ["SWMM", "modeling", "hydraulics"]
  },
  {
    id: "linkedin-24",
    title: "Reviving 1988 SWMM4 Models with AI: A Seamless Transition to SWMM5",
    description: "A guide to converting vintage SWMM4 models from 1988 to modern SWMM5 using AI-assisted techniques.",
    date: "3 weeks ago",
    readTime: "7 min read",
    imageUrl: aiCover,
    link: "https://www.linkedin.com/pulse/reviving-1988-swmm4-models-ai-seamless-transition-swmm5-robert-dickinson",
    categories: ["SWMM5", "ICM InfoWorks"],
    difficulty: "intermediate",
    keywords: ["SWMM", "modeling", "hydraulics"]
  },
  {
    id: "linkedin-25",
    title: "Converting ICM InfoWorks PRN Files to CFS Units with AI in 2025",
    description: "Addressing unit conversion challenges in ICM InfoWorks with AI-powered solutions for PRN file analysis.",
    date: "1 month ago",
    readTime: "2 min read",
    imageUrl: aiCover,
    link: "https://www.linkedin.com/pulse/converting-icm-infoworks-prn-files-cfs-units-ai-2025-robert-dickinson",
    categories: ["SWMM5", "ICM InfoWorks"],
    difficulty: "intermediate",
    keywords: ["SWMM", "modeling", "hydraulics"]
  },
  {
    id: "linkedin-26",
    title: "Exporting Up to 99 HW Conduit Parameters to CSV with Ruby in InfoWorks ICM",
    description: "A Ruby script to export hw_conduits data to CSV format, simplifying data analysis for InfoWorks ICM projects.",
    date: "1 month ago",
    readTime: "3 min read",
    imageUrl: rubyCover,
    link: "https://www.linkedin.com/pulse/exporting-99-hw-conduit-parameters-csv-ruby-infoworks-icm-robert-dickinson",
    categories: ["SWMM5", "ICM InfoWorks"],
    difficulty: "intermediate",
    keywords: ["SWMM", "modeling", "hydraulics"]
  },
  {
    id: "linkedin-27",
    title: "Extran1 and Extran2 from the Extran Manual for AI, GitHub, SWMM5, used in ICM SWMM and InfoWorks",
    description: "A historical examination of Extran test files showing the continuity in stormwater modeling from 1980 to 2025.",
    date: "1 month ago",
    readTime: "8 min read",
    imageUrl: historyCover,
    link: "https://www.linkedin.com/pulse/extran1-extran2-extran-manual-ai-github-swmm5-robert-dickinson",
    categories: ["SWMM5", "ICM InfoWorks"],
    difficulty: "intermediate",
    keywords: ["SWMM", "modeling", "hydraulics"]
  },
  {
    id: "linkedin-28",
    title: "Example 7 of Extran Manual - Type 2 Pump for AI, GitHub, SWMM5, used in ICM SWMM and InfoWorks",
    description: "Analysis of SWMM3 Extran3 Type 2 Pump test file as a historical reference for modern hydraulic modeling.",
    date: "1 month ago",
    readTime: "8 min read",
    imageUrl: icmCover,
    link: "https://www.linkedin.com/pulse/example-7-extran-manual-type-2-pump-ai-github-swmm5-robert-dickinson",
    categories: ["SWMM5", "ICM InfoWorks"],
    difficulty: "intermediate",
    keywords: ["SWMM", "modeling", "hydraulics"]
  },
  {
    id: "linkedin-29",
    title: "Example 6 of Extran Manual - Type 1 Pump for AI, GitHub, SWMM5, used in ICM SWMM and InfoWorks",
    description: "Historical analysis of SWMM3 Extran3 Type 1 Pump test file and its relevance to modern SWMM5 modeling.",
    date: "1 month ago",
    readTime: "8 min read",
    imageUrl: icmCover,
    link: "https://www.linkedin.com/pulse/example-6-extran-manual-type-1-pump-ai-github-swmm5-robert-dickinson",
    categories: ["SWMM5", "ICM InfoWorks"],
    difficulty: "intermediate",
    keywords: ["SWMM", "modeling", "hydraulics"]
  },
  {
    id: "linkedin-30",
    title: "Extran 5 Storage Facility with Side Outlet Orifice for AI, GitHub, SWMM5, used in ICM SWMM and InfoWorks",
    description: "Exploring the SWMM3 Extran3 side outlet orifice test file as a historical reference for hydraulic modeling.",
    date: "1 month ago",
    readTime: "9 min read",
    imageUrl: icmCover,
    link: "https://www.linkedin.com/pulse/extran-5-storage-facility-side-outlet-orifice-ai-github-robert-dickinson",
    categories: ["SWMM5", "ICM InfoWorks"],
    difficulty: "intermediate",
    keywords: ["SWMM", "modeling", "hydraulics"]
  },
  {
    id: "linkedin-31",
    title: "SWMM 44H Fortran Code from 2004 on GitHub",
    description: "A GitHub repository preserving the SWMM 4 Fortran engine and associated files from Wayne C. Huber's version at Oregon State University.",
    date: "1 month ago",
    readTime: "2 min read",
    imageUrl: historyCover,
    link: "https://www.linkedin.com/pulse/swmm-44h-fortran-code-2004-github-robert-dickinson",
    categories: ["SWMM5", "ICM InfoWorks"],
    difficulty: "intermediate",
    keywords: ["SWMM", "modeling", "hydraulics"]
  },
  {
    id: "linkedin-32",
    title: "The Many Avenues of Ruby Help in the ICM Online Help File—Hint for AI Usage",
    description: "A guide to discovering Ruby help resources in the ICM online documentation for AI-assisted learning.",
    date: "1 month ago",
    readTime: "2 min read",
    imageUrl: rubyCover,
    link: "https://www.linkedin.com/pulse/many-avenues-ruby-help-icm-online-help-file-hint-ai-robert-dickinson",
    categories: ["SWMM5", "ICM InfoWorks"],
    difficulty: "intermediate",
    keywords: ["SWMM", "modeling", "hydraulics"]
  },
  {
    id: "linkedin-33",
    title: "Ruby Code for ICM InfoWorks and ICM SWMM Comparisons is now in 25 Folders on the Innovyze GitHub",
    description: "A reorganized suite of Ruby code on the Innovyze GitHub with improved folder structure and expanded examples.",
    date: "1 month ago",
    readTime: "1 min read",
    imageUrl: rubyCover,
    link: "https://www.linkedin.com/pulse/ruby-code-icm-infoworks-icm-swmm-comparisons-25-folders-robert-dickinson",
    categories: ["SWMM5", "ICM InfoWorks"],
    difficulty: "intermediate",
    keywords: ["SWMM", "modeling", "hydraulics"]
  },
  {
    id: "linkedin-34",
    title: "Running List of my LinkedIn Articles",
    description: "A comprehensive index of 153+ LinkedIn articles covering SWMM history and water modeling expertise.",
    date: "1 month ago",
    readTime: "47 min read",
    imageUrl: quizCover,
    link: "https://www.linkedin.com/posts/robertdickinson_wayne-huber-icwmm-2020-talk-about-the-history-activity-7150973026879119360-G",
    categories: ["SWMM5", "ICM InfoWorks"],
    difficulty: "intermediate",
    keywords: ["SWMM", "modeling", "hydraulics"]
  },
  {
    id: "linkedin-35",
    title: "SWMM3 Weir Extran4 Test File for AI, GitHub, SWMM5, ICM",
    description: "Historical significance and modern application of the SWMM3 weir test file in contemporary hydraulic modeling.",
    date: "2 months ago",
    readTime: "4 min read",
    imageUrl: historyCover,
    link: "https://www.linkedin.com/pulse/swmm3-weir-extran4-test-file-ai-github-swmm5-icm-robert-dickinson",
    categories: ["SWMM5", "ICM InfoWorks"],
    difficulty: "intermediate",
    keywords: ["SWMM", "modeling", "hydraulics"]
  },
  {
    id: "linkedin-36",
    title: "Creating Complete SWMM5 Input Files Using AI Chain Prompting from SWMM5 Rules",
    description: "A two-prompt strategy for generating complete SWMM5 input files using AI chain prompting techniques.",
    date: "2 months ago",
    readTime: "3 min read",
    imageUrl: aiCover,
    link: "https://www.linkedin.com/pulse/creating-complete-swmm5-input-files-using-ai-chain-prompting-robert-dickinson",
    categories: ["SWMM5", "ICM InfoWorks"],
    difficulty: "intermediate",
    keywords: ["SWMM", "modeling", "hydraulics"]
  },
  {
    id: "linkedin-37",
    title: "100 Other AI-Related Locations for Learning ICM besides the ICM Technical Hub",
    description: "A comprehensive guide to discovering 100+ alternative resources for learning InfoWorks ICM with AI assistance.",
    date: "2 months ago",
    readTime: "4 min read",
    imageUrl: aiCover,
    link: "https://www.linkedin.com/pulse/100-other-ai-related-locations-learning-icm-besides-technical-hub-robert-dickinson",
    categories: ["SWMM5", "ICM InfoWorks"],
    difficulty: "intermediate",
    keywords: ["SWMM", "modeling", "hydraulics"]
  },
  {
    id: "linkedin-38",
    title: "SWMM3 Orifice Extran3 Test File for AI, GitHub, SWMM5, ICM",
    description: "Analyzing the historical significance of the SWMM3 orifice test file for modern hydraulic modeling applications.",
    date: "2 months ago",
    readTime: "4 min read",
    imageUrl: historyCover,
    link: "https://www.linkedin.com/pulse/swmm3-orifice-extran3-test-file-ai-github-swmm5-icm-robert-dickinson",
    categories: ["SWMM5", "ICM InfoWorks"],
    difficulty: "intermediate",
    keywords: ["SWMM", "modeling", "hydraulics"]
  },
  {
    id: "linkedin-39",
    title: "InfoSewer Load Allocation Expertise: Test Yourself with 50 Questions for 2025 to 2050",
    description: "A comprehensive 50-question quiz based on Innovyze's DWF Allocator to test understanding of load allocation features.",
    date: "2 months ago",
    readTime: "11 min read",
    imageUrl: quizCover,
    link: "https://www.linkedin.com/pulse/infosewer-load-allocation-expertise-test-yourself-50-questions-robert-dickinson",
    categories: ["SWMM5", "ICM InfoWorks"],
    difficulty: "intermediate",
    keywords: ["SWMM", "modeling", "hydraulics"]
  },
  {
    id: "linkedin-40",
    title: "Diamond Village at the University of Florida and SWMM 2.5, 3, and 4 and XPSWMM",
    description: "A case study of Diamond Village housing community and the stormwater modeling evolution across SWMM versions.",
    date: "2 months ago",
    readTime: "4 min read",
    imageUrl: historyCover,
    link: "https://www.linkedin.com/pulse/diamond-village-university-florida-swmm-2-5-3-4-xpswmm-robert-dickinson",
    categories: ["SWMM5", "ICM InfoWorks"],
    difficulty: "intermediate",
    keywords: ["SWMM", "modeling", "hydraulics"]
  },
  {
    id: "linkedin-41",
    title: "Detecting and Preventing Invalid Hydraulic Solutions in SWMM 5",
    description: "Techniques for identifying and preventing invalid hydraulic solutions in SWMM5 simulations using best practices.",
    date: "2 months ago",
    readTime: "4 min read",
    imageUrl: icmCover,
    link: "https://www.linkedin.com/pulse/detecting-preventing-invalid-hydraulic-solutions-swmm-5-robert-dickinson",
    categories: ["SWMM5", "ICM InfoWorks"],
    difficulty: "intermediate",
    keywords: ["SWMM", "modeling", "hydraulics"]
  },
  {
    id: "linkedin-42",
    title: "Enhancing Subcatchment Connectivity in InfoWorks ICM: A Step-by-Step Guide Using Ruby Scripting",
    description: "A comprehensive Ruby scripting guide for improving subcatchment connectivity and network analysis in InfoWorks ICM.",
    date: "2 months ago",
    readTime: "6 min read",
    imageUrl: rubyCover,
    link: "https://www.linkedin.com/pulse/enhancing-subcatchment-connectivity-infoworks-icm-step-by-step-robert-dickinson",
    categories: ["SWMM5", "ICM InfoWorks"],
    difficulty: "intermediate",
    keywords: ["SWMM", "modeling", "hydraulics"]
  },
  {
    id: "linkedin-43",
    title: "Why You Should Not Import InfoSewer to InfoSWMM but Use the Newer AWI Ruby/ODIC Methodology with SQL",
    description: "Best practices and newer methodologies for migrating InfoSewer models using AWI Ruby and SQL instead of direct import.",
    date: "2 months ago",
    readTime: "3 min read",
    imageUrl: sqlCover,
    link: "https://www.linkedin.com/pulse/why-you-should-not-import-infosewer-infoswmm-newer-awi-methodology-robert-dickinson",
    categories: ["SWMM5", "ICM InfoWorks"],
    difficulty: "intermediate",
    keywords: ["SWMM", "modeling", "hydraulics"]
  },
  {
    id: "linkedin-44",
    title: "Introducing SWMM5+ - Journal of Environmental Engineering, 2024",
    description: "An overview of the SWMM5+ project focusing on improving the computational efficiency of the EPA SWMM hydraulic solver.",
    date: "2 months ago",
    readTime: "1 min read",
    imageUrl: aiCover,
    link: "https://www.linkedin.com/pulse/introducing-swmm5-journal-environmental-engineering-2024-robert-dickinson",
    categories: ["SWMM5", "ICM InfoWorks"],
    difficulty: "intermediate",
    keywords: ["SWMM", "modeling", "hydraulics"]
  },
  {
    id: "linkedin-45",
    title: "The Steady State, EPS, and Kinematic, Dynamic Wave Options in InfoSewer, SWMM5, InfoSWMM, ICM SWMM, and ICM INFOWORKS",
    description: "Understanding different hydraulic simulation methods and their applications across various water modeling platforms.",
    date: "2 months ago",
    readTime: "5 min read",
    imageUrl: icmCover,
    link: "https://www.linkedin.com/pulse/steady-state-eps-kinematic-dynamic-wave-options-infosewer-robert-dickinson",
    categories: ["SWMM5", "ICM InfoWorks"],
    difficulty: "intermediate",
    keywords: ["SWMM", "modeling", "hydraulics"]
  },
  {
    id: "linkedin-46",
    title: "Ruby ICM InfoWorks vs. ICM SWMM Link Property Data Comparison",
    description: "A Ruby script designed to compare link property data between ICM InfoWorks and ICM SWMM networks.",
    date: "2 months ago",
    readTime: "4 min read",
    imageUrl: rubyCover,
    link: "https://www.linkedin.com/pulse/ruby-icm-infoworks-vs-icm-swmm-link-property-data-comparison-robert-dickinson",
    categories: ["SWMM5", "ICM InfoWorks"],
    difficulty: "intermediate",
    keywords: ["SWMM", "modeling", "hydraulics"]
  },
  {
    id: "linkedin-47",
    title: "Ruby ICM InfoWorks vs. ICM SWMM Node Property Data Comparison",
    description: "A Ruby script for bridging the gap between ICM InfoWorks and ICM SWMM through node property analysis.",
    date: "3 months ago",
    readTime: "4 min read",
    imageUrl: rubyCover,
    link: "https://www.linkedin.com/pulse/ruby-icm-infoworks-vs-icm-swmm-node-property-data-comparison-robert-dickinson",
    categories: ["SWMM5", "ICM InfoWorks"],
    difficulty: "intermediate",
    keywords: ["SWMM", "modeling", "hydraulics"]
  },
  {
    id: "linkedin-48",
    title: "Navigating the Landscape of Hydraulic Modeling: A Comparative Study of InfoSewer, ICM InfoWorks, and ICM SWMM",
    description: "Exploring interoperability and comparative performance of InfoSewer, ICM InfoWorks, and ICM SWMM for steady state models.",
    date: "3 months ago",
    readTime: "2 min read",
    imageUrl: icmCover,
    link: "https://www.linkedin.com/pulse/navigating-landscape-hydraulic-modeling-comparative-study-robert-dickinson",
    categories: ["SWMM5", "ICM InfoWorks"],
    difficulty: "intermediate",
    keywords: ["SWMM", "modeling", "hydraulics"]
  },
  {
    id: "linkedin-49",
    title: "Deep Dive into Water Quality Buildup Washoff (BW) in ICM InfoWorks using the SWMM5 BW Options",
    description: "Investigation of water quality modeling in ICM InfoWorks with all SWMM5 buildup washoff choices for runoff simulations.",
    date: "3 months ago",
    readTime: "5 min read",
    imageUrl: icmCover,
    link: "https://www.linkedin.com/pulse/deep-dive-water-quality-buildup-washoff-bw-icm-infoworks-robert-dickinson",
    categories: ["SWMM5", "ICM InfoWorks"],
    difficulty: "intermediate",
    keywords: ["SWMM", "modeling", "hydraulics"]
  },
  {
    id: "linkedin-50",
    title: "How to Use the Graph/Report Output of InfoSewer/InfoSWMM to Make Observed Predicted Custom Graphs in ICM InfoWorks",
    description: "A step-by-step guide to creating custom observed-predicted graphs in ICM InfoWorks using legacy software outputs.",
    date: "3 months ago",
    readTime: "3 min read",
    imageUrl: icmCover,
    link: "https://www.linkedin.com/pulse/how-to-use-graph-report-output-infosewer-infoswmm-custom-graphs-robert-dickinson",
    categories: ["SWMM5", "ICM InfoWorks"],
    difficulty: "intermediate",
    keywords: ["SWMM", "modeling", "hydraulics"]
  },
  {
    id: "linkedin-51",
    title: "Using Ruby for some InfoSWMM Subcatchment Manager Tools In ICM Infoworks",
    description: "Leveraging Ruby scripting to implement InfoSWMM subcatchment management tools within ICM InfoWorks environments.",
    date: "3 months ago",
    readTime: "3 min read",
    imageUrl: rubyCover,
    link: "https://www.linkedin.com/pulse/using-ruby-infoswmm-subcatchment-manager-tools-icm-infoworks-robert-dickinson",
    categories: ["SWMM5", "ICM InfoWorks"],
    difficulty: "intermediate",
    keywords: ["SWMM", "modeling", "hydraulics"]
  },
  {
    id: "linkedin-52",
    title: "Using AI to Interpret the PRN file of ICM Infoworks for a person with a SWMM5 Background",
    description: "A guide to understanding ICM InfoWorks PRN output files using AI assistance for SWMM5-experienced professionals.",
    date: "3 months ago",
    readTime: "6 min read",
    imageUrl: aiCover,
    link: "https://www.linkedin.com/pulse/using-ai-interpret-prn-file-icm-infoworks-person-swmm5-background-robert-dickinson",
    categories: ["SWMM5", "ICM InfoWorks"],
    difficulty: "intermediate",
    keywords: ["SWMM", "modeling", "hydraulics"]
  },
  {
    id: "linkedin-53",
    title: "Streamlining ICM Workflow: Preserving User-Fields with Ruby Automation to CSV Files",
    description: "A Ruby automation script to preserve ICM user fields to CSV format for enhanced workflow management.",
    date: "3 months ago",
    readTime: "2 min read",
    imageUrl: rubyCover,
    link: "https://www.linkedin.com/pulse/streamlining-icm-workflow-preserving-user-fields-ruby-automation-robert-dickinson",
    categories: ["SWMM5", "ICM InfoWorks"],
    difficulty: "intermediate",
    keywords: ["SWMM", "modeling", "hydraulics"]
  },
  {
    id: "linkedin-54",
    title: "Using Ruby to supplement Native ICM QM Tau or Shear Stress",
    description: "A Ruby script to process ICM InfoWorks simulation results and supplement shear stress calculations using custom equations.",
    date: "3 months ago",
    readTime: "4 min read",
    imageUrl: rubyCover,
    link: "https://www.linkedin.com/pulse/using-ruby-supplement-native-icm-qm-tau-shear-stress-robert-dickinson",
    categories: ["SWMM5", "ICM InfoWorks"],
    difficulty: "intermediate",
    keywords: ["SWMM", "modeling", "hydraulics"]
  },
  {
    id: "linkedin-55",
    title: "Using Ruby to Read the Steady State Report file of InfoSewer post 2025+",
    description: "A Ruby script to parse and analyze InfoSewer steady state report files for modern workflow integration.",
    date: "3 months ago",
    readTime: "4 min read",
    imageUrl: rubyCover,
    link: "https://www.linkedin.com/pulse/using-ruby-read-steady-state-report-file-infosewer-post-2025-robert-dickinson",
    categories: ["SWMM5", "ICM InfoWorks"],
    difficulty: "intermediate",
    keywords: ["SWMM", "modeling", "hydraulics"]
  },
  {
    id: "linkedin-56",
    title: "Using Ruby to Recreate the InfoSWMM Node Report Tables in ICM SWMM from any SWMM5 Report File",
    description: "A Ruby script to recreate InfoSWMM-style node report tables from SWMM5 output in ICM SWMM environments.",
    date: "3 months ago",
    readTime: "4 min read",
    imageUrl: rubyCover,
    link: "https://www.linkedin.com/pulse/using-ruby-recreate-infoswmm-node-report-tables-icm-swmm-robert-dickinson",
    categories: ["SWMM5", "ICM InfoWorks"],
    difficulty: "intermediate",
    keywords: ["SWMM", "modeling", "hydraulics"]
  },
  {
    id: "linkedin-57",
    title: "How to Use Ruby to Read Problem Node and Links from the SWMM5 Report File and Add them as Selected Elements in ICM SWMM",
    description: "A tutorial on using Ruby to identify problematic network elements and integrate them into ICM SWMM analysis tools.",
    date: "3 months ago",
    readTime: "3 min read",
    imageUrl: rubyCover,
    link: "https://www.linkedin.com/pulse/how-to-use-ruby-read-problem-node-links-swmm5-report-file-robert-dickinson",
    categories: ["SWMM5", "ICM InfoWorks"],
    difficulty: "intermediate",
    keywords: ["SWMM", "modeling", "hydraulics"]
  },
  {
    id: "linkedin-58",
    title: "ICM SWMM and InfoDrainage share the same swmmsim.exe Engine SWMM 5.2.4, InfoSWMM uses an older version",
    description: "A detailed explanation of the different SWMM engines used across Innovyze and Autodesk water modeling products.",
    date: "3 months ago",
    readTime: "10 min read",
    imageUrl: icmCover,
    link: "https://www.linkedin.com/pulse/icm-swmm-infodrainage-share-same-swmmsim-exe-engine-swmm-robert-dickinson",
    categories: ["SWMM5", "ICM InfoWorks"],
    difficulty: "intermediate",
    keywords: ["SWMM", "modeling", "hydraulics"]
  },
  {
    id: "linkedin-59",
    title: "Using Ruby to Export ICM InfoWorks Node, Link, and Subcatchment Grid Data to Shapefiles",
    description: "A Ruby script to export GIS data from ICM InfoWorks networks to shapefile format for external analysis.",
    date: "4 months ago",
    readTime: "2 min read",
    imageUrl: rubyCover,
    link: "https://www.linkedin.com/pulse/using-ruby-export-icm-infoworks-node-link-subcatchment-grid-robert-dickinson",
    categories: ["SWMM5", "ICM InfoWorks"],
    difficulty: "intermediate",
    keywords: ["SWMM", "modeling", "hydraulics"]
  },
  {
    id: "linkedin-60",
    title: "Using Ruby to Export ICM InfoWorks User-Selected Link Results to a Custom CSV Folder",
    description: "A script to streamline the export of user-selected link results from ICM InfoWorks to custom CSV files.",
    date: "4 months ago",
    readTime: "2 min read",
    imageUrl: rubyCover,
    link: "https://www.linkedin.com/pulse/using-ruby-export-icm-infoworks-user-selected-link-results-csv-robert-dickinson",
    categories: ["SWMM5", "ICM InfoWorks"],
    difficulty: "intermediate",
    keywords: ["SWMM", "modeling", "hydraulics"]
  },
  {
    id: "linkedin-61",
    title: "23 Ruby Lessons in the ICM InfoWorks Online Help File from Autodesk",
    description: "A guide to the 23 Ruby scripting lessons available in the InfoWorks ICM online help documentation.",
    date: "4 months ago",
    readTime: "2 min read",
    imageUrl: rubyCover,
    link: "https://www.linkedin.com/pulse/23-ruby-lessons-icm-infoworks-online-help-file-autodesk-robert-dickinson",
    categories: ["SWMM5", "ICM InfoWorks"],
    difficulty: "intermediate",
    keywords: ["SWMM", "modeling", "hydraulics"]
  },
  {
    id: "linkedin-62",
    title: "How to use SWMM5 Buildup/Washoff in an ICM InfoWorks Network for Event Mean Concentrations (EMC)",
    description: "A ten-step guide to implementing SWMM5 buildup and washoff processes for water quality analysis in ICM InfoWorks.",
    date: "4 months ago",
    readTime: "1 min read",
    imageUrl: icmCover,
    link: "https://www.linkedin.com/pulse/how-to-use-swmm5-buildup-washoff-icm-infoworks-network-emc-robert-dickinson",
    categories: ["SWMM5", "ICM InfoWorks"],
    difficulty: "intermediate",
    keywords: ["SWMM", "modeling", "hydraulics"]
  },
  {
    id: "linkedin-63",
    title: "Knowledge Assisted Theme Enhancements in ICM SWMM to Show InfoSWMM Like Map Displays for d/D and q/Q",
    description: "Creating SQL-based theme enhancements in ICM SWMM to display hydraulic conditions similar to InfoSWMM interfaces.",
    date: "4 months ago",
    readTime: "2 min read",
    imageUrl: icmCover,
    link: "https://www.linkedin.com/pulse/knowledge-assisted-theme-enhancements-icm-swmm-show-infoswmm-robert-dickinson",
    categories: ["SWMM5", "ICM InfoWorks"],
    difficulty: "intermediate",
    keywords: ["SWMM", "modeling", "hydraulics"]
  },
  {
    id: "linkedin-64",
    title: "Using Ruby to Recreate the InfoSWMM Link Report Tables in ICM SWMM from any SWMM5 Report File",
    description: "A Ruby script to recreate InfoSWMM-style link report tables from SWMM5 output files in ICM SWMM.",
    date: "4 months ago",
    readTime: "8 min read",
    imageUrl: rubyCover,
    link: "https://www.linkedin.com/pulse/using-ruby-recreate-infoswmm-link-report-tables-icm-swmm-robert-dickinson",
    categories: ["SWMM5", "ICM InfoWorks"],
    difficulty: "intermediate",
    keywords: ["SWMM", "modeling", "hydraulics"]
  },
  {
    id: "linkedin-65",
    title: "Unhappy with some components of the LI Social Selling Index, I make up my own SSI+ Index",
    description: "A critique of LinkedIn's Social Selling Index with proposed improvements based on professional networking observations.",
    date: "4 months ago",
    readTime: "2 min read",
    imageUrl: quizCover,
    link: "https://www.linkedin.com/pulse/unhappy-some-components-li-social-selling-index-i-make-up-own-robert-dickinson",
    categories: ["SWMM5", "ICM InfoWorks"],
    difficulty: "intermediate",
    keywords: ["SWMM", "modeling", "hydraulics"]
  },
  {
    id: "linkedin-66",
    title: "Using Ruby to Create Sensitivity Scenarios in ICM InfoWorks",
    description: "A Ruby script for automating the creation of multiple sensitivity analysis scenarios in ICM InfoWorks networks.",
    date: "4 months ago",
    readTime: "4 min read",
    imageUrl: rubyCover,
    link: "https://www.linkedin.com/pulse/using-ruby-create-sensitivity-scenarios-icm-infoworks-robert-dickinson",
    categories: ["SWMM5", "ICM InfoWorks"],
    difficulty: "intermediate",
    keywords: ["SWMM", "modeling", "hydraulics"]
  },
  {
    id: "linkedin-67",
    title: "A Better Workflow for InfoSWMM to ICM SWMM Network Conversions for ALL InfoSWMM Scenarios",
    description: "A streamlined process for importing InfoSWMM models with all scenarios and active elements into ICM SWMM networks.",
    date: "5 months ago",
    readTime: "8 min read",
    imageUrl: icmCover,
    link: "https://www.linkedin.com/pulse/better-workflow-infoswmm-icm-swmm-network-conversions-all-scenarios-robert-dickinson",
    categories: ["SWMM5", "ICM InfoWorks"],
    difficulty: "intermediate",
    keywords: ["SWMM", "modeling", "hydraulics"]
  },
  {
    id: "linkedin-68",
    title: "How to Use the USEPA SWMM-Climate Adjustment Tool with ICM InfoWorks, ICM SWMM, and Autodesk InfoDrainage",
    description: "A guide to implementing EPA's climate adjustment tool for SWMM5 across various Autodesk water modeling platforms.",
    date: "5 months ago",
    readTime: "3 min read",
    imageUrl: aiCover,
    link: "https://www.linkedin.com/pulse/how-to-use-usepa-swmm-climate-adjustment-tool-icm-infoworks-robert-dickinson",
    categories: ["SWMM5", "ICM InfoWorks"],
    difficulty: "intermediate",
    keywords: ["SWMM", "modeling", "hydraulics"]
  },
  {
    id: "linkedin-69",
    title: "Curve Number or CNSWMM infiltration model for 2D simulations is now in ICM 2025.1",
    description: "An overview of the new curve number infiltration feature available in ICM 2025.1 for 2D mesh simulations.",
    date: "5 months ago",
    readTime: "2 min read",
    imageUrl: icmCover,
    link: "https://www.linkedin.com/pulse/curve-number-cnswmm-infiltration-model-2d-simulations-now-icm-robert-dickinson",
    categories: ["SWMM5", "ICM InfoWorks"],
    difficulty: "intermediate",
    keywords: ["SWMM", "modeling", "hydraulics"]
  },
  {
    id: "linkedin-70",
    title: "Using Ruby to QA/QC InfoSWMM DWF Import to ICM SWMM",
    description: "A Ruby script tutorial for verifying that dry weather flow imports from InfoSWMM to ICM SWMM are accurate.",
    date: "5 months ago",
    readTime: "5 min read",
    imageUrl: rubyCover,
    link: "https://www.linkedin.com/pulse/using-ruby-qa-qc-infoswmm-dwf-import-icm-swmm-robert-dickinson",
    categories: ["SWMM5", "ICM InfoWorks"],
    difficulty: "intermediate",
    keywords: ["SWMM", "modeling", "hydraulics"]
  },
  {
    id: "linkedin-71",
    title: "Diagram GPT's for Seeing Connections in a SWMM5 Input File",
    description: "Using GPT visualization tools to understand complex relationships between data sections in SWMM5 input files.",
    date: "5 months ago",
    readTime: "3 min read",
    imageUrl: aiCover,
    link: "https://www.linkedin.com/pulse/diagram-gpts-seeing-connections-swmm5-input-file-robert-dickinson",
    categories: ["SWMM5", "ICM InfoWorks"],
    difficulty: "intermediate",
    keywords: ["SWMM", "modeling", "hydraulics"]
  },
  {
    id: "linkedin-72",
    title: "How to use Ruby for Subcatchments Statistics using the Current and Background Networks in ICM",
    description: "A comprehensive guide to analyzing subcatchment statistics and comparing networks using Ruby in ICM.",
    date: "5 months ago",
    readTime: "9 min read",
    imageUrl: rubyCover,
    link: "https://www.linkedin.com/pulse/how-to-use-ruby-subcatchments-statistics-current-background-networks-robert-dickinson",
    categories: ["SWMM5", "ICM InfoWorks"],
    difficulty: "intermediate",
    keywords: ["SWMM", "modeling", "hydraulics"]
  },
  {
    id: "linkedin-73",
    title: "How to use SQL to see the SUDS or LID Usage for all Subcatchments in ICM InfoWorks and SWMM Networks",
    description: "SQL queries to analyze Low Impact Development control usage across all subcatchments in water models.",
    date: "5 months ago",
    readTime: "6 min read",
    imageUrl: sqlCover,
    link: "https://www.linkedin.com/pulse/how-to-use-sql-see-suds-lid-usage-all-subcatchments-icm-infoworks-robert-dickinson",
    categories: ["SWMM5", "ICM InfoWorks"],
    difficulty: "intermediate",
    keywords: ["SWMM", "modeling", "hydraulics"]
  },
  {
    id: "linkedin-74",
    title: "Harnessing the Full Potential of the 12 Runoff Surfaces in ICM InfoWorks for SUDS/LID Modeling",
    description: "Comprehensive guide to utilizing all 12 runoff surface options in ICM InfoWorks for sustainable drainage system design.",
    date: "6 months ago",
    readTime: "6 min read",
    imageUrl: icmCover,
    link: "https://www.linkedin.com/pulse/harnessing-full-potential-12-runoff-surfaces-icm-infoworks-robert-dickinson",
    categories: ["SWMM5", "ICM InfoWorks"],
    difficulty: "intermediate",
    keywords: ["SWMM", "modeling", "hydraulics"]
  },
  {
    id: "linkedin-75",
    title: "Utilizing a Unified 2D Engine in both ICM InfoWorks and ICM SWMM Networks",
    description: "ICM InfoWorks 2D and ICM SWMM 2D comparison for stormwater and sanitary flow modeling.",
    date: "6 months ago",
    readTime: "5 min read",
    imageUrl: icmCover,
    link: "https://www.linkedin.com/pulse/utilizing-unified-2d-engine-both-icm-infoworks-icm-swmm-robert-dickinson",
    categories: ["SWMM5", "ICM InfoWorks"],
    difficulty: "intermediate",
    keywords: ["SWMM", "modeling", "hydraulics"]
  },
  {
    id: "linkedin-76",
    title: "My Top 100 Reasons: Why ICM SWMM Triumphs Over Native SWMM 5, IMO",
    description: "Insights from 24+ years of SWMM5 experience and 50 years with SWMM on why ICM SWMM is superior.",
    date: "6 months ago",
    readTime: "5 min read",
    imageUrl: icmCover,
    link: "https://www.linkedin.com/pulse/my-top-100-reasons-why-icm-swmm-triumphs-over-native-robert-dickinson",
    categories: ["SWMM5", "ICM InfoWorks"],
    difficulty: "intermediate",
    keywords: ["SWMM", "modeling", "hydraulics"]
  },
  {
    id: "linkedin-77",
    title: "Enhancing your ICM SWMM Network Simulation: Leveraging Ruby Scripts for Optimal Time Step Selection",
    description: "A guide to using Ruby scripts to optimize time step parameters in ICM SWMM networks for better simulation.",
    date: "6 months ago",
    readTime: "4 min read",
    imageUrl: rubyCover,
    link: "https://www.linkedin.com/pulse/enhancing-your-icm-swmm-network-simulation-leveraging-ruby-robert-dickinson",
    categories: ["SWMM5", "ICM InfoWorks"],
    difficulty: "intermediate",
    keywords: ["SWMM", "modeling", "hydraulics"]
  },
  {
    id: "linkedin-78",
    title: "Annotating and Unleashing the Power of RPT and Log Files in an ICM SWMM Network",
    description: "Comprehensive guide to analyzing RPT and log files in ICM SWMM for model validation and optimization.",
    date: "6 months ago",
    readTime: "7 min read",
    imageUrl: rubyCover,
    link: "https://www.linkedin.com/pulse/annotating-unleashing-power-rpt-log-files-icm-swmm-robert-dickinson",
    categories: ["SWMM5", "ICM InfoWorks"],
    difficulty: "intermediate",
    keywords: ["SWMM", "modeling", "hydraulics"]
  },
  {
    id: "linkedin-79",
    title: "Unlocking the Power of Ruby with ChatGPT: Streamlining Subcatchment Analysis in InfoWorks ICM Network",
    description: "Using Ruby scripts and ChatGPT to automate and optimize subcatchment analysis in InfoWorks ICM networks.",
    date: "6 months ago",
    readTime: "6 min read",
    imageUrl: aiCover,
    link: "https://www.linkedin.com/pulse/unlocking-power-ruby-chatgpt-streamlining-subcatchment-robert-dickinson",
    categories: ["SWMM5", "ICM InfoWorks"],
    difficulty: "intermediate",
    keywords: ["SWMM", "modeling", "hydraulics"]
  },
  {
    id: "linkedin-80",
    title: "Elephant Modeling Stories: Collaborative Insights into ICM InfoWorks, ICM SWMM, Ruby, ChatGPT, and SWMM5",
    description: "Collection of collaborative insights and stories on water modeling using ICM, Ruby, ChatGPT and SWMM5.",
    date: "6 months ago",
    readTime: "8 min read",
    imageUrl: aiCover,
    link: "https://www.linkedin.com/pulse/elephant-modeling-stories-collaborative-insights-icm-robert-dickinson",
    categories: ["SWMM5", "ICM InfoWorks"],
    difficulty: "intermediate",
    keywords: ["SWMM", "modeling", "hydraulics"]
  },
  {
    id: "linkedin-81",
    title: "How to Import an SWMM5 file from PCSWMM and/or SWMM5 as a Model Group in ICM InfoWorks and SWMM Networks",
    description: "Step-by-step guide to importing SWMM5 files into ICM InfoWorks and SWMM networks, validating and exporting.",
    date: "6 months ago",
    readTime: "4 min read",
    imageUrl: icmCover,
    link: "https://www.linkedin.com/pulse/how-to-import-swmm5-file-pcswmm-model-group-icm-infoworks-robert-dickinson",
    categories: ["SWMM5", "ICM InfoWorks"],
    difficulty: "intermediate",
    keywords: ["SWMM", "modeling", "hydraulics"]
  },
  {
    id: "linkedin-82",
    title: "Unlocking the Synergy of Ruby and SQL Scripting inside ICM: Streamlining InfoWorks and SWMM Network Management",
    description: "Deep dive into combining Ruby and SQL scripting for advanced network data structure management in ICM.",
    date: "6 months ago",
    readTime: "8 min read",
    imageUrl: sqlCover,
    link: "https://www.linkedin.com/pulse/unlocking-synergy-ruby-sql-scripting-inside-icm-robert-dickinson",
    categories: ["SWMM5", "ICM InfoWorks"],
    difficulty: "intermediate",
    keywords: ["SWMM", "modeling", "hydraulics"]
  },
  {
    id: "linkedin-83",
    title: "Seamless Conversion from XP-SWMM to ICM InfoWorks and SWMM Networks",
    description: "Guide to converting XP-SWMM models to ICM InfoWorks and SWMM networks for dual hydraulic integration.",
    date: "6 months ago",
    readTime: "4 min read",
    imageUrl: icmCover,
    link: "https://www.linkedin.com/pulse/seamless-conversion-xp-swmm-icm-infoworks-swmm-networks-robert-dickinson",
    categories: ["SWMM5", "ICM InfoWorks"],
    difficulty: "intermediate",
    keywords: ["SWMM", "modeling", "hydraulics"]
  },
  {
    id: "linkedin-84",
    title: "Unleashing the Power of GPT4 and OpenAI: Enhancing EPA SWMM5 Test Model Building and Sensitivity Analysis",
    description: "Leveraging GPT4 and OpenAI to build and analyze EPA SWMM5 test models and perform sensitivity studies.",
    date: "6 months ago",
    readTime: "5 min read",
    imageUrl: aiCover,
    link: "https://www.linkedin.com/pulse/unleashing-power-gpt4-openai-enhancing-epa-swmm5-test-robert-dickinson",
    categories: ["SWMM5", "ICM InfoWorks"],
    difficulty: "intermediate",
    keywords: ["SWMM", "modeling", "hydraulics"]
  },
  {
    id: "linkedin-85",
    title: "Using Ruby in InfoWorks ICM to create Network Statistics for Effective QA/QC of Imported Model Data",
    description: "Comprehensive guide to using Ruby for network statistics and quality assurance of imported model data in InfoWorks ICM.",
    date: "6 months ago",
    readTime: "12 min read",
    imageUrl: rubyCover,
    link: "https://www.linkedin.com/pulse/using-ruby-infoworks-icm-create-network-statistics-qaqc-robert-dickinson",
    categories: ["SWMM5", "ICM InfoWorks"],
    difficulty: "intermediate",
    keywords: ["SWMM", "modeling", "hydraulics"]
  },
  {
    id: "linkedin-86",
    title: "Converting an InfoSewer Model to an ICM InfoWorks Network using ODIC and Ruby",
    description: "Complete guide to converting InfoSewer models to ICM InfoWorks networks using ODIC and Ruby scripts.",
    date: "6 months ago",
    readTime: "6 min read",
    imageUrl: rubyCover,
    link: "https://www.linkedin.com/pulse/converting-infosewer-model-icm-infoworks-network-using-robert-dickinson",
    categories: ["SWMM5", "ICM InfoWorks"],
    difficulty: "intermediate",
    keywords: ["SWMM", "modeling", "hydraulics"]
  },
  {
    id: "linkedin-87",
    title: "How to Use Tracer Water Quality for RDII, DWF, and Runoff in an InfoWorks ICM Network",
    description: "Guide to implementing SWMM5 washoff and tracer water quality for RDII, DWF and runoff analysis in InfoWorks ICM.",
    date: "6 months ago",
    readTime: "3 min read",
    imageUrl: icmCover,
    link: "https://www.linkedin.com/pulse/how-to-use-tracer-water-quality-rdii-dwf-runoff-infoworks-robert-dickinson",
    categories: ["SWMM5", "ICM InfoWorks"],
    difficulty: "intermediate",
    keywords: ["SWMM", "modeling", "hydraulics"]
  },
  {
    id: "linkedin-88",
    title: "How to use the EPA Design Storm Wizard with InfoWorks ICM for Chicago, SCS, NOAA, and IDF Curves",
    description: "Tutorial on using the EPA Design Storm Wizard with InfoWorks ICM for various precipitation curve types.",
    date: "6 months ago",
    readTime: "2 min read",
    imageUrl: icmCover,
    link: "https://www.linkedin.com/pulse/how-to-use-epa-design-storm-wizard-infoworks-icm-robert-dickinson",
    categories: ["SWMM5", "ICM InfoWorks"],
    difficulty: "intermediate",
    keywords: ["SWMM", "modeling", "hydraulics"]
  },
  {
    id: "linkedin-89",
    title: "Ruby Scripts for Customizing your ICM SWMM Networks",
    description: "Collection of Ruby scripts for customizing and optimizing ICM SWMM networks for specific applications.",
    date: "6 months ago",
    readTime: "8 min read",
    imageUrl: rubyCover,
    link: "https://www.linkedin.com/pulse/ruby-scripts-customizing-your-icm-swmm-networks-robert-dickinson",
    categories: ["SWMM5", "ICM InfoWorks"],
    difficulty: "intermediate",
    keywords: ["SWMM", "modeling", "hydraulics"]
  },
  {
    id: "linkedin-90",
    title: "My 1991 @UF President of the Mayor's Council Certificate #SWMM",
    description: "A personal reflection on receiving the 1991 President of the Mayor's Council Certificate at University of Florida.",
    date: "6 months ago",
    readTime: "1 min read",
    imageUrl: historyCover,
    link: "https://www.linkedin.com/pulse/my-1991-uf-president-mayors-council-certificate-swmm-robert-dickinson",
    categories: ["SWMM5", "ICM InfoWorks"],
    difficulty: "intermediate",
    keywords: ["SWMM", "modeling", "hydraulics"]
  },
  {
    id: "linkedin-91",
    title: "How Does RDII Work in SWMM5, InfoSWMM and InfoWorks ICM?",
    description: "Comprehensive explanation of Rainfall-Dependent Infiltration and Inflow (RDII) across SWMM5 platforms.",
    date: "6 months ago",
    readTime: "5 min read",
    imageUrl: icmCover,
    link: "https://www.linkedin.com/pulse/how-does-rdii-work-swmm5-infoswmm-infoworks-icm-robert-dickinson",
    categories: ["SWMM5", "ICM InfoWorks"],
    difficulty: "intermediate",
    keywords: ["SWMM", "modeling", "hydraulics"]
  },
  {
    id: "linkedin-92",
    title: "New Product Pages at www.innovyze.com for SWMM related Products",
    description: "Overview of new product pages for InfoSWMM, XPSWMM, InfoSewer, and InfoWorks ICM on Innovyze website.",
    date: "6 months ago",
    readTime: "1 min read",
    imageUrl: icmCover,
    link: "https://www.linkedin.com/pulse/new-product-pages-www-innovyze-com-swmm-related-products-robert-dickinson",
    categories: ["SWMM5", "ICM InfoWorks"],
    difficulty: "intermediate",
    keywords: ["SWMM", "modeling", "hydraulics"]
  },
  {
    id: "linkedin-93",
    title: "New Engine and GUI Features in InfoSWMM 14.7 which is based on EPA SWMM 5.1.013",
    description: "Summary of new engine and GUI features available in InfoSWMM 14.7 based on EPA SWMM 5.1.013.",
    date: "6 months ago",
    readTime: "3 min read",
    imageUrl: icmCover,
    link: "https://www.linkedin.com/pulse/new-engine-gui-features-infoswmm-14-7-epa-swmm-5-1-013-robert-dickinson",
    categories: ["SWMM5", "ICM InfoWorks"],
    difficulty: "intermediate",
    keywords: ["SWMM", "modeling", "hydraulics"]
  },
  {
    id: "linkedin-94",
    title: "How to Use Population at a Node for DWF in SWMM5 and InfoSWMM instead of Mean DWF",
    description: "Guide to using population-based dry weather flow calculations instead of mean DWF in SWMM5 models.",
    date: "6 months ago",
    readTime: "2 min read",
    imageUrl: icmCover,
    link: "https://www.linkedin.com/pulse/how-to-use-population-node-dwf-swmm5-infoswmm-robert-dickinson",
    categories: ["SWMM5", "ICM InfoWorks"],
    difficulty: "intermediate",
    keywords: ["SWMM", "modeling", "hydraulics"]
  },
  {
    id: "linkedin-95",
    title: "New Features in InfoSWMM 14.6 and InfoSWMM SA",
    description: "Overview of new features and improvements in InfoSWMM 14.6 and InfoSWMM Sustain & Analyze versions.",
    date: "6 months ago",
    readTime: "2 min read",
    imageUrl: icmCover,
    link: "https://www.linkedin.com/pulse/new-features-infoswmm-14-6-infoswmm-sa-robert-dickinson",
    categories: ["SWMM5", "ICM InfoWorks"],
    difficulty: "intermediate",
    keywords: ["SWMM", "modeling", "hydraulics"]
  },
  {
    id: "linkedin-96",
    title: "New Help file for Innovyze InfoSWMM (InfoSWMM is an Arc Map Extension)",
    description: "Announcement of new help file for Innovyze InfoSWMM based on menu structure for better connectivity.",
    date: "6 months ago",
    readTime: "1 min read",
    imageUrl: icmCover,
    link: "https://www.linkedin.com/pulse/new-help-file-innovyze-infoswmm-arc-map-extension-robert-dickinson",
    categories: ["SWMM5", "ICM InfoWorks"],
    difficulty: "intermediate",
    keywords: ["SWMM", "modeling", "hydraulics"]
  },
  {
    id: "linkedin-97",
    title: "How InfoSWMM and InfoSWMM SA 2D Link and 3D Node Graphics Help You Understand Network Response",
    description: "Explanation of how linked 2D link and 3D node graphics in InfoSWMM help visualize network response to wet weather flow.",
    date: "6 months ago",
    readTime: "2 min read",
    imageUrl: icmCover,
    link: "https://www.linkedin.com/pulse/how-infoswmm-infoswmm-sa-2d-link-3d-node-graphics-understand-robert-dickinson",
    categories: ["SWMM5", "ICM InfoWorks"],
    difficulty: "intermediate",
    keywords: ["SWMM", "modeling", "hydraulics"]
  },
  {
    id: "linkedin-98",
    title: "100 Tools for Modeling Hydrology/Hydraulics using Innovyze InfoSWMM_SA",
    description: "Comprehensive list of 100 tools and techniques for hydrological and hydraulic modeling using Innovyze InfoSWMM SA.",
    date: "6 months ago",
    readTime: "1 min read",
    imageUrl: rubyCover,
    link: "https://www.linkedin.com/pulse/100-tools-modeling-hydrology-hydraulics-using-innovyze-robert-dickinson",
    categories: ["SWMM5", "ICM InfoWorks"],
    difficulty: "intermediate",
    keywords: ["SWMM", "modeling", "hydraulics"]
  },
  {
    id: "linkedin-99",
    title: "Tutorials for InfoSWMM Sustain Which Optimizes for LIDs, GI, SuDS, WSuDS on Small Runoff Surfaces",
    description: "Tutorial series for InfoSWMM Sustain optimization of Low Impact Development and green infrastructure on runoff surfaces.",
    date: "6 months ago",
    readTime: "1 min read",
    imageUrl: icmCover,
    link: "https://www.linkedin.com/pulse/tutorials-infoswmm-sustain-optimizes-lids-gi-suds-wsusds-robert-dickinson",
    categories: ["SWMM5", "ICM InfoWorks"],
    difficulty: "intermediate",
    keywords: ["SWMM", "modeling", "hydraulics"]
  },
  {
    id: "linkedin-100",
    title: "Dynamic Wave Routing Options in InfoSWMM and SWMM5 compared to InfoWorks_ICM and InfoSewer",
    description: "Comparison of dynamic wave routing capabilities across InfoSWMM, SWMM5, InfoWorks ICM and InfoSewer platforms.",
    date: "6 months ago",
    readTime: "1 min read",
    imageUrl: icmCover,
    link: "https://www.linkedin.com/pulse/dynamic-wave-routing-options-infoswmm-swmm5-compared-robert-dickinson",
    categories: ["SWMM5", "ICM InfoWorks"],
    difficulty: "intermediate",
    keywords: ["SWMM", "modeling", "hydraulics"]
  },
  {
    id: "linkedin-101",
    title: "InfoSWMM, InfoSWMM SA RDII Analyst 3.0 with EPA SSOAP Tools",
    description: "Comprehensive guide to RDII Analyst 3.0 for separating groundwater, inflow and infiltration in stormwater systems.",
    date: "6 months ago",
    readTime: "15 min read",
    imageUrl: rubyCover,
    link: "https://www.linkedin.com/pulse/infoswmm-infoswmm-sa-rdii-analyst-3-0-epa-ssoap-tools-robert-dickinson",
    categories: ["SWMM5", "ICM InfoWorks"],
    difficulty: "intermediate",
    keywords: ["SWMM", "modeling", "hydraulics"]
  },
  {
    id: "linkedin-102",
    title: "What is the Purpose of InfoSWMM Sustain? Optimization for LIDs, GI, SuDS, WSuDS or small Runoff Surfaces",
    description: "Detailed explanation of InfoSWMM Sustain's purpose for optimizing sustainable drainage systems and green infrastructure.",
    date: "6 months ago",
    readTime: "3 min read",
    imageUrl: icmCover,
    link: "https://www.linkedin.com/pulse/what-purpose-infoswmm-sustain-optimization-lids-gi-suds-robert-dickinson",
    categories: ["SWMM5", "ICM InfoWorks"],
    difficulty: "intermediate",
    keywords: ["SWMM", "modeling", "hydraulics"]
  },
  {
    id: "linkedin-103",
    title: "SWMM 5 and ICM: A Powerful Duo for Urban Drainage Modeling",
    description: "Exploring the complementary strengths of SWMM 5 and ICM for comprehensive urban drainage system modeling.",
    date: "6 months ago",
    readTime: "5 min read",
    imageUrl: icmCover,
    link: "https://www.linkedin.com/pulse/swmm-5-icm-powerful-duo-urban-drainage-modeling-imo-robert-dickinson-sagfe",
    categories: ["SWMM5", "ICM InfoWorks"],
    difficulty: "intermediate",
    keywords: ["SWMM", "modeling", "hydraulics"]
  },
  {
    id: "linkedin-104",
    title: "Mastering ICM SWMM and InfoWorks: A Ruby Guide to IWR Results Files",
    description: "Comprehensive Ruby scripting guide for processing and analyzing IWR results files in ICM SWMM and InfoWorks.",
    date: "6 months ago",
    readTime: "8 min read",
    imageUrl: rubyCover,
    link: "https://www.linkedin.com/pulse/mastering-icm-swmm-infoworks-ruby-guide-iwr-results-file-dickinson-5z9se",
    categories: ["SWMM5", "ICM InfoWorks"],
    difficulty: "intermediate",
    keywords: ["SWMM", "modeling", "hydraulics"]
  },
  {
    id: "linkedin-105",
    title: "A Graphical View of Nonlinear Runoff Processes in ICM SWMM and SWMM5",
    description: "Visual analysis of nonlinear runoff processes and their representation in ICM SWMM and EPA SWMM5.",
    date: "6 months ago",
    readTime: "6 min read",
    imageUrl: icmCover,
    link: "https://www.linkedin.com/pulse/graphical-view-nonlinear-runoff-processes-icm-swmm-swmm5-dickinson-huvde",
    categories: ["SWMM5", "ICM InfoWorks"],
    difficulty: "intermediate",
    keywords: ["SWMM", "modeling", "hydraulics"]
  },
  {
    id: "linkedin-106",
    title: "Utilizing Ruby Scripting in InfoWorks ICM to Extract Output",
    description: "Advanced techniques for using Ruby scripts to efficiently extract and process output data in InfoWorks ICM.",
    date: "6 months ago",
    readTime: "7 min read",
    imageUrl: rubyCover,
    link: "https://www.linkedin.com/pulse/utilizing-ruby-scripting-infoworks-icm-extract-output-dickinson-qvq5e",
    categories: ["SWMM5", "ICM InfoWorks"],
    difficulty: "intermediate",
    keywords: ["SWMM", "modeling", "hydraulics"]
  },
  {
    id: "linkedin-107",
    title: "ICM Siphons: How to Model Sediment Siphon in SWMM and SWMM5",
    description: "Detailed guide on modeling sediment siphons in ICM and EPA SWMM for combined sewer systems.",
    date: "6 months ago",
    readTime: "4 min read",
    imageUrl: icmCover,
    link: "https://www.linkedin.com/pulse/icm-siphons-how-model-sediment-siphon-swmm-swmm5-robert-dickinson-i5lme",
    categories: ["SWMM5", "ICM InfoWorks"],
    difficulty: "intermediate",
    keywords: ["SWMM", "modeling", "hydraulics"]
  },
  {
    id: "linkedin-108",
    title: "Investigating Curve Number Approximations in ICM 2D",
    description: "Analysis of curve number approximations and their application in ICM 2D flow routing.",
    date: "6 months ago",
    readTime: "5 min read",
    imageUrl: icmCover,
    link: "https://www.linkedin.com/pulse/investigating-curve-number-approximations-icm-2d-robert-dickinson",
    categories: ["SWMM5", "ICM InfoWorks"],
    difficulty: "intermediate",
    keywords: ["SWMM", "modeling", "hydraulics"]
  },
  {
    id: "linkedin-109",
    title: "Unlocking Advanced Data Analysis of SWMM5 with ChatGPT's Beta GPT-4",
    description: "Using GPT-4 and ChatGPT to perform advanced data analysis and automation on SWMM5 models.",
    date: "6 months ago",
    readTime: "6 min read",
    imageUrl: aiCover,
    link: "https://www.linkedin.com/pulse/unlocking-advanced-data-analysis-swmm5-chatgpts-beta-gpt-4-dickinson",
    categories: ["SWMM5", "ICM InfoWorks"],
    difficulty: "intermediate",
    keywords: ["SWMM", "modeling", "hydraulics"]
  },
  {
    id: "linkedin-110",
    title: "Enhancing ICM InfoWorks SWMM 1D Output with Elegant Ruby Tables",
    description: "Creating elegant and informative data tables from ICM InfoWorks SWMM 1D output using Ruby scripts.",
    date: "6 months ago",
    readTime: "5 min read",
    imageUrl: rubyCover,
    link: "https://www.linkedin.com/pulse/enhancing-icm-infoworks-swmm-1d-output-elegant-ruby-table-dickinson",
    categories: ["SWMM5", "ICM InfoWorks"],
    difficulty: "intermediate",
    keywords: ["SWMM", "modeling", "hydraulics"]
  },
  {
    id: "linkedin-111",
    title: "InfoWorks ICM Example SQL Scripts for Flawless Import Data",
    description: "Collection of SQL scripts and examples for ensuring data quality during InfoWorks ICM model imports.",
    date: "6 months ago",
    readTime: "7 min read",
    imageUrl: sqlCover,
    link: "https://www.linkedin.com/pulse/infoworks-icm-example-sql-scripts-flawless-import-data-dickinson",
    categories: ["SWMM5", "ICM InfoWorks"],
    difficulty: "intermediate",
    keywords: ["SWMM", "modeling", "hydraulics"]
  },
  {
    id: "linkedin-112",
    title: "Navigating ICM InfoWorks: Population-Based vs SWMM's Mean DWF",
    description: "Comparison of population-based and mean dry weather flow calculation methods in ICM InfoWorks.",
    date: "6 months ago",
    readTime: "4 min read",
    imageUrl: icmCover,
    link: "https://www.linkedin.com/pulse/navigating-icm-infoworks-population-based-vs-swmms-mean-dickinson",
    categories: ["SWMM5", "ICM InfoWorks"],
    difficulty: "intermediate",
    keywords: ["SWMM", "modeling", "hydraulics"]
  },
  {
    id: "linkedin-113",
    title: "It's a Small Island: How Work History Can Be a Tangled Ball of Yarn",
    description: "Personal reflections on career trajectory and professional development in water engineering.",
    date: "6 months ago",
    readTime: "3 min read",
    imageUrl: historyCover,
    link: "https://www.linkedin.com/pulse/its-small-island-how-work-history-can-tangled-ball-yarn-dickinson",
    categories: ["SWMM5", "ICM InfoWorks"],
    difficulty: "intermediate",
    keywords: ["SWMM", "modeling", "hydraulics"]
  },
  {
    id: "linkedin-114",
    title: "Autodesk Employee Perspective: Why I Personally Invest",
    description: "Personal insights on working with Autodesk and investment perspectives on software solutions.",
    date: "6 months ago",
    readTime: "2 min read",
    imageUrl: icmCover,
    link: "https://www.linkedin.com/pulse/autodesk-employee-perspective-why-i-personally-invest-dickinson",
    categories: ["SWMM5", "ICM InfoWorks"],
    difficulty: "intermediate",
    keywords: ["SWMM", "modeling", "hydraulics"]
  },
  {
    id: "linkedin-115",
    title: "Using ChatGPT for Comparing Mass Balance Checks in InfoSewer",
    description: "Leveraging ChatGPT to analyze and compare mass balance calculations in InfoSewer models.",
    date: "6 months ago",
    readTime: "5 min read",
    imageUrl: aiCover,
    link: "https://www.linkedin.com/pulse/using-chatgpt-comparing-mass-balance-checks-infosewer-dickinson",
    categories: ["SWMM5", "ICM InfoWorks"],
    difficulty: "intermediate",
    keywords: ["SWMM", "modeling", "hydraulics"]
  },
  {
    id: "linkedin-116",
    title: "Uncommon Synergy: Link-Node Hydraulic Modeling and NHL",
    description: "Exploring the unique synergy between link-node hydraulic modeling and advanced network analysis.",
    date: "6 months ago",
    readTime: "4 min read",
    imageUrl: icmCover,
    link: "https://www.linkedin.com/pulse/uncommon-synergy-link-node-hydraulic-modeling-nhl-t-cell-dickinson",
    categories: ["SWMM5", "ICM InfoWorks"],
    difficulty: "intermediate",
    keywords: ["SWMM", "modeling", "hydraulics"]
  },
  {
    id: "linkedin-117",
    title: "Thesis Students: Visual Instructions for Compiling Using C",
    description: "Comprehensive visual guide for thesis students on C language compilation and debugging techniques.",
    date: "7 months ago",
    readTime: "6 min read",
    imageUrl: rubyCover,
    link: "https://www.linkedin.com/pulse/thesis-students-visual-instructions-compiling-using-c-dickinson",
    categories: ["SWMM5", "ICM InfoWorks"],
    difficulty: "intermediate",
    keywords: ["SWMM", "modeling", "hydraulics"]
  },
  {
    id: "linkedin-118",
    title: "German Hydrology: InfoSWMM 14.5, H2OMAP SWMM, Full SWMM5 LID",
    description: "Application of InfoSWMM, H2OMAP SWMM and full SWMM5 LID capabilities in German hydrological modeling.",
    date: "7 months ago",
    readTime: "5 min read",
    imageUrl: icmCover,
    link: "https://www.linkedin.com/pulse/german-hydrology-infoswmm-145-h2omap-swmm-full-swmm5-lid-dickinson",
    categories: ["SWMM5", "ICM InfoWorks"],
    difficulty: "intermediate",
    keywords: ["SWMM", "modeling", "hydraulics"]
  },
  {
    id: "linkedin-119",
    title: "My Top Ten Reasons: Preferring InfoSWMM Over SWMM 5",
    description: "Detailed ranking of the top 10 reasons why InfoSWMM offers advantages over native SWMM 5.",
    date: "7 months ago",
    readTime: "4 min read",
    imageUrl: icmCover,
    link: "https://www.linkedin.com/pulse/my-top-ten-reasons-preferring-infoswmm-over-swmm-5-based-dickinson",
    categories: ["SWMM5", "ICM InfoWorks"],
    difficulty: "intermediate",
    keywords: ["SWMM", "modeling", "hydraulics"]
  },
  {
    id: "linkedin-120",
    title: "My History with Various Versions of SWMM: SWMM3, SWMM4, SWMM5",
    description: "Personal journey through the evolution of SWMM from version 3 through version 5 and beyond.",
    date: "7 months ago",
    readTime: "7 min read",
    imageUrl: historyCover,
    link: "https://www.linkedin.com/pulse/my-history-various-versions-swmm-swmm3-swmm4-swmm5-robert-dickinson",
    categories: ["SWMM5", "ICM InfoWorks"],
    difficulty: "intermediate",
    keywords: ["SWMM", "modeling", "hydraulics"]
  },
  {
    id: "linkedin-121",
    title: "Advanced Calibration Graphs: Reference Graphical 13",
    description: "Advanced techniques for creating and interpreting calibration graphs in hydrological modeling.",
    date: "7 months ago",
    readTime: "5 min read",
    imageUrl: rubyCover,
    link: "https://www.linkedin.com/pulse/advanced-calibration-graphs-reference-graphical-13-robert-dickinson",
    categories: ["SWMM5", "ICM InfoWorks"],
    difficulty: "intermediate",
    keywords: ["SWMM", "modeling", "hydraulics"]
  },
  {
    id: "linkedin-122",
    title: "QA/QC Process for Import XP-SWMM Model to InfoWorks ICM",
    description: "Comprehensive quality assurance and quality control procedures for importing XP-SWMM models to InfoWorks ICM.",
    date: "7 months ago",
    readTime: "6 min read",
    imageUrl: icmCover,
    link: "https://www.linkedin.com/pulse/qaqc-process-import-xp-swmm-model-infoworks-icm-6-robert-dickinson",
    categories: ["SWMM5", "ICM InfoWorks"],
    difficulty: "intermediate",
    keywords: ["SWMM", "modeling", "hydraulics"]
  },
  {
    id: "linkedin-123",
    title: "InfoSewer, ICM InfoWorks App: AI and Humans",
    description: "Exploring the integration of AI and human expertise in InfoSewer and ICM InfoWorks applications.",
    date: "8 months ago",
    readTime: "5 min read",
    imageUrl: aiCover,
    link: "https://www.linkedin.com/pulse/infosewer-icm-infoworks-app-ai-humans-robert-dickinson-nhuye",
    categories: ["SWMM5", "ICM InfoWorks"],
    difficulty: "intermediate",
    keywords: ["SWMM", "modeling", "hydraulics"]
  },
  {
    id: "linkedin-124",
    title: "EPA SWMM5 INP File Reader App: Stats and Images",
    description: "Tool for reading and analyzing EPA SWMM5 input files with statistics and visual network representations.",
    date: "8 months ago",
    readTime: "6 min read",
    imageUrl: rubyCover,
    link: "https://www.linkedin.com/pulse/epa-swmm5-inp-file-reader-app-stats-images-network-robert-dickinson-6o7ye",
    categories: ["SWMM5", "ICM InfoWorks"],
    difficulty: "intermediate",
    keywords: ["SWMM", "modeling", "hydraulics"]
  },
  {
    id: "linkedin-125",
    title: "Level Up Your ICM InfoWorks Skills: Try Interactive Quiz",
    description: "Interactive quiz designed to test and enhance your ICM InfoWorks modeling knowledge.",
    date: "8 months ago",
    readTime: "8 min read",
    imageUrl: quizCover,
    link: "https://www.linkedin.com/pulse/level-up-your-icm-infoworks-skills-try-interactive-quiz-dickinson-qpj0e",
    categories: ["SWMM5", "ICM InfoWorks"],
    difficulty: "intermediate",
    keywords: ["SWMM", "modeling", "hydraulics"]
  },
  {
    id: "linkedin-126",
    title: "Level Up Your SWMM5 Skills: Try Interactive Technical Quiz",
    description: "Interactive technical quiz to test and improve your EPA SWMM5 modeling expertise.",
    date: "8 months ago",
    readTime: "8 min read",
    imageUrl: quizCover,
    link: "https://www.linkedin.com/pulse/level-up-your-swmm5-skills-try-interactive-technical-quiz-dickinson-vfq7e",
    categories: ["SWMM5", "ICM InfoWorks"],
    difficulty: "intermediate",
    keywords: ["SWMM", "modeling", "hydraulics"]
  },
  {
    id: "linkedin-127",
    title: "Revolutionizing Hydraulic Network Data Export with Ruby Script",
    description: "Advanced Ruby scripting techniques for exporting complex hydraulic network data efficiently.",
    date: "8 months ago",
    readTime: "7 min read",
    imageUrl: rubyCover,
    link: "https://www.linkedin.com/pulse/revolutionizing-hydraulic-network-data-export-ruby-script-dickinson-xwzqc",
    categories: ["SWMM5", "ICM InfoWorks"],
    difficulty: "intermediate",
    keywords: ["SWMM", "modeling", "hydraulics"]
  },
  {
    id: "linkedin-128",
    title: "Eight ICMs, One ICM: Ultimate Sewer Flood Viewer for SWMM",
    description: "Comprehensive tool for viewing sewer flooding scenarios across multiple ICM instances.",
    date: "8 months ago",
    readTime: "6 min read",
    imageUrl: icmCover,
    link: "https://www.linkedin.com/pulse/eight-icms-one-icm-ultimate-sewer-flood-viewer-swmm-robert-dickinson-13bae",
    categories: ["SWMM5", "ICM InfoWorks"],
    difficulty: "intermediate",
    keywords: ["SWMM", "modeling", "hydraulics"]
  },
  {
    id: "linkedin-129",
    title: "Bridging Decades: Reading InfoSewer Report RPT Output in ICM",
    description: "Guide to interpreting legacy InfoSewer RPT files and converting them for use in modern ICM workflows.",
    date: "8 months ago",
    readTime: "6 min read",
    imageUrl: historyCover,
    link: "https://www.linkedin.com/pulse/bridging-decades-reading-infosewer-report-rpt-output-icm-dickinson-jyhue",
    categories: ["SWMM5", "ICM InfoWorks"],
    difficulty: "intermediate",
    keywords: ["SWMM", "modeling", "hydraulics"]
  },
  {
    id: "linkedin-130",
    title: "Reviving 1988 SWMM4 Models: AI Seamless Transition to SWMM5",
    description: "Using AI to facilitate smooth conversion of vintage 1988 SWMM4 models to modern SWMM5.",
    date: "8 months ago",
    readTime: "7 min read",
    imageUrl: aiCover,
    link: "https://www.linkedin.com/pulse/reviving-1988-swmm4-models-ai-seamless-transition-swmm5-dickinson-2b8je",
    categories: ["SWMM5", "ICM InfoWorks"],
    difficulty: "intermediate",
    keywords: ["SWMM", "modeling", "hydraulics"]
  },
  {
    id: "linkedin-131",
    title: "Converting ICM InfoWorks PRN Files to CFS Units with AI",
    description: "AI-assisted technique for converting PRN file units from metric to CFS in ICM InfoWorks for 2025.",
    date: "8 months ago",
    readTime: "5 min read",
    imageUrl: aiCover,
    link: "https://www.linkedin.com/pulse/converting-icm-infoworks-prn-files-cfs-units-ai-2025-robert-dickinson-37vre",
    categories: ["SWMM5", "ICM InfoWorks"],
    difficulty: "intermediate",
    keywords: ["SWMM", "modeling", "hydraulics"]
  },
  {
    id: "linkedin-132",
    title: "Exporting Up to 99 HW Conduit Parameters to CSV with Ruby",
    description: "Ruby script for extracting and exporting up to 99 hardware conduit parameters to CSV format.",
    date: "8 months ago",
    readTime: "6 min read",
    imageUrl: rubyCover,
    link: "https://www.linkedin.com/pulse/exporting-up-99-hw-conduit-parameters-csv-ruby-icm-robert-dickinson-5pcye",
    categories: ["SWMM5", "ICM InfoWorks"],
    difficulty: "intermediate",
    keywords: ["SWMM", "modeling", "hydraulics"]
  },
  {
    id: "linkedin-133",
    title: "EXTRAN1 and EXTRAN2 from EXTRAN Manual with AI and GitHub",
    description: "Detailed analysis of EXTRAN manual content with AI assistance and GitHub code examples for SWMM5.",
    date: "8 months ago",
    readTime: "8 min read",
    imageUrl: rubyCover,
    link: "https://www.linkedin.com/pulse/extran1-extran2-from-extran-manual-ai-github-swmm5-used-dickinson-ds25e",
    categories: ["SWMM5", "ICM InfoWorks"],
    difficulty: "intermediate",
    keywords: ["SWMM", "modeling", "hydraulics"]
  },
  {
    id: "linkedin-134",
    title: "Example 7: EXTRAN Manual Type 2 Pump with AI and GitHub",
    description: "Comprehensive walkthrough of Example 7 from EXTRAN manual covering Type 2 pump implementation.",
    date: "8 months ago",
    readTime: "5 min read",
    imageUrl: rubyCover,
    link: "https://www.linkedin.com/pulse/example-7-extran-manual-type-2-pump-ai-github-swmm5-dickinson-pj38e",
    categories: ["SWMM5", "ICM InfoWorks"],
    difficulty: "intermediate",
    keywords: ["SWMM", "modeling", "hydraulics"]
  },
  {
    id: "linkedin-135",
    title: "Example 6: EXTRAN Manual Type 1 Pump with AI and GitHub",
    description: "Step-by-step guide to Example 6 from EXTRAN manual focusing on Type 1 pump configurations.",
    date: "8 months ago",
    readTime: "5 min read",
    imageUrl: rubyCover,
    link: "https://www.linkedin.com/pulse/example-6-extran-manual-type-1-pump-ai-github-swmm5-dickinson-gbbke",
    categories: ["SWMM5", "ICM InfoWorks"],
    difficulty: "intermediate",
    keywords: ["SWMM", "modeling", "hydraulics"]
  },
  {
    id: "linkedin-136",
    title: "EXTRAN 5: Storage Facility with Side Outlet Orifice with AI",
    description: "Guide to EXTRAN 5 storage facility modeling including side outlet orifice configurations.",
    date: "8 months ago",
    readTime: "6 min read",
    imageUrl: icmCover,
    link: "https://www.linkedin.com/pulse/extran-5-storage-facility-side-outlet-orifice-ai-github-dickinson-jh2ne",
    categories: ["SWMM5", "ICM InfoWorks"],
    difficulty: "intermediate",
    keywords: ["SWMM", "modeling", "hydraulics"]
  },
  {
    id: "linkedin-137",
    title: "SWMM 4.4H Fortran Code from 2004 on GitHub",
    description: "Historical SWMM 4.4H Fortran source code from 2004 archived and explained on GitHub.",
    date: "8 months ago",
    readTime: "4 min read",
    imageUrl: historyCover,
    link: "https://www.linkedin.com/pulse/swmm-44h-fortran-code-from-2004-github-robert-dickinson-rqume",
    categories: ["SWMM5", "ICM InfoWorks"],
    difficulty: "intermediate",
    keywords: ["SWMM", "modeling", "hydraulics"]
  },
  {
    id: "linkedin-138",
    title: "Many Avenues for Ruby Help in ICM: Online File Hint and AI Usage",
    description: "Exploring multiple resources and techniques for learning and using Ruby in ICM environments.",
    date: "8 months ago",
    readTime: "7 min read",
    imageUrl: rubyCover,
    link: "https://www.linkedin.com/pulse/many-avenues-ruby-help-icm-online-filehint-ai-usage-robert-dickinson-fstne",
    categories: ["SWMM5", "ICM InfoWorks"],
    difficulty: "intermediate",
    keywords: ["SWMM", "modeling", "hydraulics"]
  },
  {
    id: "linkedin-139",
    title: "Ruby Code for ICM InfoWorks and SWMM Comparisons: Now 25 on GitHub",
    description: "Collection of 25 Ruby scripts for comparing ICM InfoWorks and SWMM models available on GitHub.",
    date: "8 months ago",
    readTime: "6 min read",
    imageUrl: rubyCover,
    link: "https://www.linkedin.com/pulse/ruby-code-icm-infoworks-swmm-comparisons-now-25-github-dickinson-jh1re",
    categories: ["SWMM5", "ICM InfoWorks"],
    difficulty: "intermediate",
    keywords: ["SWMM", "modeling", "hydraulics"]
  },
  {
    id: "linkedin-140",
    title: "Running List of My LinkedIn Articles",
    description: "Comprehensive running list of all LinkedIn articles and publications organized by topic.",
    date: "8 months ago",
    readTime: "3 min read",
    imageUrl: icmCover,
    link: "https://www.linkedin.com/pulse/running-list-my-linkedin-articles-robert-dickinson-phibe",
    categories: ["SWMM5", "ICM InfoWorks"],
    difficulty: "intermediate",
    keywords: ["SWMM", "modeling", "hydraulics"]
  },
  {
    id: "linkedin-141",
    title: "SWMM3 Weir and EXTRAN4 Test File with AI and GitHub",
    description: "Analysis of SWMM3 weir components and EXTRAN4 test files with AI insights and GitHub resources.",
    date: "8 months ago",
    readTime: "6 min read",
    imageUrl: rubyCover,
    link: "https://www.linkedin.com/pulse/swmm3-weir-extran4-test-file-ai-github-swmm5-icm-robert-dickinson-s0u9e",
    categories: ["SWMM5", "ICM InfoWorks"],
    difficulty: "intermediate",
    keywords: ["SWMM", "modeling", "hydraulics"]
  },
  {
    id: "linkedin-142",
    title: "Creating Complete SWMM5 Input Files Using AI Chain",
    description: "Guide to using AI chain techniques to automatically generate complete and valid SWMM5 input files.",
    date: "8 months ago",
    readTime: "7 min read",
    imageUrl: aiCover,
    link: "https://www.linkedin.com/pulse/creating-complete-swmm5-input-files-using-ai-chain-from-dickinson-grrre",
    categories: ["SWMM5", "ICM InfoWorks"],
    difficulty: "intermediate",
    keywords: ["SWMM", "modeling", "hydraulics"]
  },
  {
    id: "linkedin-143",
    title: "100 Other AI-Related Locations for Learning ICM Beyond Hub",
    description: "Comprehensive guide to 100 AI and ICM learning resources outside of the official Hub.",
    date: "8 months ago",
    readTime: "5 min read",
    imageUrl: aiCover,
    link: "https://www.linkedin.com/pulse/100-other-ai-related-locations-learning-icm-besides-hub-dickinson-xqpre",
    categories: ["SWMM5", "ICM InfoWorks"],
    difficulty: "intermediate",
    keywords: ["SWMM", "modeling", "hydraulics"]
  },
  {
    id: "linkedin-1",
    title: "SWMM3 Test Files with AI and GitHub",
    description: "Comprehensive collection and analysis of SWMM3 test files using AI and GitHub resources.",
    date: "9 months ago",
    readTime: "5 min read",
    imageUrl: rubyCover,
    link: "https://www.linkedin.com/pulse/swmm3-test-files-ai-github-swmm5-icm-robert-dickinson-gqkoe",
    categories: ["SWMM5", "ICM InfoWorks"],
    difficulty: "intermediate",
    keywords: ["SWMM", "modeling", "hydraulics"]
  },
  {
    id: "linkedin-2",
    title: "InfoSewer Load Allocation Expertise: Test Yourself 50 Questions 2025",
    description: "Interactive assessment to evaluate your expertise in InfoSewer load allocation methods.",
    date: "9 months ago",
    readTime: "10 min read",
    imageUrl: quizCover,
    link: "https://www.linkedin.com/pulse/infosewer-load-allocation-expertise-test-yourself-50-2025-dickinson-2wrae",
    categories: ["SWMM5", "ICM InfoWorks"],
    difficulty: "intermediate",
    keywords: ["SWMM", "modeling", "hydraulics"]
  },
  {
    id: "linkedin-3",
    title: "Diamond Village, University of Florida, SWMM 2,3,4, XPSWMM",
    description: "Historical perspective on SWMM development and personal experiences with various SWMM versions.",
    date: "9 months ago",
    readTime: "3 min read",
    imageUrl: historyCover,
    link: "https://www.linkedin.com/pulse/diamond-village-university-florida-swmm-25-3-4-xpswmm-dickinson-a4rje",
    categories: ["SWMM5", "ICM InfoWorks"],
    difficulty: "intermediate",
    keywords: ["SWMM", "modeling", "hydraulics"]
  },
  {
    id: "linkedin-4",
    title: "Detecting and Preventing Invalid Hydraulic Solutions in SWMM",
    description: "Guide to identifying and fixing invalid hydraulic solution scenarios in SWMM models.",
    date: "9 months ago",
    readTime: "6 min read",
    imageUrl: icmCover,
    link: "https://www.linkedin.com/pulse/detecting-preventing-invalid-hydraulic-solutions-swmm-dickinson-g5oee",
    categories: ["SWMM5", "ICM InfoWorks"],
    difficulty: "intermediate",
    keywords: ["SWMM", "modeling", "hydraulics"]
  },
  {
    id: "linkedin-5",
    title: "Enhancing Subcatchment Connectivity in InfoWorks ICM: A Comprehensive Guide",
    description: "Best practices for managing and optimizing subcatchment connectivity in InfoWorks ICM models.",
    date: "9 months ago",
    readTime: "7 min read",
    imageUrl: icmCover,
    link: "https://www.linkedin.com/pulse/enhancing-subcatchment-connectivity-infoworks-icm-guide-dickinson-ifote",
    categories: ["SWMM5", "ICM InfoWorks"],
    difficulty: "intermediate",
    keywords: ["SWMM", "modeling", "hydraulics"]
  },
  {
    id: "linkedin-6",
    title: "Why You Should Import InfoSewer to InfoSWMM Using Newer AWI",
    description: "Technical advantages of using newer AWI for migrating InfoSewer models to InfoSWMM.",
    date: "9 months ago",
    readTime: "4 min read",
    imageUrl: icmCover,
    link: "https://www.linkedin.com/pulse/why-you-should-import-infosewer-infoswmm-use-newer-awi-dickinson-1lyxe",
    categories: ["SWMM5", "ICM InfoWorks"],
    difficulty: "intermediate",
    keywords: ["SWMM", "modeling", "hydraulics"]
  },
  {
    id: "linkedin-7",
    title: "Introducing SWMM5 by R. Hodges, Sharior, and Ed Tiernan - 2024",
    description: "Introduction to the latest SWMM5 developments and contributions from key researchers.",
    date: "9 months ago",
    readTime: "5 min read",
    imageUrl: icmCover,
    link: "https://www.linkedin.com/pulse/introducing-swmm5-br-hodges-sharior-ed-tiernan-e-2024-dickinson-p8eee",
    categories: ["SWMM5", "ICM InfoWorks"],
    difficulty: "intermediate",
    keywords: ["SWMM", "modeling", "hydraulics"]
  },
  {
    id: "linkedin-8",
    title: "Steady-State EPS, Kinematic, and Dynamic Wave Options in SWMM5",
    description: "Comprehensive comparison of routing methods and wave approximation options in SWMM5.",
    date: "9 months ago",
    readTime: "5 min read",
    imageUrl: icmCover,
    link: "https://www.linkedin.com/pulse/steady-state-eps-kinematic-dynamic-wave-options-swmm5-dickinson-x3uhe",
    categories: ["SWMM5", "ICM InfoWorks"],
    difficulty: "intermediate",
    keywords: ["SWMM", "modeling", "hydraulics"]
  },
  {
    id: "linkedin-9",
    title: "Ruby: ICM InfoWorks vs SWMM Link Property Data",
    description: "Comparative analysis of link properties between ICM InfoWorks and SWMM using Ruby.",
    date: "9 months ago",
    readTime: "6 min read",
    imageUrl: rubyCover,
    link: "https://www.linkedin.com/pulse/ruby-icm-infoworks-vs-swmm-link-property-data-robert-dickinson-uanie",
    categories: ["SWMM5", "ICM InfoWorks"],
    difficulty: "intermediate",
    keywords: ["SWMM", "modeling", "hydraulics"]
  },
  {
    id: "linkedin-10",
    title: "Ruby: ICM InfoWorks vs SWMM Node Property Data",
    description: "Ruby-based comparison of node properties and parameters between ICM InfoWorks and SWMM.",
    date: "9 months ago",
    readTime: "6 min read",
    imageUrl: rubyCover,
    link: "https://www.linkedin.com/pulse/ruby-icm-infoworks-vs-swmm-node-property-data-robert-dickinson-rqlce",
    categories: ["SWMM5", "ICM InfoWorks"],
    difficulty: "intermediate",
    keywords: ["SWMM", "modeling", "hydraulics"]
  },
  {
    id: "linkedin-11",
    title: "Navigating the Landscape of Hydraulic Modeling: A Comparative Study",
    description: "Deep dive into various hydraulic modeling approaches and their practical applications.",
    date: "9 months ago",
    readTime: "8 min read",
    imageUrl: icmCover,
    link: "https://www.linkedin.com/pulse/navigating-landscape-hydraulic-modeling-comparative-study-dickinson-meqqe",
    categories: ["SWMM5", "ICM InfoWorks"],
    difficulty: "intermediate",
    keywords: ["SWMM", "modeling", "hydraulics"]
  },
  {
    id: "linkedin-12",
    title: "Deep Dive: Water Quality Buildup and Washoff (BW) in ICM Using SWMM5",
    description: "Advanced techniques for modeling water quality buildup and washoff processes in ICM.",
    date: "9 months ago",
    readTime: "7 min read",
    imageUrl: icmCover,
    link: "https://www.linkedin.com/pulse/deep-dive-water-quality-buildup-washoff-bw-icm-using-swmm5-dickinson-kpfuc",
    categories: ["SWMM5", "ICM InfoWorks"],
    difficulty: "intermediate",
    keywords: ["SWMM", "modeling", "hydraulics"]
  },
  {
    id: "linkedin-13",
    title: "How to Use GraphReport Output from InfoSewer/InfoSWMM to Make Custom Graphs",
    description: "Guide to extracting and visualizing GraphReport output data for custom analysis.",
    date: "9 months ago",
    readTime: "5 min read",
    imageUrl: rubyCover,
    link: "https://www.linkedin.com/pulse/how-use-graphreport-output-infosewerinfoswmm-make-custom-dickinson-80dwe",
    categories: ["SWMM5", "ICM InfoWorks"],
    difficulty: "intermediate",
    keywords: ["SWMM", "modeling", "hydraulics"]
  },
  {
    id: "linkedin-144",
    title: "Using Ruby: Some InfoSWMM Subcatchment Manager Tools in ICM",
    description: "Ruby scripting techniques for managing subcatchment data in ICM from InfoSWMM sources.",
    date: "9 months ago",
    readTime: "6 min read",
    imageUrl: rubyCover,
    link: "https://www.linkedin.com/pulse/using-ruby-some-infoswmm-subcatchment-manager-tools-icm-dickinson-fomle",
    categories: ["Ruby Scripting", "ICM InfoWorks"],
    difficulty: "intermediate",
    keywords: ["Ruby", "subcatchment", "InfoSWMM", "data management"]
  },
  {
    id: "linkedin-145",
    title: "Using AI to Interpret PRN File from ICM InfoWorks as a Person from SWMM5",
    description: "AI-assisted techniques for interpreting and analyzing PRN files from ICM InfoWorks perspective.",
    date: "9 months ago",
    readTime: "5 min read",
    imageUrl: aiCover,
    link: "https://www.linkedin.com/pulse/using-ai-interpret-prn-file-icm-infoworks-person-swmm5-dickinson-9ce6e",
    categories: ["AI/ML", "ICM InfoWorks"],
    difficulty: "intermediate",
    keywords: ["AI", "PRN file", "interpretation", "analysis"]
  },
  {
    id: "linkedin-146",
    title: "Streamlining ICM Workflow: Preserving User Fields with Ruby",
    description: "Ruby scripting strategies for maintaining custom user fields during ICM model operations.",
    date: "9 months ago",
    readTime: "6 min read",
    imageUrl: rubyCover,
    link: "https://www.linkedin.com/pulse/streamlining-icm-workflow-preserving-user-fields-ruby-dickinson-hyjde",
    categories: ["Ruby Scripting", "ICM InfoWorks"],
    difficulty: "intermediate",
    keywords: ["Ruby", "user fields", "workflow", "automation"]
  }
];

export const documents: Document[] = [
  {
    id: "doc-1",
    title: "InfoWorks-ICM-for-Stream-Restoration",
    description: "Guide to using InfoWorks ICM for stream restoration projects and water quality management.",
    pages: 8,
    imageUrl: icmCover,
    link: "https://www.linkedin.com/feed/update/urn:li:activity:7341851176990109700",
    categories: ["SWMM5", "ICM InfoWorks"]
  },
  {
    id: "doc-2",
    title: "SWMM5 Import and Export in ICM InfoWorks and ICM SWMM",
    description: "Technical guide for importing and exporting SWMM5 models between ICM InfoWorks and ICM SWMM platforms.",
    pages: 23,
    imageUrl: icmCover,
    link: "https://www.linkedin.com/feed/update/urn:li:activity:7317567641349431296",
    categories: ["SWMM5", "ICM InfoWorks"]
  },
  {
    id: "doc-3",
    title: "My Version of the USEPA SWMM History",
    description: "Comprehensive historical account of the EPA SWMM development and evolution from inception to modern versions.",
    pages: 93,
    imageUrl: historyCover,
    link: "https://www.linkedin.com/feed/update/urn:li:activity:7316974158104440833",
    categories: ["SWMM5", "ICM InfoWorks"]
  },
  {
    id: "doc-4",
    title: "Bill James Similarity Index to Compare SWMM5 and ICM",
    description: "Statistical methodology for comparing SWMM5 and ICM model outputs using similarity indices.",
    pages: 21,
    imageUrl: sqlCover,
    link: "https://www.linkedin.com/feed/update/urn:li:activity:7303115167335088129",
    categories: ["SWMM5", "ICM InfoWorks"]
  },
  {
    id: "doc-5",
    title: "Consolidating Multiple SWMM Networks into a Single Network",
    description: "Technical approach to merging multiple SWMM networks into one unified model for regional analysis.",
    pages: 10,
    imageUrl: icmCover,
    link: "https://www.linkedin.com/feed/update/urn:li:activity:7293387743257112576",
    categories: ["SWMM5", "ICM InfoWorks"]
  },
  {
    id: "doc-6",
    title: "Using Punch Cards to Run SWMM 2 and SWMM3",
    description: "Historical perspective on legacy punch card methods for running early versions of SWMM models.",
    pages: 36,
    imageUrl: historyCover,
    link: "https://www.linkedin.com/feed/update/urn:li:activity:7292368911352664066",
    categories: ["SWMM5", "ICM InfoWorks"]
  },
  {
    id: "doc-7",
    title: "SWMM 4 Manual Part 2 - Storage Treatment and Other Blocks",
    description: "Official SWMM 4 documentation covering storage facility blocks and treatment processes in hydraulic routing.",
    pages: 212,
    imageUrl: icmCover,
    link: "https://www.linkedin.com/feed/update/urn:li:activity:7290929335908057088",
    categories: ["SWMM5", "ICM InfoWorks"]
  },
  {
    id: "doc-8",
    title: "SWMM4 Manual 1 - Runoff and Transport Blocks",
    description: "Complete SWMM 4 reference manual for runoff generation and transport processes through the network.",
    pages: 265,
    imageUrl: icmCover,
    link: "https://www.linkedin.com/feed/update/urn:li:activity:7290925832858910720",
    categories: ["SWMM5", "ICM InfoWorks"]
  },
  {
    id: "doc-9",
    title: "SWMM Volume IV - Program Listing",
    description: "Original SWMM Volume IV from 1971 containing the complete Fortran program listing and technical specifications.",
    pages: 248,
    imageUrl: historyCover,
    link: "https://www.linkedin.com/feed/update/urn:li:activity:7289673946839285760",
    categories: ["SWMM5", "ICM InfoWorks"]
  },
  {
    id: "doc-10",
    title: "SWMM Volume III - User's Manual (September 1971)",
    description: "Original 1971 user manual for SWMM providing guidance on model setup and interpretation of results.",
    pages: 299,
    imageUrl: historyCover,
    link: "https://www.linkedin.com/feed/update/urn:li:activity:7289472094550016000",
    categories: ["SWMM5", "ICM InfoWorks"]
  },
  {
    id: "doc-11",
    title: "SWMM Volume I - Final Report (July 1971)",
    description: "Original 1971 EPA final report introducing the Storm Water Management Model and its theoretical foundation.",
    pages: 299,
    imageUrl: historyCover,
    link: "https://www.linkedin.com/feed/update/urn:li:activity:7289469326389043200",
    categories: ["SWMM5", "ICM InfoWorks"]
  },
  {
    id: "doc-12",
    title: "SWMM Volume II - Verification and Testing (August 1971)",
    description: "Original 1971 verification and testing documentation for the first version of the SWMM model.",
    pages: 173,
    imageUrl: historyCover,
    link: "https://www.linkedin.com/feed/update/urn:li:activity:7289460627213828097",
    categories: ["SWMM5", "ICM InfoWorks"]
  },
  {
    id: "doc-13",
    title: "SWMM Version 2 Runoff Only User Manual (March 1975)",
    description: "1975 user guide for SWMM Version 2 focused on runoff calculations and watershed modeling.",
    pages: 107,
    imageUrl: historyCover,
    link: "https://www.linkedin.com/feed/update/urn:li:activity:7289457419078762496",
    categories: ["SWMM5", "ICM InfoWorks"]
  },
  {
    id: "doc-14",
    title: "SWMM User's Manual Version 4: Extran Addendum",
    description: "Technical addendum to SWMM 4 manual covering extended transportation and quality routing module.",
    pages: 202,
    imageUrl: icmCover,
    link: "https://www.linkedin.com/feed/update/urn:li:activity:7284368762005250048",
    categories: ["SWMM5", "ICM InfoWorks"]
  },
  {
    id: "doc-15",
    title: "SWMM3 PDF Part 2 for AI",
    description: "Second part of SWMM3 technical documentation prepared for AI analysis and archival purposes.",
    pages: 242,
    imageUrl: aiCover,
    link: "https://www.linkedin.com/feed/update/urn:li:activity:7283971378138021888",
    categories: ["SWMM5", "ICM InfoWorks"]
  },
  {
    id: "doc-16",
    title: "SWMM3 PDF from 1981 - Part 1",
    description: "Original 1981 SWMM3 technical documentation Part 1 covering model theory and application.",
    pages: 288,
    imageUrl: historyCover,
    link: "https://www.linkedin.com/feed/update/urn:li:activity:7283969724349050881",
    categories: ["SWMM5", "ICM InfoWorks"]
  },
  {
    id: "doc-17",
    title: "SWMM4 Files Used in the SWMM QA Report for DW Routing",
    description: "Quality assurance test files and documentation for SWMM4 dry weather routing validation.",
    pages: 115,
    imageUrl: sqlCover,
    link: "https://www.linkedin.com/feed/update/urn:li:activity:7283944235534352384",
    categories: ["SWMM5", "ICM InfoWorks"]
  },
  {
    id: "doc-18",
    title: "Extran3 Manual - Origin in 1981 of SWMM5 Hydraulics",
    description: "1981 Extran3 manual documenting the hydraulic foundation that evolved into modern SWMM5 routing methods.",
    pages: 240,
    imageUrl: icmCover,
    link: "https://www.linkedin.com/feed/update/urn:li:activity:7283819006690508800",
    categories: ["SWMM5", "ICM InfoWorks"]
  },
  {
    id: "doc-19",
    title: "FSAWWA MPMC Seminar on 1/31/25 in Tampa Florida",
    description: "Technical seminar materials on water modeling and engineering practices presented at FSAWWA conference.",
    pages: 1,
    imageUrl: quizCover,
    link: "https://www.linkedin.com/feed/update/urn:li:activity:7283147179139948547",
    categories: ["SWMM5", "ICM InfoWorks"]
  },
  {
    id: "doc-20",
    title: "InfoSewer Lectures - Innovyze / Autodesk",
    description: "Comprehensive lecture materials on InfoSewer modeling covering hydraulic principles and practical applications.",
    pages: 142,
    imageUrl: icmCover,
    link: "https://www.linkedin.com/feed/update/urn:li:activity:7270858395350450176",
    categories: ["SWMM5", "ICM InfoWorks"]
  }
];

export const linkedInPosts: LinkedInPost[] = [
  {
    id: "post-6",
    title: "InfoWorks ICM Ruby Scripting",
    description: "Exploring Ruby scripting capabilities in InfoWorks ICM for automating model workflows, data processing, and custom analysis within the ICM environment.",
    date: "2025",
    link: "https://www.linkedin.com/posts/robertdickinson_infoworks-icm-ruby-activity-7456985508666339328-IW2m",
    categories: ["ICM InfoWorks", "Ruby Scripting"]
  },
  {
    id: "post-5",
    title: "Alpha Release Guide for Open Source SWMM",
    description: "Announcing and guiding users through the alpha release of an open source SWMM project, covering setup, features, and next steps for the community.",
    date: "2025",
    link: "https://www.linkedin.com/posts/robertdickinson_alpha-release-guide-for-open-source-swmm-activity-7457559233727770624-qqyI",
    categories: ["SWMM5"]
  },
  {
    id: "post-4",
    title: "Two App-Making Credentials on My LinkedIn",
    description: "Sharing two app-making credentials that highlight expertise in building stormwater modeling applications and tools.",
    date: "2025",
    link: "https://www.linkedin.com/posts/robertdickinson_two-app-making-credentials-are-on-my-linkedin-activity-7458593568618688512-c1vR",
    categories: ["SWMM5", "ICM InfoWorks"]
  },
  {
    id: "post-3",
    title: "Super SUDS Diagrams in Autodesk Water",
    description: "Showcasing the impressive SUDS (Sustainable Urban Drainage Systems) diagrams available in Autodesk Water software for green infrastructure design and visualization.",
    date: "2025",
    link: "https://www.linkedin.com/posts/robertdickinson_super-suds-diagrams-in-this-autodesk-water-activity-7435427149479751680-CkNm",
    categories: ["ICM InfoWorks", "SWMM5"]
  },
  {
    id: "post-2",
    title: "Artificial and Constructed Wetlands: Sustainable Stormwater Solutions",
    description: "Exploring the use of artificial and constructed wetlands as sustainable approaches to stormwater management and water quality treatment.",
    date: "Today",
    link: "https://www.linkedin.com/posts/robertdickinson_artificial-and-constructed-wetlands-sustainable-activity-7420525986594607104-vUi4",
    categories: ["SWMM5", "ICM InfoWorks"]
  },
  {
    id: "post-1",
    title: "InfoDrainage Webinar: Green Infrastructure Design",
    description: "The InfoDrainage webinar demonstrates how to design green infrastructure solutions for urban stormwater management.",
    date: "3 days ago",
    link: "https://www.linkedin.com/posts/robertdickinson_the-infodrainage-webinar-demonstrates-how-activity-7417658210431475712-RC2S",
    categories: ["ICM InfoWorks", "SWMM5"]
  }
];

export const featuredApps: FeaturedApp[] = [
  {
    id: "app-1",
    name: "Rain Canvas Studio",
    description: "A creative visualization tool for rainfall patterns and design storms. Build beautiful, interactive rain canvases for presentations and reports.",
    platform: "Lovable",
    url: "https://rain-canvas-studio.lovable.app",
    imageUrl: appRainCanvas,
    categories: ["SWMM5", "Model Testing"]
  },
  {
    id: "app-2",
    name: "Repo Insights",
    description: "Explore and analyze GitHub repositories related to SWMM5 and stormwater modeling. Visualize code contributions, dependencies, and project activity.",
    platform: "Replit",
    url: "https://repo-insights--robertdickinson.replit.app",
    imageUrl: appRepoInsights,
    categories: ["Code Analysis", "SWMM5"]
  },
  {
    id: "app-3",
    name: "SWMM ICM St. Venant",
    description: "Interactive explorer for the Saint-Venant equations as implemented in SWMM5 and ICM. Compare solver approaches and visualize hydraulic computations.",
    platform: "Replit",
    url: "https://swmm-icm-st-venant--robertdickinson.replit.app",
    imageUrl: appStVenant,
    categories: ["SWMM5", "ICM InfoWorks", "Code Analysis"]
  },
  {
    id: "app-4",
    name: "SWMM Engine",
    description: "Run SWMM5 simulations directly in the browser. Upload INP files, execute the engine, and view results without installing any software.",
    platform: "Replit",
    url: "https://swmm-engine--robertdickinson.replit.app",
    imageUrl: appSwmmEngine,
    categories: ["SWMM5", "Model Testing"]
  },
  {
    id: "app-5",
    name: "Batch SWMM Runner",
    description: "Run hundreds of SWMM5 simulations in batch mode. Configure parameter sweeps, sensitivity analyses, and scenario comparisons automatically.",
    platform: "Replit",
    url: "https://batch-swmm-runner-robertdickinson.replit.app",
    imageUrl: appBatchRunner,
    categories: ["SWMM5", "Model Testing"]
  },
  {
    id: "app-6",
    name: "Historical Mystery",
    description: "An interactive journey through the hidden history of stormwater management and urban drainage engineering. Discover the stories behind the models.",
    platform: "Replit",
    url: "https://historical-mystery-robertdickinson.replit.app",
    imageUrl: appHistoricalMystery,
    categories: ["History", "SWMM5"]
  },
  {
    id: "app-7",
    name: "SWMM5 File Stats",
    description: "Upload a SWMM5 INP file and instantly get comprehensive statistics: element counts, parameter distributions, network topology analysis, and more.",
    platform: "Replit",
    url: "https://swmm5filestats.com",
    imageUrl: appFileStats,
    categories: ["SWMM5", "Code Analysis"]
  },
  {
    id: "app-8",
    name: "HydroCouple Explorer",
    description: "Explore coupled hydrological-hydraulic modeling concepts. Visualize how different model components interact in integrated water systems.",
    platform: "Replit",
    url: "https://hydrocouple-explorer-robertdickinson.replit.app",
    imageUrl: appHydrocouple,
    categories: ["SWMM5", "Model Testing"]
  },
  {
    id: "app-9",
    name: "SWMM Docs Explorer",
    description: "Search and browse over five decades of SWMM documentation in one place. From SWMM1 (1970) to SWMM5 (2026), all manuals made searchable.",
    platform: "Replit",
    url: "https://swmmdocs.com",
    imageUrl: appDocsExplorer,
    categories: ["SWMM5", "History"]
  },
  {
    id: "app-10",
    name: "SWMManywhere Explorer",
    description: "Explore the SWMManywhere project — synthetic drainage network generation using machine learning trained on 2000 real-world models.",
    platform: "Replit",
    url: "https://swmmr-explorer-robertdickinson.replit.app",
    imageUrl: appSwmmanywhere,
    categories: ["SWMM5", "AI/ML"]
  },
  {
    id: "app-11",
    name: "SWMM5 Rosetta Stone",
    description: "View SWMM5 and EPANET engine code translated across 37 programming languages. Compare implementations side by side.",
    platform: "Replit",
    url: "https://code-rosetta-stone.replit.app",
    imageUrl: appRosettaStone,
    categories: ["SWMM5", "Code Analysis"]
  },
  {
    id: "app-12",
    name: "SWMM5 INP Maker",
    description: "Create SWMM5 INP files interactively. Build nodes, links, subcatchments, and rain gages with a visual editor and export valid input files.",
    platform: "Replit",
    url: "https://swmm-inp-maker-robertdickinson.replit.app",
    imageUrl: appInpMaker,
    categories: ["SWMM5", "Model Testing"]
  },
  {
    id: "app-13",
    name: "XP to SWMM Bridge",
    description: "Convert XP-SWMM models to EPA SWMM5 format. Bridge the gap between legacy XP models and modern SWMM5 simulations.",
    platform: "Lovable",
    url: "https://xp-to-swmm-bridge.lovable.app",
    imageUrl: appXpBridge,
    categories: ["SWMM5", "Migration"]
  }
];

export const tools: Tool[] = [
  {
    id: "tool-1",
    title: "SWMM5 Output Parser",
    description: "Python library for parsing SWMM5 binary output files (.out). Extract node depths, link flows, and system statistics programmatically.",
    language: "Python",
    status: "beta",
    version: "0.2.0",
    codePreview: "import swmm_output_parser as sop\n\n# Parse a SWMM5 output file\nresults = sop.parse(\"model.out\")\n\n# Get node depths over time\nnode_depths = results.get_node_series(\"J1\", \"depth\")\n\n# Export to pandas DataFrame\ndf = results.to_dataframe()",
    categories: ["SWMM5", "Code Analysis"]
  },
  {
    id: "tool-2",
    title: "ICM Ruby Network Iterator",
    description: "Ruby script template for iterating through all network objects in ICM InfoWorks. Copy, modify, or analyze conduits, nodes, and subcatchments.",
    language: "Ruby",
    status: "stable",
    version: "1.0.0",
    codePreview: "# ICM Ruby Script: Network Object Iterator\nnet = WSApplication.current_network\n\n# Iterate all conduits\nnet.row_objects('hw_conduit').each do |conduit|\n  puts \"Conduit: \" + conduit.id.to_s\n  puts \"  Length: \" + conduit.conduit_length.to_s\n  puts \"  US Node: \" + conduit.us_node_id.to_s\nend\n\n# Iterate all nodes\nnet.row_objects('hw_node').each do |node|\n  puts \"Node: \" + node.id.to_s + \", Invert: \" + node.invert.to_s\nend",
    categories: ["Ruby Scripting", "ICM InfoWorks"]
  },
  {
    id: "tool-3",
    title: "SWMM-JSON Schema",
    description: "JSON schema definition for representing SWMM5 models in a portable, machine-readable format. Useful for model conversion and API development.",
    language: "JSON",
    status: "alpha",
    version: "0.1.0",
    codePreview: "{\n  \"$schema\": \"http://json-schema.org/draft-07/schema#\",\n  \"title\": \"SWMM5 Model\",\n  \"type\": \"object\",\n  \"properties\": {\n    \"junctions\": {\n      \"type\": \"array\",\n      \"items\": {\n        \"type\": \"object\",\n        \"properties\": {\n          \"id\": { \"type\": \"string\" },\n          \"elevation\": { \"type\": \"number\" },\n          \"maxDepth\": { \"type\": \"number\" }\n        }\n      }\n    }\n  }\n}",
    categories: ["SWMM5", "Code Analysis"]
  },
  {
    id: "tool-4",
    title: "ICM SQL Query Library",
    description: "Collection of SQL queries for extracting data from ICM models. Ready-to-use queries for common reporting and analysis tasks.",
    language: "SQL",
    status: "stable",
    version: "1.2.0",
    codePreview: "-- Get all conduits with capacity issues\nSELECT \n  id,\n  us_node_id,\n  ds_node_id,\n  conduit_length,\n  diameter\nFROM hw_conduit\nWHERE max_flow_ratio > 1.0\nORDER BY max_flow_ratio DESC;\n\n-- Sum subcatchment areas by land use\nSELECT \n  land_use,\n  SUM(area) as total_area,\n  COUNT(*) as count\nFROM hw_subcatchment\nGROUP BY land_use;",
    categories: ["SQL/Data", "ICM InfoWorks"]
  },
  {
    id: "tool-5",
    title: "SWMM INP File Validator",
    description: "Python script to validate SWMM5 input files (.inp) before running simulations. Catches common errors like missing links or invalid references.",
    language: "Python",
    status: "beta",
    version: "0.3.0",
    codePreview: "from swmm_validator import validate_inp\n\n# Validate an input file\nerrors, warnings = validate_inp(\"model.inp\")\n\n# Check for issues\nif errors:\n    print(\"Errors found:\")\n    for e in errors:\n        print(f\"  Line {e.line}: {e.message}\")\n\nif warnings:\n    print(\"Warnings:\")\n    for w in warnings:\n        print(f\"  {w.message}\")",
    categories: ["SWMM5", "Model Testing"]
  },
  {
    id: "tool-6",
    title: "Ruby Batch Simulation Runner",
    description: "Ruby script for running multiple ICM simulations with different scenarios. Automate sensitivity analysis and parameter sweeps.",
    language: "Ruby",
    status: "beta",
    version: "0.5.0",
    codePreview: "# ICM Ruby: Batch Simulation Runner\nscenarios = [\"base\", \"future_2050\", \"climate_change\"]\nrainfall_events = [\"2yr\", \"10yr\", \"100yr\"]\n\nscenarios.each do |scenario|\n  rainfall_events.each do |event|\n    # Load scenario\n    net = load_scenario(scenario)\n    \n    # Set rainfall\n    net.set_rainfall(event)\n    \n    # Run simulation\n    run_name = scenario + \"_\" + event\n    net.run_simulation(run_name)\n    \n    puts \"Completed: \" + run_name\n  end\nend",
    categories: ["Ruby Scripting", "ICM InfoWorks", "Model Testing"]
  },
  {
    id: "tool-7",
    title: "Manning's Equation Explorer",
    description: "Interactive visualization of Manning's equation for open channel flow. Adjust roughness, slope, and geometry to see flow velocity and discharge in real time.",
    language: "React",
    status: "stable",
    version: "1.0.0",
    codePreview: "// Manning's Equation: V = (1/n) * R^(2/3) * S^(1/2)\n// Q = A * V\n// Where:\n//   n = Manning's roughness coefficient\n//   R = hydraulic radius (A/P)\n//   S = channel slope\n//   A = cross-sectional area\n//   P = wetted perimeter",
    categories: ["SWMM5", "Model Testing"]
  },
  {
    id: "tool-8",
    title: "HEC-22 Inlet Explorer",
    description: "Interactive HEC-22 storm drain inlet capacity calculator. Explore grate, curb, and combination inlet types with real-time flow interception analysis.",
    language: "HTML",
    status: "stable",
    version: "1.0.0",
    codePreview: "<!-- HEC-22 Inlet Types -->\n<!-- Grate Inlet: Qi = E * Q -->\n<!-- Curb Inlet: Qi = C * L * d^1.67 -->\n<!-- Combination: Qi = Qgrate + Qcurb -->\n<!-- Bypass Flow: Qb = Q - Qi -->",
    categories: ["SWMM5", "Model Testing"]
  },
  {
    id: "tool-9",
    title: "ICM SQL Cookbook",
    description: "Ready-to-use SQL query collection for ICM InfoWorks. Extract network data, run QA/QC checks, generate reports, and analyze simulation results.",
    language: "HTML",
    status: "stable",
    version: "1.0.0",
    codePreview: "-- Find conduits with slope < 0.1%\nSELECT id, us_node_id, ds_node_id,\n  (us_invert - ds_invert) / conduit_length * 100 AS slope_pct\nFROM hw_conduit\nWHERE (us_invert - ds_invert) / conduit_length < 0.001\nORDER BY slope_pct;",
    categories: ["SQL/Data", "ICM InfoWorks"]
  },
  {
    id: "tool-10",
    title: "SWMM5 to IDDX Converter",
    description: "Convert SWMM5 INP files to IDDX format for import into ICM InfoWorks. Handles junctions, conduits, subcatchments, and rain gages.",
    language: "HTML",
    status: "stable",
    version: "1.0.0",
    codePreview: "// Conversion Pipeline:\n// 1. Parse SWMM5 .INP sections\n// 2. Map SWMM5 objects to ICM equivalents\n// 3. Transform coordinates and units\n// 4. Generate IDDX XML output\n// Supported: Junctions, Conduits, Subcatchments",
    categories: ["SWMM5", "ICM InfoWorks"]
  },
  {
    id: "tool-11",
    title: "SCS Rainfall & Curve Number Calculator",
    description: "Interactive SCS (NRCS) rainfall-runoff calculator with curve number lookup. Compute runoff depth, peak discharge, and hydrographs for design storms.",
    language: "React",
    status: "stable",
    version: "1.0.0",
    codePreview: "// SCS Runoff Equation:\n// Q = (P - Ia)^2 / (P - Ia + S)\n// S = (1000/CN) - 10\n// Ia = 0.2 * S (initial abstraction)\n// Where:\n//   P = precipitation depth (inches)\n//   CN = curve number (0-100)\n//   Q = runoff depth (inches)",
    categories: ["SWMM5", "Model Testing"]
  },
  {
    id: "tool-12",
    title: "Vibe Coding Assessment",
    description: "Interactive assessment tool for evaluating coding proficiency in water modeling automation. Test your skills in Python, Ruby, and SQL for SWMM5/ICM workflows.",
    language: "React",
    status: "stable",
    version: "1.0.0",
    codePreview: "// Assessment Categories:\n// 1. Python scripting for SWMM5\n// 2. Ruby automation for ICM\n// 3. SQL queries for network analysis\n// 4. Data visualization techniques\n// 5. Model QA/QC workflows",
    categories: ["SWMM5", "ICM InfoWorks"]
  },
  {
    id: "tool-13",
    title: "ICM Network Converter",
    description: "Convert between ICM InfoWorks network formats. Transform model data between different ICM versions and exchange formats.",
    language: "HTML",
    status: "stable",
    version: "1.0.0",
    codePreview: "// ICM Network Format Converter\n// Supported conversions:\n// - ICM CSV to Exchange format\n// - Exchange to SWMM5 INP\n// - Network object mapping\n// - Coordinate system transforms",
    categories: ["ICM InfoWorks", "SWMM5"]
  },
  {
    id: "tool-14",
    title: "Mike Urban / MIKE+ Suibing Converter",
    description: "Tool for converting Mike Urban (MOUSE/MIKE+) model data. Bridge DHI's integrated water modeling platform with other formats.",
    language: "HTML",
    status: "stable",
    version: "1.0.0",
    codePreview: "// MOUSE/MIKE+ Data Conversion\n// Supported elements:\n// - Manholes and pipe networks\n// - Catchment definitions\n// - Boundary conditions\n// - Cross-section profiles\n// - Pump and weir structures",
    categories: ["SWMM5", "Model Testing"]
  },
  {
    id: "tool-15",
    title: "HNRA Simulator v2",
    description: "Hydraulic Network Routing Algorithm simulator. Visualize how flow routing works through drainage networks step by step.",
    language: "HTML",
    status: "stable",
    version: "2.0.0",
    codePreview: "// HNRA Flow Routing Steps:\n// 1. Initialize node/link states\n// 2. Compute lateral inflows\n// 3. Route flow through links\n// 4. Update node water levels\n// 5. Check convergence criteria\n// 6. Advance to next timestep",
    categories: ["SWMM5", "Model Testing"]
  },
  {
    id: "tool-16",
    title: "SWMM5 Simulator",
    description: "Browser-based SWMM5 simulation visualization. Watch how the SWMM5 engine processes rainfall through a drainage network in real time.",
    language: "HTML",
    status: "stable",
    version: "1.0.0",
    codePreview: "// SWMM5 Simulation Engine Steps:\n// 1. Read rainfall hyetograph\n// 2. Compute runoff (RUNOFF block)\n// 3. Route flow (EXTRAN block)\n// 4. Apply controls/rules\n// 5. Update system state\n// 6. Write output timestep",
    categories: ["SWMM5", "Model Testing"]
  },
  {
    id: "tool-17",
    title: "Design Storm Equations Reference",
    description: "Comprehensive reference for design storm equations including IDF curves, SCS Type distributions, Chicago storms, and Huff distributions.",
    language: "Markdown",
    status: "stable",
    version: "1.0.0",
    codePreview: "# Design Storm Equations\n## IDF Curve: i = a / (t + b)^c\n## SCS Type II: P(t)/P24 = cumulative ratio\n## Chicago Storm: symmetric about peak\n## Return periods: 2, 5, 10, 25, 50, 100 yr",
    categories: ["SWMM5", "Model Testing"]
  },
  {
    id: "tool-18",
    title: "HEC-HMS API Explorer",
    description: "Interactive explorer for HEC-HMS hydrologic modeling methods. Compare SCS, Clark, Snyder unit hydrograph approaches and loss methods.",
    language: "React",
    status: "stable",
    version: "1.0.0",
    codePreview: "// HEC-HMS Methods:\n// Loss: SCS CN, Green-Ampt, Initial+Constant\n// Transform: SCS UH, Clark, Snyder, ModClark\n// Baseflow: Constant, Exponential, Linear\n// Routing: Muskingum, Lag, Kinematic Wave",
    categories: ["SWMM5", "Model Testing"]
  },
  {
    id: "tool-19",
    title: "RDII R-Value Infographic Generator",
    description: "Generate visual infographics explaining RDII (Rainfall-Derived Inflow & Infiltration) R-T-K parameters and their physical meaning.",
    language: "React",
    status: "stable",
    version: "1.0.0",
    codePreview: "// RDII Triangle Hydrograph Parameters:\n// R = fraction of rainfall volume\n// T = time to peak (hours)\n// K = ratio of recession to time-to-peak\n// Unit Hydrograph: Q(t) = R * A * P / T\n// Three triangles: fast, medium, slow response",
    categories: ["SWMM5", "Model Testing"]
  },
  {
    id: "tool-20",
    title: "Factors of 1729 Explorer",
    description: "Mathematical exploration of the Hardy-Ramanujan number 1729 and its properties. An interactive number theory tool.",
    language: "HTML",
    status: "stable",
    version: "1.0.0",
    codePreview: "// 1729 = 1^3 + 12^3 = 9^3 + 10^3\n// The smallest number expressible as the\n// sum of two cubes in two different ways\n// (Hardy-Ramanujan Number)\n// Factors: 7 × 13 × 19",
    categories: ["SWMM5", "Model Testing"]
  },
  {
    id: "tool-21",
    title: "ModelFlow Dashboard",
    description: "Visual dashboard for monitoring and comparing model simulation results. Track key performance indicators across multiple model runs.",
    language: "React",
    status: "stable",
    version: "1.0.0",
    codePreview: "// ModelFlow KPIs:\n// - Peak flow comparison\n// - Volume balance checks\n// - Continuity errors\n// - Node flooding summary\n// - Conduit capacity utilization\n// - Runtime performance metrics",
    categories: ["SWMM5", "Model Testing"]
  },
  {
    id: "tool-22",
    title: "Calibration Visualizer",
    description: "Interactive tool for visualizing model calibration results. Compare observed vs. simulated hydrographs with goodness-of-fit statistics.",
    language: "React",
    status: "stable",
    version: "1.0.0",
    codePreview: "// Calibration Statistics:\n// NSE = Nash-Sutcliffe Efficiency\n// RMSE = Root Mean Square Error\n// PBIAS = Percent Bias\n// R² = Coefficient of Determination\n// KGE = Kling-Gupta Efficiency\n// Compare observed vs simulated flows",
    categories: ["SWMM5", "Model Testing"]
  },
  {
    id: "tool-23",
    title: "SWMM5 INP Generator",
    description: "Generate SWMM5 input files programmatically. Define network topology, subcatchments, and simulation options through an interactive builder.",
    language: "HTML",
    status: "stable",
    version: "1.0.0",
    codePreview: "[TITLE]\nGenerated by SWMM5 INP Generator\n\n[OPTIONS]\nFLOW_UNITS  CFS\nINFILTRATION  GREEN_AMPT\nROUTING_MODEL  DYNWAVE\nSTART_DATE  01/01/2024\nEND_DATE  01/02/2024\nREPORT_STEP  00:05:00",
    categories: ["SWMM5", "Model Testing"]
  },
  {
    id: "tool-24",
    title: "ICM SWMM Inlet Designer",
    description: "Interactive inlet design tool for ICM SWMM models. Configure grate, curb, and slot inlet parameters with capacity calculations.",
    language: "HTML",
    status: "stable",
    version: "1.0.0",
    codePreview: "// ICM SWMM Inlet Types:\n// Type 1: Grate inlet (on-grade)\n// Type 2: Curb opening inlet\n// Type 3: Combination inlet\n// Type 4: Slot inlet\n// Capacity = f(geometry, slope, spread)",
    categories: ["SWMM5", "ICM InfoWorks"]
  },
  {
    id: "tool-25",
    title: "FHWA Culvert Simulator",
    description: "Federal Highway Administration culvert hydraulics simulator. Analyze inlet and outlet control, compute headwater, and check performance under HW/D criteria.",
    language: "React",
    status: "stable",
    version: "1.0.0",
    codePreview: "// FHWA Culvert Analysis:\n// Inlet Control: HW/D = f(Q/AD^0.5)\n// Outlet Control: HW = H + ho - LS\n// Shapes: Circular, Box, Arch, Elliptical\n// Materials: Concrete, CMP, HDPE, Steel\n// Check: HW/D < allowable ratio",
    categories: ["SWMM5", "Model Testing"]
  },
  {
    id: "tool-26",
    title: "Manhole Flooding Simulator",
    description: "Visualize manhole flooding mechanics. See how surcharging develops, water rises through the shaft, and surface flooding occurs during storm events.",
    language: "React",
    status: "stable",
    version: "1.0.0",
    codePreview: "// Manhole Flooding Stages:\n// 1. Free surface flow in pipes\n// 2. Surcharging begins (HGL > crown)\n// 3. Water rises in manhole shaft\n// 4. Surcharge to ground level\n// 5. Surface flooding (ponding)\n// Volume = shaft_area * (HGL - ground)",
    categories: ["SWMM5", "Model Testing"]
  },
  {
    id: "tool-27",
    title: "XP-SWMM File Reader",
    description: "Parse and analyze XP-SWMM .xp model files. Extract network elements, parameters, and convert to other formats.",
    language: "HTML",
    status: "stable",
    version: "1.0.0",
    codePreview: "// XP-SWMM File Sections:\n// NODE: Junction definitions\n// LINK: Conduit/channel data\n// CATCHMENT: Subcatchment areas\n// RAINFALL: Rain gage data\n// CONTROL: Pump/weir rules\n// Parse .xp → extract → convert",
    categories: ["SWMM5", "Model Testing"]
  },
  {
    id: "tool-28",
    title: "ICM Manhole Simulator",
    description: "Interactive visualization of ICM manhole hydraulics including shaft geometry, benching, head losses, and chamber configurations.",
    language: "React",
    status: "stable",
    version: "1.0.0",
    codePreview: "// ICM Manhole Parameters:\n// - Shaft area and shape\n// - Chamber area (can differ from shaft)\n// - Benching type (full, half, none)\n// - Head loss coefficient\n// - Ground level and cover level\n// - Flood type (sealed, grate, open)",
    categories: ["ICM InfoWorks", "Model Testing"]
  },
  {
    id: "tool-29",
    title: "RTK MicroGPT v2",
    description: "AI-powered assistant for RDII R-T-K parameter estimation. Input rainfall and flow data to get suggested unit hydrograph parameters.",
    language: "HTML",
    status: "beta",
    version: "2.0.0",
    codePreview: "// RTK Parameter Estimation:\n// Fast Response:  R1=0.02, T1=1hr, K1=2.0\n// Medium Response: R2=0.03, T2=3hr, K2=3.0\n// Slow Response:  R3=0.01, T3=8hr, K3=4.0\n// Total R = R1 + R2 + R3 ≤ 1.0\n// AI suggests based on basin characteristics",
    categories: ["SWMM5", "Model Testing"]
  },
  {
    id: "tool-30",
    title: "Manning's MicroGPT",
    description: "AI-assisted Manning's equation calculator with intelligent roughness coefficient suggestions based on channel description and material.",
    language: "React",
    status: "beta",
    version: "1.0.0",
    codePreview: "// Manning's n Suggestions (AI-assisted):\n// Concrete pipe: n = 0.013\n// Corrugated metal: n = 0.024\n// Natural channel: n = 0.035-0.050\n// Grass-lined: n = 0.030-0.040\n// PVC/HDPE: n = 0.010-0.012",
    categories: ["SWMM5", "Model Testing"]
  },
  {
    id: "tool-31",
    title: "Spatial Analysis Proposal Generator",
    description: "Generate spatial analysis proposals for stormwater modeling projects. Template for GIS-integrated hydraulic model development.",
    language: "HTML",
    status: "stable",
    version: "1.0.0",
    codePreview: "// Spatial Analysis Components:\n// 1. DEM processing & watershed delineation\n// 2. Land use / imperviousness mapping\n// 3. Soil type classification (HSG)\n// 4. Drainage network extraction\n// 5. Subcatchment delineation\n// 6. Parameter estimation from GIS",
    categories: ["SWMM5", "Model Testing"]
  },
  {
    id: "tool-32",
    title: "Yarra Network Design Report",
    description: "Interactive report viewer for the Yarra drainage network design. Explore network layout, design criteria, and capacity analysis results.",
    language: "HTML",
    status: "stable",
    version: "1.0.0",
    codePreview: "// Yarra Network Design Criteria:\n// - Minor system: 10-year ARI\n// - Major system: 100-year ARI\n// - Freeboard: 300mm minimum\n// - Velocity limits: 0.6-4.0 m/s\n// - d/D ratio check for self-cleansing",
    categories: ["SWMM5", "Model Testing"]
  },
  {
    id: "tool-33",
    title: "LA County Rational Method Calculator",
    description: "Los Angeles County modified rational method calculator. Compute peak flows using LA County hydrology manual methodology and C coefficients.",
    language: "HTML",
    status: "stable",
    version: "1.0.0",
    codePreview: "// LA County Rational Method:\n// Q = C * I * A (peak flow in CFS)\n// C = runoff coefficient (weighted)\n// I = rainfall intensity (in/hr)\n// A = drainage area (acres)\n// Uses LA County IDF curves\n// Modified for urbanized watersheds",
    categories: ["SWMM5", "Model Testing"]
  },
  {
    id: "tool-34",
    title: "LA County Modified Rational for ICM",
    description: "Ruby script implementing LA County's modified rational method within ICM InfoWorks. Automate hydrologic calculations for LA County projects.",
    language: "Ruby",
    status: "stable",
    version: "1.0.0",
    codePreview: "# LA County Modified Rational Method for ICM\nnet = WSApplication.current_network\n\nnet.row_objects('hw_subcatchment').each do |sc|\n  area_acres = sc.area * 2.47105  # ha to acres\n  c_value = sc.user_number_1  # runoff coefficient\n  tc = sc.time_of_concentration\n  intensity = la_county_idf(tc, return_period)\n  q_peak = c_value * intensity * area_acres\n  puts \"#{sc.id}: Q = #{q_peak.round(2)} cfs\"\nend",
    categories: ["Ruby Scripting", "ICM InfoWorks"]
  },
  {
    id: "tool-35",
    title: "SWMM Dynamic Wave Explainer",
    description: "Visual step-by-step explanation of SWMM5's dynamic wave routing algorithm. Understand how the Saint-Venant equations are solved numerically.",
    language: "React",
    status: "stable",
    version: "1.0.0",
    codePreview: "// SWMM5 Dynamic Wave Routing:\n// Continuity: ∂A/∂t + ∂Q/∂x = q\n// Momentum: ∂Q/∂t + ∂(Q²/A)/∂x + gA∂H/∂x + gASf = 0\n// Solution: Modified Euler method\n// Courant condition: Δt ≤ Δx / (V + c)\n// Successive approximation for convergence",
    categories: ["SWMM5", "Model Testing"]
  },
  {
    id: "tool-36",
    title: "Export to SWMM5 Exchange (Ruby)",
    description: "Ruby script for exporting ICM network data to SWMM5 exchange format. Automate model conversion from ICM to EPA SWMM5.",
    language: "Ruby",
    status: "stable",
    version: "1.0.0",
    codePreview: "# Export ICM Network to SWMM5 Format\nnet = WSApplication.current_network\noutput = File.open('export.inp', 'w')\n\noutput.puts '[JUNCTIONS]'\nnet.row_objects('hw_node').each do |node|\n  output.puts \"#{node.id}  #{node.invert}  #{node.max_depth}\"\nend\n\noutput.puts '[CONDUITS]'\nnet.row_objects('hw_conduit').each do |link|\n  output.puts \"#{link.id}  #{link.us_node_id}  #{link.ds_node_id}\"\nend",
    categories: ["Ruby Scripting", "ICM InfoWorks", "SWMM5"]
  },
  {
    id: "tool-37",
    title: "InfoSWMM/H2OMAP Import Exchange (Ruby)",
    description: "Ruby scripts for importing InfoSWMM and H2OMAP SWMM model data into ICM InfoWorks via the exchange format.",
    language: "Ruby",
    status: "stable",
    version: "1.0.0",
    codePreview: "# Import InfoSWMM/H2OMAP data into ICM\nnet = WSApplication.current_network\n\n# Read InfoSWMM export CSV\nCSV.foreach('infosewer_export.csv', headers: true) do |row|\n  node = net.create_row_object('hw_node')\n  node.id = row['ID']\n  node.x = row['X'].to_f\n  node.y = row['Y'].to_f\n  node.invert = row['INVERT'].to_f\n  node.write\nend",
    categories: ["Ruby Scripting", "ICM InfoWorks"]
  },
  {
    id: "tool-38",
    title: "SWMM5 Input File Format Documentation",
    description: "Complete reference documentation for the SWMM5 INP file format. Every section, keyword, and parameter explained with examples.",
    language: "HTML",
    status: "stable",
    version: "1.0.0",
    codePreview: "[JUNCTIONS]\n;;Name  Elevation  MaxDepth  InitDepth  SurDepth  Aponded\nJ1     100.0      6.0       0.0        0.0       0\nJ2     95.0       8.0       0.0        0.0       0\n\n[CONDUITS]\n;;Name  FromNode  ToNode  Length  Roughness  InOffset  OutOffset",
    categories: ["SWMM5", "Model Testing"]
  },
  {
    id: "tool-39",
    title: "SWMM5 Force Mains Modeling App",
    description: "Interactive tool for modeling force mains (pressurized pipes) in SWMM5. Configure Hazen-Williams or Darcy-Weisbach parameters.",
    language: "HTML",
    status: "stable",
    version: "1.0.0",
    codePreview: "// Force Main Equations:\n// Hazen-Williams: V = k * C * R^0.63 * S^0.54\n// Darcy-Weisbach: hf = f * L/D * V²/(2g)\n// SWMM5 [CONDUITS] FORCE_MAIN option\n// Transition: free surface ↔ pressurized\n// C factors: New CI=130, Old CI=100, DIP=140",
    categories: ["SWMM5", "Model Testing"]
  },
  {
    id: "tool-40",
    title: "ICM Results Field Exporter",
    description: "Ruby script for exporting simulation results from ICM InfoWorks. Extract time series data for nodes, links, and subcatchments to CSV.",
    language: "Ruby",
    status: "stable",
    version: "1.0.0",
    codePreview: "# Export ICM Results to CSV\nnet = WSApplication.current_network\nresults = net.current_timestep_results\n\n# Export node results\nCSV.open('node_results.csv', 'w') do |csv|\n  csv << ['Node_ID', 'Depth', 'Head', 'Flood_Volume']\n  net.row_objects('hw_node').each do |node|\n    csv << [node.id, node.result('depthnode'),\n            node.result('headnode'), node.result('floodvol')]\n  end\nend",
    categories: ["Ruby Scripting", "ICM InfoWorks"]
  },
  {
    id: "tool-41",
    title: "InfoSewer RPT File Reader",
    description: "Parse InfoSewer report (.RPT) files and extract simulation results. Convert InfoSewer output for analysis or import into ICM.",
    language: "Ruby",
    status: "stable",
    version: "1.0.0",
    codePreview: "# InfoSewer RPT File Parser\nrpt_data = File.readlines('model.rpt')\n\n# Parse node results section\nin_node_section = false\nrpt_data.each do |line|\n  if line.include?('Node Results')\n    in_node_section = true\n    next\n  end\n  if in_node_section && line.strip.length > 0\n    parts = line.split\n    puts \"Node: #{parts[0]}, MaxDepth: #{parts[1]}\"\n  end\nend",
    categories: ["ICM InfoWorks", "SWMM5"]
  },
  {
    id: "tool-42",
    title: "Conference Presentation Guide",
    description: "Best practices and templates for presenting stormwater modeling results at technical conferences. Structure, visuals, and delivery tips.",
    language: "HTML",
    status: "stable",
    version: "1.0.0",
    codePreview: "// Presentation Structure:\n// 1. Problem Statement (2 min)\n// 2. Model Setup & Data (3 min)\n// 3. Calibration Results (5 min)\n// 4. Scenario Analysis (5 min)\n// 5. Conclusions & Recommendations (3 min)\n// 6. Q&A (2 min)\n// Total: 20 minutes",
    categories: ["SWMM5", "Model Testing"]
  },
  {
    id: "tool-43",
    title: "InfoWorks ICM vs HEC-RAS Comparison",
    description: "Detailed side-by-side comparison of InfoWorks ICM and HEC-RAS capabilities, equations, and use cases for hydraulic modeling.",
    language: "HTML",
    status: "stable",
    version: "1.0.0",
    codePreview: "// Feature Comparison:\n// ICM: Full Saint-Venant, 1D/2D coupled\n// HEC-RAS: 1D steady/unsteady, 2D diffusion wave\n// ICM: Integrated hydrology + hydraulics\n// HEC-RAS: Separate HMS for hydrology\n// ICM: Ruby scripting automation\n// HEC-RAS: HEC-DSSVue, RAS Mapper",
    categories: ["ICM InfoWorks", "SWMM5"]
  },
  {
    id: "tool-44",
    title: "RUNOFF & EXTRAN in XP-SWMM",
    description: "Documentation of RUNOFF and EXTRAN computational blocks as implemented in XP-SWMM. Understand how XP-SWMM processes hydrology and hydraulics.",
    language: "HTML",
    status: "stable",
    version: "1.0.0",
    codePreview: "// XP-SWMM Computational Blocks:\n// RUNOFF: Nonlinear reservoir + kinematic wave\n//   - Horton/Green-Ampt infiltration\n//   - Depression storage\n//   - Overland flow routing\n// EXTRAN: Dynamic wave (Saint-Venant)\n//   - Surcharging algorithm\n//   - Orifice/weir/pump elements",
    categories: ["SWMM5", "Model Testing"]
  },
  {
    id: "tool-45",
    title: "Visual SWMM Fortran Input Format",
    description: "Reference documentation for the original Visual SWMM Fortran-era input file format. Historical reference for legacy model conversion.",
    language: "HTML",
    status: "stable",
    version: "1.0.0",
    codePreview: "C  VISUAL SWMM FORTRAN INPUT FORMAT\nC  Card Group A1: Title cards\nC  Card Group B1: Analysis options\nC  Card Group C1: Subcatchment data\nC  Card Group D1: Channel/conduit data\nC  Card Group E1: Storage junction data\nC  Fixed-column format (legacy Fortran I/O)",
    categories: ["SWMM5", "Model Testing"]
  }
];

export const githubRepos: GitHubRepo[] = [
  { id: "repo-1", name: "NewsletterGallery", description: "Gallery app for the SWMM5/ICM newsletter archive, built on Replit.", url: "https://github.com/dickinsonre/NewsletterGallery", language: "TypeScript", stars: 1, fork: false, updatedAt: "2026-05-13", categories: ["SWMM5"] },
  { id: "repo-2", name: "SWMM-Infiltration", description: "SWMM5 infiltration modeling explorer built on Replit.", url: "https://github.com/dickinsonre/SWMM-Infiltration", language: "TypeScript", stars: 0, fork: false, updatedAt: "2026-05-12", categories: ["SWMM5"] },
  { id: "repo-3", name: "SWMM-Explorer", description: "Interactive SWMM5 model explorer built on Replit.", url: "https://github.com/dickinsonre/SWMM-Explorer", language: "TypeScript", stars: 0, fork: false, updatedAt: "2026-05-12", categories: ["SWMM5"] },
  { id: "repo-4", name: "Swmm5-UI-Engine", description: "Web-based HTML UI engine for running and interacting with EPA SWMM5 models.", url: "https://github.com/dickinsonre/Swmm5-UI-Engine", language: "HTML", stars: 0, fork: false, updatedAt: "2026-05-12", categories: ["SWMM5"] },
  { id: "repo-5", name: "BatchSWMMRunner", description: "Batch runner for EPA SWMM5 simulations, built on Replit.", url: "https://github.com/dickinsonre/BatchSWMMRunner", language: "C", stars: 0, fork: false, updatedAt: "2026-05-12", categories: ["SWMM5"] },
  { id: "repo-6", name: "ICMRTKAnalyzer", description: "ICM RDII RTK (Rainfall-derived Inflow and Infiltration) analyzer built on Replit.", url: "https://github.com/dickinsonre/ICMRTKAnalyzer", language: "", stars: 0, fork: false, updatedAt: "2026-05-12", categories: ["ICM InfoWorks"] },
  { id: "repo-7", name: "Open-Source-Support", description: "Open code for Innovyze products that support scripting — Ruby for the UI/Exchange, SQL and other useful utilities.", url: "https://github.com/dickinsonre/Open-Source-Support", language: "AGS Script", stars: 1, fork: true, updatedAt: "2026-05-09", categories: ["Ruby Scripting", "ICM InfoWorks"] },
  { id: "repo-8", name: "HydroCouple", description: "HydroCouple interface specifications for component-based environmental and water modeling.", url: "https://github.com/dickinsonre/HydroCouple", language: "", stars: 0, fork: true, updatedAt: "2026-05-07", categories: ["SWMM5"] },
  { id: "repo-9", name: "isometric-city", description: "Isometric city visualization experiment in TypeScript.", url: "https://github.com/dickinsonre/isometric-city", language: "TypeScript", stars: 0, fork: true, updatedAt: "2026-05-07", categories: ["Code Analysis"] },
  { id: "repo-10", name: "EPANET-UI", description: "A new graphical user interface for the EPANET water distribution system analysis engine.", url: "https://github.com/dickinsonre/EPANET-UI", language: "HTML", stars: 0, fork: true, updatedAt: "2026-05-07", categories: ["SWMM5", "History"] },
  { id: "repo-11", name: "SMO-Flow", description: "A lightweight Ruby library for calculating subcatchment output flow from rainfall runoff, surface areas, foul flow, and trade flow components.", url: "https://github.com/dickinsonre/SMO-Flow", language: "", stars: 1, fork: true, updatedAt: "2026-05-02", categories: ["Ruby Scripting"] },
  { id: "repo-12", name: "exchange-runner", description: "Runner utility for ICM exchange file processing workflows.", url: "https://github.com/dickinsonre/exchange-runner", language: "", stars: 0, fork: true, updatedAt: "2026-04-23", categories: ["ICM InfoWorks"] },
  { id: "repo-13", name: "masalabs.github.io", description: "MASA Labs GitHub Pages — open-source stormwater modeling tools and documentation.", url: "https://github.com/dickinsonre/masalabs.github.io", language: "", stars: 1, fork: true, updatedAt: "2026-04-23", categories: ["SWMM5"] },
  { id: "repo-14", name: "ICMNewView", description: "New visualization interface for ICM InfoWorks networks, built on Replit.", url: "https://github.com/dickinsonre/ICMNewView", language: "TypeScript", stars: 0, fork: false, updatedAt: "2026-04-14", categories: ["ICM InfoWorks"] },
  { id: "repo-15", name: "graphify", description: "AI coding assistant skill — turn any folder of code, docs, papers, or images into a queryable knowledge graph.", url: "https://github.com/dickinsonre/graphify", language: "", stars: 1, fork: true, updatedAt: "2026-04-08", categories: ["AI/ML"] },
  { id: "repo-16", name: "claude-usage", description: "A local dashboard for tracking Claude Code token usage, costs, and session history.", url: "https://github.com/dickinsonre/claude-usage", language: "", stars: 0, fork: true, updatedAt: "2026-04-08", categories: ["AI/ML"] },
  { id: "repo-17", name: "swmm-agent", description: "AI agent framework for automating SWMM5 modeling workflows.", url: "https://github.com/dickinsonre/swmm-agent", language: "", stars: 1, fork: true, updatedAt: "2026-04-08", categories: ["AI/ML", "SWMM5"] },
  { id: "repo-18", name: "cdm-swmm4", description: "CDM SWMM4 legacy hydraulic model interface and analysis tool.", url: "https://github.com/dickinsonre/cdm-swmm4", language: "HTML", stars: 0, fork: false, updatedAt: "2026-05-12", categories: ["SWMM5", "History"] },
  { id: "repo-19", name: "EPANET-SWMM5-Generate", description: "Generator utility bridging EPANET and SWMM5 model file formats.", url: "https://github.com/dickinsonre/EPANET-SWMM5-Generate", language: "HTML", stars: 0, fork: false, updatedAt: "2026-05-12", categories: ["SWMM5"] },
  { id: "repo-20", name: "geotap-developer", description: "GeoTAP developer tools for spatial water network data integration.", url: "https://github.com/dickinsonre/geotap-developer", language: "", stars: 0, fork: true, updatedAt: "2026-05-12", categories: ["SQL/Data"] },
  { id: "repo-21", name: "HistoricalWaterInventions", description: "History of Water Inventions — interactive explorer of historical water engineering inventions and milestones.", url: "https://github.com/dickinsonre/HistoricalWaterInventions", language: "TypeScript", stars: 2, fork: false, updatedAt: "2026-05-13", categories: ["History"] },
  { id: "repo-22", name: "SWMM-Filebase", description: "Database and file management system for organizing SWMM5 model collections.", url: "https://github.com/dickinsonre/SWMM-Filebase", language: "TypeScript", stars: 0, fork: false, updatedAt: "2026-05-12", categories: ["SWMM5", "SQL/Data"] },
  { id: "repo-23", name: "BobSWMM-Auto-Research", description: "Automated research assistant for SWMM5 modeling literature and documentation.", url: "https://github.com/dickinsonre/BobSWMM-Auto-Research", language: "TypeScript", stars: 0, fork: false, updatedAt: "2026-05-12", categories: ["AI/ML", "SWMM5"] },
  { id: "repo-24", name: "SWMM5NetworkAnalyzer", description: "Python-based SWMM5 network topology analysis and QA/QC tool.", url: "https://github.com/dickinsonre/SWMM5NetworkAnalyzer", language: "Python", stars: 0, fork: false, updatedAt: "2026-05-12", categories: ["SWMM5", "Code Analysis"] },
  { id: "repo-25", name: "SSOAP-Engine", description: "SSOAP (Storm and Sanitary Operations Analysis Program) computational engine.", url: "https://github.com/dickinsonre/SSOAP-Engine", language: "TypeScript", stars: 0, fork: false, updatedAt: "2026-05-12", categories: ["SWMM5"] },
  { id: "repo-26", name: "Code-Rosetta-Stone", description: "SWMM5 and EPANET code translations across multiple programming languages.", url: "https://github.com/dickinsonre/Code-Rosetta-Stone", language: "JavaScript", stars: 0, fork: false, updatedAt: "2026-05-12", categories: ["Code Analysis", "SWMM5"] },
  { id: "repo-27", name: "CEQUALW2Component", description: "CE-QUAL-W2 water quality model component integration for stormwater systems.", url: "https://github.com/dickinsonre/CEQUALW2Component", language: "", stars: 0, fork: true, updatedAt: "2026-05-12", categories: ["SWMM5"] },
  { id: "repo-28", name: "openswmm.gui", description: "Open-source graphical user interface for EPA SWMM5.", url: "https://github.com/dickinsonre/openswmm.gui", language: "", stars: 0, fork: true, updatedAt: "2026-05-12", categories: ["SWMM5"] },
  { id: "repo-29", name: "alt-swmm5", description: "Alternative HTML-based browser interface for SWMM5 model visualization.", url: "https://github.com/dickinsonre/alt-swmm5", language: "HTML", stars: 0, fork: false, updatedAt: "2026-05-12", categories: ["SWMM5"] },
  { id: "repo-30", name: "algorithm-visualizer", description: "Interactive algorithm visualization and exploration tool.", url: "https://github.com/dickinsonre/algorithm-visualizer", language: "", stars: 0, fork: true, updatedAt: "2026-05-12", categories: ["Code Analysis"] },
  { id: "repo-31", name: "arnis", description: "Procedural world generation from OpenStreetMap data.", url: "https://github.com/dickinsonre/arnis", language: "", stars: 0, fork: true, updatedAt: "2026-05-12", categories: ["Code Analysis"] },
  { id: "repo-33", name: "swmm-js", description: "JavaScript port and bindings for the EPA SWMM5 computational engine.", url: "https://github.com/dickinsonre/swmm-js", language: "JavaScript", stars: 0, fork: true, updatedAt: "2026-05-12", categories: ["SWMM5", "Code Analysis"] },
  { id: "repo-34", name: "pybme", description: "Python bioelectrical model estimation framework.", url: "https://github.com/dickinsonre/pybme", language: "", stars: 0, fork: true, updatedAt: "2026-05-12", categories: ["Code Analysis"] },
  { id: "repo-35", name: "AWI_RED_Combined", description: "Ruby scripts for AWI RED combined sewer overflow analysis and reporting.", url: "https://github.com/dickinsonre/AWI_RED_Combined", language: "Ruby", stars: 0, fork: false, updatedAt: "2026-05-12", categories: ["Ruby Scripting"] },
  { id: "repo-36", name: "swmm5-dickinson", description: "Personal SWMM5 C engine fork with custom modifications and extensions.", url: "https://github.com/dickinsonre/swmm5-dickinson", language: "C", stars: 0, fork: false, updatedAt: "2026-05-12", categories: ["SWMM5"] },
  { id: "repo-37", name: "SJ-SWMM5-ManualSearch", description: "San Jose SWMM5 manual search and reference lookup tool.", url: "https://github.com/dickinsonre/SJ-SWMM5-ManualSearch", language: "HTML", stars: 0, fork: false, updatedAt: "2026-05-12", categories: ["SWMM5"] },
  { id: "repo-38", name: "DeepCode", description: "AI-powered code analysis and automated code review assistant.", url: "https://github.com/dickinsonre/DeepCode", language: "", stars: 0, fork: true, updatedAt: "2026-05-12", categories: ["AI/ML", "Code Analysis"] },
  { id: "repo-39", name: "SWMManywhere", description: "SWMManywhere — automated SWMM5 network generation for ungauged catchments.", url: "https://github.com/dickinsonre/SWMManywhere", language: "", stars: 0, fork: true, updatedAt: "2026-05-12", categories: ["SWMM5", "AI/ML"] },
  { id: "repo-40", name: "InfoWorks-ICM-Ruby-Scripting-", description: "Ruby scripting examples, utilities, and automation scripts for InfoWorks ICM.", url: "https://github.com/dickinsonre/InfoWorks-ICM-Ruby-Scripting-", language: "Ruby", stars: 0, fork: false, updatedAt: "2026-05-12", categories: ["Ruby Scripting", "ICM InfoWorks"] },
  { id: "repo-41", name: "12-factor-agents", description: "Principles for building LLM-powered software good enough for production customers.", url: "https://github.com/dickinsonre/12-factor-agents", language: "", stars: 0, fork: true, updatedAt: "2025-11-22", categories: ["AI/ML"] },
  { id: "repo-42", name: "Wastewater_DataKit", description: "Public open-source wastewater network automation toolkit delivering Python + Ruby foundation for model workflows, analysis, and post-processing.", url: "https://github.com/dickinsonre/Wastewater_DataKit", language: "", stars: 0, fork: true, updatedAt: "2025-11-15", categories: ["Ruby Scripting", "SWMM5"] },
  { id: "repo-43", name: "Dolphin", description: "Document Image Parsing via Heterogeneous Anchor Prompting (ACL 2025).", url: "https://github.com/dickinsonre/Dolphin", language: "", stars: 0, fork: true, updatedAt: "2025-09-23", categories: ["AI/ML"] },
  { id: "repo-44", name: "InfoLiteTransportableTS", description: "TypeScript library for working with InfoWorks ICM and InfoAsset transportable files.", url: "https://github.com/dickinsonre/InfoLiteTransportableTS", language: "", stars: 0, fork: true, updatedAt: "2025-05-23", categories: ["ICM InfoWorks"] },
  { id: "repo-45", name: "SWMM5plus", description: "Prototype Fortran 2008 engine for the EPA Storm Water Management Model (SWMM).", url: "https://github.com/dickinsonre/SWMM5plus", language: "Fortran", stars: 1, fork: true, updatedAt: "2025-01-28", categories: ["SWMM5"] },
  { id: "repo-46", name: "ReSWMM", description: "Reads and edits SWMM input files, recommends time steps, and creates artificial spatial discretization to improve dynamic wave accuracy.", url: "https://github.com/dickinsonre/ReSWMM", language: "", stars: 1, fork: true, updatedAt: "2025-01-28", categories: ["SWMM5"] },
  { id: "repo-47", name: "ICM_Tools", description: "SQL and Ruby scripts to supplement modeling in InfoWorks ICM — the most-starred repo.", url: "https://github.com/dickinsonre/ICM_Tools", language: "", stars: 2, fork: true, updatedAt: "2024-11-14", categories: ["ICM InfoWorks", "SQL/Data"] },
  { id: "repo-48", name: "iland-model", description: "iLand — individual-based forest landscape and disturbance model.", url: "https://github.com/dickinsonre/iland-model", language: "", stars: 0, fork: true, updatedAt: "2024-07-19", categories: ["Code Analysis"] },
  { id: "repo-49", name: "Innovyze-ICM-Libraries", description: "Open source Ruby libraries and documentation for developers building custom software for Innovyze InfoWorks ICM and InfoNet.", url: "https://github.com/dickinsonre/Innovyze-ICM-Libraries", language: "", stars: 0, fork: true, updatedAt: "2023-01-28", categories: ["ICM InfoWorks", "Ruby Scripting"] },
  { id: "repo-50", name: "ruby_scripts", description: "Ruby scripting utilities and examples for ICM stormwater modeling workflows.", url: "https://github.com/dickinsonre/ruby_scripts", language: "", stars: 1, fork: true, updatedAt: "2023-01-27", categories: ["Ruby Scripting"] },
  { id: "repo-51", name: "Stormwater-Management-Model", description: "Open Water Analytics Stormwater Management Model — the open-source SWMM5 C engine.", url: "https://github.com/dickinsonre/Stormwater-Management-Model", language: "C", stars: 1, fork: true, updatedAt: "2023-01-17", categories: ["SWMM5"] },
  { id: "repo-52", name: "EPANET", description: "The Water Distribution System Hydraulic and Water Quality Analysis Toolkit by US EPA.", url: "https://github.com/dickinsonre/EPANET", language: "", stars: 1, fork: true, updatedAt: "2022-11-01", categories: ["SWMM5", "History"] },
  { id: "repo-53", name: "gh-pages-html-template", description: "Simple template for deploying an HTML website to GitHub Pages.", url: "https://github.com/dickinsonre/gh-pages-html-template", language: "", stars: 0, fork: true, updatedAt: "2022-08-03", categories: ["Code Analysis"] },
  { id: "repo-54", name: "EPANET-legacy-user-interface", description: "Legacy Pascal-based graphical user interface for EPANET water distribution modeling.", url: "https://github.com/dickinsonre/EPANET-legacy-user-interface", language: "Pascal", stars: 1, fork: true, updatedAt: "2018-09-03", categories: ["History", "SWMM5"] },
  { id: "repo-57", name: "Open-SWMM-Core", description: "Open SWMM Core — open-source SWMM5 engine interface and tools built on Replit.", url: "https://github.com/dickinsonre/Open-SWMM-Core", language: "TypeScript", stars: 0, fork: false, updatedAt: "2026-05-13", categories: ["SWMM5"] },
  { id: "repo-58", name: "SWMM-ICM-StVenant", description: "SWMM5 and ICM InfoWorks St. Venant equation explorer — dynamic wave routing comparison built on Replit.", url: "https://github.com/dickinsonre/SWMM-ICM-StVenant", language: "TypeScript", stars: 0, fork: false, updatedAt: "2026-05-13", categories: ["SWMM5", "ICM InfoWorks"] },
  { id: "repo-59", name: "SwmmHistory", description: "Visual timeline and history of SWMM — from SWMM1 (1971) through SWMM5 and beyond.", url: "https://github.com/dickinsonre/SwmmHistory", language: "", stars: 0, fork: false, updatedAt: "2026-05-13", categories: ["SWMM5", "History"] },
  { id: "repo-60", name: "EPANET-SWMM-Experts", description: "EPANET and SWMM5 expert knowledge base and reference tool built on Replit.", url: "https://github.com/dickinsonre/EPANET-SWMM-Experts", language: "", stars: 0, fork: false, updatedAt: "2026-05-13", categories: ["SWMM5"] },
  { id: "repo-67", name: "swmm5-ea", description: "SWMM5-EA — evolutionary algorithm extensions for SWMM5 calibration and optimization.", url: "https://github.com/dickinsonre/swmm5-ea", language: "", stars: 0, fork: true, updatedAt: "2026-05-13", categories: ["SWMM5"] }
];

export const cimmRepos: GitHubRepo[] = [
  { id: "cimm-1", name: "SWMM5plus", description: "Prototype Fortran 2008 engine for the EPA Storm Water Management Model (SWMM) — the flagship CIMM-ORG project.", url: "https://github.com/CIMM-ORG/SWMM5plus", language: "Fortran", stars: 39, fork: false, updatedAt: "2026-04-23", categories: ["SWMM5"] },
  { id: "cimm-2", name: "openswmm.engine", description: "Dynamic hydrology-hydraulic water quality simulation model for stormwater, wastewater, and combined sewer collection systems.", url: "https://github.com/CIMM-ORG/openswmm.engine", language: "", stars: 0, fork: true, updatedAt: "2026-03-30", categories: ["SWMM5"] },
  { id: "cimm-3", name: "SWMM5plus-1", description: "Prototype Fortran 2008 engine for the EPA Storm Water Management Model (SWMM).", url: "https://github.com/CIMM-ORG/SWMM5plus-1", language: "Fortran", stars: 1, fork: true, updatedAt: "2026-01-04", categories: ["SWMM5"] },
  { id: "cimm-4", name: "staged-recipes", description: "A place to submit conda recipes before they become fully fledged conda-forge feedstocks.", url: "https://github.com/CIMM-ORG/staged-recipes", language: "", stars: 0, fork: true, updatedAt: "2022-06-28", categories: ["Code Analysis"] }
];

export const swmmEnablementRepos: GitHubRepo[] = [
  { id: "se-1", name: "ICMFlowVisualizer", description: "ICM Flow Visualizer — interactive flow visualization tool for InfoWorks ICM networks.", url: "https://github.com/SWMMEnablement/ICMFlowVisualizer", language: "TypeScript", stars: 0, fork: false, updatedAt: "2026-05-14", categories: ["ICM InfoWorks"] },
  { id: "se-2", name: "SWMM-Lego-Model", description: "SWMM5 model built from modular Lego-style reusable network components.", url: "https://github.com/SWMMEnablement/SWMM-Lego-Model", language: "", stars: 0, fork: false, updatedAt: "2026-05-14", categories: ["SWMM5"] },
  { id: "se-3", name: "Stormcraft-Ultimate", description: "Stormcraft Ultimate — interactive stormwater modeling and design platform built on Replit.", url: "https://github.com/SWMMEnablement/Stormcraft-Ultimate", language: "TypeScript", stars: 0, fork: false, updatedAt: "2026-05-14", categories: ["SWMM5"] },
  { id: "se-4", name: "ForceMainSWMM5EPANETComparison", description: "Python tool comparing force main hydraulics between SWMM5 and EPANET simulations.", url: "https://github.com/SWMMEnablement/ForceMainSWMM5EPANETComparison", language: "Python", stars: 0, fork: false, updatedAt: "2026-05-14", categories: ["SWMM5"] },
  { id: "se-5", name: "SWMM-Attractor", description: "SWMM Attractor — chaos theory and attractor visualization applied to SWMM5 hydrology.", url: "https://github.com/SWMMEnablement/SWMM-Attractor", language: "TypeScript", stars: 0, fork: false, updatedAt: "2026-05-14", categories: ["SWMM5"] },
  { id: "se-6", name: "Swmmanywhere-Explorer", description: "Swmmanywhere Explorer — derive and simulate sewer networks anywhere in the world.", url: "https://github.com/SWMMEnablement/Swmmanywhere-Explorer", language: "TypeScript", stars: 0, fork: false, updatedAt: "2026-05-14", categories: ["SWMM5"] },
  { id: "se-7", name: "SurchargeDetective", description: "SurchargeDetective — identifies and diagnoses surcharged pipes in SWMM5 models.", url: "https://github.com/SWMMEnablement/SurchargeDetective", language: "TypeScript", stars: 0, fork: false, updatedAt: "2026-05-14", categories: ["SWMM5"] },
  { id: "se-8", name: "SWMM-INP-Maker", description: "SWMM INP Maker — interactive builder for SWMM5 input files.", url: "https://github.com/SWMMEnablement/SWMM-INP-Maker", language: "TypeScript", stars: 0, fork: false, updatedAt: "2026-05-14", categories: ["SWMM5"] },
  { id: "se-9", name: "SWMM-Engine", description: "SWMM Engine — core SWMM5 simulation engine interface built on Replit.", url: "https://github.com/SWMMEnablement/SWMM-Engine", language: "TypeScript", stars: 0, fork: false, updatedAt: "2026-05-14", categories: ["SWMM5"] },
  { id: "se-10", name: "rain-canvas-studio", description: "Interactive rain canvas studio for stormwater rainfall visualization and analysis.", url: "https://github.com/SWMMEnablement/rain-canvas-studio", language: "TypeScript", stars: 0, fork: false, updatedAt: "2026-05-11", categories: ["SWMM5"] },
  { id: "se-11", name: "Open-Source-Support1", description: "Open code for Innovyze products that support scripting — Ruby for the UI/Exchange, SQL and other useful utilities.", url: "https://github.com/SWMMEnablement/Open-Source-Support1", language: "AGS Script", stars: 0, fork: true, updatedAt: "2026-05-09", categories: ["Ruby Scripting", "ICM InfoWorks"] },
  { id: "se-12", name: "1729-SWMM5-Models", description: "A collection of 1,729 SWMM5 model files covering a wide range of stormwater scenarios.", url: "https://github.com/SWMMEnablement/1729-SWMM5-Models", language: "Batchfile", stars: 9, fork: false, updatedAt: "2026-04-24", categories: ["SWMM5", "History"] },
  { id: "se-13", name: "WCH_2004_SWMM44H", description: "SWMM 4.4H Fortran source code — the 2004 WCH release of the legacy SWMM4 engine.", url: "https://github.com/SWMMEnablement/WCH_2004_SWMM44H", language: "Fortran", stars: 1, fork: false, updatedAt: "2026-04-06", categories: ["SWMM5", "History"] },
  { id: "se-14", name: "openswmm.engine", description: "Dynamic hydrology-hydraulic water quality simulation model for stormwater, wastewater, and combined sewer collection systems.", url: "https://github.com/SWMMEnablement/openswmm.engine", language: "", stars: 0, fork: true, updatedAt: "2026-03-25", categories: ["SWMM5"] },
  { id: "se-15", name: "SWMM_MD_Documents", description: "Curated collection of SWMM reference documentation and technical notes in Markdown format.", url: "https://github.com/SWMMEnablement/SWMM_MD_Documents", language: "Fortran", stars: 1, fork: false, updatedAt: "2026-02-10", categories: ["SWMM5"] },
  { id: "se-16", name: "pyswmm", description: "Python wrappers for EPA SWMM enabling scripted simulation control and results extraction.", url: "https://github.com/SWMMEnablement/pyswmm", language: "Python", stars: 0, fork: true, updatedAt: "2026-02-10", categories: ["SWMM5", "Code Analysis"] },
  { id: "se-17", name: "Hackathon_KM", description: "Ruby-based knowledge management scripts from a SWMM stormwater modeling hackathon.", url: "https://github.com/SWMMEnablement/Hackathon_KM", language: "Ruby", stars: 0, fork: false, updatedAt: "2025-10-22", categories: ["Ruby Scripting"] },
  { id: "se-18", name: "Stormwater-Management-Model", description: "Dynamic hydrology-hydraulic water quality simulation model — Open Water Analytics SWMM fork.", url: "https://github.com/SWMMEnablement/Stormwater-Management-Model", language: "", stars: 0, fork: true, updatedAt: "2024-03-05", categories: ["SWMM5"] },
  { id: "se-19", name: "Open-Source-Support", description: "Open code for Innovyze products that support scripting — Ruby for the UI/Exchange, SQL and other useful utilities.", url: "https://github.com/SWMMEnablement/Open-Source-Support", language: "AGS Script", stars: 0, fork: true, updatedAt: "2024-02-26", categories: ["Ruby Scripting", "ICM InfoWorks"] },
  { id: "se-20", name: "SWMM5plus", description: "Prototype Fortran 2008 engine for the EPA Storm Water Management Model (SWMM).", url: "https://github.com/SWMMEnablement/SWMM5plus", language: "Fortran", stars: 0, fork: true, updatedAt: "2023-01-17", categories: ["SWMM5"] },
  { id: "se-21", name: "swmmr", description: "R language interface for US EPA's SWMM — run simulations and read results from R.", url: "https://github.com/SWMMEnablement/swmmr", language: "R", stars: 0, fork: true, updatedAt: "2022-11-01", categories: ["SWMM5", "Code Analysis"] }
];

export const swmmBobRepos: GitHubRepo[] = [
  { id: "bob-1", name: "ITM_SWMM", description: "Implicit Two-component Method (ITM) integrated with SWMM for advanced pipe pressurization modeling.", url: "https://github.com/SWMMBobSWMM6/ITM_SWMM", language: "", stars: 0, fork: true, updatedAt: "2026-05-13", categories: ["SWMM5"] },
  { id: "bob-2", name: "swmm5-runoff-explorer", description: "SWMM5 runoff parameter explorer and sensitivity analysis tool.", url: "https://github.com/SWMMBobSWMM6/swmm5-runoff-explorer", language: "HTML", stars: 0, fork: false, updatedAt: "2026-05-02", categories: ["SWMM5"] },
  { id: "bob-3", name: "openswmm.engine", description: "Dynamic hydrology-hydraulic water quality simulation model for stormwater, wastewater, and combined sewer collection systems.", url: "https://github.com/SWMMBobSWMM6/openswmm.engine", language: "", stars: 2, fork: true, updatedAt: "2026-03-30", categories: ["SWMM5"] }
];
