import { useTranslation } from "react-i18next";
import { ReactComponent as FacebookIcon } from "../assets/icons/iconFacebook.svg";
import { ReactComponent as InstagramIcon } from "../assets/icons/iconInstagram.svg";
import { ReactComponent as WhatsappIcon } from "../assets/icons/iconWhatsapp.svg";
import { ReactComponent as MailIcon } from "../assets/icons/iconMail.svg";

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="footer">
      <p>
        © 2025 {t("footer.rights")} {t("footer.madeWith")}{" "}
        <span className="heart">♥</span> {t("footer.by")}{" "}
        <a href="https://tu-portfolio.com" target="_blank" rel="noreferrer">
          Alejandro Moreno
        </a>.
      </p>
      <div className="footer-actions">
        <button className="lang-btn">{t("footer.language")}</button>
        <div className="socials">
          <a href="https://facebook.com" target="_blank" rel="noreferrer">
            <FacebookIcon className="icon" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noreferrer">
            <InstagramIcon className="icon" />
          </a>
          <a href="https://wa.me/" target="_blank" rel="noreferrer">
            <WhatsappIcon className="icon" />
          </a>
          <a href="mailto:correo@casadelaire.es">
            <MailIcon className="icon" />
          </a>
        </div>
      </div>
    </footer>
  );
}
