import { useTranslation } from "react-i18next";
import { ReactComponent as Logo } from "../assets/icons/favicon-48.svg";
import { ReactComponent as Menu } from "../assets/icons/iconMenu.svg";

export default function Navbar() {
  const { t } = useTranslation();

  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="logo">
        <a href="/" aria-label={t("navbar.logo")}>
          <Logo className="icon logo-icon" />
        </a>
      </div>

      {/* Acciones */}
      <div className="nav-actions">
        <button className="btn reserve">{t("navbar.reserve")}</button>
        <button className="btn menu" aria-label={t("navbar.menu")}>
          <Menu className="icon menu-icon" />
        </button>
      </div>
    </nav>
  );
}
