 import * as firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBFpwIKFkZmaQe8XWy6VvbScN37byEW_1A",
  authDomain: "school-attendance-f071b.firebaseapp.com",
  databaseURL: "https://school-attendance-f071b-default-rtdb.firebaseio.com",
  projectId: "school-attendance-f071b",
  storageBucket: "school-attendance-f071b.appspot.com",
  messagingSenderId: "272214748544",
  appId: "1:272214748544:web:a28d7c952848b0622e6565",
  measurementId: "G-NKTHFYX7KM"
};
export default !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();
 

console.log(firebase.name);
console.log(firebase.database());
 
 

  