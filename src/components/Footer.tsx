
import { Facebook, Instagram, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-4">Contact Us</h3>
            <p className="mb-2">Synergy Institute of Engineering and Technology</p>
            <p className="mb-2">Dhenkanal, Odisha</p>
            <p>Email: hodcse@synergyinstitute.net</p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="#" className="hover:text-white transition-colors">About</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Competitions</a></li>
              <li><a href="#" className="hover:text-white transition-colors">FAQ</a></li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/synergygroupofinstitutions" className="hover:text-white transition-colors">
                <Facebook size={24} />
              </a>
              <a href="https://www.instagram.com/synergygroupofinstitutions/" className="hover:text-white transition-colors">
                <Instagram size={24} />
              </a>
              {/* <a href="#" className="hover:text-white transition-colors">
                <Twitter size={24} />
              </a> */}
              <a href="https://www.linkedin.com/school/synergy-institute-of-engineering-and-technology-siet-dhenkanal/" className="hover:text-white transition-colors">
                <Linkedin size={24} />
              </a>
              <a href="mailto:hodcse@synergyinstitute.net" className="hover:text-white transition-colors">
                <Mail size={24} />
              </a>
            </div>
          </div>
            <a className='mt-5' href='https://www.linkedin.com/in/satyaprangyasootar/' >Made with ♡ by Satya Sootar</a>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p>&copy; 2025 Anarghya. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;