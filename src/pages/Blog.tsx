import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import PageHero from '../components/PageHero';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';
import BlurReveal from '../components/BlurReveal';

interface BlogPost {
  id: number;
  title: string;
  category: string;
  excerpt: string;
  image: string;
  slug: string;
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: 'Why We Use Flutter for Web (And Why You Should Care)',
    category: 'Web Development',
    excerpt: 'Flutter isn\'t just for mobile. Discover how we leverage its performance and flexibility to build fast, beautiful, and consistent web experiences for our clients.',
    image: 'https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop',
    slug: 'flutter-for-web',
  },
  {
    id: 2,
    title: 'Cross-platform vs. Native: Which is Right for Your App?',
    category: 'App Development',
    excerpt: 'A deep dive into the pros and cons of Flutter/React Native vs. native Kotlin. We help you decide the best strategy for your budget and performance needs.',
    image: 'https://images.pexels.com/photos/1092644/pexels-photo-1092644.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop',
    slug: 'cross-platform-vs-native',
  },
  {
    id: 3,
    title: 'How AI Chatbots Can 10x Your Customer Support',
    category: 'AI Integration',
    excerpt: 'Stop wasting time on repetitive questions. Learn how integrating an AI chatbot can automate your support, boost sales, and keep customers happy 24/7.',
    image: 'https://images.pexels.com/photos/5632399/pexels-photo-5632399.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop',
    slug: 'ai-chatbots',
  },
  {
    id: 4,
    title: 'Why Your "Branding" is More Than Just a Logo',
    category: 'Branding',
    excerpt: 'A great logo is just the start. We explore how a complete visual identity—from colors to typography—builds trust and makes you stand out from the competition.',
    image: 'https://images.pexels.com/photos/3183133/pexels-photo-3183133.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop',
    slug: 'branding-vs-logo',
  },
];

function Blog() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Web Development':
        return 'bg-emerald-600';
      case 'App Development':
        return 'bg-blue-600';
      case 'AI Integration':
        return 'bg-purple-600';
      case 'Branding':
        return 'bg-amber-600';
      default:
        return 'bg-emerald-600';
    }
  };

  return (
    <div className="min-h-screen bg-slate-900">
      <PageHero
        title="Our Insights"
        subtitle="Explore our latest articles on technology, design, and business automation."
      />

      <section className="py-20 px-4 bg-slate-900">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {blogPosts.map((post, index) => (
              <BlurReveal key={post.id} delay={index * 100}>
                <div
                  className="bg-slate-800/40 backdrop-blur-sm border border-slate-700 rounded-2xl overflow-hidden transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-emerald-600/30 hover:border-emerald-600/50 group flex flex-col"
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                <div className="relative overflow-hidden h-64">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute top-4 left-4">
                    <span className={`${getCategoryColor(post.category)} text-white text-xs font-semibold px-4 py-2 rounded-full`}>
                      {post.category}
                    </span>
                  </div>
                </div>

                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-emerald-400 transition-colors duration-300 line-clamp-2">
                    {post.title}
                  </h3>

                  <p className="text-gray-300 text-sm leading-relaxed mb-6 flex-grow">
                    {post.excerpt}
                  </p>

                  <Link
                    to={`/blog/${post.slug}`}
                    className="btn-with-arrow inline-flex items-center text-emerald-600 hover:text-emerald-400 font-semibold transition-all duration-300 w-fit"
                  >
                    <span>Read More</span>
                    <span className="arrow-icon">
                      <ArrowRight className="w-4 h-4" />
                    </span>
                  </Link>
                </div>
              </div>
            </BlurReveal>
          ))}
          </div>
        </div>
      </section>

      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default Blog;
