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

export interface LinkedInArticle {
  id: string;
  title: string;
  description: string;
  date: string;
  readTime: string;
  imageUrl: string;
  link: string;
}

export const newsletters: Newsletter[] = [
  {
    id: "45",
    title: "ICM InfoWorks Simulation Parameters 100-Question Quiz",
    description: "Test your knowledge on simulation parameters within ICM InfoWorks. A comprehensive quiz for modelers.",
    date: "2 weeks ago",
    readTime: "10 min read",
    imageUrl: quizCover,
    link: "https://www.linkedin.com/pulse/icm-infoworks-simulation-parameters-100-question-quiz-dickinson-oh8ke",
    issueNumber: 45
  },
  {
    id: "44",
    title: "AI Ruby Time Travel Prompts for SWMM4, ICM InfoWorks, InfoSewer, InfoSWMM and SWMM5",
    description: "Exploring the intersection of AI prompts and legacy water modeling software versions.",
    date: "6 months ago",
    readTime: "8 min read",
    imageUrl: aiCover,
    link: "https://www.linkedin.com/pulse/ai-ruby-time-travel-prompts-swmm4-icm-infoworks-swmm5-dickinson-7cjse",
    issueNumber: 44
  },
  {
    id: "43",
    title: "Streamlining InfoWorks ICM SWMM: Simple Statistics of Thousands of Network Parameters with Ruby Prompts",
    description: "Using Ruby scripting to extract and analyze statistical data from vast network parameters in ICM SWMM.",
    date: "6 months ago",
    readTime: "7 min read",
    imageUrl: rubyCover,
    link: "https://www.linkedin.com/pulse/streamlining-infoworks-icm-swmm-simple-statistics-ruby-dickinson-dxtre",
    issueNumber: 43
  },
  {
    id: "42",
    title: "Streamlining InfoWorks ICM: Simple Statistics of Thousands of Network Parameters with Ruby Prompts",
    description: "A guide to simplifying the statistical analysis of network parameters in InfoWorks ICM using Ruby.",
    date: "6 months ago",
    readTime: "6 min read",
    imageUrl: rubyCover,
    link: "https://www.linkedin.com/pulse/streamlining-infoworks-icm-simple-statistics-network-ruby-dickinson-cnbve",
    issueNumber: 42
  },
  {
    id: "41",
    title: "Streamlining InfoWorks ICM SWMM: Exporting Thousands of Network Parameters to CSV with Ruby Prompts",
    description: "Automating the export of large datasets from ICM SWMM to CSV format using Ruby scripts.",
    date: "6 months ago",
    readTime: "5 min read",
    imageUrl: rubyCover,
    link: "https://www.linkedin.com/pulse/streamlining-infoworks-icm-swmm-exporting-thousands-csv-dickinson-gcpce",
    issueNumber: 41
  },
  {
    id: "40",
    title: "Streamlining InfoWorks ICM: Exporting Thousands of Network Parameters to CSV with Ruby Prompts",
    description: "Efficient techniques for exporting InfoWorks ICM network data to CSV for external analysis.",
    date: "6 months ago",
    readTime: "5 min read",
    imageUrl: rubyCover,
    link: "https://www.linkedin.com/pulse/streamlining-infoworks-icm-exporting-thousands-csv-ruby-dickinson-cov5c",
    issueNumber: 40
  },
  {
    id: "39",
    title: "History of SWMM from 1978 Onwards from PDF Files",
    description: "A historical journey through the development of the Storm Water Management Model (SWMM) since 1978.",
    date: "8 months ago",
    readTime: "12 min read",
    imageUrl: historyCover,
    link: "https://www.linkedin.com/pulse/edition-40-history-swmm-from-1978-onwards-pdf-files-robert-dickinson-z9kje",
    issueNumber: 39
  },
  {
    id: "38",
    title: "SWMM4, SWMM5, RUBY AND AI FOR SWMM5",
    description: "Integrating modern AI and Ruby scripting with classic and current SWMM versions.",
    date: "8 months ago",
    readTime: "9 min read",
    imageUrl: aiCover,
    link: "https://www.linkedin.com/pulse/edition-39-swmm4-swmm5-ruby-ai-robert-dickinson-m31le",
    issueNumber: 38
  },
  {
    id: "37",
    title: "Seven Classic SWMM5 Hydraulics Test Files from Extran3 or SWMM3 in 1981 Used in SWMM4 and SWMM5 Testing",
    description: "Reviewing classic hydraulic test files that have stood the test of time across multiple SWMM generations.",
    date: "9 months ago",
    readTime: "8 min read",
    imageUrl: icmCover,
    link: "https://www.linkedin.com/pulse/edition-38-seven-classic-swmm5-hydraulics-test-files-from-dickinson-izrye",
    issueNumber: 37
  },
  {
    id: "36",
    title: "Ruby scripting resources for ICM and ICM SWMM, including help files, AI learning locations, and GitHub repositories",
    description: "A curated list of resources for mastering Ruby scripting in the context of ICM and ICM SWMM.",
    date: "9 months ago",
    readTime: "7 min read",
    imageUrl: rubyCover,
    link: "https://www.linkedin.com/pulse/edition-37-ruby-scripting-resources-icm-swmm-help-files-dickinson-7safe",
    issueNumber: 36
  },
  {
    id: "35",
    title: "PDF Files for SWMM1, SWMM2, SWMM3, SWMM4 and SWMM5 for AI Queries",
    description: "Digitizing and organizing historical SWMM documentation for use with AI-driven queries.",
    date: "1 year ago",
    readTime: "6 min read",
    imageUrl: aiCover,
    link: "https://www.linkedin.com/pulse/edition-36-pdf-files-swmm1-swmm2-swmm3-swmm4-swmm5-ai-dickinson-juhke",
    issueNumber: 35
  },
  {
    id: "34",
    title: "SWMM5+, InfoSewer, ICM SWMM, ICM InfoWorks, Ruby, Water Quality",
    description: "A broad overview of water quality modeling across various software platforms and the role of Ruby.",
    date: "1 year ago",
    readTime: "8 min read",
    imageUrl: icmCover,
    link: "https://www.linkedin.com/pulse/edition-35-swmm5-infosewer-icm-swmm-infoworks-ruby-water-dickinson-qbvye",
    issueNumber: 34
  },
  {
    id: "33",
    title: "Misc Ruby Tools for ICM InfoWorks SWMM Modeling",
    description: "A collection of miscellaneous yet useful Ruby tools for enhancing your modeling workflow.",
    date: "1 year ago",
    readTime: "5 min read",
    imageUrl: rubyCover,
    link: "https://www.linkedin.com/pulse/edition-34-misc-ruby-tools-icm-infoworks-swmm-robert-dickinson-g7z5e",
    issueNumber: 33
  },
  {
    id: "32",
    title: "Using Ruby to make ICM SWMM more like InfoSWMM Output Report Tables",
    description: "Customizing ICM SWMM output reports to match the familiar format of InfoSWMM using Ruby.",
    date: "1 year ago",
    readTime: "7 min read",
    imageUrl: rubyCover,
    link: "https://www.linkedin.com/pulse/edition-33-using-ruby-make-icm-swmm-more-like-output-report-robert-8cuse",
    issueNumber: 32
  },
  {
    id: "31",
    title: "How the EPASWMM5 Related Software Newsletter is Organized using the Number 1729",
    description: "An intriguing look into the organizational structure of the newsletter and the significance of the number 1729.",
    date: "1 year ago",
    readTime: "4 min read",
    imageUrl: quizCover,
    link: "https://www.linkedin.com/pulse/how-epaswmm5-related-software-newsletter-organized-using-dickinson-6ybme",
    issueNumber: 31
  },
  {
    id: "30",
    title: "InfoSewer to ICM InfoWorks using ODIC and Ruby with SQL, Extended FY2025 Version",
    description: "A guide on migrating from InfoSewer to ICM InfoWorks using advanced data import and scripting techniques.",
    date: "1 year ago",
    readTime: "10 min read",
    imageUrl: sqlCover,
    link: "https://www.linkedin.com/pulse/edition-31-infosewer-icm-infoworks-using-odic-ruby-sql-dickinson-3e80e",
    issueNumber: 30
  },
  {
    id: "29",
    title: "Ruby Code for Altering 2D Polygons, Making 2D Results Points Inside the Polygon for both ICM InfoWorks and SWMM Networks",
    description: "Advanced Ruby scripting for spatial manipulation of 2D polygons and results points in network models.",
    date: "1 year ago",
    readTime: "8 min read",
    imageUrl: rubyCover,
    link: "https://www.linkedin.com/pulse/edition-30-ruby-code-altering-2d-polygons-making-points-dickinson-xklwe",
    issueNumber: 29
  },
  {
    id: "28",
    title: "From 1988 to 2024: SWMM's Incredible 54,000-fold Engine or PC Speed Improvement",
    description: "Tracking the exponential performance improvements in SWMM engines over nearly four decades.",
    date: "1 year ago",
    readTime: "6 min read",
    imageUrl: historyCover,
    link: "https://www.linkedin.com/pulse/edition-29-from-1988-2024-swmms-incredible-54000-fold-dickinson-9chye",
    issueNumber: 28
  },
  {
    id: "27",
    title: "How many runoff surfaces do I actually use in my ICM InfoWorks network? Ruby can answer this question.",
    description: "Using Ruby to audit and analyze runoff surface usage in your hydraulic networks.",
    date: "1 year ago",
    readTime: "5 min read",
    imageUrl: rubyCover,
    link: "https://www.linkedin.com/pulse/edition-28-how-many-runoff-surfaces-do-i-actually-use-dickinson-h3jie",
    issueNumber: 27
  },
  {
    id: "26",
    title: "SQL for ALL ICM SWMM Results for Nodes, Links and Subcatchments and LIDS Input and Results Parameters",
    description: "Comprehensive SQL queries for extracting all types of results and parameters from ICM SWMM.",
    date: "1 year ago",
    readTime: "9 min read",
    imageUrl: sqlCover,
    link: "https://www.linkedin.com/pulse/edition-27-sql-all-icm-swmm-results-nodes-links-lids-input-dickinson-si1ye",
    issueNumber: 26
  },
  {
    id: "25",
    title: "SQL for ALL ICM InfoWorks Results for Nodes, Links, Subcatchments, and SUDS Input and Results Parameters",
    description: "Comprehensive SQL queries for extracting all types of results and parameters from ICM InfoWorks.",
    date: "2 years ago",
    readTime: "9 min read",
    imageUrl: sqlCover,
    link: "https://www.linkedin.com/pulse/edition-26-sql-all-icm-infoworks-results-nodes-links-suds-dickinson-d7oae",
    issueNumber: 25
  },
  {
    id: "24",
    title: "ICM SQL Functions and Network Parameter Extraction for SWMM and InfoWorks",
    description: "Deep dive into SQL functions available in ICM InfoWorks for efficient network analysis.",
    date: "2 years ago",
    readTime: "8 min read",
    imageUrl: sqlCover,
    link: "https://www.linkedin.com/pulse/edition-25-icm-sql-functions-swmm-infoworks-robert-dickinson-q7qxe",
    issueNumber: 24
  },
  {
    id: "23",
    title: "I Imported InfoSWMM to ICM SWMM: Where Are All the DWF Dry Flow Rates?",
    description: "Troubleshooting data migration and understanding parameter mapping in model conversions.",
    date: "2 years ago",
    readTime: "7 min read",
    imageUrl: rubyCover,
    link: "https://www.linkedin.com/pulse/i-imported-infoswmm-icm-swmm-where-all-dwf-dry-flow-dickinson-r16qe",
    issueNumber: 23
  },
  {
    id: "22",
    title: "SWMM5 Components in ICM InfoWorks Networks",
    description: "Understanding how SWMM5 components integrate within ICM InfoWorks architecture.",
    date: "2 years ago",
    readTime: "8 min read",
    imageUrl: icmCover,
    link: "https://www.linkedin.com/pulse/swmm5-components-icm-infoworks-networks-robert-dickinson-aadee",
    issueNumber: 22
  },
  {
    id: "21",
    title: "100 SWMM5 Quiz Questions",
    description: "A comprehensive quiz covering SWMM5 fundamentals, test your expertise.",
    date: "2 years ago",
    readTime: "15 min read",
    imageUrl: quizCover,
    link: "https://www.linkedin.com/pulse/100-swmm5-quiz-questions-robert-dickinson-jonke",
    issueNumber: 21
  },
  {
    id: "20",
    title: "Seven InfoSWMM Blogs for Readers in the Years 2024-2030+",
    description: "A curated collection of InfoSWMM resources and best practices for modern modeling.",
    date: "2 years ago",
    readTime: "7 min read",
    imageUrl: icmCover,
    link: "https://www.linkedin.com/pulse/seven-infoswmm-blogs-readers-years-2024-2030-robert-dickinson-aflue",
    issueNumber: 20
  },
  {
    id: "19",
    title: "Summary of Last 19 Newsletter Edition Topics",
    description: "Comprehensive overview and summary of the previous nineteen editions.",
    date: "2 years ago",
    readTime: "6 min read",
    imageUrl: quizCover,
    link: "https://www.linkedin.com/pulse/summary-last-19-newsletter-edition-topics-robert-dickinson-wzn4e",
    issueNumber: 19
  },
  {
    id: "18",
    title: "ICM Ruby: Read InfoSewer and InfoSWMM Scenario Facilities and Loads",
    description: "Using Ruby scripting to extract facility and load data from InfoSewer and InfoSWMM scenarios.",
    date: "2 years ago",
    readTime: "8 min read",
    imageUrl: rubyCover,
    link: "https://www.linkedin.com/pulse/icm-ruby-read-infosewer-infoswmm-scenario-facilities-loads-dickinson-qnnme",
    issueNumber: 18
  },
  {
    id: "17",
    title: "From Legacy to Future: Recalling Engine InfoSewer ICM 2030",
    description: "Reflecting on the evolution from InfoSewer to modern ICM systems.",
    date: "2 years ago",
    readTime: "7 min read",
    imageUrl: historyCover,
    link: "https://www.linkedin.com/pulse/from-legacy-future-recalling-engine-infosewer-icm-2030-dickinson-m269e",
    issueNumber: 17
  },
  {
    id: "16",
    title: "InfoSWMM Graphical Tools: Understanding SWMM5 and ICM SWMM",
    description: "Visual tools and techniques for better understanding stormwater models.",
    date: "2 years ago",
    readTime: "8 min read",
    imageUrl: icmCover,
    link: "https://www.linkedin.com/pulse/infoswmm-graphical-tools-understanding-swmm5-icm-swmm-dickinson-gul2c",
    issueNumber: 16
  },
  {
    id: "15",
    title: "Embedded Posts from Autodesk Water Infrastructure Zone",
    description: "Collection of insights from the Autodesk Water Infrastructure community.",
    date: "2 years ago",
    readTime: "5 min read",
    imageUrl: icmCover,
    link: "https://www.linkedin.com/pulse/embedded-posts-from-autodesk-water-infrastructures-one-dickinson-borge",
    issueNumber: 15
  },
  {
    id: "14",
    title: "Ruby: See Statistics of All Items in Both ICM InfoWorks and SWMM",
    description: "Ruby scripting for comprehensive statistical analysis across different modeling platforms.",
    date: "2 years ago",
    readTime: "7 min read",
    imageUrl: rubyCover,
    link: "https://www.linkedin.com/pulse/ruby-see-statistics-all-items-both-icm-infoworks-swmm-dickinson-ghvse",
    issueNumber: 14
  },
  {
    id: "13",
    title: "Story: C Code Link Hydraulics SWMM5 DWFLOWC",
    description: "Deep technical dive into the C code underlying SWMM5 hydraulic calculations.",
    date: "2 years ago",
    readTime: "10 min read",
    imageUrl: icmCover,
    link: "https://www.linkedin.com/pulse/story-c-code-link-hydraulics-swmm5-dwflowc-robert-dickinson-mvv3e",
    issueNumber: 13
  },
  {
    id: "12",
    title: "Story: C Code Node Hydraulics SWMM5 DYNWAVEC",
    description: "Examining the C code for dynamic wave node hydraulics in SWMM5.",
    date: "2 years ago",
    readTime: "9 min read",
    imageUrl: icmCover,
    link: "https://www.linkedin.com/pulse/story-c-code-node-hydraulics-swmm5-dynwavec-robert-dickinson-cgnte",
    issueNumber: 12
  },
  {
    id: "11",
    title: "Story: C Code Hydrology SWMM5",
    description: "Understanding the hydrological calculations at the core of SWMM5.",
    date: "2 years ago",
    readTime: "8 min read",
    imageUrl: icmCover,
    link: "https://www.linkedin.com/pulse/story-c-code-hydrology-swmm5-robert-dickinson-2x0we",
    issueNumber: 11
  },
  {
    id: "10",
    title: "Blogs: Modeling Components General SDSU SWMM5",
    description: "Educational resources on SWMM5 modeling components from SDSU.",
    date: "2 years ago",
    readTime: "6 min read",
    imageUrl: quizCover,
    link: "https://www.linkedin.com/pulse/blogs-modeling-components-general-sdsu-swmm5-robert-dickinson-xvfhe",
    issueNumber: 10
  },
  {
    id: "9",
    title: "Interesting Modeling Blogs: InfoWorks ICM",
    description: "Curated collection of interesting blogs about water modeling and InfoWorks ICM.",
    date: "2 years ago",
    readTime: "7 min read",
    imageUrl: icmCover,
    link: "https://www.linkedin.com/pulse/interesting-modeling-blogs-interesante-infoworks-icm-robert-dickinson-3gr8e",
    issueNumber: 9
  },
  {
    id: "8",
    title: "Roaming Around Singapore: Commenting on Drainage Features",
    description: "Travel observations and commentary on stormwater drainage systems in Singapore.",
    date: "2 years ago",
    readTime: "5 min read",
    imageUrl: icmCover,
    link: "https://www.linkedin.com/pulse/roaming-around-singapore-commenting-drainage-features-dickinson-pchpe",
    issueNumber: 8
  },
  {
    id: "7",
    title: "Ruby and SQL: InfoWorks ICM SWMM Networks",
    description: "Combining Ruby and SQL for advanced InfoWorks ICM and SWMM network analysis.",
    date: "2 years ago",
    readTime: "8 min read",
    imageUrl: sqlCover,
    link: "https://www.linkedin.com/pulse/ruby-sql-infoworks-icm-swmm-networks-robert-dickinson-qvuwe",
    issueNumber: 7
  },
  {
    id: "6",
    title: "Deep Dive: Inner Workings of XPSWMM and SWMM5 Through the Lens of ICM",
    description: "Technical analysis of XPSWMM and SWMM5 architecture as implemented in ICM.",
    date: "2 years ago",
    readTime: "11 min read",
    imageUrl: icmCover,
    link: "https://www.linkedin.com/pulse/deep-dive-inner-workings-xpswmm-swmm5-icm-through-lens-dickinson-ugoxe",
    issueNumber: 6
  },
  {
    id: "5",
    title: "Deep Dive: Inside SWMM5 Using Tables",
    description: "Exploring SWMM5 internal structure and data tables.",
    date: "2 years ago",
    readTime: "9 min read",
    imageUrl: sqlCover,
    link: "https://www.linkedin.com/pulse/deep-dive-inside-swmm5-using-tables-robert-dickinson-ukjfe",
    issueNumber: 5
  },
  {
    id: "4",
    title: "Seven Blogs about SWMM and Myself at Autodesk",
    description: "Personal reflections on SWMM development and water management innovation.",
    date: "2 years ago",
    readTime: "6 min read",
    imageUrl: icmCover,
    link: "https://www.linkedin.com/pulse/seven-blogs-swmm-myself-autodesk-robert-dickinson-pyafe",
    issueNumber: 4
  },
  {
    id: "3",
    title: "Seven Blogs about ChatGPT and SWMM5",
    description: "Exploring the intersection of AI language models and stormwater modeling.",
    date: "2 years ago",
    readTime: "7 min read",
    imageUrl: aiCover,
    link: "https://www.linkedin.com/pulse/seven-blogs-chatgpt-swmm5-robert-dickinson-gqyxe",
    issueNumber: 3
  },
  {
    id: "2",
    title: "Seven Blogs about Importing InfoSewer or InfoSWMM to ICM",
    description: "Comprehensive guide to model migration and data integration strategies.",
    date: "2 years ago",
    readTime: "11 min read",
    imageUrl: icmCover,
    link: "https://www.linkedin.com/pulse/seven-blogs-importing-infosewer-infoswmm-icm-robert-dickinson-bi47e",
    issueNumber: 2
  },
  {
    id: "1",
    title: "SWMM5 Inside ICM InfoWorks",
    description: "How SWMM5 engine powers ICM InfoWorks and integration architecture.",
    date: "3 years ago",
    readTime: "8 min read",
    imageUrl: icmCover,
    link: "https://www.linkedin.com/pulse/swmm5-inside-icm-infoworks-robert-dickinson-b0tge",
    issueNumber: 1
  }
];

export const linkedInArticles: LinkedInArticle[] = [
  {
    id: "linkedin-17",
    title: "InfoSewer to ICM InfoWorks App (for AI and Humans)",
    description: "An app you can run on a desktop or cell phone to convert an InfoSewer model from the native DBF files of Innovyze InfoSewer.",
    date: "1 week ago",
    readTime: "2 min read",
    imageUrl: icmCover,
    link: "https://www.linkedin.com/pulse/infosewer-icm-infoworks-app-ai-humans-robert-dickinson-nhuye"
  },
  {
    id: "linkedin-18",
    title: "EPA SWMM5 Inp File Reader App for Stats and Images of the Network Elements",
    description: "A tool for water resources professionals to analyze SWMM input files and generate statistics and visualizations of network elements.",
    date: "2 weeks ago",
    readTime: "4 min read",
    imageUrl: sqlCover,
    link: "https://www.linkedin.com/pulse/epa-swmm5-inp-file-reader-app-stats-images-network-robert-dickinson-6o7ye"
  },
  {
    id: "linkedin-19",
    title: "Level Up Your ICM InfoWorks Skills: Try This Interactive Technical Quiz App on Replit",
    description: "An interactive quiz app for stormwater engineers to test their knowledge of ICM InfoWorks, covering unit conversions and advanced hydraulics.",
    date: "2 weeks ago",
    readTime: "2 min read",
    imageUrl: quizCover,
    link: "https://www.linkedin.com/pulse/level-up-icm-infoworks-skills-interactive-technical-quiz-robert-dickinson"
  },
  {
    id: "linkedin-20",
    title: "Level Up Your SWMM5 Skills: Try This Interactive Technical Quiz App on Replit",
    description: "Test your expertise with an interactive quiz covering SWMM5 fundamentals, unit conversions, and advanced hydraulic concepts.",
    date: "2 weeks ago",
    readTime: "2 min read",
    imageUrl: quizCover,
    link: "https://www.linkedin.com/pulse/level-up-swmm5-skills-interactive-technical-quiz-robert-dickinson"
  },
  {
    id: "linkedin-21",
    title: "Revolutionizing Hydraulic Network Data Export: A Universal Ruby Script Tool for InfoWorks ICM and SWMM Networks",
    description: "A comprehensive Ruby data exporter that adapts to your network type for SWMM and InfoWorks ICM data extraction.",
    date: "2 weeks ago",
    readTime: "3 min read",
    imageUrl: rubyCover,
    link: "https://www.linkedin.com/pulse/revolutionizing-hydraulic-network-data-export-universal-ruby-robert-dickinson"
  },
  {
    id: "linkedin-22",
    title: "Eight ICMs in One. ICM Ultimate, Sewer, Flood, and Viewer for InfoWorks and SWMM Networks",
    description: "An overview of the evolution of ICM Standard into ICM Flood and ICM Sewer, and the capabilities of ICM Ultimate.",
    date: "3 weeks ago",
    readTime: "1 min read",
    imageUrl: icmCover,
    link: "https://www.linkedin.com/pulse/eight-icms-one-icm-ultimate-sewer-flood-viewer-infoworks-robert-dickinson"
  },
  {
    id: "linkedin-23",
    title: "Bridging Decades: Reading InfoSewer Report RPT Output for ICM InfoWorks in 2030+",
    description: "Solutions for accessing and interpreting InfoSewer output from legacy projects dating back decades.",
    date: "3 weeks ago",
    readTime: "2 min read",
    imageUrl: historyCover,
    link: "https://www.linkedin.com/pulse/bridging-decades-reading-infosewer-report-rpt-output-icm-robert-dickinson"
  },
  {
    id: "linkedin-24",
    title: "Reviving 1988 SWMM4 Models with AI: A Seamless Transition to SWMM5",
    description: "A guide to converting vintage SWMM4 models from 1988 to modern SWMM5 using AI-assisted techniques.",
    date: "3 weeks ago",
    readTime: "7 min read",
    imageUrl: aiCover,
    link: "https://www.linkedin.com/pulse/reviving-1988-swmm4-models-ai-seamless-transition-swmm5-robert-dickinson"
  },
  {
    id: "linkedin-25",
    title: "Converting ICM InfoWorks PRN Files to CFS Units with AI in 2025",
    description: "Addressing unit conversion challenges in ICM InfoWorks with AI-powered solutions for PRN file analysis.",
    date: "1 month ago",
    readTime: "2 min read",
    imageUrl: aiCover,
    link: "https://www.linkedin.com/pulse/converting-icm-infoworks-prn-files-cfs-units-ai-2025-robert-dickinson"
  },
  {
    id: "linkedin-26",
    title: "Exporting Up to 99 HW Conduit Parameters to CSV with Ruby in InfoWorks ICM",
    description: "A Ruby script to export hw_conduits data to CSV format, simplifying data analysis for InfoWorks ICM projects.",
    date: "1 month ago",
    readTime: "3 min read",
    imageUrl: rubyCover,
    link: "https://www.linkedin.com/pulse/exporting-99-hw-conduit-parameters-csv-ruby-infoworks-icm-robert-dickinson"
  },
  {
    id: "linkedin-27",
    title: "Extran1 and Extran2 from the Extran Manual for AI, GitHub, SWMM5, used in ICM SWMM and InfoWorks",
    description: "A historical examination of Extran test files showing the continuity in stormwater modeling from 1980 to 2025.",
    date: "1 month ago",
    readTime: "8 min read",
    imageUrl: historyCover,
    link: "https://www.linkedin.com/pulse/extran1-extran2-extran-manual-ai-github-swmm5-robert-dickinson"
  },
  {
    id: "linkedin-28",
    title: "Example 7 of Extran Manual - Type 2 Pump for AI, GitHub, SWMM5, used in ICM SWMM and InfoWorks",
    description: "Analysis of SWMM3 Extran3 Type 2 Pump test file as a historical reference for modern hydraulic modeling.",
    date: "1 month ago",
    readTime: "8 min read",
    imageUrl: icmCover,
    link: "https://www.linkedin.com/pulse/example-7-extran-manual-type-2-pump-ai-github-swmm5-robert-dickinson"
  },
  {
    id: "linkedin-29",
    title: "Example 6 of Extran Manual - Type 1 Pump for AI, GitHub, SWMM5, used in ICM SWMM and InfoWorks",
    description: "Historical analysis of SWMM3 Extran3 Type 1 Pump test file and its relevance to modern SWMM5 modeling.",
    date: "1 month ago",
    readTime: "8 min read",
    imageUrl: icmCover,
    link: "https://www.linkedin.com/pulse/example-6-extran-manual-type-1-pump-ai-github-swmm5-robert-dickinson"
  },
  {
    id: "linkedin-30",
    title: "Extran 5 Storage Facility with Side Outlet Orifice for AI, GitHub, SWMM5, used in ICM SWMM and InfoWorks",
    description: "Exploring the SWMM3 Extran3 side outlet orifice test file as a historical reference for hydraulic modeling.",
    date: "1 month ago",
    readTime: "9 min read",
    imageUrl: icmCover,
    link: "https://www.linkedin.com/pulse/extran-5-storage-facility-side-outlet-orifice-ai-github-robert-dickinson"
  },
  {
    id: "linkedin-31",
    title: "SWMM 44H Fortran Code from 2004 on GitHub",
    description: "A GitHub repository preserving the SWMM 4 Fortran engine and associated files from Wayne C. Huber's version at Oregon State University.",
    date: "1 month ago",
    readTime: "2 min read",
    imageUrl: historyCover,
    link: "https://www.linkedin.com/pulse/swmm-44h-fortran-code-2004-github-robert-dickinson"
  },
  {
    id: "linkedin-32",
    title: "The Many Avenues of Ruby Help in the ICM Online Help File—Hint for AI Usage",
    description: "A guide to discovering Ruby help resources in the ICM online documentation for AI-assisted learning.",
    date: "1 month ago",
    readTime: "2 min read",
    imageUrl: rubyCover,
    link: "https://www.linkedin.com/pulse/many-avenues-ruby-help-icm-online-help-file-hint-ai-robert-dickinson"
  },
  {
    id: "linkedin-33",
    title: "Ruby Code for ICM InfoWorks and ICM SWMM Comparisons is now in 25 Folders on the Innovyze GitHub",
    description: "A reorganized suite of Ruby code on the Innovyze GitHub with improved folder structure and expanded examples.",
    date: "1 month ago",
    readTime: "1 min read",
    imageUrl: rubyCover,
    link: "https://www.linkedin.com/pulse/ruby-code-icm-infoworks-icm-swmm-comparisons-25-folders-robert-dickinson"
  },
  {
    id: "linkedin-34",
    title: "Running List of my LinkedIn Articles",
    description: "A comprehensive index of 153+ LinkedIn articles covering SWMM history and water modeling expertise.",
    date: "1 month ago",
    readTime: "47 min read",
    imageUrl: quizCover,
    link: "https://www.linkedin.com/posts/robertdickinson_wayne-huber-icwmm-2020-talk-about-the-history-activity-7150973026879119360-G"
  },
  {
    id: "linkedin-35",
    title: "SWMM3 Weir Extran4 Test File for AI, GitHub, SWMM5, ICM",
    description: "Historical significance and modern application of the SWMM3 weir test file in contemporary hydraulic modeling.",
    date: "2 months ago",
    readTime: "4 min read",
    imageUrl: historyCover,
    link: "https://www.linkedin.com/pulse/swmm3-weir-extran4-test-file-ai-github-swmm5-icm-robert-dickinson"
  },
  {
    id: "linkedin-36",
    title: "Creating Complete SWMM5 Input Files Using AI Chain Prompting from SWMM5 Rules",
    description: "A two-prompt strategy for generating complete SWMM5 input files using AI chain prompting techniques.",
    date: "2 months ago",
    readTime: "3 min read",
    imageUrl: aiCover,
    link: "https://www.linkedin.com/pulse/creating-complete-swmm5-input-files-using-ai-chain-prompting-robert-dickinson"
  },
  {
    id: "linkedin-37",
    title: "100 Other AI-Related Locations for Learning ICM besides the ICM Technical Hub",
    description: "A comprehensive guide to discovering 100+ alternative resources for learning InfoWorks ICM with AI assistance.",
    date: "2 months ago",
    readTime: "4 min read",
    imageUrl: aiCover,
    link: "https://www.linkedin.com/pulse/100-other-ai-related-locations-learning-icm-besides-technical-hub-robert-dickinson"
  },
  {
    id: "linkedin-38",
    title: "SWMM3 Orifice Extran3 Test File for AI, GitHub, SWMM5, ICM",
    description: "Analyzing the historical significance of the SWMM3 orifice test file for modern hydraulic modeling applications.",
    date: "2 months ago",
    readTime: "4 min read",
    imageUrl: historyCover,
    link: "https://www.linkedin.com/pulse/swmm3-orifice-extran3-test-file-ai-github-swmm5-icm-robert-dickinson"
  },
  {
    id: "linkedin-39",
    title: "InfoSewer Load Allocation Expertise: Test Yourself with 50 Questions for 2025 to 2050",
    description: "A comprehensive 50-question quiz based on Innovyze's DWF Allocator to test understanding of load allocation features.",
    date: "2 months ago",
    readTime: "11 min read",
    imageUrl: quizCover,
    link: "https://www.linkedin.com/pulse/infosewer-load-allocation-expertise-test-yourself-50-questions-robert-dickinson"
  },
  {
    id: "linkedin-40",
    title: "Diamond Village at the University of Florida and SWMM 2.5, 3, and 4 and XPSWMM",
    description: "A case study of Diamond Village housing community and the stormwater modeling evolution across SWMM versions.",
    date: "2 months ago",
    readTime: "4 min read",
    imageUrl: historyCover,
    link: "https://www.linkedin.com/pulse/diamond-village-university-florida-swmm-2-5-3-4-xpswmm-robert-dickinson"
  },
  {
    id: "linkedin-41",
    title: "Detecting and Preventing Invalid Hydraulic Solutions in SWMM 5",
    description: "Techniques for identifying and preventing invalid hydraulic solutions in SWMM5 simulations using best practices.",
    date: "2 months ago",
    readTime: "4 min read",
    imageUrl: icmCover,
    link: "https://www.linkedin.com/pulse/detecting-preventing-invalid-hydraulic-solutions-swmm-5-robert-dickinson"
  },
  {
    id: "linkedin-42",
    title: "Enhancing Subcatchment Connectivity in InfoWorks ICM: A Step-by-Step Guide Using Ruby Scripting",
    description: "A comprehensive Ruby scripting guide for improving subcatchment connectivity and network analysis in InfoWorks ICM.",
    date: "2 months ago",
    readTime: "6 min read",
    imageUrl: rubyCover,
    link: "https://www.linkedin.com/pulse/enhancing-subcatchment-connectivity-infoworks-icm-step-by-step-robert-dickinson"
  },
  {
    id: "linkedin-43",
    title: "Why You Should Not Import InfoSewer to InfoSWMM but Use the Newer AWI Ruby/ODIC Methodology with SQL",
    description: "Best practices and newer methodologies for migrating InfoSewer models using AWI Ruby and SQL instead of direct import.",
    date: "2 months ago",
    readTime: "3 min read",
    imageUrl: sqlCover,
    link: "https://www.linkedin.com/pulse/why-you-should-not-import-infosewer-infoswmm-newer-awi-methodology-robert-dickinson"
  },
  {
    id: "linkedin-44",
    title: "Introducing SWMM5+ - Journal of Environmental Engineering, 2024",
    description: "An overview of the SWMM5+ project focusing on improving the computational efficiency of the EPA SWMM hydraulic solver.",
    date: "2 months ago",
    readTime: "1 min read",
    imageUrl: aiCover,
    link: "https://www.linkedin.com/pulse/introducing-swmm5-journal-environmental-engineering-2024-robert-dickinson"
  },
  {
    id: "linkedin-45",
    title: "The Steady State, EPS, and Kinematic, Dynamic Wave Options in InfoSewer, SWMM5, InfoSWMM, ICM SWMM, and ICM INFOWORKS",
    description: "Understanding different hydraulic simulation methods and their applications across various water modeling platforms.",
    date: "2 months ago",
    readTime: "5 min read",
    imageUrl: icmCover,
    link: "https://www.linkedin.com/pulse/steady-state-eps-kinematic-dynamic-wave-options-infosewer-robert-dickinson"
  },
  {
    id: "linkedin-46",
    title: "Ruby ICM InfoWorks vs. ICM SWMM Link Property Data Comparison",
    description: "A Ruby script designed to compare link property data between ICM InfoWorks and ICM SWMM networks.",
    date: "2 months ago",
    readTime: "4 min read",
    imageUrl: rubyCover,
    link: "https://www.linkedin.com/pulse/ruby-icm-infoworks-vs-icm-swmm-link-property-data-comparison-robert-dickinson"
  },
  {
    id: "linkedin-47",
    title: "Ruby ICM InfoWorks vs. ICM SWMM Node Property Data Comparison",
    description: "A Ruby script for bridging the gap between ICM InfoWorks and ICM SWMM through node property analysis.",
    date: "3 months ago",
    readTime: "4 min read",
    imageUrl: rubyCover,
    link: "https://www.linkedin.com/pulse/ruby-icm-infoworks-vs-icm-swmm-node-property-data-comparison-robert-dickinson"
  },
  {
    id: "linkedin-48",
    title: "Navigating the Landscape of Hydraulic Modeling: A Comparative Study of InfoSewer, ICM InfoWorks, and ICM SWMM",
    description: "Exploring interoperability and comparative performance of InfoSewer, ICM InfoWorks, and ICM SWMM for steady state models.",
    date: "3 months ago",
    readTime: "2 min read",
    imageUrl: icmCover,
    link: "https://www.linkedin.com/pulse/navigating-landscape-hydraulic-modeling-comparative-study-robert-dickinson"
  },
  {
    id: "linkedin-49",
    title: "Deep Dive into Water Quality Buildup Washoff (BW) in ICM InfoWorks using the SWMM5 BW Options",
    description: "Investigation of water quality modeling in ICM InfoWorks with all SWMM5 buildup washoff choices for runoff simulations.",
    date: "3 months ago",
    readTime: "5 min read",
    imageUrl: icmCover,
    link: "https://www.linkedin.com/pulse/deep-dive-water-quality-buildup-washoff-bw-icm-infoworks-robert-dickinson"
  },
  {
    id: "linkedin-50",
    title: "How to Use the Graph/Report Output of InfoSewer/InfoSWMM to Make Observed Predicted Custom Graphs in ICM InfoWorks",
    description: "A step-by-step guide to creating custom observed-predicted graphs in ICM InfoWorks using legacy software outputs.",
    date: "3 months ago",
    readTime: "3 min read",
    imageUrl: icmCover,
    link: "https://www.linkedin.com/pulse/how-to-use-graph-report-output-infosewer-infoswmm-custom-graphs-robert-dickinson"
  },
  {
    id: "linkedin-51",
    title: "Using Ruby for some InfoSWMM Subcatchment Manager Tools In ICM Infoworks",
    description: "Leveraging Ruby scripting to implement InfoSWMM subcatchment management tools within ICM InfoWorks environments.",
    date: "3 months ago",
    readTime: "3 min read",
    imageUrl: rubyCover,
    link: "https://www.linkedin.com/pulse/using-ruby-infoswmm-subcatchment-manager-tools-icm-infoworks-robert-dickinson"
  },
  {
    id: "linkedin-52",
    title: "Using AI to Interpret the PRN file of ICM Infoworks for a person with a SWMM5 Background",
    description: "A guide to understanding ICM InfoWorks PRN output files using AI assistance for SWMM5-experienced professionals.",
    date: "3 months ago",
    readTime: "6 min read",
    imageUrl: aiCover,
    link: "https://www.linkedin.com/pulse/using-ai-interpret-prn-file-icm-infoworks-person-swmm5-background-robert-dickinson"
  },
  {
    id: "linkedin-53",
    title: "Streamlining ICM Workflow: Preserving User-Fields with Ruby Automation to CSV Files",
    description: "A Ruby automation script to preserve ICM user fields to CSV format for enhanced workflow management.",
    date: "3 months ago",
    readTime: "2 min read",
    imageUrl: rubyCover,
    link: "https://www.linkedin.com/pulse/streamlining-icm-workflow-preserving-user-fields-ruby-automation-robert-dickinson"
  },
  {
    id: "linkedin-54",
    title: "Using Ruby to supplement Native ICM QM Tau or Shear Stress",
    description: "A Ruby script to process ICM InfoWorks simulation results and supplement shear stress calculations using custom equations.",
    date: "3 months ago",
    readTime: "4 min read",
    imageUrl: rubyCover,
    link: "https://www.linkedin.com/pulse/using-ruby-supplement-native-icm-qm-tau-shear-stress-robert-dickinson"
  },
  {
    id: "linkedin-55",
    title: "Using Ruby to Read the Steady State Report file of InfoSewer post 2025+",
    description: "A Ruby script to parse and analyze InfoSewer steady state report files for modern workflow integration.",
    date: "3 months ago",
    readTime: "4 min read",
    imageUrl: rubyCover,
    link: "https://www.linkedin.com/pulse/using-ruby-read-steady-state-report-file-infosewer-post-2025-robert-dickinson"
  },
  {
    id: "linkedin-56",
    title: "Using Ruby to Recreate the InfoSWMM Node Report Tables in ICM SWMM from any SWMM5 Report File",
    description: "A Ruby script to recreate InfoSWMM-style node report tables from SWMM5 output in ICM SWMM environments.",
    date: "3 months ago",
    readTime: "4 min read",
    imageUrl: rubyCover,
    link: "https://www.linkedin.com/pulse/using-ruby-recreate-infoswmm-node-report-tables-icm-swmm-robert-dickinson"
  },
  {
    id: "linkedin-57",
    title: "How to Use Ruby to Read Problem Node and Links from the SWMM5 Report File and Add them as Selected Elements in ICM SWMM",
    description: "A tutorial on using Ruby to identify problematic network elements and integrate them into ICM SWMM analysis tools.",
    date: "3 months ago",
    readTime: "3 min read",
    imageUrl: rubyCover,
    link: "https://www.linkedin.com/pulse/how-to-use-ruby-read-problem-node-links-swmm5-report-file-robert-dickinson"
  },
  {
    id: "linkedin-58",
    title: "ICM SWMM and InfoDrainage share the same swmmsim.exe Engine SWMM 5.2.4, InfoSWMM uses an older version",
    description: "A detailed explanation of the different SWMM engines used across Innovyze and Autodesk water modeling products.",
    date: "3 months ago",
    readTime: "10 min read",
    imageUrl: icmCover,
    link: "https://www.linkedin.com/pulse/icm-swmm-infodrainage-share-same-swmmsim-exe-engine-swmm-robert-dickinson"
  },
  {
    id: "linkedin-59",
    title: "Using Ruby to Export ICM InfoWorks Node, Link, and Subcatchment Grid Data to Shapefiles",
    description: "A Ruby script to export GIS data from ICM InfoWorks networks to shapefile format for external analysis.",
    date: "4 months ago",
    readTime: "2 min read",
    imageUrl: rubyCover,
    link: "https://www.linkedin.com/pulse/using-ruby-export-icm-infoworks-node-link-subcatchment-grid-robert-dickinson"
  },
  {
    id: "linkedin-60",
    title: "Using Ruby to Export ICM InfoWorks User-Selected Link Results to a Custom CSV Folder",
    description: "A script to streamline the export of user-selected link results from ICM InfoWorks to custom CSV files.",
    date: "4 months ago",
    readTime: "2 min read",
    imageUrl: rubyCover,
    link: "https://www.linkedin.com/pulse/using-ruby-export-icm-infoworks-user-selected-link-results-csv-robert-dickinson"
  },
  {
    id: "linkedin-61",
    title: "23 Ruby Lessons in the ICM InfoWorks Online Help File from Autodesk",
    description: "A guide to the 23 Ruby scripting lessons available in the InfoWorks ICM online help documentation.",
    date: "4 months ago",
    readTime: "2 min read",
    imageUrl: rubyCover,
    link: "https://www.linkedin.com/pulse/23-ruby-lessons-icm-infoworks-online-help-file-autodesk-robert-dickinson"
  },
  {
    id: "linkedin-62",
    title: "How to use SWMM5 Buildup/Washoff in an ICM InfoWorks Network for Event Mean Concentrations (EMC)",
    description: "A ten-step guide to implementing SWMM5 buildup and washoff processes for water quality analysis in ICM InfoWorks.",
    date: "4 months ago",
    readTime: "1 min read",
    imageUrl: icmCover,
    link: "https://www.linkedin.com/pulse/how-to-use-swmm5-buildup-washoff-icm-infoworks-network-emc-robert-dickinson"
  },
  {
    id: "linkedin-63",
    title: "Knowledge Assisted Theme Enhancements in ICM SWMM to Show InfoSWMM Like Map Displays for d/D and q/Q",
    description: "Creating SQL-based theme enhancements in ICM SWMM to display hydraulic conditions similar to InfoSWMM interfaces.",
    date: "4 months ago",
    readTime: "2 min read",
    imageUrl: icmCover,
    link: "https://www.linkedin.com/pulse/knowledge-assisted-theme-enhancements-icm-swmm-show-infoswmm-robert-dickinson"
  },
  {
    id: "linkedin-64",
    title: "Using Ruby to Recreate the InfoSWMM Link Report Tables in ICM SWMM from any SWMM5 Report File",
    description: "A Ruby script to recreate InfoSWMM-style link report tables from SWMM5 output files in ICM SWMM.",
    date: "4 months ago",
    readTime: "8 min read",
    imageUrl: rubyCover,
    link: "https://www.linkedin.com/pulse/using-ruby-recreate-infoswmm-link-report-tables-icm-swmm-robert-dickinson"
  },
  {
    id: "linkedin-65",
    title: "Unhappy with some components of the LI Social Selling Index, I make up my own SSI+ Index",
    description: "A critique of LinkedIn's Social Selling Index with proposed improvements based on professional networking observations.",
    date: "4 months ago",
    readTime: "2 min read",
    imageUrl: quizCover,
    link: "https://www.linkedin.com/pulse/unhappy-some-components-li-social-selling-index-i-make-up-own-robert-dickinson"
  },
  {
    id: "linkedin-66",
    title: "Using Ruby to Create Sensitivity Scenarios in ICM InfoWorks",
    description: "A Ruby script for automating the creation of multiple sensitivity analysis scenarios in ICM InfoWorks networks.",
    date: "4 months ago",
    readTime: "4 min read",
    imageUrl: rubyCover,
    link: "https://www.linkedin.com/pulse/using-ruby-create-sensitivity-scenarios-icm-infoworks-robert-dickinson"
  },
  {
    id: "linkedin-67",
    title: "A Better Workflow for InfoSWMM to ICM SWMM Network Conversions for ALL InfoSWMM Scenarios",
    description: "A streamlined process for importing InfoSWMM models with all scenarios and active elements into ICM SWMM networks.",
    date: "5 months ago",
    readTime: "8 min read",
    imageUrl: icmCover,
    link: "https://www.linkedin.com/pulse/better-workflow-infoswmm-icm-swmm-network-conversions-all-scenarios-robert-dickinson"
  },
  {
    id: "linkedin-68",
    title: "How to Use the USEPA SWMM-Climate Adjustment Tool with ICM InfoWorks, ICM SWMM, and Autodesk InfoDrainage",
    description: "A guide to implementing EPA's climate adjustment tool for SWMM5 across various Autodesk water modeling platforms.",
    date: "5 months ago",
    readTime: "3 min read",
    imageUrl: aiCover,
    link: "https://www.linkedin.com/pulse/how-to-use-usepa-swmm-climate-adjustment-tool-icm-infoworks-robert-dickinson"
  },
  {
    id: "linkedin-69",
    title: "Curve Number or CNSWMM infiltration model for 2D simulations is now in ICM 2025.1",
    description: "An overview of the new curve number infiltration feature available in ICM 2025.1 for 2D mesh simulations.",
    date: "5 months ago",
    readTime: "2 min read",
    imageUrl: icmCover,
    link: "https://www.linkedin.com/pulse/curve-number-cnswmm-infiltration-model-2d-simulations-now-icm-robert-dickinson"
  },
  {
    id: "linkedin-70",
    title: "Using Ruby to QA/QC InfoSWMM DWF Import to ICM SWMM",
    description: "A Ruby script tutorial for verifying that dry weather flow imports from InfoSWMM to ICM SWMM are accurate.",
    date: "5 months ago",
    readTime: "5 min read",
    imageUrl: rubyCover,
    link: "https://www.linkedin.com/pulse/using-ruby-qa-qc-infoswmm-dwf-import-icm-swmm-robert-dickinson"
  },
  {
    id: "linkedin-71",
    title: "Diagram GPT's for Seeing Connections in a SWMM5 Input File",
    description: "Using GPT visualization tools to understand complex relationships between data sections in SWMM5 input files.",
    date: "5 months ago",
    readTime: "3 min read",
    imageUrl: aiCover,
    link: "https://www.linkedin.com/pulse/diagram-gpts-seeing-connections-swmm5-input-file-robert-dickinson"
  },
  {
    id: "linkedin-72",
    title: "How to use Ruby for Subcatchments Statistics using the Current and Background Networks in ICM",
    description: "A comprehensive guide to analyzing subcatchment statistics and comparing networks using Ruby in ICM.",
    date: "5 months ago",
    readTime: "9 min read",
    imageUrl: rubyCover,
    link: "https://www.linkedin.com/pulse/how-to-use-ruby-subcatchments-statistics-current-background-networks-robert-dickinson"
  }
];
