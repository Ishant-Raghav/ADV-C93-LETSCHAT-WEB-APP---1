
var firebaseConfig = {
    apiKey: "AIzaSyDUGwzVTearRYwxg9MXyc0XDbJk1LFM20M",
    authDomain: "mara-kwitter.firebaseapp.com",
    databaseURL: "https://mara-kwitter-default-rtdb.firebaseio.com",
    projectId: "mara-kwitter",
    storageBucket: "mara-kwitter.appspot.com",
    messagingSenderId: "163109139701",
    appId: "1:163109139701:web:631e8dc0f81c3d292a01bc",
    measurementId: "G-QZ363YNSRK"
  };
  firebase.initializeApp(firebaseConfig);
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    //Start code
    console.log("Room Name - " + Room_names);
    row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
    document.getElementById("output").innerHTML += row;
    //End code
    });});}
getData();

function addRoom()
{
    room_name = document.getElementById("room_name").value;

    firebase.database().ref("/").child(room_name).update({
          purpose : "adding room name"
    });

    localStorage.setItem("room_name", room_name);

    window.location = "kwitter_page.html";
}
function redirectToRoomName(name)
{
    console.log(name);
    localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";
}