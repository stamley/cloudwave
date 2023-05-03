<template>
  <div>
    <h1 class="title">Write your Email:</h1>

    <input class="input" type="email" id="email" v-model="email" />
    <button class="button" @click="sendPasswordResetEmail">
      Send Password Reset Email
    </button>
    <button class="buttonnnn" @click="backtologinpage">
      Back to Login page
    </button>
  </div>
</template>

<script>
import router from "@/router";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";

export default {
  data() {
    return {
      email: "",
    };
  },
  methods: {
    sendPasswordResetEmail() {
      const auth = getAuth();
      sendPasswordResetEmail(auth, this.email)
        .then(() => {
          // Password reset email sent successfully
          alert("Password reset email sent, check your email!");
          router.push("/login");
        })
        .catch(() => {
          // Error sending password reset email
          alert("put your Email please ");
        });
    },

    backtologinpage() {
      router.push("/login");
    },
  },
};
</script>

<style scoped>
.title {
  margin-top: 10px;
  grid-area: title;
  margin-bottom: 50px;
}

input[type="email"] {
  display: block;

  width: 30%;
  padding: 10px;
  border: none;
  border-radius: 5px;
  margin-bottom: 30px;
  margin: auto;
  margin-top: 50px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
}

button {
  display: inline-block;
  padding: 10px;
  margin-top: 30px;
  background-color: #320e69;
  color: #fff;
  font-size: 16px;
  font-weight: bold;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}
.buttonnnn {
  display: inline-block;
  padding: 10px 20px;
  background-color: #320e69;
  color: #fff;
  font-size: 16px;
  font-weight: bold;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}
button:hover {
  background-color: #005ae6;
}
</style>
