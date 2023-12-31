// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getMessaging , getToken} from "firebase/messaging";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration


// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyA_CE84Bo8bies8EjQwhzCMYaPBwqIFHjY",
  authDomain: "firefise-shooping.firebaseapp.com",
  projectId: "firefise-shooping",
  storageBucket: "firefise-shooping.appspot.com",
  messagingSenderId: "208414627162",
  appId: "1:208414627162:web:4601b305106d94df1d8f63",
  measurementId: "G-5S463MWX1P"
};

// Initialize Firebase
 const app = initializeApp(firebaseConfig);

 if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('../../firebase-messaging-sw.js')
    .then((registration) => {
      const messaging = getMessaging();
      getToken(messaging, { vapidKey: "BETlaoi-RhzF7UspHOJl2sUvah9xQh_hWJtulY9x8mleV_Kgmh8pQkg6HxoOUZLXFTF_qqVgh7ko6NGd0TWGUhc" })
        .then((currentToken) => {
          if (currentToken) {
            console.log("Current token is:", currentToken);
          } else {
            console.log('No registration token available. Request permission to generate one.');
          }
        })
        .catch((err) => {
          console.log('Error al conseguir el token:', err);
        });
    })
    .catch((error) => {
      console.error('Error al registrar el service worker:', error);
    });
}
 


