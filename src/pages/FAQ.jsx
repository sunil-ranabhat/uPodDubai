import React, { useState } from "react";

const FAQPage = () => {
  const faqs = [
    {
      question: "What is PodcastBooking?",
      answer:
        "PodcastBooking is a platform where you can browse and book your favorite podcasts according to your preferred schedule.",
    },
    {
      question: "How do I book a podcast?",
      answer:
        "Navigate to the 'Book Now' section, select your desired podcast, choose a scheme, and confirm your booking.",
    },
    {
      question: "What are the available schemes?",
      answer:
        "We offer free, premium, and exclusive schemes. Each provides different benefits tailored to your needs.",
    },
    {
      question: "Can I reschedule or cancel my booking?",
      answer:
        "Yes, you can reschedule or cancel your booking from the 'My Bookings' section in your profile. Note that terms may apply.",
    },
    {
      question: "How can I contact support?",
      answer:
        "You can reach out to our support team through the 'Contact Us' page or email us at support@podcastbooking.com.",
    },
    {
      question: "Do I need an account to book a podcast?",
      answer:
        "Yes, you need to create an account to book a podcast and access other features like managing your bookings.",
    },
    {
      question: "Are there any discounts available?",
      answer:
        "Occasionally, we provide promotional discounts for premium users. Keep an eye on our offers page for the latest deals.",
    },
    {
      question: "Can I host my own podcast on this platform?",
      answer:
        "Yes, we provide options for creators to host and promote their podcasts. Visit our 'Host with Us' section for more details.",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen py-10 px-4" >
      <div className="container mx-auto max-w-3xl">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Frequently Asked Questions
        </h1>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-slate-200 shadow-md rounded-lg overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full text-left flex justify-between items-center px-6 py-4 focus:outline-none hover:bg-slate-300"
              >
                <span className="text-lg font-medium text-gray-800">{faq.question}</span>
                <span className="text-2xl text-gray-700">
                  {activeIndex === index ? "−" : "+"}
                </span>
              </button>
              {activeIndex === index && (
                <div className="px-6 py-4 text-gray-700 border-t border-gray-400">
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
