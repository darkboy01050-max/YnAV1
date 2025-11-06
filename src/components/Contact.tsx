import { useState } from 'react';
import BlurReveal from './BlurReveal';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setFormData({ name: '', email: '', message: '' });
      setSubmitted(false);
    }, 3000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-20 px-4 bg-slate-900">
      <div className="max-w-3xl mx-auto">
        <BlurReveal>
          <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-16">
            Contact Us
          </h2>
        </BlurReveal>
        <BlurReveal delay={100}>
          <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Name"
              required
              className="neon-glow-focus w-full bg-slate-800 border border-slate-700 rounded-lg px-6 py-4 text-white placeholder-gray-500 focus:outline-none transition-all duration-300"
            />
          </div>
          <div>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              required
              className="neon-glow-focus w-full bg-slate-800 border border-slate-700 rounded-lg px-6 py-4 text-white placeholder-gray-500 focus:outline-none transition-all duration-300"
            />
          </div>
          <div>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Message"
              required
              rows={6}
              className="neon-glow-focus w-full bg-slate-800 border border-slate-700 rounded-lg px-6 py-4 text-white placeholder-gray-500 focus:outline-none transition-all duration-300 resize-none"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-emerald-600 hover:bg-emerald-700 active:scale-95 text-white font-semibold px-8 py-4 rounded-lg text-lg transition-all duration-300 transform hover:scale-[1.02] shadow-lg hover:shadow-emerald-600/50"
          >
            {submitted ? 'Message Sent!' : 'Send Message'}
          </button>
          </form>
        </BlurReveal>
      </div>
    </section>
  );
}

export default Contact;
