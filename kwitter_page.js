//YOUR FIREBASE LINKS
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

user_name = localStorage.getItem("user_name");
room_name = localStorage.getItem("room_name");

function getData() {
    firebase.database().ref("/" + room_name).on('value', function(snapshot) {
        document.getElementById("output").innerHTML = "";
        snapshot.forEach(function(childSnapshot) {
            childKey = childSnapshot.key;
            childData = childSnapshot.val();
            if (childKey != "purpose") {
                firebase_message_id = childKey;
                message_data = childData;
                //Start code

                //End code
            }
        });
    });
}
getData();

function Logout() {
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location = "index.html";
}