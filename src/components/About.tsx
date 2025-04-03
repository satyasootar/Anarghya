

const About = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80"
                alt="Tech Event"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-indigo-600/10 rounded-full -z-10"></div>
            <div className="absolute -top-6 -left-6 w-48 h-48 bg-pink-600/10 rounded-full -z-10"></div>
          </div>

          <div>
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
                <div className="text-3xl font-bold text-red-500">8+</div>
                <div className="text-gray-600">Events</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-red-500">500+</div>
                <div className="text-gray-600">Participants</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-red-500">50+</div>
                <div className="text-gray-600">Colleges</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;