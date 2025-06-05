import React from "react";
import SectionTitleBar from "./SectionTitleBar";
import "./ListTitleBar.css";
import { useLanguage } from "../i18n/LanguageContext";

export default function ListTitleBar({ title, showCompleted, onToggleShow }) {
  const { t } = useLanguage();

  return (
    <SectionTitleBar
      title={title}
      rightContent={
        <label className="list-toggle">
          <input
            type="checkbox"
            checked={showCompleted}
            onChange={onToggleShow}
          />
          {t("showCompleted")}
        </label>
      }
    />
  );
}
