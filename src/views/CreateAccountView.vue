<template>
  <div class="container">
    <h1 class="title">Sign Up</h1>
    <div class="signInBox">
      <p class="signInText">Fill in your details below</p>

      <input
        type="text"
        placeholder="Full Name"
        class="nameBox box"
        v-model="fullName"
      />
      <input
        type="email"
        placeholder="Email"
        required
        class="mailBox box"
        v-model="email"
      />
      <input
        type="password"
        placeholder="Password"
        class="passBox box"
        v-model="password"
      />
      <input
        type="password"
        placeholder="Confirm your password"
        class="ConpassBox box"
        v-model="confirmPassword"
      />

      <input
        type="Synth password"
        placeholder="Synth Password"
        class="SyPassBox box"
      />

      
    </div>
    <div class="registerButton">
      <button class="register" @click="registerUser">Register</button>
    </div>
    <!--<footer>
        Already registered? Log in
        <router-link to="/login">Here</router-link>
      </footer>-->
  </div>
</template>
<script>
import { ref } from "vue";
import { auth, createUserWithEmailAndPassword } from "../firebaseModel";
import { useRouter } from "vue-router";
import { loggedIn } from "../logedIn";

export default {
  name: "CreateAccountView",
  setup() {
    const router = useRouter();
    const fullName = ref("");
    const email = ref("");
    const password = ref("");
    const confirmPassword = ref("");

    const registerUser = async () => {
      if (password.value !== confirmPassword.value) {
        alert("Passwords do not match");
        return;
      }
      try {
        const userCredential = await createUserWithEmailAndPassword(
          auth,
          email.value,
          password.value
        );
        const user = userCredential.user;
        if (user && user.updateProfile) {
          await user.updateProfile({
            displayName: fullName.value,
          });
        }
        loggedIn.value = true;
        router.push("/profile");
      } catch (error) {
        alert(error.message);
      }
    };

    return {
      fullName,
      email,
      password,
      confirmPassword,
      registerUser,
      loggedIn,
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
  width: 80%;
  margin-right: auto;
  margin-left: auto;
  color: rgb(178, 197, 237);
}

.title {
  margin-top: 30px;
  grid-area: title;
  margin-bottom: 35px;
}

.signInBox {
  width: 50%;
  margin-right: auto;
  margin-left: auto;
  grid-area: signInBox;
  display: grid;
  background-color: rgb(178, 197, 237);
  color: rgb(55, 96, 211);
  border-radius: 5px;

  grid-template-columns: auto;
  grid-template-rows: auto;
  grid-template-areas:
    "signInText signInText signInText"
    "nameBox nameBox nameBox"
    "nameBox nameBox nameBox"
    "mailBox mailBox mailBox"
    "passBox passBox passBox"
    "ConpassBox ConpassBox ConpassBox"
    "register register register"
    "SyPassBox SyPassBox SyPassBox";
}

.signInText {
  font-family: "Sporting", Helvetica;
  font-size: 20px;
  grid-area: signInText;
}

input {
  width: 100px;
  background-color: rgb(178, 197, 237);
  border-radius: 3px;
  font-family: "Sporting", Helvetica;
  font-size: 10px;
}

input:focus {
  outline: none; /* to remove the default focus outline */
  border-color: rgb(55, 96, 211);; /* change the border color */
}

/* Full name box */

.box {
  width: 50%;
  height: 30px;
  margin-right: auto;
  margin-left: auto;
  margin-top: 10px;
  margin-bottom: 10px;
}

.nameBox {
  grid-area: nameBox;
}
.mailBox {
  grid-area: mailBox;
}

.passBox {
  grid-area: passBox;
}

.ConpassBox {
  grid-area: passBox;
  margin-top: 65px;
}

.SyPassBox {
  grid-area: passBox;
  margin-top: 120px;
  margin-bottom: 20px;
}

.registerButton {
  margin-top: 10px;
}

button {
  width: fit-content;
  margin: auto;
  margin-bottom: 20px;
  padding: 11px;
}

.register {
  grid-area: register;
  margin-right: auto;
}
</style>
