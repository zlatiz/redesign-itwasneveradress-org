export default function Disrupt() {
  return (
    <main className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
          Free Stuff
        </h1>

        <div className="prose max-w-none">
          <p className="text-lg text-gray-700 mb-8">
            Download free resources to help spread the message of #ItWasNeverADress. Use these materials to disrupt stereotypes and empower women in your community.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="bg-white p-8 rounded-lg shadow-md border border-gray-200">
              <div className="w-16 h-16 bg-primary text-white rounded-lg flex items-center justify-center mb-6 text-2xl font-bold">
                PDF
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Printable Posters
              </h3>
              <p className="text-gray-700 mb-4">
                High-resolution posters you can print and display in your workplace, school, or community center.
              </p>
              <button className="text-primary hover:text-primary-dark font-semibold">
                Download →
              </button>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md border border-gray-200">
              <div className="w-16 h-16 bg-primary text-white rounded-lg flex items-center justify-center mb-6 text-2xl font-bold">
                SVG
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Logo Files
              </h3>
              <p className="text-gray-700 mb-4">
                Vector logo files for use in your presentations, websites, and promotional materials.
              </p>
              <button className="text-primary hover:text-primary-dark font-semibold">
                Download →
              </button>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md border border-gray-200">
              <div className="w-16 h-16 bg-primary text-white rounded-lg flex items-center justify-center mb-6 text-2xl font-bold">
                IMG
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Social Media Graphics
              </h3>
              <p className="text-gray-700 mb-4">
                Ready-to-share graphics optimized for Instagram, Facebook, Twitter, and LinkedIn.
              </p>
              <button className="text-primary hover:text-primary-dark font-semibold">
                Download →
              </button>
            </div>
          </div>

          <div className="mt-16 bg-gray-50 p-8 rounded-lg">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Usage Guidelines
            </h2>
            <p className="text-gray-700 mb-4">
              All resources are free to use for non-commercial purposes. We encourage you to:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
              <li>Share widely on social media using #ItWasNeverADress</li>
              <li>Display in educational and workplace settings</li>
              <li>Use in presentations about gender equality</li>
              <li>Include in community awareness campaigns</li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}
