import { useParams, Link } from 'react-router-dom';
import PageHero from '../components/PageHero';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';

interface Article {
  slug: string;
  title: string;
  category: string;
  image: string;
  content: string;
  date: string;
}

const articles: Record<string, Article> = {
  'flutter-for-web': {
    slug: 'flutter-for-web',
    title: 'Why We Use Flutter for Web (And Why You Should Care)',
    category: 'Web Development',
    image: 'https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop',
    date: 'November 2024',
    content: `Flutter for web represents a paradigm shift in how we approach web development. Unlike traditional frameworks that require developers to master multiple languages and tools, Flutter provides a unified experience across all platforms.

One of the most compelling reasons we chose Flutter is its exceptional performance. With Flutter's compiled approach and hot reload capabilities, we can deliver applications that are not only fast but also incredibly responsive. The framework handles rendering through Skia, the same graphics engine used by Chrome, ensuring pixel-perfect consistency across all browsers.

The developer experience is another game-changer. Flutter's reactive programming model and comprehensive widget library make it possible to build complex UIs with less code and fewer bugs. The instant feedback loop with hot reload accelerates development cycles significantly.

For our clients, this translates to faster time-to-market, lower development costs, and a product that works seamlessly across web, mobile, and desktop platforms. When you invest in a Flutter-based solution with us, you're investing in a future-proof application that can scale alongside your business needs.`,
  },
  'cross-platform-vs-native': {
    slug: 'cross-platform-vs-native',
    title: 'Cross-platform vs. Native: Which is Right for Your App?',
    category: 'App Development',
    image: 'https://images.pexels.com/photos/1092644/pexels-photo-1092644.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop',
    date: 'November 2024',
    content: `The decision between cross-platform and native development is one of the most critical choices you'll make for your mobile app strategy. Each approach comes with distinct advantages and trade-offs that depend heavily on your specific requirements.

Cross-platform frameworks like Flutter and React Native offer significant advantages in terms of development speed and cost efficiency. You write the code once and deploy to both iOS and Android, reducing development time by up to 40%. This approach is ideal for startups and businesses looking to launch quickly with limited budgets.

However, native development using Kotlin for Android and Swift for iOS provides superior performance and access to the latest platform features. If your app requires intensive graphics, real-time processing, or deep integration with device hardware, native development often proves the better choice.

Our recommendation? Start with your user base. If your target audience primarily uses one platform, native development might be worth the investment. For broader reach and faster iteration, cross-platform frameworks shine. The good news is that modern frameworks like Flutter have closed the performance gap considerably, making them viable for most use cases.

We help clients navigate this decision by analyzing their specific needs, timeline, and budget. Sometimes the hybrid approach—using native where it matters most and cross-platform elsewhere—delivers the optimal solution.`,
  },
  'ai-chatbots': {
    slug: 'ai-chatbots',
    title: 'How AI Chatbots Can 10x Your Customer Support',
    category: 'AI Integration',
    image: 'https://images.pexels.com/photos/5632399/pexels-photo-5632399.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop',
    date: 'November 2024',
    content: `In today's competitive landscape, customer support isn't just about solving problems—it's about creating experiences. AI chatbots have emerged as one of the most transformative technologies for scaling customer service without proportionally increasing costs.

The impact is measurable. Companies implementing AI chatbots report a 40% reduction in support tickets, 30% faster response times, and significantly improved customer satisfaction scores. By handling routine inquiries automatically, your support team can focus on complex issues that require human expertise.

Modern AI chatbots powered by large language models can understand context, handle multi-turn conversations, and even recognize when they need to escalate to a human agent. They work 24/7, never taking a break, ensuring your customers always have access to help.

Implementation is straightforward. We integrate AI chatbots into your existing systems—whether that's your website, mobile app, or messaging platforms. The bot learns from your FAQ, documentation, and past interactions, continuously improving its responses.

The business case is compelling: reduced support costs, faster resolution times, happier customers, and valuable data insights into common problems. In many cases, the chatbot pays for itself within months through operational savings alone.`,
  },
  'branding-vs-logo': {
    slug: 'branding-vs-logo',
    title: 'Why Your "Branding" is More Than Just a Logo',
    category: 'Branding',
    image: 'https://images.pexels.com/photos/3183133/pexels-photo-3183133.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop',
    date: 'November 2024',
    content: `Many entrepreneurs make the mistake of equating their brand with their logo. While a logo is certainly an important component, true branding is far more comprehensive and strategic.

Your brand is the entire experience your customers have with your business. It encompasses your visual identity (colors, typography, imagery), your messaging and tone of voice, your customer interactions, and the values you represent. A logo is just one visual element within this larger ecosystem.

A cohesive brand identity builds trust. When customers see your colors, typography, and design language consistently applied across your website, social media, packaging, and office space, they perceive your business as professional and established. Inconsistency, conversely, signals unprofessionalism and dilutes your message.

The color psychology matters. Your color palette isn't arbitrary—it communicates emotions and values. Green conveys growth and trust, while bold reds evoke energy and urgency. Typography choice communicates sophistication or approachability. Every design decision reinforces your brand promise.

We work with clients to develop comprehensive brand systems that go far beyond logo design. We establish color palettes, typography hierarchies, imagery styles, and brand guidelines that ensure every touchpoint tells a consistent story. This systematic approach transforms a brand from being forgettable to unforgettable.

In today's crowded marketplace, strong branding is often the differentiator that determines whether customers choose you over competitors offering similar services.`,
  },
};

function BlogArticle() {
  const { slug } = useParams<{ slug: string }>();
  const article = slug ? articles[slug] : null;

  if (!article) {
    return (
      <div className="min-h-screen bg-slate-900">
        <PageHero
          title="Article Not Found"
          subtitle="The article you're looking for doesn't exist."
        />
        <section className="py-20 px-4 bg-slate-900">
          <div className="max-w-3xl mx-auto text-center">
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold px-6 py-3 rounded-lg transition-all duration-300 transform hover:scale-105"
            >
              Back to Blog
            </Link>
          </div>
        </section>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-900">
      <article>
        <div className="relative w-full h-96 overflow-hidden">
          <img
            src={article.image}
            alt={article.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent"></div>
          <div className="absolute bottom-0 left-0 right-0 p-8">
            <div className="max-w-3xl mx-auto">
              <span className="bg-emerald-600 text-white text-sm font-semibold px-4 py-2 rounded-full inline-block mb-4">
                {article.category}
              </span>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                {article.title}
              </h1>
              <p className="text-gray-300 text-lg">
                {article.date}
              </p>
            </div>
          </div>
        </div>

        <section className="py-20 px-4 bg-slate-900">
          <div className="max-w-3xl mx-auto">
            <div className="prose prose-invert max-w-none">
              {article.content.split('\n\n').map((paragraph, index) => (
                <p key={index} className="text-gray-300 text-lg leading-relaxed mb-6">
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="mt-12 pt-8 border-t border-slate-700">
              <Link
                to="/blog"
                className="inline-flex items-center gap-2 text-emerald-600 hover:text-emerald-400 font-semibold transition-all duration-300"
              >
                <span>←</span>
                Back to All Articles
              </Link>
            </div>
          </div>
        </section>
      </article>

      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default BlogArticle;
