"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const projects = [
  {
    name: "Barn Owl Technologies",
    description:
      "Creating & deploying insect detection models on AWS using Docker. Managing CV models in production for 50+ IoT-connected traps across New England.",
    tags: ["Computer Vision", "AWS", "Docker", "PostgreSQL"],
    link: "https://www.barnowltechnologies.com/",
  },
  {
    name: "Afora",
    description:
      "Full-stack project management app with AI add-ons using OpenAI, React, Firebase, Next.js, Shadcn, and TypeScript. Deployed on Vercel.",
    tags: ["React", "Firebase", "Next.js", "OpenAI"],
    link: "https://afora1.vercel.app/",
    github: "https://github.com/We1chJ/Afora",
  },
  {
    name: "Pl(ai)Lab",
    description:
      "iOS app using Apple's body pose detection for cancer rehabilitation. Python backend with OpenAI Realtime API. Piloted at senior center with accessibility focus.",
    tags: ["Swift", "iOS", "OpenAI", "Computer Vision"],
    link: "https://www.olin.edu/articles/story-oliners-collaborate-local-senior-center-artificial-intelligence-ai-and-augmented",
    github: "https://github.com/plailab/PMI-IOS.git",
  },
  {
    name: "Stuttered Speech ASR Research",
    description:
      "Research on bias in ASR models against stuttered speech. Analyzed LibriSpeech/Stutter datasets. Honorable Mention at AAAS.",
    tags: ["Research", "ASR", "Accessibility", "Python"],
    link: "https://www.olin.edu/articles/story-dongim-lee-27-pint-receive-honorable-mention-aaas-presentation",
    github: "https://github.com/dongim04/stuttered-speech-asr",
  },
];

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" ref={ref} className="py-32 relative">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold mb-16 text-center font-sans"
        >
          Projects
        </motion.h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <motion.a
              key={index}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, rotateX: -90, transformOrigin: "top" }}
              animate={
                isInView
                  ? { opacity: 1, rotateX: 0 }
                  : { opacity: 0, rotateX: -90 }
              }
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="paper-card p-8 group cursor-pointer block"
              whileHover={{ scale: 1.02, rotate: -1 }}
            >
              <h3 className="text-2xl font-bold mb-4 text-ink-black font-sans">{project.name}</h3>
              <p className="text-gray-700 mb-6 leading-relaxed font-medium">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="px-3 py-1 bg-gray-100 border-2 border-ink-black rounded-lg text-xs font-bold text-ink-black transform -rotate-2"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
