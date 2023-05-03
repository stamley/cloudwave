import firebaseConfig from "./firebaseConfig";
import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { set, ref, getDatabase } from "firebase/database";
import {
  getSelectedIndex,
  getselectedBass,
  getselectedMid,
  getselectedTreble,
} from "./components/selectedIndex";

const app = initializeApp(firebaseConfig);

const REF = "CloudWave/";

const db = getDatabase(app);
const auth = getAuth(app);

const updateUserData = () => {
  auth.onAuthStateChanged((user) => {
    if (user) {
      const userRef = ref(db, REF + "users/" + user.uid);
      set(userRef, {
        name: user.displayName,
        email: user.email,
        index: getSelectedIndex().value,
        Bass: getselectedBass().value,
        Mid: getselectedMid().value,
        Trebble: getselectedTreble().value,
      })
        .then(() => {
          console.log("User data updated successfully");
        })
        .catch((error) => {
          console.error("Error updating user data:", error);
        });
    }
  });
};

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
  updateUserData,
};
