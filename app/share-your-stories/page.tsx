export default function ShareYourStories() {
  return (
    <main className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
          Share Your Story
        </h1>

        <div className="prose max-w-none">
          <p className="text-lg text-gray-700 mb-6">
            Through storytelling, community building, innovation and creative disruptions, #ItWasNeverADress is fostering conversations that are necessary to shift perceptions about women.
          </p>

          <div className="bg-gray-50 p-8 rounded-lg mt-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Submit Your Story
            </h2>
            <p className="text-gray-700 mb-6">
              We want to hear from you. Share your experiences, challenges, and triumphs. Your story matters and can inspire others.
            </p>
            <p className="text-gray-700">
              Every voice counts in changing the narrative about women in all fields and walks of life.
            </p>
          </div>

          <div className="mt-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Featured Stories</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Mean boys</h3>
                <p className="text-gray-700">
                  I am currently 20 years old and this 2018 will be turning 21. To be honest, when I was 13/14 years old I didn't think I would become the person …
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">STOP compassion</h3>
                <p className="text-gray-700">
                  This is my third year working as QA Engineer and Software developer. I love my job. But what I hate the most is to hear some comments of compassion coming from …
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">self sufficient</h3>
                <p className="text-gray-700">
                  My mom and dad raised a strong independent self sufficient woman. I have worked my way through school earning an associates degree and then a bachelors degree, all the while …
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Gender Roles SUCK</h3>
                <p className="text-gray-700">
                  Gender roles are embedded into all of us and they control every bit of our thinking and decision making. I am working on raising a strong 3 year old girl …
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
