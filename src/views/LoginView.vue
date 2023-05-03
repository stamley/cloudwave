<template>
  <div class="container">
    <h1 class="title">Login</h1>
    <div class="signInBox">
      <p class="signInText">Enter your account details below</p>
      <input type="email" placeholder="Email" class="mailBox" v-model="email" />
      <input
        type="password"
        placeholder="Password"
        class="passBox"
        v-model="password"
      />
      <button class="login" @click="loginUser">Login</button>
      <button class="resPass">Reset password</button>
      <button class="register" @click="registerUser">Register</button>
    </div>
    <img
      src="https://i.gifer.com/origin/0d/0d6cf5b4980702758a616a14bed86e3a_w200.gif"
      alt="clouds gif"
      class="clouds"
    />
    <div class="noAccountBox">
      <p>Do you not have an account?</p>
      <p>
        Quickly, click on the sad cloud to make an account and make him happy!
      </p>
      <a @click="registerUser"
        ><img
          src="https://media2.giphy.com/media/QBdwtKJMQ90euUGQ08/giphy.gif?cid=6c09b952yhzumvelezjr9cgfgkpp3ovbophw6hfo3owp1298&rid=giphy.gif&ct=s"
          alt="sad cloud"
          class="sadCloud"
      /></a>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import { auth, signInWithEmailAndPassword } from "../firebaseModel";
import { useRouter } from "vue-router";
import { loggedIn } from "../logedIn";

export default {
  name: "LoginView",
  setup() {
    const router = useRouter();
    const email = ref("");
    const password = ref("");

    const loginUser = async () => {
      try {
        await signInWithEmailAndPassword(auth, email.value, password.value);
        console.log("User logged in succesfully");
        loggedIn.value = true;
        router.push("/profile");
      } catch (error) {
        alert(error.message);
      }
    };
    const registerUser = async () => {
      router.push("/create-account");
    };
    return {
      email,
      password,
      loginUser,
      registerUser,
    };
  },
};
</script>

<style scoped>
.container {
  display: grid;
  grid-template-columns: auto;
  grid-template-rows: auto;
  grid-template-areas:
    "title"
    "signInBox";
  width: 65%;
  margin-right: auto;
  margin-left: auto;
}

.title {
  margin-top: 50px;
  grid-area: title;
  margin-bottom: 50px;
}

.signInBox {
  width: 40%;
  margin-right: auto;
  margin-left: auto;
  grid-area: signInBox;
  display: grid;
  grid-template-columns: auto;
  grid-template-rows: auto;
  grid-template-areas:
    "signInText signInText signInText"
    "mailBox mailBox mailBox"
    "passBox passBox passBox"
    "register resPass login";
  border: solid 1px;
}

.signInText {
  font-family: cursive;
  font-size: 20px;
  grid-area: signInText;
}

.mailBox {
  width: 30%;
  height: 16px;
  grid-area: mailBox;
  margin-right: auto;
  margin-left: auto;
}

.passBox {
  width: 30%;
  height: 16px;
  grid-area: passBox;
  margin-right: auto;
  margin-left: auto;
  margin-top: 20px;
  margin-bottom: 20px;
}

/*.signInBox button {
  width: fit-content;
  border-radius: 50px;
  background-color: rgb(27, 27, 27);
  color: white;
  margin-bottom: 20px;
  font-family: cursive;
  padding: 13px;
}*/

.register {
  grid-area: register;
  margin-left: auto;
}

.resPass {
  grid-area: resPass;
  margin-left: auto;
  margin-right: auto;
}

.login {
  grid-area: login;
  margin-right: auto;
}

.signInBox button:active {
  background-color: black;
}

.clouds {
  margin-right: auto;
  margin-left: auto;
  margin-top: 30px;
  width: 30%;
}

.noAccountBox {
  font-family: cursive;
  width: 50%;
  margin-right: auto;
  margin-left: auto;
  margin-top: 20px;
}

.sadCloud {
  width: 30%;
  margin-right: auto;
  margin-left: auto;
}
</style>
