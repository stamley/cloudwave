import firebaseConfig from "./firebaseConfig";
import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { set, ref, getDatabase, update } from "firebase/database";
import {
  getSelectedIndex,
  getselectedBass,
  getselectedMid,
  getselectedTreble,
} from "./components/selectedIndex";
import {
  getStorage,
  listAll,
  ref as storageRef,
  getDownloadURL,
} from "firebase/storage";

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
const auth = getAuth(app);
const storage = getStorage(app);

const REF = "CloudWave/";
const MAC = "dc:a6:32:b4:da:a5/";

async function getMusicList() {
  const listRef = storageRef(storage, "user1/sounds1");
  const res = await listAll(listRef);
  const musicList = await Promise.all(
    res.items.map(async (itemRef) => {
      const url = await getDownloadURL(itemRef);
      return {
        name: itemRef.name,
        url: url,
      };
    })
  );
  return musicList;
}

getMusicList().then((musicList) => console.log(musicList));

auth.onAuthStateChanged((user) => {
  if (user) {
    const userRef = ref(db, REF + MAC + "users/" + user.uid);
    set(userRef, {
      name: document.getElementById("fullNameBox").value,
      email: user.email,
      index: 1,
      Bass: 0,
      Mid: 0,
      Treble: 0,
      SynthPassword: document.getElementById("synthPass").value,
    });
    set(ref(db, REF + MAC + "/CurrentUser"), {
      User: user.uid,
    });
  }
});

const updateUserData = () => {
  const userRef = ref(db, REF + MAC + "users/" + auth.currentUser.uid);
  update(userRef, {
    index: getSelectedIndex().value,
    Bass: getselectedBass().value,
    Mid: getselectedMid().value,
    Treble: getselectedTreble().value,
  });
  set(ref(db, REF + MAC + "/CurrentUser"), {
    User: auth.currentUser.uid,
  });
};

auth.onIdTokenChanged(() => {
  set(ref(db, REF + MAC + "/CurrentUser"), {
    User: auth.currentUser.uid,
  });
});

function signOutCurrentUser() {
  set(ref(db, REF + MAC + "/CurrentUser"), {
    User: "",
  });
}

function deleteCurrentUser() {
  set(ref(db, REF + MAC + "users/" + auth.currentUser.uid), null);
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
  updateUserData,
  signOutCurrentUser,
  deleteCurrentUser,
  getMusicList,
};
