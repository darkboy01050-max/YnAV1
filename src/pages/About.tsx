import { Lightbulb, Shield, Palette, User } from 'lucide-react';
import { useState } from 'react';
import PageHero from '../components/PageHero';
import Testimonials from '../components/Testimonials';
import Footer from '../components/Footer';

const values = [
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

const team = [
  {
    name: 'Youssef Hatem',
    role: 'CEO & CoFounder',
    description: 'Youssef drives the company\'s vision, strategy, and growth.',
    image: '/images/youssef.jpg',
  },
  {
    name: 'Ahmed Allam',
    role: 'CTO & CoFounder',
    description: 'Ahmed leads the engineering and innovation teams, shaping the company\'s technology vision.',
    image: '/images/ahmed.jpg',
  },
];

function About() {
  const [hoveredValue, setHoveredValue] = useState<number | null>(null);
  const [hoveredMember, setHoveredMember] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-slate-900">
      <PageHero
        title="Crafting Digital Futures, Together."
        subtitle="A brief overview of Y&A Tech's origin and purpose."
      />

      <section className="py-20 px-4 bg-slate-900">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="slide-in-left text-4xl md:text-5xl font-bold text-white mb-8">
            Our Mission
          </h2>
          <p className="slide-in-right text-xl text-gray-300 leading-relaxed">
            To create smart, human-centric digital solutions that empower businesses and individuals to thrive in an ever-evolving digital landscape.
          </p>
        </div>
      </section>

      <section className="py-20 px-4 bg-black">
        <div className="max-w-7xl mx-auto">
          <h2 className="fade-in-up text-4xl md:text-5xl font-bold text-white text-center mb-4">
            Our Values
          </h2>
          <p className="fade-in-up-delay-1 text-center text-gray-400 mb-16 text-lg">
            At Y&A Tech, our values are the cornerstone of our culture.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div
                  key={index}
                  className="slide-in-cards bg-slate-800 border border-slate-700 rounded-xl p-8 text-center transition-all duration-500 hover:border-emerald-600/50 hover:shadow-2xl hover:shadow-emerald-600/30 hover:scale-105 group"
                  style={{ animationDelay: `${index * 0.15}s` }}
                  onMouseEnter={() => setHoveredValue(index)}
                  onMouseLeave={() => setHoveredValue(null)}
                >
                  <div className="flex justify-center mb-6">
                    <div className={`transition-all duration-500 ${hoveredValue === index ? 'scale-125 rotate-6' : 'scale-100'}`}>
                      <Icon className="w-12 h-12 text-emerald-600 group-hover:text-emerald-500" />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-emerald-400 transition-colors duration-300">
                    {value.title}
                  </h3>
                  <p className="text-gray-300 transition-colors duration-300 group-hover:text-white">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-slate-900">
        <div className="max-w-7xl mx-auto">
          <h2 className="fade-in-up text-4xl md:text-5xl font-bold text-white text-center mb-16">
            Meet Our Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {team.map((member, index) => (
              <div
                key={index}
                className="slide-in-cards bg-slate-800 border border-slate-700 rounded-xl p-8 text-center transition-all duration-500 hover:border-emerald-600/50 hover:shadow-2xl hover:shadow-emerald-600/30 hover:scale-105 group"
                style={{ animationDelay: `${index * 0.2}s` }}
                onMouseEnter={() => setHoveredMember(index)}
                onMouseLeave={() => setHoveredMember(null)}
              >
                <div className="flex justify-center mb-6">
                  <div className={`w-24 h-24 rounded-full overflow-hidden bg-gradient-to-br from-emerald-600 to-emerald-700 flex items-center justify-center transition-all duration-500 ${hoveredMember === index ? 'scale-110 shadow-lg shadow-emerald-600/50' : 'scale-100'}`}>
                    {member.image ? (
                      <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                    ) : (
                      <User className="w-12 h-12 text-white" />
                    )}
                  </div>
                </div>
                <h3 className="text-2xl font-semibold text-white mb-2 group-hover:text-emerald-400 transition-colors duration-300">
                  {member.name}
                </h3>
                <p className="text-emerald-400 font-semibold mb-4">
                  {member.role}
                </p>
                <p className="text-gray-300 transition-colors duration-300 group-hover:text-white">
                  {member.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Testimonials />
      <Footer />
    </div>
  );
}

export default About;
