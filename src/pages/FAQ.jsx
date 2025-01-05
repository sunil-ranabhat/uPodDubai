import React, { useState } from "react";

const FAQPage = () => {
  const faqs = [
    {
      question: "How do I make a booking?",
      answer:
        "Bookings can be made online easily, just click here or click 'Book Now' from the menu.",
    },
    {
      question: "How can I check studio availability?",
      answer:
        "Once you select the studio and the package, the next window will show available slots. If your required slot isn't available, you can try our second studio.",
    },
    {
      question: "What’s your cancellation/rescheduling policy?",
      answer:
        "If you cancel your session more than 24 hours before, we refund 50% of the booking amount. Cancellations within 24 hours are non-refundable. Rescheduling is free if done 48 hours in advance; within 24-48 hours, there's a 200 AED fee. Rescheduling isn't allowed within 24 hours.",
    },
    {
      question: "What happens if I go over my booking slot?",
      answer:
        "If the next hour is available, you can continue with an extra payment based on your booking package.",
    },
    {
      question: "What are your opening hours?",
      answer: "We are open from 8 AM to 11 PM, 7 days a week.",
    },
    {
      question: "Do I need an account to book a podcast?",
      answer:
        "Yes, you need to create an account to book a podcast and manage your bookings.",
    },
    {
      question: "Do you have free parking?",
      answer: "Yes, we offer free parking, but it's subject to availability.",
    },
    {
      question: "Do I get an operator included in the package?",
      answer:
        "Yes, operators are available in both our studios and will set up everything before your session.",
    },
    {
      question: "Can I change the studio setup according to my requirements?",
      answer:
        "Yes, but only with available props. Time spent during setup counts toward your booking. For major changes, book at least a 2-hour package.",
    },
    {
      question: "Which cameras are you using?",
      answer: "We use three Sony FX30 cameras per studio.",
    },
    {
      question: "Which microphones are you using?",
      answer: "We use four Shure SM7B microphones per studio.",
    },
    {
      question: "How and when will I receive my files?",
      answer:
        "If you bring your own SD cards, you'll receive your files immediately. For delivery within 24 hours, there's an extra charge of 100 AED. Delivery within 2 working days is free.",
    },
    {
      question: "Can I get my full podcast edited by you?",
      answer:
        "Yes, select either the Standard or Premium package to receive an edited podcast.",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gray-300">
      {/* Upper Section */}
      <div className="bg-black text-white py-16 px-6">
        <div className="container mx-auto max-w-3xl">
          <h1 className="text-5xl font-bold text-center">
            Frequently Asked Questions
          </h1>
          
        </div>
      </div>

      {/* Lower Section */}
      <div className="py-10 px-4">
        <div className="container mx-auto max-w-3xl space-y-6">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full text-left flex justify-between items-center px-6 py-5 focus:outline-none hover:bg-gray-200"
              >
                <span className="flex items-center space-x-2">
                  <span className="text-xl font-bold text-indigo-600">
                    {index + 1}.
                  </span>
                  <span className="text-xl font-semibold text-gray-800">
                    {faq.question}
                  </span>
                </span>
                <span className="text-3xl text-gray-700">
                  {activeIndex === index ? "−" : "+"}
                </span>
              </button>
              {activeIndex === index && (
                <div className="px-6 py-5 text-lg text-gray-700 border-t border-gray-300">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQPage;