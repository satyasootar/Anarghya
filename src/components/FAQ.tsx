import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    question: 'When and where is Anarghya 2025 taking place?',
    answer: 'Anarghya 2025 will be held at Synergy Institute of Engineering and Technology, Dhenkanal. The event dates and detailed schedule will be announced soon.'
  },
  {
    question: 'Who can participate in the competitions?',
    answer: 'All students from colleges across the state are welcome to participate. Some competitions may have specific eligibility criteria, which will be mentioned in the competition details.'
  },
  {
    question: 'How do I register for multiple competitions?',
    answer: 'You can register for multiple competitions through our registration form. Simply submit separate entries for each competition you wish to participate in.'
  },
  {
    question: 'Is there a registration fee?',
    answer: 'Registration fees vary by competition. Please check the specific competition details for fee information.'
  },
  {
    question: 'Will accommodation be provided?',
    answer: 'Yes, accommodation can be arranged for outstation participants. Please mention your accommodation requirements during registration.'
  },
  {
    question: 'How can I join the competition WhatsApp groups?',
    answer: 'After registration, you will receive WhatsApp group links for your selected competitions. You can also find the links on our competitions page.'
  }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
          <p className="text-xl text-gray-600">
            Find answers to common questions about Anarghya 2025
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <button
                className="w-full px-6 py-4 text-left flex justify-between items-center focus:outline-none"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="text-lg font-medium text-gray-900">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-gray-500" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-500" />
                )}
              </button>
              {openIndex === index && (
                <div className="px-6 pb-4">
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;