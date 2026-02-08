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
      {/* Background gradient with subtle shift */}
      <div className="absolute inset-0 gradient-shift bg-gradient-to-br from-space-black via-deep-navy to-space-black opacity-50" />

      {/* Floating blobs */}
      <motion.div
        className="absolute top-20 left-20 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"
        animate={{
          x: [0, 30, 0],
          y: [0, -50, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
        animate={{
          x: [0, -30, 0],
          y: [0, 50, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

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
            className="text-lg md:text-xl text-gray-400 mb-8"
          >
            {school}
          </motion.div>

          {/* Subtext */}
          <motion.p
            variants={letterVariants}
            className="text-lg md:text-xl text-gray-400 max-w-2xl mb-12 leading-relaxed"
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
              className="px-8 py-4 rounded-full glass-strong text-white font-medium relative overflow-hidden group hover-glow"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10">View Resume</span>
              <motion.div
                className="absolute inset-0 bg-blue-500/20 rounded-full"
                initial={{ scale: 0, opacity: 0 }}
                whileHover={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.3 }}
                style={{ filter: "blur(20px)" }}
              />
            </motion.a>
            <motion.a
              href="#experience"
              className="px-8 py-4 rounded-full glass-strong text-white font-medium relative overflow-hidden group hover-glow"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10">See My Work</span>
              <motion.div
                className="absolute inset-0 bg-blue-500/20 rounded-full"
                initial={{ scale: 0, opacity: 0 }}
                whileHover={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.3 }}
                style={{ filter: "blur(20px)" }}
              />
            </motion.a>
          </motion.div>
        </motion.div>
      </div>

      <ScrollIndicator />
    </section>
  );
}
