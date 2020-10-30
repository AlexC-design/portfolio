import React, { useEffect, useState, useRef } from "react";
import arrowRight from "../../../assets/svg/arrow-right.svg";
import play from "../../../assets/svg/play.svg";
import pause from "../../../assets/svg/pause.svg";
import fullScreenButton from "../../../assets/svg/full-screen.svg";
import halfScreenButton from "../../../assets/svg/half-screen.svg";
import importAll from "../../../services/importAll";
import SimpleBar from "simplebar-react";
import "simplebar/src/simplebar.css";
import "./css/carousel.css";
import { withRouter } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  setFullScreenOn,
  setFullScreenOff
} from "../../../store/state/carousel";

const Carousel = ({ location }) => {
  const [images, setImages] = useState({});
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [singleImage, setSingleImage] = useState(false);
  const imgContainer = useRef(null);
  const ctrlsRef = useRef(null);

  const dispatch = useDispatch();
  const { fullScreen } = useSelector(state => ({
    fullScreen: state.carousel.fullScreen
  }));

  // =============== METHODS ===============
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

  const toggleFullScreen = () => {
    if (fullScreen) {
      dispatch(setFullScreenOff());
    } else {
      dispatch(setFullScreenOn());
    }
  };

  // =============== LOAD NEW IMAGES ===============
  useEffect(() => {
    const importedImages = importImages(location.hash.replace(/#/g, ""));
    setImages(importedImages);

    imgContainer.current.classList.remove("fade-in-delayed");
    ctrlsRef.current.classList.remove("fade-in-delayed");
    setTimeout(() => {
      imgContainer.current.classList.add("fade-in-delayed");
      ctrlsRef.current.classList.add("fade-in-delayed");
    });

    setActiveImageIndex(0);
  }, [location]);

  // =============== UPDATE CAROUSEL TYPE ===============
  useEffect(() => {
    if (Object.keys(images).length === 1) {
      setSingleImage(true);
      setPaused(true);
    } else {
      setSingleImage(false);
      setPaused(false);
    }
  }, [images]);

  // =============== CYCLE IMAGES ===============
  useEffect(() => {
    if (!singleImage) {
      let timeoutId = null;

      if (!paused) {
        timeoutId = setTimeout(() => {
          nextImage();
        }, 5000);
      }

      return () => {
        clearTimeout(timeoutId);
      };
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [images, activeImageIndex, paused, location, singleImage]);

  const importImages = project => {
    switch (project) {
      case "movie-cluster":
        return importAll(
          require.context(
            "../../../assets/images/movie-cluster",
            false,
            /\.(png|jpe?g)$/
          )
        );

      case "fin":
        return importAll(
          require.context("../../../assets/images/fin", false, /\.(png|jpe?g)$/)
        );

      case "beacon":
        return importAll(
          require.context(
            "../../../assets/images/beacon",
            false,
            /\.(png|jpe?g)$/
          )
        );

      case "bug-tracker":
        return importAll(
          require.context(
            "../../../assets/images/bug-tracker",
            false,
            /\.(png|jpe?g)$/
          )
        );

      case "old-folio":
        return importAll(
          require.context(
            "../../../assets/images/old-folio",
            false,
            /\.(png|jpe?g)$/
          )
        );

      case "new-folio":
        return importAll(
          require.context(
            "../../../assets/images/new-folio",
            false,
            /\.(png|jpe?g)$/
          )
        );

      case "ui-components":
        return importAll(
          require.context(
            "../../../assets/images/ui-components",
            false,
            /\.(png|jpe?g)$/
          )
        );

      default:
        return [];
    }
  };

  return (
    <div
      className={`carousel ${singleImage ? "single-image" : ""} ${
        fullScreen ? "full-screen" : ""
      }`}
    >
      <div className="image-container" ref={imgContainer}>
        <div className="full-screen-button" onClick={toggleFullScreen}>
          {!fullScreen && <img src={fullScreenButton} alt="" />}
          {fullScreen && <img src={halfScreenButton} alt="" />}
        </div>
        <SimpleBar
          className="simplebar-component"
          autoHide={false}
          style={{ width: "100%", height: "100%" }}
        >
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
        </SimpleBar>
      </div>

      <div ref={ctrlsRef} className="controls fade-in-delayed">
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

export default withRouter(Carousel);
