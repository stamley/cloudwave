<template>
  <div class="container">
    <h1 class="title">Sign Up</h1>
    <div class="signInBox">
      <p class="signInText">Fill in your details below</p>

      <input
        type="text"
        placeholder="Full Name"
        class="nameBox"
        v-model="fullName"
      />
      <input
        type="email"
        placeholder="Email"
        required
        class="mailBox"
        v-model="email"
      />
      <input
        type="password"
        placeholder="Password"
        class="passBox"
        v-model="password"
      />
      <input
        type="password"
        placeholder="Confirm password"
        class="ConpassBox"
        v-model="confirmPassword"
      />

      <button class="register" @click="registerUser">Register</button>
      <footer>
        Already registered? Log in
        <router-link to="/login">Here</router-link>
      </footer>
    </div>
  </div>
</template>
<script>
import { ref } from "vue";
import { auth, createUserWithEmailAndPassword } from "../firebaseModel";
import { useRouter } from "vue-router";

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
}

.title {
  margin-top: 50px;
  grid-area: title;
  margin-bottom: 50px;
}

.signInBox {
  width: 50%;
  length: 50%;
  margin-right: auto;
  margin-left: auto;
  grid-area: signInBox;
  display: grid;
  grid-template-columns: auto;
  grid-template-rows: auto;
  grid-template-areas:
    "signInText signInText signInText"
    "nameBox nameBox nameBox"
    "nameBox nameBox nameBox"
    "mailBox mailBox mailBox"
    "passBox passBox passBox"
    "ConpassBox ConpassBox ConpassBox"
    "register register register";
  border: solid 5px;
}

.signInText {
  font-family: cursive;
  font-size: 20px;
  grid-area: signInText;
}

/* Full name box */
.nameBox {
  width: 50%;
  height: 30px;
  grid-area: nameBox;
  margin-right: auto;
  margin-left: auto;
  margin-top: 10px;
  margin-bottom: 10px;
}

.mailBox {
  width: 50%;
  height: 30px;
  grid-area: mailBox;
  margin-right: auto;
  margin-left: auto;
  margin-top: 10px;
  margin-bottom: 10px;
}

.passBox {
  width: 50%;
  height: 30px;
  grid-area: passBox;
  margin-right: auto;
  margin-left: auto;
  margin-top: 10px;
  margin-bottom: 10px;
}

.ConpassBox {
  width: 50%;
  height: 30px;
  grid-area: passBox;
  margin-right: auto;
  margin-left: auto;
  margin-top: 65px;
  margin-bottom: 10px;
}

.signInBox button {
  width: fit-content;
  margin: auto;
  border-radius: 60px;
  background-color: rgb(27, 27, 27);
  color: white;
  margin-bottom: 20px;
  font-family: cursive;
  padding: 13px;
}

.register {
  grid-area: register;
  margin-right: auto;
}
</style>
