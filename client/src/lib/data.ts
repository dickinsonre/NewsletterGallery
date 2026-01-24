import quizCover from "@assets/generated_images/quiz_and_testing_knowledge_check.png";
import rubyCover from "@assets/generated_images/ruby_code_and_scripting_automation.png";
import icmCover from "@assets/generated_images/icm_infoworks_software_interface.png";
import historyCover from "@assets/generated_images/historical_timeline_of_swmm_evolution.png";
import aiCover from "@assets/generated_images/ai_and_machine_learning_integration.png";
import sqlCover from "@assets/generated_images/sql_database_queries_and_data_extraction.png";

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

export type ToolStatus = "stable" | "beta" | "alpha";

export interface Tool {
  id: string;
  title: string;
  description: string;
  language: "Python" | "Ruby" | "JavaScript" | "SQL" | "JSON";
  status: ToolStatus;
  version: string;
  downloadUrl?: string;
  githubUrl?: string;
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

export interface LearningPath {
  id: string;
  title: string;
  description: string;
  difficulty: Difficulty;
  steps: { type: "newsletter" | "article"; id: string; title: string }[];
}

export const learningPaths: LearningPath[] = [
  {
    id: "beginner-swmm5",
    title: "Getting Started with SWMM5",
    description: "A beginner's journey through SWMM5 fundamentals, from basic concepts to running your first model.",
    difficulty: "beginner",
    steps: [
      { type: "newsletter", id: "1", title: "SWMM5 Inside ICM InfoWorks" },
      { type: "newsletter", id: "21", title: "100 SWMM5 Quiz Questions" },
      { type: "newsletter", id: "37", title: "Classic SWMM5 Test Files" }
    ]
  },
  {
    id: "ruby-scripting",
    title: "Ruby Scripting Mastery",
    description: "Learn to automate ICM InfoWorks workflows with Ruby scripting, from basics to advanced data extraction.",
    difficulty: "intermediate",
    steps: [
      { type: "newsletter", id: "36", title: "Ruby Resources for ICM" },
      { type: "newsletter", id: "41", title: "Export to CSV with Ruby" },
      { type: "newsletter", id: "43", title: "Statistics with Ruby Prompts" },
      { type: "newsletter", id: "48", title: "Import 2K SWMM5 Files with Ruby" }
    ]
  },
  {
    id: "migration-guide",
    title: "Model Migration Guide",
    description: "Master the art of migrating models between InfoSewer, InfoSWMM, and ICM InfoWorks.",
    difficulty: "intermediate",
    steps: [
      { type: "newsletter", id: "2", title: "Importing to ICM" },
      { type: "newsletter", id: "23", title: "DWF Troubleshooting" },
      { type: "newsletter", id: "30", title: "InfoSewer to ICM" }
    ]
  },
  {
    id: "advanced-hydraulics",
    title: "Advanced Hydraulics & Code",
    description: "Deep dive into hydraulic modeling, C code analysis, and advanced statistics.",
    difficulty: "advanced",
    steps: [
      { type: "newsletter", id: "13", title: "C Code Hydraulics" },
      { type: "newsletter", id: "14", title: "Statistics Deep Dive" },
      { type: "newsletter", id: "26", title: "SQL for Results Analysis" }
    ]
  }
];

export const newsletters: Newsletter[] = [
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
    id: "linkedin-149",
    title: "When Hyperbolic Geometry Meets Urban Drainage: Making Beautiful Subcatchments",
    description: "I've been exploring an unusual intersection: hyperbolic geometry and hydrological modeling. The result is a web-based tool that generates subcatchments.",
    date: "1 day ago",
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
  }
];
