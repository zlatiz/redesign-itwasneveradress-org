export default function Press() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-hero-gradient pt-32 pb-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Press
          </h1>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Media coverage and press resources for #ItWasNeverADress
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-xl p-8 shadow-lg mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">In The News</h2>
              <div className="space-y-6">
                <div className="border-b border-gray-100 pb-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Fox 10 News</h3>
                  <p className="text-gray-600 text-sm mb-2">
                    Fox 10 News Capes Up! Coverage of the #ItWasNeverADress movement.
                  </p>
                  <span className="text-brand-blue text-sm">Read More →</span>
                </div>
                <div className="border-b border-gray-100 pb-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Fox 10 News</h3>
                  <p className="text-gray-600 text-sm mb-2">
                    Fox 10 News Team Capes Up! Additional coverage and interviews.
                  </p>
                  <span className="text-brand-blue text-sm">Read More →</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Press Contact</h2>
              <p className="text-gray-600 mb-4">
                For media inquiries, interviews, or press materials, please contact us through our contact page.
              </p>
              <a
                href="/contact-us"
                className="inline-block bg-brand-blue hover:bg-brand-accent text-white font-semibold px-6 py-3 rounded-lg transition-colors"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}