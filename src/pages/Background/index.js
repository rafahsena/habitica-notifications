import firebase from 'firebase/app';
import 'firebase/messaging';
import secrets from 'secrets';

firebase.initializeApp({
  messagingSenderId: secrets.messagingSenderId,
  projectId: secrets.projectId,
  apiKey: secrets.apiKey,
  authDomain: secrets.authDomain,
  storageBucket: secrets.storageBucket,
  appId: secrets.appId,
});

const messaging = firebase.messaging();

let token = '';
messaging.getToken().then((fbToken) => {
  token = fbToken;
});

self.addEventListener('message', (event) => {
  if (event.data) {
    // Select who we want to respond to
    self.clients
      .matchAll({
        includeUncontrolled: true,
        type: 'window',
      })
      .then((clients) => {
        if (clients && clients.length) {
          // Send a response - the clients
          // array is ordered by last focused
          clients.forEach((client) => client.postMessage({ token }));
        }
      });
  }
});
