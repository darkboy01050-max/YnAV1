import { Lightbulb, Shield, Palette, ChevronLeft, ChevronRight, User } from 'lucide-react';
import PageHero from '../components/PageHero';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';
import ScrollReveal from '../components/ScrollReveal';
import { useState, useEffect } from 'react';

const coreValues = [
  {
    icon: Lightbulb,
    title: 'Innovation',
    description: 'Pushing boundaries.',
  },
  {
    icon: Shield,
    title: 'Reliability',
    description: 'Building robust solutions.',
  },
  {
    icon: Palette,
    title: 'Creativity',
    description: 'Designing unique experiences.',
  },
];

const founders = [
  {
    name: 'Youssef Hatem',
    role: 'CEO & CoFounder',
    description: 'Youssef drives the company\'s vision, strategy, and growth.',
  },
  {
    name: 'Ahmed Alam',
    role: 'CTO & CoFounder',
    description: 'Ahmed leads the engineering and innovation teams, shaping the company\'s technology vision and driving product excellence.',
  },
];

interface Testimonial {
  quote1: string;
  quote2: string;
  author: string;
  role?: string;
}

const testimonials: Testimonial[] = [
  {
    quote1: 'Outstanding quality and attention to detail',
    quote2: 'Exceeded all our expectations',
    author: 'Tech Startup',
    role: 'SaaS Platform',
  },
  {
    quote1: 'Exceptional team that truly understands our needs',
    quote2: 'Delivered beyond what we imagined',
    author: 'Enterprise Client',
    role: 'Financial Services',
  },
  {
    quote1: 'Professional, reliable, and innovative',
    quote2: 'Our go-to technology partner',
    author: 'Retail Business',
    role: 'E-commerce',
  },
];

function AboutPage() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);

  useEffect(() => {
    if (!autoPlay) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [autoPlay]);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setAutoPlay(false);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    setAutoPlay(false);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setAutoPlay(false);
  };

  const current = testimonials[currentIndex];

  return (
    <div className="min-h-screen bg-slate-900">
      <PageHero
        title="Crafting Digital Futures, Together."
        subtitle="At Y&A Tech, we combine innovation, expertise, and passion to create transformative digital solutions that empower businesses to thrive in the modern digital landscape."
      />

      <section className="py-20 px-4 bg-slate-900">
        <div className="max-w-4xl mx-auto text-center">
          <ScrollReveal>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              Our Mission
            </h2>
            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
              To create smart, human-centric digital solutions that empower businesses and individuals to thrive in an ever-evolving digital landscape.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-20 px-4 bg-black">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-4">
              Our Values
            </h2>
            <p className="text-center text-gray-400 mb-16 text-lg">
              At Y&A Tech, our values are the cornerstone of our culture. They guide our decisions, our interactions, and our innovations.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {coreValues.map((value, index) => (
              <ScrollReveal key={index}>
                <div
                  className="bg-slate-800/40 backdrop-blur-sm border border-slate-700 rounded-2xl p-8 text-center transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-emerald-600/30 hover:border-emerald-600/50 group"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex justify-center mb-6">
                    <div className="bg-emerald-600/20 rounded-full p-6 border border-emerald-600/30 group-hover:bg-emerald-600/30 transition-all duration-300">
                      <value.icon className="w-12 h-12 text-emerald-600 group-hover:scale-110 transition-transform duration-300" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-emerald-400 transition-colors duration-300">
                    {value.title}
                  </h3>
                  <p className="text-gray-400 text-lg">
                    {value.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-slate-900">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-16">
              Meet Our Team
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {founders.map((founder, index) => (
              <ScrollReveal key={index}>
                <div
                  className="bg-slate-800/40 backdrop-blur-sm border border-slate-700 rounded-2xl p-8 text-center transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-emerald-600/30 hover:border-emerald-600/50 group"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex justify-center mb-6">
                    <div className="bg-emerald-600/20 rounded-full p-8 border-4 border-emerald-600/30 group-hover:bg-emerald-600/30 transition-all duration-300">
                      <User className="w-20 h-20 text-emerald-600" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-emerald-400 transition-colors duration-300">
                    {founder.name}
                  </h3>
                  <p className="text-emerald-600 font-semibold mb-4 text-lg">
                    {founder.role}
                  </p>
                  <p className="text-gray-400 leading-relaxed">
                    {founder.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-black">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-4">
              What Our Clients Say
            </h2>
            <p className="text-center text-gray-400 mb-16 text-lg">
              Customer Testimonials
            </p>
          </ScrollReveal>

          <div className="max-w-3xl mx-auto">
            <div className="relative">
              <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-8 md:p-12 shadow-2xl border border-slate-700 min-h-96 flex flex-col justify-center">
                <div className="text-center">
                  <div className="flex justify-center mb-6">
                    <div className="bg-emerald-600/20 rounded-full p-4 border border-emerald-600/30">
                      <User className="w-8 h-8 text-emerald-600" />
                    </div>
                  </div>

                  <p className="text-xl md:text-2xl text-white font-medium mb-4 leading-relaxed italic">
                    "{current.quote1}"
                  </p>
                  <p className="text-xl md:text-2xl text-white font-medium mb-8 leading-relaxed italic">
                    "{current.quote2}"
                  </p>

                  <div className="border-t border-slate-700 pt-6">
                    <p className="text-emerald-400 font-semibold text-lg">
                      {current.author}
                    </p>
                    {current.role && (
                      <p className="text-gray-400 text-sm mt-1">
                        {current.role}
                      </p>
                    )}
                  </div>
                </div>
              </div>

              <button
                onClick={goToPrevious}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-16 bg-emerald-600 hover:bg-emerald-700 text-white p-3 rounded-full transition-all duration-300 transform hover:scale-110"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              <button
                onClick={goToNext}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-16 bg-emerald-600 hover:bg-emerald-700 text-white p-3 rounded-full transition-all duration-300 transform hover:scale-110"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>

            <div className="flex justify-center gap-3 mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? 'bg-emerald-600 w-8'
                      : 'bg-slate-600 hover:bg-slate-500 w-3'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default AboutPage;
