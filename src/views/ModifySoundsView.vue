<template>
  <div class="profile-box">
    <label for="music-select">Select a Music:</label>
    <select v-model="selectedMusic" @change="selectedType">
      <option
        v-for="(music, index) in musicOptions"
        :key="index"
        :value="music"
      >
        {{ music }}
      </option>
    </select>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectedMusic: "",
      musicOptions: ["Piano", "Guitar", "Flute", "Classical"],
    };
  },
  methods: {
    selectedType() {
      console.log(" you chose " + this.selectedMusic);
    },
  },
};
</script>
<style scoped>
.profile-box {
  display: flex-end;
  align-items: center;
  justify-content: center;
  border: 3px solid white;
  border-radius: 10px;
  padding: 20px;
  margin: 50px auto;
  max-inline-size: 700px;
  /* background-image: url("https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-eiffel-tower.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat; */
}
</style>
