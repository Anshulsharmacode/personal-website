"use client";
import React from "react";
import { FaUniversity, FaGraduationCap } from "react-icons/fa";
// import { FaSchool } from "react-icons/fa";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

const Education: React.FC = () => {
  const educationData = [
    // {
    //   icon: <FaSchool className="w-12 h-12" />,
    //   school: "Saraswati Vidya Mandir, Shujalpur",
    //   degree: "10th Class",
    //   specialization: "Science",
    //   year: "2019",
    //   result: "70%",
    // },
    {
      icon: <FaGraduationCap className="w-12 h-12" />,
      school: "Saraswati Vidya Mandir, Shujalpur",
      degree: "12th Class",
      specialization: "Mathematics",
      year: "2021",
      result: "73%",
    },
    {
      icon: <FaUniversity className="w-12 h-12" />,
      school: "Shri G.S. Institute of Technology, Indore",
      degree: "B.Tech",
      specialization: "Biomedical Eng.",
      year: "2021 - 2025",
      result: "6.0 CGPA",
    },
  ];

  return (
    <section className="py-24 bg-none font-montserrat">
      <div className="container px-4 mx-auto">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-16 text-5xl font-bold text-center tracking-tight">
            <span className="text-h1">Educational</span>{" "}
            <span className="bg-h2 bg-clip-text text-transparent">Journey</span>
          </h2>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-2">
            {educationData.map((edu, index) => (
              <div key={index}>
                <Card className="h-full backdrop-blur-lg bg-cc/5 border-h1/20 hover:border-cg hover:bg-gradient-to-br hover:from-hcf/5 hover:to-hcf/5">
                  <CardHeader className="flex justify-center items-center pt-8">
                    <div className="p-4 rounded-full bg-gradient-to-br from-h2/20 to-h1/20 text-h1">
                      {edu.icon}
                    </div>
                  </CardHeader>
                  <CardContent className="p-6 text-center">
                    <h3 className="mb-2 text-2xl font-semibold tracking-tight text-h1">
                      {edu.degree}
                    </h3>
                    <p className="mb-3 text-xl text-h2 font-medium">
                      {edu.specialization}
                    </p>
                    <p className="mb-4 text-base text-dm/80 font-light leading-relaxed">
                      {edu.school}
                    </p>
                    <div className="flex justify-between items-center text-sm">
                      <span className="px-3 py-1 rounded-full bg-h2/20 text-dm">
                        {edu.year}
                      </span>
                      <span className="px-3 py-1 font-semibold text-h2">
                        {edu.result}
                      </span>
                    </div>
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

export default Education;
