"use client";

import React from 'react';
import { AiOutlineRobot, AiOutlineGlobal, AiOutlineApi } from 'react-icons/ai';
import { Card, CardHeader, CardContent } from "@/components/ui/card";

const AboutMe = () => {
  return (
    <section className="py-20 bg-bc">
      <div className="container px-4 mx-auto">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="mb-12 text-5xl font-bold">
            <span className="text-h1">About</span>{" "}
            <span className="text-h2">Me</span>
          </h1>

          <Card className="mb-16 backdrop-blur-lg bg-cc/5 border-h1/20">
            <CardContent className="p-8">
              <p className="mb-6 text-lg font-light text-dm">
                Hi! I&apos;m <span className="font-semibold text-hm">Anshul Sharma</span>, a final-year Biomedical Engineering student passionate about transforming healthcare through innovative technologies. My academic focus is on integrating 
                <span className="font-semibold text-hm"> Artificial Intelligence</span> and <span className="font-semibold text-hm">Medical Imaging</span> to optimize diagnostics like MRI and CT scans.
              </p>
              <p className="mb-6 text-lg font-light text-dm">
                I specialize in applying AI-driven solutions to enhance diagnostic precision, improve patient outcomes, and make healthcare more accessible. With hands-on experience in building intelligent healthcare tools, I&apos;m driven to create impactful solutions that bridge the gap between technology and medicine.
              </p>
              <p className="text-lg font-light text-dm">
                Let&apos;s collaborate to push the boundaries of what&apos;s possible in healthcare innovation and beyond!
              </p>
            </CardContent>
          </Card>

          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                icon: <AiOutlineRobot className="w-12 h-12 text-h2" />,
                title: "Generative AI",
                description: "Building intelligent models for content generation, healthcare applications, and automated workflows powered by AI."
              },
              {
                icon: <AiOutlineGlobal className="w-12 h-12 text-h2" />,
                title: "Web App Development",
                description: "Expertise in designing and developing scalable web applications using modern frameworks like Next.js and React."
              },
              {
                icon: <AiOutlineApi className="w-12 h-12 text-h2" />,
                title: "API Development", 
                description: "Crafting robust and secure APIs for seamless integration and data exchange across systems and platforms."
              }
            ].map((skill, index) => (
              <div key={index}>
                <Card className="h-full backdrop-blur-lg transition-all duration-300 group bg-cc/5 border-h1/20 hover:border-h1/40">
                  <CardHeader>
                    <div className="flex flex-col gap-4 items-center">
                      <div className="p-4 rounded-full transition-transform duration-300 bg-h1/10 text-h1 group-hover:scale-110">
                        {skill.icon}
                      </div>
                      <h2 className="text-2xl font-semibold text-hm">{skill.title}</h2>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-center text-dm">{skill.description}</p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;