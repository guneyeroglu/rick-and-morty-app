import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';

import { tr } from '../../components/i18n/tr/tr';
import { en } from '../../components/i18n/en/en';

i18next.use(initReactI18next).init({
  fallbackLng: 'en-GB',
  lng: localStorage.getItem('language'),
  resources: {
    'en-GB': {
      translation: en,
    },
    'tr-TR': {
      translation: tr,
    },
  },
});
