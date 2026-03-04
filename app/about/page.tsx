import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-navy-950 via-navy-900 to-navy-950">
      {/* Hero Section */}
      <div className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-hero-gradient">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-20 w-24 h-32 opacity-30">
            <svg viewBox="0 0 100 120" className="w-full h-full">
              <polygon 
                points="50,0 100,30 100,90 50,120 0,90 0,30" 
                fill="rgba(34, 211, 238, 0.4)"
                stroke="#22d3ee"
                strokeWidth="1"
              />
            </svg>
          </div>
          <div className="absolute bottom-10 right-20 w-20 h-24 opacity-20">
            <svg viewBox="0 0 80 100" className="w-full h-full">
              <polygon 
                points="40,0 80,20 80,70 40,90 0,70 0,20" 
                fill="rgba(59, 130, 246, 0.5)"
                stroke="#60a5fa"
                strokeWidth="1"
              />
            </svg>
          </div>
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
            About #ItWasNeverADress
          </h1>
          <p className="text-xl text-white/80">
            Shifting perceptions about women through storytelling and community
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="prose prose-invert max-w-none">
          <div className="bg-navy-800/50 border border-primary-500/10 rounded-2xl p-8 mb-12">
            <h2 className="text-2xl font-bold text-white mb-6">Our Mission</h2>
            <p className="text-white/80 text-lg leading-relaxed mb-6">
              Through storytelling, community building, innovation and creative disruptions, #ItWasNeverADress is fostering conversations that are necessary to shift perceptions about women.
            </p>
            <p className="text-white/70 leading-relaxed">
              We believe in the power of shared experiences. Every story matters. Every voice deserves to be heard. Together, we can change the narrative and create a world where women are seen for their strength, resilience, and achievements.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-navy-800/50 border border-primary-500/10 rounded-xl p-6">
              <div className="w-12 h-12 bg-primary-500/20 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Fostering Necessary Conversations</h3>
              <p className="text-white/60">
                We create safe spaces for important dialogues about women&apos;s experiences, challenges, and triumphs.
              </p>
            </div>

            <div className="bg-navy-800/50 border border-primary-500/10 rounded-xl p-6">
              <div className="w-12 h-12 bg-accent-cyan/20 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-accent-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Shifting Perceptions</h3>
              <p className="text-white/60">
                Through innovative campaigns and creative disruptions, we challenge stereotypes and change how women are perceived.
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-primary-600/20 to-accent-cyan/20 border border-primary-500/20 rounded-2xl p-8 text-center">
            <h2 className="text-2xl font-bold text-white mb-4">Join the Movement</h2>
            <p className="text-white/70 mb-6">
              Your story matters. Share it with the world and help us shift perceptions about women everywhere.
            </p>
            <Link
              href="/share-your-stories"
              className="inline-flex items-center justify-center px-8 py-4 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-lg transition-all duration-300"
            >
              Share Your Story
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}