import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

import commonEN from "./src/assets/translations/en/common.json";
import commonJP from "./src/assets/translations/jp/common.json";
import commonVI from "./src/assets/translations/vi/common.json";

i18n
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    debug: false,
    fallbackLng: "en",
    defaultNS: ["common"],
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    resources: {
      en: {
        common: commonEN,
      },
      jp: {
        common: commonJP,
      },
      vi: {
        common: commonVI,
      },
    },
  });

export default i18n;
