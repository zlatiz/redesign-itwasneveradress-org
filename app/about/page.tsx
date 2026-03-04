export default function About() {
  return (
    <main className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
          About #ItWasNeverADress
        </h1>

        <div className="prose max-w-none">
          <p className="text-lg text-gray-700 mb-6">
            Through storytelling, community building, innovation and creative disruptions, #ItWasNeverADress is fostering conversations that are necessary to shift perceptions about women.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Our Mission</h2>
              <p className="text-gray-700 mb-4">
                We believe in empowering women through storytelling and community engagement. Our platform provides a space for women to share their experiences, challenges, and triumphs.
              </p>
              <p className="text-gray-700">
                By changing conventional narratives and challenging stereotypes, we work to create a more inclusive and equitable world for all women.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Our Approach</h2>
              <p className="text-gray-700 mb-4">
                Through compelling storytelling in empowerment and celebration, we amplify the voices of women from all backgrounds and professions.
              </p>
              <p className="text-gray-700">
                We engage communities through creative initiatives and innovative ways of opening important conversations about gender equality and women's empowerment.
              </p>
            </div>
          </div>

          <div className="mt-16 bg-primary text-white p-12 rounded-lg">
            <h2 className="text-3xl font-bold mb-6">Join Our Movement</h2>
            <p className="text-lg mb-6">
              Be part of a community that celebrates women's achievements and challenges the status quo. Together, we can create lasting change.
            </p>
            <a
              href="/share-your-stories"
              className="inline-block bg-white text-primary px-8 py-3 rounded-md hover:bg-gray-100 transition-colors font-semibold"
            >
              Share Your Story
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
