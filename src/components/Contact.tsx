import React, { useState } from 'react';
import { useEventData } from '../context/EventDataContext';

const Contact = () => {
  const { eventData } = useEventData();
  const volunteerYears = Object.keys(eventData.volunteers || {});
  const [activeYear, setActiveYear] = useState<string>('FourthYear');
  const [searchQuery, setSearchQuery] = useState('');

  const currentYear = eventData.volunteers?.[activeYear] ? activeYear : (volunteerYears[0] || '');
  const volunteersList = eventData.volunteers?.[currentYear] || [];

  const filteredVolunteers = volunteersList.filter(volunteer =>
    volunteer.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    volunteer.phone.includes(searchQuery)
  );

  return (
    <section className="py-20 bg-gray-50" id="contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Event Volunteers
          </h2>
          <p className="text-xl text-gray-600">Connect with our dedicated volunteer team</p>
        </div>

        {/* Year Selection Tabs */}
        <div className="flex flex-wrap gap-3 mb-8 justify-center">
          {volunteerYears.map((year) => (
            <button
              key={year}
              onClick={() => setActiveYear(year)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-colors
                ${currentYear === year 
                  ? 'bg-indigo-600 text-white' 
                  : 'bg-white text-gray-600 hover:bg-gray-100'}`}
            >
              {year.replace(/([A-Z])/g, ' $1').replace('Year', ' Year').trim()}
            </button>
          ))}
        </div>

        {/* Search Bar */}
        <div className="mb-8 max-w-md mx-auto">
          <input
            type="text"
            placeholder="Search volunteers by name or number..."
            className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        {/* Volunteers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredVolunteers.map((volunteer, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center">
                    <svg 
                      className="w-6 h-6 text-indigo-600" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={2} 
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" 
                      />
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">{volunteer.name}</h3>
                  <p className="text-indigo-600 font-medium">{volunteer.phone}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* General Contact */}
        <div className="mt-16 text-center bg-white p-8 rounded-2xl shadow-sm">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">General Inquiries</h3>
          <div className="space-y-1 text-gray-600">
            <p className='text-2xl'>Somesh Som Pattnaik</p>
            <p>Final Year Event Coordinator</p>
            <p>Phone: +91 79787 63263</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;