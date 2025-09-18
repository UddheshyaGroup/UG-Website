"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, TrendingUp, Users, Target, Award } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function CaseStudies() {
  const caseStudies = [
    {
      id: 1,
      title: "Kathmandu Restaurant Chain Digital Transformation",
      industry: "Food & Beverage",
      location: "Kathmandu Valley, Nepal",
      challenge: "Low online visibility and limited digital presence affecting customer reach",
      solution: "Comprehensive digital marketing strategy including local SEO, social media management, and online ordering optimization",
      results: [
        { metric: "Online Orders", value: "300%", description: "increase in online orders" },
        { metric: "Locations", value: "2 to 8", description: "restaurant locations across Kathmandu Valley" },
        { metric: "Social Media", value: "500%", description: "growth in social media engagement" },
        { metric: "Revenue", value: "250%", description: "increase in overall revenue" }
      ],
      duration: "18 months",
      image: "/placeholder.jpg",
      featured: true
    },
    {
      id: 2,
      title: "TechStart Nepal Lead Generation Success",
      industry: "Technology",
      location: "Lalitpur, Nepal",
      challenge: "Struggling to generate qualified leads and establish online presence in competitive tech market",
      solution: "Multi-channel digital marketing approach with targeted PPC campaigns, content marketing, and SEO optimization",
      results: [
        { metric: "Lead Generation", value: "500%", description: "increase in qualified leads" },
        { metric: "Website Traffic", value: "250%", description: "growth in organic website traffic" },
        { metric: "Conversion Rate", value: "180%", description: "improvement in lead conversion" },
        { metric: "Brand Awareness", value: "400%", description: "increase in brand recognition" }
      ],
      duration: "12 months",
      image: "/placeholder.jpg",
      featured: false
    },
    {
      id: 3,
      title: "Banepa E-commerce Store Growth",
      industry: "E-commerce",
      location: "Banepa, Nepal",
      challenge: "Low online sales and poor search engine visibility affecting business growth",
      solution: "Complete e-commerce optimization including SEO, paid advertising, and conversion rate optimization",
      results: [
        { metric: "Website Traffic", value: "250%", description: "increase in website visitors" },
        { metric: "Online Sales", value: "180%", description: "growth in online sales" },
        { metric: "Search Rankings", value: "Top 3", description: "position for target keywords" },
        { metric: "Customer Acquisition", value: "320%", description: "increase in new customers" }
      ],
      duration: "10 months",
      image: "/placeholder.jpg",
      featured: false
    },
    {
      id: 4,
      title: "Educational Institution Digital Marketing",
      industry: "Education",
      location: "Pokhara, Nepal",
      challenge: "Low student enrollment and limited awareness of programs offered",
      solution: "Targeted digital marketing campaigns focusing on student recruitment and program promotion",
      results: [
        { metric: "Student Enrollment", value: "200%", description: "increase in student applications" },
        { metric: "Website Engagement", value: "350%", description: "improvement in website engagement" },
        { metric: "Social Media Reach", value: "450%", description: "growth in social media following" },
        { metric: "Program Awareness", value: "300%", description: "increase in program inquiries" }
      ],
      duration: "8 months",
      image: "/placeholder.jpg",
      featured: false
    }
  ];

  const featuredCase = caseStudies.find(study => study.featured);
  const otherCases = caseStudies.filter(study => !study.featured);

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Success Stories from Businesses in Nepal
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover how we've helped businesses across Nepal achieve remarkable growth 
            through strategic digital marketing solutions tailored to the local market.
          </p>
        </div>

        {/* Featured Case Study */}
        {featuredCase && (
          <div className="mb-16">
            <h3 className="text-2xl font-bold mb-8 text-center">Featured Success Story</h3>
            <Card className="overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                <div className="p-8">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="bg-primary text-white px-3 py-1 rounded-full text-sm font-medium">
                      {featuredCase.industry}
                    </span>
                    <span className="text-sm text-muted-foreground">{featuredCase.location}</span>
                  </div>
                  <h4 className="text-2xl font-bold mb-4">{featuredCase.title}</h4>
                  <div className="space-y-4 mb-6">
                    <div>
                      <h5 className="font-semibold text-sm text-muted-foreground mb-1">Challenge</h5>
                      <p className="text-sm">{featuredCase.challenge}</p>
                    </div>
                    <div>
                      <h5 className="font-semibold text-sm text-muted-foreground mb-1">Solution</h5>
                      <p className="text-sm">{featuredCase.solution}</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    {featuredCase.results.map((result, index) => (
                      <div key={index} className="text-center p-3 bg-primary/5 rounded-lg">
                        <div className="text-2xl font-bold text-primary">{result.value}</div>
                        <div className="text-xs text-muted-foreground">{result.description}</div>
                        <div className="text-xs font-medium">{result.metric}</div>
                      </div>
                    ))}
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">
                      Duration: {featuredCase.duration}
                    </span>
                    <Link 
                      href="/best-digital-marketing-platform-nepal" 
                      className="flex items-center gap-2 text-primary hover:text-primary/80 font-medium"
                    >
                      Learn More
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
                <div className="bg-gradient-to-br from-primary/10 to-secondary/10 p-8 flex items-center justify-center">
                  <div className="text-center">
                    <Award className="w-16 h-16 text-primary mx-auto mb-4" />
                    <h5 className="text-lg font-semibold mb-2">Success Metrics</h5>
                    <p className="text-sm text-muted-foreground">
                      Measurable results achieved through strategic digital marketing
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        )}

        {/* Other Case Studies */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {otherCases.map((caseStudy, index) => (
            <motion.div
              key={caseStudy.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="bg-muted text-muted-foreground px-2 py-1 rounded text-xs font-medium">
                      {caseStudy.industry}
                    </span>
                    <span className="text-xs text-muted-foreground">{caseStudy.location}</span>
                  </div>
                  <CardTitle className="text-lg">{caseStudy.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 mb-4">
                    <div>
                      <h5 className="font-semibold text-xs text-muted-foreground mb-1">Challenge</h5>
                      <p className="text-xs">{caseStudy.challenge}</p>
                    </div>
                    <div>
                      <h5 className="font-semibold text-xs text-muted-foreground mb-1">Solution</h5>
                      <p className="text-xs">{caseStudy.solution}</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-2 mb-4">
                    {caseStudy.results.slice(0, 2).map((result, resultIndex) => (
                      <div key={resultIndex} className="text-center p-2 bg-muted/50 rounded">
                        <div className="text-lg font-bold text-primary">{result.value}</div>
                        <div className="text-xs text-muted-foreground">{result.description}</div>
                      </div>
                    ))}
                  </div>
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-muted-foreground">
                      {caseStudy.duration}
                    </span>
                    <Link 
                      href="/best-digital-marketing-platform-nepal" 
                      className="text-primary hover:text-primary/80 font-medium"
                    >
                      View Details →
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <h3 className="text-2xl font-bold mb-4">
            Ready to Create Your Success Story?
          </h3>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join the growing number of successful businesses in Nepal who trust 
            UDDHESHYA GROUP for their digital marketing needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact-us" 
              className="bg-primary text-white px-8 py-4 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
            >
              Start Your Success Story
            </Link>
            <Link 
              href="/portfolio" 
              className="border border-primary text-primary px-8 py-4 rounded-lg font-semibold hover:bg-primary/10 transition-colors"
            >
              View More Case Studies
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
