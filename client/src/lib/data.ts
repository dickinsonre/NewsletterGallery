import quizCover from "@assets/generated_images/quiz_and_testing_knowledge_check.png";
import rubyCover from "@assets/generated_images/ruby_code_and_scripting_automation.png";
import icmCover from "@assets/generated_images/icm_infoworks_software_interface.png";
import historyCover from "@assets/generated_images/historical_timeline_of_swmm_evolution.png";
import aiCover from "@assets/generated_images/ai_and_machine_learning_integration.png";
import sqlCover from "@assets/generated_images/sql_database_queries_and_data_extraction.png";

export interface Newsletter {
  id: string;
  title: string;
  description: string;
  date: string;
  readTime: string;
  imageUrl: string;
  link: string;
  issueNumber: number;
}

export const newsletters: Newsletter[] = [
  {
    id: "45",
    title: "ICM InfoWorks Simulation Parameters 100-Question Quiz",
    description: "Test your knowledge on simulation parameters within ICM InfoWorks. A comprehensive quiz for modelers.",
    date: "2 weeks ago",
    readTime: "10 min read",
    imageUrl: quizCover,
    link: "https://www.linkedin.com/newsletters/7159940733972434944/",
    issueNumber: 45
  },
  {
    id: "44",
    title: "AI Ruby Time Travel Prompts for SWMM4, ICM InfoWorks, InfoSewer, InfoSWMM and SWMM5",
    description: "Exploring the intersection of AI prompts and legacy water modeling software versions.",
    date: "6 months ago",
    readTime: "8 min read",
    imageUrl: aiCover,
    link: "https://www.linkedin.com/newsletters/7159940733972434944/",
    issueNumber: 44
  },
  {
    id: "43",
    title: "Streamlining InfoWorks ICM SWMM: Simple Statistics of Thousands of Network Parameters with Ruby Prompts",
    description: "Using Ruby scripting to extract and analyze statistical data from vast network parameters in ICM SWMM.",
    date: "6 months ago",
    readTime: "7 min read",
    imageUrl: rubyCover,
    link: "https://www.linkedin.com/newsletters/7159940733972434944/",
    issueNumber: 43
  },
  {
    id: "42",
    title: "Streamlining InfoWorks ICM: Simple Statistics of Thousands of Network Parameters with Ruby Prompts",
    description: "A guide to simplifying the statistical analysis of network parameters in InfoWorks ICM using Ruby.",
    date: "6 months ago",
    readTime: "6 min read",
    imageUrl: rubyCover,
    link: "https://www.linkedin.com/newsletters/7159940733972434944/",
    issueNumber: 42
  },
  {
    id: "41",
    title: "Streamlining InfoWorks ICM SWMM: Exporting Thousands of Network Parameters to CSV with Ruby Prompts",
    description: "Automating the export of large datasets from ICM SWMM to CSV format using Ruby scripts.",
    date: "6 months ago",
    readTime: "5 min read",
    imageUrl: rubyCover,
    link: "https://www.linkedin.com/newsletters/7159940733972434944/",
    issueNumber: 41
  },
  {
    id: "40",
    title: "Streamlining InfoWorks ICM: Exporting Thousands of Network Parameters to CSV with Ruby Prompts",
    description: "Efficient techniques for exporting InfoWorks ICM network data to CSV for external analysis.",
    date: "6 months ago",
    readTime: "5 min read",
    imageUrl: rubyCover,
    link: "https://www.linkedin.com/newsletters/7159940733972434944/",
    issueNumber: 40
  },
  {
    id: "39",
    title: "History of SWMM from 1978 Onwards from PDF Files",
    description: "A historical journey through the development of the Storm Water Management Model (SWMM) since 1978.",
    date: "8 months ago",
    readTime: "12 min read",
    imageUrl: historyCover,
    link: "https://www.linkedin.com/newsletters/7159940733972434944/",
    issueNumber: 39
  },
  {
    id: "38",
    title: "SWMM4, SWMM5, RUBY AND AI FOR SWMM5",
    description: "Integrating modern AI and Ruby scripting with classic and current SWMM versions.",
    date: "8 months ago",
    readTime: "9 min read",
    imageUrl: aiCover,
    link: "https://www.linkedin.com/newsletters/7159940733972434944/",
    issueNumber: 38
  },
  {
    id: "37",
    title: "Seven Classic SWMM5 Hydraulics Test Files from Extran3 or SWMM3 in 1981 Used in SWMM4 and SWMM5 Testing",
    description: "Reviewing classic hydraulic test files that have stood the test of time across multiple SWMM generations.",
    date: "9 months ago",
    readTime: "8 min read",
    imageUrl: icmCover,
    link: "https://www.linkedin.com/newsletters/7159940733972434944/",
    issueNumber: 37
  },
  {
    id: "36",
    title: "Ruby scripting resources for ICM and ICM SWMM, including help files, AI learning locations, and GitHub repositories",
    description: "A curated list of resources for mastering Ruby scripting in the context of ICM and ICM SWMM.",
    date: "9 months ago",
    readTime: "7 min read",
    imageUrl: rubyCover,
    link: "https://www.linkedin.com/newsletters/7159940733972434944/",
    issueNumber: 36
  },
  {
    id: "35",
    title: "PDF Files for SWMM1, SWMM2, SWMM3, SWMM4 and SWMM5 for AI Queries",
    description: "Digitizing and organizing historical SWMM documentation for use with AI-driven queries.",
    date: "1 year ago",
    readTime: "6 min read",
    imageUrl: aiCover,
    link: "https://www.linkedin.com/newsletters/7159940733972434944/",
    issueNumber: 35
  },
  {
    id: "34",
    title: "SWMM5+, InfoSewer, ICM SWMM, ICM InfoWorks, Ruby, Water Quality",
    description: "A broad overview of water quality modeling across various software platforms and the role of Ruby.",
    date: "1 year ago",
    readTime: "8 min read",
    imageUrl: icmCover,
    link: "https://www.linkedin.com/newsletters/7159940733972434944/",
    issueNumber: 34
  },
  {
    id: "33",
    title: "Misc Ruby Tools for ICM InfoWorks SWMM Modeling",
    description: "A collection of miscellaneous yet useful Ruby tools for enhancing your modeling workflow.",
    date: "1 year ago",
    readTime: "5 min read",
    imageUrl: rubyCover,
    link: "https://www.linkedin.com/newsletters/7159940733972434944/",
    issueNumber: 33
  },
  {
    id: "32",
    title: "Using Ruby to make ICM SWMM more like InfoSWMM Output Report Tables",
    description: "Customizing ICM SWMM output reports to match the familiar format of InfoSWMM using Ruby.",
    date: "1 year ago",
    readTime: "7 min read",
    imageUrl: rubyCover,
    link: "https://www.linkedin.com/newsletters/7159940733972434944/",
    issueNumber: 32
  },
  {
    id: "31",
    title: "How the EPASWMM5 Related Software Newsletter is Organized using the Number 1729",
    description: "An intriguing look into the organizational structure of the newsletter and the significance of the number 1729.",
    date: "1 year ago",
    readTime: "4 min read",
    imageUrl: quizCover,
    link: "https://www.linkedin.com/newsletters/7159940733972434944/",
    issueNumber: 31
  },
  {
    id: "30",
    title: "InfoSewer to ICM InfoWorks using ODIC and Ruby with SQL, Extended FY2025 Version",
    description: "A guide on migrating from InfoSewer to ICM InfoWorks using advanced data import and scripting techniques.",
    date: "1 year ago",
    readTime: "10 min read",
    imageUrl: sqlCover,
    link: "https://www.linkedin.com/newsletters/7159940733972434944/",
    issueNumber: 30
  },
  {
    id: "29",
    title: "Ruby Code for Altering 2D Polygons, Making 2D Results Points Inside the Polygon for both ICM InfoWorks and SWMM Networks",
    description: "Advanced Ruby scripting for spatial manipulation of 2D polygons and results points in network models.",
    date: "1 year ago",
    readTime: "8 min read",
    imageUrl: rubyCover,
    link: "https://www.linkedin.com/newsletters/7159940733972434944/",
    issueNumber: 29
  },
  {
    id: "28",
    title: "From 1988 to 2024: SWMM's Incredible 54,000-fold Engine or PC Speed Improvement",
    description: "Tracking the exponential performance improvements in SWMM engines over nearly four decades.",
    date: "1 year ago",
    readTime: "6 min read",
    imageUrl: historyCover,
    link: "https://www.linkedin.com/newsletters/7159940733972434944/",
    issueNumber: 28
  },
  {
    id: "27",
    title: "How many runoff surfaces do I actually use in my ICM InfoWorks network? Ruby can answer this question.",
    description: "Using Ruby to audit and analyze runoff surface usage in your hydraulic networks.",
    date: "1 year ago",
    readTime: "5 min read",
    imageUrl: rubyCover,
    link: "https://www.linkedin.com/newsletters/7159940733972434944/",
    issueNumber: 27
  },
  {
    id: "26",
    title: "SQL for ALL ICM SWMM Results for Nodes, Links and Subcatchments and LIDS Input and Results Parameters",
    description: "Comprehensive SQL queries for extracting all types of results and parameters from ICM SWMM.",
    date: "1 year ago",
    readTime: "9 min read",
    imageUrl: sqlCover,
    link: "https://www.linkedin.com/newsletters/7159940733972434944/",
    issueNumber: 26
  },
  {
    id: "25",
    title: "SQL for ALL ICM SWMM Results for Nodes, Links and Subcatchments and LIDS Input and Results Parameters",
    description: "Comprehensive SQL queries for extracting all types of results and parameters from ICM SWMM.",
    date: "2 years ago",
    readTime: "9 min read",
    imageUrl: sqlCover,
    link: "https://www.linkedin.com/newsletters/7159940733972434944/",
    issueNumber: 25
  },
  {
    id: "24",
    title: "ICM InfoWorks: SQL Functions and Network Parameter Extraction",
    description: "Deep dive into SQL functions available in ICM InfoWorks for efficient network analysis.",
    date: "2 years ago",
    readTime: "8 min read",
    imageUrl: sqlCover,
    link: "https://www.linkedin.com/newsletters/7159940733972434944/",
    issueNumber: 24
  },
  {
    id: "23",
    title: "100 SWMM5 Quiz Questions",
    description: "A comprehensive quiz covering SWMM5 fundamentals, test your expertise.",
    date: "2 years ago",
    readTime: "15 min read",
    imageUrl: quizCover,
    link: "https://www.linkedin.com/newsletters/7159940733972434944/",
    issueNumber: 23
  },
  {
    id: "22",
    title: "InfoSewer to ICM SWMM Migration: Database and Ruby Tools",
    description: "Step-by-step guidance on converting InfoSewer models to ICM SWMM using Ruby scripting.",
    date: "2 years ago",
    readTime: "12 min read",
    imageUrl: rubyCover,
    link: "https://www.linkedin.com/newsletters/7159940733972434944/",
    issueNumber: 22
  },
  {
    id: "21",
    title: "Seven InfoSWMM Blogs for Readers in the Years 2024-2030+",
    description: "A curated collection of InfoSWMM resources and best practices for modern modeling.",
    date: "2 years ago",
    readTime: "7 min read",
    imageUrl: icmCover,
    link: "https://www.linkedin.com/newsletters/7159940733972434944/",
    issueNumber: 21
  },
  {
    id: "20",
    title: "Ruby Tools for InfoWorks Network Parameter Analysis",
    description: "Practical Ruby scripts for analyzing and manipulating ICM InfoWorks network parameters.",
    date: "2 years ago",
    readTime: "8 min read",
    imageUrl: rubyCover,
    link: "https://www.linkedin.com/newsletters/7159940733972434944/",
    issueNumber: 20
  },
  {
    id: "19",
    title: "ICM SWMM: From Legacy InfoSWMM to Modern Modeling",
    description: "Understanding the transition from InfoSWMM to ICM SWMM and leveraging new features.",
    date: "2 years ago",
    readTime: "10 min read",
    imageUrl: icmCover,
    link: "https://www.linkedin.com/newsletters/7159940733972434944/",
    issueNumber: 19
  },
  {
    id: "18",
    title: "SWMM5 Hydraulics: Deep Dive into Link and Node Calculations",
    description: "Technical analysis of how SWMM5 calculates hydraulic performance in stormwater networks.",
    date: "2 years ago",
    readTime: "11 min read",
    imageUrl: icmCover,
    link: "https://www.linkedin.com/newsletters/7159940733972434944/",
    issueNumber: 18
  },
  {
    id: "17",
    title: "Ruby Automation for ICM InfoWorks LID and SUDS Modeling",
    description: "Automating the creation and analysis of Low Impact Development features in InfoWorks.",
    date: "2 years ago",
    readTime: "7 min read",
    imageUrl: rubyCover,
    link: "https://www.linkedin.com/newsletters/7159940733972434944/",
    issueNumber: 17
  },
  {
    id: "16",
    title: "SWMM5 Routing Models and Network Representation",
    description: "Exploring different routing approaches and network modeling strategies in SWMM5.",
    date: "2 years ago",
    readTime: "9 min read",
    imageUrl: icmCover,
    link: "https://www.linkedin.com/newsletters/7159940733972434944/",
    issueNumber: 16
  },
  {
    id: "15",
    title: "SQL Queries for InfoWorks ICM Results Analysis and Reporting",
    description: "Advanced SQL techniques for extracting and analyzing ICM results data.",
    date: "2 years ago",
    readTime: "10 min read",
    imageUrl: sqlCover,
    link: "https://www.linkedin.com/newsletters/7159940733972434944/",
    issueNumber: 15
  },
  {
    id: "14",
    title: "Ruby Scripting for SWMM5 Network Generation and Modification",
    description: "Learn how to programmatically create and modify SWMM5 networks using Ruby.",
    date: "2 years ago",
    readTime: "8 min read",
    imageUrl: rubyCover,
    link: "https://www.linkedin.com/newsletters/7159940733972434944/",
    issueNumber: 14
  },
  {
    id: "13",
    title: "ICM InfoWorks Advanced Reporting with SQL and Ruby",
    description: "Combining SQL and Ruby to create custom reports from InfoWorks data.",
    date: "2 years ago",
    readTime: "9 min read",
    imageUrl: sqlCover,
    link: "https://www.linkedin.com/newsletters/7159940733972434944/",
    issueNumber: 13
  },
  {
    id: "12",
    title: "SWMM5 Hydrology: Infiltration, Runoff, and Rainfall Analysis",
    description: "Understanding the hydrological processes modeled in SWMM5 and their implementation.",
    date: "2 years ago",
    readTime: "10 min read",
    imageUrl: icmCover,
    link: "https://www.linkedin.com/newsletters/7159940733972434944/",
    issueNumber: 12
  },
  {
    id: "11",
    title: "InfoWorks ICM Calibration and Validation Techniques",
    description: "Best practices for calibrating and validating stormwater models in InfoWorks.",
    date: "2 years ago",
    readTime: "9 min read",
    imageUrl: icmCover,
    link: "https://www.linkedin.com/newsletters/7159940733972434944/",
    issueNumber: 11
  },
  {
    id: "10",
    title: "Ruby Tools for Data Extraction from SWMM and InfoWorks Models",
    description: "Efficient Ruby scripts for extracting and transforming model data.",
    date: "2 years ago",
    readTime: "7 min read",
    imageUrl: rubyCover,
    link: "https://www.linkedin.com/newsletters/7159940733972434944/",
    issueNumber: 10
  },
  {
    id: "9",
    title: "SWMM4 to SWMM5: A Comprehensive Migration Guide",
    description: "Complete walkthrough of upgrading SWMM4 models to SWMM5 with best practices.",
    date: "2 years ago",
    readTime: "12 min read",
    imageUrl: historyCover,
    link: "https://www.linkedin.com/newsletters/7159940733972434944/",
    issueNumber: 9
  },
  {
    id: "8",
    title: "ICM InfoWorks Database Structure and Management",
    description: "Understanding the database architecture underlying ICM InfoWorks projects.",
    date: "2 years ago",
    readTime: "8 min read",
    imageUrl: sqlCover,
    link: "https://www.linkedin.com/newsletters/7159940733972434944/",
    issueNumber: 8
  },
  {
    id: "7",
    title: "Seven Blogs about SWMM and Myself at Autodesk",
    description: "Personal reflections on SWMM development and water management innovation.",
    date: "2 years ago",
    readTime: "6 min read",
    imageUrl: icmCover,
    link: "https://www.linkedin.com/newsletters/7159940733972434944/",
    issueNumber: 7
  },
  {
    id: "6",
    title: "Seven Blogs about ChatGPT and SWMM5",
    description: "Exploring the intersection of AI language models and stormwater modeling.",
    date: "2 years ago",
    readTime: "7 min read",
    imageUrl: aiCover,
    link: "https://www.linkedin.com/newsletters/7159940733972434944/",
    issueNumber: 6
  },
  {
    id: "5",
    title: "Seven Blogs about Importing InfoSewer or InfoSWMM to ICM InfoWorks",
    description: "Comprehensive guide to model migration and data integration strategies.",
    date: "2 years ago",
    readTime: "11 min read",
    imageUrl: icmCover,
    link: "https://www.linkedin.com/newsletters/7159940733972434944/",
    issueNumber: 5
  },
  {
    id: "4",
    title: "SWMM5 inside ICM InfoWorks",
    description: "How SWMM5 engine powers ICM InfoWorks and integration architecture.",
    date: "2 years ago",
    readTime: "8 min read",
    imageUrl: icmCover,
    link: "https://www.linkedin.com/newsletters/7159940733972434944/",
    issueNumber: 4
  },
  {
    id: "3",
    title: "Seven Blogs About Ruby, ICM SWMM and InfoWorks Networks",
    description: "Ruby scripting techniques for advanced stormwater network modeling.",
    date: "3 years ago",
    readTime: "9 min read",
    imageUrl: rubyCover,
    link: "https://www.linkedin.com/newsletters/7159940733972434944/",
    issueNumber: 3
  },
  {
    id: "2",
    title: "Stormwater Management Model (SWMM) Fundamentals and Applications",
    description: "Introduction to SWMM and its role in modern stormwater engineering.",
    date: "3 years ago",
    readTime: "8 min read",
    imageUrl: icmCover,
    link: "https://www.linkedin.com/newsletters/7159940733972434944/",
    issueNumber: 2
  },
  {
    id: "1",
    title: "Welcome to EPASWMM5 Related Software Newsletter",
    description: "Introduction to the newsletter covering SWMM, InfoWorks, Ruby scripting, and water engineering.",
    date: "3 years ago",
    readTime: "5 min read",
    imageUrl: quizCover,
    link: "https://www.linkedin.com/newsletters/7159940733972434944/",
    issueNumber: 1
  }
];
