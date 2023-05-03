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
      selectedInstrument: "",
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
  border: 3px solid white;
  border-radius: 10px;
  padding: 20px;
  margin: 50px auto;
  max-inline-size: 700px;
}

.selecMusic {
  color: white;
}
</style>
