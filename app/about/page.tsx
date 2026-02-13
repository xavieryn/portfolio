import Header from '@/components/Header'

export default function About() {
  return (
    <main className="relative min-h-screen pt-32 pb-20 px-6 w-full bg-[#fdfaf6]">
      <Header />
      
      <div className="max-w-3xl mx-auto w-full">
        {/* Paper Sheet Container */}
        <div 
          className="paper-sheet p-8 md:p-12 lg:p-16 transform rotate-1 mx-auto relative"
          style={{ 
            backgroundImage: "url('/crumpledpaper.jpg')", 
            backgroundSize: "cover", 
            backgroundPosition: "center" 
          }}
        >
          
          <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center text-ink-black font-sans">
            About Me
          </h1>
          
          <div className="space-y-6 text-lg md:text-xl text-ink-black leading-relaxed font-formal">
            <p>
              I am Xavier, a sophomore at Olin, and I love learning (basically anything).
            </p>
            <p>
              Currently, I am searching for technical roles that also have business aspects to them such as product management or product marketing.
            </p>
            <p>
              Outside of school: If you name a hobby, I have probably tried it at least once. I love fashion, sewing, guitar, the gym, languages (currently learning Portuguese), photography, social media (social media intern for Olin).
            </p>
            <p>
              In my free time, you will see me try to balance all of these things, though I usually focus on 1–2 at a time, and just have the others on the back burner.
            </p>
            
            <div className="py-2">
              <h2 className="text-2xl font-bold mb-2 text-doodle-blue font-sans">
                What am I currently learning?
              </h2>
              <p>
                I am currently learning Portuguese & photography.
              </p>
            </div>
            
            <div className="pt-8 flex flex-col items-center gap-4">
              <p className="font-sans text-xl font-bold text-doodle-blue rotate-1">
                Want to see more details?
              </p>
              <a
                href="/resume"
                className="doodle-button text-xl px-8 py-3 rounded-full no-underline hover:shadow-[5px_5px_0px_var(--ink-black)] transition-all bg-white"
              >
                View My Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
