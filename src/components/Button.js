import React from "react";
import "./Button.css";

export default function Button({
  type = "default",
  htmlType = "button",
  onClick,
  className = "",
  children,
  disabled = false,
  title = ""
}) {
  return (
    <button
      className={`btn btn-${type} ${className}`}
      onClick={onClick}
      type={htmlType}
      disabled={disabled}
      title={title}
    >
      {children}
    </button>
  );
}
