import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';

const API_KEY = import.meta.env.VITE_API_KEY;
const firebaseConfig = {
  apiKey: API_KEY,
  authDomain: 'my-todo-list-88a84.firebaseapp.com',
  projectId: 'my-todo-list-88a84',
  storageBucket: 'my-todo-list-88a84.appspot.com',
  messagingSenderId: '385956520981',
  appId: '1:385956520981:web:074425c73543a685dbda1c',
  measurementId: 'G-98BTJ32232',
};
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
