// PortfolioPage.tsx

import type { Metadata } from "next";
import PortfolioGrid from "@/components/portfolio-grid";
import PortfolioHero from "@/components/portfolio-hero";

export const metadata: Metadata = {
  title: "Portfolio – Digital Marketing Success Stories in Nepal | UDDHESHYA GROUP",
  description:
    "Explore our portfolio of successful digital marketing campaigns and projects for businesses in Nepal. See how we've helped Nepali companies grow with SEO, social media marketing, and web development.",
  keywords: "digital marketing portfolio Nepal, marketing success stories Nepal, SEO case studies Kathmandu, social media campaigns Nepal, web development projects Nepal, marketing agency portfolio Nepal",
};

export default function PortfolioPage() {
  return (
    <div className="container mx-auto px-4 py-16 md:py-24">
      <PortfolioHero />
      <PortfolioGrid />
    </div>
  );
}
