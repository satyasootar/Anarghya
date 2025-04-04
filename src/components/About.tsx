import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const About = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  // Animation variants
  const imageVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const circleVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: { scale: 1, opacity: 1 }
  };

  const textVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0 }
  };

  const numberVariants = {
    hidden: { scale: 1 },
    visible: { scale: [1, 1.05, 1] }
  };

  return (
    <section ref={sectionRef} className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image Section */}
          <motion.div 
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <motion.div
              variants={imageVariants}
              className="aspect-[4/3] rounded-2xl overflow-hidden"
            >
              <img
                src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1200&q=80"
                alt="Tech Event"
                className="w-full h-full object-cover"
                loading="lazy"
                width={1200}
                height={900}
              />
            </motion.div>

            <motion.div
              variants={circleVariants}
              transition={{ delay: 0.2 }}
              className="absolute -bottom-6 -right-6 w-64 h-64 bg-indigo-600/10 rounded-full -z-10"
            />
            
            <motion.div
              variants={circleVariants}
              transition={{ delay: 0.4 }}
              className="absolute -top-6 -left-6 w-48 h-48 bg-pink-600/10 rounded-full -z-10"
            />
          </motion.div>

          {/* Text Section */}
          <motion.div
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <motion.h2
              variants={textVariants}
              className="text-4xl font-bold text-gray-900 mb-6"
            >
              About Anarghya 2025
            </motion.h2>

            <motion.div
              variants={textVariants}
              transition={{ delay: 0.4 }}
              className="space-y-4 text-lg text-gray-600"
            >
              <p>
                Anarghya is the flagship technical festival of the Department of Computer Science and Engineering at Synergy Institute of Engineering and Technology, Dhenkanal.
              </p>
              <p>
                This annual celebration brings together brilliant minds from across the state, fostering innovation, creativity, and technical excellence through a diverse range of competitions and events.
              </p>
              <p>
                From coding challenges to creative presentations, Anarghya 2025 offers a platform for students to showcase their skills, learn from peers, and stay at the forefront of technological advancement.
              </p>
            </motion.div>

            <motion.div
              variants={textVariants}
              transition={{ delay: 0.6 }}
              className="mt-8 grid grid-cols-3 gap-6"
            >
              {[
                { number: "8+", label: "Events" },
                { number: "500+", label: "Participants", delay: 0.1 },
                { number: "50+", label: "Colleges", delay: 0.2 }
              ].map((item, index) => (
                <motion.div
                  key={item.label}
                  initial="hidden"
                  animate={isInView ? "visible" : "hidden"}
                  variants={numberVariants}
                  transition={{ 
                    delay: 0.6 + (index * 0.2),
                    repeat: Infinity,
                    duration: 2,
                    ease: "easeInOut"
                  }}
                  className="text-center"
                >
                  <div className="text-3xl font-bold text-red-500">
                    {item.number}
                  </div>
                  <div className="text-gray-600">{item.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;