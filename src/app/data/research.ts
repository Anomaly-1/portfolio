export interface ResearchItem {
  title: string;
  description: string;
  links: { label: string; url: string }[];
  embedUrl?: string;
}

export const research: ResearchItem[] = [
  {
    title: "Efficient Neural Network Pruning",
    description: "A study on reducing neural network size while maintaining accuracy. Includes code and Colab notebook.",
    links: [
      { label: "Paper PDF", url: "/resume.pdf" },
      { label: "Colab Notebook", url: "https://colab.research.google.com/" },
      { label: "GitHub", url: "https://github.com/" }
    ],
    embedUrl: "/resume.pdf"
  },
  {
    title: "Graph-based Pathfinding Algorithms",
    description: "Exploring A* and Dijkstra's algorithms for real-world navigation problems. Includes interactive demo.",
    links: [
      { label: "Paper PDF", url: "/resume.pdf" },
      { label: "Demo", url: "https://pathfinding-visualizer.com/" }
    ],
    embedUrl: undefined
  },
  {
    title: "Transfer Learning for Image Classification",
    description: "How transfer learning boosts accuracy on small datasets. Includes Jupyter notebook and code.",
    links: [
      { label: "Paper PDF", url: "/resume.pdf" },
      { label: "Jupyter Notebook", url: "https://nbviewer.org/" },
      { label: "GitHub", url: "https://github.com/" }
    ],
    embedUrl: undefined
  }
];
