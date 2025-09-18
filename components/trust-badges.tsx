"use client";

import { motion } from "framer-motion";
import { Award, Star, Users, CheckCircle, TrendingUp, Globe } from "lucide-react";

export default function TrustBadges() {
  const badges = [
    {
      icon: <Award className="w-8 h-8 text-primary" />,
      title: "Award-Winning Agency",
      description: "Recognized as Nepal's leading digital marketing platform",
      metric: "2024"
    },
    {
      icon: <Star className="w-8 h-8 text-primary" />,
      title: "5-Star Rating",
      description: "Consistently rated 5 stars by our clients",
      metric: "98%"
    },
    {
      icon: <Users className="w-8 h-8 text-primary" />,
      title: "Happy Clients",
      description: "Businesses across Nepal trust us",
      metric: "50+"
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-primary" />,
      title: "Average Growth",
      description: "Our clients see significant business growth",
      metric: "250%"
    },
    {
      icon: <CheckCircle className="w-8 h-8 text-primary" />,
      title: "Success Rate",
      description: "Projects completed successfully",
      metric: "100%"
    },
    {
      icon: <Globe className="w-8 h-8 text-primary" />,
      title: "Market Coverage",
      description: "Serving businesses across Nepal",
      metric: "8+ Cities"
    }
  ];

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Trusted by Businesses Across Nepal
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our track record speaks for itself. We've helped businesses in Kathmandu, 
            Pokhara, Chitwan, and other major cities achieve remarkable digital success.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {badges.map((badge, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center p-6 bg-background rounded-lg border border-border hover:shadow-lg transition-shadow"
            >
              <div className="flex justify-center mb-4">
                {badge.icon}
              </div>
              <div className="text-3xl font-bold text-primary mb-2">
                {badge.metric}
              </div>
              <h3 className="text-lg font-semibold mb-2">{badge.title}</h3>
              <p className="text-muted-foreground text-sm">
                {badge.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Client Logos Section */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-center mb-8">
            Trusted by Leading Businesses in Nepal
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center opacity-60">
            {[
              "Restaurant Chains",
              "Tech Startups",
              "E-commerce Stores",
              "Educational Institutions",
              "Healthcare Providers",
              "Manufacturing Companies"
            ].map((industry, index) => (
              <div
                key={index}
                className="text-center p-4 bg-muted/50 rounded-lg"
              >
                <div className="text-sm font-medium text-muted-foreground">
                  {industry}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications and Awards */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold mb-8">
            Certifications & Recognition
          </h3>
          <div className="flex flex-wrap justify-center gap-8 items-center">
            <div className="p-4 bg-primary/10 rounded-lg">
              <div className="text-sm font-semibold text-primary">
                Google Partner
              </div>
            </div>
            <div className="p-4 bg-primary/10 rounded-lg">
              <div className="text-sm font-semibold text-primary">
                Facebook Marketing Partner
              </div>
            </div>
            <div className="p-4 bg-primary/10 rounded-lg">
              <div className="text-sm font-semibold text-primary">
                HubSpot Certified
              </div>
            </div>
            <div className="p-4 bg-primary/10 rounded-lg">
              <div className="text-sm font-semibold text-primary">
                Local Business Award 2024
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
