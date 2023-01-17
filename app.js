import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
  // Init Firebase
  var config = {
    apiKey: "AIzaSyC-6CjRjO-zkNVCFxJvZNc2XXXTtaKdJAg",
    authDomain: "apple-61d57.firebaseapp.com",
    databaseURL: "https://apple-61d57-default-rtdb.firebaseio.com",
    projectId: "apple-61d57",
    storageBucket: "apple-61d57.appspot.com",
    messagingSenderId: "858850760903",
    appId: "1:858850760903:web:b826fbb4c0174ae62b46e2"
  
  };
  const app = initializeApp(firebaseConfig);

var login = function(provider) {
  firebase.auth().signInWithPopup(provider)
    .then(function(result) {
    var token = result.credential.accessToken;
    var user = result.user;
    document.getElementById("username").textContent = user.displayName
  }).catch(function(error) {
    var errorMessage = error.message;
    console.log("error", errorMessage)
});

}


var loginWithGoogle = function(e) {
  var provider = new firebase.auth.GoogleAuthProvider();
  login(provider);
}
  var google = document.querySelector(".omb_btn-google");
//Add event listener social media
 

  google.addEventListener('click', loginWithGoogle);
