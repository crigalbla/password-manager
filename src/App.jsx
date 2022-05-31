import React from 'react';
import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

import Home from './views/Home';
import Languages from './locale';

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    resources: Languages,
    fallbackLng: 'es',
    interpolation: {
      escapeValue: false,
    },
  });

const App = () => <Home />;

export default App;
