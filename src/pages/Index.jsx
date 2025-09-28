import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";

export default function Index() {
  const { t, i18n } = useTranslation();

  return (
    <>
      <Helmet>
        <html lang={i18n.language} />
        <title>{t("index.meta.title")}</title>
        <meta name="description" content={t("index.meta.description")} />
        <meta property="og:title" content={t("index.meta.title")} />
        <meta property="og:description" content={t("index.meta.description")} />
        <meta property="og:image" content="/src/assets/icons/favicon.svg" />
      </Helmet>

      <h1>{t("index.title")}</h1>
      <p>{t("index.description")}</p>
    </>
  );
}

