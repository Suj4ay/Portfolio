// ==========================================
// PORTFOLIO CONFIGURATION & DATA SOURCE
// Easily update your profile, links, skills & projects here.
// ==========================================

export const personalData = {
  name: "Sujay Mishra",
  shortName: "Sujay",
  title: "Computer Science Engineering Student | Software Developer | Problem Solver",
  headline: "Computer Science Engineering Student building software, solving problems and exploring AI-driven technology.",
  roles: [
    "Software Developer",
    "Problem Solver",
    "Full-Stack Developer",
    "AI/ML Enthusiast",
    "Hackathon Builder"
  ],
  bio: "I am a Computer Science Engineering student at Chandigarh University driven by a passion for solving complex algorithmic problems and building practical, high-impact software. My technical journey spans full-stack web development, intelligent decision systems, IoT hardware integrations, and graph algorithms. I thrive in competitive hackathon environments where high pressure meets rapid product innovation.",
  university: "Chandigarh University",
  degree: "B.Tech in Computer Science Engineering",
  school: "DAV Public School, Patna",
  academicHighlights: {
    cgpa: "8.04",
    class10: "82%",
    class12: "76%"
  },
  currentFocus: [
    "Software Development",
    "Data Structures & Algorithms",
    "Full-Stack Development",
    "Artificial Intelligence / Machine Learning",
    "Backend Development",
    "IoT",
    "Building practical software projects",
    "Hackathons"
  ],
  socials: {
    github: "https://github.com/Suj4ay",
    linkedin: "https://www.linkedin.com/in/sujay-mishra-96a8b7316/",
    email: "sujay.nandan23@gmail.com",
    phone: "8235652423",
    location: "Patna, India"
  },
  organizations: [
    { title: "DroidLinX Club, Chandigarh University", role: "Member", period: "01/2026 - Present" },
    { title: "Event Crew, Chandigarh University", role: "Member", period: "12/2024 - Present" }
  ],
  certificates: [
    { title: "IoT Devices", issuer: "University of Illinois Urbana-Champaign (Coursera)" },
    { title: "Certificate of Green Commitment", issuer: "Environmental Initiative" },
    { title: "Data Analytics and Visualization Job Simulation", issuer: "Job Simulation" }
  ],
  interests: ["Problem solving", "Poetry", "Cricket"],
  profileImage: "/sujay-mishra-profile.jpg",
  cyberProfileImage: "/sujay-cyber-profile.png",
  neuroProfileImage: "/sujay-neuro-profile.png",
  humanTransparentImage: "/sujay-human-transparent.png",
  neuroTransparentImage: "/sujay-neuro-transparent.png",
  roboticTransparentImage: "/sujay-robotic-transparent.png",
  resumePath: "/Sujay-Mishra-Resume.pdf"
};

export const educationData = [
  {
    id: "cu",
    institution: "Chandigarh University",
    degree: "B.Tech — Computer Science Engineering",
    type: "Undergraduate Degree",
    period: "Present",
    badge: "CGPA: 8.04",
    description: "Specializing in Computer Science Engineering with strong core emphasis on Data Structures, Algorithms, Software Engineering, Object-Oriented Programming, Database Management Systems, and System Architecture.",
    highlights: [
      "Current CGPA: 8.04 / 10.0",
      "Focus on Full-Stack Software Engineering & Machine Learning",
      "Active participant in competitive hackathons and coding events"
    ]
  },
  {
    id: "dav",
    institution: "DAV Public School, Patna",
    degree: "Senior Secondary & Secondary Education",
    type: "Schooling",
    period: "Completed",
    badge: "Academic Excellence",
    description: "Completed secondary and senior secondary education with strong foundational metrics in Science, Mathematics, and Computer Science.",
    highlights: [
      "Class 12th: 76%",
      "Class 10th: 82%",
      "Strong foundation in Mathematics and Science"
    ]
  }
];

export const skillCategories = [
  {
    id: "programming",
    name: "Programming",
    skills: ["C++", "Python", "Java", "JavaScript", "SQL"]
  },
  {
    id: "frontend",
    name: "Frontend",
    skills: ["React", "HTML", "CSS", "React Router", "React Flow"]
  },
  {
    id: "backend",
    name: "Backend",
    skills: ["Node.js", "Express.js", "REST APIs"]
  },
  {
    id: "database",
    name: "Database",
    skills: ["MongoDB", "SQLite", "SQL"]
  },
  {
    id: "tools",
    name: "Tools",
    skills: ["Git", "GitHub", "VS Code", "Postman"]
  },
  {
    id: "ai-ml-iot",
    name: "AI / ML / IoT",
    skills: ["Machine Learning", "MQTT", "ESP8266"]
  }
];

export const projectsData = [
  {
    id: "roster-optimisation",
    title: "AI-Driven Roster & Contract Optimisation",
    flagship: true,
    context: "BUILDX by TRAE AI — NSUT, Delhi",
    achievement: "🥇 1st Place — Team Apex Zero",
    shortDescription: "An AI/ML-powered strategic decision intelligence system designed for IPL team roster and contract optimisation.",
    fullProblem: "Sports franchise management involves complex multi-million dollar decisions with high financial risk and unpredictable player performance metrics. Franchises struggle to balance squad budget constraints while maximizing competitive utility.",
    fullSolution: "Built a machine-learning-powered decision support engine that computes a multi-factor 'Value Index' for each player, detects overvalued and undervalued assets, simulates trade scenarios, and solves budget-constrained squad optimization problems in real-time.",
    technologies: ["Python", "Machine Learning", "Data Analytics", "React", "Node.js", "AI Intelligence"],
    features: [
      "Machine-learning-based player performance prediction",
      "Value Index calculation algorithm",
      "Identification of undervalued and overpaid players",
      "Real-time trade simulation engine",
      "Budget-constrained squad optimisation solver",
      "Strategic decision support dashboard"
    ],
    githubUrl: "https://github.com/Suj4ay/ai-roster-optimisation",
    liveUrl: null,
    hasCaseStudy: true
  },
  {
    id: "inventory-management",
    title: "Inventory Management System",
    flagship: false,
    context: "Database & Backend Application",
    achievement: "Core DBMS Project",
    shortDescription: "A structured relational database system engineered for efficient product lifecycle tracking and inventory management.",
    fullProblem: "Manual inventory tracking often leads to data inconsistencies, lost records, and unoptimized stock levels in small-to-medium operations.",
    fullSolution: "Designed a clean DBMS layer using Python and SQLite with full CRUD capabilities, relational integrity constraints, and query-optimized stock retrieval.",
    technologies: ["Python", "DBMS", "SQLite", "SQL"],
    features: [
      "Product management & categorization",
      "Automated stock & inventory tracking",
      "Robust CRUD operations (Create, Read, Update, Delete)",
      "Add, update, delete, and retrieve inventory data smoothly",
      "Structured database management with normalized tables"
    ],
    githubUrl: "https://github.com/Suj4ay/inventory-management-system",
    liveUrl: null,
    hasCaseStudy: false
  },
  {
    id: "iot-alarm-system",
    title: "IoT Emergency Alarm System",
    flagship: false,
    context: "Embedded Systems & Hardware Project",
    achievement: "Hardware-Software Integration",
    shortDescription: "A real-time emergency alert and communications node powered by ESP8266 microcontroller and lightweight MQTT messaging protocol.",
    fullProblem: "Traditional alarm systems suffer from high latency, bulky wiring, and unreliable long-distance communication protocols during critical emergencies.",
    fullSolution: "Implemented an ultra-low latency wireless emergency node leveraging ESP8266 Wi-Fi module and MQTT pub-sub messaging architecture for instant remote alert delivery.",
    technologies: ["ESP8266", "MQTT", "IoT", "C++ / Embedded C"],
    features: [
      "Real-time emergency communication pipeline",
      "Remote instant alert triggering",
      "Lightweight MQTT messaging protocol",
      "Microcontroller-to-cloud device communication",
      "Reliable low-power wireless connectivity",
      "Low-latency alert delivery under constrained networks"
    ],
    githubUrl: "https://github.com/Suj4ay/iot-emergency-alarm",
    liveUrl: null,
    hasCaseStudy: false
  },
  {
    id: "task-prerequisite-planner",
    title: "Task & Prerequisite Planner",
    flagship: false,
    context: "Graph Theory & Algorithm Visualization",
    achievement: "Interactive Graph Visualizer",
    shortDescription: "An interactive dependency graph application visualizing Directed Acyclic Graphs (DAG) and topological sorting for task scheduling.",
    fullProblem: "Complex project plans with interwoven prerequisite tasks are hard to visualize and sequence manually without topological ordering.",
    fullSolution: "Developed an interactive visual node workspace using React Flow that renders task dependencies as a DAG and computes topological ordering to produce valid execution plans.",
    technologies: ["React", "Node.js", "React Flow", "Directed Acyclic Graph (DAG)"],
    features: [
      "Directed Acyclic Graph (DAG) canvas rendering",
      "Interactive task dependency node editing",
      "Topological sorting algorithm execution",
      "Visual step-by-step dependency resolution",
      "Optimal task sequence planning engine"
    ],
    githubUrl: "https://github.com/Suj4ay/task-prerequisite-planner",
    liveUrl: null,
    hasCaseStudy: false
  }
];

export const hackathonAchievements = [
  {
    id: "buildx-nsut",
    title: "BUILDX by TRAE AI",
    location: "NSUT, Delhi",
    rank: "🥇 1st Place",
    teamName: "Team Apex Zero",
    projectTitle: "AI-Driven Roster & Contract Optimisation",
    problem: "Balancing multi-million dollar IPL team rosters within strict salary caps and unpredictable performance metrics.",
    approach: "Designed a multi-variate ML prediction engine combined with a trade simulation algorithm and budget constraint optimizer.",
    result: "Awarded 🥇 1st Place at NSUT Delhi among top university engineering teams."
  }
];

export const dsaTopics = [
  { title: "Arrays", count: "Fundamental", category: "Data Structures" },
  { title: "Strings", count: "Fundamental", category: "Data Structures" },
  { title: "Linked Lists", count: "Linear", category: "Data Structures" },
  { title: "Stack", count: "LIFO", category: "Data Structures" },
  { title: "Queue", count: "FIFO", category: "Data Structures" },
  { title: "Trees", count: "Hierarchical", category: "Data Structures" },
  { title: "Graphs", count: "Network", category: "Data Structures" },
  { title: "Sorting", count: "Algorithms", category: "Core Algorithms" },
  { title: "Searching", count: "Algorithms", category: "Core Algorithms" },
  { title: "Hashing", count: "O(1) Access", category: "Data Structures" },
  { title: "Dynamic Programming", count: "Optimization", category: "Advanced" },
  { title: "Shortest Path Algorithms", count: "Graph Theory", category: "Advanced" }
];

export const dsaAlgorithms = [
  { name: "BFS", description: "Breadth-First Search for graph/tree level order traversal." },
  { name: "DFS", description: "Depth-First Search for deep graph exploration and pathfinding." },
  { name: "Dijkstra", description: "Shortest path algorithm for non-negative weighted graphs." },
  { name: "Bellman-Ford", description: "Shortest path algorithm handling negative weight edges." },
  { name: "Topological Sort", description: "Linear ordering of vertices in a Directed Acyclic Graph (DAG)." },
  { name: "Merge Sort", description: "Divide-and-conquer O(N log N) stable sorting algorithm." },
  { name: "Quick Sort", description: "Partition-based O(N log N) efficient in-place sort." },
  { name: "Heap Sort", description: "Priority queue based selection sort using Binary Heaps." }
];
