import React from 'react';
import { FaHospitalAlt, FaCalendarAlt } from 'react-icons/fa';

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
      icon: <FaHospitalAlt className="text-5xl text-blue-500" />
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
      icon: <FaHospitalAlt className="text-5xl text-green-500" />
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-100 to-gray-200 text-gray-900 py-16">
      <div className="container mx-auto px-6 lg:px-12">
        <h2 className="text-5xl font-bold text-center mb-16 text-gray-800">
          Experience
        </h2>

        <div className="space-y-16">
          {experiences.map((exp, index) => (
            <div 
              key={exp.hospital}  // Using a unique key for each experience
              className="bg-white p-8 rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105"
            >
              <div className="flex items-center space-x-6 mb-8">
                <div className="bg-gray-100 p-4 rounded-full">
                  {exp.icon}
                </div>
                <div>
                  <h3 className="text-3xl font-semibold text-gray-800">{exp.hospital}</h3>
                  <div className="flex items-center text-gray-600 mt-2">
                    <FaCalendarAlt className="mr-2" /> <span className="text-lg">{exp.duration}</span>
                  </div>
                </div>
              </div>
              <ul className="space-y-4">
                {exp.description.map((item, i) => (
                  <li key={i} className="text-lg text-gray-700 flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
