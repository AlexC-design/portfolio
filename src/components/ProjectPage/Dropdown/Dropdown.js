import React, { useState, useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import arrowDown from "../../../assets/svg/arrow-down.svg";
import { setOpenDropdownIndex } from "../../../store/state/openDropdownIndex";
import "./css/dropdown.css";

const Dropdown = ({ index, title }) => {
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
    return contentRef.current.clientHeight;
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
          test description <br />
          test description <br />
          test description <br />
          test description <br />
          test description <br />
          test description <br />
          test description <br />
          test description <br />
          test description <br />
          test description <br />
          test description <br />
          test description <br />
          test description <br />
          test description <br />
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
