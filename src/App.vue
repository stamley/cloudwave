<template>
  <!--<img alt="Vue logo" src="./assets/logo.png">-->
  <!--<HelloWorld msg="Welcome to Your Vue.js App"/>-->
  <div>
    <router-link to="/login">Login  </router-link>
    <router-link to="/profile">Profile  </router-link>
    <router-link to="/create-account">Create-account</router-link>
    <router-view></router-view>
  </div>
  <!--<ProfileActionPresenter />-->
  <ProfilePresenter v-if="false"/>
</template>

<script>
//import HelloWorld from './views/HelloWorld.vue'
// import ProfileActionPresenter from "./presenters/ProfileActionPresenter.vue";
import ProfilePresenter from "./presenters/ProfilePresenter.vue";

export default {
  name: "App",
  components: {
    // ProfileActionPresenter,
    ProfilePresenter,
  },
};
</script>

<style>
@font-face {
  font-family: "Sporting";
  src: local("Sporting"),
   url(./fonts/Sporting.ttf) format("truetype");
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  /*color: white;*/
  /*height: 100vh;*/
  /*border: solid;*/
  background-color: rgb(13, 24, 48);
}
html{
  background-color: rgb(13, 24, 48);
}
.profile-presenter{
  display: none;
}
</style>
