import { MapPin, Phone, Mail } from 'lucide-react';

const Venue = () => {
  return (
    <section className="py-20 bg-gray-50" id="venue">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Venue</h2>
          <p className="text-xl text-gray-600">Join us at our state-of-the-art conference facility</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Conference Hall</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <MapPin className="w-6 h-6 text-red-600 mt-1 mr-3" />
                  <p className="text-gray-600">
                    Synergy Institute of Engineering and Technology<br />
                    Dhenkanal, Odisha 759001
                  </p>
                </div>
                <div className="flex items-center">
                  <Phone className="w-6 h-6 text-red-600 mr-3" />
                  <p className="text-gray-600">+91 98765 43210</p>
                </div>
                <div className="flex items-center">
                  <Mail className="w-6 h-6 text-red-600 mr-3" />
                  <p className="text-gray-600">venue@synergy.ac.in</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Facilities</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• State-of-the-art conference hall with 500+ seating capacity</li>
                <li>• High-speed Wi-Fi connectivity</li>
                <li>• Modern audio-visual equipment</li>
                <li>• Dedicated computer labs</li>
                <li>• Cafeteria and refreshment areas</li>
              </ul>
            </div>
          </div>

          <div className="h-[600px] rounded-2xl overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3733.748401749831!2d85.58070657430433!3d20.639109680914483!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a191fff88a45791%3A0x6dd29378b91a27ea!2sSynergy%20Institute%20of%20Engineering%20and%20Technology%2C%20Dhenkanal!5e0!3m2!1sen!2sin!4v1743657485347!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Venue;