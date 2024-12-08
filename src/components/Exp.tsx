import React from 'react';
import { FaCalendarAlt, FaBriefcaseMedical, FaStethoscope } from 'react-icons/fa';
import { Card, CardHeader, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const Experience: React.FC = () => {
  const experiences = [
    {
      hospital: "Annapurna Hospital",
      duration: "20 Days",
      description: [
        "Worked in the Radiology Department, focusing on the operation and maintenance of CT-Scan and MRI machines.",
        "Gained hands-on experience with advanced medical imaging technologies, learning the fundamentals of image processing.",
        "Explored the role of artificial intelligence in enhancing diagnostic capabilities.",
        "Special attention was given to the application of AI in medical imaging, understanding its significance in providing faster and more accurate diagnoses.",
        "Extensively explored the role of AI in automated image analysis."
      ],
      icon: <FaBriefcaseMedical className="w-8 h-8 text-h2" />
    },
    {
      hospital: "V-ONE Hospital",
      duration: "45 Days",
      description: [
        "Worked intensively on advanced medical imaging techniques including CT-Scan and MRI.",
        "Gained deep insights into the day-to-day operation of imaging equipment and the interpretation of results.",
        "Collaborated with radiologists to optimize the use of AI tools for faster diagnosis and better patient outcomes.",
        "Focused on exploring AI-driven advancements in MRI imaging, particularly in automating image recognition and reducing human error in diagnostics.",
        "Analyzed case studies on how machine learning models are trained to detect anomalies in scans."
      ],
      icon: <FaStethoscope className="w-8 h-8 text-h2" />
    }
  ];

  return (
    <section className="px-4 py-16 min-h-screen bg-bc sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <h2 className="mb-16 text-5xl font-bold text-center">
          <span className="text-h1">Hospital</span>{" "}
          <span className="text-h2">Experience</span>
        </h2>

        <div className="grid gap-8 md:grid-cols-1 lg:gap-12">
          {experiences.map((exp) => (
            <Card key={exp.hospital} className="backdrop-blur-sm transition-all duration-300 bg-cc/5 border-h1/20 hover:border-h1/40">
              <CardHeader>
                <div className="flex gap-4 items-center">
                  <div className="p-3 rounded-full bg-h1/10 text-h1">
                    {exp.icon}
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-2xl font-semibold text-hm">{exp.hospital}</h3>
                    <div className="flex items-center text-dm/80">
                      <FaCalendarAlt className="mr-2 w-4 h-4" />
                      <Badge variant="outline" className="text-dm border-h1/20">
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
    </section>
  );
};

export default Experience;
