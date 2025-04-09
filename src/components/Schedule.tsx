const scheduleData = [
  {
    date: 'April 16 2025',
    events: [
      {
        time: '2:00 PM - 4:30 PM',
        title: 'Orientation for CTF'
      }
    ]
  },
  {
    date: 'April 17 2025',
    events: [
      {
        time: '9:00 AM - 4:30 PM',
        title: 'Capture The Flag'
      }
    ]
  },
  {
    date: 'April 19 2025',
    events: [
      {
        time: '3:30 PM - 4:30 PM',
        title: 'Error Correction'
      },
      {
        time: '4:30 PM - 5:00 PM',
        title: 'Brain Mapping'
      },
      {
        time: 'Before 5:00 PM',
        title: 'Short Film Submission'
      }
    ]
  },
  {
    date: 'April 21 2025',
    events: [
      {
        time: '3:30 PM - 5:00 PM',
        title: 'Technical Quiz'
      }
    ]
  },
  {
    date: 'April 22 2025',
    events: [
      {
        time: '10:00 AM - 11:00 AM',
        title: 'Blind Fold Typing'
      },
      {
        time: '11:00 AM - 1:00 PM',
        title: 'Soap Craft'
      },
      {
        time: '2:30 PM - 4:00 PM',
        title: 'Paper Presentation'
      },
      {
        time: '3:30 PM - 5:00 PM',
        title: 'Face Painting'
      }
    ]
  }
];

const Schedule = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white" id="schedule">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-3 bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
            Event Schedule
          </h2>
          <p className="text-xl text-gray-600">April 16-22, 2025 - Technical & Creative Events</p>
        </div>

        <div className="flex flex-col gap-8 lg:gap-12">
          {scheduleData.map((day, dayIndex) => (
            <div key={dayIndex} className="relative group">
              {/* Timeline line */}
              <div className="absolute left-8 top-10 bottom-10 w-1 bg-gradient-to-b from-blue-200 to-purple-200 hidden lg:block" />
              
              <div className="relative z-10 bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden">
              <div className="p-6 bg-gradient-to-r from-blue-100 to-purple-50 border-b border-gray-100">
             <div className="flex items-center gap-4">
               <div className="flex-shrink-0 w-14 h-14 bg-white rounded-xl shadow-sm flex items-center justify-center">
                 <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                   {day.date.split(' ')[1]}
                 </span>
               </div>
               <div>
                 <h3 className="text-xl font-semibold text-gray-900">
                   {day.date.split(' ')[0]} {/* Month */}
                   <span className="block text-lg text-gray-600 mt-1">
                     {day.date.split(' ')[2]} {/* Year */}
                   </span>
                 </h3>
               </div>
             </div>
           </div>

                <div className="p-6 grid gap-4">
                  {day.events.map((event, eventIndex) => (
                    <div key={eventIndex} className="flex gap-4 p-4 rounded-xl bg-gray-50 hover:bg-white transition-colors">
                      <div className="flex-shrink-0 w-14">
                        <div className="w-12 h-12 bg-white rounded-lg shadow-sm flex items-center justify-center">
                          <svg 
                            className="w-6 h-6 text-purple-600" 
                            fill="none" 
                            stroke="currentColor" 
                            viewBox="0 0 24 24"
                          >
                            <path 
                              strokeLinecap="round" 
                              strokeLinejoin="round" 
                              strokeWidth={2} 
                              d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" 
                            />
                          </svg>
                        </div>
                      </div>
                      
                      <div className="flex-1">
                        <h4 className="text-lg font-semibold text-gray-900 mb-1">{event.title}</h4>
                        <div className="flex items-center gap-2 text-sm text-gray-500">
                          <span className="px-2 py-1 bg-blue-50 text-blue-600 rounded-full">
                            {event.time}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Schedule;