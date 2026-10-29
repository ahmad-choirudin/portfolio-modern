export type ExperienceItem = {
  period: string;
  title: string;
  org: string;
  text: string;
  tags?: string[];
};

export const experience: ExperienceItem[] = [
  {
    period: "Jun 2024 – Present",
    title: "AI Data Operations",
    org: "Evaluation, annotation & training",
    text: "Evaluating, annotating, and training AI and LLM outputs across language, coding, and content-quality projects.",
    tags: ["Outlier", "RWS", "TELUS Digital", "Mindrift", "Alignerr", "Meridial", "CrowdGen", "Curvia AI"],
  },
  {
    period: "May 2023 – Present",
    title: "Frontend Developer",
    org: "Freelance",
    text: "Building and maintaining personal and freelance web projects with a focus on responsive frontend development and Web3-related interfaces.",
  },
  {
    period: "Apr 2020 – Present",
    title: "Web3 / Crypto Researcher",
    org: "Freelance · Self-Employed",
    text: "Independent research across Web3, blockchain, cryptocurrency, DeFi, token ecosystems, and emerging blockchain projects.",
  },
  {
    period: "Mar 2020 – Present",
    title: "Web3 Content Writer & Community Moderator",
    org: "Freelance · Self-Employed",
    text: "Creating Web3-focused content and supporting online communities across crypto, blockchain, DeFi, and airdrops.",
  },
  {
    period: "2011 – 2020",
    title: "Earlier career: Sales & Retail",
    org: "Alfamart · Lintas Semesta · Arta Boga Cemerlang · RSR Brew",
    text: "Field sales, merchandising, and retail operations across Jakarta and East Java.",
  },
];
