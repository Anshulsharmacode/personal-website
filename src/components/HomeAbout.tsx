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
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-h2 to-h1">
            </span>
          </h1>

          <Card className="mb-20 backdrop-blur-lg transition-all duration-300 bg-cc/5 border-h1/20 hover:border-h1/30">
            <CardContent className="p-8 md:p-10">
              <p className="mb-8 text-lg font-light leading-relaxed text-dm">
                Hi! I&apos;m{" "}
                <span className="font-medium text-h1">Anshul Sharma</span>, a
                Software Developer with a unique background in Biomedical Engineering. 
                I combine my technical knowledge in full-stack development with my understanding 
                of healthcare systems to create innovative digital solutions.
              </p>
              <p className="text-lg font-light leading-relaxed text-dm">
                My diverse skill set spans modern web technologies and API development. 
                I&apos;m passionate about building usefull applications that make an impact.
              </p>
            </CardContent>
          </Card>

          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                icon: <FaCode className="w-12 h-12" />,
                title: "Web Development",
                description:
                  "Proficient in React, Next.js, and TypeScript. Building responsive and accessible web applications with clean code.",
              },
              {
                icon: <FaMap className="w-12 h-12" />,
                title: "API Development",
                description:
                  "Building RESTful APIs and managing databases. Experience with Node.js, Express, and database systems.",
              },
              {
                icon: <FaRobot className="w-12 h-12" />,
                title: "Generative AI",
                description:
                  "Building intelligent models for content generation, healthcare applications, and automated workflows powered by AI.",
              },
            
            ].map((skill, index) => (
              <Card
                key={index}
                className="h-full backdrop-blur-lg transition-all duration-500 group bg-cc/5 border-h1/20 hover:border-h1/40 hover:transform hover:-translate-y-1"
              >
                <CardHeader>
                  <div className="flex flex-col gap-4 items-center">
                    <div className="p-4 bg-gradient-to-br rounded-full transition-all duration-500 from-h2/20 to-h1/20 text-h1 group-hover:scale-110">
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
