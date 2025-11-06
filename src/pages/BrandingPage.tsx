import { Palette, PenTool, FileText, Wand2, Printer, BookMarked, Figma, Code2, Zap } from 'lucide-react';
import PageHero from '../components/PageHero';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';

const brandingServices = [
  {
    icon: Wand2,
    title: 'Logo Design',
    description: 'Designing a unique and professional logo that represents your brand\'s core values.',
  },
  {
    icon: Palette,
    title: 'Visual Identity',
    description: 'Building a complete visual system: colors, fonts, business cards, and social media kits.',
  },
  {
    icon: FileText,
    title: 'Brand Guidelines',
    description: 'Creating a guide to ensure your brand remains consistent across all platforms.',
  },
  {
    icon: PenTool,
    title: 'UI/UX Design',
    description: 'Designing beautiful and intuitive user interfaces (UI/UX) for websites and apps.',
  },
  {
    icon: Printer,
    title: 'Print Design',
    description: 'Designing high-quality brochures, flyers, banners, and product packaging.',
  },
  {
    icon: BookMarked,
    title: 'Slogan & Copywriting',
    description: 'Crafting the perfect company name, slogan, and marketing copy for your brand.',
  },
];

const processSteps = [
  {
    step: 1,
    title: 'Discovery & Strategy',
    description: 'We start by understanding your mission, audience, and competitive landscape.',
  },
  {
    step: 2,
    title: 'Concept & Design',
    description: 'Our designers create initial concepts and refine them based on your feedback.',
  },
  {
    step: 3,
    title: 'Development & Refinement',
    description: 'We finalize the visual identity, logo, and all brand assets.',
  },
  {
    step: 4,
    title: 'Delivery',
    description: 'We deliver all the final files and brand guidelines for you to start using.',
  },
];

const tools = [
  { name: 'Figma', icon: Figma },
  { name: 'Adobe Illustrator', icon: Code2 },
  { name: 'Adobe Photoshop', icon: Palette },
  { name: 'Adobe XD', icon: Zap },
  { name: 'Canva', icon: BookMarked },
];

function BrandingPage() {
  return (
    <div className="min-h-screen bg-slate-900">
      <PageHero
        title="Branding"
        subtitle="Creating powerful, memorable brand identities that resonate with your target audience."
      />

      <section className="py-20 px-4 bg-slate-900">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-4">
            Our Branding Services
          </h2>
          <p className="text-center text-gray-400 mb-16 text-lg max-w-2xl mx-auto">
            We offer a complete suite of services to build and refresh your brand.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {brandingServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className="bg-slate-800/40 backdrop-blur-sm border border-slate-700 rounded-2xl p-8 text-center"
                >
                  <div className="flex justify-center mb-6">
                    <div className="bg-emerald-600/20 rounded-full p-6 border border-emerald-600/30">
                      <Icon className="w-12 h-12 text-emerald-600" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">
                    {service.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-black">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-16">
            Our Design Process
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
            Tools We Use
          </h2>

          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            {tools.map((tool, index) => {
              const Icon = tool.icon;
              return (
                <div key={index} className="flex flex-col items-center gap-3">
                  <div className="bg-slate-800/40 backdrop-blur-sm border border-slate-700 rounded-2xl p-6">
                    <Icon className="w-12 h-12 text-emerald-600" />
                  </div>
                  <p className="text-gray-300 font-semibold text-center">
                    {tool.name}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gradient-to-br from-emerald-950 via-slate-900 to-black">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Build Your Brand?
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 mb-12 leading-relaxed">
            Let's create a brand identity that stands out and tells your unique story.
          </p>
          <a
            href="https://wa.me/201553514081?text=I%27m%27asking%20about%20the%20Branding%20service"
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

export default BrandingPage;
