"use client";

import React from "react";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { FaCode, FaRobot, FaMap } from "react-icons/fa";

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
                Software Development Engineering Intern at VideoAIditor.com and a final year Biomedical Engineering student. I&apos;m passionate about leveraging technology to build innovative solutions.
              </p>
              <p className="text-lg font-light leading-relaxed text-dm">
                Currently, I&apos;m working on scalable backend systems and video processing pipelines at VideoAIditor.com, where I&apos;ve gained hands-on experience with AWS infrastructure, Node.js, and Python. I&apos;m constantly learning and expanding my skills in modern web development and cloud technologies.
              </p>
            </CardContent>
          </Card>

          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                icon: <FaCode className="w-8 h-8" />,
                title: "Backend Development",
                description:
                  "Experience with Node.js, NestJS, and Python. Building scalable systems with AWS infrastructure and microservices architecture.",
              },
              {
                icon: <FaMap className="w-8 h-8" />,
                title: "Cloud & DevOps",
                description:
                  "Proficient in AWS services including S3, SQS, and implementing efficient video processing pipelines at scale.",
              },
              {
                icon: <FaRobot className="w-8 h-8" />,
                title: "Full-Stack Development",
                description:
                  "Building modern web applications using React, Next.js, and TypeScript with focus on performance and user experience.",
              },
            ].map((skill, index) => (
              <Card
                key={index}
                className="h-full backdrop-blur-lg bg-cc/5 border-h1/20 hover:border-cg hover:border-2 hover:bg-gradient-to-br from-hcf/5 to-hcf/5"
              >
                <CardHeader>
                  <div className="flex flex-col gap-4 items-center">
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
