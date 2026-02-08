"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const experiences = [
  {
    role: "Software Engineering Intern",
    organization: "Barn Owl Technologies",
    description:
      "Creating & deploying insect detection models on AWS using Docker. Building production-ready CV systems and helping farmers optimize pesticide usage.",
    link: "https://www.barnowltechnologies.com/",
  },
  {
    role: "Full-Stack Developer",
    organization: "Afora",
    description:
      "Built a full-stack project management app with AI add-ons using OpenAI, React, Firebase, Next.js, and TypeScript. Secured $1,000 from Babson College's Foundry Grant.",
    link: "https://afora1.vercel.app/",
  },
  {
    role: "iOS Developer",
    organization: "Pl(ai)Lab",
    description:
      "Developed a Swift app using Apple's body pose detection to support cancer rehabilitation for adults 65+. Built Python backend with OpenAI Realtime API for custom workout guidance.",
    link: "https://www.olin.edu/articles/story-oliners-collaborate-local-senior-center-artificial-intelligence-ai-and-augmented",
  },
  {
    role: "Research Assistant",
    organization: "Stuttered Speech ASR Research",
    description:
      "Addressed bias in ASR models against stuttered speech. Identified 2x WER increase in Whisper and 6.4x in Wav2Vec. Honorable Mention at AAAS presentation.",
    link: "https://www.olin.edu/articles/story-dongim-lee-27-pint-receive-honorable-mention-aaas-presentation",
  },
];

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="experience"
      ref={ref}
      className="py-16 sm:py-24 lg:py-32 relative"
    >
      <div className="container mx-auto px-6 sm:px-[8%] lg:px-[10%] w-full max-w-7xl">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold mb-10 sm:mb-16 text-left"
        >
          My Work
        </motion.h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-6xl">
          {experiences.map((exp, index) => (
            <motion.a
              key={index}
              href={exp.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={
                isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }
              }
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass rounded-3xl p-8 block group cursor-pointer hover:glass-strong hover-glow transition-all duration-300"
              whileHover={{ scale: 1.05, y: -8 }}
            >
              <h3 className="text-xl font-semibold mb-2">{exp.role}</h3>
              <p className="text-blue-400 mb-3">{exp.organization}</p>
              <p className="text-gray-300 leading-relaxed text-sm">
                {exp.description}
              </p>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
