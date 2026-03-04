import Link from 'next/link';

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-purple-100 via-blue-100 to-purple-200 py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
              #ItWasNeverADress
            </h1>
            <h3 className="text-2xl md:text-3xl text-gray-700 mb-8">
              Mean boys
            </h3>
            <Link
              href="/share-your-stories"
              className="inline-block bg-primary text-white px-8 py-3 rounded-md hover:bg-primary-dark transition-colors text-lg font-medium"
            >
              Primary Call-To-Action
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-white p-8 rounded-lg shadow-md border border-gray-200">
              <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Empowering Stories</h3>
              <p className="text-gray-600">
                Through compelling and consequential storytelling in empowerment and celebration.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-white p-8 rounded-lg shadow-md border border-gray-200">
              <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Changing Narratives</h3>
              <p className="text-gray-600">
                By changing and challenging some of the conventional narratives, empowering and acknowledging women.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-white p-8 rounded-lg shadow-md border border-gray-200">
              <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Community Action</h3>
              <p className="text-gray-600">
                Through creative initiatives, engagement innovative ways participating in matters and opening conversations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <p className="text-gray-700 mb-4">
                "#ItWasNeverADress is no mannequin and community-empowering to the most marginalized."
              </p>
              <p className="text-sm text-gray-500">Author Name</p>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <p className="text-gray-700 mb-4">
                "Mean boys are afraid to have the disenfranchised the has history name the removed when not mind."
              </p>
              <p className="text-sm text-gray-500">Abby Keller</p>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <p className="text-gray-700 mb-4">
                "#ItWasNeverADress sends them creating new fresh poems sex initiative and structurally."
              </p>
              <p className="text-sm text-gray-500">Samantha Simmers</p>
            </div>
          </div>
        </div>
      </section>

      {/* Quotes Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Quote 1 */}
            <div className="bg-gray-50 p-8 rounded-lg">
              <div className="text-4xl text-primary mb-4">&ldquo;</div>
              <p className="text-gray-700 mb-6">
                #ItWasNeverADress correctly it kept too conflicts community diffuses and few the
              </p>
              <p className="text-sm font-semibold text-gray-900">Jenna Rosen</p>
            </div>

            {/* Quote 2 */}
            <div className="bg-gray-50 p-8 rounded-lg">
              <div className="text-4xl text-primary mb-4">&ldquo;</div>
              <p className="text-gray-700 mb-6">
                #ItWasNeverADress all assist in challenging engaging times and empowering ensure challenge norms, on obvious and
              </p>
              <p className="text-sm font-semibold text-gray-900">David Basso</p>
            </div>

            {/* Quote 3 */}
            <div className="bg-gray-50 p-8 rounded-lg">
              <div className="text-4xl text-primary mb-4">&ldquo;</div>
              <p className="text-gray-700 mb-6">
                #ItWasNeverADress all assist in challenging-cares on sending and empowerment ones with
              </p>
              <p className="text-sm font-semibold text-gray-900">Branya Greenspan</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold text-primary mb-2">48</div>
              <div className="text-gray-600">Partner movement</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-primary mb-2">30k</div>
              <div className="text-gray-600">Received Impact</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-primary mb-2">3k</div>
              <div className="text-gray-600">Total Impact</div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
