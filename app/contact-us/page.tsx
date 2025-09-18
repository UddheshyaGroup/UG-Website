import type { Metadata } from "next";
import ContactForm from "@/components/contact-form";
import ContactInfo from "@/components/contact-info";
import Map from "@/components/map";

export const metadata: Metadata = {
  title: "Contact UDDHESHYA GROUP – Best Digital Marketing Agency in Nepal | Get Quote Today",
  description:
    "Contact UDDHESHYA GROUP, Nepal's leading digital marketing agency in Kathmandu. Get a free quote for SEO, social media marketing, web development, and digital advertising services for your business in Nepal.",
  keywords: "contact UDDHESHYA GROUP, digital marketing agency Nepal contact, marketing services quote Nepal, SEO consultation Kathmandu, digital marketing inquiry Nepal, marketing agency contact Nepal",
};

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-16 md:py-24">
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-600">
        Contact Us
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12">
        <ContactInfo />
        <ContactForm />
      </div>
      <div className="mt-16">
        <Map />
      </div>
    </div>
  );
}
