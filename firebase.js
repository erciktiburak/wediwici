const firebaseConfig = {
    apiKey: "AIzaSyCzL_U7BGDzXeLlNNesKbNLeOFwbu_8pj4",
    authDomain: "wediwici.firebaseapp.com",
    databaseURL: "https://wediwici-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "wediwici",
    storageBucket: "wediwici.appspot.com",
    messagingSenderId: "959104761606",
    appId: "1:959104761606:web:3eead6de7dfa056d91e887",
    measurementId: "G-5F5L8B0ZWZ"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);