import type { Metadata } from "next";
import Link from "next/link";
import { Calendar, Clock, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Digital Marketing Blog Nepal | SEO, Social Media Tips & Insights | UDDHESHYA GROUP",
  description: "Expert digital marketing insights, SEO tips, and social media strategies for businesses in Nepal. Learn from Nepal's leading digital marketing agency.",
  keywords: "digital marketing blog Nepal, SEO tips Nepal, social media marketing Nepal, digital marketing insights Nepal, marketing strategies Nepal, business growth Nepal",
};

const blogPosts = [
  {
    id: 1,
    title: "How to Choose the Best Digital Marketing Agency in Nepal",
    excerpt: "A comprehensive guide to selecting the right digital marketing partner for your business in Nepal, including key factors to consider and red flags to avoid.",
    date: "2024-01-15",
    readTime: "8 min read",
    category: "Digital Marketing",
    slug: "how-to-choose-best-digital-marketing-agency-nepal",
    featured: true
  },
  {
    id: 2,
    title: "SEO Tips for Nepali Businesses: Local Search Optimization",
    excerpt: "Learn how to optimize your website for local search in Nepal, including Google My Business optimization and local keyword strategies.",
    date: "2024-01-10",
    readTime: "6 min read",
    category: "SEO",
    slug: "seo-tips-nepali-businesses-local-search-optimization",
    featured: false
  },
  {
    id: 3,
    title: "Social Media Marketing Trends in Nepal 2024",
    excerpt: "Discover the latest social media trends and strategies that are working for businesses in Nepal, including platform-specific tips.",
    date: "2024-01-05",
    readTime: "7 min read",
    category: "Social Media",
    slug: "social-media-marketing-trends-nepal-2024",
    featured: false
  },
  {
    id: 4,
    title: "E-commerce Growth in Nepal: Digital Marketing Opportunities",
    excerpt: "Explore the booming e-commerce sector in Nepal and how digital marketing can help your online business succeed in the local market.",
    date: "2024-01-01",
    readTime: "9 min read",
    category: "E-commerce",
    slug: "ecommerce-growth-nepal-digital-marketing-opportunities",
    featured: false
  },
  {
    id: 5,
    title: "Content Marketing Strategies for Nepali Audiences",
    excerpt: "Learn how to create engaging content that resonates with Nepali consumers, including cultural considerations and language preferences.",
    date: "2023-12-28",
    readTime: "5 min read",
    category: "Content Marketing",
    slug: "content-marketing-strategies-nepali-audiences",
    featured: false
  },
  {
    id: 6,
    title: "Google Ads vs Facebook Ads: Which Works Better in Nepal?",
    excerpt: "A detailed comparison of Google Ads and Facebook Ads performance in the Nepali market, with real case studies and ROI insights.",
    date: "2023-12-25",
    readTime: "10 min read",
    category: "Paid Advertising",
    slug: "google-ads-vs-facebook-ads-nepal-comparison",
    featured: false
  }
];

export default function BlogPage() {
  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = blogPosts.filter(post => !post.featured);

  return (
    <div className="container mx-auto px-4 py-16 md:py-24">
      {/* Header */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-600">
          Digital Marketing Blog Nepal
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-4xl mx-auto">
          Expert insights, tips, and strategies for digital marketing success in Nepal. 
          Learn from Nepal's leading digital marketing agency.
        </p>
      </div>

      {/* Featured Post */}
      {featuredPost && (
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-8">Featured Article</h2>
          <div className="bg-gradient-to-r from-primary/10 to-secondary/10 p-8 rounded-lg border border-primary/20">
            <div className="flex items-center gap-4 mb-4">
              <span className="bg-primary text-white px-3 py-1 rounded-full text-sm font-medium">
                {featuredPost.category}
              </span>
              <span className="text-sm text-muted-foreground">Featured</span>
            </div>
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              <Link 
                href={`/blog/${featuredPost.slug}`}
                className="hover:text-primary transition-colors"
              >
                {featuredPost.title}
              </Link>
            </h3>
            <p className="text-lg text-muted-foreground mb-6">{featuredPost.excerpt}</p>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  {new Date(featuredPost.date).toLocaleDateString('en-US', { 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                  })}
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  {featuredPost.readTime}
                </div>
              </div>
              <Link 
                href={`/blog/${featuredPost.slug}`}
                className="flex items-center gap-2 text-primary hover:text-primary/80 font-medium"
              >
                Read More
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* Blog Posts Grid */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold mb-8">Latest Articles</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {regularPosts.map((post) => (
            <article key={post.id} className="border border-border rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
              <div className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <span className="bg-muted text-muted-foreground px-3 py-1 rounded-full text-sm font-medium">
                    {post.category}
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-3">
                  <Link 
                    href={`/blog/${post.slug}`}
                    className="hover:text-primary transition-colors"
                  >
                    {post.title}
                  </Link>
                </h3>
                <p className="text-muted-foreground mb-4">{post.excerpt}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {new Date(post.date).toLocaleDateString('en-US', { 
                        year: 'numeric', 
                        month: 'short', 
                        day: 'numeric' 
                      })}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {post.readTime}
                    </div>
                  </div>
                  <Link 
                    href={`/blog/${post.slug}`}
                    className="text-primary hover:text-primary/80 font-medium"
                  >
                    Read More →
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Categories */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold mb-8">Browse by Category</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {['Digital Marketing', 'SEO', 'Social Media', 'E-commerce', 'Content Marketing', 'Paid Advertising'].map((category) => (
            <Link
              key={category}
              href={`/blog?category=${category.toLowerCase().replace(' ', '-')}`}
              className="p-4 border border-border rounded-lg text-center hover:bg-primary/5 hover:border-primary/20 transition-colors"
            >
              <span className="font-medium">{category}</span>
            </Link>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="text-center bg-gradient-to-r from-primary/10 to-secondary/10 p-12 rounded-lg">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Ready to Grow Your Business in Nepal?
        </h2>
        <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          Let UDDHESHYA GROUP help you implement these strategies and achieve 
          digital marketing success for your business in Nepal.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            href="/contact-us" 
            className="bg-primary text-white px-8 py-4 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
          >
            Get Free Consultation
          </Link>
          <Link 
            href="/services" 
            className="border border-primary text-primary px-8 py-4 rounded-lg font-semibold hover:bg-primary/10 transition-colors"
          >
            View Our Services
          </Link>
        </div>
      </div>
    </div>
  );
}
