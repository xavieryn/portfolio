"use client";

import { motion } from "framer-motion";

export default function ScrollIndicator() {
  return (
    <motion.div
      className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.5, duration: 0.6 }}
    >
      <a
        href="/about"
        className="flex flex-col items-center gap-2 text-ink-black hover:text-doodle-blue transition-colors"
        aria-label="Scroll down"
      >
        <svg
          width="28"
          height="44"
          viewBox="0 0 28 44"
          fill="none"
          className="text-ink-black"
        >
          {/* Mouse body - rounded oval outline */}
          <path
            d="M14 2C7.4 2 2 7.4 2 14v12c0 6.6 5.4 12 12 12s12-5.4 12-12V14c0-6.6-5.4-12-12-12z"
            stroke="currentColor"
            strokeWidth="3"
            fill="none"
            strokeLinecap="round"
          />
          {/* Animated scroll wheel */}
          <motion.ellipse
            cx="14"
            cy="14"
            rx="2.5"
            ry="4"
            fill="currentColor"
            className="text-doodle-blue"
            animate={{ cy: [14, 20, 14] }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </svg>
      </a>
    </motion.div>
  );
}
