import React from 'react';

const coordinators = [
  {
    name: 'Dr. Amit Kumar',
    role: 'Event Coordinator',
    competition: 'Paper & Poster Presentation',
    phone: '+91 98765 43210',
    email: 'amit.kumar@synergy.ac.in'
  },
  {
    name: 'Prof. Priya Singh',
    role: 'Technical Lead',
    competition: 'Error Correction & CTF',
    phone: '+91 98765 43211',
    email: 'priya.singh@synergy.ac.in'
  },
  {
    name: 'Dr. Rahul Sharma',
    role: 'Quiz Coordinator',
    competition: 'Technical Quiz & Brain Mapping',
    phone: '+91 98765 43212',
    email: 'rahul.sharma@synergy.ac.in'
  },
  {
    name: 'Prof. Neha Patel',
    role: 'Creative Head',
    competition: 'Short Film Making & Blind Fold Typing',
    phone: '+91 98765 43213',
    email: 'neha.patel@synergy.ac.in'
  }
];

const Contact = () => {
  return (
    <section className="py-20 bg-white" id="contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Contact Coordinators</h2>
          <p className="text-xl text-gray-600">Reach out to our event coordinators for any queries</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {coordinators.map((coordinator, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">{coordinator.name}</h3>
              <p className="text-red-600 font-medium mb-4">{coordinator.role}</p>
              <div className="space-y-2 text-gray-600">
                <p><strong>Competition:</strong> {coordinator.competition}</p>
                <p><strong>Phone:</strong> {coordinator.phone}</p>
                <p><strong>Email:</strong> {coordinator.email}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">General Inquiries</h3>
          <p className="text-gray-600">
            For general questions about Anarghya 2025, please contact:<br />
            Email: anarghya2025@synergy.ac.in<br />
            Phone: +91 98765 43200
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;