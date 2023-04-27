import { reactive, toRefs, watch } from "vue";

// Get the initial value from localStorage or default to `false` if not present
const initialLoggedIn = localStorage.getItem("loggedIn") === "true" || false;

export const loggedIn = reactive({ value: initialLoggedIn });

// Watch for changes to the `logedIn` variable and update localStorage accordingly
watch(() => loggedIn.value, (value) => {
  localStorage.setItem("loggedIn", value);
});

export default toRefs(loggedIn);


//import { reactive, toRefs } from "vue";

//export const logedIn = reactive({ value: false }); // Initialize with initial value of `false`

//export default toRefs(logedIn); // Convert the reactive object to a plain object with reactive properties