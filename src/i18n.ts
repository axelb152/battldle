import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      placeholder: "Country, territory...",
      guess: "Guess",
      share: "Share",
      showOnGoogle: "⚔️ on Google",
      welldone: "Well done!",
      unknownCountry: "Unknown country!",
      copy: "Copied results to clipboard",
      showCountry: "🗺️ Show map!",
      cancelRotation: "🌀 Cancel rotation",
      settings: {
        title: "Settings",
        distanceUnit: "Unit of distance",
        theme: "Theme",
        difficultyModifiers: "Difficulty modifiers",
        startingNextDay: "Starting the next day!",
        noImageMode: "Hide country image for more of a challenge.",
        rotationMode: "Rotate randomly country image.",
      },
      buyMeACoffee: "Buy me a ☕!",
    },
  },
  fr: {
    translation: {
      placeholder: "Pays, territoires...",
      guess: "Deviner",
      share: "Partager",
      showOnGoogle: "⚔️ sur Google",
      welldone: "Bien joué !",
      unknownCountry: "Pays inconnu !",
      copy: "Résultat copié !",
      showCountry: "🗺️ Afficher la carte !",
      cancelRotation: "🌀 Annule la rotation",
      settings: {
        title: "Paramètres",
        distanceUnit: "Unité de distance",
        theme: "Thème",
        difficultyModifiers: "Modificateurs de difficulté",
        startingNextDay: "A partir du lendemain !",
        noImageMode: "Cache l'image du pays pour plus de challenge.",
        rotationMode: "Tourne l'image du pays de manière aléatoire.",
      },
      buyMeACoffee: "Offrez moi un ☕ !",
    },
  },
};

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    resources,
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
