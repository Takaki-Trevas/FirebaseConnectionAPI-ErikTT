const firebaseConfig = {
    apiKey: "...",
    authDomain: "..",
    projectId: "...",
    storageBucket: "...",
    messagingSenderId: "...",
    appId: "...",
    measurementId: "...",
  };
  
  firebase.initializeApp(firebaseConfig);
  var db = firebase.firestore();

  //https://firebase.google.com/docs/database/rest/start?hl=pt-br