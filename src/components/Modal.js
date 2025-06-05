import React from "react";
import ReactDOM from "react-dom";
import "./Modal.css";

export default function Modal({ title, children, onClose }) {
  return ReactDOM.createPortal(
    <div className="modal-overlay">
      <div className="modal">
        <h2 className="modal-title">{title}</h2>
        <div className="modal-content">{children}</div>
      </div>
    </div>,
    document.body
  );
}
