const firebase = require("firebase");

const firebaseConfig = {
  apiKey: "AIzaSyBOiaLARfpBsRJpFjHESea_HpyNjMrp0Ww",
  authDomain: "netflix-bdf8b.firebaseapp.com",
  projectId: "netflix-bdf8b",
  storageBucket: "netflix-bdf8b.appspot.com",
  messagingSenderId: "610746675032",
  appId: "1:610746675032:web:802127863a1ef966ca3f2d",
  measurementId: "G-P4KQ99E317",
};

firebase.initializeApp(firebaseConfig);
const storage = firebase.storage();
export default storage;
