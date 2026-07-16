export const personalInfo = {
  name: "Syed Hamza Arees",
  role: "Junior DevOps / DevSecOps Engineer",
  location: "Karachi, Pakistan",
  email: "syedahmedarees@gmail.com",
  phone: "+92 335 3347219",
  linkedin: "https://www.linkedin.com/in/syed-h-a39884288",
  github: "https://github.com/syedhamzaarees",
  resumeUrl: "/resume.pdf",
  heroTagline: "Building Secure, Scalable & Cloud-Native Infrastructure.",
  summary:
    "Security-first Junior DevOps / DevSecOps Engineer with internship-based, hands-on experience in Linux administration, CI/CD automation, cloud-native deployments and infrastructure hardening. I bridge modern cloud operations with cybersecurity research, including Zero Trust Architecture (ZTA) and Post-Quantum Cryptography (PQC) — studying lattice-based schemes like ML-KEM (Kyber) against the NIST FIPS 203 migration timeline. I automate enterprise workflows, harden Linux servers, and improve deployment efficiency with Jenkins, Docker and GitOps.",
};

export const roles = [
  "DevOps Engineer",
  "DevSecOps Engineer",
  "Cloud Security Engineer",
];

export type SkillCategory = {
  category: string;
  items: string[];
};

export const skillCategories: SkillCategory[] = [
  {
    category: "Linux Administration",
    items: [
      "RHEL",
      "CentOS",
      "Ubuntu",
      "SELinux",
      "AppArmor",
      "Systemd",
      "SSH Hardening",
      "LVM",
      "Firewalld",
      "IPTables",
      "Bash Scripting",
    ],
  },
  {
    category: "DevOps & CI/CD",
    items: [
      "Jenkins",
      "Groovy Shared Libraries",
      "Docker",
      "Docker Compose",
      "Nginx",
      "Git",
      "GitHub",
      "GitOps",
      "Agile",
    ],
  },
  {
    category: "Security",
    items: [
      "Zero Trust Architecture",
      "Post-Quantum Cryptography",
      "ML-KEM (Kyber)",
      "NIST FIPS 203",
      "Infrastructure Hardening",
    ],
  },
  {
    category: "Cloud & Monitoring",
    items: [
      "AWS",
      "Kubernetes (EKS)",
      "Terraform",
      "Ansible",
      "Prometheus",
      "Grafana",
      "ELK Stack",
      "ArgoCD",
    ],
  },
];

export type ExperienceItem = {
  title: string;
  company: string;
  duration: string;
  points: string[];
};

export const experience: ExperienceItem[] = [
  {
    title: "DevOps Engineering Intern",
    company: "Al Nafi Cloud (Remote) — Ontario, Canada",
    duration: "2025 – 2026 · 6 months",
    points: [
      "Designed and maintained Jenkins Pipeline-as-Code workflows using Groovy scripting for automated CI/CD delivery.",
      "Developed reusable Jenkins Shared Libraries to standardize deployment automation across multiple projects.",
      "Reduced deployment execution time by approximately 40% through pipeline optimization and automation.",
      "Integrated containerized workflows using Docker for consistent development and staging environments.",
      "Collaborated with development teams in Agile environments to improve release consistency.",
    ],
  },
  {
    title: "Linux System Administration Intern",
    company: "Al Nafi Cloud (Remote) — Ontario, Canada",
    duration: "2024 – 2025 · 6 months",
    points: [
      "Managed enterprise Linux servers across RHEL, CentOS and Ubuntu with a focus on security and stability.",
      "Performed Linux hardening using SSH key-based auth, firewall policies, SELinux controls and service restrictions.",
      "Maintained 99.9% server uptime through proactive monitoring, patch management and troubleshooting.",
      "Configured and managed LVM partitions, filesystem expansion and storage optimization.",
      "Automated administrative tasks with Bash scripting, cutting manual operational workload by 30%.",
    ],
  },
];

export type ProjectItem = {
  title: string;
  description: string;
  tech: string[];
  type: string;
};

export const projects: ProjectItem[] = [
  {
    title: "Zero Trust & Post-Quantum Cryptography Research",
    type: "Research Project",
    description:
      "Researched enterprise adoption of Post-Quantum Cryptography (PQC) and Zero Trust Architecture (ZTA) for cloud-native environments. Studied lattice-based schemes including ML-KEM (Kyber) against NIST FIPS 203 migration frameworks, and designed architectural blueprints for hybrid cloud with identity-centric access control and micro-segmentation.",
    tech: ["Zero Trust", "PQC", "ML-KEM", "NIST FIPS 203"],
  },
  {
    title: "Wanderlust — MERN on AWS EKS",
    type: "Team Collaboration",
    description:
      "Deployed an enterprise-grade MERN application on AWS EKS using GitOps workflows with ArgoCD for automated Kubernetes deployments. Integrated Prometheus and Grafana for observability and took part in peer code reviews and Agile planning.",
    tech: ["AWS EKS", "Kubernetes", "ArgoCD", "Prometheus", "Grafana"],
  },
  {
    title: "Flask · Nginx · MySQL — 3-Tier Application",
    type: "Personal Project",
    description:
      "Built and deployed a containerized 3-tier application with Flask, Nginx and MySQL, orchestrated via Docker Compose. Implemented an Nginx reverse proxy for secure routing and improved deployment portability.",
    tech: ["Flask", "Nginx", "MySQL", "Docker Compose"],
  },
  {
    title: "Jenkins Shared Libraries Automation",
    type: "Personal Project",
    description:
      "Engineered reusable Groovy Shared Libraries for Jenkins to standardize CI/CD logic and remove repetitive pipeline configuration across multiple projects.",
    tech: ["Jenkins", "Groovy", "CI/CD"],
  },
];

export const education = {
  degree: "Bachelor in Artificial Intelligence Operations (Level 6 – UK)",
  institution: "EduQual, United Kingdom",
  year: "Graduated 2025",
};

export const certifications = [
  {
    title: "DevOps Engineering Internship",
    issuer: "Al Nafi Cloud",
    year: "2026",
  },
  {
    title: "Linux System Administration Internship",
    issuer: "Al Nafi Cloud",
    year: "2025",
  },
  {
    title: "Bachelor in AI Operations (Level 6 – UK)",
    issuer: "EduQual, United Kingdom",
    year: "2025",
  },
];

export const coreCompetencies = [
  "DevOps & DevSecOps Mindset",
  "Analytical Thinking",
  "Team Synergy & Collaboration",
  "Agile Problem Solving",
  "Infrastructure Security",
  "CI/CD Automation",
  "Cloud-Native Architecture",
  "Security Research & Innovation",
  "Rapid Technology Acquisition",
];
