// components/FaqSection.jsx
import React, { useState } from 'react';
import '../styles/faqsection.css';
import { FaPlus, FaMinus } from 'react-icons/fa';

const faqs = [
  {
    question: "What services do you offer?",
    answer: "We provide a range of beauty treatments including facials, waxing, makeup, hair styling, manicures, and more."
  },
  {
    question: "How can I book an appointment?",
    answer: "You can easily book through our website's booking section or call us directly for preferred timings."
  },
  {
    question: "Do you accept walk-ins?",
    answer: "While we recommend appointments, we do accept walk-ins based on availability."
  },
  {
    question: "What products do you use?",
    answer: "We use premium, skin-friendly, and cruelty-free products from trusted brands."
  }
];

const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="faq-section">
      <div className="container">
        <h2 className="faq-title">Frequently Asked Questions</h2>
        <p className="faq-subtitle">Find answers to common queries about our salon and services</p>
        <div className="faq-list">
          {faqs.map((item, index) => (
            <div
              key={index}
              className={`faq-item ${openIndex === index ? 'active' : ''}`}
              onClick={() => toggle(index)}
            >
              <div className="faq-header">
                <div className="faq-question">{item.question}</div>
                <div className="faq-icon">
                  {openIndex === index ? <FaMinus /> : <FaPlus />}
                </div>
              </div>
              <div className="faq-answer">{item.answer}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
