export interface ResearchItem {
  title: string;
  description: string;
  links: { label: string; url: string }[];
  embedUrl?: string;
  status?: 'completed' | 'wip';
}

export const research: ResearchItem[] = [
  {
    title: "Viability of Spiking Neural Networks (SNNs) in Dynamic Environments",
    description: "Work in Progress: Investigating whether Spiking Neural Networks can match the accuracy of conventional Deep Q-Networks (DQNs) in dynamic, time-varying environments. Exploring neuromorphic computing approaches for reinforcement learning tasks.",
    links: [
      { label: "GitHub Repository", url: "https://github.com/Anomaly-1/snn-dqn-viability" },
      { label: "Initial Findings", url: "/snn-dqn-paper.pdf" }
    ],
    embedUrl: undefined,
    status: 'wip'
  },
  {
    title: "Quantum-Classical Hybrid Model for Fraud Detection",
    description: "Work in Progress: Evaluating the performance of a quantum-classical hybrid model against traditional classical benchmarks for fraud detection in financial transactions. Combining quantum algorithms with classical machine learning for enhanced anomaly detection.",
    links: [
      { label: "GitHub Repository", url: "https://github.com/Anomaly-1/quantum-fraud-detection" },
      { label: "Preliminary Results", url: "/quantum-fraud-paper.pdf" }
    ],
    embedUrl: undefined,
    status: 'wip'
  }
];
