import Header from '@/components/Header'

export default function About() {
  return (
    <main className="relative min-h-screen pt-24">
      <Header />
      <div className="container mx-auto px-6 sm:px-[8%] lg:px-[10%] max-w-2xl py-12 sm:py-16 w-full">
        <div className="glass rounded-3xl p-8 sm:p-10 md:p-12">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-8 text-left">About</h1>
          <p className="text-gray-300 leading-relaxed mb-6 text-left">
            I am Xavier, a sophomore at Olin, and I love learning (basically anything).
          </p>
          <p className="text-gray-300 leading-relaxed mb-6 text-left">
            Currently, I am searching for technical roles that also have business aspects to them such as product management or product marketing.
          </p>
          <p className="text-gray-300 leading-relaxed mb-6 text-left">
            Outside of school: If you name a hobby, I have probably tried it at least once. I love fashion, sewing, guitar, the gym, languages (currently learning Portuguese), photography, social media (social media intern for Olin). In my free time, you will see me try to balance all of these things, though I usually focus on 1–2 at a time, and just have the others on the back burner.
          </p>
          <p className="text-gray-300 leading-relaxed text-left">
            If you would like my resume,{' '}
            <a
              href="/resume"
              className="text-blue-400 hover:text-blue-300 underline hover-glow-subtle inline-block px-1 py-0.5 rounded"
            >
              click here
            </a>
            .
          </p>
        </div>
      </div>
    </main>
  )
}
