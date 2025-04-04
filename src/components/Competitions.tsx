import { motion } from 'framer-motion';

const competitions = [
  {
    title: 'Capture The Flag',
    description: 'Test your cybersecurity skills in this Capture The Flag competition.',
    image: '/images/CTF.jpg',
    group: 'https://chat.whatsapp.com/ctf-group',
    registration: 'https://forms.gle/ctf-registration'
  },
  {
    title: 'Error Correction',
    description: 'Test your programming skills by solving complex coding challenges and debugging problems.',
    image: '/images/ErrorCorrection.jpg',
    group: 'https://chat.whatsapp.com/coding-group',
    registration: 'https://forms.gle/error-correction-registration'
  },
  {
    title: 'Technical Quiz',
    description: 'Put your technical knowledge to the test in this comprehensive quiz competition.',
    image: '/images/TechQuiz.jpg',
    group: 'https://chat.whatsapp.com/quiz-group',
    registration: 'https://forms.gle/technical-quiz-registration'
  },
  {
    title: 'Poster Presentation',
    description: 'Showcase your creativity and technical knowledge through poster presentations in association with ISTE Synergy Chapter.',
    image: "/images/Poster_Painting.jpeg",
    group: 'https://chat.whatsapp.com/poster-group',
    registration: 'https://forms.gle/poster-registration'
  },
  {
    title: 'Blind Fold Typing',
    description: 'Show off your typing speed and accuracy while blindfolded in this unique challenge.',
    image: '/images/BlindFoldTyping.jpg',
    group: 'https://chat.whatsapp.com/typing-group',
    registration: 'https://forms.gle/blind-fold-typing-registration'
  },
  {
    title: 'Brain Mapping',
    description: 'Challenge your memory and cognitive skills in this exciting brain training competition.',
    image: '/images/BrainMapping.jpg',
    group: 'https://chat.whatsapp.com/brain-group',
    registration: 'https://forms.gle/brain-mapping-registration'
  },
  {
    title: 'Paper Presentation',
    description: 'Present your research on latest technologies and innovations, organized with ISTE Synergy Chapter.',
    image: '/images/PaperPresentation.jpg',
    group: 'https://chat.whatsapp.com/paper-group',
    registration: 'https://forms.gle/paper-presentation-registration'
  },
  {
    title: 'Short Film Making',
    description: 'Create compelling short films about campus life for institute social media.',
    image: '/images/ShortFilmMaking.jpg',
    group: 'https://chat.whatsapp.com/film-group',
    registration: 'https://forms.gle/short-film-registration'
  },
  {
    title: 'Face Painting',
    description: 'A creative contest where teams of 2 transform faces into vibrant canvases with innovative designs.',
    image: '/images/FacePainting.jpg',
    group: 'https://chat.whatsapp.com/face-painting-group',
    registration: 'https://forms.gle/face-painting-registration'
  },
  {
    title: 'Soap Crafting',
    description: 'A creative contest where you craft unique, artisanal soaps by blending colors, scents, and textures into delightful masterpieces.',
    image: '/images/SoapCrafting.jpg',
    group: 'https://chat.whatsapp.com/soap-crafting-group',
    registration: 'https://forms.gle/soap-crafting-registration'
  }
];

interface CompetitionCardProps {
  title: string;
  description: string;
  image: string;
  group: string;
  registration: string;
}

const cardVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { duration: 0.5, ease: "easeInOut" }
  }
};

const CompetitionCard: React.FC<CompetitionCardProps> = ({ title, description, image, group, registration }) => (
  <motion.div
    className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.1 }}
    variants={cardVariants}
  >
    <div className="relative aspect-video overflow-hidden">
      <img 
        src={image}
        alt={title}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        width={400}
        height={300}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900/20 to-transparent" />
    </div>
    
    <div className="p-6 space-y-4">
      <h3 className="text-xl font-bold text-gray-900">{title}</h3>
      
      <p className="text-gray-600 text-base leading-relaxed">
        {description}
      </p>
      
      <div className="flex flex-col gap-3">
      <a 
          href={registration}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 bg-red-600 text-white px-4 py-2.5 rounded-lg hover:bg-red-700 transition-colors"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6zM6 20V4h7v5h5v11H6zm8-6.2V12h2v1.8h-2zm-3.5-1.8c0 .4-.3.7-.7.7h-1.4v1.4h-.7V12h2.1c.4 0 .7.3.7.7v.7zm-1.4 0h.7v-.7h-.7v.7zm4.9 1.5h-2.8v-1.5h2.8v1.5z"/>
          </svg>
          Register Now
        </a>
        <a 
          href={group}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 bg-green-600/10 text-green-700 px-4 py-2.5 rounded-lg hover:bg-green-600/20 transition-colors"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.462 6.403h-.004a9.87 9.87 0 01-5.032-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884"/>
          </svg>
          WhatsApp Group
        </a>
      </div>
    </div>
  </motion.div>
);

const Competitions = () => {
  return (
    <section className="py-16 bg-gray-50" id="competitions">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-3">
            Featured Competitions
          </h2>
          <p className="text-gray-600 text-lg max-w-xl mx-auto">
            Showcase your technical prowess in our premier events
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {competitions.map((competition, index) => (
            <CompetitionCard key={index} {...competition} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Competitions;