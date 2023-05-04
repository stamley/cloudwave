<template>
  <div class="profile-box">
    <div class="profile-details">

      <img
        src="../assets/Default-Profile.png"
        alt="Profile picture"
        width="100"
        height="100"
      />

      <div class="welcome">
        <h2 v-if="user">Welcome {{ user.displayName }}</h2>
        <h2 v-else>Welcome!</h2>
        <div class="email" v-if="user">
          <strong>Email:</strong> {{ user.email }}
        </div>
      </div>
    </div>
    <div class="profile-actions">
      <button @click="showChangeUsernameForm">Change Username</button>
      <!-- <button @click="deleteAccount">Delete Account</button> -->
      <button @click="saveMusic">Save Music</button>
      <button @click="logout">Logout</button>
    </div>
    <div v-if="showChangeUsername">
      <form @submit.prevent="changeUsername">
        <input type="text" v-model="newUsername" placeholder="New Username" id="newNameBox" />
        <button type="submit" @click="changeAccountUserName">Save</button>
      </form>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from "vue";
import { auth } from "../firebaseModel";
import { useRouter } from "vue-router";
import { loggedIn } from "../logedIn";
import { signOutCurrentUser } from "../firebaseModel";
import { setSelectedIndex } from "../components/selectedIndex"

export default {
  name: "ProfileboxView",
  setup() {
    const router = useRouter();
    const user = ref(null);
    const showChangeUsername = ref(false);
    const newUsername = ref("");

    onMounted(() => {
      auth.onAuthStateChanged((currentUser) => {
        user.value = currentUser;
      });
    });

    const showChangeUsernameForm = () => {
      showChangeUsername.value = !showChangeUsername.value;
    };

    const changeUsername = () => {
      // if (newUsername.value) {
      //   auth.currentUser
      //     .updateProfile({
      //       displayName: newUsername.value,
      //     })
      //     .then(() => {
      //       console.log("Username changed successfully!");
      //       newUsername.value = "";
      //       showChangeUsername.value = false;
      //     })
      //     .catch((error) => {
      //       console.error(error);
      //     });
      // } else {
      //   console.error("New username is required!");
      // }
    };
    // const deleteAccount = () => {
    //   if (confirm("Are you sure you want to delete your account?")) {
    //     user.value
    //       .delete()
    //       .then(() => {
    //         console.log("Account deleted successfully!");
    //       })
    //       .catch((error) => {
    //         console.error(error);
    //       });
    //   } else {
    //     console.log("Account deletion cancelled!");
    //   }
    // };

    const saveMusic = () => {
      console.log("Music saved successfully!");
    };
    const logout = () => {
      auth
        .signOut()
        .then(() => {
          console.log("Logged out successfully!");
          signOutCurrentUser();
          loggedIn.value = false;
          setSelectedIndex(1);
          router.push("/login");
        })
        .catch((error) => {
          console.error(error);
        });
    };

    return {
      user,
      showChangeUsername,
      newUsername,
      showChangeUsernameForm,
      changeUsername,
      // deleteAccount,
      saveMusic,
      logout,
    };
  },
};
</script>

<style scoped>
.profile-box {
  display: flex;
  align-items: center;
  justify-content: center;
  /*border: 3px solid whitesmoke;*/
  border-radius: 6px;
  padding: 20px;
  margin: 20px auto;
  max-inline-size: 700px;
  background-color: rgb(178, 197, 237);
  font-family: "Sporting", Helvetica;
  color: rgb(55, 96, 211);
}

.profile-details {
  display: flex;
  align-items: center;
}

.profile-details img {
  margin-right: 16px;
  border-radius: 50px;
}

.profile-actions {
  padding-left: 30px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}

.welcome {
  display: flex;
  flex-direction: column;
}

.email {
  margin-top: 3px;
}

input {
  margin-bottom: 8px;
  margin-left: 6px;
  width: 100px;
  background-color: rgb(178, 197, 237);
  border-radius: 3px;
  font-family: "Sporting", Helvetica;
  font-size: 10px;
}
::placeholder{
  color: rgb(55, 96, 211);
  border-color: rgb(55, 96, 211);
}

button {
  margin-top: 8px;
  margin-left: 6px;
}
</style>
