export default function FeatureCards() {
  return (
    <section className="relative bg-gradient-to-b from-navy-950 to-navy-900 py-20 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 geometric-pattern opacity-20" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Card 1 - Fostering Necessary Conversations */}
          <div className="relative group">
            <div className="relative bg-gradient-to-br from-primary-800/80 to-navy-900/90 rounded-2xl p-8 backdrop-blur-sm border border-primary-500/20 overflow-hidden transition-all duration-300 hover:border-primary-400/40 hover:shadow-xl hover:shadow-primary-500/10">
              {/* Geometric decoration */}
              <div className="absolute top-0 right-0 w-32 h-32 opacity-30">
                <svg viewBox="0 0 100 100" className="w-full h-full">
                  <polygon 
                    points="100,0 100,100 50,50" 
                    fill="rgba(59, 130, 246, 0.3)"
                  />
                  <polygon 
                    points="70,0 100,30 100,0" 
                    fill="rgba(96, 165, 250, 0.4)"
                  />
                </svg>
              </div>

              {/* Icon */}
              <div className="w-14 h-14 bg-primary-500/20 rounded-xl flex items-center justify-center mb-6 border border-primary-400/30">
                <svg className="w-7 h-7 text-primary-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>

              <h3 className="text-xl font-bold text-white mb-3">
                Fostering Necessary Conversations
              </h3>
              <p className="text-white/70 text-sm leading-relaxed">
                Fostering necessary conversations aimsted, and comprehensive justice for when we are abused.
              </p>

              {/* Bottom decorative image placeholder */}
              <div className="mt-6 h-40 rounded-lg bg-gradient-to-br from-primary-600/30 to-navy-800/50 overflow-hidden">
                <div className="w-full h-full flex items-center justify-center">
                  <div className="relative w-24 h-24">
                    <svg viewBox="0 0 100 100" className="w-full h-full opacity-60">
                      <polygon 
                        points="50,10 90,30 90,70 50,90 10,70 10,30" 
                        fill="rgba(59, 130, 246, 0.4)"
                        stroke="#60a5fa"
                        strokeWidth="1"
                      />
                      <polygon 
                        points="50,10 90,30 50,45 10,30" 
                        fill="rgba(96, 165, 250, 0.5)"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2 - Shifting Perceptions about Women */}
          <div className="relative group">
            <div className="relative bg-gradient-to-br from-primary-800/80 to-navy-900/90 rounded-2xl p-8 backdrop-blur-sm border border-primary-500/20 overflow-hidden transition-all duration-300 hover:border-primary-400/40 hover:shadow-xl hover:shadow-primary-500/10">
              {/* Geometric decoration */}
              <div className="absolute top-0 right-0 w-32 h-32 opacity-30">
                <svg viewBox="0 0 100 100" className="w-full h-full">
                  <polygon 
                    points="100,0 100,100 50,50" 
                    fill="rgba(34, 211, 238, 0.3)"
                  />
                  <polygon 
                    points="70,0 100,30 100,0" 
                    fill="rgba(34, 211, 238, 0.4)"
                  />
                </svg>
              </div>

              {/* Icon */}
              <div className="w-14 h-14 bg-accent-cyan/20 rounded-xl flex items-center justify-center mb-6 border border-accent-cyan/30">
                <svg className="w-7 h-7 text-accent-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>

              <h3 className="text-xl font-bold text-white mb-3">
                Shifting Perceptions about Women
              </h3>
              <p className="text-white/70 text-sm leading-relaxed">
                Shifting perceptions about women is mantle-erous shifting perceptions about women.
              </p>

              {/* Bottom decorative image placeholder */}
              <div className="mt-6 h-40 rounded-lg bg-gradient-to-br from-accent-cyan/20 to-navy-800/50 overflow-hidden">
                <div className="w-full h-full flex items-center justify-center">
                  <div className="relative w-32 h-28">
                    <svg viewBox="0 0 120 100" className="w-full h-full opacity-60">
                      <polygon 
                        points="60,5 110,30 110,70 60,95 10,70 10,30" 
                        fill="rgba(34, 211, 238, 0.3)"
                        stroke="#22d3ee"
                        strokeWidth="1"
                      />
                      <polygon 
                        points="60,5 110,30 60,45 10,30" 
                        fill="rgba(34, 211, 238, 0.4)"
                      />
                      <circle cx="60" cy="50" r="15" fill="rgba(34, 211, 238, 0.2)" stroke="#22d3ee" strokeWidth="0.5" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}