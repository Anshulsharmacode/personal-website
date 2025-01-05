"use client";

import React from "react";
import {
  FaCalendarAlt,

  FaLaptopCode,
} from "react-icons/fa";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Experience: React.FC = () => {
  const experiences = [
    {
      company: "VideoAIditor.com",
      designation: "SDE Intern",
      duration: "Dec 2025 - Present",
      description: [
        "Developed scalable backend using Node.js, NestJS and Python with AWS infrastructure",
        "Implemented video processing pipeline using AWS S3 for storage and SQS for job queuing",
        "Built custom video rendering engine in Python with custom video editing features",
        "Optimized AWS infrastructure for cost-effective real-time video processing at scale",
      ],
      icon: <FaLaptopCode className="w-8 h-8 text-h2" />,
      website: "https://videoaiditor.com", // Added website link
    },
    // {
    //   company: "Annapurna Hospital",
    //   designation: "Biomedical Engginer Intern",
    //   duration: "Aug 2023 - Sep 2023 (20 Days)",
    //   description: [
    //     "Maintained and repaired medical equipment to ensure optimal performance and compliance with safety regulations",
    //     "Troubleshot technical issues to minimize downtime and support continuous patient care",
    //     "Collaborated with healthcare teams to integrate new technologies and enhance operational efficiency",
    //     "Performed regular calibration and safety checks on critical care equipment",
    //     "Documented maintenance records and repair logs following hospital protocols",
    //   ],
    //   icon: <FaBriefcaseMedical className="w-8 h-8 text-h2" />,
    // },
    // {
    //   company: "V-ONE Hospital",
    //   designation: "Biomedical Engginer Intern",
    //   duration: "May 2023 - July 2023 (45 Days)",
    //   description: [
    //     "Ensured reliable operation of medical equipment through regular maintenance, calibration and compliance with safety standards",
    //     "Addressed and resolved technical issues swiftly to minimize downtime and ensure uninterrupted patient care",
    //     "Collaborated with healthcare professionals to deploy and optimize new technologies, improving efficiency",
    //     "Conducted thorough inspections and preventive maintenance of biomedical instrumentation",
    //     "Maintained comprehensive documentation of equipment performance and maintenance activities",
    //   ],
    //   icon: <FaStethoscope className="w-8 h-8 text-h2" />,
    // },
  ];

  return (
    <section className="py-24 bg-none font-montserrat">
      <div className="container px-4 mx-auto">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-16 text-5xl font-bold tracking-tight text-center">
            <span className="text-h1">Professional</span>{" "}
            <span className="text-transparent bg-clip-text bg-h2">
              Experience
            </span>
          </h2>

          <div className="space-y-8">
            {experiences.map((exp) => (
              <Card
                key={exp.company}
                className="backdrop-blur-lg bg-cc/5 border-h1/20 hover:border-cg hover:bg-gradient-to-br hover:from-hcf/5 hover:to-hcf/5"
                onClick={() => window.open(exp.website, "_blank")} // Open company website on click
              >
                <CardHeader>
                  <div className="flex gap-4 items-center">
                    <div className="p-3 rounded-full bg-h1/10 text-h1">
                      {exp.icon}
                    </div>
                    <div className="space-y-1">
                      <h3 className="text-2xl font-semibold text-h1">
                        {exp.company}
                      </h3>
                      <p className="text-lg font-medium text-h2">
                        {exp.designation}
                      </p>
                      <div className="flex items-center text-dm/80">
                        <FaCalendarAlt className="mr-2 w-4 h-4" />
                        <Badge
                          variant="outline"
                          className="text-dm border-h1/20"
                        >
                          {exp.duration}
                        </Badge>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-4">
                    {exp.description.map((item, i) => (
                      <li key={i} className="flex gap-3 text-dm/90">
                        <span className="text-h2">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
