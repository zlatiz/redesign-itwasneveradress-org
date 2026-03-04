import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-hero-gradient overflow-hidden">
      {/* Geometric Background Elements */}
      <div className="absolute inset-0">
        {/* Top left crystal */}
        <div className="absolute top-20 left-10 md:left-20 w-20 h-24 md:w-32 md:h-40">
          <svg viewBox="0 0 100 120" className="w-full h-full opacity-60">
            <defs>
              <linearGradient id="crystal1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.6" />
                <stop offset="100%" stopColor="#1e40af" stopOpacity="0.3" />
              </linearGradient>
            </defs>
            <polygon 
              points="50,0 100,30 100,90 50,120 0,90 0,30" 
              fill="url(#crystal1)"
              stroke="#60a5fa"
              strokeWidth="1"
            />
            <polygon 
              points="50,0 100,30 50,50 0,30" 
              fill="rgba(96, 165, 250, 0.3)"
            />
            <line x1="50" y1="50" x2="50" y2="120" stroke="#60a5fa" strokeWidth="0.5" opacity="0.5" />
          </svg>
        </div>

        {/* Top center cube */}
        <div className="absolute top-16 left-1/2 -translate-x-1/2 w-16 h-20 md:w-24 md:h-28">
          <svg viewBox="0 0 80 100" className="w-full h-full opacity-50">
            <defs>
              <linearGradient id="cube1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#22d3ee" stopOpacity="0.5" />
                <stop offset="100%" stopColor="#0ea5e9" stopOpacity="0.2" />
              </linearGradient>
            </defs>
            <polygon 
              points="40,0 80,20 80,70 40,90 0,70 0,20" 
              fill="url(#cube1)"
              stroke="#22d3ee"
              strokeWidth="1"
            />
            <polygon 
              points="40,0 80,20 40,40 0,20" 
              fill="rgba(34, 211, 238, 0.2)"
            />
          </svg>
        </div>

        {/* Right side crystal */}
        <div className="absolute top-32 right-8 md:right-24 w-24 h-32 md:w-40 md:h-48">
          <svg viewBox="0 0 120 150" className="w-full h-full opacity-70">
            <defs>
              <linearGradient id="crystal2" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#60a5fa" stopOpacity="0.7" />
                <stop offset="50%" stopColor="#3b82f6" stopOpacity="0.4" />
                <stop offset="100%" stopColor="#1e40af" stopOpacity="0.2" />
              </linearGradient>
            </defs>
            <polygon 
              points="60,0 120,35 120,110 60,150 0,110 0,35" 
              fill="url(#crystal2)"
              stroke="#93c5fd"
              strokeWidth="1"
            />
            <polygon 
              points="60,0 120,35 60,55 0,35" 
              fill="rgba(147, 197, 253, 0.3)"
            />
            <line x1="60" y1="55" x2="60" y2="150" stroke="#93c5fd" strokeWidth="0.5" opacity="0.5" />
            <line x1="60" y1="55" x2="120" y2="110" stroke="#93c5fd" strokeWidth="0.5" opacity="0.3" />
            <line x1="60" y1="55" x2="0" y2="110" stroke="#93c5fd" strokeWidth="0.5" opacity="0.3" />
          </svg>
        </div>

        {/* Small floating cubes */}
        <div className="absolute top-40 left-1/4 w-8 h-10 opacity-40">
          <svg viewBox="0 0 40 50" className="w-full h-full">
            <polygon 
              points="20,0 40,12 40,38 20,50 0,38 0,12" 
              fill="rgba(59, 130, 246, 0.4)"
              stroke="#3b82f6"
              strokeWidth="0.5"
            />
          </svg>
        </div>

        {/* Bottom decorative elements */}
        <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-navy-950/50 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20 min-h-screen flex flex-col justify-center">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white tracking-tight mb-6">
            #ItWasNeverADress
          </h1>
          <p className="text-xl sm:text-2xl md:text-3xl text-white/90 font-light mb-10">
            We deserve justice for when we are abused
          </p>
          <Link
            href="/share-your-stories"
            className="inline-flex items-center justify-center px-8 py-4 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-lg transition-all duration-300 shadow-lg shadow-primary-600/30 hover:shadow-xl hover:shadow-primary-600/40 hover:-translate-y-0.5"
          >
            Join the Conversation
          </Link>
        </div>
      </div>
    </section>
  );
}