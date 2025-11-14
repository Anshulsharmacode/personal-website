"use client";
import React from "react";
import { technicalProjects } from "@/components/constant/Projectdata";
import { ProjectCard } from "@/components/constant/ProjectCard";

export default function ProjectsHome() {
  return (
    <div className="relative  min-h-screen">
      {/* <div className="fixed inset-0 w-full h-full bg-gradient-to-b opacity-80 from-bc via-bc/90 to-bc" />
      <div className="fixed inset-0 w-full h-full bg-[radial-gradient(circle_at_center,rgba(96,165,250,0.1)_0%,transparent_65%)]" /> */}

      <div className="relative z-1">
        <section className="py-24 bg-none font-montserrat">
          <div className="container px-4 mx-auto">
            <div className="mx-auto max-w-7xl">
              {/* <h1 className="mb-16 text-5xl font-bold tracking-tight text-center">
                <span className="text-h1">Featured</span>{" "}
                <span className="text-transparent bg-clip-text bg-h2">
                  Projects
                </span>
              </h1> */}

              {/* Technical Projects Section */}
              <div className="space-y-20">
                {/* <h2 className="mb-16 text-3xl font-bold tracking-tight">
                  <span className="text-h1">Technical</span>{" "}
                  <span className="text-h2">Projects</span>
                </h2> */}

                {/* Regular Technical Projects Grid */}
                <div className="grid grid-cols-1 gap-8 sm:gap-10 md:grid-cols-2">
                  {technicalProjects.map((project) => (
                    <ProjectCard key={project.title} {...project} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
