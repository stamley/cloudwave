@@ -1,5 +1,126 @@
<template>
  <div></div>
  <div class="container">
    <h1 class="title">Sign UP</h1>
    <div class="signInBox">
      <p class="signInText">Fill in your details below</p>

      <input type="text" placeholder="Full Name" class="nameBox" />
      <input type="email" placeholder="Email" required class="mailBox" />
      <input type="password" placeholder="Password" class="passBox" />
      <input
        type="password"
        placeholder="Confirm your password"
        class="ConpassBox"
      />
      <input
        type="Synth password"
        placeholder="Synth Password"
        class="SyPassBox"
      />

      <button class="register">Register</button>
      <footer>
        Already registered? Log in
        <a href="#">Here</a>
      </footer>
    </div>
  </div>
</template>
<script></script>

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
  padding: 13px;
}

.register {
  grid-area: register;
  margin-right: auto;
}
</style>
