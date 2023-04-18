<template>
  <!--<img alt="Vue logo" src="./assets/logo.png">-->
  <!--<HelloWorld msg="Welcome to Your Vue.js App"/>-->
  <ProfileActionPresenter/>
</template>

<script>
//import HelloWorld from './views/HelloWorld.vue'
import ProfileActionPresenter from './presenters/ProfileActionPresenter.vue';

export default {
  name: 'App',
  components: {
    ProfileActionPresenter
  }
}
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
