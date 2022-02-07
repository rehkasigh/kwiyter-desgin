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
  var user_name= localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML="welcome"+ user_name +"!";
    
    
    function addroom(){
         Room_name=document.getElementById("room_name").value;
         localStorage.setItem("room_name",room_name);
         window.location="kwitter_room.html"
         firebase.database().ref("/").child(user_name).update({
            purpose:"adding room name"
        });


    }
    var  user_name =localStorage.getItem("user_name");

    document.getElementById("user_name").innerHTML="welcome" + user_name + "!";
    
    function addroom(){
          room_name=document.getElementById("room_name").value;
          firebase.database().ref("/").child(room_name).update({
                purpose:"adding room name"
            });
            localStorage.setItem("room_name",room_name);
            window.location="kwitter_page.html";
    }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

console.log("room name-"+Room_names);

row="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";

document.getElementById("output").innerHTML +=row;

//End code
      });});}
      
getData();
function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("room_name",name);
      window.location="kwitter_page.html";
}
function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";
}