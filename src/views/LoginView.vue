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
      <div class="accountButtons">
        <button class="login" @click="loginUser">Login</button>
        <button class="register" @click="registerUser">Register</button>
      </div>
    </div>
    
    <!--<img
      src="https://i.gifer.com/origin/0d/0d6cf5b4980702758a616a14bed86e3a_w200.gif"
      alt="clouds gif"
      class="clouds"
    />-->
    <div class="footer">
      Forgot your password? Click
      <router-link class="link" to="/forgot-account">Here</router-link>
    </div>
    <div class="noAccountBox">
      <!--<p>Do you not have an account?</p>
      <p>
        Quickly, click on the sad cloud to make an account and make him happy!
      </p>-->
      <p>Make this sad little cloud happy by making an account,</p>
      <p> if you don't have one already</p>
      <a @click="registerUser">
        <!--src="https://media2.giphy.com/media/QBdwtKJMQ90euUGQ08/giphy.gif?cid=6c09b952yhzumvelezjr9cgfgkpp3ovbophw6hfo3owp1298&rid=giphy.gif&ct=s"-->
        <img
          src="../assets/blue-cloud-transparent.png"
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
    // const Forgot = async () => {
    //   router.push("/forgot-account");
    // };

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
.link{
  color: rgb(55, 96, 211);
}
.footer{
  width: 30%;
  margin-left: auto;
  margin-right: auto;
  font-family: "Sporting", Helvetica;
  font-size: 12px;
  border-color: rgb(55, 96, 211);
  color:rgb(178, 197, 237);
}
.container {
  font-family: "Sporting", Helvetica;
  display: grid;
  grid-template-columns: auto;
  grid-template-rows: auto;
  grid-template-areas:
    "title"
    "signInBox";
  width: 70%;
  margin-right: auto;
  margin-left: auto;
  color: rgb(178, 197, 237);
}

.title {
  margin-top: 50px;
  grid-area: title;
  margin-bottom: 50px;
}

.signInBox {
  width: auto;
  background-color: rgb(178, 197, 237);
  color: rgb(55, 96, 211);
  border-radius: 6px;
  padding: 10px;
  margin-right: auto;
  margin-left: auto;
  margin-bottom: 10px;
  grid-area: signInBox;
  display: grid;
  grid-template-rows: auto;
  grid-template-areas:
    "signInText  signInText"
    "mailBox  mailBox"
    "passBox  passBox"
    "accountButtons accountButtons";
}

.accountButtons {
  display: flex;
  padding: 4px;
  grid-area: accountButtons;
}


.signInText {
  font-family: "Sporting", Helvetica;
  font-size: 20px;
  grid-area: signInText;
}

input {
  width: 60%;
  background-color: rgb(178, 197, 237);
  border-radius: 3px;
  font-family: "Sporting", Helvetica;
  font-size: 10px;
  margin-top: 0%;
  margin-bottom: 0px;
}

input:focus {
  outline: none; /* to remove the default focus outline */
  border-color: rgb(55, 96, 211);; /* change the border color */
}

.mailBox {
  width: 50%;
  height: 16px;
  grid-area: mailBox;
  margin-right: auto;
  margin-left: auto;
}

.passBox {
  width: 50%;
  height: 16px;
  grid-area: passBox;
  margin-right: auto;
  margin-left: auto;
  margin-bottom: 20px;
}

button {
  padding: 10px;
  font-size: 13px;
}

.register {
  grid-area: register;
  margin-right: auto;
}

.login {
  grid-area: login;
  margin-left: auto;
}

button:active {
  background-color: rgb(13, 24, 48);
}

.clouds {
  margin-right: auto;
  margin-left: auto;
  margin-top: 30px;
  width: 30%;
}

.noAccountBox {
  font-family: "Sporting", Helvetica;
  width: 50%;
  margin-right: auto;
  margin-left: auto;
  margin-top: 20px;
  font-size: 13px;
}

.sadCloud {
  width: 40%;
  margin-right: auto;
  margin-left: auto;
}
</style>
