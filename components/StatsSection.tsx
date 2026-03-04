export default function StatsSection() {
  const stats = [
    { number: "106", label: "Storytelling" },
    { number: "3,000+", label: "Community Building" },
    { number: "200+", label: "Creative Disruptions" },
  ];

  return (
    <section className="relative bg-stats-gradient py-20 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary-500/30 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary-500/30 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white leading-tight">
            Through storytelling, community building,<br />
            innovation & creative disruptions....
          </h2>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-5xl sm:text-6xl md:text-7xl font-bold text-white mb-2 tracking-tight">
                {stat.number}
              </div>
              <div className="text-sm sm:text-base text-white/70 font-medium uppercase tracking-wider">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}