import React, { useState, useRef, useEffect } from "react";
import { useLanguage } from "../i18n/LanguageContext";
import "./LanguageSelector.css";
import Button from "./Button";

export default function LanguageSelector() {
  const { language, setLanguage } = useLanguage();
  const [open, setOpen] = useState(false);
  const selectorRef = useRef(null);

  const languages = [
    { code: "en", label: "EN" },
    { code: "sk", label: "SK" },
    { code: "cs", label: "CS" },
    { code: "hu", label: "HU" },
  ];

  
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (selectorRef.current && !selectorRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSelect = (code) => {
    setLanguage(code);
    setOpen(false);
  };

  return (
    <div className="language-dropdown" ref={selectorRef}>
      <Button
        type="primary"
        onClick={() => setOpen((prev) => !prev)}
        aria-haspopup="listbox"
        aria-expanded={open}
      >
        {language.toUpperCase()}
      </Button>

      {open && (
        <ul className="language-menu" role="listbox">
          {languages.map((lang) => (
            <li
              key={lang.code}
              className={`language-option ${lang.code === language ? "active" : ""}`}
              onClick={() => handleSelect(lang.code)}
              role="option"
            >
              {lang.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
