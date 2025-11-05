import { Monitor, Smartphone, Brain, Tag } from 'lucide-react';
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
                  className="bg-slate-800 border border-slate-700 rounded-xl p-8 flex flex-col transition-all duration-300 hover:border-emerald-600/50 hover:shadow-lg hover:shadow-emerald-600/20"
                >
                  <div className="flex items-start mb-6">
                    <Icon className="w-12 h-12 text-emerald-600 flex-shrink-0" />
                  </div>
                  <h3 className="text-2xl font-semibold text-white mb-4">
                    {service.title}
                  </h3>
                  <p className="text-gray-300 mb-6 flex-grow">
                    {service.description}
                  </p>
                  <button className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold px-6 py-3 rounded-lg transition-all duration-300 w-fit">
                    Learn More
                  </button>
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
