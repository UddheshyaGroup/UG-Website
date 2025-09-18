import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle, Star, TrendingUp, Users, Award, Globe } from "lucide-react";

export const metadata: Metadata = {
  title: "Best Digital Marketing Platform in Nepal | UDDHESHYA GROUP - #1 Agency Kathmandu",
  description: "UDDHESHYA GROUP is the best digital marketing platform in Nepal. Leading digital marketing agency in Kathmandu offering SEO, social media marketing, web development, and branding services for Nepali businesses.",
  keywords: "best digital marketing platform in Nepal, top digital marketing agency Nepal, leading digital marketing firm Kathmandu, digital marketing services Nepal, SEO agency Nepal, social media marketing Nepal, web development Nepal, digital advertising Nepal, marketing platform Nepal, Nepali businesses marketing",
  openGraph: {
    title: "Best Digital Marketing Platform in Nepal | UDDHESHYA GROUP",
    description: "Leading digital marketing agency in Nepal helping businesses grow with proven strategies and innovative solutions.",
    type: "website",
  },
};

export default function BestDigitalMarketingPlatformNepal() {
  return (
    <div className="container mx-auto px-4 py-16 md:py-24">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-600">
          Best Digital Marketing Platform in Nepal
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-4xl mx-auto">
          UDDHESHYA GROUP is recognized as Nepal's leading digital marketing platform, 
          helping businesses in Kathmandu, Banepa, and across the country achieve 
          unprecedented growth through innovative digital strategies.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            href="/contact-us" 
            className="bg-primary text-white px-8 py-4 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
          >
            Get Free Consultation
          </Link>
          <Link 
            href="/portfolio" 
            className="border border-primary text-primary px-8 py-4 rounded-lg font-semibold hover:bg-primary/10 transition-colors"
          >
            View Our Success Stories
          </Link>
        </div>
      </div>

      {/* Why We're the Best */}
      <div className="mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Why UDDHESHYA GROUP is the Best Digital Marketing Platform in Nepal
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              icon: <Award className="w-8 h-8 text-primary" />,
              title: "Award-Winning Results",
              description: "Consistently delivering measurable results for businesses across Nepal with proven strategies and innovative approaches."
            },
            {
              icon: <Users className="w-8 h-8 text-primary" />,
              title: "Expert Team",
              description: "Our experienced team of digital marketing specialists understands the Nepali market and local business needs."
            },
            {
              icon: <TrendingUp className="w-8 h-8 text-primary" />,
              title: "Proven Track Record",
              description: "Over 40+ successful projects and 20+ satisfied clients across Kathmandu, Banepa, and other major cities in Nepal."
            },
            {
              icon: <Globe className="w-8 h-8 text-primary" />,
              title: "Local & Global Expertise",
              description: "Combining local market knowledge with international best practices to deliver exceptional results for Nepali businesses."
            },
            {
              icon: <Star className="w-8 h-8 text-primary" />,
              title: "Client Satisfaction",
              description: "98% client retention rate with 5-star reviews from businesses across Nepal who trust us with their digital presence."
            },
            {
              icon: <CheckCircle className="w-8 h-8 text-primary" />,
              title: "Comprehensive Services",
              description: "Full-service digital marketing platform offering SEO, social media, web development, branding, and analytics."
            }
          ].map((feature, index) => (
            <div key={index} className="p-6 border border-border rounded-lg hover:shadow-lg transition-shadow">
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Our Services */}
      <div className="mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Comprehensive Digital Marketing Services in Nepal
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            {
              title: "SEO Optimization for Nepal",
              description: "Local SEO strategies tailored for Nepali businesses, helping you rank higher in Google search results for Kathmandu, Banepa, and other major cities.",
              features: ["Local keyword research", "Google My Business optimization", "Nepali content optimization", "Local link building"]
            },
            {
              title: "Social Media Marketing",
              description: "Engaging social media campaigns on Facebook, Instagram, LinkedIn, and TikTok to connect with your target audience in Nepal.",
              features: ["Content creation in Nepali", "Community management", "Paid social advertising", "Influencer partnerships"]
            },
            {
              title: "Web Development & Design",
              description: "Modern, responsive websites optimized for Nepali users with fast loading speeds and mobile-first design.",
              features: ["Responsive design", "Nepali language support", "Local payment integration", "SEO-optimized structure"]
            },
            {
              title: "Digital Advertising",
              description: "Targeted online advertising campaigns on Google, Facebook, and other platforms to reach your ideal customers in Nepal.",
              features: ["Google Ads management", "Facebook advertising", "Display advertising", "Retargeting campaigns"]
            }
          ].map((service, index) => (
            <div key={index} className="p-6 border border-border rounded-lg">
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-muted-foreground mb-4">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-primary mr-2" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Success Stories */}
      <div className="mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Success Stories from Nepali Businesses
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              company: "Kathmandu Restaurant Chain",
              result: "300% increase in online orders",
              description: "Our social media marketing and local SEO strategies helped this restaurant chain expand from 2 to 8 locations across Kathmandu Valley."
            },
            {
              company: "Banepa E-commerce Store",
              result: "250% growth in website traffic",
              description: "Comprehensive digital marketing approach including SEO, PPC, and social media resulted in significant revenue growth for this local e-commerce business."
            },
            {
              company: "Lalitpur Tech Startup",
              result: "500% increase in lead generation",
              description: "Our targeted digital advertising and content marketing strategies helped this tech startup establish a strong online presence and attract high-quality leads."
            }
          ].map((story, index) => (
            <div key={index} className="p-6 bg-muted/30 rounded-lg">
              <h3 className="text-lg font-semibold mb-2">{story.company}</h3>
              <div className="text-2xl font-bold text-primary mb-2">{story.result}</div>
              <p className="text-muted-foreground text-sm">{story.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Local Market Expertise */}
      <div className="mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Deep Understanding of the Nepali Market
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-semibold mb-6">Why Local Expertise Matters</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-primary mr-3 mt-1" />
                <div>
                  <strong>Cultural Understanding:</strong> We understand Nepali business culture, consumer behavior, and market dynamics.
                </div>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-primary mr-3 mt-1" />
                <div>
                  <strong>Local Language Support:</strong> Content creation in Nepali, English, and local dialects for maximum reach.
                </div>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-primary mr-3 mt-1" />
                <div>
                  <strong>Regional Targeting:</strong> Specialized strategies for Kathmandu, Pokhara, Chitwan, and other major cities.
                </div>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-primary mr-3 mt-1" />
                <div>
                  <strong>Local Payment Integration:</strong> Understanding of local payment methods and e-commerce preferences.
                </div>
              </li>
            </ul>
          </div>
          <div className="bg-gradient-to-br from-primary/10 to-secondary/10 p-8 rounded-lg">
            <h4 className="text-xl font-semibold mb-4">Our Nepal Market Coverage</h4>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>✓ Kathmandu Valley</div>
              <div>✓ Pokhara</div>
              <div>✓ Chitwan</div>
              <div>✓ Biratnagar</div>
              <div>✓ Butwal</div>
              <div>✓ Dharan</div>
              <div>✓ Banepa</div>
              <div>✓ Bhaktapur</div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="text-center bg-gradient-to-r from-primary/10 to-secondary/10 p-12 rounded-lg">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Ready to Partner with Nepal's Best Digital Marketing Platform?
        </h2>
        <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          Join hundreds of successful businesses across Nepal who trust UDDHESHYA GROUP 
          for their digital marketing needs. Get started with a free consultation today.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            href="/contact-us" 
            className="bg-primary text-white px-8 py-4 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
          >
            Start Your Digital Journey
          </Link>
          <Link 
            href="/services" 
            className="border border-primary text-primary px-8 py-4 rounded-lg font-semibold hover:bg-primary/10 transition-colors"
          >
            Explore Our Services
          </Link>
        </div>
      </div>
    </div>
  );
}
