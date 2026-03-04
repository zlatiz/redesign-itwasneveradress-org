export default function MediaPage() {
  const pressItems = [
    {
      title: "Fox 10 News",
      description: "Fox 10 News Capes Up! …",
    },
    {
      title: "Fox 10 News",
      description: "Fox 10 News Team Capes Up! …",
    },
    {
      title: "Girls in Tech Catalyst Conference",
      description: "Sara and I taking the It Was Never A Dress lady on a rickshaw ride in Downtown Phoenix! …",
    },
    {
      title: "Landing at Phoenix Comicon",
      description: "My arms are a little tired after the flight to Comicon! #ItWasNeverADress …",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-navy-950 via-navy-900 to-navy-950">
      {/* Hero Section */}
      <div className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-hero-gradient">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-24 left-24 w-20 h-28 opacity-30">
            <svg viewBox="0 0 80 100" className="w-full h-full">
              <polygon 
                points="40,0 80,20 80,70 40,90 0,70 0,20" 
                fill="rgba(34, 211, 238, 0.4)"
                stroke="#22d3ee"
                strokeWidth="1"
              />
            </svg>
          </div>
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
            Press & Media
          </h1>
          <p className="text-xl text-white/80">
            #ItWasNeverADress in the news and media coverage
          </p>
        </div>
      </div>

      {/* Press Items */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid sm:grid-cols-2 gap-8">
          {pressItems.map((item, index) => (
            <div
              key={index}
              className="bg-navy-800/50 border border-primary-500/10 rounded-xl p-6 hover:border-primary-500/30 transition-all duration-300"
            >
              <div className="h-48 bg-navy-700/50 rounded-lg mb-6 flex items-center justify-center">
                <svg className="w-16 h-16 text-primary-500/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                {item.title}
              </h3>
              <p className="text-white/60 text-sm">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Press Contact */}
        <div className="mt-20 bg-navy-800/50 border border-primary-500/10 rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Media Inquiries</h2>
          <p className="text-white/70 mb-6 max-w-2xl mx-auto">
            For press inquiries, interview requests, or media coverage opportunities, please reach out to us.
          </p>
          <a
            href="/contact-us"
            className="inline-flex items-center justify-center px-8 py-4 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-lg transition-all duration-300"
          >
            Contact Us
          </a>
        </div>
      </div>
    </div>
  );
}