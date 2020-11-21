import React, { useState, useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import arrowDown from "../../../assets/svg/arrow-down.svg";
import { setOpenDropdownIndex } from "../../../store/state/openDropdownIndex";
import SimpleBar from "simplebar-react";
import "simplebar/src/simplebar.css";
import "./css/dropdown.css";
import { withRouter } from "react-router-dom";

const Dropdown = ({ index, title, project }) => {
  const [open, setOpen] = useState(false);
  const [opening, setOpening] = useState(false);
  const [closing, setClosing] = useState(false);
  const contentRef = useRef(null);
  const linkRef = useRef(null);

  const dispatch = useDispatch();
  const { openDropdownIndex } = useSelector(state => ({
    openDropdownIndex: state.openDropdownIndex
  }));

  const handleClick = () => {
    if (!open) {
      dispatch(setOpenDropdownIndex(index));
    }

    toggleDropdown();
  };

  const toggleDropdown = () => {
    let timeoutId = null;
    let timeoutId2 = null;

    if (!open) {
      setOpen(true);
      setOpening(true);
      setClosing(false);

      timeoutId = setTimeout(() => {
        setOpening(false);
      }, 600);

      clearTimeout(timeoutId2);
    } else {
      setOpen(false);
      setOpening(false);
      setClosing(true);
      timeoutId2 = setTimeout(() => {
        setClosing(false);
      }, 100);

      clearTimeout(timeoutId);
    }
  };

  const getHeight = () => {
    return contentRef.current && contentRef.current.clientHeight + 20;
  };

  useEffect(() => {
    if (
      (openDropdownIndex !== index && open) ||
      (openDropdownIndex === index && !open)
    ) {
      toggleDropdown();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [openDropdownIndex]);

  useEffect(() => {
    dispatch(setOpenDropdownIndex(0));
  }, [project, dispatch]);

  useEffect(() => {
    if (index === 0 && project.link) {
      linkRef.current.classList.remove("link-animation");
      setTimeout(() => {
        linkRef.current.classList.add("link-animation");
      });
    }
  }, [project, index]);

  return (
    <div className={`dropdown ${open ? "open" : ""}`}>
      <div className="dropdown-header" onClick={handleClick}>
        <p className="text-bold">{index === 0 ? project.title : title}</p>
        <img className="dropdown-arrow" src={arrowDown} alt="" />
      </div>
      <div
        className="dropdown-body"
        style={{
          height: `${
            opening || closing ? `${getHeight()}px` : open ? "fit-content" : "0"
          }`
        }}
      >
        <div className="dropdown-body-content">
          {/* ----------- FIRST DROPDOWN ----------- */}
          {index === 0 && (
            <div className="text-container">
              <SimpleBar
                className="simplebar-component"
                autoHide={false}
                style={{ width: "100%", height: `${getHeight()}px` }}
              >
                <div ref={contentRef}>
                  {project.link && (
                    <div className="mb">
                      <div>Link to website:</div>
                      <div
                        className="link-container link-animation"
                        ref={linkRef}
                      >
                        <a
                          className="primary-link"
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {project.link}
                        </a>
                      </div>
                    </div>
                  )}
                  {project.code && (
                    <div className="mb">
                      <div>Code:</div>
                      <a
                        className="secondary-link"
                        href={project.code}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {project.code}
                      </a>
                    </div>
                  )}
                  <div>Technologies used:</div>
                  <div className="faded">{project.tech}</div>
                </div>
              </SimpleBar>
            </div>
          )}
          {/* ----------- SECOND DROPDOWN ----------- */}
          {index === 1 && (
            <div className="text-container">
              <SimpleBar
                className="simplebar-component"
                autoHide={false}
                style={{ width: "100%", height: `${getHeight()}px` }}
              >
                <div ref={contentRef}>{project.description}</div>
              </SimpleBar>
            </div>
          )}
          {/* ----------- THIRD DROPDOWN ----------- */}
          {index === 2 && (
            <div className="text-container">
              <SimpleBar
                className="simplebar-component"
                autoHide={false}
                style={{ width: "100%", height: `${getHeight()}px` }}
              >
                <div ref={contentRef}>{project.process}</div>
              </SimpleBar>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default withRouter(Dropdown);
