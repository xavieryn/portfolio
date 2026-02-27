"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import React from "react";
import Link from "next/link";

const experiences = [
  {
    role: "Software Engineering Intern",
    organization: "Barn Owl Technologies",
    description:
      "Creating & deploying insect detection models on AWS using Docker. Building production-ready CV systems and helping farmers optimize pesticide usage.",
    link: "/work/owl-vision",
    image: "/OwlVisionFront.jpg",
  },
  {
    role: "iOS Developer",
    organization: "Pl(ai)Lab",
    description:
      "Developed a Swift app using Apple's body pose detection to support cancer rehabilitation for adults 65+. Built Python backend with OpenAI Realtime API for custom workout guidance.",
    link: "/work/plailab",
    image: "/plailab_front.png",
  },
  {
    role: "Project Manager",
    organization: "Project AURA",
    description:
      "Managed a 5-person team building an autonomous cart capable of carrying 300lb loads. Led cross-functional integration of mechanical, electrical, and software systems under aggressive timelines.",
    link: "/work/project-aura",
    image: "/ProjectAura_front.png",
  },
  {
    role: "Full-Stack Developer",
    organization: "Afora",
    description:
      "Built a full-stack project management app with AI add-ons using OpenAI, React, Firebase, Next.js, and TypeScript. Secured $1,000 from Babson College's Foundry Grant.",
    link: "/work/afora",
    image: "/Afora_front.png",
  },
  {
    role: "Research Assistant",
    organization: "Stuttered Speech ASR Research",
    description:
      "Addressed bias in ASR models against stuttered speech. Identified 2x WER increase in Whisper and 6.4x in Wav2Vec. Honorable Mention at AAAS presentation.",
    link: "https://www.olin.edu/articles/story-dongim-lee-27-pint-receive-honorable-mention-aaas-presentation",
    image: "/AAAS%20E-Poster_front.pdf",
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
          className="text-3xl sm:text-4xl md:text-5xl font-bold mb-10 sm:mb-16 text-left font-sans text-doodle-blue"
        >
          My Work
        </motion.h2>
        <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 max-w-4xl mx-auto">
          {experiences.map((exp, index) => {
            const isInternal = exp.link.startsWith("/");
            return (
              <React.Fragment key={index}>
                <Link href={exp.link} passHref legacyBehavior>
                  <motion.a
                    target={isInternal ? undefined : "_blank"}
                    rel={isInternal ? undefined : "noopener noreferrer"}
                    initial={{ opacity: 0, rotateX: -90, transformOrigin: "top" }}
                    animate={
                      isInView
                        ? { opacity: 1, rotateX: 0 }
                        : { opacity: 0, rotateX: -90 }
                    }
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="paper-card p-8 group cursor-pointer aspect-square flex flex-col justify-center"
                    whileHover={{ scale: 1.02, rotate: -1 }}
                  >
                    <h3 className="text-xl font-bold mb-2 text-ink-black font-sans">{exp.role}</h3>
                    <p className="text-doodle-blue font-bold mb-3">{exp.organization}</p>
                    <p className="text-gray-700 leading-relaxed text-base font-medium">
                      {exp.description}
                    </p>
                  </motion.a>
                </Link>

                <Link href={exp.link} passHref legacyBehavior>
                  <motion.a
                    target={isInternal ? undefined : "_blank"}
                    rel={isInternal ? undefined : "noopener noreferrer"}
                    initial={{ opacity: 0, rotateX: -90, transformOrigin: "top" }}
                    animate={
                      isInView
                        ? { opacity: 1, rotateX: 0 }
                        : { opacity: 0, rotateX: -90 }
                    }
                    transition={{ duration: 0.5, delay: index * 0.1 + 0.1 }}
                    className="paper-card group cursor-pointer aspect-square flex flex-col justify-center items-center p-4 relative overflow-hidden"
                    whileHover={{ scale: 1.02, rotate: 1 }}
                  >
                    {exp.image.endsWith('.pdf') ? (
                      <iframe
                        src={`${exp.image}#view=FitH&toolbar=0&navpanes=0`}
                        title={exp.role}
                        className="w-full h-full object-cover pointer-events-none rounded border-2 border-gray-100"
                      />
                    ) : (
                      <img
                        src={exp.image}
                        alt={`${exp.organization} project`}
                        className="w-full h-full object-contain pointer-events-none"
                      />
                    )}
                  </motion.a>
                </Link>
              </React.Fragment>
            );
          })}
        </div>
      </div>
    </section>
  );
}
