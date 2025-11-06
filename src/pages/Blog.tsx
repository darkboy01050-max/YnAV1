import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Share2, X, Linkedin, Facebook, MessageCircle } from 'lucide-react';
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
    title: 'Why We Use Flutter for Web',
    category: 'Web Development',
    excerpt: 'Discover why Flutter is becoming the go-to framework for building beautiful, responsive web applications with exceptional performance.',
    image: 'https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop',
    slug: 'flutter-for-web',
  },
  {
    id: 2,
    title: 'Cross-platform vs. Native',
    category: 'App Development',
    excerpt: 'Explore the pros and cons of cross-platform and native app development to help you choose the right approach for your project.',
    image: 'https://images.pexels.com/photos/1092644/pexels-photo-1092644.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop',
    slug: 'cross-platform-vs-native',
  },
  {
    id: 3,
    title: 'How AI Chatbots Can 10x Your Customer Support',
    category: 'AI Integration',
    excerpt: 'Learn how AI-powered chatbots can revolutionize your customer service and deliver instant support 24/7.',
    image: 'https://images.pexels.com/photos/5632399/pexels-photo-5632399.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop',
    slug: 'ai-chatbots',
  },
  {
    id: 4,
    title: 'Why Your "Branding" is More Than Just a Logo',
    category: 'Branding',
    excerpt: 'Understand the true essence of branding and how it extends far beyond just a visual logo.',
    image: 'https://images.pexels.com/photos/3183133/pexels-photo-3183133.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop',
    slug: 'branding-vs-logo',
  },
];

interface ShareMenuPosition {
  postId: number;
  isOpen: boolean;
}

function Blog() {
  const [shareMenu, setShareMenu] = useState<ShareMenuPosition>({ postId: 0, isOpen: false });

  const toggleShareMenu = (postId: number) => {
    setShareMenu((prev) =>
      prev.postId === postId && prev.isOpen
        ? { postId: 0, isOpen: false }
        : { postId, isOpen: true }
    );
  };

  const getShareUrl = (slug: string) => {
    return `${window.location.origin}/blog/${slug}`;
  };

  const shareLinks = (slug: string, title: string) => {
    const url = getShareUrl(slug);
    const encodedUrl = encodeURIComponent(url);
    const encodedTitle = encodeURIComponent(title);

    return {
      twitter: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`,
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
      whatsapp: `https://wa.me/?text=${encodedTitle}%20${encodedUrl}`,
    };
  };

  return (
    <div className="min-h-screen bg-slate-900">
      <PageHero
        title="Our Insights"
        subtitle="Explore our latest articles on technology, design, and business automation."
      />

      <section className="py-20 px-4 bg-slate-900">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:grid-rows-[1fr_1fr]">
            {blogPosts.map((post, index) => {
              const links = shareLinks(post.slug, post.title);
              const isShareOpen = shareMenu.postId === post.id && shareMenu.isOpen;

              return (
                <BlurReveal key={post.id} delay={index * 100} className="h-full">
                  <div className="h-full relative group">
                    <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl overflow-hidden transition-all duration-500 hover:border-emerald-600/50 hover:shadow-2xl hover:shadow-emerald-600/20 hover:scale-105 flex flex-col h-full">
                      <div className="relative overflow-hidden h-48">
                        <img
                          src={post.image}
                          alt={post.title}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute top-4 left-4">
                          <span className="bg-emerald-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
                            {post.category}
                          </span>
                        </div>
                      </div>

                      <div className="p-6 flex flex-col flex-grow">
                        <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-emerald-400 transition-colors duration-300 line-clamp-2">
                          {post.title}
                        </h3>

                        <p className="text-gray-300 text-sm leading-relaxed mb-6 flex-grow">
                          {post.excerpt}
                        </p>

                        <div className="flex items-center justify-between pt-4 border-t border-slate-700">
                          <Link
                            to={`/blog/${post.slug}`}
                            className="inline-flex items-center gap-2 text-emerald-400 hover:text-emerald-300 font-semibold transition-all duration-300 group/btn"
                          >
                            <span>Read More</span>
                            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
                          </Link>

                          <div className="relative">
                            <button
                              onClick={() => toggleShareMenu(post.id)}
                              className="p-2 rounded-lg hover:bg-slate-700 transition-colors duration-300 text-gray-400 hover:text-emerald-400"
                              aria-label="Share post"
                            >
                              <Share2 className="w-5 h-5" />
                            </button>

                            {isShareOpen && (
                              <div className="absolute bottom-full right-0 mb-2 bg-slate-700 border border-slate-600 rounded-lg shadow-xl overflow-hidden z-50 min-w-[140px]">
                                <a
                                  href={links.twitter}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="flex items-center gap-2 px-4 py-2 hover:bg-slate-600 transition-colors duration-200 text-gray-200 hover:text-emerald-400"
                                >
                                  <X className="w-4 h-4" />
                                  <span className="text-sm">X</span>
                                </a>
                                <a
                                  href={links.linkedin}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="flex items-center gap-2 px-4 py-2 hover:bg-slate-600 transition-colors duration-200 text-gray-200 hover:text-emerald-400"
                                >
                                  <Linkedin className="w-4 h-4" />
                                  <span className="text-sm">LinkedIn</span>
                                </a>
                                <a
                                  href={links.facebook}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="flex items-center gap-2 px-4 py-2 hover:bg-slate-600 transition-colors duration-200 text-gray-200 hover:text-emerald-400"
                                >
                                  <Facebook className="w-4 h-4" />
                                  <span className="text-sm">Facebook</span>
                                </a>
                                <a
                                  href={links.whatsapp}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="flex items-center gap-2 px-4 py-2 hover:bg-slate-600 transition-colors duration-200 text-gray-200 hover:text-emerald-400"
                                >
                                  <MessageCircle className="w-4 h-4" />
                                  <span className="text-sm">WhatsApp</span>
                                </a>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </BlurReveal>
              );
            })}
          </div>
        </div>
      </section>

      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default Blog;
