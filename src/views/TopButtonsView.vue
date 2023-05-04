<template>
  <div class="container">
    <div class="imgDiv">
      <img src="https://earthsky.org/upl/2014/05/kelvin-helmhotz-clouds1-e1495216683995.jpg" alt="icon">
    </div>
    <div class="buttons">
      <button class="deleteButton" @click="deleteAccount">Delete account</button>
      <button class="changeUserButton">Change User</button>
      <button class="changeMailButton">Change mail</button>
      <button class="changePassword">Change password</button>
    </div>
  </div>
</template>
<script>

import { auth } from "../firebaseModel";
import { deleteCurrentUser } from "../firebaseModel";
import { loggedIn } from "../logedIn";
import { signOutCurrentUser } from "../firebaseModel";
import { useRouter } from "vue-router";
import { deleteUser } from 'firebase/auth';

export default {
  name: "TopButtonsView",
  setup() {
    const router = useRouter();
    const deleteAccount = async () => {
      deleteCurrentUser();
      auth
        .signOut()
        .then(() => {
          signOutCurrentUser();
          loggedIn.value = false;
          router.push("/login");
        })
        .catch((error) => {
          console.error(error);
        });
      deleteUser(auth.currentUser)
        .then(() => {
          alert("User deleted")
        })
        .catch((error) => {
          console.error(error);
        })
    }

    return { deleteAccount, router, };
  },
};


</script>

<style scoped>
.container {
  width: 65%;
  margin-right: auto;
  margin-left: auto;
  display: grid;
  grid-template-columns: 20% auto;
  grid-template-rows: auto;
  grid-template-areas:
    "imgDiv buttons";
  padding-top: 20px;
  background-image: url(https://media1.giphy.com/media/M9TbsVzWI8YAEEJJ5u/giphy.gif?cid=6c09b952b4a564a8722f7078d8617830e3e24954ce826060&rid=giphy.gif&ct=s);
  background-size: contain;
  border-radius: 5px;
}

.imgDiv img {
  width: 40%;
  border-radius: 30%;
  height: auto;
  margin: 5px;
  border: solid;
}

.imgDiv {
  grid-area: imgDiv;
}

.buttons {
  grid-area: buttons;
  display: grid;
  grid-template-columns: auto;
  grid-template-rows: auto;
  grid-template-areas:
    "deleteButton changeUserButton changeMailButton changePassword";
}

.buttons button {
  border-radius: 10px;
  margin: 20px;
  font-family: cursive;
  background-color: rgb(27, 27, 27);
  color: white;
}

.deleteButton {
  grid-area: deleteButton;
}

.changeUserButton {
  grid-area: changeUserButton;
}

.changeMailButton {
  grid-area: changeMailButton;
}

.changePassword {
  grid-area: changePassword;
}

.buttons button:active {
  background-color: black;
}
</style>>