<template>
  <!--<img alt="Vue logo" src="./assets/logo.png">-->
  <!--<HelloWorld msg="Welcome to Your Vue.js App"/>-->
  <div>
    <router-link to="/login">Login </router-link>
    <router-link to="/profile">Profile </router-link>
    <router-link to="/create-account">Create-account</router-link>
    <router-view></router-view>
  </div>
  <!--<ProfileActionPresenter />-->
  <ProfilePresenter v-if="false" />
</template>

<script>
//import HelloWorld from './views/HelloWorld.vue'
// import ProfileActionPresenter from "./presenters/ProfileActionPresenter.vue";
import ProfilePresenter from "./presenters/ProfilePresenter.vue";
import router from "./router";
import {loggedIn} from "./logedIn";
    console.log(loggedIn) 
export default {
  name: "App",
  components: {
    // ProfileActionPresenter,
    ProfilePresenter,
  },
  mounted() {
    // Check if window location hash is empty
    if (!loggedIn.value) {
      // Redirect to '/login'
      router.push('/login');
    }
  },
};


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
.profile-presenter {
  display: none;
}
</style>
