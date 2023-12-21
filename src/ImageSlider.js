import { useState } from "react";

const ImageSlider = ({ slides }) => {
  const [currentIndex, setCurrentUser] = useState(0);
  const silderStyles = {
    height: "100%",
    position: "relative",
  };
  const slideStyles = {
    width: "100%",
    height: "100%",
    borderRadius: "10px",
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundImage: `url(${slides[currentIndex].url})`,
  };
  return (
    <div style={silderStyles}>
      <div style={slideStyles}></div>
    </div>
  );
};

export default ImageSlider;
