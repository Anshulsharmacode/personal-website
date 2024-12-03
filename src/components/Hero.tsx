"use client";


import { FaGithub, FaLinkedin, FaEnvelope,FaKaggle,FaMedium } from "react-icons/fa";
import { useState, useEffect } from "react";
import dynamic from "next/dynamic";

const MotionDiv = dynamic(
  () => import("framer-motion").then((mod) => mod.motion.div),
  { ssr: false }
);

const Hero = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  if (!isMounted) {
    return null; // or a loading placeholder
  }

  return (
    <section className="relative flex items-center justify-center text-black overflow-hidden w-full py-64">
      <MotionDiv
        initial="hidden"
        animate="visible"
        variants={{
          visible: {
            transition: {
              staggerChildren: 0.2,
            },
          },
        }}
        className="max-w-5xl mx-auto text-center px-4 relative z-10"
      >
        <MotionDiv className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-8 font-raleway tracking-tight">
          {Array.from("Anshul Sharma").map((char, index) => (
            <MotionDiv
              key={index}
              variants={fadeInUpVariants}
              className="inline-block"
              style={{ display: "inline-block" }}
            >
              <span className="block pb-2">
                {char === " " ? "\u00A0" : char}
              </span>
            </MotionDiv>
          ))}
        </MotionDiv>

        <MotionDiv
          variants={fadeInUpVariants}
          className="text-2xl font-light mb-6 font-raleway"
        >
          Biomedical Engineer & AI Machine Learning 
        </MotionDiv>

        <MotionDiv
          variants={fadeInUpVariants}
          className="text-l font-light mb-12 mx-auto font-montserrat max-w-3xl"
        >
          Innovating Medical Imaging with AI & Machine Learning
        </MotionDiv>

        {/* <MotionDiv
          variants={fadeInUpVariants}
          className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-16"
        >
          <Button
            variant="outline"
            size="lg"
            className="font-montserrat text-lg relative overflow-hidden group px-8 py-3"
          >
            <span className="relative z-10">View Projects</span>
            <span className="absolute inset-x-0 bottom-0 h-0 bg-blue-600 transition-all duration-300 ease-in-out group-hover:h-full"></span>
          </Button>
          <Button
            size="lg"
            className="font-montserrat text-lg relative overflow-hidden group px-8 py-3"
          >
            <span className="relative z-10">Get in Touch</span>
            <span className="absolute inset-x-0 bottom-0 h-0 bg-gradient-to-r from-blue-500 to-purple-600 transition-all duration-300 ease-in-out group-hover:h-full"></span>
          </Button>
        </MotionDiv> */}

        <MotionDiv
          variants={fadeInUpVariants}
          className="flex justify-center space-x-8"
        >
          <a
            href="https://github.com/Anshulsharmacodes"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-black transition-colors duration-300 ease-in-out transform hover:scale-110"
            aria-label="GitHub Profile"
          >
            <FaGithub size={28} />
          </a>
          <a
            href="https://linkedin.com/in/Anshulsharma-8386ansh"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-black transition-colors duration-300 ease-in-out transform hover:scale-110"
            aria-label="LinkedIn Profile"
          >
            <FaLinkedin size={28} />
          </a>
          <a
            href="mailto:anshulsharma8386@gmail.com"
            className="text-gray-400 hover:text-black transition-colors duration-300 ease-in-out transform hover:scale-110"
            aria-label="Email Contact"
          >
            <FaEnvelope size={28} />
          </a>
          <a
            href="https://medium.com/@anshulsharmacodes"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-black transition-colors duration-300 ease-in-out transform hover:scale-110"
            aria-label="Medium Blog"
          >
            <FaMedium size={28} />
          </a>
          <a
            href="https://www.kaggle.com/anshulsharmacodes"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-black transition-colors duration-300 ease-in-out transform hover:scale-110"
            aria-label="Kaggle Profile"
          >
            <FaKaggle size={28} />
          </a>
        </MotionDiv>
      </MotionDiv>
    </section>
  );
};

export default Hero;
