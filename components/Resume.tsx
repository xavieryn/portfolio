"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function Resume() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="resume" ref={ref} className="py-32 relative">
      <div className="container mx-auto px-6 max-w-2xl">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={
            isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }
          }
          transition={{ duration: 0.6 }}
          className="glass-strong rounded-3xl p-12 text-center relative overflow-hidden"
        >
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-blue-500/20 rounded-3xl"
            animate={{
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "linear",
            }}
            style={{
              backgroundSize: "200% 200%",
            }}
          />
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Want the full story?
            </h2>
            <motion.a
              href="/resume.pdf"
              download
              className="inline-block px-10 py-5 rounded-full glass text-white font-medium text-lg relative overflow-hidden group hover-glow"
              whileHover={{ scale: 1.05, y: -4 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10">Download Resume (PDF)</span>
              <motion.div
                className="absolute inset-0 bg-blue-500/30 rounded-full"
                initial={{ scale: 0, opacity: 0 }}
                whileHover={{ scale: 1.5, opacity: 1 }}
                transition={{ duration: 0.4 }}
                style={{ filter: "blur(30px)" }}
              />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
