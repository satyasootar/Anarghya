import { useEffect, useRef, useState } from 'react';

const About = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.3 }
    );
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <section ref={sectionRef} className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image Section with fade-in and zoom-in animations */}
          <div className={`relative ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
            <div className="aspect-[4/3] rounded-2xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80"
                alt="Tech Event"
                className="w-full h-full object-cover transform hover:scale-105 transition-all duration-300"
              />
            </div>
            <div
              className={`absolute -bottom-6 -right-6 w-64 h-64 bg-indigo-600/10 rounded-full -z-10 ${
                isVisible ? 'animate-zoom-in' : 'opacity-0'
              }`}
            ></div>
            <div
              className={`absolute -top-6 -left-6 w-48 h-48 bg-pink-600/10 rounded-full -z-10 ${
                isVisible ? 'animate-zoom-in' : 'opacity-0'
              }`}
              style={{ animationDelay: '0.5s' }}
            ></div>
          </div>

          {/* Text Section with slide-in animation */}
          <div className={`${isVisible ? 'animate-slide-in' : 'opacity-0'}`}>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              About Anarghya 2025
            </h2>
            <div className="space-y-4 text-lg text-gray-600">
              <p>
                Anarghya is the flagship technical festival of the Department of Computer Science and Engineering at Synergy Institute of Engineering and Technology, Dhenkanal.
              </p>
              <p>
                This annual celebration brings together brilliant minds from across the state, fostering innovation, creativity, and technical excellence through a diverse range of competitions and events.
              </p>
              <p>
                From coding challenges to creative presentations, Anarghya 2025 offers a platform for students to showcase their skills, learn from peers, and stay at the forefront of technological advancement.
              </p>
            </div>
            <div className="mt-8 grid grid-cols-3 gap-6">
              <div className="text-center">
                <div className={`text-3xl font-bold text-red-500 ${isVisible ? 'animate-pulse' : ''}`}>
                  8+
                </div>
                <div className="text-gray-600">Events</div>
              </div>
              <div className="text-center">
                <div className={`text-3xl font-bold text-red-500 ${isVisible ? 'animate-pulse' : ''}`} style={{ animationDelay: '0.2s' }}>
                  500+
                </div>
                <div className="text-gray-600">Participants</div>
              </div>
              <div className="text-center">
                <div className={`text-3xl font-bold text-red-500 ${isVisible ? 'animate-pulse' : ''}`} style={{ animationDelay: '0.4s' }}>
                  50+
                </div>
                <div className="text-gray-600">Colleges</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Animation Styles */}
      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fadeIn 1s ease-out forwards;
        }
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        .animate-slide-in {
          animation: slideIn 1s ease-out forwards;
        }
        @keyframes zoomIn {
          from {
            transform: scale(0.8);
            opacity: 0;
          }
          to {
            transform: scale(1);
            opacity: 1;
          }
        }
        .animate-zoom-in {
          animation: zoomIn 1s ease-out forwards;
        }
        @keyframes pulse {
          0% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.05);
          }
          100% {
            transform: scale(1);
          }
        }
        .animate-pulse {
          animation: pulse 2s infinite;
        }
      `}</style>
    </section>
  );
};

export default About;
