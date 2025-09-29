import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../assets/icons/Logo.svg";
import { ReactComponent as Menu } from "../assets/icons/Menu.svg";

export default function Navbar() {
  const { t } = useTranslation();

  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="logo">
        <Link to="/casa" aria-label={t("navbar.logo")}>
          <Logo className="logo-icon" />
        </Link>
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
