import {
  FaRobot,
  FaCloud,
  FaCode,
  FaLayerGroup,
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
  SiPostgresql,
  SiRedis,
  SiDocker,
  SiKubernetes,
  SiTerraform,
  SiTypescript,
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
    title: "Frontend Development",
    description:
      "Building modern web applications using React, Next.js, and TypeScript with a focus on performance, accessibility, and clean architecture.",
  },
  {
    icon: FaServer,
    title: "Backend Development",
    description:
      "Developing scalable backend systems using Node.js, NestJS, and Python. Experienced in microservices architecture and API design.",
  },
  {
    icon: FaCloud,
    title: "Cloud Infrastructure",
    description:
      "Expertise in AWS services including S3, SQS, EC2. Implementing efficient cloud infrastructure for scalable applications.",
  },
  {
    icon: FaDatabase,
    title: "Database Management",
    description:
      "Proficient in both SQL and NoSQL databases. Experience with MongoDB, PostgreSQL, and Redis for various applications.",
  },
  {
    icon: FaLayerGroup,
    title: "System Architecture",
    description:
      "Designing scalable distributed systems with a focus on performance, reliability, and maintainability.",
  },
  {
    icon: FaTools,
    title: "DevOps Practices",
    description:
      "Skilled in CI/CD pipelines, containerization with Docker, orchestration with Kubernetes, and Infrastructure as Code using Terraform.",
  },
  {
    icon: FaRobot,
    title: "AI & Machine Learning",
    description:
      "Integrating AI/ML models into applications. Developing intelligent features for enhanced user experiences.",
  },
];

const skillsTools: SkillIconProps[] = [
  { icon: FaReact, label: "React" },
  
  { icon: SiNextdotjs, label: "Next.js" },
  { icon: SiNestjs, label: "Nest.js" },
  { icon: SiPython, label: "Python" },
  { icon: SiNodedotjs, label: "Node.js" },
  { icon: SiTypescript, label: "TypeScript" },
  { icon: VscVscode, label: "Vscode" },
  { icon: SiAmazon, label: "AWS" },
  // { icon: SiMongodb, label: "MongoDB" },
  // { icon: SiPostgresql, label: "PostgreSQL" },
  // { icon: SiRedis, label: "Redis" },
  // { icon: SiDocker, label: "Docker" },
  // { icon: SiKubernetes, label: "Kubernetes" },
  // { icon: SiTerraform, label: "Terraform" },
  { icon: SiGit, label: "Git" },
  
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
                    <span className="font-semibold text-h2">Anshul Sharma</span>, a
                    Software Development Engineer with a unique background in
                    Biomedical Engineering. Currently, I&apos;m focused on building scalable backend
                    systems while leveraging my engineering foundation to bring a systematic approach
                    to software development.
                  </p>
                  <p className="mt-4 leading-relaxed text-h1">
                    I have interned in development with Node.js,
                    React, and generative AI. My experience includes developing video processing
                    pipelines, implementing microservices architecture, and optimizing
                    applications for large-scale use.
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
                    As a Software Engineer, I strive to build robust and scalable systems
                    that solve real-world problems. My focus is on creating efficient,
                    maintainable applications using modern technologies and best practices
                    in software development.
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
