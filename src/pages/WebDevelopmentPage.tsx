import { Code2, ShoppingCart, Building2, Zap, BookOpen, Cpu } from 'lucide-react';
import PageHero from '../components/PageHero';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';

const webSolutions = [
  {
    icon: ShoppingCart,
    title: 'E-commerce Stores',
    description: 'Building robust and scalable online stores to help you sell products effectively.',
  },
  {
    icon: Building2,
    title: 'Corporate Websites',
    description: 'Professional websites to showcase your brand, services, and build company trust.',
  },
  {
    icon: Code2,
    title: 'Personal Websites & Portfolios',
    description: 'Stunning personal sites or portfolios to showcase your work, skills, and experience.',
  },
  {
    icon: Zap,
    title: 'Landing Pages',
    description: 'High-converting single pages designed specifically for your marketing campaigns.',
  },
  {
    icon: BookOpen,
    title: 'Blogs & CMS',
    description: 'Dynamic blogs and content management systems (CMS) so you can easily publish content.',
  },
  {
    icon: Cpu,
    title: 'Backend & APIs',
    description: 'Developing powerful backends and APIs to power your web and mobile applications.',
  },
];

const processSteps = [
  {
    step: 1,
    title: 'Discovery & Planning',
    description: 'We start by understanding your goals, audience, and project requirements.',
  },
  {
    step: 2,
    title: 'UI/UX Design',
    description: 'We design an intuitive and beautiful user interface that your users will love.',
  },
  {
    step: 3,
    title: 'Development',
    description: 'Our expert developers bring the design to life using clean and efficient code.',
  },
  {
    step: 4,
    title: 'Launch & Support',
    description: 'We deploy your website to the server and provide ongoing support.',
  },
];

const technologies = [
  { name: 'React', icon: '⚛️' },
  { name: 'Node.js', icon: '🟢' },
  { name: 'TypeScript', icon: '🔵' },
  { name: 'Tailwind CSS', icon: '🎨' },
  { name: 'PostgreSQL', icon: '🐘' },
  { name: 'Next.js', icon: '⬛' },
];

function WebDevelopmentPage() {
  return (
    <div className="min-h-screen bg-slate-900">
      <PageHero
        title="Web Development"
        subtitle="We build fast, secure, and responsive websites that convert visitors into customers."
      />

      <section className="py-20 px-4 bg-slate-900">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-4">
            Our Web Solutions
          </h2>
          <p className="text-center text-gray-400 mb-16 text-lg max-w-2xl mx-auto">
            We provide a complete range of web services tailored to your specific needs.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {webSolutions.map((solution, index) => (
              <div
                key={index}
                className="bg-slate-800/40 backdrop-blur-sm border border-slate-700 rounded-2xl p-8 text-center transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-emerald-600/30 hover:border-emerald-600/50 group"
              >
                <div className="flex justify-center mb-6">
                  <div className="bg-emerald-600/20 rounded-full p-6 border border-emerald-600/30 group-hover:bg-emerald-600/30 transition-all duration-300">
                    <solution.icon className="w-12 h-12 text-emerald-600 group-hover:scale-110 transition-transform duration-300" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-emerald-400 transition-colors duration-300">
                  {solution.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {solution.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-black">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-16">
            Our Development Process
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {processSteps.map((stepItem, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="bg-emerald-600 rounded-full w-16 h-16 flex items-center justify-center mb-6 text-white font-bold text-2xl">
                  {stepItem.step}
                </div>
                <h3 className="text-xl font-bold text-white text-center mb-4">
                  {stepItem.title}
                </h3>
                <p className="text-gray-400 text-center leading-relaxed">
                  {stepItem.description}
                </p>
              </div>
            ))}
          </div>

          <div className="hidden md:flex items-center justify-between mt-12 px-8">
            <div className="flex-1 h-1 bg-gradient-to-r from-emerald-600 to-transparent"></div>
            <div className="flex-1 h-1 bg-gradient-to-r from-transparent via-emerald-600 to-transparent"></div>
            <div className="flex-1 h-1 bg-gradient-to-l from-emerald-600 to-transparent"></div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-slate-900">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-16">
            Technologies We Use
          </h2>

          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            {technologies.map((tech, index) => (
              <div key={index} className="flex flex-col items-center gap-3">
                <div className="bg-slate-800/40 backdrop-blur-sm border border-slate-700 rounded-2xl p-6 transition-all duration-300 hover:transform hover:scale-110 hover:shadow-xl hover:shadow-emerald-600/30 hover:border-emerald-600/50">
                  <span className="text-4xl">{tech.icon}</span>
                </div>
                <p className="text-gray-300 font-semibold text-center">
                  {tech.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gradient-to-br from-emerald-950 via-slate-900 to-black">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Build Your Website?
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 mb-12 leading-relaxed">
            Whether it's a simple idea or a complex project, our team is ready to help.
          </p>
          <a
            href="https://wa.me/201553514081?text=I%27m%20asking%20about%20the%20web%20development%20service"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-emerald-600 hover:bg-emerald-700 text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-emerald-600/50"
          >
            Get in Touch via WhatsApp
          </a>
        </div>
      </section>

      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default WebDevelopmentPage;
