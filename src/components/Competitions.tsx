import { motion } from 'framer-motion';

const competitions = [
  {
    title: 'Poster Presentation',
    description: 'Showcase your creativity and technical knowledge through poster presentations in association with ISTE Synergy Chapter.',
    image: 'https://images.pexels.com/photos/3052727/pexels-photo-3052727.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    group: 'https://chat.whatsapp.com/poster-group'
  },
  {
    title: 'Error Correction',
    description: 'Test your programming skills by solving complex coding challenges and debugging problems.',
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80',
    group: 'https://chat.whatsapp.com/coding-group'
  },
  {
    title: 'Paper Presentation',
    description: 'Present your research on latest technologies and innovations, organized with ISTE Synergy Chapter.',
    image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80',
    group: 'https://chat.whatsapp.com/paper-group'
  },
  {
    title: 'Technical Quiz',
    description: 'Put your technical knowledge to the test in this comprehensive quiz competition.',
    image: 'https://images.unsplash.com/photo-1606326608606-aa0b62935f2b?auto=format&fit=crop&q=80',
    group: 'https://chat.whatsapp.com/quiz-group'
  },
  {
    title: 'Brain Mapping',
    description: 'Challenge your memory and cognitive skills in this exciting brain training competition.',
    image: 'https://images.unsplash.com/photo-1565843708714-52ecf69ab81f?auto=format&fit=crop&q=80',
    group: 'https://chat.whatsapp.com/brain-group'
  },
  {
    title: 'Blind Fold Typing',
    description: 'Show off your typing speed and accuracy while blindfolded in this unique challenge.',
    image: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&q=80',
    group: 'https://chat.whatsapp.com/typing-group'
  },
  {
    title: 'Short Film Making',
    description: 'Create compelling short films about campus life for institute social media.',
    image: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&q=80',
    group: 'https://chat.whatsapp.com/film-group'
  },
  {
    title: 'CTF',
    description: 'Test your cybersecurity skills in this Capture The Flag competition.',
    image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80',
    group: 'https://chat.whatsapp.com/ctf-group'
  },
  {
    title: 'Face Painting',
    description: 'A creative contest where teams of 2 transform faces into vibrant canvases with innovative designs.',
    image: 'https://images.pexels.com/photos/1388534/pexels-photo-1388534.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    group: 'https://chat.whatsapp.com/ctf-group'
  },
  {
    title: 'Soap Crafting',
    description: 'A creative contest where you craft unique, artisanal soaps by blending colors, scents, and textures into delightful masterpieces.',
    image: 'https://houseoftomorrow.net/wp-content/uploads/2021/01/variety-soaps.jpg',
    group: 'https://chat.whatsapp.com/ctf-group'
  },
];

interface CompetitionCardProps {
  title: string;
  description: string;
  image: string;
  group: string;
}

const cardVariants = {
  offscreen: {
    y: 0,
    opacity: 0
  },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: {
      type: "ease",
      bounce: 0.4,
      duration: 2
    }
  }
};

const CompetitionCard: React.FC<CompetitionCardProps> = ({ title, description, image, group }) => (
  <motion.div
    className="bg-white rounded-2xl shadow-xl overflow-hidden transform hover:scale-105 transition-all duration-300"
    initial="offscreen"
    whileInView="onscreen"
    viewport={{ once: true, amount: 0.2 }}
    variants={cardVariants}
  >
    <div className="h-64 overflow-hidden">
      <img 
        src={image} 
        alt={title}
        className="w-full h-full object-cover transform hover:scale-110 transition-all duration-500"
      />
    </div>
    <div className="p-8">
      <h3 className="text-2xl font-bold text-gray-900 mb-4">{title}</h3>
      <p className="text-gray-600 mb-6 text-lg">{description}</p>
      <a 
        href={group}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block bg-red-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-red-700 transition-colors"
      >
        Join Now
      </a>
    </div>
  </motion.div>
);

const Competitions = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-gray-900 mb-4"
          >
            Competitions
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl text-gray-600 max-w-2xl mx-auto"
          >
            Showcase your skills and compete in our diverse range of technical competitions
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {competitions.map((competition, index) => (
            <CompetitionCard key={index} {...competition} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Competitions;