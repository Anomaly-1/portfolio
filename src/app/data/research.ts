export interface ResearchItem {
  title: string;
  description: string;
  links: { label: string; url: string }[];
  embedUrl?: string;
  status?: 'completed' | 'wip';
}

export const research: ResearchItem[] = [
  {
    "title": "Short-Term Synaptic Plasticity in SNNs for Energy-Efficient Adaptation to Non-Stationary Environments",
    "description": "Work in Progress: Investigating whether integrating Short-Term Synaptic Plasticity (STP) enables Spiking Neural Networks (SNNs) to overcome partial observability and adapt faster to shifting environmental dynamics under strict spike-budget constraints. Benchmarking STP-enhanced SNNs against conventional DQNs and baseline SNNs in dynamic reinforcement learning tasks.",
    "links": [
      { "label": "GitHub Repository", "url": "https://github.com/Anomaly-1/snn-dqn-viability" },
      { "label": "Research Paper (WIP)", "url": "/stp-snn-adaptation-paper.pdf" }
    ],
    "embedUrl": undefined,
    "status": "wip"
  },
  // {
  //   title: "Quantum-Classical Hybrid Model for Fraud Detection",
  //   description: "Work in Progress: Evaluating the performance of a quantum-classical hybrid model against traditional classical benchmarks for fraud detection in financial transactions. Combining quantum algorithms with classical machine learning for enhanced anomaly detection.",
  //   links: [
  //     { label: "GitHub Repository", url: "https://github.com/Anomaly-1/quantum-fraud-detection" },
  //     { label: "Preliminary Results", url: "/quantum-fraud-paper.pdf" }
  //   ],
  //   embedUrl: undefined,
  //   status: 'wip'
  // }
];
