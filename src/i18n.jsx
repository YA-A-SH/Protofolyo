import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import ar from "../public/Locales/ar/transition.json";
import en from "../public/Locales/en/transition.json";
i18n.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    ar: { translation: ar },
  },
  lng: "en",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
