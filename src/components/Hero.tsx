function Hero() {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-emerald-950 via-slate-900 to-black">
      <div className="absolute inset-0 opacity-40">
        <svg className="w-full h-full" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid slice">
          <defs>
            <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style={{ stopColor: '#008060', stopOpacity: 0.4 }} />
              <stop offset="100%" style={{ stopColor: '#000000', stopOpacity: 0.1 }} />
            </linearGradient>
          </defs>
          <path
            d="M0,400 Q400,200 800,400 T1600,400 L1920,400 L1920,1080 L0,1080 Z"
            fill="url(#grad1)"
            opacity="0.6"
          >
            <animate
              attributeName="d"
              dur="20s"
              repeatCount="indefinite"
              values="
                M0,400 Q400,200 800,400 T1600,400 L1920,400 L1920,1080 L0,1080 Z;
                M0,450 Q400,250 800,450 T1600,450 L1920,450 L1920,1080 L0,1080 Z;
                M0,400 Q400,200 800,400 T1600,400 L1920,400 L1920,1080 L0,1080 Z
              "
            />
          </path>
          <path
            d="M0,600 Q480,450 960,600 T1920,600 L1920,1080 L0,1080 Z"
            fill="url(#grad1)"
            opacity="0.4"
          >
            <animate
              attributeName="d"
              dur="15s"
              repeatCount="indefinite"
              values="
                M0,600 Q480,450 960,600 T1920,600 L1920,1080 L0,1080 Z;
                M0,550 Q480,400 960,550 T1920,550 L1920,1080 L0,1080 Z;
                M0,600 Q480,450 960,600 T1920,600 L1920,1080 L0,1080 Z
              "
            />
          </path>
        </svg>
      </div>

      <div className="relative z-10 text-center px-4">
        <h1 className="fade-in-up text-5xl md:text-7xl font-bold text-white mb-8 tracking-tight">
          Crafting Digital Futures.
        </h1>
        <button
          onClick={scrollToContact}
          className="fade-in-up-delay-1 bg-emerald-600 hover:bg-emerald-700 active:scale-95 text-white font-semibold px-8 py-4 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-emerald-600/50"
        >
          Let's Build Together
        </button>
      </div>
    </section>
  );
}

export default Hero;
