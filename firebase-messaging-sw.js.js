import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore/compat';
import { getMessaging } from 'firebase/messaging/compat';

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
   const messaging = firebase.messaging();

// Configura la recepción de las notificaciones push.
messaging.onBackgroundMessage((payload) => {
  console.log('Notificación push recibida:', payload);
  // Personaliza el manejo de la notificación aquí, como mostrar una notificación al usuario.
});