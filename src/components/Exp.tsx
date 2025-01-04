"use client";

import React from "react";
import {
  FaCalendarAlt,
  FaBriefcaseMedical,
  FaStethoscope,
  FaLaptopCode,
} from "react-icons/fa";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Experience: React.FC = () => {
  const experiences = [
    {
      company: "VideoAIditor.com",
      designation: "SDE Intern",
      duration: "Jan 2025 - Present",
      description: [
        "Developed scalable backend using Node.js, NestJS and Python with AWS infrastructure",
        "Implemented video processing pipeline using AWS S3 for storage and SQS for job queuing",
        "Built custom video rendering engine in Python with custom video editing features",
        "Optimized AWS infrastructure for cost-effective real-time video processing at scale",
      ],
      icon: <FaLaptopCode className="w-8 h-8 text-h2" />,
    },
    {
      company: "Annapurna Hospital",
      designation: "Biomedical Engginer Intern",
      duration: "Aug 2023 - Sep 2023 (20 Days)",
      description: [
        "Worked in the Radiology Department, focusing on the operation and maintenance of CT-Scan and MRI machines.",
        "Gained hands-on experience with advanced medical imaging technologies, learning the fundamentals of image processing.",
        "Explored the role of artificial intelligence in enhancing diagnostic capabilities.",
        "Special attention was given to the application of AI in medical imaging, understanding its significance in providing faster and more accurate diagnoses.",
        "Extensively explored the role of AI in automated image analysis.",
      ],
      icon: <FaBriefcaseMedical className="w-8 h-8 text-h2" />,
    },
    {
      company: "V-ONE Hospital",
      designation: "Biomedical Engginer Intern",
      duration: "May 2023 - July 2023 (45 Days)",
      description: [
        "Worked intensively on advanced medical imaging techniques including CT-Scan and MRI.",
        "Gained deep insights into the day-to-day operation of imaging equipment and the interpretation of results.",
        "Collaborated with radiologists to optimize the use of AI tools for faster diagnosis and better patient outcomes.",
        "Focused on exploring AI-driven advancements in MRI imaging, particularly in automating image recognition and reducing human error in diagnostics.",
        "Analyzed case studies on how machine learning models are trained to detect anomalies in scans.",
      ],
      icon: <FaStethoscope className="w-8 h-8 text-h2" />,
    },
  ];

  return (
    <section className="py-24 bg-none font-montserrat">
      <div className="container px-4 mx-auto">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-16 text-5xl font-bold tracking-tight text-center">
            <span className="text-h1">Professional</span>{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-h2 to-h1">
              Experience
            </span>
          </h2>

          <div className="space-y-8">
            {experiences.map((exp) => (
              <Card
                key={exp.company}
                className="backdrop-blur-lg transition-all duration-300 bg-cc/5 border-h1/20 hover:border-h1/30"
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
