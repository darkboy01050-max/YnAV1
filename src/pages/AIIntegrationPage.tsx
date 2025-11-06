import { MessageSquare, Zap, TrendingUp, Brain, Image, Code2, Cpu, GitBranch, Layers, Database } from 'lucide-react';
import PageHero from '../components/PageHero';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';

const aiSolutions = [
  {
    icon: MessageSquare,
    title: 'Chatbots',
    description: 'Deploying intelligent chatbots (like ChatGPT) to automate customer support 24/7.',
  },
  {
    icon: Zap,
    title: 'Business Automation',
    description: 'Using AI to automate repetitive manual tasks, saving you significant time and money.',
  },
  {
    icon: TrendingUp,
    title: 'Data Analysis & Prediction',
    description: 'Analyzing your business data to predict sales, discover trends, and understand customer behavior.',
  },
  {
    icon: Brain,
    title: 'Natural Language Processing (NLP)',
    description: 'Building systems that understand and process human language (e.g., sentiment analysis from reviews).',
  },
  {
    icon: Image,
    title: 'Image Recognition',
    description: 'Developing models that can \'see\' and interpret content from images and videos.',
  },
];

const processSteps = [
  {
    step: 1,
    title: 'Discovery & Planning',
    description: 'We analyze your business goals to identify the best AI opportunities.',
  },
  {
    step: 2,
    title: 'Model Design & Selection',
    description: 'We design the AI model architecture and select the right tools for the job.',
  },
  {
    step: 3,
    title: 'Development & Training',
    description: 'We build and train the models on your data to ensure maximum accuracy.',
  },
  {
    step: 4,
    title: 'Integration & Support',
    description: 'We deploy the AI solution into your existing systems and provide ongoing support.',
  },
];

const technologies = [
  { name: 'Python', icon: Code2 },
  { name: 'TensorFlow', icon: Layers },
  { name: 'PyTorch', icon: GitBranch },
  { name: 'scikit-learn', icon: Cpu },
];

function AIIntegrationPage() {
  return (
    <div className="min-h-screen bg-slate-900">
      <PageHero
        title="AI Integration"
        subtitle="Integrating cutting-edge AI to automate tasks, analyze data, and drive intelligent decisions."
      />

      <section className="py-20 px-4 bg-slate-900">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-4">
            Our AI Solutions
          </h2>
          <p className="text-center text-gray-400 mb-16 text-lg max-w-2xl mx-auto">
            We help you leverage the power of artificial intelligence to solve real-world problems.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {aiSolutions.slice(0, 3).map((solution, index) => (
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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {aiSolutions.slice(3).map((solution, index) => (
              <div
                key={index + 3}
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
            Our Integration Process
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
            {technologies.map((tech, index) => {
              const Icon = tech.icon;
              return (
                <div key={index} className="flex flex-col items-center gap-3">
                  <div className="bg-slate-800/40 backdrop-blur-sm border border-slate-700 rounded-2xl p-6 transition-all duration-300 hover:transform hover:scale-110 hover:shadow-xl hover:shadow-emerald-600/30 hover:border-emerald-600/50 group">
                    <Icon className="w-12 h-12 text-emerald-600 group-hover:scale-125 transition-transform duration-300" />
                  </div>
                  <p className="text-gray-300 font-semibold text-center">
                    {tech.name}
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
            Ready to Automate Your Business?
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 mb-12 leading-relaxed">
            Let's explore how AI can give your company a competitive edge.
          </p>
          <a
            href="https://wa.me/201553514081?text=I%27m%20asking%20about%20the%20AI%20integration%20service"
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

export default AIIntegrationPage;
