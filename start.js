import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";

import {
    getAuth
    , onAuthStateChanged, signOut
} from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";





const firebaseConfig = {
    apiKey: "AIzaSyCFyH_yLW3mM7lrvv2utK4e314ItMC6-Qc",
    authDomain: "quiz-web-99ff6.firebaseapp.com",
    projectId: "quiz-web-99ff6",
    storageBucket: "quiz-web-99ff6.appspot.com",
    messagingSenderId: "477677273178",
    appId: "1:477677273178:web:b3aa70be713ea711225863",
    measurementId: "G-34Z6QC3M8L"
  };



  const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const logout = document.getElementById('btn')


onAuthStateChanged(auth, (user) => {
    if (user) {
      const uid = user.uid;
      console.log(user)
      console.log(uid)
      // ...
    } else {
      // User is signed out
      // ...
      console.log('user is not logged in')
    }
  });

  logout?.addEventListener('click', function(e){
e.preventDefault()

signOut(auth).then(() => {
  // Sign-out successful.

  window.location.href = "../index.html"
}).catch((error) => {
  // An error happened.
});
  })