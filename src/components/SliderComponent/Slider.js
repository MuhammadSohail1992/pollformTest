import React, { useState } from 'react';
import Slide from './Slide';
import NavigationDots from './NavigationDots';

const Slider = ({ slides }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleDotClick = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="flex relative h-[100vh] overflow-hidden">
      <NavigationDots
        slides={slides}
        currentSlide={currentSlide}
        onDotClick={handleDotClick}
      />
      <div className="w-full relative">
        <div>
          {slides.map((slide, index) => (
            <div
              key={index}
              className="transition-transform duration-500"
              style={{ transform: `translateY(-${currentSlide * 100}%)` }}
            >
              <Slide content={slide.title} type={slide.type === 'summary'? true: false} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Slider;
