import React from "react";
import "./SectionTitleBar.css";

export default function SectionTitleBar({ title, rightContent }) {
  return (
    <div className="section-title-bar">
      <h1 className="section-title">{title}</h1>
      <div className="section-right">{rightContent}</div>
    </div>
  );
}
