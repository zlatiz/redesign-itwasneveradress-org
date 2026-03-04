import Link from "next/link";

export default function ShareYourStory() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-hero-gradient pt-32 pb-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Share Your Story
          </h1>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Through storytelling, community building, innovation and creative disruptions, #ItWasNeverADress is fostering conversations that are necessary to shift perceptions about women.
          </p>
        </div>
      </section>

      {/* Stories Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Story Card 1 */}
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                We deserve justice for when we are abused
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                My parents would always warn me about how I had to be careful around men because some (not all!!) didn&apos;t have the right intentions. I never really listened and always …
              </p>
              <Link href="#" className="text-brand-blue font-medium text-sm hover:text-brand-accent">
                Read More →
              </Link>
            </div>

            {/* Story Card 2 */}
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Parkour Practitioner, Teacher for Social Change
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                I&apos;m a high school English teacher in NYC, a coach, a professional parkour practitioner (traceuse), and a 4-time American Ninja Warrior. I&apos;m trying to promote a different image of women …
              </p>
              <Link href="#" className="text-brand-blue font-medium text-sm hover:text-brand-accent">
                Read More →
              </Link>
            </div>

            {/* Story Card 3 */}
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Ms.
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                We can no longer remain silent. Each woman&apos;s voice needs to be heard. Our stories need to be told. We need to share our collective stories. We must raise our …
              </p>
              <Link href="#" className="text-brand-blue font-medium text-sm hover:text-brand-accent">
                Read More →
              </Link>
            </div>

            {/* Story Card 4 */}
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Tech Teacher Private School
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                I am left speechless when a co-worker has a problem with their iPhone or the printer or other technology device and they fail to ask me for help. My position …
              </p>
              <Link href="#" className="text-brand-blue font-medium text-sm hover:text-brand-accent">
                Read More →
              </Link>
            </div>

            {/* Story Card 5 */}
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Trying to make a change
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                Since I was a kid, my mom taught me how important it was to be independent and free. For all my life I thought I could make some change. Women suffer …
              </p>
              <Link href="#" className="text-brand-blue font-medium text-sm hover:text-brand-accent">
                Read More →
              </Link>
            </div>

            {/* Story Card 6 */}
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Can&apos;t Touch This
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                I moved houses, states, schools, all within the past year. I grew up in an environment in which progressive, trailblazing ideas were commended and labeled innovative. In this environment I …
              </p>
              <Link href="#" className="text-brand-blue font-medium text-sm hover:text-brand-accent">
                Read More →
              </Link>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center mt-12">
            <button className="bg-brand-blue hover:bg-brand-accent text-white font-semibold px-8 py-3 rounded-lg transition-colors">
              Submit Your Story
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}