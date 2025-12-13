import React from 'react';
import { ArrowRight, Mail, Phone, MapPin, Linkedin, Twitter, Youtube, ArrowUpRight, Sparkles } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    services: [
      { label: "Leadership System Design", href: "/services/system-design" },
      { label: "Team Alignment & Culture", href: "/services/team-alignment" },
      { label: "Training & Workshops", href: "/services/training" },
      { label: "Speaking & Strategy", href: "/services/speaking" }
    ],
    company: [
      { label: "About Us", href: "/about" },
      { label: "Meet the Founder", href: "/founder" },
      { label: "The Octave Model™", href: "/model" },
      { label: "Contact", href: "/contact" }
    ],
    resources: [
      { label: "Octave Diagnostic", href: "/contact" },
      { label: "Blog", href: "#blog" },
      { label: "Case Studies", href: "#cases" },
      { label: "Newsletter", href: "#newsletter" }
    ],
    legal: [
      { label: "Privacy Policy", href: "#privacy" },
      { label: "Terms of Service", href: "#terms" },
      { label: "Cookie Policy", href: "#cookies" }
    ]
  };

  return (
    <footer className="bg-[#0a1628] relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#D4AF37]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl"></div>
      </div>

      {/* Newsletter Section */}
      <div className="relative border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="lg:w-1/2">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#D4AF37]/10 rounded-full mb-4">
                <Sparkles className="w-4 h-4 text-[#D4AF37]" />
                <span className="text-sm text-[#D4AF37] font-bold uppercase tracking-wider">Stay Updated</span>
              </div>
              <h3 className="text-3xl md:text-4xl font-serif font-bold text-white mb-3">
                Join the Leadership Revolution
              </h3>
              <p className="text-gray-400">Get weekly insights on building leadership systems that last.</p>
            </div>
            <div className="lg:w-1/2 w-full">
              <form className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-6 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:border-[#D4AF37] focus:ring-2 focus:ring-[#D4AF37]/20 outline-none transition-all"
                />
                <button
                  type="submit"
                  className="group px-8 py-4 bg-gradient-to-r from-[#D4AF37] to-[#c9a430] text-white font-bold rounded-xl transition-all duration-300 shadow-lg hover:shadow-[#D4AF37]/30 hover:scale-105 flex items-center gap-2 whitespace-nowrap"
                >
                  Subscribe
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="relative max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-12">
          {/* Brand Column */}
          <div className="col-span-2 md:col-span-4 lg:col-span-1">
            <img
              src="/image/leadoctave-logo.png"
              alt="LeadOctave"
              className="h-12 brightness-0 invert mb-6"
            />
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Leadership systems that transform organizations from chaos to cadence.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center text-gray-400 hover:bg-[#D4AF37] hover:text-white transition-all duration-300">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center text-gray-400 hover:bg-[#D4AF37] hover:text-white transition-all duration-300">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center text-gray-400 hover:bg-[#D4AF37] hover:text-white transition-all duration-300">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-bold mb-6 flex items-center gap-2">
              Services
              <ArrowUpRight className="w-4 h-4 text-[#D4AF37]" />
            </h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-[#D4AF37] transition-colors text-sm underline-animation"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-bold mb-6">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-[#D4AF37] transition-colors text-sm underline-animation"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-white font-bold mb-6">Resources</h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-[#D4AF37] transition-colors text-sm underline-animation"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-span-2 md:col-span-1">
            <h4 className="text-white font-bold mb-6">Contact</h4>
            <ul className="space-y-4">
              <li>
                <a href="mailto:hello@leadoctave.com" className="flex items-start gap-3 text-gray-400 hover:text-[#D4AF37] transition-colors text-sm">
                  <Mail className="w-5 h-5 flex-shrink-0 mt-0.5" />
                  <span>hello@leadoctave.com</span>
                </a>
              </li>
              <li>
                <a href="tel:+1234567890" className="flex items-start gap-3 text-gray-400 hover:text-[#D4AF37] transition-colors text-sm">
                  <Phone className="w-5 h-5 flex-shrink-0 mt-0.5" />
                  <span>+1 (234) 567-890</span>
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3 text-gray-400 text-sm">
                  <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5" />
                  <span>Serving organizations globally</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="relative border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-500">
              © {currentYear} LeadOctave. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              {footerLinks.legal.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="text-sm text-gray-500 hover:text-[#D4AF37] transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
            <p className="text-sm text-gray-500 flex items-center gap-2">
              Built with <span className="text-[#D4AF37]">♥</span> for leaders
            </p>
          </div>
        </div>
      </div>

      {/* Decorative Octave Lines */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#D4AF37] via-transparent to-[#D4AF37] opacity-30"></div>
    </footer>
  );
}
