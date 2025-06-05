import React from "react";
import { useUserContext, UserSelector } from "../components/User";
import { Skeleton, Alert } from "@mui/material";
import { useLanguage } from "../i18n/LanguageContext";
import "./profilePage.css";

export default function ProfilePage() {
  const { user, status, error } = useUserContext();
  const { t } = useLanguage();

  if (status === "pending") {
    return (
      <div className="profile-page" style={{ padding: "2rem" }}>
        <Skeleton variant="text" width={200} height={40} />
        <Skeleton variant="text" width={300} />
      </div>
    );
  }

  if (status === "error") {
    return (
      <Alert severity="error" style={{ margin: "2rem" }}>
        {error || t("loadUserError")}
      </Alert>
    );
  }

  return (
    <div className="profile-page">
      <h1>{t("profileTitle")}</h1>

      <div className="profile-section">
        <p><strong>{t("nameLabel")}</strong> {user.name}</p>
        <p><strong>{t("idLabel")}</strong> {user.id}</p>
      </div>

      <div className="profile-section">
        <h3>{t("switchUser")}</h3>
        <UserSelector />
      </div>

      <p className="profile-hint">{t("profileHint")}</p>
    </div>
  );
}
