export default function StatsSection() {
  return (
    <section className="py-20 bg-stats-gradient">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
          {/* Stats Column */}
          <div className="text-center lg:text-left">
            <div className="mb-8">
              <p className="text-5xl md:text-6xl font-bold text-brand-lightBlue mb-2">
                1.19 miln
              </p>
              <p className="text-white/80 text-lg">Key Movement</p>
            </div>
            <div>
              <p className="text-5xl md:text-6xl font-bold text-brand-lightBlue mb-2">
                200+
              </p>
              <p className="text-white/80 text-lg">Stats/Highlights</p>
            </div>
          </div>

          {/* Testimonial 1 */}
          <div className="text-center">
            <div className="text-brand-blue text-4xl mb-4">&ldquo;&ldquo;</div>
            <p className="text-white/90 text-lg mb-4">
              We deserve justice for when we are abused. or ths moneadress to this movement.
            </p>
            <p className="text-white/60 text-sm">— Mootin Merois</p>
          </div>

          {/* Testimonial 2 */}
          <div className="text-center">
            <div className="text-brand-blue text-4xl mb-4">&ldquo;&ldquo;</div>
            <p className="text-white/90 text-lg mb-4">
              We deserve justice for when we are abused to oresyinto our entire iravvement.
            </p>
            <p className="text-white/60 text-sm">— Austiv Store</p>
          </div>
        </div>
      </div>
    </section>
  );
}