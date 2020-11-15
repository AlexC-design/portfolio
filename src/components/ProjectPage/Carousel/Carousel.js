import React, { useEffect, useState, useRef } from "react";
import arrowRight from "../../../assets/svg/arrow-right.svg";
import play from "../../../assets/svg/play.svg";
import pause from "../../../assets/svg/pause.svg";
import fullScreenButton from "../../../assets/svg/full-screen.svg";
import halfScreenButton from "../../../assets/svg/half-screen.svg";
import SimpleBar from "simplebar-react";
import "simplebar/src/simplebar.css";
import "./css/carousel.css";
import { withRouter } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  setFullScreenOn,
  setFullScreenOff
} from "../../../store/state/carousel";

const Carousel = ({ location, imageSrcs }) => {
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
    if (activeImageIndex === imageSrcs.length - 1) {
      setActiveImageIndex(0);
    } else {
      setActiveImageIndex(activeImageIndex + 1);
    }
  };
  const prevImage = () => {
    if (activeImageIndex === 0) {
      setActiveImageIndex(imageSrcs.length - 1);
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
    if (imageSrcs.length === 1) {
      setSingleImage(true);
      setPaused(true);
    } else {
      setSingleImage(false);
      setPaused(false);
    }
  }, [imageSrcs]);

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
  }, [imageSrcs, activeImageIndex, paused, location, singleImage]);

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
          {imageSrcs.map((src, index) => (
            <img
              className={`carousel-image ${
                activeImageIndex === index && "active"
              }`}
              src={src}
              key={`${src}`}
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
        {imageSrcs.map((src, index) => {
          return (
            <div
              className={`dot ${activeImageIndex === index && "active"}`}
              onClick={() => setActiveImage(index)}
              key={`${src}`}
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
