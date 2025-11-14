"use client";
import React from "react";
import {
  BiomedicalProjects,
  hardwareProjects,
} from "@/components/constant/Projectdata";
import { ProjectCard } from "@/components/constant/ProjectCard";
import ProjectsHome from "@/components/HomeProject";

export default function Projects() {
  return (
    <div className="relative pt-32 min-h-screen">
      <div className="fixed inset-0 w-full h-full bg-gradient-to-b opacity-80 from-bc via-bc/90 to-bc" />
      <div className="fixed inset-0 w-full h-full bg-[radial-gradient(circle_at_center,rgba(96,165,250,0.1)_0%,transparent_65%)]" />

      <div className="relative z-1">
        <section className="py-24 bg-none font-montserrat">
          <div className="container px-4 mx-auto">
            <div className="mx-auto max-w-7xl">
              <h1 className="mb-16 text-5xl font-bold tracking-tight text-center">
                <span className="text-h1">Featured</span>{" "}
                <span className="text-transparent bg-clip-text bg-h2">
                  Projects
                </span>
              </h1>

              {/* Technical Projects Section */}
              <div className="space-y-12 ">
                <h2 className="mb-16 text-3xl font-bold tracking-tight">
                  <span className="text-h1 ml-5">Technical</span>{" "}
                  <span className="text-h2">Projects</span>
                  <ProjectsHome />
                </h2>

                {/* Regular Technical Projects Grid */}
              </div>

              {/* Hardware Projects Section */}
              <div className="mt-32 space-y-20">
                <h2 className="mb-16 text-3xl font-bold tracking-tight">
                  <span className="text-h1">Hardware</span>{" "}
                  <span className="text-h2">Projects</span>
                </h2>

                <div className="grid grid-cols-1 gap-8 sm:gap-10 md:grid-cols-2 lg:grid-cols-3">
                  {hardwareProjects.map((project) => (
                    <ProjectCard key={project.title} {...project} />
                  ))}
                </div>
              </div>

              {/* Biomedical Projects Section */}
              <div className="mt-32 space-y-20">
                <h2 className="mb-16 text-3xl font-bold tracking-tight">
                  <span className="text-h1">Biomedical</span>{" "}
                  <span className="text-h2">Projects</span>
                </h2>

                <div className="grid grid-cols-1 gap-8 sm:gap-10 md:grid-cols-2 lg:grid-cols-3">
                  {BiomedicalProjects.map((project) => (
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
