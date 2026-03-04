export default function Privacy() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-hero-gradient pt-32 pb-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Privacy Policy
          </h1>
        </div>
      </section>

      {/* Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Your Privacy Matters</h2>
              <div className="prose prose-gray max-w-none">
                <p className="text-gray-600 mb-4">
                  At #ItWasNeverADress, we are committed to protecting your privacy and ensuring your personal information is handled responsibly.
                </p>
                <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-2">Information We Collect</h3>
                <p className="text-gray-600 mb-4">
                  We collect information you provide directly to us, such as when you share your story, contact us, or subscribe to our newsletter.
                </p>
                <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-2">How We Use Your Information</h3>
                <p className="text-gray-600 mb-4">
                  We use the information we collect to operate and improve our services, communicate with you, and share stories that help shift perceptions about women.
                </p>
                <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-2">Copyright Notice</h3>
                <p className="text-gray-600">
                  #ItWasNeverADress image is protected by official Copyright, 2015-2020.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}