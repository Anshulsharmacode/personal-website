"use client";

import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaKaggle,
  FaMedium,
} from "react-icons/fa";
import { Button } from "@/components/ui/button";

import { Typewriter } from 'react-simple-typewriter';
import { motion } from 'framer-motion';

// const redHatDisplay = Red_Hat_Display({ subsets: ["latin"] });

const Hero = () => {
  return (
    <section className="flex overflow-hidden relative justify-center items-center w-full h-screen bg-none">
      <div className="flex relative z-10 flex-col justify-center items-center max-w-3xl h-full text-center">
        <div className="mb-4">
          <h1
            className="text-5xl font-bold tracking-tight text-center text-h1 sm:text-6xl md:text-7xl font-signature"
          >
            <Typewriter
              words={['Anshul Sharma']}
              cursor
              cursorStyle=''
              typeSpeed={100}
             
            />
          </h1>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 0.8 }}
          className="mb-6 text-lg font-light text-center font-raleway md:text-xl"
        >
          <span className="text-gray-500">
            Biomedical Engineering and Software Developer
          </span>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.5, duration: 0.8 }}
          className="flex flex-col gap-2 justify-center items-center mb-6 sm:flex-row"
        >
          <Button
            variant="outline"
            className="text-sm border transition-all duration-300 group font-raleway border-h2/20 hover:border-h2/40 hover:bg-h2/10 text-dm"
            onClick={() => window.location.href = '/project'}
          >
            <span className="mr-2">View Projects</span>→
          </Button>

          <Button 
            className="text-sm transition-all duration-300 font-raleway bg-h2 hover:bg-h2/90 text-bc"
            onClick={() => window.location.href = '/contact'}
          >
            <span className="mr-2">Get in Touch</span>
            <FaEnvelope className="w-4 h-4" />
          </Button>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 3, duration: 0.8 }}
          className="flex justify-center items-center space-x-3"
        >
          {[
            {
              icon: FaGithub,
              href: "https://github.com/Anshulsharmacode",
              label: "GitHub",
            },
            {
              icon: FaLinkedin,
              href: "https://linkedin.com/in/anshul-sharma-8386ansh",
              label: "LinkedIn",
            },
            {
              icon: FaMedium,
              href: "https://medium.com/@anshulsharma8386",
              label: "Medium",
            },
            {
              icon: FaKaggle,
              href: "https://www.kaggle.com/anshulsharma8386",
              label: "Kaggle",
            },
          ].map((social, index) => (
            <a
              key={index}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="block p-2 rounded-full bg-h1/10 text-h1 hover:bg-h1/20"
              aria-label={`${social.label} Profile`}
            >
              <social.icon size={20} />
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
