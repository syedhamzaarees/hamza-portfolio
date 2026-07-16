import type { Metadata } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import ScrollProgress from "@/components/ScrollProgress";
import CursorGlow from "@/components/CursorGlow";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  weight: ["500", "600", "700"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "600"],
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  weight: ["400", "500"],
});

const siteUrl = "https://hamza-portfolio-fs6t.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Syed Hamza Arees | DevOps & DevSecOps Engineer",
  description:
    "Portfolio of Syed Hamza Arees, a security-first DevOps / DevSecOps engineer working across Linux administration, CI/CD automation, AWS, Kubernetes and Zero Trust / Post-Quantum Cryptography research.",
  keywords: [
    "DevOps Engineer",
    "DevSecOps",
    "Cloud Security Engineer",
    "AWS",
    "Linux Administration",
    "Docker",
    "Kubernetes",
    "Jenkins",
    "Zero Trust Architecture",
    "Post-Quantum Cryptography",
    "Syed Hamza Arees",
  ],
  authors: [{ name: "Syed Hamza Arees" }],
  openGraph: {
    title: "Syed Hamza Arees | DevOps & DevSecOps Engineer",
    description:
      "Security-first DevOps / DevSecOps engineer specializing in Linux, AWS, CI/CD automation and cloud-native infrastructure.",
    url: siteUrl,
    siteName: "Syed Hamza Arees",
    images: ["/profile.jpg"],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Syed Hamza Arees | DevOps & DevSecOps Engineer",
    description:
      "Security-first DevOps / DevSecOps engineer specializing in Linux, AWS, CI/CD automation and cloud-native infrastructure.",
    images: ["/profile.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable}`}
      suppressHydrationWarning
    >
      <body className="font-body antialiased">
        <div className="aurora-bg" aria-hidden="true" />
        <div className="grid-bg" aria-hidden="true" />
        <CursorGlow />
        <ScrollProgress />
        {children}
      </body>
    </html>
  );
}
