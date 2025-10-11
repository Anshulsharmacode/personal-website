import {
  FaRobot,
  FaCloud,
  FaCode,
  FaTools,
  FaServer,
  FaDatabase,
} from "react-icons/fa";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import {
  SiTypescript,
  SiGit,
  SiNextdotjs,
  SiNestjs,
  SiPython,
  SiNodedotjs,
  SiAmazon,
  SiMongodb,
  SiJavascript,
} from "react-icons/si";
import { FaReact } from "react-icons/fa";
import React from "react";
import { VscVscode } from "react-icons/vsc";

interface ExpertiseCardProps {
  icon: React.ElementType;
  title: string;
  description: string;
}

interface SkillIconProps {
  icon: React.ElementType;
  label: string;
}

const expertiseCards: ExpertiseCardProps[] = [
  {
    icon: FaCode,
    title: "Full Stack",
    description: "Building modern web apps with React, Next.js and Node.js",
  },
  {
    icon: FaRobot,
    title: "AI/ML (Basics)",
    description: "Integrating generative AI and ML solutions into applications",
  },
  {
    icon: FaServer,
    title: "API Integration",
    description:
      "Utilizing RESTful APIs for seamless data communication and integration",
  },
  {
    icon: FaCloud,
    title: "Cloud (Basic)",
    description: "AWS services and cloud infrastructure deployment",
  },
  {
    icon: FaDatabase,
    title: "Database",
    description:
      "Database design, system architecture and performance optimization",
  },
  {
    icon: FaTools,
    title: "Tools",
    description: "Git, VS Code, testing frameworks and agile practices",
  },
];

const skillsTools: SkillIconProps[] = [
  { icon: FaReact, label: "React" },
  { icon: SiNextdotjs, label: "Next.js" },
  { icon: SiNestjs, label: "Nest.js" },

  { icon: SiNodedotjs, label: "Node.js" },
  { icon: SiPython, label: "Python" },
  { icon: SiTypescript, label: "TypeScript" },
  { icon: SiJavascript, label: "JavaScript" },
  { icon: SiAmazon, label: "AWS" },
  { icon: VscVscode, label: "VS Code" },
  { icon: SiGit, label: "Git" },

  { icon: SiMongodb, label: "MongoDB" },
  // {  },
];

const ExpertiseCard = ({
  icon: Icon,
  title,
  description,
}: ExpertiseCardProps) => (
  <Card className="backdrop-blur-lg bg-cc/5 border-h1/20 hover:border-cg hover:border-2 hover:bg-gradient-to-br from-hcf/5 to-hcf/5">
    <CardHeader>
      <div className="flex gap-4 items-center">
        <div className="p-3 rounded-full bg-h1/10 text-h2">
          <Icon className="w-8 h-8" />
        </div>
        <div className="space-y-1">
          <h3 className="text-xl font-semibold text-h1">{title}</h3>
        </div>
      </div>
    </CardHeader>
    <CardContent className="text-h1">{description}</CardContent>
  </Card>
);

const SkillIcon = ({ icon: Icon, label }: SkillIconProps) => {
  if (!Icon) return null;
  return (
    <div className="flex flex-col gap-2 items-center">
      <Icon className="w-12 h-12 text-h2" />
      <span className="text-sm text-h1">{label}</span>
    </div>
  );
};

export default function About() {
  return (
    <div className="relative pt-32 min-h-screen">
      <div className="fixed inset-0 w-full h-full bg-gradient-to-b opacity-80 from-bc via-bc/90 to-bc" />
      <div className="fixed inset-0 w-full h-full bg-[radial-gradient(circle_at_center,rgba(96,165,250,0.1)_0%,transparent_65%)]" />

      <div className="relative z-1">
        <section className="py-24 bg-none font-montserrat">
          <div className="container px-4 mx-auto">
            <div className="mx-auto max-w-4xl">
              <h1 className="mb-16 text-5xl font-bold tracking-tight text-center">
                <span className="text-h1">About</span>{" "}
                <span className="text-h2">Me</span>
              </h1>

              <Card className="mb-20 backdrop-blur-lg bg-cc/5 border-h1/20 hover:border-cg hover:border-2 hover:bg-gradient-to-br from-hcf/5 to-hcf/5">
                <CardContent className="p-8">
                  <p className="leading-relaxed text-h1">
                    Hi! I&apos;m{" "}
                    <span className="font-semibold text-h2">Anshul Sharma</span>
                    , a Software Development Engineer with a unique background
                    in Biomedical Engineering. Currently, I&apos;m focused on
                    building scalable Frontend applications
                    {/* systems while leveraging my
                    engineering foundation to bring a systematic approach to
                    software development. */}
                  </p>
                  <p className="mt-4 leading-relaxed text-h1">
                    I have interned in development using Node.js, React, and
                    generative AI. My experience includes building responsive
                    user interfaces, working with microservices, and optimizing
                    frontend performance for scalability.
                  </p>
                </CardContent>
              </Card>

              <div className="space-y-20">
                <h2 className="mb-16 text-3xl font-bold tracking-tight">
                  <span className="text-h1">Technical</span>{" "}
                  <span className="text-h2">Expertise</span>
                </h2>
                <div className="grid grid-cols-1 gap-8 sm:gap-10 md:grid-cols-2 lg:grid-cols-3">
                  {expertiseCards.map((card, index) => (
                    <ExpertiseCard key={index} {...card} />
                  ))}
                </div>
              </div>

              <div className="mt-32 space-y-8">
                <h2 className="text-3xl font-bold tracking-tight text-h1">
                  Vision
                </h2>
                <Card className="backdrop-blur-lg bg-cc/5 border-h1/20 hover:border-cg hover:border-2 hover:bg-gradient-to-br from-hcf/5 to-hcf/5">
                  <CardContent className="p-8 text-h1">
                    As a Software Engineer, I strive to build robust and
                    scalable systems that solve real-world problems. My focus is
                    on creating efficient, maintainable applications using
                    modern technologies and best practices in software
                    development.
                  </CardContent>
                </Card>
              </div>

              <div className="mt-32 space-y-8">
                <h2 className="mb-16 text-3xl font-bold tracking-tight">
                  <span className="text-h1">Skills</span>{" "}
                  <span className="text-h2">& Tools</span>
                </h2>
                <Card className="backdrop-blur-lg bg-cc/5 border-h1/20 hover:border-cg hover:border-2 hover:bg-gradient-to-br from-hcf/5 to-hcf/5">
                  <CardContent className="p-8">
                    <div className="grid grid-cols-3 gap-8 md:grid-cols-4 lg:grid-cols-6">
                      {skillsTools.map((skill, index) => (
                        <SkillIcon key={index} {...skill} />
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
