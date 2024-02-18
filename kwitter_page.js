var firebaseConfig = {
      apiKey: "AIzaSyDKpzqlzl5mMNEl5rXsqDkr8vm6rGi2BLo",
      authDomain: "kwitter-fb0f7.firebaseapp.com",
      databaseURL: "https://kwitter-fb0f7-default-rtdb.firebaseio.com",
      projectId: "kwitter-fb0f7",
      storageBucket: "kwitter-fb0f7.appspot.com",
      messagingSenderId: "650223631277",
      appId: "1:650223631277:web:021103e50c0fc894267f24"
      };
      
      firebase.initializeApp(firebaseConfig);
      
user_name = localStorage.getItem("user_name");
room_name = localStorage.getItem("room_name");

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();

function send()

{

      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      });

      document.getElementById("msg").value = "";

}

function logout()

{

      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";

}