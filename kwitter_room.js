//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
    apiKey: "AIzaSyDP6xK2Yk6N77jXcDncmWG1RPjWmre7EmY",
    authDomain: "mycity-mlv9.firebaseapp.com",
    databaseURL: "https://mycity-mlv9-default-rtdb.firebaseio.com",
    projectId: "mycity-mlv9",
    storageBucket: "mycity-mlv9.appspot.com",
    messagingSenderId: "794686430177",
    appId: "1:794686430177:web:3747fd95a785f4ee3f90a0"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

function getData() {
    firebase.database().ref("/").on('value', function(snapshot) {
        document.getElementById("output").innerHTML = "";
        snapshot.forEach(function(childSnapshot) {
            childKey = childSnapshot.key;
            Room_names = childKey;
            console.log("Room Name - " + Room_names);
            row = "<div class= 'room_name' id='" + Room_names + "'  onclick='redirectToRoomName(this.id)' >#" + Room_names + "</div><hr>";
            document.getElementById("output").innerHTML += row;
            //Start code

            //End code
        });
    });
}
getData();

user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = " Welcome " + user_name;

function redirectToRoomName(name) {
    console.log(name);
    localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";
}

function Logout() {
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location = "index.html";
}

function Addroom() {
    room_name = document.getElementById("room_name").value;
    firebase.database().ref("/").child(room_name).update({
        purpose: "adding room"
    });

    localStorage.setItem("room_name", room_name);

    window.location = "kwitter_page.html";
}