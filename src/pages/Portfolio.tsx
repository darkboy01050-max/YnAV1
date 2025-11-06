import { useState } from 'react';
import { ExternalLink } from 'lucide-react';
import PageHero from '../components/PageHero';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';
import projectImage from './images/image.png';

interface Project {
  id: number;
  name: string;
  serviceType: string;
  image: string;
  challenge: string;
  solution: string;
  liveUrl: string;
}

const projects: Project[] = [
  {
    id: 1,
    name: 'What Ever It Takes',
    serviceType: 'Web Development',
    image: projectImage,
    challenge: 'The client needed an attractive and engaging e-commerce website to draw in customers and drive product sales.',
    solution: 'We developed a fast, modern website using Node.js , which included a fully integrated blog section to boost content marketing and customer engagement.',
    liveUrl: 'https://what-ever-it-takes.vercel.app/',
  },
];

function Portfolio() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-slate-900">
      <PageHero
        title="Our Work"
        subtitle="A selection of our featured projects. See how we've helped our clients succeed."
      />

      <section className="py-20 px-4 bg-slate-900">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={project.id}
                className="slide-in-cards bg-slate-800/40 backdrop-blur-sm border border-slate-700 rounded-2xl overflow-hidden transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-emerald-600/30 hover:border-emerald-600/50 group"
                style={{ animationDelay: `${index * 0.15}s` }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute top-4 right-4">
                    <span className="bg-emerald-600 text-white text-sm font-semibold px-4 py-2 rounded-full">
                      {project.serviceType}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-emerald-400 transition-colors duration-300">
                    {project.name}
                  </h3>

                  <div className="mb-4">
                    <h4 className="text-emerald-400 font-semibold mb-2 text-sm uppercase tracking-wide">
                      The Challenge
                    </h4>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      {project.challenge}
                    </p>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-emerald-400 font-semibold mb-2 text-sm uppercase tracking-wide">
                      Our Solution
                    </h4>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      {project.solution}
                    </p>
                  </div>

                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold px-6 py-3 rounded-lg transition-all duration-300 transform hover:scale-110 active:scale-95"
                  >
                    View Live Demo
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default Portfolio;
