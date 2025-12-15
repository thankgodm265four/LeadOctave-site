import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-slate-900 border-t-4 border-amber-600">
      <div className="max-w-7xl mx-auto px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          
          {/* Brand Column */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-full bg-amber-600 flex items-center justify-center">
                <span className="text-white font-bold text-lg">◎</span>
              </div>
              <span className="text-white font-bold text-lg">LeadOctave</span>
            </div>
            <p className="text-gray-400 text-sm">From Chaos to Cadence</p>
          </div>

          {/* Services Column */}
          <div>
            <h3 className="text-white font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-amber-500 transition">Leadership Strategy</a></li>
              <li><a href="#" className="hover:text-amber-500 transition">Team Alignment</a></li>
              <li><a href="#" className="hover:text-amber-500 transition">Training Programs</a></li>
              <li><a href="#" className="hover:text-amber-500 transition">Consulting</a></li>
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-amber-500 transition">About</a></li>
              <li><a href="#" className="hover:text-amber-500 transition">Team</a></li>
              <li><a href="#" className="hover:text-amber-500 transition">Blog</a></li>
              <li><a href="#" className="hover:text-amber-500 transition">Contact</a></li>
            </ul>
          </div>

          {/* Legal Column */}
          <div>
            <h3 className="text-white font-semibold mb-4">Legal</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-amber-500 transition">Privacy</a></li>
              <li><a href="#" className="hover:text-amber-500 transition">Terms</a></li>
              <li><a href="#" className="hover:text-amber-500 transition">Cookies</a></li>
              <li><a href="#" className="hover:text-amber-500 transition">Sitemap</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-500 mb-4 md:mb-0">
            © {new Date().getFullYear()} LeadOctave. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-gray-400 hover:text-amber-500 transition">LinkedIn</a>
            <a href="#" className="text-gray-400 hover:text-amber-500 transition">Twitter</a>
            <a href="#" className="text-gray-400 hover:text-amber-500 transition">YouTube</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
