// components/TestimonialCard.js
import React from 'react';

const TestimonialCard = ({ data }) => {
  return (
    <div className="flex items-center justify-center flex-wrap gap-4">
      {data.map((item, index) => (
        <div
          key={index}
          className="flex flex-col items-center p-6 text-center border rounded-lg shadow-md hover:bg-red-500 min-w-[300px] hover:text-white transition-all duration-300"
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
