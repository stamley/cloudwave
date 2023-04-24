/*import firebaseConfig from "./firebaseConfig";
import firebase from "firebase/app";
 "firebase/firestore";

firebase.initializeApp(firebaseConfig);

var database = firebase.database();
const REF = "CloudWave/";
*/
import firebaseConfig from "./firebaseConfig";
import { initializeApp } from "../node_modules/@firebase/app";
import {set, ref, getDatabase} from "../node_modules/@firebase/database";

const app = initializeApp(firebaseConfig);

const REF = "CloudWave/";

const db = getDatabase(app);

function save(){
    var testvalue = document.getElementById("name").value;
    set(ref(db, REF + 'test/' + testvalue), testvalue );
    alert("Saved");
}

export { save };