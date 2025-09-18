import type { Metadata } from "next"
import ServicesHero from "@/components/services-hero"
import ServicesGrid from "@/components/services-grid"
import ServiceProcess from "@/components/service-process"

export const metadata: Metadata = {
  title: "Digital Marketing Services in Nepal – SEO, Social Media Marketing, Web Development | UDDHESHYA GROUP",
  description: "Comprehensive digital marketing services in Nepal including SEO optimization, social media marketing, web development, brand development, and digital advertising for businesses in Kathmandu and across Nepal.",
  keywords: "digital marketing services Nepal, SEO services Nepal, social media marketing Kathmandu, web development Nepal, brand development Nepal, digital advertising Nepal, marketing agency Kathmandu, Nepali businesses marketing",
}

export default function ServicesPage() {
  return (
    <div className="container mx-auto px-4 py-16 md:py-24">
      <ServicesHero />
      <ServicesGrid />
      <ServiceProcess />
    </div>
  )
}
