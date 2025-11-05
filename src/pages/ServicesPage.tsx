import { Monitor, Smartphone, Brain, Tag } from 'lucide-react';
import PageHero from '../components/PageHero';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';
import ScrollReveal from '../components/ScrollReveal';

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

function ServicesPage() {
  return (
    <div className="min-h-screen bg-slate-900">
      <PageHero
        title="Our Services"
        subtitle="Digital solutions to empower your business and drive results, from web development to advanced AI integration."
      />

      <section className="py-20 px-4 bg-slate-900">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-16">
              What We Do
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {servicesData.map((service, index) => (
              <ScrollReveal key={index}>
                <div
                  className="bg-slate-800/40 backdrop-blur-sm border border-slate-700 rounded-2xl p-8 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-emerald-600/30 hover:border-emerald-600/50 group"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex justify-center mb-6">
                    <div className="bg-emerald-600/20 rounded-full p-6 border border-emerald-600/30 group-hover:bg-emerald-600/30 transition-all duration-300">
                      <service.icon className="w-12 h-12 text-emerald-600 group-hover:scale-110 transition-transform duration-300" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-white text-center mb-4 group-hover:text-emerald-400 transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-gray-400 text-center mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <div className="flex justify-center">
                    <button className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold px-6 py-3 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-emerald-600/50">
                      Learn More
                    </button>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default ServicesPage;
