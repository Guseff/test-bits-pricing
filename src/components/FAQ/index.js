import React from 'react';

import FaqItem from './FaqItem';

import './style.css';

const FAQ_ITEMS = [
  {
    question: 'What\'s the commitment?',
    answer: 'Automatically collecting data from all pages on your site can be very expensive and data intensive. Bitsgap makes it more affordable by taking an ‘on demand’ report approach. You can generate an unlimited amount of reports on an unlimited number of pages whenever you need them. This makes Bitsgap more affordable and ideal for fast moving and lean organizations since it allows for rapid changes.',
  },{
    question: 'Are the prices per domain?',
    answer: 'Automatically collecting data from all pages on your site can be very expensive and data intensive. Bitsgap makes it more affordable by taking an ‘on demand’ report approach. You can generate an unlimited amount of reports on an unlimited number of pages whenever you need them. This makes Bitsgap more affordable and ideal for fast moving and lean organizations since it allows for rapid changes.',
  },{
    question: 'Should I be collecting data from all my pageviews?',
    answer: 'Automatically collecting data from all pages on your site can be very expensive and data intensive. Bitsgap makes it more affordable by taking an ‘on demand’ report approach. You can generate an unlimited amount of reports on an unlimited number of pages whenever you need them. This makes Bitsgap more affordable and ideal for fast moving and lean organizations since it allows for rapid changes.',
  },{
    question: 'Can I handle multiple sites with one account?',
    answer: 'Automatically collecting data from all pages on your site can be very expensive and data intensive. Bitsgap makes it more affordable by taking an ‘on demand’ report approach. You can generate an unlimited amount of reports on an unlimited number of pages whenever you need them. This makes Bitsgap more affordable and ideal for fast moving and lean organizations since it allows for rapid changes.',
  },{
    question: 'Do you offer yearly price plans?',
    answer: 'Automatically collecting data from all pages on your site can be very expensive and data intensive. Bitsgap makes it more affordable by taking an ‘on demand’ report approach. You can generate an unlimited amount of reports on an unlimited number of pages whenever you need them. This makes Bitsgap more affordable and ideal for fast moving and lean organizations since it allows for rapid changes.',
  },{
    question: 'What payment methods do you support?',
    answer: 'Automatically collecting data from all pages on your site can be very expensive and data intensive. Bitsgap makes it more affordable by taking an ‘on demand’ report approach. You can generate an unlimited amount of reports on an unlimited number of pages whenever you need them. This makes Bitsgap more affordable and ideal for fast moving and lean organizations since it allows for rapid changes.',
  },{
    question: 'What are reports?',
    answer: 'Automatically collecting data from all pages on your site can be very expensive and data intensive. Bitsgap makes it more affordable by taking an ‘on demand’ report approach. You can generate an unlimited amount of reports on an unlimited number of pages whenever you need them. This makes Bitsgap more affordable and ideal for fast moving and lean organizations since it allows for rapid changes.',
  },
]

const FAQ = () => (
  <div className="faq">
    <div className="faq-title">
      Frequently asked questions:
    </div>
    <div className="faq-list">
      {FAQ_ITEMS.map((item, i) => (
        <FaqItem
          key={i}
          question={item.question}
          answer={item.answer}
        />
      ))}
    </div>     
  </div>
);

export default FAQ;