
  // Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC7tmouHCfJMSAFJv5KHHzXLiyJEaoIdSE",
    authDomain: "chatmet-4dad9.firebaseapp.com",
    databaseURL: "https://chatmet-4dad9-default-rtdb.firebaseio.com",
    projectId: "chatmet-4dad9",
    storageBucket: "chatmet-4dad9.appspot.com",
    messagingSenderId: "887310453726",
    appId: "1:887310453726:web:aaa8b4fdf1f13a99eb6b4f"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  user_name=localStorage.getItem("user_name");
  room_name=localStorage.getItem("room_name");
  function send(){
      msg=document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
          name:user_name,
          message:msg,
          like:0
      });
      document.getElementById("msg").value="";
  }



function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
    firebase_message_id = childKey;
    message_data = childData;
//Start code

//End code
 } });  }); }
getData();
