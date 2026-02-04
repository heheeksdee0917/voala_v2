import React from 'react';
import { MapPin, Phone, Mail, Clock, Instagram, Facebook } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white py-16 font-louis-george-cafe">
      <div className="container mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-4 font-louis-george-cafe gradient-highlight-white">Voala Interior</h3>
            <p className="text-white/80 leading-relaxed mb-6 font-louis-george-cafe">
              From 0 to 100, we deliver seamless & <span className="gradient-highlight-white">exceptional</span> spaces. 
              As luxury interior design and fit-out specialists, we create bespoke interiors that transform your vision into reality.
            </p>
            <div className="flex flex-col gap-2 text-white font-louis-george-cafe">
              <span className="font-semibold gradient-highlight-white">15+ Years Experience</span>
              <span className="font-semibold gradient-highlight-white">200+ Projects Completed</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 font-louis-george-cafe uppercase tracking-wide gradient-highlight-white">Quick Links</h4>
            <nav className="space-y-3">
              <Link 
                to="/" 
                className="block text-white/80 hover:text-white transition-colors font-louis-george-cafe"
              >
                Home
              </Link>
              <Link 
                to="/projects" 
                className="block text-white/80 hover:text-white transition-colors font-louis-george-cafe"
              >
                Projects
              </Link>
              <Link 
                to="/contact" 
                className="block text-white/80 hover:text-white transition-colors font-louis-george-cafe"
              >
                Contact Us
              </Link>
            </nav>
          </div>
          
          {/* Contact Information */}
          <div>
            <h4 className="text-lg font-semibold mb-4 font-louis-george-cafe uppercase tracking-wide gradient-highlight-white">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <Phone size={16} className="text-white mt-1 flex-shrink-0" />
                <div>
                  <a href="tel:+60125053395" className="hover:text-gray-300 transition-colors font-louis-george-cafe">
                    +60 12 505 3395
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Mail size={16} className="text-white mt-1 flex-shrink-0" />
                <div>
                  <a href="mailto:askvoala@gmail.com" className="hover:text-gray-300 transition-colors font-louis-george-cafe">
                    askvoala@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin size={16} className="text-white mt-1 flex-shrink-0" />
                <div>
                  <a 
                    href="https://maps.app.goo.gl/qngzF1w5uWsueGdp9"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/80 text-sm font-louis-george-cafe hover:text-white transition-colors cursor-pointer"
                  >
                    L2-29&30, The Link 2, Jalan Jalil Perkasa 3, Bukit Jalil, 57000, Bukit Jalil, Kuala Lumpur.
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          {/* Business Hours & Social Media */}
          <div>
            <h4 className="text-lg font-semibold mb-4 font-louis-george-cafe uppercase tracking-wide gradient-highlight-white">Business Hours</h4>
            <div className="space-y-3 mb-8">
              <div className="flex items-center gap-3">
                <Clock size={16} className="text-white flex-shrink-0" />
                <div>
                  <p className="text-white/80 text-sm font-louis-george-cafe">
                    Monday - Friday (By Appointment)<br />
                    10:00 AM - 7:00 PM
                  </p>
                </div>
              </div>
              <div className="text-white/60 text-sm font-louis-george-cafe">
                <p>Saturday: By Appointment</p>
                <p>Sunday: Closed</p>
              </div>
            </div>

            {/* Social Media Section */}
            <div>
              <h4 className="text-lg font-semibold mb-4 font-louis-george-cafe uppercase tracking-wide gradient-highlight-white">Follow Us</h4>
              <div className="flex gap-4">
                <a
                  href="https://www.instagram.com/hellovoala/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-all duration-300 hover:scale-110"
                  aria-label="Follow us on Instagram"
                >
                  <Instagram size={20} className="text-white" />
                </a>
                <a
                  href="https://www.facebook.com/hellovoala"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-all duration-300 hover:scale-110"
                  aria-label="Follow us on Facebook"
                >
                  <Facebook size={20} className="text-white" />
                </a>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom Section */}
        <div className="border-t border-white/20 mt-12 pt-8 text-center">
          <div className="h-px bg-gradient-to-r from-transparent via-white/30 to-transparent mb-6"></div>
          <p className="text-white/60 text-sm font-louis-george-cafe">
            © 2025 Voala Interior. All rights reserved. | Designs You'll Love. Heartwork You'll Feel
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
