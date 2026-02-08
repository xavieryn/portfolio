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
          className="text-4xl md:text-5xl font-bold mb-16 text-center"
        >
          Projects
        </motion.h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <motion.a
              key={index}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={
                isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }
              }
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass rounded-3xl p-8 group cursor-pointer block hover-glow"
              whileHover={{ scale: 1.05, y: -8 }}
            >
              <h3 className="text-2xl font-semibold mb-4">{project.name}</h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="px-3 py-1 rounded-full text-xs glass text-gray-300"
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
