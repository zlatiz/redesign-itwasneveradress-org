export default function Media() {
  return (
    <main className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
          Press & Media
        </h1>

        <div className="prose max-w-none">
          <p className="text-lg text-gray-700 mb-8">
            #ItWasNeverADress has been featured in various media outlets and continues to generate conversations about women's empowerment and gender equality.
          </p>

          <div className="grid grid-cols-1 gap-8 mt-12">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="text-sm text-gray-500 mb-2">Featured Coverage</div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                Fox 10 News
              </h3>
              <p className="text-gray-700 mb-4">
                Our movement was featured on Fox 10 News, highlighting the impact of #ItWasNeverADress on communities and workplaces across the country.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="text-sm text-gray-500 mb-2">Media Coverage</div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                Girls in Tech Catalyst Conference
              </h3>
              <p className="text-gray-700 mb-4">
                #ItWasNeverADress was prominently featured at the Girls in Tech Catalyst Conference, inspiring the next generation of women in technology.
              </p>
            </div>
          </div>

          <div className="mt-16 bg-gray-50 p-8 rounded-lg">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Press Kit
            </h2>
            <p className="text-gray-700 mb-6">
              For media inquiries, interviews, or to request our press kit, please contact us at:
            </p>
            <a
              href="/contact-us"
              className="inline-block bg-primary text-white px-8 py-3 rounded-md hover:bg-primary-dark transition-colors font-semibold"
            >
              Contact Press Team
            </a>
          </div>

          <div className="mt-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">
              In the News
            </h2>
            <div className="space-y-6">
              <div className="border-l-4 border-primary pl-6">
                <p className="text-gray-700">
                  Through storytelling, community building, innovation and creative disruptions, #ItWasNeverADress is fostering conversations that are necessary to shift perceptions about women.
                </p>
              </div>
              <div className="border-l-4 border-primary pl-6">
                <p className="text-gray-700">
                  The movement continues to gain momentum with over 48 partner organizations and 30,000+ people reached through our initiatives.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
