<template>
  <div>
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
      musicOptions: ["Pop", "Rock", "Jazz", "Classical"],
    };
  },
  methods: {
    selectedType() {
      console.log(" you chose " + this.selectedMusic);
    },
  },
};
</script>
