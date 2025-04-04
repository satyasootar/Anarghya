import { useEffect, useState, useCallback } from 'react';
import { motion, useScroll, useTransform, Variants, AnimatePresence } from 'framer-motion';

const images = [
  'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=1920',
  'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=1920',
  'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=1920',
  'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1920'
];

// Animation variants for title letters
const titleVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.05,
      type: "spring",
      stiffness: 50,
      damping: 10
    }
  })
};

const scrollIndicatorVariants: Variants = {
  animate: {
    y: [0, 20, 0],
    transition: {
      repeat: Infinity,
      duration: 2,
      ease: "easeInOut"
    }
  }
};

// Updated slide variants for horizontal carousel with no opacity change
const slideVariants: Variants = {
  initial: { x: '-100%' },
  animate: { x: 0 },
  exit: { x: '100%' }
};

const Hero = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });
  const [currentImage, setCurrentImage] = useState(0);

  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 300], [0, -100]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0.8]);
  const scale = useTransform(scrollY, [0, 300], [1, 0.95]);

  const eventDate = new Date('2025-04-16T09:00:00').getTime();

  // Image carousel effect with horizontal sliding
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage(prev => (prev + 1) % images.length);
    }, 4000); // change image every 4 seconds
    return () => clearInterval(interval);
  }, []);

  const updateTimer = useCallback(() => {
    const now = new Date().getTime();
    const distance = eventDate - now;
    setTimeLeft({
      days: Math.floor(distance / (1000 * 60 * 60 * 24)),
      hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
      minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
      seconds: Math.floor((distance % (1000 * 60)) / 1000)
    });
  }, [eventDate]);

  useEffect(() => {
    const timer = setInterval(updateTimer, 1000);
    return () => clearInterval(timer);
  }, [updateTimer]);

  const scrollToCompetitions = () => {
    const element = document.getElementById('competitions');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.div 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ y, opacity }}
    >
      {/* Background Image Carousel */}
      <div className="absolute inset-0">
        <AnimatePresence initial={false}>
          <motion.div
            key={currentImage}
            className="absolute inset-0"
            variants={slideVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 1, ease: "easeInOut" }}
            style={{
              zIndex: 1,
              backgroundImage: `url(${images[currentImage]})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/80 via-red-800/80 to-pink-900/80" />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Floating elements */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute pointer-events-none bg-white/10"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            width: `${Math.random() * 40 + 20}px`,
            height: `${Math.random() * 40 + 20}px`,
            borderRadius: Math.random() > 0.5 ? '50%' : '20%'
          }}
          animate={{
            y: [0, -40, 0],
            rotate: [0, 360],
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{
            duration: Math.random() * 4 + 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: Math.random() * 2
          }}
          initial={false}
        />
      ))}

      {/* Main content */}
      <motion.div 
        className="relative z-10 text-center px-4 max-w-7xl mx-auto"
        style={{ scale }}
      >
        <motion.div 
          className="mb-6"
          initial="hidden"
          animate="visible"
        >
          <h1 className="text-6xl md:text-8xl font-extrabold text-white mb-4 tracking-tighter">
            {'ANARGHYA'.split('').map((letter, i) => (
              <motion.span
                key={i}
                custom={i}
                variants={titleVariants}
                className="inline-block"
              >
                {letter}
              </motion.span>
            ))}
            <motion.span
              className="block bg-gradient-to-r from-yellow-400 via-pink-400 to-blue-500 bg-clip-text text-transparent"
              animate={{
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "linear"
              }}
              style={{
                backgroundSize: '200% 200%'
              }}
            >
              2025
            </motion.span>
          </h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-xl md:text-3xl text-gray-200 font-light max-w-3xl mx-auto leading-relaxed"
          >
            Where Innovation Meets Excellence
          </motion.p>
        </motion.div>

        {/* Timer */}
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12 max-w-4xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          {Object.entries(timeLeft).map(([unit, value]) => (
            <div 
              key={unit}
              className="bg-white/10 backdrop-blur-md rounded-2xl p-4 md:p-6 transition-all duration-300 hover:bg-white/20"
            >
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                {value.toString().padStart(2, '0')}
              </div>
              <div className="text-gray-300 text-base md:text-lg capitalize">
                {unit}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Register Button */}
        <motion.button
          onClick={scrollToCompetitions}
          className="bg-red-600 text-white px-8 py-3 md:px-12 md:py-4 rounded-full text-lg md:text-xl font-semibold hover:bg-red-700 transition-colors relative overflow-hidden"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <span className="relative z-10">Register Now</span>
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 hover:opacity-100 transition-opacity" />
        </motion.button>
      </motion.div>

      {/* Scrolling Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center"
        variants={scrollIndicatorVariants}
        animate="animate"
      >
        <div className="w-8 h-12 border-4 border-white/30 rounded-full">
          <div className="w-2 h-2 bg-white/50 rounded-full mt-2 mx-auto" />
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Hero;
