import React from "react";
import "./Modal.css";

const Modal = ({ open, onClose }) => {
  if (!open) return null;
  return (
    <div onClick={onClose} className="overlay">
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        className="modalContainer"
      >
        <img
          src={
            "https://cdn.vox-cdn.com/thumbor/WR9hE8wvdM4hfHysXitls9_bCZI=/0x0:1192x795/1400x1400/filters:focal(596x398:597x399)/cdn.vox-cdn.com/uploads/chorus_asset/file/22312759/rickroll_4k.jpg"
          }
          alt="/"
        />
        <div className="modalRight">
          <p className="closeBtn" onClick={onClose}>
            X
          </p>

          <div className="content">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/DLzxrzFCyOs?autoplay=1&controls=0&loop=1"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
