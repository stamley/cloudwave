<template>
  <div class="profile-box">
    <div class="profile-details">
      <img
        src="https://ichef.bbci.co.uk/news/999/cpsprodpb/15951/production/_117310488_16.jpg"
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
        <input type="text" v-model="newUsername" placeholder="New Username" />
        <button type="submit">Save</button>
      </form>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from "vue";
import { auth } from "../firebaseModel";
import { useRouter } from "vue-router";

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
      showChangeUsername.value = true;
    };

    const changeUsername = () => {
      if (newUsername.value) {
        user.value
          .updateProfile({
            displayName: newUsername.value,
          })
          .then(() => {
            console.log("Username changed successfully!");
            newUsername.value = "";
            showChangeUsername.value = false;
          })
          .catch((error) => {
            console.error(error);
          });
      } else {
        console.error("New username is required!");
      }
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
  border: 3px solid whitesmoke;
  border-radius: 20px;
  padding: 20px;
  margin: 50px auto;
  max-inline-size: 700px;
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
}

button {
  margin-top: 8px;
}
</style>
