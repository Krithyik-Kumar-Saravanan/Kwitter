var firebaseConfig = {
apiKey: "AIzaSyDKpzqlzl5mMNEl5rXsqDkr8vm6rGi2BLo",
authDomain: "kwitter-fb0f7.firebaseapp.com",
databaseURL: "https://kwitter-fb0f7-default-rtdb.firebaseio.com",
projectId: "kwitter-fb0f7",
storageBucket: "kwitter-fb0f7.appspot.com",
messagingSenderId: "650223631277",
appId: "1:650223631277:web:021103e50c0fc894267f24"
};

user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";
firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      console.log("Room Name - " + Room_names);
      row = "<div class = 'room_name' id = "+Room_names+" onclick = 'redirectToRoomName(this.id)'>#" + Room_names + "</div><hr>";
      document.getElementById("output").innerHTML += row;

      //End code
      });});}
getData();

function addRoom()

{

      room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update

      ({

            purpose : "adding room noom"

      });

      localStorage.setItem("room_name" , room_name);

      window.location = "kwitter_page.html";

}

function redirectToRoomName()

{

      console.log(name);
      localStorage.setItem("room_name" , name);
      window.location = "kwitter_page.html";

}

function logout()

{

      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";

}