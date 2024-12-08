"use client";

import { FaGithub, FaLinkedin, FaEnvelope, FaKaggle, FaMedium } from "react-icons/fa";
import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

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
    return null;
  }

  return (
    <section className="flex overflow-hidden relative justify-center items-center w-full min-h-screen bg-bc">
      <div className="absolute inset-0 bg-gradient-to-b opacity-50 from-bc/50 to-bc" />
      
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
        className="relative z-10 px-4 mx-auto max-w-5xl"
      >
        <Card className="p-8 backdrop-blur-lg bg-cc/5 border-h1/20">
          <MotionDiv className="mb-8 text-center">
            <h1 className="text-4xl font-bold tracking-tight text-transparent bg-clip-text sm:text-5xl md:text-6xl lg:text-7xl bg-h1">
              {Array.from("Anshul Sharma").map((char, index) => (
                <MotionDiv
                  key={index}
                  variants={fadeInUpVariants}
                  className="inline-block"
                >
                  <span className="inline-block pb-2">
                    {char === " " ? "\u00A0" : char}
                  </span>
                </MotionDiv>
              ))}
            </h1>
          </MotionDiv>

          <MotionDiv
            variants={fadeInUpVariants}
            className="mb-8 text-2xl font-light text-center text-dm"
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-h2 to-hm">
              Biomedical Engineer & AI Machine Learning 
            </span>
          </MotionDiv>

          <MotionDiv
            variants={fadeInUpVariants}
            className="flex flex-col gap-4 justify-center mb-8 sm:flex-row"
          >
            <Button
              variant="outline"
              className="group border-h1 hover:bg-h1/20 text-dm"
            >
              <span className="mr-2">View Projects</span>
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </Button>
            <Button
              className="bg-gradient-to-r from-h1 to-h2 hover:opacity-90 text-bc"
            >
              <span className="mr-2">Get in Touch</span>
              <FaEnvelope className="w-4 h-4" />
            </Button>
          </MotionDiv>

          <MotionDiv
            variants={fadeInUpVariants}
            className="flex justify-center space-x-6"
          >
            {[
              { icon: FaGithub, href: "https://github.com/Anshulsharmacodes", label: "GitHub" },
              { icon: FaLinkedin, href: "https://linkedin.com/in/Anshulsharma-8386ansh", label: "LinkedIn" },
              { icon: FaMedium, href: "https://medium.com/@anshulsharmacodes", label: "Medium" },
              { icon: FaKaggle, href: "https://www.kaggle.com/anshulsharmacodes", label: "Kaggle" }
            ].map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full transition-all duration-300 bg-h1/10 text-h1 hover:bg-h1/20 hover:scale-110"
                aria-label={`${social.label} Profile`}
              >
                <social.icon size={24} />
              </a>
            ))}
          </MotionDiv>
        </Card>
      </MotionDiv>
    </section>
  );
};

export default Hero;
