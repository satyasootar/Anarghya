import React from 'react';

const volunteers = {
  FirstYear: [
    { name: 'Jasmin Rout', phone: '+91 96926 73617' },
    { name: 'Jasmita Sahoo', phone: '+91 63705 58868' },
    { name: 'Kishan Kumar Sahoo', phone: '+91 97760 58560' },
    { name: 'Debiprasad Sahu', phone: '+91 77498 15007' },
    { name: 'Priyanka Priyadarshini Sahu', phone: '+91 94375 49653' },
    { name: 'Sambit Kumar Sahoo', phone: '+91 63709 57857' },
    { name: 'Ankita Parida', phone: '+91 77356 13366' },
    { name: 'Asutosh Sahu', phone: '+91 79780 88266' },
    { name: 'Arpita Jena', phone: '+91 98776 16724' },
    { name: 'Satyajeet Rout', phone: '+91 96687 98173' },
    { name: 'Snigdhha Mishra', phone: '+91 81446 50829' }
  ],
  SecondYear: [
    { name: 'Trisha Mohanty', phone: '+91 77500 45036' },
    { name: 'Suhani Satapathy', phone: '+91 81447 32588' },
    { name: 'Pankti Prajwolika', phone: '+91 63718 96405' },
    { name: 'Madhusmita Samal', phone: '+91 78489 98028' },
    { name: 'Shreya Nayak', phone: '+91 70770 04759' },
    { name: 'Nafisha Khatun', phone: '+91 79786 77080' },
    { name: 'Jagadish Tripathy', phone: '+91 76810 00901' },
    { name: 'Soumya Ranjan Sahoo', phone: '+91 93370 54909' },
    { name: 'Satya Prangya Sootar', phone: '+91 63718 53969' },
    { name: 'Rahul Kumar Parida', phone: '+91 73280 58273' },
    { name: 'Hitesh Garnayak', phone: '+91 78489 40491' },
    { name: 'P.Swyom Sanjog', phone: '+91 80180 72417' },
    { name: 'ShriKrishna Moharana', phone: '+91 77888 29500' },
    { name: 'Smruti Saurav Nayak', phone: '+91 99374 32965' }
  ],
  ThirdYear: [
    { name: 'Ashit Kumar Jena', phone: '+91 70087 19268' },
    { name: 'Gyana Rajan Behera', phone: '+91 70085 84414' },
    { name: 'Sandeep Sahoo', phone: '+91 80931 22870' },
    { name: 'Swarupa Behera', phone: '+91 89846 93851' },
    { name: 'Swetashree Priyadarshini', phone: '+91 82608 62840' },
    { name: 'Ananya Sahu', phone: '+91 86372 93095' },
    { name: 'Suchismita Roul', phone: '+91 80184 71075' },
    { name: 'Kuldeep Sahoo', phone: '+91 91788 29225' }
  ],
  FourthYear: [
    { name: 'Somesh Som Pattnaik', phone: '+91 79787 63263' },
    { name: 'Smruti Smaranika Mishra', phone: '+91 78539 80850' },
    { name: 'Amar Jyoti Rana', phone: '+91 90907 15943' },
    { name: 'Akankshya Acharya', phone: '+91 76810 26225' },
    { name: 'Barsharani Parida', phone: '+91 63725 78288' },
    { name: 'Kanha Sahoo', phone: '+91 70084 38961' },
    { name: 'Himanshu Kumar Sahoo', phone: '+91 89845 16419' },
    { name: 'Kunal Kumar Bhola', phone: '+91 63716 40025' },
    { name: 'Ira Pradhan', phone: '+91 90786 65525' }
  ]
};

const Contact = () => {
  const [activeYear, setActiveYear] = React.useState('FourthYear');
  const [searchQuery, setSearchQuery] = React.useState('');

  const filteredVolunteers = volunteers[activeYear].filter(volunteer =>
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
          {Object.keys(volunteers).map((year) => (
            <button
              key={year}
              onClick={() => setActiveYear(year)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-colors
                ${activeYear === year 
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
          {filteredVolunteers.map((volunteer:string, index:number) => (
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