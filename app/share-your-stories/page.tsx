import Link from "next/link";

const stories = [
  {
    title: "We deserve justice for when we are abused",
    excerpt: "My parents would always warn me about how I had to be careful around men because some (not all!!) didn't have the right intentions. I never really listened and always …",
  },
  {
    title: "Parkour Practitioner, Teacher for Social Change",
    excerpt: "I'm a high school English teacher in NYC, a coach, a professional parkour practitioner (traceuse), and a 4-time American Ninja Warrior. I'm trying to promote a different image of women …",
  },
  {
    title: "Ms.",
    excerpt: "We can no longer remain silent. Each woman's voice needs to be heard. Our stories need to be told. We need to share our collective stories. We must raise our …",
  },
  {
    title: "Tech Teacher Private School",
    excerpt: "I am left speechless when a co-worker has a problem with their iPhone or the printer or other technology device and they fail to ask me for help. My position …",
  },
  {
    title: "Trying to make a change",
    excerpt: "Since I was a kid, my mom taught me how important it was to be independent and free. For all my life I thought I could make some change. Women suffer …",
  },
  {
    title: "Can't Touch This",
    excerpt: "I moved houses, states, schools, all within the past year. I grew up in an environment in which progressive, trailblazing ideas were commended and labeled innovative. In this environment I …",
  },
  {
    title: "The debate",
    excerpt: "A few days ago I was in class and we were talking about police brutality. Because the cop that was not following protocol was female, my teacher decided it was okay …",
  },
  {
    title: "Gender Roles SUCK",
    excerpt: "Gender roles are embedded into all of us and they control every bit of our thinking and decision making. I am working on raising a strong 3 year old girl …",
  },
  {
    title: "A Testimony To a Mother Working From Home",
    excerpt: "My grandmother was born in 1941 to a mother and a father that died when she was in her thirties. Over vacation when I visited her beautiful house in southern …",
  },
  {
    title: "Taking Computer Science to the Elementary School",
    excerpt: "After I went to an all girls computer science program a few years ago, I really questioned why men believed that the STEAM field was just for them. A big …",
  },
  {
    title: "Sexism in STEM. 3rd grade experience.",
    excerpt: "I love robots, my VEX robotics team went to the World competition this year and won a award, but It wasn't always this way for me I have had to …",
  },
  {
    title: "Slut",
    excerpt: "I have been told my whole life how girls can't do things; how they're not as good in sports as boys, how they don't belong in politics, etc. But you …",
  },
  {
    title: "23 years in technology and now I'm launching a startup",
    excerpt: "I started going to school majoring in CIS shortly after the birth of my first son. At that time I was making barely above minimum wage as a bank teller …",
  },
  {
    title: "strong",
    excerpt: "I am an athlete. The coach of the football team wants me to be on his high school team but the boys have started picking on me because I am …",
  },
  {
    title: "Corporate Chaos",
    excerpt: "A couple months ago I was invited to a private lunch with an executive and other alumni from my high school. The executive came from the same hometown that we …",
  },
  {
    title: "Grafham Studio Creations at 62",
    excerpt: "I am a mixed media artist. My life goal is to be a full time working artist. When I embarked on my journey in the last few years, it became …",
  },
  {
    title: "(Wonder) Woman",
    excerpt: "Christian + Division 1 Basketball Player + Professional Figure Athlete + PhD = (Wonder) Woman. …",
  },
  {
    title: "Cooking class",
    excerpt: "I was sitting in cooking class when I turned around and said something about drama class to the boy behind me and he spat in my face. so I told …",
  },
];

export default function ShareYourStoriesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-navy-950 via-navy-900 to-navy-950">
      {/* Hero Section */}
      <div className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-hero-gradient">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 right-20 w-32 h-40 opacity-30">
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
            Share Your Story
          </h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Through storytelling, community building, innovation and creative disruptions, #ItWasNeverADress is fostering conversations that are necessary to shift perceptions about women.
          </p>
        </div>
      </div>

      {/* Stories Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {stories.map((story, index) => (
            <div
              key={index}
              className="bg-navy-800/50 border border-primary-500/10 rounded-xl p-6 hover:border-primary-500/30 transition-all duration-300"
            >
              <h3 className="text-lg font-semibold text-white mb-3">
                {story.title}
              </h3>
              <p className="text-sm text-white/60 line-clamp-4">
                {story.excerpt}
              </p>
              <button className="mt-4 text-sm text-primary-400 font-medium hover:text-primary-300 transition-colors">
                Read More →
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-navy-900/50 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Share Your Own Story
          </h2>
          <p className="text-white/70 mb-8">
            We all struggle as women, for various reasons. We work, take care of our families, support our friends, and as if there is time left over, try to take care of ourselves. Share your story and join the movement.
          </p>
          <Link
            href="/contact-us"
            className="inline-flex items-center justify-center px-8 py-4 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-lg transition-all duration-300"
          >
            Submit Your Story
          </Link>
        </div>
      </div>
    </div>
  );
}