const scheduleData = [
  {
    date: 'Day 1 - April 16, 2025',
    events: [
      {
        time: '9:00 AM - 10:00 AM',
        title: 'Inauguration Ceremony',
        venue: 'Main Auditorium'
      },
      {
        time: '10:30 AM - 1:00 PM',
        title: 'Paper Presentation',
        venue: 'Conference Hall A'
      },
      {
        time: '2:00 PM - 5:00 PM',
        title: 'Technical Quiz',
        venue: 'Seminar Hall'
      }
    ]
  },
  {
    date: 'Day 2 - April 17, 2025',
    events: [
      {
        time: '9:30 AM - 12:30 PM',
        title: 'Error Correction',
        venue: 'Computer Lab 1'
      },
      {
        time: '10:00 AM - 1:00 PM',
        title: 'Poster Presentation',
        venue: 'Exhibition Hall'
      },
      {
        time: '2:00 PM - 4:00 PM',
        title: 'Brain Mapping',
        venue: 'Conference Hall B'
      }
    ]
  },
  {
    date: 'Day 3 - April 18, 2025',
    events: [
      {
        time: '9:00 AM - 12:00 PM',
        title: 'CTF Competition',
        venue: 'Computer Lab 2'
      },
      {
        time: '11:00 AM - 1:00 PM',
        title: 'Blind Fold Typing',
        venue: 'Computer Lab 3'
      },
      {
        time: '2:00 PM - 4:00 PM',
        title: 'Short Film Screening',
        venue: 'Main Auditorium'
      },
      {
        time: '4:30 PM - 6:00 PM',
        title: 'Prize Distribution',
        venue: 'Main Auditorium'
      }
    ]
  }
];

const Schedule = () => {
  return (
    <section className="py-20 bg-white" id="schedule">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Event Schedule</h2>
          <p className="text-xl text-gray-600">
            Three days of exciting competitions and events
          </p>
        </div>

        <div className="space-y-8">
          {scheduleData.map((day, dayIndex) => (
            <div key={dayIndex} className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="bg-red-500 px-6 py-4">
                <h3 className="text-2xl font-bold text-white">{day.date}</h3>
              </div>
              <div className="divide-y divide-gray-200">
                {day.events.map((event, eventIndex) => (
                  <div key={eventIndex} className="p-6 hover:bg-gray-50 transition-colors">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                      <div className="mb-4 md:mb-0">
                        <h4 className="text-xl font-semibold text-gray-900">{event.title}</h4>
                        <p className="text-gray-600">{event.venue}</p>
                      </div>
                      <div className="flex items-center space-x-2 text-black">
                        <span className="inline-block px-4 py-2 bg-indigo-50 rounded-full font-medium">
                          {event.time}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Schedule;