import Link from "next/link";

export default function DisruptPage() {
  const resources = [
    {
      title: "Stickers",
      description: "Download and print #ItWasNeverADress stickers to spread the message.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
        </svg>
      ),
    },
    {
      title: "Posters",
      description: "Print these posters and put them up in your community.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      title: "Social Media Graphics",
      description: "Share these graphics on your social media to spread awareness.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
        </svg>
      ),
    },
    {
      title: "Bathroom Sign Templates",
      description: "Transform bathroom signs in your workplace to show support.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      ),
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-navy-950 via-navy-900 to-navy-950">
      {/* Hero Section */}
      <div className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-hero-gradient">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-32 right-16 w-28 h-36 opacity-40">
            <svg viewBox="0 0 100 120" className="w-full h-full">
              <polygon 
                points="50,0 100,30 100,90 50,120 0,90 0,30" 
                fill="rgba(59, 130, 246, 0.4)"
                stroke="#60a5fa"
                strokeWidth="1"
              />
            </svg>
          </div>
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
            Free Stuff
          </h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Download free resources to help spread the #ItWasNeverADress movement in your community.
          </p>
        </div>
      </div>

      {/* Resources Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid sm:grid-cols-2 gap-8">
          {resources.map((resource, index) => (
            <div
              key={index}
              className="bg-navy-800/50 border border-primary-500/10 rounded-2xl p-8 hover:border-primary-500/30 transition-all duration-300"
            >
              <div className="w-14 h-14 bg-primary-500/20 rounded-xl flex items-center justify-center mb-6 text-primary-400">
                {resource.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                {resource.title}
              </h3>
              <p className="text-white/60 mb-6">
                {resource.description}
              </p>
              <button className="text-primary-400 font-medium hover:text-primary-300 transition-colors">
                Download →
              </button>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-20 text-center">
          <div className="bg-gradient-to-r from-primary-600/20 to-accent-cyan/20 border border-primary-500/20 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-white mb-4">
              #ItWasNeverADress image is protected by official Copyright, 2015-2020.
            </h2>
            <p className="text-white/70 mb-6">
              Feel free to use these resources for non-commercial purposes to spread awareness.
            </p>
            <Link
              href="https://www.zazzle.com/store/_itwasneveradress/products"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-lg transition-all duration-300"
            >
              Get Stickers Here!
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}