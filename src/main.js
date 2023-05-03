import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { loggedIn } from "./logedIn";

// Register the navigation guard
router.beforeEach((to, from, next) => {
  // Check if loggedIn value is false and the destination route is not the login page
  if ((!loggedIn.value && to.path === "/profile") || to.path === "/") {
    // Redirect to the login page
    next("/login");
  } else {
    // Continue with the navigation
    next();
  }
});
const app = createApp(App);
app.use(router);
app.mount("#app");
