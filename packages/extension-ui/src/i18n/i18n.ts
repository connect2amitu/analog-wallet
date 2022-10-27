import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';

import Backend from './Backend';

const lang = localStorage.getItem("lang") ?? "en"

i18next
  .use(initReactI18next)
  .use(Backend)
  .init({
    backend: {},
    debug: false,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    },
    keySeparator: false,
    lng: lang,
    load: 'languageOnly',
    nsSeparator: false,
    returnEmptyString: false,
    returnNull: false
  })
  .catch((error: Error): void =>
    console.log('i18n: failure', error)
  );

export default i18next;
