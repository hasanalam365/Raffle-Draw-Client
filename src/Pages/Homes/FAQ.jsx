import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqData = [
  {
    question: "How do I enter a competition?",
    answer:
      "Simply browse our live competitions, select the one you want to enter, choose your ticket numbers, and complete your purchase. It's that easy!",
  },
  {
    question: "Are the draws fair and transparent?",
    answer:
      "Absolutely. All draws are conducted live using a verified random number generator. Every draw is recorded and can be watched back at any time.",
  },
  {
    question: "How will I know if I've won?",
    answer:
      "Winners are notified immediately via email and phone. We also announce winners on our social media channels and website.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept all major credit and debit cards, Apple Pay, Google Pay, and PayPal for secure and convenient payments.",
  },
  {
    question: "Can I choose my own ticket numbers?",
    answer:
      "Yes! You can either pick your own lucky numbers or use our random number generator to select tickets for you.",
  },
  {
    question: "How are prizes delivered?",
    answer:
      "Prizes are delivered directly to the winner. For vehicles, we arrange delivery or collection. Cash prizes are transferred within 48 hours.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-[#02161d] py-20 px-5">
      <div className="max-w-5xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-14">
          <p className="text-[#57f3f0] uppercase tracking-[3px] text-sm font-semibold mb-3">
            FAQ
          </p>

          <h2 className="mb-4 text-4xl font-extrabold text-white md:text-5xl">
            Frequently Asked Questions
          </h2>

          <p className="text-base text-gray-300 md:text-lg">
            Got questions? We've got answers.
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqData.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className="border border-[#0d3b47] rounded-xl overflow-hidden bg-[#031c24]"
              >
                {/* Question */}
                <button
                  onClick={() => toggleFAQ(index)}
                  className="flex items-center justify-between w-full px-6 py-5 text-left"
                >
                  <span className="text-sm font-semibold text-white md:text-base">
                    {faq.question}
                  </span>

                  <ChevronDown
                    size={20}
                    className={`text-[#57f3f0] transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {/* Answer */}
                <div
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="px-6 pb-5 text-gray-300 text-sm md:text-[15px] leading-7 border-t border-[#123640]">
                      <div className="pt-4">{faq.answer}</div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQ;