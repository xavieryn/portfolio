
import { projects } from "@/lib/projects";
import { notFound } from "next/navigation";
import Link from "next/link";
// Removed lucide-react import as it is not installed

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default function ProjectPage({
  params,
}: {
  params: { slug: string };
}) {
  const project = projects.find((p) => p.slug === params.slug);

  if (!project) {
    notFound();
  }

  const { details } = project;

  return (
    <main className="min-h-screen pt-32 pb-20 w-full">
      {/* Header Container - Wide alignment */}
      <div className="w-full px-6 md:px-12 lg:px-24 max-w-[1920px] mx-auto">
        <Link 
          href="/#projects" 
          className="inline-flex items-center gap-2 mb-8 doodle-button rounded-full text-lg no-underline hover:no-underline"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M19 12H5M12 19l-7-7 7-7"/>
          </svg>
          Back to Projects
        </Link>

        <header className="mb-12">
          <h1 className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-6 text-ink-black font-formal tracking-tight">
            {details.title}
          </h1>
          <p className="text-xl md:text-2xl lg:text-3xl text-gray-700 mb-8 font-bold opacity-90 font-formal max-w-4xl">
            {details.subtitle}
          </p>
          
          <div className="flex flex-wrap gap-4 items-center">
            <span className="bg-doodle-blue text-white px-6 py-2.5 rounded-xl text-lg font-bold shadow-md font-formal">
              {details.role}
            </span>
            {project.externalLink && (
              <a 
                href={project.externalLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/50 backdrop-blur-sm px-6 py-2.5 rounded-xl text-doodle-blue hover:text-blue-700 hover:bg-white transition-all text-lg font-bold flex items-center gap-2 font-formal shadow-sm border border-white"
              >
                Visit Project 
                <span className="text-xl">↗</span>
              </a>
            )}
          </div>
        </header>
      </div>

      <article className="w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        <div className="bg-white/95 backdrop-blur-sm p-8 md:p-12 lg:p-20 rounded-3xl shadow-2xl border border-white/50 relative font-formal">
          {/* Content Sections */}
        <div className="space-y-12">
          {details.sections.map((section, index) => (
            <section key={index} className="relative">
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-ink-black inline-block border-b-2 border-doodle-blue/30 pb-1 font-formal">
                {section.heading}
              </h2>
              <div className="text-lg md:text-xl leading-relaxed text-gray-800 whitespace-pre-wrap">
                {section.content}
              </div>
            </section>
          ))}
        </div>
        </div>
      </article>
      
      {/* Footer / Navigation Hint */}
      <div className="mt-12 text-center">
        <Link 
          href="/#experience" 
          className="text-xl text-gray-600 hover:text-doodle-blue underline decoration-wavy decoration-2 underline-offset-4"
        >
          Check out my other work!
        </Link>
      </div>
    </main>
  );
}
