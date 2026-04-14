import type { ComponentType, SVGProps } from "react";
import Link from "next/link";
import { ModeToggle } from "@/components/mode-toggle";
import { CopyEmail } from "@/components/copy-email";
import { TypewriterEffect } from "@/components/typewriter";
import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import {
  SiAntdesign,
  SiExpress,
  SiFramer,
  SiGraphql,
  SiJavascript,
  SiMongodb,
  SiMysql,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiPrisma,
  SiReact,
  SiShadcnui,
  SiSocketdotio,
  SiTailwindcss,
  SiTypescript,
  SiVuedotjs,
} from "react-icons/si";
import { ArrowUpRight, PenTool } from "lucide-react";
import { FadeIn } from "@/components/page-transition";
import LetterSwapForward from "@/components/letter-swap-forward";
import { LocalTime } from "@/components/local-time";

const EXPERIENCES = [
  {
    role: "Frontend Engineer",
    company: "SparkMinds",
    period: "May 2023 — Apr 2025",
    description:
      "Focused on building frontend systems for e-wallet, blockchain, and crypto-related web applications. Developed user interfaces, optimized performance, and integrated wallet/payment features for various products.",
  },
  {
    role: "Frontend Engineer",
    company: "Shinhan DS",
    period: "Apr 2025 — Nov 2025",
    description:
      "Worked on the SOL Internet Banking web application for Shinhan Bank. Built secure, scalable frontend features and improved user experience for financial services.",
  },
  {
    role: "Fullstack Developer",
    company: "Upbase",
    period: "Nov 2025 — Present",
    description:
      "Developing fullstack solutions for e-commerce platforms and multi-channel sales management systems. Responsible for both frontend and backend features, including system architecture and business logic.",
  },
];

const PROJECTS = [
  {
    title: "Jiho! - Korean Food",
    type: "Brand Website",
    stack: "React / Next.js",
    href: "https://korean-f.vercel.app",
    description:
      "Official website for Jiho, a Korean food brand. Features modern UI design, responsive layouts, and optimized user experience for showcasing products and brand identity.",
  },
  {
    title: "City Land",
    type: "Brand Website",
    stack: "React / Next.js",
    href: "https://thelinkcity.vn/",
    description:
      "Real estate landing page presenting City Land’s property projects. Built with a clean, responsive design focused on visual presentation and user engagement.",
  },
  {
    title: "LHF",
    type: "Corporate Website",
    stack: "React / Next.js",
    href: "https://clone-nail.vercel.app/",
    description:
      "Official website for LHF Co., Ltd., highlighting services in nail salons, retail, and recruitment. Designed with a modern aesthetic, clear navigation, and professional branding.",
  },
  {
    title: "Zing MP3",
    type: "Music Streaming App",
    stack: "React",
    href: "https://clone-zingmp3-two.vercel.app/",
    description:
      "Music streaming web application with on-demand playback, playlists, and real-time charts. Focused on smooth audio experience, responsive UI, and content discoverability.",
  },
];

type TechItem = {
  name: string;
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  level: string;
  category: string;
  description: string;
};

const techStackData: Record<string, TechItem[]> = {
  Backend: [
    {
      name: "Node.js",
      icon: SiNodedotjs,
      level: "Expert",
      category: "Backend",
      description: "JavaScript runtime for server-side applications",
    },
    {
      name: "Express",
      icon: SiExpress,
      level: "Expert",
      category: "Backend",
      description: "Fast, minimalist web framework for Node.js",
    },
    {
      name: "GraphQL",
      icon: SiGraphql,
      level: "Intermediate",
      category: "Backend",
      description: "Query language for APIs",
    },
    {
      name: "Socket.io",
      icon: SiSocketdotio,
      level: "Intermediate",
      category: "Backend",
      description: "Real-time bidirectional event-based communication",
    },
  ],
  Frontend: [
    {
      name: "React",
      icon: SiReact,
      level: "Expert",
      category: "Frontend",
      description: "Building modern, interactive user interfaces",
    },
    {
      name: "Next.js",
      icon: SiNextdotjs,
      level: "Expert",
      category: "Frontend",
      description: "Full-stack React framework for production apps",
    },
    {
      name: "Vue.js",
      icon: SiVuedotjs,
      level: "Expert",
      category: "Frontend",
      description: "Progressive JavaScript framework for building UIs",
    },
    {
      name: "TypeScript",
      icon: SiTypescript,
      level: "Expert",
      category: "Frontend",
      description: "Type-safe JavaScript for scalable applications",
      yearsUsed: 2,
    },
    {
      name: "JavaScript",
      icon: SiJavascript,
      level: "Expert",
      category: "Frontend",
      description: "Core language for web development",
    },
    {
      name: "Tailwind CSS",
      icon: SiTailwindcss,
      level: "Expert",
      category: "Frontend",
      description: "Utility-first CSS framework for rapid UI development",
    },
    {
      name: "Shadcn",
      icon: SiShadcnui,
      level: "Expert",
      category: "Frontend",
      description: "Composable UI primitives built on Radix and Tailwind",
    },
    {
      name: "Framer Motion",
      icon: SiFramer,
      level: "Expert",
      category: "Frontend",
      description: "Production-ready motion library for React",
    },
    {
      name: "Ant design",
      icon: SiAntdesign,
      level: "Expert",
      category: "Frontend",
      description: "Enterprise React UI toolkit and design system",
    },
  ],
  Database: [
    {
      name: "PostgreSQL",
      icon: SiPostgresql,
      level: "Expert",
      category: "Database",
      description: "Advanced open-source relational database",
      yearsUsed: 1,
    },
    {
      name: "MongoDB",
      icon: SiMongodb,
      level: "Expert",
      category: "Database",
      description: "NoSQL document database",
      yearsUsed: 2,
    },
    {
      name: "MySQL",
      icon: SiMysql,
      level: "Intermediate",
      category: "Database",
      description: "Popular open-source relational database",
      yearsUsed: 1,
    },
    {
      name: "Prisma",
      icon: SiPrisma,
      level: "Expert",
      category: "Database",
      description: "Next-generation ORM for Node.js and TypeScript",
      yearsUsed: 1,
    },
  ],
};

export default function Home() {
  return (
    <main className="min-h-screen w-full px-6 pt-32 pb-8 md:pt-44 md:pb-16">
      <div className="max-w-[600px] mx-auto flex flex-col gap-10">
        {/* -- Header: Identity -- */}
        <FadeIn delay={0}>
          <header className="flex flex-col gap-0 select-none">
            <div className="flex flex-row items-center gap-0">
              <div className="flex flex-col gap-0.5">
                <h1
                  className="text-[20px] text-foreground font-semibold leading-none"
                  style={{
                    fontFamily: "var(--font-geist-pixel-square)",
                    WebkitFontSmoothing: "none",
                    MozOsxFontSmoothing: "unset",
                  }}
                >
                  <LetterSwapForward
                    label="Huy Dang"
                    className="cursor-default"
                  />
                </h1>
                <TypewriterEffect />
              </div>
            </div>

            <div className="flex flex-col gap-2 max-w-[50ch] mt-10">
              <p className="font-sans text-[14px] text-foreground leading-relaxed">
                I build things from zero. Focused on{" "}
                <span
                  className="highlight-sweep rounded-sm px-0.5"
                  style={{ animationDelay: "0.3s" }}
                >
                  polished web interfaces
                </span>{" "}
                and{" "}
                <span
                  className="highlight-sweep rounded-sm px-0.5"
                  style={{ animationDelay: "0.6s" }}
                >
                  performant systems
                </span>
                . If it&apos;s boring and reliable, it&apos;s good enough to
                ship.
              </p>

              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4 pt-1">
                <div className="flex items-center gap-3 text-muted-foreground">
                  <Link
                    aria-label="Github Profile"
                    href="https://github.com/songhuy304"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-foreground transition-colors"
                  >
                    <FaGithub size={18} />
                  </Link>
                  <Link
                    aria-label="X (Twitter) Profile"
                    href="https://x.com/songhuy304"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-foreground transition-colors"
                  >
                    <FaXTwitter size={18} />
                  </Link>
                  <Link
                    aria-label="LinkedIn Profile"
                    href="https://www.linkedin.com/in/huydang304/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-foreground transition-colors"
                  >
                    <FaLinkedin size={18} />
                  </Link>
                </div>

                <div className="hidden sm:block w-px h-4 bg-border"></div>

                <div className="flex items-center gap-4">
                  <CopyEmail />
                </div>
              </div>
            </div>
          </header>
        </FadeIn>

        {/* -- Main Content Stream -- */}
        <div className="flex flex-col gap-14">
          {/* 01. EXPERIENCE */}
          <FadeIn delay={0.1}>
            <div className="flex flex-col gap-2">
              <div className="font-mono-meta text-[11px] text-neutral-400 uppercase tracking-widest border-b border-border pb-1 w-full flex items-center gap-2">
                <span className="text-neutral-300 dark:text-neutral-600">
                  01
                </span>
                <span>Experience</span>
              </div>

              <div className="flex flex-col gap-1">
                {EXPERIENCES.map((exp, i) => (
                  <div
                    key={i}
                    className="group flex flex-col gap-1 border-b border-border/40 pb-3 mb-2 last:border-0 last:pb-0 last:mb-0"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="flex flex-col sm:flex-row sm:items-center sm:gap-2">
                          <span className="font-sans text-[14px] font-medium text-foreground">
                            {exp.role}
                          </span>
                          <span className="hidden sm:block text-neutral-400 text-xs">
                            /
                          </span>
                          <span className="font-sans text-[14px] text-muted-foreground">
                            {exp.company}
                          </span>
                        </div>
                      </div>
                      <span className="font-mono-meta text-[10px] text-neutral-400 flex items-center gap-1.5">
                        {exp.period.includes("Present") && (
                          <span className="pulse-dot" />
                        )}
                        {exp.period}
                      </span>
                    </div>
                    <p className="font-sans text-[14px] text-muted-foreground">
                      {exp.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>

          {/* 02. SELECTED WORK */}
          <FadeIn delay={0.2}>
            <div className="flex flex-col gap-2">
              <div className="font-mono-meta text-[11px] text-neutral-400 uppercase tracking-widest border-b border-border pb-1 w-full flex items-center gap-2">
                <span className="text-neutral-300 dark:text-neutral-600">
                  02
                </span>
                <span>Selected Work</span>
              </div>

              <div className="flex flex-col gap-1">
                {PROJECTS.map((project, i) => (
                  <Link
                    key={i}
                    href={project.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex flex-col gap-1 border-b border-border/40 pb-3 mb-2 last:border-0 last:pb-0 last:mb-0"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="flex flex-col sm:flex-row sm:items-center sm:gap-2">
                          <span className="font-sans text-[14px] font-medium text-foreground group-hover:text-muted-foreground transition-colors">
                            {project.title}
                          </span>
                          <span className="hidden sm:block text-neutral-400 text-xs">
                            /
                          </span>
                          <span className="font-sans text-[14px] text-muted-foreground group-hover:text-foreground transition-colors">
                            {project.type}
                          </span>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="font-mono-meta text-[10px] text-neutral-400 group-hover:text-foreground">
                          {project.stack}
                        </span>
                        <ArrowUpRight className="w-3.5 h-3.5 text-neutral-300 group-hover:text-foreground group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                      </div>
                    </div>
                    <p className="font-sans text-[14px] text-muted-foreground">
                      {project.description}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          </FadeIn>

          {/* 03. SKILLS */}
          <FadeIn delay={0.3}>
            <div className="flex flex-col gap-2">
              <div className="font-mono-meta text-[11px] text-neutral-400 uppercase tracking-widest border-b border-border pb-1 w-full flex items-center gap-2">
                <span className="text-neutral-300 dark:text-neutral-600">
                  03
                </span>
                <span>Skills</span>
              </div>

              <div className="flex flex-col gap-6">
                {Object.entries(techStackData).map(([category, items]) => (
                  <div key={category} className="flex flex-col gap-2">
                    <span className="font-mono-meta text-[10px] text-neutral-500 uppercase tracking-wider">
                      {category}
                    </span>
                    <div className="flex flex-col gap-0">
                      {items.map((item) => {
                        const SkillIcon = item.icon;
                        return (
                        <div
                          key={item.name}
                          className="group flex gap-3 border-b border-border/40 py-2.5 last:border-0"
                        >
                          <SkillIcon
                            className="mt-0.5 size-[22px] shrink-0 text-neutral-500 dark:text-neutral-400"
                            aria-hidden
                          />
                          <div className="flex min-w-0 flex-1 flex-col gap-0.5">
                              <span className="font-sans text-[14px] font-medium text-foreground">
                                {item.name}
                              </span>
                          </div>
                        </div>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>

          {/* 04. CERTIFICATE */}
          <FadeIn delay={0.35}>
            <div className="flex flex-col gap-2">
              <div className="font-mono-meta text-[11px] text-neutral-400 uppercase tracking-widest border-b border-border pb-1 w-full flex items-center gap-2">
                <span className="text-neutral-300 dark:text-neutral-600">
                  04
                </span>
                <span>Certificate</span>
              </div>

              <div className="flex flex-col gap-0.5">
                <div className="group flex items-start justify-between gap-3 border-b border-border/40 py-2.5 last:border-0">
                  <div className="flex min-w-0 items-start gap-3">
                    <SiJavascript
                      className="mt-0.5 size-[22px] shrink-0 text-neutral-500 dark:text-neutral-400"
                      aria-hidden
                    />
                    <span className="font-sans text-[14px] font-medium leading-snug text-foreground">
                      Master JavaScript from Basics to Advanced
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* 05. WRITING */}
          <FadeIn delay={0.4}>
            <div className="flex flex-col gap-2">
              <div className="font-mono-meta text-[11px] text-neutral-400 uppercase tracking-widest border-b border-border pb-1 w-full flex items-center gap-2">
                <span className="text-neutral-300 dark:text-neutral-600">
                  05
                </span>
                <span>Writing</span>
              </div>

              <div className="flex flex-col gap-0.5">
                <div className="group flex items-center justify-between py-1 border-b border-border/40 last:border-0 cursor-not-allowed select-none">
                  <div className="flex items-center gap-3">
                    <PenTool className="w-4 h-4 text-neutral-400" />
                    <span className="font-sans text-[14px] font-medium text-foreground group-hover:text-muted-foreground transition-colors">
                      Trust me, I&apos;ll write something soon
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="font-mono-meta text-[10px] text-neutral-400 group-hover:text-foreground">
                      Soon™
                    </span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-neutral-300 group-hover:text-foreground group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>

        {/* -- Footer -- */}
        <FadeIn delay={0.5}>
          <footer className="pt-10 flex flex-row items-center justify-between gap-4 font-sans text-[14px] opacity-60">
            <div className="flex items-center gap-3">
              <span className="font-mono-meta text-xs text-neutral-400">
                © {new Date().getFullYear()} Huy Dang
              </span>
              <span className="text-neutral-300 dark:text-neutral-700 text-xs">
                ·
              </span>
              <LocalTime />
            </div>
            <ModeToggle />
          </footer>
        </FadeIn>
      </div>
    </main>
  );
}
