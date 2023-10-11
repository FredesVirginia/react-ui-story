import { getMessaging, getToken } from "firebase/messaging";

// Get registration token. Initially this makes a network call, once retrieved
// subsequent calls to getToken will return from cache.
const messaging = getMessaging();
getToken(messaging, { vapidKey: "BETlaoi-RhzF7UspHOJl2sUvah9xQh_hWJtulY9x8mleV_Kgmh8pQkg6HxoOUZLXFTF_qqVgh7ko6NGd0TWGUhc" }).then((currentToken) => {
  if (currentToken) {
    // Send the token to your server and update the UI if necessary
    // ...
    console.log("Curente token fue" , currentToken)
  } else {
    // Show permission request UI
    console.log('No registration token available. Request permission to generate one.');
    // ...
  }
}).catch((err) => {
  console.log('ERROR AL CONSEGUIR TOKEN. ', err);
  // ...
});