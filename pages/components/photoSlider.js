import React, { useState, useEffect, useRef } from "react";
import { useSwipeable } from "react-swipeable";
import { cn } from "@/lib/utils";
import { FaRegArrowAltCircleLeft, FaRegArrowAltCircleRight } from "react-icons/fa";

const PhotoSlider = ({ images, interval = 1500 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const sliderRef = useRef(null);
  const intervalRef = useRef(null);

  useEffect(() => {
    startSlider();

    return () => clearInterval(intervalRef.current);
  }, [images.length, interval]);

  useEffect(() => {
    if (sliderRef.current) {
      sliderRef.current.style.transition = "transform 0.5s ease-in-out";
      sliderRef.current.style.transform = `translateX(-${currentIndex * 100}%)`;
    }
  }, [currentIndex]);

  const startSlider = () => {
    intervalRef.current = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, interval);
  };

  const stopSlider = () => {
    clearInterval(intervalRef.current);
  };

  const handlers = useSwipeable({
    onSwipedLeft: () =>
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      ),
    onSwipedRight: () =>
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? images.length - 1 : prevIndex - 1
      ),
  });

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToPrevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div
      {...handlers}
      className="relative min-w-full overflow-hidden h-full"
      onMouseEnter={stopSlider}
      onMouseLeave={startSlider}
    >
      <div ref={sliderRef} className="flex" style={{ width: "100%" }}>
        {images.map((image, index) => (
          <div key={index} className="w-full flex-shrink-0" style={{ width: "100%" }}>
            <img
              src={image}
              alt={`Slide ${index}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
      <button
        onClick={goToPrevSlide}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full"
      >
        <FaRegArrowAltCircleLeft className="h-6 w-6" />
      </button>
      <button
        onClick={goToNextSlide}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full"
      >
        <FaRegArrowAltCircleRight className="h-6 w-6" />
      </button>
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 transition flex space-x-2">
        {images.map((_, index) => (
          <div
            key={index}
            className={cn(
              "w-3 h-3 rounded-full",
              currentIndex === index ? "bg-violet-90" : "bg-gray-300"
            )}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default PhotoSlider;
