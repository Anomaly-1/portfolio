export interface Project {
  slug: string;
  title: string;
  description: string;
  icon?: string;
  links?: ProjectLink[] | null;
  buttonText: string;
  categories?: string[];
  fullDescription: string;
  technologies?: string[];
  features?: string[];
  showGallery?: boolean;
  galleryImages?: string[];
  normalImage?: string;
  fitImage: boolean;
  priority: 1 | 2 | 3; // 1 = highest significance (novelty + utility)
}

interface ProjectLink {
  link: string;
  linkMessage: string;
  label?: string;
}

export const projects: Project[] = [
  {
    slug: "unbound",
    title: "Unbound",
    description: "An app powered by computer vision and real-time accessibility features to assist individuals with disabilities in navigating their daily lives.",
    links: [
      { link: "https://github.com/Anomaly-1/Unbound", linkMessage: "View the GitHub repository", label: "repo" },
      { link: "/unbound/unboundpresentation.pdf", linkMessage: "View the slide deck", label: "presentation" }
    ],
    buttonText: "View Project →",
    categories: ["Mobile App", "Real-time", "IOS", "Software"],
    fullDescription: "Unbound is an all-in-one accessibility assistant designed to empower individuals with disabilities. By combining computer vision, text enhancement, and real-time audio processing, Unbound bridges the gap between users and their environment.",
    technologies: ["Swift"],
    features: [
      "Real-time transcriptions",
      "Dyslexic Text Filter",
      "Surroundings describer",
      "Text OCR Scanner",
      "Custom Device support",
      "Haptics",
      "Client-side protection of data"
    ],
    normalImage: "/unbound/cover.png",
    showGallery: true,
    galleryImages: ["/unbound/captions.png", "/unbound/OCR.png", "/unbound/readaloud.png", "/unbound/devices.png"],
    fitImage: true,
    priority: 1
  },
  {
    slug: "linkerra",
    title: "Linkerra",
    description: "A lightweight P2P file transfer utility enabling direct data sync between devices using Iroh's ticketing system.",
    links: [{ link: "https://github.com/Anomaly-1/linkerra", linkMessage: "View the GitHub repository", label: "repo" }],
    buttonText: "View Project →",
    categories: ["Desktop App", "File Management", "Cross Platform", "Software"],
    fullDescription: "A practical file transfer tool built on the Iroh Rust library. Enables peer-to-peer data sync via a ticketing system, with basic utilities for file organization and external drive management.",
    technologies: ["Tauri", "Rust", "Iroh", "Next.js", "TailwindCSS"],
    features: [
      "P2P file transfer via Iroh tickets",
      "Basic file organization utilities",
      "External drive management",
      "Transfer pause/resume",
      "Cross-platform support"
    ],
    normalImage: "/linkerra/cover.png",
    showGallery: true,
    galleryImages: ["/linkerra/othercover.png", "/linkerra/smartorganizer.png", "/linkerra/sync.png", "/linkerra/testconverter.png", "/linkerra/testedsmartorganizer.png", "/linkerra/testrecieve.png", "/linkerra/testsend.png", "/linkerra/testsync.png", "/linkerra/transfer.png", "/linkerra/converter.png"],
    fitImage: true,
    priority: 2
  },
  {
    slug: "echo",
    title: "Echo",
    description: "A minimal, self-hostable chat client designed as a lightweight alternative when primary messaging platforms are restricted.",
    links: [{ link: "https://github.com/Anomaly-1/echo", linkMessage: "View the GitHub repository", label: "repo" }],
    buttonText: "View Project →",
    categories: ["Web App", "Real-time", "Next.js", "Software"],
    fullDescription: "Echo was built as a fallback communication tool for environments where standard messaging platforms may be blocked. It provides core real-time messaging, private groups, and basic theming without heavy dependencies.",
    technologies: ["Next.js", "Supabase", "TypeScript", "Tailwind CSS", "Framer Motion"],
    features: [
      "Real-time messaging via Supabase",
      "Private group creation",
      "Basic theme customization",
      "User authentication",
      "Message history persistence",
      "Lightweight footprint for restricted networks"
    ],
    normalImage: "/echo/tealtwo.png",
    showGallery: true,
    galleryImages: ["/echo/brown.png","/echo/appearance.png","/echo/dark.png","/echo/orange.png","/echo/teal.png", "/echo/signin.png"],
    fitImage: true,
    priority: 2
  },
  {
    slug: "tetris-ai",
    title: "Tetris AI",
    description: "An experimental AI agent that plays Tetris using a genetic algorithm to optimize decision-tree pruning for sustained gameplay.",
    normalImage: "/tetris.png",
    links: [{ link: "https://github.com/Anomaly-1/tetrisAI", linkMessage: "View the GitHub repository", label: "Tetris AI Repository" }],
    buttonText: "View Project →",
    categories: ["AI", "Machine Learning", "Python", "Software"],
    fullDescription: "A proof-of-concept AI system that applies genetic algorithm training to optimize heuristic pruning for Tetris decision-making. Demonstrates how evolutionary strategies can tune game-playing agents for extended sessions.",
    technologies: ["Python", "PyTorch", "Genetic Algorithms", "Pygame"],
    features: [
      "Genetic algorithm for heuristic optimization",
      "Decision-tree pruning based on evolved weights",
      "Real-time move selection",
      "Manual/AI control toggle",
      "Sustained gameplay capability"
    ],
    showGallery: false,
    galleryImages: [],
    fitImage: true,
    priority: 1
  },
  {
    slug: "the-harvest",
    title: "The Harvest",
    description: "A sample restaurant website built to demonstrate responsive design patterns and animation techniques.",
    normalImage: "/harvest/cover.png",
    links: [{ link: "https://the-harvest-restaurant.vercel.app/", linkMessage: "Visit the live website", label: "The Harvest Website" }],
    buttonText: "View Project →",
    categories: ["Web Design", "UI/UX", "Next.js", "Software"],
    fullDescription: "A demonstrative single-page restaurant site created to practice modern frontend techniques: responsive layouts, scroll animations, and component-driven design. Serves as a portfolio piece for UI implementation skills.",
    technologies: ["React", "Framer Motion", "Tailwind CSS"],
    features: [
      "Responsive mobile-first layout",
      "Scroll-triggered animations",
      "Static menu presentation",
      "Image gallery with parallax effects"
    ],
    showGallery: true,
    galleryImages: ["/harvest/drinks.png","/harvest/mainmenu.png","/harvest/homepage.png","/harvest/bottommain.png", "/harvest/reservation.png"],
    fitImage: true,
    priority: 3
  },
  {
    slug: "pathfinding-visualizer",
    title: "Pathfinding Visualizer",
    description: "An educational visualization tool that demonstrates how pathfinding algorithms like A*, Dijkstra, and BFS traverse graphs.",
    normalImage: "/pathfinder/maze.png",
    links: [{ link: "https://github.com/Anomaly-1/pathfinding-visualizer", linkMessage: "View the GitHub repository", label: "Pathfinding Visualizer Repository" }],
    buttonText: "View Project →",
    categories: ["Algorithms", "Visualization", "JavaScript", "Software"],
    fullDescription: "An interactive learning tool that animates the execution of common pathfinding algorithms. Users can place walls, set start/end points, and observe how each algorithm explores the search space differently.",
    technologies: ["JavaScript", "React", "TailwindCSS", "Framer Motion"],
    features: [
      "Multiple algorithm implementations (A*, Dijkstra, BFS, DFS, Greedy)",
      "Step-by-step or continuous animation",
      "Custom maze editing",
      "Adjustable visualization speed",
      "Algorithm comparison mode"
    ],
    fitImage: true,
    showGallery: true,
    galleryImages: ["/pathfinder/Astar.png", "/pathfinder/BFS.png", "/pathfinder/DFS.png", "/pathfinder/Greedy.png", "/pathfinder/leftside.png", "/pathfinder/multidirectional.png", "/pathfinder/rightside.png", "/pathfinder/rightsidetwo.png", "/pathfinder/title.png"],
    priority: 2
  },
  {
    slug: "platemaster",
    title: "Platemaster",
    description: "A recipe assistant that uses computer vision to identify ingredients and generates meal suggestions via AI or a curated database.",
    normalImage: "/platemaster/recipesearch.png",
    links: [
      { link: "https://github.com/Anomaly-1/platemaster", linkMessage: "View the GitHub repository", label: "repo" },
      { link: "/Platemaster.pdf", linkMessage: "View the presentation", label: "presentation" }
    ],
    buttonText: "View Project →",
    categories: ["Web App", "Vue.js", "AI", "Computer Vision", "Software"],
    fullDescription: "Platemaster combines computer vision and AI to streamline meal planning. Users can photograph ingredients for automatic recognition, then receive recipe suggestions either generated by AI or pulled from a curated database. Includes basic nutrition tracking and calorie estimation.",
    technologies: ["Vue.js", "Firebase", "TailwindCSS", "Food Data API", "Gemini API", "TensorFlow Lite"],
    features: [
      "Ingredient recognition via on-device computer vision",
      "AI-generated recipe suggestions",
      "Fallback to curated recipe database",
      "Dietary preference filtering",
      "Basic nutritional information lookup",
      "Calorie tracking integration"
    ],
    showGallery: true,
    galleryImages: ["/platemaster/estimates.png","/platemaster/ingredients.png","/platemaster/nutrients.png"],
    fitImage: true,
    priority: 1
  },
  {
    slug: "flowpro",
    title: "FlowPro",
    description: "A straightforward finance dashboard for tracking personal expenses, income, and viewing basic stock data.",
    normalImage: "/flowpro/cover.png",
    links: [{ link: "https://github.com/Anomaly-1/flowpro", linkMessage: "View the GitHub repository", label: "FlowPro Repository" }],
    buttonText: "View Project →",
    categories: ["Finance", "Web App", "React", "Software"],
    fullDescription: "A minimal personal finance tracker focused on core functionality: logging income/expenses, categorizing transactions, and displaying basic market data. Built as a practical tool for personal budgeting without complex analytics.",
    technologies: ["Next.js", "Firebase", "TailwindCSS", "CryptoCompare API"],
    features: [
      "Manual expense/income logging",
      "Basic transaction categorization",
      "Simple portfolio view for tracked assets",
      "Static market data display",
      "Client-side authentication"
    ],
    showGallery: false,
    galleryImages: [],
    fitImage: true,
    priority: 3
  },
  {
    slug: "facemask",
    title: "FaceMask",
    description: "A real-time face filtering demo using MediaPipe to map facial landmarks and overlay virtual masks.",
    normalImage: "/facemask/cover.png",
    links: [{ link: "https://github.com/Anomaly-1/face-mask", linkMessage: "View the GitHub repository", label: "FaceMask Repository" }],
    buttonText: "View Project →",
    categories: ["AI", "Computer Vision", "Python", "Software"],
    fullDescription: "A demonstration of real-time facial landmark detection using the MediaPipe pipeline. Retrieves facial coordinates and projects overlay graphics that track head movement, serving as a foundation for AR-style filters.",
    technologies: ["Python", "OpenCV", "MediaPipe"],
    features: [
      "Real-time facial landmark detection via MediaPipe",
      "Coordinate mapping for overlay placement",
      "Basic mask rendering with movement tracking",
      "Low-latency video processing",
      "Modular overlay system"
    ],
    showGallery: false,
    galleryImages: [],
    fitImage: true,
    priority: 2
  },
  {
    slug: "housing-data-analysis",
    title: "Housing Data Analysis",
    description: "Analysis of real estate trends using Zillow data to reveal market patterns.",
    normalImage: "/datacover.png",
    links: [{ link: "https://github.com/Anomaly-1/housing-data-analysis/blob/main/Documentation%20Porfolio%20-%20Data%20Science%20%26%20Analytics.docx", linkMessage: "View the full report file", label: "analysis repo" }],
    buttonText: "View Project →",
    categories: ["Finance", "Data Analysis", "Python", "Software"],
    fullDescription: "A statistical analysis of housing market trends using Zillow data. Explores geographic clustering, temporal price patterns, and basic predictive modeling through standard data science workflows.",
    technologies: ["Python", "Pandas", "Matplotlib", "Scikit-learn"],
    features: [
      "Market trend analysis",
      "Geographic clustering",
      "Temporal price patterns",
      "Data visualizations"
    ],
    fitImage: true,
    priority: 3
  },
  {
    slug: "autonomous-movement-bot",
    title: "Autonomous Movement Bot",
    description: "Built to move in exact pre-programmed sequences.",
    normalImage: "/precision-movement-bot.JPEG",
    buttonText: "More Info →",
    categories: ["Hardware"],
    fullDescription: "A sophisticated autonomous robot designed to execute precise, pre-programmed movement sequences. Features advanced motion control and positioning accuracy using an IMU and H-bridge motor driver.",
    technologies: ["Motor encoding", "Embedded C++", "PID Controllers"],
    features: [
      "Precise movement sequences",
      "PID feedback control",
      "Autonomous programming",
      "IMU integration",
      "Performance optimization"
    ],
    showGallery: false,
    galleryImages: [],
    fitImage: false,
    priority: 2
  },
  {
    slug: "DNA-Drone",
    title: "Custom FPV Drone",
    description: "Custom FPV drone built for freestyle flying and payload delivery.",
    normalImage: "/DNA.png",
    links: [{ link: "/documentation.pdf", linkMessage: "View the full documentation file", label: "engineering documentation" }],
    showGallery: false,
    galleryImages: [],
    buttonText: "More Info →",
    categories: ["Hardware"],
    fullDescription: "7-in size custom FPV drone equipped with a camera, video and audio transmitter, ELRS receiver, and X frame. Embedded IMU and gyro. Includes custom claw attachment which can be controlled remotely.",
    technologies: ["Custom Electrical Circuits", "Embedded C++", "Mechanical Design", "Custom CAD Modeling"],
    features: [
      "Reliable electrical connections",
      "Long-range control and data broadcasting",
      "Custom claw attachment",
      "Larger size, power, and stability",
      "First Person POV capabilities"
    ],
    fitImage: false,
    priority: 1
  },
  {
    slug: "basket-bot",
    title: "VEX Basket Bot",
    description: "Specializes in hoarding balls",
    normalImage: "/basket-bot.png",
    links: [{ link: "https://versyn.vercel.app/", linkMessage: "Meet the Team", label: "team site" }],
    buttonText: "More Info →",
    categories: ["Hardware"],
    showGallery: false,
    galleryImages: [],
    fullDescription: "A VEX robotics competition bot optimized for collecting and storing balls efficiently. Features specialized intake and hoarding mechanisms for maximum performance.",
    technologies: ["VEX Robotics", "Embedded C++", "Mechanical Design"],
    features: [
      "High-capacity ball hoarding",
      "Efficient intake mechanism",
      "Flexible outtake system",
      "Quick deployment",
      "Durable construction",
      "Autonomous path routines",
      "Automatic color sort"
    ],
    fitImage: false,
    priority: 2
  },
  {
    slug: "s-bot",
    title: "VEX S Bot",
    description: "Utilizes an S-shaped intake with double descoring",
    normalImage: "/S-bot.png",
    links: [{ link: "https://versyn.vercel.app/", linkMessage: "Meet the Team", label: "team site" }],
    buttonText: "More Info →",
    categories: ["Hardware"],
    showGallery: false,
    galleryImages: [],
    fullDescription: "An innovative VEX robotics bot featuring an S-shaped intake system with dual descoring capabilities. Designed for complex game mechanics and strategic play.",
    technologies: ["VEX Robotics", "Embedded C++", "Mechanical Design"],
    features: [
      "S-shaped intake mechanism",
      "Double descoring system",
      "Accurate Aligner",
      "Goal-blocking hood",
      "Modular design",
      "Fast matchloader",
      "Autonomous path routines"
    ],
    fitImage: false,
    priority: 2
  },
  {
    slug: "ramp-bot",
    title: "VEX Ramp Bot",
    description: "Utilizes a direct ramp intake",
    normalImage: "/direct-intake-bot.JPG",
    links: [{ link: "https://versyn.vercel.app/", linkMessage: "Meet the Team", label: "team site" }],
    showGallery: false,
    galleryImages: [],
    buttonText: "More Info →",
    categories: ["Hardware"],
    fullDescription: "A streamlined VEX robotics bot featuring a direct ramp intake system. Optimized for speed and efficiency in ball collection and placement.",
    technologies: ["VEX Robotics", "Embedded C++", "Mechanical Design"],
    features: [
      "Direct ramp intake design",
      "Parking compatibility",
      "Accurate Aligner",
      "Fast matchloader",
      "Efficient chain flap intake",
      "Autonomous path routines"
    ],
    fitImage: false,
    priority: 2
  },
  {
    slug: "flux",
    title: "Flux",
    description: "A modular handheld device with expansion-card architecture, custom firmware, and universal signal replication capabilities.",
    normalImage: "/flux/cover.png",
    links: [],
    buttonText: "More Info →",
    categories: ["Hardware", "Embedded Systems", "IoT", "Firmware"],
    fullDescription: "Flux is a custom handheld device built from scratch with a modular expansion architecture. The core innovation is a slot-in card system that allows users to add capabilities—such as extended-range signal transmission—by inserting feature cards. The device runs custom firmware written in Python, including a display API and network protocol stack. It features integrated battery management (measurement, charging, power sequencing), haptic/audio feedback via buzzers, and Bluetooth/WiFi connectivity for broadcasting audio or custom signals. The enclosure is a custom 3D-printed design optimized for handheld ergonomics. Development involved overcoming circuit instability, thermal management, display synchronization, and battery monitoring challenges, while learning CAD, circuit design, and Linux-based embedded development.",
    technologies: ["Python (Firmware)", "Custom PCB Design", "CAD (3D Printing)", "Bluetooth/WiFi Stack", "Battery Management Systems", "Signal Protocol Reverse-Engineering", "Linux Embedded"],
    features: [
      "Expansion-card slot architecture for modular feature upgrades",
      "Custom firmware with display API and network protocols",
      "Battery management: measurement, charging, power sequencing",
      "Haptic and audio feedback via integrated buzzers",
      "Signal replication: garage openers, wireless controllers, custom RF",
      "Bluetooth/WiFi management for external device connectivity",
      "Audio broadcasting and custom signal transmission",
      "Custom 3D-printed handheld casing",
      "Modular, future-proof code architecture"
    ],
    showGallery: false,
    galleryImages: [],
    fitImage: false,
    priority: 1
  },
];