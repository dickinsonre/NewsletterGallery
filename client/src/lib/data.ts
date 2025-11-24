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
    id: "linkedin-1",
    title: "Wayne Huber ICWMM 2020 Talk - SWMM History",
    description: "An in-depth discussion on the historical development and evolution of the Storm Water Management Model from its inception to modern times.",
    date: "1 month ago",
    readTime: "8 min read",
    imageUrl: historyCover,
    link: "https://www.linkedin.com/posts/robertdickinson_wayne-huber-icwmm-2020-talk-about-the-history-activity-7150973026879119360-G-zN?utm_source=share&utm_medium=member_desktop"
  },
  {
    id: "linkedin-2",
    title: "Using Punch Cards to Run SWMM 2 and SWMM3",
    description: "A nostalgic look at early stormwater modeling techniques using punch cards and the computational methods of the SWMM2 and SWMM3 era.",
    date: "1 month ago",
    readTime: "5 min read",
    imageUrl: historyCover,
    link: "https://www.linkedin.com/posts/robertdickinson_using-punch-cards-to-run-swmm-2-and-swmm3-activity-7292368911352664066-z6dF?utm_source=share&utm_medium=member_desktop"
  },
  {
    id: "linkedin-3",
    title: "SWMM4 Manual Part 1: Runoff and Transport",
    description: "The first part of the SWMM4 user manual focusing on runoff generation and transport processes in urban stormwater systems.",
    date: "2 months ago",
    readTime: "9 min read",
    imageUrl: icmCover,
    link: "https://www.linkedin.com/posts/robertdickinson_swmm4manual1265-runoff-and-transport-activity-7290925832858910720-JH9Q?utm_source=share&utm_medium=member_desktop"
  },
  {
    id: "linkedin-4",
    title: "SWMM4 Manual Part 2: Storage and Treatment",
    description: "The second part of the SWMM4 user manual detailing storage facility design and treatment processes.",
    date: "2 months ago",
    readTime: "8 min read",
    imageUrl: icmCover,
    link: "https://www.linkedin.com/posts/robertdickinson_swmm-4-manual-part-2-storage-treatment-activity-7290929335908057088-xbHO?utm_source=share&utm_medium=member_desktop"
  },
  {
    id: "linkedin-5",
    title: "SWMM4 Files Used in the SWMM QA Report",
    description: "Documentation of the SWMM4 test files used for quality assurance and validation testing procedures.",
    date: "2 months ago",
    readTime: "6 min read",
    imageUrl: quizCover,
    link: "https://www.linkedin.com/posts/robertdickinson_swmm4-files-used-in-the-swmm-qa-report-for-activity-7283944235534352384-qXR-?utm_source=share&utm_medium=member_desktop"
  },
  {
    id: "linkedin-6",
    title: "SWMM Users Manual Version 4 - Extran Addendum",
    description: "The comprehensive Extran addendum to the SWMM4 users manual covering extended transport and quality module features.",
    date: "2 months ago",
    readTime: "7 min read",
    imageUrl: icmCover,
    link: "https://www.linkedin.com/posts/robertdickinson_swmm-users-manual-version-4-extran-addendum-activity-7284368762005250048-0GDW?utm_source=share&utm_medium=member_desktop"
  },
  {
    id: "linkedin-7",
    title: "SWMM3 PDF from 1981 - Part 1",
    description: "The first part of the original SWMM3 documentation from 1981, a historical artifact showing the evolution of stormwater modeling.",
    date: "2 months ago",
    readTime: "6 min read",
    imageUrl: historyCover,
    link: "https://www.linkedin.com/posts/robertdickinson_swmm3-pdf-from-1981-in-two-parts-for-ai-activity-7283969724349050881-Az4C?utm_source=share&utm_medium=member_desktop"
  },
  {
    id: "linkedin-8",
    title: "SWMM3 PDF from 1981 - Part 2",
    description: "The second part of the original SWMM3 documentation from 1981, continuing the historical documentation of this milestone model.",
    date: "2 months ago",
    readTime: "6 min read",
    imageUrl: historyCover,
    link: "https://www.linkedin.com/posts/robertdickinson_swmm3-pdf-part-2-for-ai-activity-7283971378138021888-eUc2?utm_source=share&utm_medium=member_desktop"
  },
  {
    id: "linkedin-9",
    title: "SWMM Version 2 - Runoff Only User Manual",
    description: "The user manual for SWMM Version 2, focusing exclusively on runoff generation and hydrologic processes.",
    date: "2 months ago",
    readTime: "5 min read",
    imageUrl: icmCover,
    link: "https://www.linkedin.com/posts/robertdickinson_swmm-version-2-runoff-only-user-manual-activity-7289457419078762496-MTRh?utm_source=share&utm_medium=member_desktop"
  },
  {
    id: "linkedin-10",
    title: "SWMM Volume I - Final Report (July 1971)",
    description: "The original SWMM Volume I final report from July 1971, marking the beginning of the Storm Water Management Model.",
    date: "2 months ago",
    readTime: "10 min read",
    imageUrl: historyCover,
    link: "https://www.linkedin.com/posts/robertdickinson_swmm-volume-i-final-report-july-1971-activity-7289469326389043200-aM9c?utm_source=share&utm_medium=member_desktop"
  },
  {
    id: "linkedin-11",
    title: "SWMM Volume II - Verification and Testing",
    description: "SWMM Volume II documentation covering comprehensive verification and testing procedures for the original model.",
    date: "2 months ago",
    readTime: "8 min read",
    imageUrl: quizCover,
    link: "https://www.linkedin.com/posts/robertdickinson_swmm-volume-ii-verification-and-testing-activity-7289460627213828097-EdJo?utm_source=share&utm_medium=member_desktop"
  },
  {
    id: "linkedin-12",
    title: "SWMM Volume III - Users Manual (September)",
    description: "SWMM Volume III, the comprehensive users manual for operating and implementing the original SWMM model.",
    date: "2 months ago",
    readTime: "9 min read",
    imageUrl: icmCover,
    link: "https://www.linkedin.com/posts/robertdickinson_swmm-volume-iii-users-manual-september-activity-7289472094550016000--v4T?utm_source=share&utm_medium=member_desktop"
  },
  {
    id: "linkedin-13",
    title: "InfoSewer Lectures - Innovyze & Autodesk",
    description: "A comprehensive series of lectures on InfoSewer sewer collection system modeling from Innovyze and Autodesk Water.",
    date: "3 months ago",
    readTime: "7 min read",
    imageUrl: icmCover,
    link: "https://www.linkedin.com/posts/robertdickinson_infosewer-lectures-innovyze-autodesk-activity-7270858395350450176-wyXG?utm_source=share&utm_medium=member_desktop"
  },
  {
    id: "linkedin-14",
    title: "Comprehensive Sewer Collection System Analysis",
    description: "In-depth analysis and best practices for comprehensive sewer collection system modeling and management.",
    date: "3 months ago",
    readTime: "6 min read",
    imageUrl: sqlCover,
    link: "https://www.linkedin.com/posts/robertdickinson_comprehensive-sewer-collection-system-analysis-activity-6881694143643439104-KR38?utm_source=share&utm_medium=member_desktop"
  },
  {
    id: "linkedin-15",
    title: "Impacts of Rainfall Spatiotemporal Variability on Pressurized Flow Conditions",
    description: "Research on how spatial and temporal variations in rainfall affect pressurized flow conditions in urban drainage systems.",
    date: "3 months ago",
    readTime: "8 min read",
    imageUrl: aiCover,
    link: "https://www.linkedin.com/posts/robertdickinson_impacts-of-rainfall-spatiotemporal-variability-on-pressurized-flow-conditions-in-urban-drainage-systemspdf-activity-7289373107385978880-MuxB?utm_source=share&utm_medium=member_desktop"
  },
  {
    id: "linkedin-16",
    title: "SWMM History and Evolution Overview",
    description: "A comprehensive overview of SWMM's 50+ year history from SWMM1 (1971) through SWMM5+ and modern implementations.",
    date: "3 months ago",
    readTime: "12 min read",
    imageUrl: historyCover,
    link: "https://www.linkedin.com/posts/robertdickinson_wayne-huber-icwmm-2020-talk-about-the-history-activity-7150973026879119360-G-zN?utm_source=share&utm_medium=member_desktop"
  }
];
