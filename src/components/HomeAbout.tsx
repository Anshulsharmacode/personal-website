"use client";

import React from "react";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { FaCode, FaRobot, FaBrain } from "react-icons/fa";

const AboutMe = () => {
  return (
    <section className={`py-24 bg-none font-montserrat`}>
      <div className="container px-4 mx-auto">
        <div className="mx-auto max-w-4xl">
          <h1 className="mb-16 text-5xl font-bold tracking-tight text-center">
            <span className="text-h1">About</span>{" "}
            <span className="text-transparent bg-clip-text bg-h2">Me</span>
          </h1>

          <Card className="mb-20 backdrop-blur-lg bg-cc/5 border-h1/20 hover:border-cg hover:border-2 hover:bg-gradient-to-br from-hcf/5 to-hcf/5">
            <CardContent className="p-8 md:p-10">
              <p className="mb-8 text-lg font-light leading-relaxed text-dm">
                Hi! I&apos;m{" "}
                <span className="font-medium text-h2">Anshul Sharma</span>, a
                Software Engineer with a unique background in Biomedical
                Engineering. I&apos;m passionate about leveraging technology to
                build innovative solutions, particularly in the realm of
                generative AI and full-stack development.
              </p>
              <p className="text-lg font-light leading-relaxed text-dm">
                Currently utilizing my skills in AWS Services, Node.js, Python,
                and leveraging technologies like RAG (Retrieval-Augmented
                Generation) and LLM (Large Language Models). I am dedicated to
                continuous learning and expanding my expertise in modern web
                development.
              </p>
            </CardContent>
          </Card>

          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                icon: <FaCode className="w-8 h-8" />,
                title: "Generative AI Development",
                description:
                  "Building innovative solutions using generative AI technologies, focusing on user-centric design.",
              },
              // {
              //   icon: <FaBrain className="w-8 h-8" />,
              //   title: "Machine Learning",
              //   description:
              //     "Knowledge of basic ML concepts and tools like regression, classification, and working with models using Python.",
              // },
              {
                icon: <FaBrain className="w-8 h-8" />,
                title: "Machine Learning (Basics)",
                description:
                  "Knowledge of basic ML concepts and tools like regression, classification, and working with models using Python.",
              },

              {
                icon: <FaRobot className="w-8 h-8" />,
                title: "Full-Stack Development",
                description:
                  "Creating modern web applications using React, Next.js, and TypeScript with a focus on performance and user experience.",
              },
            ].map((skill, index) => (
              <Card
                key={index}
                className="h-full backdrop-blur-lg bg-cc/5 border-h1/20   hover:bg-gradient-to-br from-hcf/5 to-hcf/5"
              >
                <CardHeader>
                  <div className="flex flex-col gap-4 items-center text-center">
                    <div className="p-4 bg-gradient-to-br rounded-full from-h2/20 to-h1/20 text-h2">
                      {skill.icon}
                    </div>
                    <h2 className="text-xl font-semibold tracking-tight text-h1">
                      {skill.title}
                    </h2>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="font-light leading-relaxed text-center text-dm/80">
                    {skill.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
