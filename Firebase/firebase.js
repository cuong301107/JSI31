// Import the functions you need from the SDKs you need
import {
    get,
    getDatabase,
    set,
    ref,
    onValue
  } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-database.js";
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-app.js";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDmSmml6OroJRtsRmdSOUpmin-cqsDZr7c",
  authDomain: "project-3052532348286261352.firebaseapp.com",
  databaseURL: "https://project-3052532348286261352-default-rtdb.firebaseio.com",
  projectId: "project-3052532348286261352",
  storageBucket: "project-3052532348286261352.appspot.com",
  messagingSenderId: "328913006933",
  appId: "1:328913006933:web:42523a68e2988b95ecffdc",
  measurementId: "G-1MF3GQ1D7R"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app)
const analytics = getAnalytics(app);

let nameInput = document.getElementById("name");
let ageInput = document.getElementById("age");
let emailInput = document.getElementById("email");
let add_btn = document.getElementById("add_btn");

add_btn.addEventListener("click", function () {
  set(ref(database, "User/" + "user1"), {
    name: nameInput.value,
    age: ageInput.value,
    email: emailInput.value
  }).then(() => {
    alert("Success");
  });
});