import firebaseConfig from "./firebaseConfig";
import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { set, ref, getDatabase } from "firebase/database";

const app = initializeApp(firebaseConfig);

const REF = "CloudWave/";
const MAC = "dc:a6:32:b4:da:a5/";

const db = getDatabase(app);
const auth = getAuth(app);

auth.onAuthStateChanged((user) => {
  if (user) {
    set(ref(db, REF + MAC + "users/" + user.uid), {
      name: document.getElementById('fullNameBox').value,
      email: user.email,
      base: 0,
      treble: 0,
      mid: 0,
    });
    set(ref(db, REF + MAC + "/CurrentUser"), {
      User: user.uid,
    });
  }
});

auth.onIdTokenChanged(() => {
  set(ref(db, REF + MAC + "/CurrentUser"), {
    User: auth.currentUser.uid,
  });
})

function signOutCurrentUser(){
  set(ref(db, REF + MAC + "/CurrentUser"), {
    User: "",
  });
}

function save() {
  const name = document.getElementById("name").value;
  const email = document.querySelector(".mailBox").value;
  const password = document.querySelector(".passBox").value;
  const confirm = document.querySelector(".ConpassBox").value;

  if (password !== confirm) {
    alert("Passwords do not match.");
    return;
  }

  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      alert("Successfully signed up!");
      set(ref(db, REF + "users/" + user.uid), {
        name: name,
      });
    })
    .catch((error) => {
      alert(error.message);
    });
}

function login() {
  const email = document.querySelector(".mailBox").value;
  const password = document.querySelector(".passBox").value;

  signInWithEmailAndPassword(auth, email, password)
    .then(() => {
      alert("Successfully signed in!");
    })
    .catch((error) => {
      alert(error.message);
    });
}

export {
  save,
  auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  getAuth,
  login,
  signOutCurrentUser,
};
