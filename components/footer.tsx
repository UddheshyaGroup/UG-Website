import Link from "next/link";
import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Youtube,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-muted/30 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-lg font-bold mb-4 text-primary">
              <img src="logo.png" alt="" width="160px" />
            </h3>
            <p className="text-muted-foreground mb-4">
              Redefining marketing for the digital age with innovative
              strategies and creative solutions.
            </p>
            <div className="flex space-x-4">
              <Link
                href="https://www.facebook.com/profile.php?id=61578545593783"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link
                href="https://www.tiktok.com/@uddheshya.group"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                {/* Inline TikTok-like icon to avoid extra dependency and match desired logo */}
                <svg
                  className="h-5 w-5"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  role="img"
                  aria-hidden="true"
                >
                  {/* teal shadow */}
                  <path
                    d="M15.5 2.5v5.3c-.8 0-1.6-.1-2.4-.5-.8-.4-1.5-1-2-1.9V16c0 2.2-1.8 4-4 4-1.4 0-2.6-.7-3.3-1.8 1.3 1 3 1.3 4.6.6 1.6-.7 2.7-2.3 2.7-4.1V8.9c1.2 1.1 2.8 1.8 4.5 1.9V4.1h-1.4z"
                    fill="#69C9D0"
                  />
                  {/* pink shadow, slightly offset */}
                  <path
                    d="M15.5 2.5v4.9c-.8 0-1.6-.1-2.4-.5-.8-.4-1.5-1-2-1.9V15.6c0 2.2-1.8 4-4 4-1.4 0-2.6-.7-3.3-1.8 1.3 1 3 1.3 4.6.6 1.6-.7 2.7-2.3 2.7-4.1V8.9c1.2 1.1 2.8 1.8 4.5 1.9V4.1h-1.4z"
                    fill="#EE1D52"
                    opacity="0.95"
                  />
                  {/* black main glyph on top */}
                  <path
                    d="M14.6 3.1v6.1c-1.1-.1-2.2-.5-3.1-1.2v6.3c0 1.6-1 3-2.5 3.6-1.7.7-3.6.1-4.8-1.4 1.2.7 2.6 1 4.1.5 1.6-.6 2.6-2.1 2.6-3.8V8.2c1.6 1.5 3.6 2.5 5.8 2.7V3.1h-2.1z"
                    fill="#010101"
                  />
                </svg>
                <span className="sr-only">TikTok</span>
              </Link>
              <Link
                href="https://www.instagram.com/uddheshya.group/"
                className="text-muted-foreground hover:text-primary transition-colors"
                target="_blank"
              >
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link
                href="https://www.linkedin.com/company/uddheshya-group"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link
                href="https://www.youtube.com/@UddheshyaGroup"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Youtube className="h-5 w-5" />
                <span className="sr-only">Youtube</span>
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4 text-primary">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/portfolio"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Portfolio
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/best-digital-marketing-platform-nepal"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Best Digital Marketing Platform Nepal
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/about-us"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/contact-us"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Contact Us
                </Link>
              </li>
              {/*               <li>
                <Link
                  href="/company-profile"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Company Profile
                </Link>
              </li> */}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4 text-primary">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/services"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Digital Advertising
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Brand Development
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Web Development
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Social Media Management
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  SEO Optimization
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Analytics & Insights
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4 text-primary">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-2 text-primary shrink-0 mt-0.5" />
                <span className="text-muted-foreground">
                  Sanepa, Lalitpur, Bagmati Province, Nepal
                </span>
              </li>
              <li className="flex items-center">
                <a href="tel:+9779805533602" className="flex items-center">
                  <Phone className="h-5 w-5 mr-2 text-primary" />
                  <span className="text-muted-foreground">+977 9805533602</span>
                </a>
              </li>
              <li className="flex items-center">
                <a href="mailto:uddheshyastudio@gmail.com" className="flex items-center">
                  <Mail className="h-5 w-5 mr-2 text-primary" />
                  <span className="text-muted-foreground">
                    uddheshyastudio@gmail.com{" "}
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-muted-foreground text-sm mb-4 md:mb-0">
              © {new Date().getFullYear()} UDDHESHYA GROUP. All rights
              reserved.
            </p>
            <div className="flex space-x-6">
              <Link
                href="#"
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="#"
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Terms of Service
              </Link>
              <Link
                href="https://maps.app.goo.gl/NrvAq4VkH7c1Nq3r6"
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
                target="_blank"
              >
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
