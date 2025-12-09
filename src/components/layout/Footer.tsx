import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Clock, Instagram, Facebook, Twitter } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Main Footer */}
      <div className="container mx-auto px-6 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <span className="font-display text-3xl text-accent tracking-wider">
                AURELIUS
              </span>
              <p className="font-elegant text-sm tracking-[0.2em] text-primary-foreground/60 uppercase mt-1">
                Fine Dining
              </p>
            </div>
            <p className="font-body text-sm text-primary-foreground/70 leading-relaxed mb-6">
              An extraordinary culinary journey where tradition meets innovation, 
              crafted with passion and served with elegance.
            </p>
            <div className="flex gap-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-accent/30 flex items-center justify-center text-accent hover:bg-accent hover:text-primary transition-all duration-300"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-accent/30 flex items-center justify-center text-accent hover:bg-accent hover:text-primary transition-all duration-300"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-accent/30 flex items-center justify-center text-accent hover:bg-accent hover:text-primary transition-all duration-300"
              >
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-lg text-accent mb-6">Explore</h4>
            <ul className="space-y-3">
              {[
                { name: "Our Story", path: "/about" },
                { name: "The Menu", path: "/menu" },
                { name: "Private Events", path: "/events" },
                { name: "Gallery", path: "/gallery" },
                { name: "Gift Cards", path: "/contact" },
              ].map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="font-body text-sm text-primary-foreground/70 hover:text-accent transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-display text-lg text-accent mb-6">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                <span className="font-body text-sm text-primary-foreground/70">
                  123 Luxury Avenue, Manhattan,<br />New York, NY 10001
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-accent shrink-0" />
                <a
                  href="tel:+1234567890"
                  className="font-body text-sm text-primary-foreground/70 hover:text-accent transition-colors"
                >
                  +1 (234) 567-890
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-accent shrink-0" />
                <a
                  href="mailto:reservations@aurelius.com"
                  className="font-body text-sm text-primary-foreground/70 hover:text-accent transition-colors"
                >
                  reservations@aurelius.com
                </a>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="font-display text-lg text-accent mb-6">Hours</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                <div className="font-body text-sm text-primary-foreground/70">
                  <p className="mb-2">
                    <span className="text-primary-foreground">Lunch</span><br />
                    Tue - Sun: 12:00 PM - 3:00 PM
                  </p>
                  <p>
                    <span className="text-primary-foreground">Dinner</span><br />
                    Tue - Thu: 6:00 PM - 10:00 PM<br />
                    Fri - Sat: 6:00 PM - 11:00 PM<br />
                    Sun: 6:00 PM - 9:00 PM
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="container mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-body text-xs text-primary-foreground/50">
            © {new Date().getFullYear()} Aurelius Fine Dining. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link
              to="/privacy"
              className="font-body text-xs text-primary-foreground/50 hover:text-accent transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              to="/terms"
              className="font-body text-xs text-primary-foreground/50 hover:text-accent transition-colors"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
