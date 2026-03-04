import Link from "next/link";

const featuredStories = [
  {
    title: "Parkour Practitioner, Teacher for Social Change",
    excerpt: "I'm a high school English teacher in NYC, a coach, a professional parkour practitioner (traceuse), and a 4-time American Ninja Warrior. I'm trying to promote a different image of women …",
    href: "/share-your-stories",
  },
  {
    title: "We deserve justice for when we are abused",
    excerpt: "My parents would always warn me about how I had to be careful around men because some (not all!!) didn't have the right intentions. I never really listened and always …",
    href: "/share-your-stories",
  },
  {
    title: "Ms.",
    excerpt: "We can no longer remain silent. Each woman's voice needs to be heard. Our stories need to be told. We need to share our collective stories. We must raise our …",
    href: "/share-your-stories",
  },
  {
    title: "Tech Teacher Private School",
    excerpt: "I am left speechless when a co-worker has a problem with their iPhone or the printer or other technology device and they fail to ask me for help. My position …",
    href: "/share-your-stories",
  },
  {
    title: "Trying to make a change",
    excerpt: "Since I was a kid, my mom taught me how important it was to be independent and free. For all my life I thought I could make some change. Women suffer …",
    href: "/share-your-stories",
  },
  {
    title: "23 years in technology and now I'm launching a startup",
    excerpt: "I started going to school majoring in CIS shortly after the birth of my first son. At that time I was making barely above minimum wage as a bank teller …",
    href: "/share-your-stories",
  },
];

export default function StoriesSection() {
  return (
    <section className="relative bg-gradient-to-b from-navy-900 to-navy-950 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Stories of Strength
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            Through storytelling, community building, innovation and creative disruptions, #ItWasNeverADress is fostering conversations that are necessary to shift perceptions about women.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredStories.map((story, index) => (
            <Link
              key={index}
              href={story.href}
              className="group bg-navy-800/50 border border-primary-500/10 rounded-xl p-6 hover:border-primary-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary-500/5"
            >
              <h3 className="text-lg font-semibold text-white mb-3 group-hover:text-primary-400 transition-colors">
                {story.title}
              </h3>
              <p className="text-sm text-white/60 line-clamp-3">
                {story.excerpt}
              </p>
              <span className="inline-block mt-4 text-sm text-primary-400 font-medium">
                Read More →
              </span>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/share-your-stories"
            className="inline-flex items-center justify-center px-8 py-4 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-lg transition-all duration-300"
          >
            View All Stories
          </Link>
        </div>
      </div>
    </section>
  );
}