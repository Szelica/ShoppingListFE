import React from "react";
import users from "../data/usersData";
import "./OwnerInfo.css";
import { useLanguage } from "../i18n/LanguageContext";

export default function OwnerInfo({ ownerId }) {
  const { t } = useLanguage();
  const owner = users.find((user) => user.id === ownerId);

  return (
    <div className="owner-container">
      <h4 className="owner-title">{t("ownerTitle")}</h4>
      {owner ? (
        <p>{owner.name}</p>
      ) : (
        <p className="owner-error">{t("ownerNotFound")}</p>
      )}
    </div>
  );
}
