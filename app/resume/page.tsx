"use client";

import Header from "@/components/Header";

const RESUME_PDF = "/resume.pdf";

export default function ResumePage() {
  return (
    <main className="relative min-h-screen pt-24">
      <Header />
      <div className="container mx-auto px-6 sm:px-[8%] lg:px-[10%] py-8 sm:py-12 w-full max-w-5xl">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
          <h1 className="text-2xl sm:text-3xl font-bold text-left">Resume</h1>
          <a
            href={RESUME_PDF}
            download="Xavier_Nishikawa_Resume.pdf"
            className="inline-flex items-center justify-center px-6 py-3 rounded-full glass-strong text-white font-medium hover-glow w-fit"
          >
            Download PDF
          </a>
        </div>
        <div className="glass rounded-2xl overflow-hidden min-h-[70vh] sm:min-h-[80vh]">
          <iframe
            src={`${RESUME_PDF}#view=FitH`}
            title="Xavier Nishikawa Resume"
            className="w-full h-[70vh] sm:h-[80vh] min-h-[600px] border-0"
          />
        </div>
      </div>
    </main>
  );
}
