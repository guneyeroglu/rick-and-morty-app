import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';

import { en } from './lang/en';
import { tr } from './lang/tr';

i18next.use(initReactI18next).init({
  fallbackLng: 'en-GB',
  lng: localStorage.getItem('language'),
  resources: {
    'en-GB': en,
    'tr-TR': tr,
  },
});
