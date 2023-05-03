<template>
  <LoginView v-if="!notLoggedIn" />
  <CreateAccountView v-if="notLoggedIn" />
  <ForgotPassword />
</template>
<script>
/* 
    This presenter shows either login view or create account view
    depending on wether the user is logged in or wants to create 
    account.    
*/

import CreateAccountView from "@/views/CreateAccountView.vue";
import LoginView from "@/views/LoginView.vue";
import ForgotPassword from "@/views/ForgotPassword.vue";

export default {
  name: "ProfileActionPresenter",
  components: { CreateAccountView, LoginView, ForgotPassword },
  data() {
    return { notLoggedIn: true };
  },
};
</script>
