// components/TestimonialCard.js
import React from 'react';

const TestimonialCard = ({ data }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {data.map((item, index) => (
        <div
          key={index}
          className="flex flex-col items-center p-6 text-center border rounded-lg shadow-md hover:bg-red-500 hover:text-white transition-all duration-300"
        >
          <div className="text-4xl mb-2">{item.icon}</div>
          <h3 className="text-xl font-bold">{item.value}</h3>
          <p className="text-sm">{item.description}</p>
        </div>
      ))}
    </div>
  );
};
    

export default TestimonialCard;
