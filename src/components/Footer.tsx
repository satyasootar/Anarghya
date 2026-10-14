import { Facebook, Instagram, Linkedin, Mail } from 'lucide-react';
import { useEventData } from '../context/EventDataContext';

const Footer = () => {
  const { eventData } = useEventData();
  const footer = eventData.footer;

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-4">Contact Us</h3>
            <p className="mb-2">{footer?.institution}</p>
            <p className="mb-2">{footer?.location}</p>
            <p>Email: {footer?.email}</p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {(footer?.quickLinks || []).map((link) => (
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
              {footer?.socialLinks?.facebook && (
                <a href={footer.socialLinks.facebook} className="hover:text-white transition-colors" aria-label="Facebook">
                  <Facebook size={24} />
                </a>
              )}
              {footer?.socialLinks?.instagram && (
                <a href={footer.socialLinks.instagram} className="hover:text-white transition-colors" aria-label="Instagram">
                  <Instagram size={24} />
                </a>
              )}
              {footer?.socialLinks?.linkedin && (
                <a href={footer.socialLinks.linkedin} className="hover:text-white transition-colors" aria-label="LinkedIn">
                  <Linkedin size={24} />
                </a>
              )}
              {footer?.email && (
                <a href={`mailto:${footer.email}`} className="hover:text-white transition-colors" aria-label="Email">
                  <Mail size={24} />
                </a>
              )}
            </div>
          </div>
          <div className="mt-5 flex flex-col gap-1">
            {(footer?.credits || []).map((credit) => (
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