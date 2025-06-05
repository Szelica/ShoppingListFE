import { useNavigate } from "react-router-dom";
import { useLanguage } from "../i18n/LanguageContext";
import Button from "./Button";
import "./Header.css";
import ThemeToggle from "./ThemeToggle";
import LanguageSelector from "./LanguageSelector";

export default function Header() {
  const navigate = useNavigate();
  const { language, setLanguage, t } = useLanguage();

  return (
    <header className="header-container">
      <div className="header-left">
        <Button type="primary" onClick={() => navigate("/")}>
          {t("appLogo")}
        </Button>
      </div>
      
      <div className="header-right">
        <Button type="primary" onClick={() => navigate("/profile")}>
          {t("yourProfile")}
        </Button>
      </div>

      <div className="header-center">
        <LanguageSelector />
        <ThemeToggle />
      </div>

    </header>
  );
}
