import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      todoList: 'Todo List',
      progress: 'Progress',
      inputPlaceholder: 'Enter your todo...',
      dragTip: 'Hold to drag',
      defaultTasks: {
        apple: 'An apple a day keeps the doctor away',
        basketball: 'Shoot 1000 baskets',
        homework: 'Complete the pre-test homework',
      },
    },
  },
  zh: {
    translation: {
      todoList: 'Todo List',
      progress: '進度',
      inputPlaceholder: '請輸入待辦事項...',
      dragTip: '按住以拖曳',
      defaultTasks: {
        apple: '一天一蘋果，醫生遠離我',
        basketball: '投籃 1000 次',
        homework: '完成 pre test 作業',
      },
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'zh',
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
