import React from "react";
import "./Footer.css";

export default function Footer({ leftContent, rightContent }) {
  return (
    <div className="footer-container">
      <div className="footer-left-wrapper">
        <div className="footer-side">{leftContent}</div>
      </div>
      <div className="footer-right-wrapper">
        <div className="footer-side">{rightContent}</div>
      </div>
    </div>
  );
}
