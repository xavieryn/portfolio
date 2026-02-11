"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

import { projects } from "@/lib/projects";
import Link from "next/link";

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
            <Link key={index} href={`/work/${project.slug}`} passHref legacyBehavior>
              <motion.a
                initial={{ opacity: 0, rotateX: -90, transformOrigin: "top" }}
                animate={
                  isInView
                    ? { opacity: 1, rotateX: 0 }
                    : { opacity: 0, rotateX: -90 }
                }
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="paper-card p-8 group cursor-pointer block h-full flex flex-col"
                whileHover={{ scale: 1.02, rotate: -1 }}
              >
                <div className="flex-grow">
                  <h3 className="text-2xl font-bold mb-4 text-ink-black font-sans">{project.name}</h3>
                  <p className="text-gray-700 mb-6 leading-relaxed font-medium">
                    {project.shortDescription}
                  </p>
                </div>
                <div className="flex flex-wrap gap-2 mt-auto">
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
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
