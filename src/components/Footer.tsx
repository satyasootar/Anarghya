
import { Facebook, Instagram, Linkedin, Mail } from 'lucide-react';
import { eventData } from '../data/eventData';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-4">Contact Us</h3>
            <p className="mb-2">{eventData.footer.institution}</p>
            <p className="mb-2">{eventData.footer.location}</p>
            <p>Email: {eventData.footer.email}</p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {eventData.footer.quickLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="hover:text-white transition-colors">{link.label}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href={eventData.footer.socialLinks.facebook} className="hover:text-white transition-colors">
                <Facebook size={24} />
              </a>
              <a href={eventData.footer.socialLinks.instagram} className="hover:text-white transition-colors">
                <Instagram size={24} />
              </a>
              {/* <a href="#" className="hover:text-white transition-colors">
                <Twitter size={24} />
              </a> */}
              <a href={eventData.footer.socialLinks.linkedin} className="hover:text-white transition-colors">
                <Linkedin size={24} />
              </a>
              <a href={`mailto:${eventData.footer.email}`} className="hover:text-white transition-colors">
                <Mail size={24} />
              </a>
            </div>
          </div>
            <div className="mt-5 flex flex-col gap-1">
              {eventData.footer.credits.map((credit) => (
                <a key={credit.href} href={credit.href} className="hover:text-white transition-colors">
                  {credit.text}
                </a>
              ))}
            </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p>&copy; {eventData.year} {eventData.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;