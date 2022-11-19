import i18n from "i18next";
import Backend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

export const initI18n = () => {
  i18n
    .use(initReactI18next)
    .use(Backend)
    .use(LanguageDetector)
    .init({
      // debug: process.env.NODE_ENV === "development",
      backend: {
        loadPath: "/locales/{{lng}}/{{ns}}.json",
        allowMultiLoading: false,
      },
      detection: {
        lookupQuerystring: "ln",
      },
      fallbackLng: "th",
      defaultNS: "translation",
      interpolation: {
        escapeValue: false,
      },
    });
};
