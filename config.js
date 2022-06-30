const firebase = require("firebase");
const firebaseConfig = {
  apiKey: "AIzaSyCS6YAsjRZuEXcFN7peTZ1WC8ncjh9xGXg",
  authDomain: "nodefirebasefile.firebaseapp.com",
  projectId: "nodefirebasefile",
  storageBucket: "nodefirebasefile.appspot.com",
  messagingSenderId: "755226439848",
  appId: "1:755226439848:web:25b5a89f52562c811a529d",
};
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const Users = db.collection("Users");

module.exports = Users
