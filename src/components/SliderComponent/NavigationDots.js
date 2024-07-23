import React from 'react';

const NavigationDots = ({ slides, currentSlide, onDotClick }) => {
  return (
    <div className="absolute h-screen flex justify-center flex-col items-center p-4 z-50">
      {slides.map((_, index) => (
        <div
          key={index}
          className={`w-4 h-4 rounded-full my-2 cursor-pointer ${
            currentSlide === index ? 'bg-[#6b54fe] border-2' : 'bg-white'
          }`}
          onClick={() => onDotClick(index)}
        />
      ))}
    </div>
  );
};

export default NavigationDots;
