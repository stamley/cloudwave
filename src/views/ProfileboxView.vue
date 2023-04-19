<template>
  <div class="profile-box">
    <div class="profile-details">
      <h2>Welcome {{ profile.username }}</h2>
      <p><strong>Email:</strong> {{ profile.email }}</p>
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
        username: "John",
        email: "john@gmail.com",
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
}

.profile-details {
  flex-grow: 1;
}

.profile-actions {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}

input {
  margin-bottom: 8px;
}

button {
  margin-top: 8px;
}
</style>
