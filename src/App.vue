<template>
  <!--<img alt="Vue logo" src="./assets/logo.png">-->
  <!--<HelloWorld msg="Welcome to Your Vue.js App"/>-->
  <!--<ProfileActionPresenter/>-->
  <LoginPresenter/>
</template>

<script>
//import HelloWorld from './views/HelloWorld.vue'
//import ProfileActionPresenter from './presenters/ProfileActionPresenter.vue';
import LoginPresenter from './presenters/ProfilePresenter.vue';

export default {
  name: 'App',
  components: {
    LoginPresenter
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: white;
  height: 100vh;
  background-color: rgb(34, 34, 34);
}
</style>
