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
}

interface ProjectLink {
  link: string;
  linkMessage: string;
  label?: string; // Optional: custom terminal window name
}

export const projects: Project[] = [
  {
    slug: "unbound",
    title: "Unbound",
    description: "A easy to use, straightforward app that aids people who have disabilities.",
    links: [
      {
        link: "https://github.com/Anomaly-1/Unbound",
        linkMessage: "View the GitHub repository",
        label: "repo"
      },
      {
        link: "/unbound/unboundpresentation.pdf",
        linkMessage: "View the slide deck",
        label: "presentation"
      }
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
    galleryImages: [
      "/unbound/captions.png",
      "/unbound/OCR.png",
      "/unbound/readaloud.png",
      "/unbound/devices.png"
    ],
    fitImage: true
  },
  {
    slug: "linkerra",
    title: "Linkerra",
    description: "A quick file management and data transfer app that allows for infinite data transfer between two devices from anywhere.",
    links: [
      {
        link: "https://github.com/Anomaly-1/linkerra",
        linkMessage: "View the GitHub repository",
        label: "repo"
      },
    ],
    buttonText: "View Project →",
    categories: ["Desktop App", "File Managment", "Cross Platform", "Software"],
    fullDescription: "Using the Iroh rust plugin, infinite data transfer is possible through a ticketing system between two devices. Additionally, the app can aid with file organization and external drive management.",
    technologies: ["Tauri", "Rust", "Iroh Pipeline", "Next.js", "TailwindCSS"],
    features: [
      "P2P File Transfer",
      "System Organization",
      "Drive Management",
      "Smart File Classification",
      "Secure ticketing system",
      "Automatic transfer pauses if needed",
    ],
    normalImage: "/linkerra/cover.png",
    showGallery: true,
    galleryImages: [
      "/linkerra/othercover.png",
      "/linkerra/smartorganizer.png",
      "/linkerra/sync.png",
      "/linkerra/testconverter.png",
      "/linkerra/testedsmartorganizer.png",
      "/linkerra/testrecieve.png",
      "/linkerra/testsend.png",
      "/linkerra/testsync.png",
      "/linkerra/transfer.png",
      "/linkerra/converter.png"
    ],
    fitImage: true
  },
  {
    slug: "echo",
    title: "Echo",
    description: "A fast, minimal chat platform with real-time messaging, private groups, and customizable themes.",
    links: [
      {
        link: "https://github.com/Anomaly-1/echo",
        linkMessage: "View the GitHub repository",
        label: "repo"
      }
    ],
    buttonText: "View Project →",
    categories: ["Web App", "Real-time", "Next.js", "Software"],
    fullDescription: "Echo is a modern chat application designed with simplicity and performance in mind. It features real-time messaging, the ability to create private groups, and a highly customizable theming system. Built with cutting-edge web technologies, it delivers a smooth and responsive user experience.",
    technologies: ["Next.js", "Supabase", "TypeScript", "Tailwind CSS", "Framer Motion"],
    features: [
      "Real-time messaging with Realtime Database",
      "Private group functionality",
      "Customizable themes",
      "User authentication",
      "Message history",
      "Active user indicators",
      "Indicators for new messages",
      "Mobile compatibility"
    ],
    normalImage: "/echo/tealtwo.png",
    showGallery: true,
    galleryImages: ["/echo/brown.png","/echo/appearance.png","/echo/dark.png","/echo/orange.png","/echo/teal.png", "/echo/signin.png"],
    fitImage: true
  },
  {
    slug: "tetris-ai",
    title: "Tetris AI",
    description: "AI that masters Tetris with superhuman precision, achieving nearly infinite scores through machine learning.",
    normalImage: "/tetris.png",
    links: [
      {
        link: "https://github.com/Anomaly-1/tetrisAI",
        linkMessage: "View the GitHub repository",
        label: "Tetris AI Repository"
      }
    ],
    buttonText: "View Project →",
    categories: ["AI", "Machine Learning", "Python", "Software"],
    fullDescription: "A sophisticated artificial intelligence system trained to play Tetris at an expert level. Using advanced machine learning algorithms and neural networks, this AI has achieved near-infinite scores through continuous learning and optimization.",
    technologies: ["Python", "PyTorch", "Algorithmic Learning", "Pygame"],
    features: [
      "Genetic Algorithm based training",
      "Neural network optimization",
      "Real-time decision making",
      "Manual and AI swap control",
      "Infinite performance and speed"
    ],
    showGallery: false,
    galleryImages: [],
    fitImage: true
  },
  {
    slug: "the-harvest",
    title: "The Harvest",
    description: "Elegant restaurant website showcasing culinary artistry with stunning visuals and smooth interactions.",
    normalImage: "/harvest/cover.png",
    links: [
      {
        link: "https://the-harvest-restaurant.vercel.app/",
        linkMessage: "Visit the live website",
        label: "The Harvest Website"
      }
    ],
    buttonText: "View Project →",
    categories: ["Web Design", "UI/UX", "Next.js", "Software"],
    fullDescription: "A beautifully designed restaurant website that showcases culinary excellence through stunning visuals and smooth, intuitive interactions. The design emphasizes elegance and modern aesthetics while maintaining excellent user experience.",
    technologies: ["React", "Framer Motion", "Tailwind CSS", "Framer Motion"],
    features: [
      "Responsive design",
      "Smooth scroll animations",
      "Menu showcase",
      "Gallery with parallax effects"
    ],
    showGallery: true,
    galleryImages: ["/harvest/drinks.png","/harvest/mainmenu.png","/harvest/homepage.png","/harvest/bottommain.png", "/harvest/reservation.png"],
    fitImage: true
  },
  {
    slug: "pathfinding-visualizer",
    title: "Pathfinding Visualizer",
    description: "Interactive tool that brings algorithms to life, visualizing how A* and other pathfinding methods work.",
    normalImage: "/pathfinder/maze.png",
    links: [{
      link: "https://github.com/Anomaly-1/pathfinding-visualizer",
      linkMessage: "View the GitHub repository",
      label: "Pathfinding Visualizer Repository"
    }],
    buttonText: "View Project →",
    categories: ["Algorithms", "Visualization", "JavaScript", "Software"],
    fullDescription: "An interactive educational tool that visualizes various pathfinding algorithms in real-time. Watch A*, Dijkstra, BFS, and DFS algorithms find their way through custom-designed mazes and grids.",
    technologies: ["JavaScript", "Chakra UI", "TailwindCSS", "React", "Framer Motion", "Custom Algorithms"],
    features: [
      "Multiple algorithm implementations",
      "Real-time visualization",
      "Custom maze creation",
      "Speed controls",
      "Detailed algorithm explanation"
    ],
    fitImage: true,
    showGallery: true,
    galleryImages: [
      "/pathfinder/Astar.png",
      "/pathfinder/BFS.png",
      "/pathfinder/DFS.png",
      "/pathfinder/Greedy.png",
      "/pathfinder/leftside.png",
      "/pathfinder/multidirectional.png",
      "/pathfinder/rightside.png",
      "/pathfinder/rightsidetwo.png",
      "/pathfinder/title.png"
    ]
  },
  {
    slug: "platemaster",
    title: "Platemaster",
    description: "Smart recipe generator that creates personalized meal plans and helps you discover new flavors.",
    normalImage: "/platemaster/recipesearch.png",
    links: [
      {
        link: "https://github.com/Anomaly-1/platemaster",
        linkMessage: "View the GitHub repository",
        label: "repo"
      },
      {
        link: "/Platemaster.pdf",
        linkMessage: "View the presentation",
        label: "presentation"
      }
    ],
    buttonText: "View Project →",
    categories: ["Web App", "Vue.js", "AI", "Software"],
    fullDescription: "An intelligent recipe generator that learns your preferences and creates personalized meal plans. Features smart recommendations based on dietary restrictions, available ingredients, and flavor preferences.",
    technologies: ["Vue.js", "Firebase", "TailwindCSS", "Food API", "Gemini - AI"],
    features: [
      "Personalized recipe recommendations",
      "Dietary restriction support",
      "Ingredient-based search",
      "Nutritional analysis",
      "Custom recipe generation"
    ],
    showGallery: true,
    galleryImages: ["/platemaster/estimates.png","/platemaster/ingredients.png","/platemaster/nutrients.png"],
    fitImage: true
  },
  {
    // Refirbish gallery images and add more details to description and features - TODO
    slug: "flowpro",
    title: "FlowPro",
    description: "Comprehensive financial tracker that monitors your assets, investments, and market trends in real-time.",
    normalImage: "/flowpro/cover.png",
    links: [
      {
        link: "https://github.com/Anomaly-1/flowpro",
        linkMessage: "View the GitHub repository",
        label: "FlowPro Repository"
      }
    ],
    buttonText: "View Project →",
    categories: ["Finance", "Web App", "React", "Software"],
    fullDescription: "A powerful financial tracking application that provides real-time monitoring of your assets, investments, and market trends. Includes advanced analytics, portfolio management, and investment recommendations.",
    technologies: ["Next.js", "Firebase", "TailwindCSS", "CryptoCompare API", "JWT"],
    features: [
      "Real-time market data API",
      "Portfolio tracking",
      "Investment analytics",
      "Expense categorization",
      "Financial plotting and visualization",
      "Authentication and JWT"
    ],
    showGallery: false,
    galleryImages: [],
    fitImage: true
  },
  {
    slug: "facemask",
    title: "FaceMask",
    description: "Real-time face detection system that intelligently adjusts virtual masks to facial features.",
    normalImage: "/facemask/cover.png",
    links: [{
      link: "https://github.com/Anomaly-1/face-mask",
      linkMessage: "View the GitHub repository",
      label: "FaceMask Repository"
    }],
    buttonText: "View Project →",
    categories: ["AI", "Computer Vision", "Python", "Software"],
    fullDescription: "An advanced real-time face detection and virtual masking system. Uses state-of-the-art computer vision techniques to detect facial features and overlay intelligent virtual masks that adapt to face movements.",
    technologies: ["Python", "OpenCV", "TensorFlow", "MediaPipe"],
    features: [
      "Real-time face detection",
      "Adaptive mask placement",
      "Dual mask options",
      "Smooth animation transitions",
      "Performance optimizations for low latency"
    ],
    showGallery: false,
    galleryImages: [],
    fitImage: true
  },
  {
    slug: "housing-data-analysis",
    title: "Housing Data Analysis",
    description: "Deep dive into real estate trends using Zillow data, revealing market insights and investment opportunities.",
    normalImage: "/datacover.png",
    links: [{
      link: "https://github.com/Anomaly-1/housing-data-analysis/blob/main/Documentation%20Porfolio%20-%20Data%20Science%20%26%20Analytics.docx",
      linkMessage: "View the full report file",
      label: "analysis repo"
    }],
    buttonText: "View Project →",
    categories: ["Finance", "Data Analysis", "Python", "Software"],
    fullDescription: "A comprehensive analysis of housing market trends using real Zillow data. Reveals investment opportunities, market patterns, and price predictions through advanced statistical analysis.",
    technologies: ["Python", "Pandas", "Matplotlib", "Scikit-learn"],
    showGallery: false,
    galleryImages: [],
    features: [
      "Market trend analysis",
      "Geographic clustering",
      "Temporal price patterns",
      "Data visualizations",
    ],
    fitImage: true
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
    showGallery: false,
    galleryImages: [],
    features: [
      "Precise movement sequences",
      "PID feedback control",
      "Autonomous programming",
      "IMU integration",
      "Performance op",
    ],
    fitImage: false
  },
  {
    slug: "DNA-Drone",
    title: "Custom FPV Drone",
    description: "Custom FPV drone built for freestyle flying and payload delivery.",
    normalImage: "/DNA.png",
    links: [{
      link: "/documentation.pdf",
      linkMessage: "View the full documentation file",
      label: "engineering documentation"
    }],
    showGallery: false,
    galleryImages: [],
    buttonText: "More Info →",
    categories: ["Hardware"],
    fullDescription: "7-in size custom FPV drone equipped with a camera, video and audio transmitter, ELRS reciever, and X frame. Embedded IMU and gyro Includes custom claw attachment which can be controlled remotely.",
    technologies: ["Custom Electrical Circuits", "Embedded C++", "Mechanical Design", "Custom CAD Modeling"],
    features: [
      "Reliable electrical connections",
      "Long-range control and data broadcasting",
      "Custom claw attachment",
      "Larger size, power, and stability",
      "First Person POV capabilities"
    ],
    fitImage: false
  },
  {
    slug: "basket-bot",
    title: "VEX Basket Bot",
    description: "Specializes in hoarding balls",
    normalImage: "/basket-bot.png",
    links: [{
      link: "https://versyn.vercel.app/",
      linkMessage: "Meet the Team",
      label: "team site"
    }],
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
    fitImage: false
  },
  {
    slug: "s-bot",
    title: "VEX S Bot",
    description: "Utilizes an S-shaped intake with double descoring",
    normalImage: "/S-bot.png",
    links: [{
      link: "https://versyn.vercel.app/",
      linkMessage: "Meet the Team",
      label: "team site"
    }],
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
    fitImage: false
  },
  {
    slug: "ramp-bot",
    title: "VEX Ramp Bot",
    description: "Utilizes a direct ramp intake",
    normalImage: "/direct-intake-bot.JPG",
    links: [
      {
        link: "https://versyn.vercel.app/",
        linkMessage: "Meet the Team",
        label: "team site"
      }
    ],
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
    fitImage: false
  },
];