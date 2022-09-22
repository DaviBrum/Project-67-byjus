import firebase from 'firebase';

// adicione SDK do Firebase
var firebaseConfig = {
        apiKey: "AIzaSyBBm7TsqhjZ1ppTHrIgIIyMLMCzUMBetDg",
        authDomain: "projeto-58-c9a61.firebaseapp.com",
        databaseURL: "https://projeto-58-c9a61-default-rtdb.firebaseio.com",
        projectId: "projeto-58-c9a61",
        storageBucket: "projeto-58-c9a61.appspot.com",
        messagingSenderId: "670172267180",
        appId: "1:670172267180:web:1ece03d87b423ef7339509"
      };

// Initialice o Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();