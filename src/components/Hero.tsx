"use client";

import { Button } from "@/components/ui/button";
import { FaEnvelope } from "react-icons/fa";
import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import React from "react";
import { motion } from "framer-motion";
import { DM_Serif_Text } from "next/font/google";

const dmSerifText = DM_Serif_Text({
  subsets: ["latin"],
  weight: "400",
});

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

  const textAnimationSpeed = 0.05;

  if (!isMounted) {
    return null;
  }

  return (
    <section className="relative flex items-center z-0 justify-center text-white overflow-hidden w-full py-64 min-h-[90vh]">
      <MotionDiv
        initial="hidden"
        animate="visible"
        variants={{
          visible: {
            transition: {
              staggerChildren: textAnimationSpeed,
            },
          },
        }}
        className="relative z-10 px-4 mx-auto max-w-5xl text-center"
      >
        <MotionDiv
          className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-8 ${dmSerifText.className} tracking-tight`}
        >
          {Array.from("Anshul Sharma").map((char, index) => (
            <MotionDiv
              key={index}
              variants={fadeInUpVariants}
              className="inline-block"
              style={{ display: "inline-block" }}
              transition={{ duration: textAnimationSpeed }}
            >
              <span className="block pb-2">
                {char === " " ? "\u00A0" : char}
              </span>
            </MotionDiv>
          ))}
        </MotionDiv>

        <MotionDiv
          variants={fadeInUpVariants}
          className="mb-6 text-2xl font-light font-raleway"
        >
          Biomedical Engineer and Software Developer
        </MotionDiv>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="flex flex-col gap-2 justify-center items-center mb-6 sm:flex-row"
        >
          <Button
            variant="outline"
            className="text-sm border transition-all duration-300 group font-raleway border-h2/20 hover:border-h2/40 hover:bg-h2/10 text-dm"
            onClick={() => (window.location.href = "/project")}
          >
            <span className="mr-2">View Projects</span>→
          </Button>

          <Button
            className="text-sm transition-all duration-300 font-raleway bg-h2 hover:bg-h2/90 text-bc"
            onClick={() => (window.location.href = "/contact")}
          >
            <span className="mr-2">Get in Touch</span>
            <FaEnvelope className="w-4 h-4" />
          </Button>
        </motion.div>
      </MotionDiv>
    </section>
  );
};

export default Hero;
