import { useEffect, useState } from 'react';

const Hero = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const eventDate = new Date('2025-04-16T09:00:00').getTime();

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = eventDate - now;

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000)
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const scrollToCompetitions = () => {
    const element = document.getElementById('competitions');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background with red accent */}
      <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-indigo-600 via-red-500 to-pink-600 animate-gradient-x"></div>
      
      {/* Overlay pattern */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />

      {/* Floating elements */}
      <div className="absolute top-10 left-10 w-16 h-16 bg-red-500 rounded-full opacity-70 animate-float"></div>
      <div className="absolute bottom-20 right-10 w-20 h-20 border-4 border-red-500 rounded-full opacity-50 animate-float" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-1/2 right-20 w-12 h-12 bg-red-500 rounded-full opacity-60 animate-float" style={{ animationDelay: '2s' }}></div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-7xl mx-auto">
        <div className="mb-6">
          <h1 className="text-6xl md:text-8xl font-extrabold text-white mb-4 tracking-tight">
            ANARGHYA
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-pink-400 to-blue-500 animate-text">
              2025
            </span>
          </h1>
          <p className="text-xl md:text-3xl text-gray-200 font-light max-w-3xl mx-auto leading-relaxed">
            Where Innovation Meets Excellence
          </p>
        </div>
        
        {/* Responsive Timer: 2 columns on mobile, 4 on md and up */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12 max-w-4xl mx-auto">
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 md:p-6 transform hover:scale-105 transition-all duration-300">
            <div className="text-4xl md:text-5xl font-bold text-white mb-2">{timeLeft.days}</div>
            <div className="text-gray-300 text-base md:text-lg">Days</div>
          </div>
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 md:p-6 transform hover:scale-105 transition-all duration-300">
            <div className="text-4xl md:text-5xl font-bold text-white mb-2">{timeLeft.hours}</div>
            <div className="text-gray-300 text-base md:text-lg">Hours</div>
          </div>
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 md:p-6 transform hover:scale-105 transition-all duration-300">
            <div className="text-4xl md:text-5xl font-bold text-white mb-2">{timeLeft.minutes}</div>
            <div className="text-gray-300 text-base md:text-lg">Minutes</div>
          </div>
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 md:p-6 transform hover:scale-105 transition-all duration-300">
            <div className="text-4xl md:text-5xl font-bold text-white mb-2">{timeLeft.seconds}</div>
            <div className="text-gray-300 text-base md:text-lg">Seconds</div>
          </div>
        </div>

        <button 
          onClick={scrollToCompetitions}
          className="bg-red-500 text-white px-8 py-3 md:px-12 md:py-4 rounded-full text-lg md:text-xl font-bold hover:bg-red-600 transition-all duration-300 transform hover:scale-105 shadow-lg"
        >
          Register Now
        </button>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-gray-50 to-transparent z-20"></div>

      {/* Floating animation styles */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        .animate-gradient-x {
          animation: gradient-x 15s ease infinite;
          background-size: 400% 400%;
        }
        @keyframes gradient-x {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>
    </div>
  );
};

export default Hero;
