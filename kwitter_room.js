var firebaseConfig = {
    apiKey: "AIzaSyDtdtacm3LgAhre9HVorAgw_-I7UcQQ3gw",
    authDomain: "let-s-chat-web-app-83f2e.firebaseapp.com",
    databaseURL: "https://let-s-chat-web-app-83f2e-default-rtdb.firebaseio.com",
    projectId: "let-s-chat-web-app-83f2e",
    storageBucket: "let-s-chat-web-app-83f2e.appspot.com",
    messagingSenderId: "97089235388",
    appId: "1:97089235388:web:032e72444d7162501963b9"
  };
  
  // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    //Start code

    //End code
    });});}
getData();
