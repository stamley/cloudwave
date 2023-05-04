<!-- <template>
  <div class="container">
    <h1 class="title">Sign Up</h1>
    <div class="signInBox">
      <p class="signInText">Fill in your details below</p>

      <input
        type="text"
        placeholder="Full Name"
        class="nameBox"
        v-model="fullName"
        id = "fullNameBox"
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
        placeholder="Confirm your password"
        class="ConpassBox"
        v-model="confirmPassword"
      />

      <input type="Synth password" placeholder="Synth Password" class="SyPassBox" />

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
import { auth, createUserWithEmailAndPassword, setSynthPass } from "../firebaseModel";
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
        setSynthPass()
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
</script> -->

<template>
  <div class="container">
    <h1 class="title">Sign Up</h1>
    <div class="signInBox">
      <p class="signInText">Fill in your details below</p>

      <input type="text" placeholder="Full Name" class="nameBox" v-model="fullName" />
      <input type="email" placeholder="Email" required class="mailBox" v-model="email" />
      <input type="password" placeholder="Password" class="passBox" v-model="password" />
      <input type="password" placeholder="Confirm your password" class="ConpassBox" v-model="confirmPassword" />

      <input type="password" placeholder="Synth Password" class="SyPassBox" v-model="synthPassword" />

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
import { auth, createUserWithEmailAndPassword, setSynthPass } from "../firebaseModel";
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
    const synthPassword = ref("");

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

        await setSynthPass(synthPassword.value);
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
      synthPassword,
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
}

.title {
  margin-top: 30px;
  grid-area: title;
  margin-bottom: 35px;
}

.signInBox {
  width: 60%;
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
    "register register register"
    "SyPassBox SyPassBox SyPassBox";
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

.SyPassBox {
  width: 50%;
  height: 30px;
  grid-area: passBox;
  margin-right: auto;
  margin-left: auto;
  margin-top: 120px;
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
  padding: 11px;
}

.register {
  grid-area: register;
  margin-right: auto;
}
</style>
