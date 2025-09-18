"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

export default function TestimonialsSection() {
  const testimonials = [
    {
      quote:
        "UDDHESHYA GROUP transformed our digital presence completely. Our restaurant chain went from 2 to 8 locations across Kathmandu Valley in just 18 months. Their local SEO strategies and social media campaigns helped us increase online orders by 300%. They truly understand the Nepali market and consumer behavior.",
      author: "Rajesh Shrestha",
      position: "Owner, Kathmandu Restaurant Chain",
      avatar: "/placeholder-user.jpg",
    },
    {
      quote:
        "As a tech startup in Lalitpur, we needed a digital marketing partner who understood both technology and the local market. UDDHESHYA GROUP delivered exceptional results - 500% increase in lead generation and 250% growth in website traffic. Their expertise in both digital marketing and Nepal's business landscape is unmatched.",
      author: "Priya Maharjan",
      position: "CEO, TechStart Nepal",
      avatar: "/placeholder-user.jpg",
    },
    {
      quote:
        "Our e-commerce store in Banepa was struggling to reach customers online. UDDHESHYA GROUP's comprehensive digital marketing approach including SEO, PPC, and social media marketing resulted in 250% growth in website traffic and 180% increase in sales. They know how to make Nepali businesses succeed online.",
      author: "Suresh Thapa",
      position: "Founder, Banepa E-commerce Store",
      avatar: "/placeholder-user.jpg",
    },
    {
      quote:
        "HCOP's jazz manouche revival—blending Django Reinhardt with Narayan Gopal classics—needed niche audience growth. The agency engineered a 3-phase plan: First, they produced our debut EP launch at Patan Museum, fusing jazz improvisation with Nepali sarangi. Then, they leveraged digital storytelling, creating mini-docs about 'translating 70s pop into swing.' Finally, they secured NPR 1.2M in grants from cultural foundations by framing HCOP as 'custodians of heritage innovation.' Our Spotify streams grew 300%, and we're now headlining international jazz fests in Bhutan and India, showcasing the global appeal of our unique sound.",
      author: "Ben Errington",
      position: "Artistic Facilitator, Hot Club of Patan",
      avatar: "/benn.png?height=80&width=80&text=PS",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <section className="py-20 bg-primary/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-600">
            Client Testimonials
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our clients have to say
            about working with us.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="border-none shadow-lg bg-background/50 backdrop-blur-sm">
            <CardContent className="p-8">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="flex flex-col items-center text-center"
              >
                <Quote className="h-12 w-12 text-primary mb-6 opacity-50" />
                <p className="text-xl md:text-2xl mb-8 italic">
                  "{testimonials[currentIndex].quote}"
                </p>
                <div className="flex items-center flex-col">
                  <div className="relative w-16 h-16 mb-4 rounded-full overflow-hidden">
                    <Image
                      src={
                        testimonials[currentIndex].avatar || "/placeholder.svg"
                      }
                      alt={testimonials[currentIndex].author}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">
                      {testimonials[currentIndex].author}
                    </h4>
                    <p className="text-muted-foreground">
                      {testimonials[currentIndex].position}
                    </p>
                  </div>
                </div>
              </motion.div>
            </CardContent>
          </Card>

          <div className="flex justify-center mt-8 gap-4">
            <Button
              variant="outline"
              size="icon"
              onClick={prevTestimonial}
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={nextTestimonial}
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
