"use client"
import React from 'react';
import { FaSchool, FaUniversity, FaGraduationCap } from 'react-icons/fa';
import { Card, CardContent, CardHeader } from "@/components/ui/card";

const Education: React.FC = () => {
  const educationData = [
    {
      icon: <FaSchool className="w-10 h-10 text-h2" />,
      school: "Saraswati Vidya Mandir, Shujalpur",
      degree: "10th Class",
      year: "2019",
      result: "70%",
    },
    {
      icon: <FaGraduationCap className="w-10 h-10 text-h2" />,
      school: "Saraswati Vidya Mandir, Shujalpur",
      degree: "12th Class", 
      year: "2021",
      result: "73%",
    },
    {
      icon: <FaUniversity className="w-10 h-10 text-h2" />,
      school: "Shri G.S. Institute of Technology, Indore",
      degree: "B.Tech in Biomedical Engineering",
      year: "2021 - 2025",
      result: "6.0 CGPA",
    },
  ];

  return (
    <section className="py-20 bg-bc">
      <div className="container px-4 mx-auto">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mb-16 text-5xl font-bold">
            <span className="text-h1">Educational</span>{" "}
            <span className="text-h2">Journey</span>
          </h2>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {educationData.map((edu, index) => (
              <div key={index}>
                <Card className="overflow-hidden h-full border shadow-lg transition-all duration-300 border-cc group bg-cc hover:shadow-2xl">
                  <CardHeader className="flex justify-center items-center pt-8">
                    <div className="p-4 rounded-full transition-transform text-h2 duration-300 bg-cc group-hover:scale-110">
                      {edu.icon}
                    </div>
                  </CardHeader>
                  <CardContent className="p-6 text-center">
                    <h3 className="mb-3 text-2xl font-bold text-h1">
                      {edu.degree}
                    </h3>
                    <p className="mb-4 text-lg text-dm">
                      {edu.school}
                    </p>
                    <div className="flex justify-between items-center text-sm text-dm">
                      <span className="px-3 py-1 rounded-full bg-h2/20">
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