<template>
  <!--<img alt="Vue logo" src="./assets/logo.png">-->
  <!--<HelloWorld msg="Welcome to Your Vue.js App"/>-->
  <ProfileActionPresenter />
  <ProfilePresenter />
</template>

<script>
//import HelloWorld from './views/HelloWorld.vue'
//import ProfileActionPresenter from "./presenters/ProfileActionPresenter.vue";
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
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
