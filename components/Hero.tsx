import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-[600px] bg-hero-gradient overflow-hidden">
      {/* Geometric decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Crystal/polygon shapes */}
        <svg
          className="absolute top-20 left-10 w-32 h-32 opacity-20"
          viewBox="0 0 100 100"
          fill="none"
        >
          <polygon
            points="50,5 95,30 80,90 20,90 5,30"
            stroke="rgba(59, 130, 246, 0.5)"
            strokeWidth="1"
            fill="none"
          />
        </svg>
        <svg
          className="absolute top-40 right-20 w-48 h-48 opacity-15"
          viewBox="0 0 100 100"
          fill="none"
        >
          <polygon
            points="50,0 100,35 85,100 15,100 0,35"
            stroke="rgba(96, 165, 250, 0.4)"
            strokeWidth="0.5"
            fill="none"
          />
          <polygon
            points="50,15 85,40 75,90 25,90 15,40"
            stroke="rgba(96, 165, 250, 0.3)"
            strokeWidth="0.5"
            fill="none"
          />
        </svg>
        
        {/* Grid lines */}
        <div className="absolute bottom-0 left-0 right-0 h-64 opacity-10">
          <svg className="w-full h-full" viewBox="0 0 800 200" preserveAspectRatio="none">
            <defs>
              <linearGradient id="gridFade" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="transparent" />
                <stop offset="100%" stopColor="#3b82f6" />
              </linearGradient>
            </defs>
            {[...Array(20)].map((_, i) => (
              <line
                key={`v-${i}`}
                x1={i * 40}
                y1="0"
                x2={i * 40 + 100}
                y2="200"
                stroke="url(#gridFade)"
                strokeWidth="0.5"
              />
            ))}
            {[...Array(10)].map((_, i) => (
              <line
                key={`h-${i}`}
                x1="0"
                y1={i * 20}
                x2="800"
                y2={i * 20}
                stroke="url(#gridFade)"
                strokeWidth="0.5"
              />
            ))}
          </svg>
        </div>

        {/* Floating geometric shapes */}
        <div className="absolute top-32 left-1/4 w-16 h-16 opacity-20">
          <svg viewBox="0 0 50 50" fill="none">
            <polygon points="25,5 45,45 5,45" stroke="#60a5fa" strokeWidth="1" fill="none" />
          </svg>
        </div>
        <div className="absolute bottom-40 right-1/4 w-24 h-24 opacity-15">
          <svg viewBox="0 0 50 50" fill="none">
            <rect x="10" y="10" width="30" height="30" stroke="#3b82f6" strokeWidth="0.5" fill="none" transform="rotate(45 25 25)" />
          </svg>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 pt-32 pb-20 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
          #ItWasNeverADress
        </h1>
        <p className="text-lg md:text-xl text-white/80 mb-8 max-w-2xl mx-auto">
          We deserve justice for when we are abused
        </p>
        <Link
          href="/share-your-story"
          className="inline-block bg-brand-blue hover:bg-brand-accent text-white font-semibold px-8 py-3 rounded-lg transition-colors"
        >
          Get The Action Now
        </Link>
      </div>
    </section>
  );
}