import type { Metadata } from "next"
import AboutHero from "@/components/about-hero"
import TeamSection from "@/components/team-section"
import ValuesSection from "@/components/values-section"
import TimelineSection from "@/components/timeline-section"

export const metadata: Metadata = {
  title: "About UDDHESHYA GROUP – Leading Digital Marketing Agency in Nepal | Our Story & Mission",
  description: "Learn about UDDHESHYA GROUP's journey as Nepal's leading digital marketing agency. Discover our mission, values, and the team behind our success in helping Nepali businesses grow through innovative marketing solutions.",
  keywords: "about UDDHESHYA GROUP, digital marketing agency Nepal, marketing team Kathmandu, company story Nepal, leading marketing firm Nepal, Nepali digital agency, marketing company history Nepal",
}

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-16 md:py-24">
      <AboutHero />
      <ValuesSection />
{/*       <TeamSection /> */}
      <TimelineSection />
    </div>
  )
}
