import { Link } from 'react-router-dom';
import { Building, Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Properties', path: '/properties' },
    { name: 'Investors', path: '/investors' },
  ];

  const services = [
    { name: 'Affiliate Program', path: '/affiliates' },
    { name: 'Partner Services', path: '/services' },
    { name: 'Contact Us', path: '/contact' },
    { name: 'Investment Opportunities', path: '/investors' },
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary-foreground/20 rounded-lg flex items-center justify-center">
                <Building className="w-5 h-5" />
              </div>
              <span className="text-xl font-bold">InvestPortal</span>
            </div>
            <p className="text-primary-foreground/80 text-sm leading-relaxed">
              Your trusted partner in real estate investment. Building wealth through strategic property investments since 2020.
            </p>
            <div className="flex space-x-4">
              <Facebook className="w-5 h-5 hover:text-accent cursor-pointer transition-smooth" />
              <Twitter className="w-5 h-5 hover:text-accent cursor-pointer transition-smooth" />
              <Instagram className="w-5 h-5 hover:text-accent cursor-pointer transition-smooth" />
              <Linkedin className="w-5 h-5 hover:text-accent cursor-pointer transition-smooth" />
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-primary-foreground/80 hover:text-primary-foreground transition-smooth text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Services</h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service.path}>
                  <Link
                    to={service.path}
                    className="text-primary-foreground/80 hover:text-primary-foreground transition-smooth text-sm"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-primary-foreground/60" />
                <span className="text-primary-foreground/80 text-sm">contact@investportal.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-primary-foreground/60" />
                <span className="text-primary-foreground/80 text-sm">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-primary-foreground/60 mt-0.5" />
                <span className="text-primary-foreground/80 text-sm leading-relaxed">
                  123 Investment Street<br />
                  Financial District, NY 10004
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-primary-foreground/60 text-sm">
            © {currentYear} InvestPortal. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/privacy" className="text-primary-foreground/60 hover:text-primary-foreground text-sm transition-smooth">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-primary-foreground/60 hover:text-primary-foreground text-sm transition-smooth">
              Terms of Service
            </Link>
            <Link to="/cookies" className="text-primary-foreground/60 hover:text-primary-foreground text-sm transition-smooth">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;