import React, { useState, useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import arrowDown from "../../../assets/svg/arrow-down.svg";
import { setOpenDropdownIndex } from "../../../store/state/openDropdownIndex";
import SimpleBar from "simplebar-react";
import "simplebar/src/simplebar.css";
import "./css/dropdown.css";

const Dropdown = ({ index, title, project }) => {
  const [open, setOpen] = useState(false);
  const [opening, setOpening] = useState(false);
  const [closing, setClosing] = useState(false);
  const contentRef = useRef();

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
    return contentRef.current && contentRef.current.clientHeight;
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

  return (
    <div className={`dropdown ${open ? "open" : ""}`}>
      <div className="dropdown-header" onClick={handleClick}>
        <p className="text-bold">{title}</p>
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
        <div className="dropdown-body-content" ref={contentRef}>
          {/* ----------- FIRST DROPDOWN ----------- */}
          {index === 0 && (
            <div className="text-container">
              <SimpleBar
                className="simplebar-component"
                autoHide={false}
                style={{ width: "100%", height: `${getHeight() - 36}px` }}
              >
                <div>Live version:</div>
                <a
                  className="primary-link"
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {project.link}
                </a>
                <div className="mt">Code:</div>
                <a
                  className="secondary-link"
                  href={project.code}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {project.code}
                </a>
                <div className="mt">Technologies used:</div>
                <div>{project.tech}</div>
              </SimpleBar>
            </div>
          )}
          {/* ----------- SECOND DROPDOWN ----------- */}
          {index === 1 && (
            <div className="text-container">
              <SimpleBar
                className="simplebar-component"
                autoHide={false}
                style={{ width: "100%", height: `${getHeight() - 36}px` }}
              >
                <div>{project.description}</div>
              </SimpleBar>
            </div>
          )}
          {/* ----------- THIRD DROPDOWN ----------- */}
          {index === 2 && (
            <div className="text-container">
              <SimpleBar
                className="simplebar-component"
                autoHide={false}
                style={{ width: "100%", height: `${getHeight() - 36}px` }}
              >
                {project.process}
              </SimpleBar>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
