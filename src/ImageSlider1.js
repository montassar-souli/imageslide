import { useState } from "react";
import "./ImageSlider.css";

const ImageSlider1 = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };
  const goToNext = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };
  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div className="silder">
      <div
        className="slide"
        style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
      ></div>

      <div className="symbols-container">
        <div className="left-arrow" onClick={goToPrevious}>
          «
        </div>

        {slides.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            className="white-dot"
            onClick={() => goToSlide(slideIndex)}
          >
            ○
          </div>
        ))}
        <div className="right-arrow" onClick={goToNext}>
          »
        </div>
      </div>
      <div className="black-dot">•</div>
    </div>
  );
};

export default ImageSlider1;
