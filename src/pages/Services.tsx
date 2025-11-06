import { Monitor, Smartphone, Brain, Tag } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero';
import Footer from '../components/Footer';

const servicesData = [
  {
    icon: Monitor,
    title: 'Web Development',
    description: 'Creating responsive, high-performance websites that deliver exceptional user experiences.',
  },
  {
    icon: Smartphone,
    title: 'App Development',
    description: 'Building native and cross-platform mobile applications for iOS and Android.',
  },
  {
    icon: Brain,
    title: 'AI Integration',
    description: 'Leveraging artificial intelligence for business automation and data-driven insights.',
  },
  {
    icon: Tag,
    title: 'Branding',
    description: 'Creating powerful brand identities that resonate with your target audience.',
  },
];

function Services() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-slate-900">
      <PageHero
        title="Our Services"
        subtitle="Digital solutions to empower your business and drive results."
      />

      <section className="py-20 px-4 bg-slate-900">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {servicesData.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className="slide-in-cards bg-slate-800 border border-slate-700 rounded-xl p-8 flex flex-col transition-all duration-500 hover:border-emerald-600/50 hover:shadow-2xl hover:shadow-emerald-600/30 hover:scale-105 group"
                  style={{ animationDelay: `${index * 0.15}s` }}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  <div className="flex items-start mb-6">
                    <div className={`transition-all duration-500 ${hoveredIndex === index ? 'scale-125' : 'scale-100'}`}>
                      <Icon className="w-12 h-12 text-emerald-600 flex-shrink-0 group-hover:text-emerald-500" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-semibold text-white mb-4 group-hover:text-emerald-400 transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-gray-300 mb-6 flex-grow transition-colors duration-300 group-hover:text-white">
                    {service.description}
                  </p>
                  {service.title === 'Web Development' ? (
                    <Link
                      to="/services/web-development"
                      className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold px-6 py-3 rounded-lg transition-all duration-300 w-fit block transform hover:scale-110 active:scale-95 text-center"
                    >
                      Learn More
                    </Link>
                  ) : service.title === 'App Development' ? (
                    <Link
                      to="/services/app-development"
                      className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold px-6 py-3 rounded-lg transition-all duration-300 w-fit block transform hover:scale-110 active:scale-95 text-center"
                    >
                      Learn More
                    </Link>
                  ) : service.title === 'AI Integration' ? (
                    <Link
                      to="/services/ai-integration"
                      className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold px-6 py-3 rounded-lg transition-all duration-300 w-fit block transform hover:scale-110 active:scale-95 text-center"
                    >
                      Learn More
                    </Link>
                  ) : (
                    <button className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold px-6 py-3 rounded-lg transition-all duration-300 w-fit transform hover:scale-110 active:scale-95">
                      Learn More
                    </button>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Services;
