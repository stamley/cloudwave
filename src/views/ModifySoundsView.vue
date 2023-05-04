<template>
  <div class="profile-box">
    <label for="instrument-select" class="selectInstrument">Select an Instrument:</label>
    <select v-model="selectedInstrument" @change="updateSelectedIndex">
      <option v-for="(instrument, index) in instrumentOptions" :key="index" :value="instrument">
        {{ instrument }}
      </option>
    </select>
  </div>
</template>

<script>
import { setSelectedIndex, getSelectedIndex } from "../components/selectedIndex.js";
import { updateUserData } from "../firebaseModel.js";
export default {
  data() {
    return {
      selectedInstrument: "Piano",
      instrumentOptions: [
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
    updateSelectedIndex() {
      const index = this.instrumentOptions.indexOf(this.selectedInstrument) + 1;
      setSelectedIndex(index);
      getSelectedIndex();
      // setIndexValue(index)
      updateUserData();
      console.log(`You chose ${this.selectedInstrument} with index ${index}`);
    },
  },
};
</script>

<style scoped>
.profile-box {
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

.selectInstrument {
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
