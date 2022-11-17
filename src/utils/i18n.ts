/* eslint-disable @typescript-eslint/no-floating-promises */
import i18n, { use } from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

import en from '@/locales/en.json';
import ru from '@/locales/ru.json';

const resources = {
  en: {
    translation: en,
  },
  ru: {
    translation: ru,
  },
};

use(initReactI18next).use(LanguageDetector)
  .init({
    debug: true,
    detection: {
      order: ['localStorage'],
      lookupLocalStorage: 'i18nextLng',
      caches: ['localStorage'],
    },
    interpolation: {
      escapeValue: false,
    },
    resources,
    fallbackLng: 'en',
  });

export default i18n;
