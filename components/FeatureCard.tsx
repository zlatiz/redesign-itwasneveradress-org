import Link from "next/link";

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  featured?: boolean;
  href?: string;
}

export default function FeatureCard({
  icon,
  title,
  description,
  featured = false,
  href = "#",
}: FeatureCardProps) {
  return (
    <div
      className={`bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow ${
        featured ? "border-l-4 border-brand-blue" : ""
      }`}
    >
      <div className="w-12 h-12 bg-brand-blue/10 rounded-lg flex items-center justify-center mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600 text-sm mb-4 line-clamp-4">{description}</p>
      <Link
        href={href}
        className="inline-flex items-center text-brand-blue font-medium text-sm hover:text-brand-accent transition-colors"
      >
        Learn More
        <svg
          className="w-4 h-4 ml-1"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </Link>
    </div>
  );
}