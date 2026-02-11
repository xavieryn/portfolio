"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import TypingText from "./TypingText";
import ScrollIndicator from "./ScrollIndicator";

const school = "Electrical & Computer Engineering @ Olin College of Engineering";
const subtext =
  "I care more about building things people love than building things that just work.";

export default function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-start relative overflow-hidden"
    >


      <div className="w-full px-6 md:px-16 lg:px-40 relative z-10 max-w-[1920px] mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={mounted ? "visible" : "hidden"}
          className="text-left relative z-10"
        >
          {/* Typing effect - cycles through greetings */}
          <motion.div variants={letterVariants} className="mb-6">
            <TypingText />
          </motion.div>

          {/* School */}
          <motion.div
            variants={letterVariants}
            className="text-lg md:text-xl text-gray-700 mb-8 font-bold"
          >
            {school}
          </motion.div>

          {/* Subtext */}
          <motion.p
            variants={letterVariants}
            className="text-lg md:text-xl text-gray-800 max-w-2xl mb-12 leading-relaxed"
          >
            {subtext}
          </motion.p>

          {/* Buttons */}
          <motion.div
            variants={letterVariants}
            className="flex gap-6 justify-start flex-wrap"
          >
            <motion.a
              href="/about"
              className="doodle-button rounded-full text-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View Resume
            </motion.a>
            <motion.a
              href="#experience"
              className="doodle-button rounded-full text-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              See My Work
            </motion.a>
          </motion.div>
        </motion.div>
      </div>

      {/* Decorative Title Image - Fixed position relative to viewport */}
      <div className="absolute right-[-5%] top-1/2 -translate-y-1/2 md:right-[-2%] lg:right-[1%] z-0 pointer-events-none select-none">
        <motion.div
          variants={letterVariants}
          initial="hidden"
          animate={mounted ? "visible" : "hidden"}
        >
          <img 
            src="/title_x.png" 
            alt="Title Graphic" 
            className="h-64 md:h-96 lg:h-[35rem] xl:h-[45rem] 2xl:h-[55rem] w-auto object-contain rotate-3 opacity-60 md:opacity-90"
          />
        </motion.div>
      </div>

      <ScrollIndicator />
    </section>
  );
}
