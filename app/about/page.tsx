export default function About() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-hero-gradient pt-32 pb-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            About
          </h1>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Through storytelling, community building, innovation & creative disruptions, #ItWasNeverADress is fostering conversations that are necessary to shift perceptions about women.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-xl p-8 shadow-lg mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h2>
              <p className="text-gray-600 mb-4">
                Through storytelling, community building, innovation and creative disruptions, #ItWasNeverADress is fostering conversations that are necessary to shift perceptions about women.
              </p>
              <p className="text-gray-600">
                We believe every woman deserves to have her voice heard. Our platform provides a space for women to share their experiences, connect with others, and inspire change in their communities and beyond.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">What We Do</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Storytelling</h3>
                  <p className="text-gray-600 text-sm">
                    We provide a platform for women to share their stories and experiences, creating a powerful narrative of strength and resilience.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Community Building</h3>
                  <p className="text-gray-600 text-sm">
                    We foster connections between women from all walks of life, building a supportive community that uplifts and empowers.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Innovation</h3>
                  <p className="text-gray-600 text-sm">
                    We leverage technology and creative approaches to amplify women&apos;s voices and drive meaningful change.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Creative Disruptions</h3>
                  <p className="text-gray-600 text-sm">
                    We challenge stereotypes and shift perceptions through bold, creative initiatives that spark conversation.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">The Symbol</h2>
              <p className="text-gray-600">
                The iconic image you see on bathroom signs everywhere shows a figure in what appears to be a dress. But look again - it was never a dress. It&apos;s a cape. And every woman is a superhero.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}