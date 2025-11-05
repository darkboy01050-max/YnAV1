import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, User } from 'lucide-react';

interface Testimonial {
  quote1: string;
  quote2: string;
  author: string;
  role?: string;
}

const testimonials: Testimonial[] = [
  {
    quote1: 'موقع سلس وواجهة أنيقة',
    quote2: 'وتسليم في المواعيد',
    author: 'Marketing Team',
    role: 'Digital Marketing',
  },
  {
    quote1: 'فريق محترف وسريع التنفيذ',
    quote2: 'النتائج تفوقت التوقعات',
    author: 'Sales Department',
    role: 'E-commerce',
  },
  {
    quote1: 'تصميم عصري وفعال جداً',
    quote2: 'خدمة عملاء ممتازة',
    author: 'Business Development',
    role: 'Startup',
  },
];

function Testimonials() {
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
    <section id="testimonials" className="py-20 px-4 bg-black">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-4">
          What Our Clients Say
        </h2>
        <p className="text-center text-gray-400 mb-16 text-lg">
          Customer Testimonials
        </p>

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
  );
}

export default Testimonials;
