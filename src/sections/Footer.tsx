import { 
  Phone, 
  Mail, 
  MapPin, 
  ExternalLink,
  ChevronRight
} from 'lucide-react';

const quickLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About Us', href: '#about' },
  { name: 'Services', href: '#services' },
  { name: 'Projects', href: '#projects' },
  { name: 'Applications', href: '#applications' },
  { name: 'Contact', href: '#contact' },
];

const services = [
  'Construction',
  'Telecommunications',
  'Managed Services',
  'Walktest & RF Testing',
  'Toll Road Management',
];

export default function Footer() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="relative bg-navy overflow-hidden">
      {/* Blueprint grid */}
      <div className="absolute inset-0 blueprint-grid opacity-20" />

      {/* Main Footer */}
      <div className="relative z-10 section-padding py-16 lg:py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-display font-bold text-xl">CK</span>
              </div>
              <div>
                <span className="font-display font-bold text-white text-sm leading-tight block">
                  PT. CELEBES
                </span>
                <span className="font-display font-bold text-white text-sm leading-tight block">
                  KONTRUKSINDO
                </span>
              </div>
            </div>
            <p className="font-body text-white/60 text-sm leading-relaxed mb-6">
              Building Indonesia's infrastructure since 2011. We deliver excellence 
              in construction, telecommunications, and managed services.
            </p>
            <div className="space-y-3">
              <a
                href="tel:02178341306"
                className="flex items-center gap-3 text-white/60 hover:text-secondary transition-colors duration-300"
              >
                <Phone className="w-4 h-4" />
                <span className="font-body text-sm">(021) 7834-1306</span>
              </a>
              <a
                href="mailto:info@cel-kon.net"
                className="flex items-center gap-3 text-white/60 hover:text-secondary transition-colors duration-300"
              >
                <Mail className="w-4 h-4" />
                <span className="font-body text-sm">info@cel-kon.net</span>
              </a>
              <div className="flex items-start gap-3 text-white/60">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span className="font-body text-sm">
                  Jl. Tupai No. 06, Palu, Sulawesi Tengah
                </span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-bold text-white mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(link.href);
                    }}
                    className="group flex items-center gap-2 text-white/60 hover:text-secondary transition-colors duration-300"
                  >
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                    <span className="font-body text-sm">{link.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display font-bold text-white mb-6">Our Services</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <a
                    href="#services"
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection('#services');
                    }}
                    className="group flex items-center gap-2 text-white/60 hover:text-secondary transition-colors duration-300"
                  >
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                    <span className="font-body text-sm">{service}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Website */}
          <div>
            <h4 className="font-display font-bold text-white mb-6">Visit Our Website</h4>
            <a
              href="https://www.cel-kon.net"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white font-display font-semibold px-6 py-3 rounded-xl transition-all duration-300 hover:shadow-glow"
            >
              www.cel-kon.net
              <ExternalLink className="w-4 h-4" />
            </a>

            <div className="mt-8">
              <h4 className="font-display font-bold text-white mb-4">Business Hours</h4>
              <div className="space-y-2">
                <p className="font-body text-sm text-white/60">
                  Monday - Friday: 08:00 - 17:00
                </p>
                <p className="font-body text-sm text-white/60">
                  Saturday: 08:00 - 12:00
                </p>
                <p className="font-body text-sm text-white/60">
                  Sunday: Closed
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="relative z-10 border-t border-white/10">
        <div className="section-padding py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="font-body text-sm text-white/40 text-center md:text-left">
              &copy; {new Date().getFullYear()} PT. Celebes Kontruksindo. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <a href="#" className="font-body text-sm text-white/40 hover:text-white transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="#" className="font-body text-sm text-white/40 hover:text-white transition-colors duration-300">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
