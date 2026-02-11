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
      className="min-h-screen flex items-center justify-start relative overflow-hidden bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/title.png')" }}
    >


      <div className="container mx-auto px-6 sm:px-[8%] lg:px-[10%] relative z-10 w-full max-w-7xl">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={mounted ? "visible" : "hidden"}
          className="text-left"
        >
          {/* Typing effect - cycles through greetings */}
          <motion.div variants={letterVariants}>
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

      <ScrollIndicator />
    </section>
  );
}
