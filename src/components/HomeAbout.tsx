import React from 'react';
import { AiOutlineRobot, AiOutlineGlobal, AiOutlineApi } from 'react-icons/ai';

const AboutMe = () => {
  return (
    <div className="text-center p-6 sm:p-12 bg-c2">
      {/* About Me Section */}
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-extrabold mb-6 text-gray-900">About Me</h2>
        <p className="text-lg font-light mb-4 text-gray-800">
          Hi! I'm <span className="font-semibold text-blue-600">Anshul Sharma</span>, a final-year Biomedical Engineering student passionate about transforming healthcare through innovative technologies. My academic focus is on integrating 
          <span className="font-semibold text-blue-600"> Artificial Intelligence</span> and <span className="font-semibold text-blue-600">Medical Imaging</span> to optimize diagnostics like MRI and CT scans.
        </p>
        <p className="text-lg font-light mb-4 text-gray-800">
          I specialize in applying AI-driven solutions to enhance diagnostic precision, improve patient outcomes, and make healthcare more accessible. With hands-on experience in building intelligent healthcare tools, I’m driven to create impactful solutions that bridge the gap between technology and medicine.
        </p>
        <p className="text-lg font-light mb-6 text-gray-800">
          Let’s collaborate to push the boundaries of what’s possible in healthcare innovation and beyond!
        </p>
      </div>

      {/* Skills Card Section */}
      <div className="mt-8 max-w-4xl mx-auto grid gap-6 sm:grid-cols-3">
        {/* Generative AI Card */}
        <div className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow transform hover:scale-105">
          <div className="flex items-center justify-center mb-4 text-blue-500">
            <AiOutlineRobot size={50} />
          </div>
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Generative AI</h3>
          <p className="text-gray-700">
            Building intelligent models for content generation, healthcare applications, and automated workflows powered by AI.
          </p>
        </div>

        {/* Web App Development Card */}
        <div className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow transform hover:scale-105">
          <div className="flex items-center justify-center mb-4 text-blue-500">
            <AiOutlineGlobal size={50} />
          </div>
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Web App Development</h3>
          <p className="text-gray-700">
            Expertise in designing and developing scalable web applications using modern frameworks like Next.js and React.
          </p>
        </div>

        {/* API Development Card */}
        <div className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow transform hover:scale-105">
          <div className="flex items-center justify-center mb-4 text-blue-500">
            <AiOutlineApi size={50} />
          </div>
          <h3 className="text-xl font-semibold text-gray-800 mb-4">API Development</h3>
          <p className="text-gray-700">
            Crafting robust and secure APIs for seamless integration and data exchange across systems and platforms.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
