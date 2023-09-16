import React, { useEffect, useRef, useState } from "react";

const Modal = ({ content, toggleModal }) => {
  const [loaded, setLoaded] = useState(false);
  const [view, setView] = useState("bottom");
  const [mousePressed, setMousePressed] = useState(false);
  const [height, setHeight] = useState("15vh");
  const ref = useRef(null);

  const handleView = (val) => {
    setView(val);
  };

  const handleModal = (e) => {
    if (e.target === e.currentTarget) {
      setLoaded(false);
      setTimeout(toggleModal, 500);
    }
  };

  const handleScroll = (e) => {
    if (mousePressed) {
      const totalHeight = ref.current.clientHeight;
      const mouseMoved = e.screenY;

      const percent = (mouseMoved / totalHeight) * 100;

      setHeight(Math.floor(percent) + "vh");
    }
  };

  useEffect(() => setLoaded(true), []);

  return (
    <div
      onMouseMove={handleScroll}
      className="modal"
      ref={ref}
      onClick={handleModal}
    >
      <div
        className="modal-content"
        style={{
          height: view == "top" ? "80vh" : view == "middle" ? "50vh" : "20vh",
          // height:height,
          transform: loaded ? "none" : "translateY(80vh)",
        }}
      >
        <div
          className="notch"
          style={{ cursor: mousePressed ? "s-resize" : "default" }}
          onMouseDown={() => setMousePressed(true)}
        >
          <div />
        </div>
        <div className="modal-btns">
          <button onClick={() => handleView("top")}>Top</button>
          <button onClick={() => handleView("middle")}>Middle</button>
          <button onClick={() => handleView("bottom")}>Bottom</button>
        </div>
        {content}
      </div>
    </div>
  );
};

export default Modal;
