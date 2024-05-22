import { initializeApp } from 'firebase/app';
import { initializeAuth } from 'firebase/auth';
import { getReactNativePersistence } from 'firebase/auth/react-native';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';

const EXPO_PUBLIC_API_KEY = process.env.EXPO_PUBLIC_API_KEY;
const EXPO_PUBLIC_AUTH_DOMAIN = process.env.EXPO_PUBLIC_AUTH_DOMAIN;
const EXPO_PUBLIC_PROJECT_ID = process.env.EXPO_PUBLIC_PROJECT_ID;
const EXPO_PUBLIC_STORAGE_BUCKET = process.env.EXPO_PUBLIC_STORAGE_BUCKET;
const EXPO_PUBLIC_MESSAGING_SENDER_ID =
  process.env.EXPO_PUBLIC_MESSAGING_SENDER_ID;
const EXPO_PUBLIC_APP_ID = process.env.EXPO_PUBLIC_APP_ID;
const EXPO_PUBLIC_MEASUREMENT_ID = process.env.EXPO_PUBLIC_MEASUREMENT_ID;

const firebaseConfig = {
  apiKey: EXPO_PUBLIC_API_KEY,
  authDomain: EXPO_PUBLIC_AUTH_DOMAIN,
  projectId: EXPO_PUBLIC_PROJECT_ID,
  storageBucket: EXPO_PUBLIC_STORAGE_BUCKET,
  messagingSenderId: EXPO_PUBLIC_MESSAGING_SENDER_ID,
  appId: EXPO_PUBLIC_APP_ID,
  measurementId: EXPO_PUBLIC_MEASUREMENT_ID,
};

export const app = initializeApp(firebaseConfig);
export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage),
});
