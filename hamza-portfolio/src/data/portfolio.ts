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
  {
    category: "Deployment & Automation",
    items: [
      "GitHub → Vercel CI/CD",
      "Continuous Deployment",
      "EmailJS Serverless Integration",
      "AI-Assisted Development",
      "Next.js / TypeScript",
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
  link?: string;
};

export const projects: ProjectItem[] = [
  {
    title: "Wanderlust — MERN on AWS EKS",
    type: "End-to-End DevSecOps Pipeline",
    description:
      "Deployed a three-tier MERN application on AWS EKS through a full DevSecOps pipeline: Jenkins CI, OWASP dependency scanning, SonarQube quality gates, Trivy filesystem scans, ArgoCD GitOps delivery, and Prometheus/Grafana monitoring via Helm. Configured Jenkins master/worker nodes and automated build-to-deploy on every push.",
    tech: ["AWS EKS", "Jenkins", "ArgoCD", "SonarQube", "Trivy", "Prometheus", "Grafana"],
    link: "https://github.com/syedhamzaarees/Wanderlust-Mega-Project",
  },
  {
    title: "Flask-Nginx-MySQL Automation",
    type: "CI/CD Automation",
    description:
      "Containerized a Flask + Nginx + MySQL stack and fully automated its delivery with a Jenkins pipeline triggered by GitHub Webhooks — builds Docker images, pushes to Docker Hub, and redeploys via Docker Compose on every commit, using reusable Jenkins Shared Libraries.",
    tech: ["Jenkins", "Docker", "GitHub Webhooks", "Flask", "Nginx", "MySQL"],
    link: "https://github.com/syedhamzaarees/Flask-Nginx-MySQL-Automation",
  },
  {
    title: "Flask · Nginx · MySQL — 3-Tier Application",
    type: "Containerized Web App",
    description:
      "Built and deployed a containerized 3-tier application with Flask, Nginx and MySQL, orchestrated via Docker Compose. Implemented an Nginx reverse proxy for secure routing and persistent MySQL storage using Docker volumes.",
    tech: ["Flask", "Nginx", "MySQL", "Docker Compose"],
    link: "https://github.com/syedhamzaarees/Flask-based-web-application-with-Nginx-reverse-proxy-and-MySQL-database-fully-containerized-using-D",
  },
  {
    title: "Jenkins Shared Libraries",
    type: "DevOps Tooling",
    description:
      "Engineered reusable Groovy Shared Libraries for Jenkins to standardize build, test, deploy and notification steps across pipelines — following DRY principles and compatible with both Declarative and Scripted pipeline syntax.",
    tech: ["Jenkins", "Groovy", "CI/CD"],
    link: "https://github.com/syedhamzaarees/Jenkins-Shared-Libraries",
  },
  {
    title: "Docker + GitHub Lab",
    type: "Containerization",
    description:
      "A focused Flask application containerized with Docker, built as a hands-on lab for Dockerfile authoring, image builds and container networking fundamentals.",
    tech: ["Docker", "Flask"],
    link: "https://github.com/syedhamzaarees/docker-github-lab",
  },
  {
    title: "Zero Trust & Post-Quantum Cryptography Research",
    type: "Research Project",
    description:
      "Researched enterprise adoption of Post-Quantum Cryptography (PQC) and Zero Trust Architecture (ZTA) for cloud-native environments. Studied lattice-based schemes including ML-KEM (Kyber) against NIST FIPS 203 migration frameworks, and designed architectural blueprints for hybrid cloud with identity-centric access control and micro-segmentation.",
    tech: ["Zero Trust", "PQC", "ML-KEM", "NIST FIPS 203"],
  },
  {
    title: "This Portfolio — AI-Assisted Build & Deploy Pipeline",
    type: "DevOps Integration",
    description:
      "Designed and shipped this portfolio itself as a DevOps exercise: a Next.js/TypeScript/Tailwind site built with AI-assisted development (Claude), version-controlled on GitHub, and wired to Vercel for continuous deployment — every push to main automatically rebuilds and redeploys the live site. Contact form integrated with EmailJS for serverless email delivery.",
    tech: ["Next.js", "GitHub", "Vercel CI/CD", "EmailJS", "AI-Assisted Development"],
    link: "https://github.com/syedhamzaarees/hamza-portfolio",
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
