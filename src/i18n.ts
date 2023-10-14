import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      placeholder: "Battle, territory...",
      guess: "Guess",
      share: "Share",
      showOnGoogle: "⚔️ on Google",
      welldone: "Well done!",
      unknownBattle: "Unknown battle!",
      copy: "Copied results to clipboard",
      showBattle: "🗺️ Show battle",
      cancelRotation: "🌀 Cancel rotation",
      settings: {
        title: "Settings",
        distanceUnit: "Unit of distance",
        theme: "Theme",
        difficultyModifiers: "Difficulty modifiers",
        startingNextDay: "Starting the next day!",
        noImageMode: "Hide battle image for more of a challenge.",
        rotationMode: "Rotate randomly battle image.",
      },
      buyMeACoffee: "Enjoying this game? Checkout the original",
    },
  },
  fr: {
    translation: {
      placeholder: "Pays, territoires...",
      guess: "Deviner",
      share: "Partager",
      showOnGoogle: "⚔️ sur Google",
      welldone: "Bien joué ⚔️",
      unknownBattle: "Bataille inconnu !",
      copy: "Résultat copié !",
      showBattle: "🗺️ Montrer la bataille",
      cancelRotation: "🌀 Annule la rotation",
      settings: {
        title: "Paramètres",
        distanceUnit: "Unité de distance",
        theme: "Thème",
        difficultyModifiers: "Modificateurs de difficulté",
        startingNextDay: "À partir du jour suivant !",
        noImageMode: "Masquer l'image de la bataille pour un plus grand défi.",
        rotationMode: "Faire pivoter l'image de la bataille aléatoirement.",
      },
      buyMeACoffee: "Vous appréciez ce jeu ? Découvrez l'original",
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
