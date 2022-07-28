import { initializeApp } from "firebase/app";
import {getStorage} from '@firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyAiqPxocxFyLQ_O4VKBLMACqhfusA8Vxws",
  authDomain: "fir-image-845a2.firebaseapp.com",
  projectId: "fir-image-845a2",
  storageBucket: "fir-image-845a2.appspot.com",
  messagingSenderId: "364270762932",
  appId: "1:364270762932:web:09f87ad28c0f0223f790e1",
  measurementId: "G-NT2VY7L30V"
};


const app = initializeApp(firebaseConfig);
export const storage = getStorage(app)
