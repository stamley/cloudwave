<template>
  <!--<image src="../assets/sinewavelonger.png"/>-->
  <div class="container">
    <div class="imgDiv">
      <img src="../assets/logo.png" alt="icon">
    </div>
    <div class="buttons">
      <button class="deleteButton" @click="deleteAccount">Delete account</button>
      <button class="changePassword" @click="goToChangePass">Change password</button>
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

    const goToChangePass = async () => {
      router.push("/forgot-account")
    }

    return { deleteAccount, router, goToChangePass, };
  },
};


</script>

<style scoped>
.container {
  /*background-image: url(../assets/sinewavelonger.png);
    background-repeat: no-repeat;*/
  width: 65%;
  margin-right: auto;
  margin-left: auto;
  display: grid;
  grid-template-columns: 30% auto;
  grid-template-rows: auto;
  grid-template-areas:
    "imgDiv buttons";
  padding-top: 20px;
  /*background-image: url(https://media1.giphy.com/media/M9TbsVzWI8YAEEJJ5u/giphy.gif?cid=6c09b952b4a564a8722f7078d8617830e3e24954ce826060&rid=giphy.gif&ct=s);*/
  background-size: contain;
  border-radius: 5px;
}

.imgDiv img {
  width: 60%;
  /*border-radius: 30%;*/
  height: auto;
  margin: 5px;
  /*border: solid;*/
}

.imgDiv {
  grid-area: imgDiv;
}

.buttons {
  padding-top: 10px;
  grid-area: buttons;
  display: grid;
  grid-template-columns: auto;
  grid-template-rows: auto;
  grid-template-areas:
    "deleteButton changePassword";
}

.buttons button {
  border-radius: 10px;
  margin: 30px;
  font-family: "Sporting", Helvetica;
  color: rgb(178, 197, 237);
  background-color: rgb(55, 96, 211);
}

.deleteButton {
  grid-area: deleteButton;
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