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
        <h2>Welcome {{ profile.username }}</h2>
        <div class="email"><strong>Email:</strong> {{ profile.email }}</div>
      </div>
    </div>
    <div class="profile-actions">
      <button @click="showChangeUsernameForm">Change Username</button>
      <button @click="deleteAccount">Delete Account</button>
      <button @click="saveMusic">Save Music</button>
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
export default {
  name: "ProfileboxView",
  data() {
    return {
      profile: {
        username: "Ismail",
        email: "ismail@gmail.com",
      },
      newUsername: "",
      showChangeUsername: false,
    };
  },
  methods: {
    showChangeUsernameForm() {
      this.showChangeUsername = true;
    },
    changeUsername() {
      if (this.newUsername) {
        this.profile.username = this.newUsername;
        this.newUsername = "";
        console.log("Username changed successfully!");
        this.showChangeUsername = false;
      } else {
        console.error("New username is required!");
      }
    },
    deleteAccount() {
      if (confirm("Are you sure you want to delete your account?")) {
        console.log("Account deleted successfully!");
      } else {
        console.log("Account deletion cancelled!");
      }
    },
    saveMusic() {
      console.log("Music saved successfully!");
    },
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
