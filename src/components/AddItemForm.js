import React, { useState } from "react";
import "./AddItemForm.css";
import Checkbox from "./Checkbox";
import { useLanguage } from "../i18n/LanguageContext.js";

export default function AddItemForm({ onAdd }) {
  const { t } = useLanguage();
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    onAdd(input.trim());
    setInput("");
  };

  return (
    <form onSubmit={handleSubmit} className="add-item-row">
      <span className="add-item-checkbox">
        <Checkbox disabled={true} checked={false} />
      </span>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder={t("addItemPlaceholder") || "Add item..."}
        className="add-item-input"
      />
    </form>
  );
}
