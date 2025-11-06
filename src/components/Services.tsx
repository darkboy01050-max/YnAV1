import { Monitor, Smartphone, Brain, Tag } from 'lucide-react';
import BlurReveal from './BlurReveal';

const services = [
  {
    icon: Monitor,
    title: 'Web Development',
  },
  {
    icon: Smartphone,
    title: 'App Development',
  },
  {
    icon: Brain,
    title: 'AI Integration',
  },
  {
    icon: Tag,
    title: 'Branding',
  },
];

function Services() {
  return (
    <section id="services" className="py-20 px-4 bg-slate-900">
      <div className="max-w-7xl mx-auto">
        <BlurReveal>
          <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-16">
            Our Services
          </h2>
        </BlurReveal>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <BlurReveal key={index} delay={index * 100}>
              <div
                className="bg-slate-800 border border-slate-700 rounded-xl p-8 flex flex-col items-center justify-center text-center transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-emerald-600/30 hover:border-emerald-600/50 group"
              >
              <service.icon className="w-16 h-16 text-emerald-600 mb-4 group-hover:text-emerald-500 transition-colors duration-300 group-hover:scale-110" />
              <h3 className="text-lg font-semibold text-white group-hover:text-emerald-400 transition-colors duration-300">
                {service.title}
              </h3>
              </div>
            </BlurReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
