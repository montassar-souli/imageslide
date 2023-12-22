import "./App.css";
import ImageSlider1 from "./ImageSlider1";

const App = () => {
  const slides = [
    { url: "http://localhost:3000/img1.jpg", title: "1" },
    { url: "http://localhost:3000/img2.jpg", title: "2" },
    { url: "http://localhost:3000/img3.jpg", title: "3" },
    { url: "http://localhost:3000/arc.jpeg", title: "4" },
  ];
  const containerStyles = {
    width: "500px",
    height: "280px",
    margin: "0 auto",
  };
  return (
    <div>
      <div style={containerStyles}>
        <ImageSlider1 slides={slides} />
      </div>
    </div>
  );
};

export default App;
