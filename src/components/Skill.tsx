"use client";
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  SiTypescript,
  SiGit,
  SiNextdotjs,
  SiNestjs,
  SiPython,
  SiNodedotjs,
  SiAmazon,
  SiDocker,
  SiMongodb,
  SiJavascript,
} from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { VscVscode } from "react-icons/vsc";

interface SkillIconProps {
  icon: React.ElementType;
  label: string;
  category: string;
}

const skillsData: SkillIconProps[] = [
  { icon: FaReact, label: "React", category: "Frontend" },
  { icon: SiNextdotjs, label: "Next.js", category: "Frontend" },
  { icon: SiNestjs, label: "Nest.js", category: "Backend" },
  { icon: SiNodedotjs, label: "Node.js", category: "Backend" },
  { icon: SiPython, label: "Python", category: "Languages" },
  { icon: SiTypescript, label: "TypeScript", category: "Languages" },
  { icon: SiJavascript, label: "JavaScript", category: "Languages" },
  { icon: SiAmazon, label: "AWS", category: "Cloud" },
  { icon: SiMongodb, label: "MongoDB", category: "Database" },
  { icon: SiDocker, label: "Docker", category: "DevOps" },
  { icon: SiGit, label: "Git", category: "Tools" },
  { icon: VscVscode, label: "VS Code", category: "Tools" },
];

const SkillIcon = ({ icon: Icon, label }: Omit<SkillIconProps, 'category'>) => (
  <div className="flex flex-col items-center gap-2 p-4 transition-transform duration-300 hover:transform hover:scale-110">
    <div className="p-4 rounded-lg bg-h1/10">
      <Icon className="w-8 h-8 text-h2" />
    </div>
    <span className="text-sm font-medium text-h1">{label}</span>
  </div>
);

export default function SkillsPage() {
  const categories = Array.from(new Set(skillsData.map(skill => skill.category)));

  return (
    <div className="relative pt-32 min-h-screen">
      <div className="fixed inset-0 w-full h-full bg-gradient-to-b opacity-80 from-bc via-bc/90 to-bc" />
      <div className="fixed inset-0 w-full h-full bg-[radial-gradient(circle_at_center,rgba(96,165,250,0.1)_0%,transparent_65%)]" />

      <div className="relative z-1">
        <section className="py-24 bg-none font-montserrat">
          <div className="container px-4 mx-auto">
            <div className="mx-auto max-w-4xl">
              <h1 className="mb-16 text-5xl font-bold tracking-tight text-center">
                <span className="text-h1">Skills</span>{" "}
                <span className="text-h2">&</span>{" "}
                <span className="text-h1">Technologies</span>
              </h1>

              <div className="space-y-16">
                {categories.map((category) => (
                  <div key={category} className="space-y-8">
                    <h2 className="text-2xl font-bold text-h1">
                      {category}
                    </h2>
                    <Card className="backdrop-blur-lg bg-cc/5 border-h1/20 hover:border-cg hover:border-2">
                      <CardContent className="p-6">
                        <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4">
                          {skillsData
                            .filter(skill => skill.category === category)
                            .map((skill, index) => (
                              <SkillIcon key={index} icon={skill.icon} label={skill.label} />
                            ))}
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}