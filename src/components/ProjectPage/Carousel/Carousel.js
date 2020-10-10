import React, { useEffect, useState } from "react";
import arrowRight from "../../../assets/svg/arrow-right.svg";
import play from "../../../assets/svg/play.svg";
import pause from "../../../assets/svg/pause.svg";
import importAll from "../../../services/importAll";
import "./css/carousel.css";

const Carousel = () => {
  const [images, setImages] = useState({});
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const setActiveImage = index => {
    setActiveImageIndex(index);
  };

  const nextImage = () => {
    if (activeImageIndex === Object.keys(images).length - 1) {
      setActiveImageIndex(0);
    } else {
      setActiveImageIndex(activeImageIndex + 1);
    }
  };
  const prevImage = () => {
    if (activeImageIndex === 0) {
      setActiveImageIndex(Object.keys(images).length - 1);
    } else {
      setActiveImageIndex(activeImageIndex - 1);
    }
  };

  const togglePaused = () => {
    setPaused(!paused);
    paused && nextImage();
  };

  useEffect(() => {
    const importedImages = importAll(
      require.context(
        "../../../assets/images/movie-cluster",
        false,
        /\.(png|jpe?g)$/
      )
    );

    setImages(importedImages);
  }, []);

  // ================== CYCLE IMAGES ===============
  useEffect(() => {
    let timeoutId = null;

    if (!paused) {
      timeoutId = setTimeout(() => {
        nextImage();
      }, 3000);
    }

    return () => {
      clearTimeout(timeoutId);
    };
  }, [activeImageIndex, paused]);

  return (
    <div className="carousel">
      <div className="image-container">
        {Object.keys(images).map((image, index) => (
          <img
            className={`carousel-image ${
              activeImageIndex === index && "active"
            }`}
            src={images[image]}
            key={`${images[image]}`}
            alt=""
          />
        ))}
      </div>

      <div className="controls">
        <img
          className="arrow left"
          src={arrowRight}
          alt=""
          onClick={prevImage}
        />
        {Object.keys(images).map((image, index) => {
          return (
            <div
              className={`dot ${activeImageIndex === index && "active"}`}
              onClick={() => setActiveImage(index)}
              key={`${images[image]}`}
            />
          );
        })}
        <img
          className="arrow right"
          src={arrowRight}
          alt=""
          onClick={nextImage}
        />

        <div className="pause-button" onClick={togglePaused}>
          {paused && <img src={play} alt="" />}
          {!paused && <img src={pause} alt="" />}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
