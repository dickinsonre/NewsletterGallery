import cover1 from "@assets/generated_images/minimalist_abstract_book_cover_art_1.png";
import cover2 from "@assets/generated_images/minimalist_abstract_book_cover_art_2.png";
import cover3 from "@assets/generated_images/minimalist_abstract_book_cover_art_3.png";
import hydraulic from "@assets/generated_images/geometric_water_flow_diagram_aesthetic.png";
import codeViz from "@assets/generated_images/code_and_data_visualization_abstract.png";
import blueprint from "@assets/generated_images/historical_engineering_blueprint_style.png";
import aiNetwork from "@assets/generated_images/ai_and_network_node_connection.png";
import urbanWater from "@assets/generated_images/urban_water_management_abstract.png";
import simulation from "@assets/generated_images/hydraulic_simulation_abstract.png";

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

// Helper to randomize images for variety since we generated 6 new thematic ones
const getCover = (index: number) => {
  const covers = [hydraulic, codeViz, blueprint, aiNetwork, urbanWater, simulation, cover1, cover2, cover3];
  return covers[index % covers.length];
};

export const newsletters: Newsletter[] = [
  {
    id: "45",
    title: "ICM InfoWorks Simulation Parameters 100-Question Quiz",
    description: "Test your knowledge on simulation parameters within ICM InfoWorks. A comprehensive quiz for modelers.",
    date: "2 weeks ago",
    readTime: "10 min read",
    imageUrl: getCover(0),
    link: "https://www.linkedin.com/newsletters/7159940733972434944/",
    issueNumber: 45
  },
  {
    id: "44",
    title: "AI Ruby Time Travel Prompts for SWMM4, ICM InfoWorks, InfoSewer, InfoSWMM and SWMM5",
    description: "Exploring the intersection of AI prompts and legacy water modeling software versions.",
    date: "6 months ago",
    readTime: "8 min read",
    imageUrl: getCover(1),
    link: "https://www.linkedin.com/newsletters/7159940733972434944/",
    issueNumber: 44
  },
  {
    id: "43",
    title: "Streamlining InfoWorks ICM SWMM: Simple Statistics of Thousands of Network Parameters with Ruby Prompts",
    description: "Using Ruby scripting to extract and analyze statistical data from vast network parameters in ICM SWMM.",
    date: "6 months ago",
    readTime: "7 min read",
    imageUrl: getCover(2),
    link: "https://www.linkedin.com/newsletters/7159940733972434944/",
    issueNumber: 43
  },
  {
    id: "42",
    title: "Streamlining InfoWorks ICM: Simple Statistics of Thousands of Network Parameters with Ruby Prompts",
    description: "A guide to simplifying the statistical analysis of network parameters in InfoWorks ICM using Ruby.",
    date: "6 months ago",
    readTime: "6 min read",
    imageUrl: getCover(3),
    link: "https://www.linkedin.com/newsletters/7159940733972434944/",
    issueNumber: 42
  },
  {
    id: "41",
    title: "Streamlining InfoWorks ICM SWMM: Exporting Thousands of Network Parameters to CSV with Ruby Prompts",
    description: "Automating the export of large datasets from ICM SWMM to CSV format using Ruby scripts.",
    date: "6 months ago",
    readTime: "5 min read",
    imageUrl: getCover(4),
    link: "https://www.linkedin.com/newsletters/7159940733972434944/",
    issueNumber: 41
  },
  {
    id: "40",
    title: "Streamlining InfoWorks ICM: Exporting Thousands of Network Parameters to CSV with Ruby Prompts",
    description: "Efficient techniques for exporting InfoWorks ICM network data to CSV for external analysis.",
    date: "6 months ago",
    readTime: "5 min read",
    imageUrl: getCover(5),
    link: "https://www.linkedin.com/newsletters/7159940733972434944/",
    issueNumber: 40
  },
  {
    id: "39",
    title: "History of SWMM from 1978 Onwards from PDF Files",
    description: "A historical journey through the development of the Storm Water Management Model (SWMM) since 1978.",
    date: "8 months ago",
    readTime: "12 min read",
    imageUrl: getCover(6),
    link: "https://www.linkedin.com/newsletters/7159940733972434944/",
    issueNumber: 39
  },
  {
    id: "38",
    title: "SWMM4, SWMM5, RUBY AND AI FOR SWMM5",
    description: "Integrating modern AI and Ruby scripting with classic and current SWMM versions.",
    date: "8 months ago",
    readTime: "9 min read",
    imageUrl: getCover(7),
    link: "https://www.linkedin.com/newsletters/7159940733972434944/",
    issueNumber: 38
  },
  {
    id: "37",
    title: "Seven Classic SWMM5 Hydraulics Test Files from Extran3 or SWMM3 in 1981 Used in SWMM4 and SWMM5 Testing",
    description: "Reviewing classic hydraulic test files that have stood the test of time across multiple SWMM generations.",
    date: "9 months ago",
    readTime: "8 min read",
    imageUrl: getCover(8),
    link: "https://www.linkedin.com/newsletters/7159940733972434944/",
    issueNumber: 37
  },
  {
    id: "36",
    title: "Ruby scripting resources for ICM and ICM SWMM, including help files, AI learning locations, and GitHub repositories",
    description: "A curated list of resources for mastering Ruby scripting in the context of ICM and ICM SWMM.",
    date: "9 months ago",
    readTime: "7 min read",
    imageUrl: getCover(0),
    link: "https://www.linkedin.com/newsletters/7159940733972434944/",
    issueNumber: 36
  },
  {
    id: "35",
    title: "PDF Files for SWMM1, SWMM2, SWMM3, SWMM4 and SWMM5 for AI Queries",
    description: "Digitizing and organizing historical SWMM documentation for use with AI-driven queries.",
    date: "1 year ago",
    readTime: "6 min read",
    imageUrl: getCover(1),
    link: "https://www.linkedin.com/newsletters/7159940733972434944/",
    issueNumber: 35
  },
  {
    id: "34",
    title: "SWMM5+, InfoSewer, ICM SWMM, ICM InfoWorks, Ruby, Water Quality",
    description: "A broad overview of water quality modeling across various software platforms and the role of Ruby.",
    date: "1 year ago",
    readTime: "8 min read",
    imageUrl: getCover(2),
    link: "https://www.linkedin.com/newsletters/7159940733972434944/",
    issueNumber: 34
  },
  {
    id: "33",
    title: "Misc Ruby Tools for ICM InfoWorks SWMM Modeling",
    description: "A collection of miscellaneous yet useful Ruby tools for enhancing your modeling workflow.",
    date: "1 year ago",
    readTime: "5 min read",
    imageUrl: getCover(3),
    link: "https://www.linkedin.com/newsletters/7159940733972434944/",
    issueNumber: 33
  },
  {
    id: "32",
    title: "Using Ruby to make ICM SWMM more like InfoSWMM Output Report Tables",
    description: "Customizing ICM SWMM output reports to match the familiar format of InfoSWMM using Ruby.",
    date: "1 year ago",
    readTime: "7 min read",
    imageUrl: getCover(4),
    link: "https://www.linkedin.com/newsletters/7159940733972434944/",
    issueNumber: 32
  },
  {
    id: "31",
    title: "How the EPASWMM5 Related Software Newsletter is Organized using the Number 1729",
    description: "An intriguing look into the organizational structure of the newsletter and the significance of the number 1729.",
    date: "1 year ago",
    readTime: "4 min read",
    imageUrl: getCover(5),
    link: "https://www.linkedin.com/newsletters/7159940733972434944/",
    issueNumber: 31
  },
  {
    id: "30",
    title: "InfoSewer to ICM InfoWorks using ODIC and Ruby with SQL, Extended FY2025 Version",
    description: "A guide on migrating from InfoSewer to ICM InfoWorks using advanced data import and scripting techniques.",
    date: "1 year ago",
    readTime: "10 min read",
    imageUrl: getCover(6),
    link: "https://www.linkedin.com/newsletters/7159940733972434944/",
    issueNumber: 30
  },
  {
    id: "29",
    title: "Ruby Code for Altering 2D Polygons, Making 2D Results Points Inside the Polygon for both ICM InfoWorks and SWMM Networks",
    description: "Advanced Ruby scripting for spatial manipulation of 2D polygons and results points in network models.",
    date: "1 year ago",
    readTime: "8 min read",
    imageUrl: getCover(7),
    link: "https://www.linkedin.com/newsletters/7159940733972434944/",
    issueNumber: 29
  },
  {
    id: "28",
    title: "From 1988 to 2024: SWMM's Incredible 54,000-fold Engine or PC Speed Improvement",
    description: "Tracking the exponential performance improvements in SWMM engines over nearly four decades.",
    date: "1 year ago",
    readTime: "6 min read",
    imageUrl: getCover(8),
    link: "https://www.linkedin.com/newsletters/7159940733972434944/",
    issueNumber: 28
  },
  {
    id: "27",
    title: "How many runoff surfaces do I actually use in my ICM InfoWorks network? Ruby can answer this question.",
    description: "Using Ruby to audit and analyze runoff surface usage in your hydraulic networks.",
    date: "1 year ago",
    readTime: "5 min read",
    imageUrl: getCover(0),
    link: "https://www.linkedin.com/newsletters/7159940733972434944/",
    issueNumber: 27
  },
  {
    id: "26",
    title: "SQL for ALL ICM SWMM Results for Nodes, Links and Subcatchments and LIDS Input and Results Parameters",
    description: "Comprehensive SQL queries for extracting all types of results and parameters from ICM SWMM.",
    date: "1 year ago",
    readTime: "9 min read",
    imageUrl: getCover(1),
    link: "https://www.linkedin.com/newsletters/7159940733972434944/",
    issueNumber: 26
  }
];
