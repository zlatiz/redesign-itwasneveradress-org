import FeatureCard from "./FeatureCard";

const StorytellingIcon = () => (
  <svg className="w-6 h-6 text-brand-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
  </svg>
);

const ShareIcon = () => (
  <svg className="w-6 h-6 text-brand-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
  </svg>
);

const CommunityIcon = () => (
  <svg className="w-6 h-6 text-brand-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
  </svg>
);

const InnovationIcon = () => (
  <svg className="w-6 h-6 text-brand-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
  </svg>
);

export default function FeaturesSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* First row - Featured StoryTelling and Share Your Story */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <FeatureCard
            icon={<StorytellingIcon />}
            title="StoryTelling"
            description="#Itwasneveradress locates shooting in our commonity, stressscotaney and shoraraitantit, compliciny organization and valoires of community for mums and community."
            featured={true}
            href="/share-your-story"
          />
          <FeatureCard
            icon={<ShareIcon />}
            title="Share Your Story"
            description="We deserve justice for when we are abused. to ensure you the inconituvscotiron sur suits voutrant technology, AI, unremeading and alasement potential, oislen, and anti-blew momans."
            href="/share-your-story"
          />
        </div>

        {/* Second row - Community Building and Innovation */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <FeatureCard
            icon={<CommunityIcon />}
            title="Community Building"
            description="We conocate towmilitos and trore promotir by community building it ivprovides with a compobor of comunity, our technology, and a sasS industry."
            href="/about"
          />
          <FeatureCard
            icon={<InnovationIcon />}
            title="Innovation"
            description="We create oaw anoration of espection out of the firals and innovation is sympaty, or airows eonetice."
            href="/about"
          />
        </div>

        {/* Third row - Three cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <FeatureCard
            icon={<StorytellingIcon />}
            title="Storytelling"
            description="Our openmunitess now alowass proeices:movetem and community and emsteas and emetioattal and stuff."
            href="/share-your-story"
          />
          <FeatureCard
            icon={<CommunityIcon />}
            title="Community"
            description="We deserve justice for when we community building, wot joining, cowmnitos and olaseveral community."
            href="/about"
          />
          <FeatureCard
            icon={<InnovationIcon />}
            title="Innovation"
            description="Our innovaiterns is inovational technologyan-salt imne technology, ell and dwant crerate unassitna and Intelligence."
            href="/about"
          />
        </div>
      </div>
    </section>
  );
}