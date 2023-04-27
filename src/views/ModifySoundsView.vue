<template>
  <div class="instrument-box">
    <label for="music-select" class="selecMusic">Select a instrument:</label>
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
      musicOptions: [
        "Piano",
        "Guitar",
        "Flute",
        "Drums",
        "SawtoothSynth",
        "Violin",
        "SinewaveSynth",
      ],
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
.instrument-box {
  display: flex-end;
  align-items: center;
  justify-content: center;
  /*border: 3px solid white;*/
  background-color: rgb(178, 197, 237);
  border-radius: 5px;
  padding: 20px;
  margin: 20px auto;
  max-inline-size: 700px;
  /* background-image: url("https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-eiffel-tower.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat; */
  font-family: "Sporting", Helvetica;
}
.selecMusic {
  color: rgb(55, 96, 211);
}
select {
  font-family: "Sporting", Helvetica;
  font-size: 12px;
  border-radius: 5px;
  background-color: rgb(178, 197, 237);
  border-color: rgb(55, 96, 211);
  color: rgb(55, 96, 211);
  margin-left: 10px;
}
</style>
