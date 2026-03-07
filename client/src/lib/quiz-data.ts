export type QuizCategory = "SWMM5 Fundamentals" | "Hydraulics & Hydrology" | "ICM InfoWorks" | "Ruby Scripting" | "Model Testing" | "History";
export type QuizDifficulty = "beginner" | "intermediate" | "advanced";

export interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
  category: QuizCategory;
  difficulty: QuizDifficulty;
}

export const quizQuestions: QuizQuestion[] = [
  {
    id: "q1",
    question: "What does SWMM stand for?",
    options: [
      "Storm Water Management Model",
      "Surface Water Modeling Method",
      "Stormwater Measurement Monitor",
      "System Water Management Module"
    ],
    correctIndex: 0,
    explanation: "SWMM stands for Storm Water Management Model. It was developed by the EPA and is the most widely used model for urban stormwater simulation worldwide.",
    category: "SWMM5 Fundamentals",
    difficulty: "beginner"
  },
  {
    id: "q2",
    question: "In which year was the first version of SWMM originally developed?",
    options: ["1965", "1971", "1978", "1985"],
    correctIndex: 1,
    explanation: "The first version of SWMM was developed in 1971 by Metcalf & Eddy, the University of Florida, and Water Resources Engineers for the EPA. The project cost approximately $350,000.",
    category: "History",
    difficulty: "beginner"
  },
  {
    id: "q3",
    question: "What equation does SWMM5 use for dynamic wave routing through pipes and channels?",
    options: [
      "Bernoulli's equation",
      "Manning's equation only",
      "Saint-Venant equations",
      "Darcy-Weisbach equation"
    ],
    correctIndex: 2,
    explanation: "SWMM5 uses the Saint-Venant equations (also known as the shallow water equations) for dynamic wave routing. These are a set of partial differential equations that describe one-dimensional unsteady open-channel flow.",
    category: "Hydraulics & Hydrology",
    difficulty: "intermediate"
  },
  {
    id: "q4",
    question: "What are the three routing methods available in SWMM5?",
    options: [
      "Static, Dynamic, Kinematic",
      "Steady Flow, Kinematic Wave, Dynamic Wave",
      "Uniform, Gradually Varied, Rapidly Varied",
      "Euler, Runge-Kutta, Adams-Bashforth"
    ],
    correctIndex: 1,
    explanation: "SWMM5 offers three routing methods: Steady Flow (simplest, no storage), Kinematic Wave (intermediate, no backwater), and Dynamic Wave (full Saint-Venant equations with backwater, surcharging, and reverse flow).",
    category: "SWMM5 Fundamentals",
    difficulty: "intermediate"
  },
  {
    id: "q5",
    question: "What is the primary file format used for SWMM5 input files?",
    options: [".swm", ".inp", ".dat", ".mdl"],
    correctIndex: 1,
    explanation: "SWMM5 uses .inp (input) files, which are plain text files organized into sections like [JUNCTIONS], [CONDUITS], [SUBCATCHMENTS], etc. This format has been standard since SWMM5's release.",
    category: "SWMM5 Fundamentals",
    difficulty: "beginner"
  },
  {
    id: "q6",
    question: "In ICM InfoWorks, what scripting language is used for automation?",
    options: ["Python", "JavaScript", "Ruby", "Lua"],
    correctIndex: 2,
    explanation: "ICM InfoWorks uses Ruby as its scripting language. Ruby scripts can automate model building, data extraction, batch simulations, and report generation within the ICM environment.",
    category: "Ruby Scripting",
    difficulty: "beginner"
  },
  {
    id: "q7",
    question: "What does the Manning's n coefficient represent in pipe flow calculations?",
    options: [
      "Pipe diameter",
      "Flow velocity",
      "Surface roughness",
      "Pipe slope"
    ],
    correctIndex: 2,
    explanation: "Manning's n is a roughness coefficient that represents the resistance to flow caused by the pipe or channel's surface material. Lower values indicate smoother surfaces (e.g., PVC ~0.011), while higher values indicate rougher surfaces (e.g., corrugated metal ~0.024).",
    category: "Hydraulics & Hydrology",
    difficulty: "beginner"
  },
  {
    id: "q8",
    question: "What is 'surcharging' in the context of stormwater modeling?",
    options: [
      "When a pipe is only partially full",
      "When water level in a node exceeds the crown of the connecting pipes",
      "When flow reverses direction in a pipe",
      "When rainfall exceeds the design storm"
    ],
    correctIndex: 1,
    explanation: "Surcharging occurs when the water level at a node rises above the crown (top) of the highest connecting pipe. The node then operates under pressure conditions rather than open-channel flow. Only the Dynamic Wave routing method in SWMM5 can model surcharging.",
    category: "SWMM5 Fundamentals",
    difficulty: "intermediate"
  },
  {
    id: "q9",
    question: "What is the Horton infiltration model based on?",
    options: [
      "Soil moisture content only",
      "An exponential decay from maximum to minimum infiltration rate",
      "Constant infiltration rate",
      "Groundwater table depth"
    ],
    correctIndex: 1,
    explanation: "The Horton model describes infiltration as an exponential decay from an initial maximum rate (f₀) to a minimum rate (f∞) over time. It uses three parameters: maximum infiltration rate, minimum infiltration rate, and a decay constant.",
    category: "Hydraulics & Hydrology",
    difficulty: "intermediate"
  },
  {
    id: "q10",
    question: "Which SWMM5 object represents the land surface area that generates runoff?",
    options: ["Junction", "Conduit", "Subcatchment", "Storage Unit"],
    correctIndex: 2,
    explanation: "Subcatchments are the hydrologic units in SWMM5 that represent land surface areas. They receive rainfall, generate runoff through infiltration excess, and route flow to nodes or other subcatchments.",
    category: "SWMM5 Fundamentals",
    difficulty: "beginner"
  },
  {
    id: "q11",
    question: "What is the Courant-Friedrichs-Lewy (CFL) condition in dynamic wave routing?",
    options: [
      "A boundary condition for pipe flow",
      "A stability criterion relating time step to wave speed and element length",
      "A formula for calculating pipe capacity",
      "A method for estimating rainfall intensity"
    ],
    correctIndex: 1,
    explanation: "The CFL condition is a numerical stability criterion that requires the time step to be small enough relative to the spatial discretization and wave speed. Violating it causes numerical instability. SWMM5 uses variable time stepping to maintain CFL stability.",
    category: "Hydraulics & Hydrology",
    difficulty: "advanced"
  },
  {
    id: "q12",
    question: "What are LIDs in SWMM5?",
    options: [
      "Large Infrastructure Designs",
      "Linear Interpolation Datasets",
      "Low Impact Development controls",
      "Logarithmic Intensity Distributions"
    ],
    correctIndex: 2,
    explanation: "LIDs (Low Impact Development) are green infrastructure controls in SWMM5 that can be placed on subcatchments to reduce runoff. Types include bio-retention cells, rain gardens, permeable pavement, infiltration trenches, rain barrels, rooftop disconnection, and vegetative swales.",
    category: "SWMM5 Fundamentals",
    difficulty: "intermediate"
  },
  {
    id: "q13",
    question: "In ICM InfoWorks, what does SQL stand for when used for data extraction?",
    options: [
      "Storm Query Language",
      "Structured Query Language",
      "System Quality Level",
      "Sequential Query Logic"
    ],
    correctIndex: 1,
    explanation: "SQL (Structured Query Language) is used in ICM InfoWorks to query and extract data from model databases. You can write SQL queries to filter, sort, and analyze model elements and their properties.",
    category: "ICM InfoWorks",
    difficulty: "beginner"
  },
  {
    id: "q14",
    question: "What is RDII in sanitary sewer modeling?",
    options: [
      "Rainfall Data Input Interface",
      "Runoff Distribution and Infiltration Index",
      "Rainfall-Derived Inflow and Infiltration",
      "Regional Drainage Infrastructure Inventory"
    ],
    correctIndex: 2,
    explanation: "RDII (Rainfall-Derived Inflow and Infiltration) represents the portion of rainfall that enters sanitary sewer systems through defects, illegal connections, and groundwater infiltration. SWMM5 models RDII using unit hydrograph parameters (R, T, K).",
    category: "Hydraulics & Hydrology",
    difficulty: "intermediate"
  },
  {
    id: "q15",
    question: "What type of node in SWMM5 can store water and has a defined volume-depth relationship?",
    options: ["Junction", "Outfall", "Storage Unit", "Divider"],
    correctIndex: 2,
    explanation: "Storage Units (or storage nodes) in SWMM5 can detain water and have a defined storage curve (volume vs. depth relationship). They are used to model ponds, tanks, reservoirs, and other detention facilities.",
    category: "SWMM5 Fundamentals",
    difficulty: "beginner"
  },
  {
    id: "q16",
    question: "What is the typical range of Manning's n for a smooth concrete pipe?",
    options: ["0.001 - 0.005", "0.011 - 0.015", "0.025 - 0.035", "0.050 - 0.080"],
    correctIndex: 1,
    explanation: "Smooth concrete pipes typically have Manning's n values between 0.011 and 0.015. A commonly used value is 0.013. This is lower than corrugated pipes (~0.024) but higher than very smooth materials like PVC (~0.011).",
    category: "Hydraulics & Hydrology",
    difficulty: "intermediate"
  },
  {
    id: "q17",
    question: "Which organization originally funded the development of SWMM?",
    options: [
      "USGS (U.S. Geological Survey)",
      "EPA (Environmental Protection Agency)",
      "FEMA (Federal Emergency Management Agency)",
      "Army Corps of Engineers"
    ],
    correctIndex: 1,
    explanation: "The U.S. Environmental Protection Agency (EPA) funded the original development of SWMM in 1971. The EPA has continued to maintain and develop SWMM through version 5, making it freely available as open-source software.",
    category: "History",
    difficulty: "beginner"
  },
  {
    id: "q18",
    question: "What is the Green-Ampt infiltration model's key advantage over Horton's model?",
    options: [
      "It's simpler to use",
      "It requires fewer parameters",
      "It's physically based on soil properties",
      "It works better for long simulations"
    ],
    correctIndex: 2,
    explanation: "The Green-Ampt model is physically based, using measurable soil properties (hydraulic conductivity, suction head, initial moisture deficit) rather than empirically fitted parameters. This makes it more transferable between sites and easier to parameterize from soil surveys.",
    category: "Hydraulics & Hydrology",
    difficulty: "advanced"
  },
  {
    id: "q19",
    question: "In SWMM5, what is a 'divider' node used for?",
    options: [
      "Connecting two different pipe materials",
      "Splitting flow between two downstream paths",
      "Measuring flow at a specific location",
      "Representing a pump station"
    ],
    correctIndex: 1,
    explanation: "A divider node in SWMM5 splits incoming flow between two downstream conduits using methods like cutoff flow, overflow, tabular, or weir-based division. They're useful for modeling flow splits at manholes or diversion structures.",
    category: "SWMM5 Fundamentals",
    difficulty: "intermediate"
  },
  {
    id: "q20",
    question: "What does DWF stand for in sewer modeling?",
    options: [
      "Dynamic Wave Flow",
      "Dry Weather Flow",
      "Design Water Frequency",
      "Downstream Flow"
    ],
    correctIndex: 1,
    explanation: "DWF (Dry Weather Flow) represents the baseline flow in a sewer system without any rainfall contribution. It includes domestic sewage, commercial/industrial discharges, and groundwater infiltration. DWF patterns vary by time of day, day of week, and season.",
    category: "SWMM5 Fundamentals",
    difficulty: "beginner"
  },
  {
    id: "q21",
    question: "How many programming languages has SWMM5's engine been translated into in the Rosetta Stone project?",
    options: ["12", "25", "37", "50"],
    correctIndex: 2,
    explanation: "The SWMM5 Rosetta Stone project translated key SWMM5 engine code across 37 programming languages, allowing engineers and developers to understand the algorithms in their preferred language.",
    category: "History",
    difficulty: "intermediate"
  },
  {
    id: "q22",
    question: "What is the purpose of the EXTRAN block in the original SWMM?",
    options: [
      "Extended rainfall analysis",
      "External transport (dynamic wave routing)",
      "Extra node analysis",
      "Extended random number generation"
    ],
    correctIndex: 1,
    explanation: "EXTRAN (Extended Transport) was the dynamic wave routing module in SWMM versions 3 and 4. It solved the full Saint-Venant equations for unsteady flow. In SWMM5, EXTRAN's functionality was integrated as the Dynamic Wave routing option.",
    category: "History",
    difficulty: "advanced"
  },
  {
    id: "q23",
    question: "What is PySWMM?",
    options: [
      "A Python-based replacement for SWMM5",
      "A Python wrapper/API for controlling SWMM5 simulations",
      "A graphical user interface for SWMM5",
      "A database for storing SWMM5 results"
    ],
    correctIndex: 1,
    explanation: "PySWMM is a Python wrapper for the SWMM5 computational engine. It allows users to programmatically control simulations, access real-time results during simulation, and modify model parameters — enabling advanced automation and real-time control strategies.",
    category: "SWMM5 Fundamentals",
    difficulty: "intermediate"
  },
  {
    id: "q24",
    question: "In ICM InfoWorks, what is an IWR file?",
    options: [
      "InfoWorks Report file",
      "InfoWorks Results file",
      "InfoWorks Ruby file",
      "InfoWorks Reference file"
    ],
    correctIndex: 1,
    explanation: "An IWR file is an InfoWorks Results file that contains simulation output data including flows, depths, velocities, and other hydraulic parameters at every time step for all nodes and links in the model.",
    category: "ICM InfoWorks",
    difficulty: "intermediate"
  },
  {
    id: "q25",
    question: "What is the rational method formula for peak runoff?",
    options: [
      "Q = C × I × A",
      "Q = n × A × R^(2/3) × S^(1/2)",
      "Q = (P - Ia)² / (P - Ia + S)",
      "Q = K × A^n"
    ],
    correctIndex: 0,
    explanation: "The Rational Method formula is Q = CIA, where Q is peak runoff rate, C is the runoff coefficient (0-1), I is rainfall intensity, and A is drainage area. It's the simplest method for estimating peak runoff and is widely used for small urban catchments.",
    category: "Hydraulics & Hydrology",
    difficulty: "beginner"
  },
  {
    id: "q26",
    question: "What calibration metric measures the overall agreement between observed and simulated hydrographs?",
    options: [
      "Manning's coefficient",
      "Nash-Sutcliffe Efficiency (NSE)",
      "Froude number",
      "Reynolds number"
    ],
    correctIndex: 1,
    explanation: "Nash-Sutcliffe Efficiency (NSE) ranges from -∞ to 1.0, where 1.0 indicates perfect agreement. An NSE > 0.5 is generally considered acceptable, > 0.65 is good, and > 0.75 is very good for hydrological model calibration.",
    category: "Model Testing",
    difficulty: "advanced"
  },
  {
    id: "q27",
    question: "What Ruby method in ICM is used to access the current network object?",
    options: [
      "get_network()",
      "WSApplication.current_network",
      "ICM.load_model()",
      "network.open()"
    ],
    correctIndex: 1,
    explanation: "In ICM Ruby scripting, WSApplication.current_network returns the currently open network object. From there, you can access and modify nodes, links, subcatchments, and other model elements programmatically.",
    category: "Ruby Scripting",
    difficulty: "intermediate"
  },
  {
    id: "q28",
    question: "What is the SCS Curve Number method used for in SWMM5?",
    options: [
      "Pipe sizing",
      "Infiltration and rainfall-runoff estimation",
      "Water quality modeling",
      "Pump curve definition"
    ],
    correctIndex: 1,
    explanation: "The SCS (now NRCS) Curve Number method estimates rainfall excess (runoff) based on land use, soil type, and antecedent moisture conditions. Curve Numbers range from 30 (high infiltration) to 98 (impervious). SWMM5 includes it as one of its infiltration options.",
    category: "Hydraulics & Hydrology",
    difficulty: "intermediate"
  },
  {
    id: "q29",
    question: "What is the difference between a 'weir' and an 'orifice' in SWMM5?",
    options: [
      "There is no difference",
      "Weirs are for open-top overflow; orifices are submerged openings",
      "Weirs handle larger flows",
      "Orifices are only used for pumps"
    ],
    correctIndex: 1,
    explanation: "Weirs represent open-top overflow structures where flow goes over a crest (like a dam spillway). Orifices represent submerged or partially submerged openings where flow passes through an aperture (like a pipe opening or gate). Both are used as link elements in SWMM5.",
    category: "SWMM5 Fundamentals",
    difficulty: "intermediate"
  },
  {
    id: "q30",
    question: "What percentage of the world's stormwater models are estimated to use SWMM or SWMM-derived engines?",
    options: ["About 25%", "About 50%", "About 75%", "Nearly all commercial models use SWMM-derived engines"],
    correctIndex: 3,
    explanation: "Nearly all major commercial stormwater modeling software (including ICM, InfoSWMM, PCSWMM, XP-SWMM, and others) use SWMM or SWMM-derived computational engines. SWMM's open-source nature has made it the foundation of the entire industry.",
    category: "History",
    difficulty: "beginner"
  }
];

export const quizCategories: QuizCategory[] = [
  "SWMM5 Fundamentals",
  "Hydraulics & Hydrology",
  "ICM InfoWorks",
  "Ruby Scripting",
  "Model Testing",
  "History"
];
