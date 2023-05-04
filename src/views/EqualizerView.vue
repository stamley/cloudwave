<template>
  <div class="equalizer">
    <div v-for="slider in sliders" :key="slider.name" class="slider">

      <input type="range" v-model="slider.value" min="-12" max="12" step="1" @input="updateSelectedIndex" />
      <div class="slider-value">{{ slider.label }}: {{ slider.value }}</div>
    </div>
  </div>
</template>

<script>
import { setselectedBass, getselectedBass, setselectedMid, getselectedMid, setselectedTreble, getselectedTreble } from "../components/selectedIndex.js";
import { updateUserData } from "../firebaseModel.js";
export default {
  data() {
    return {
      sliders: [
        { name: "bass", label: "Bass", value: 0 },
        { name: "midrange", label: "Midrange", value: 0 },
        { name: "treble", label: "Treble", value: 0 },

      ],
    };
  },
  methods: {
    updateSelectedIndex() {
      setselectedBass(this.sliders[0].value)
      getselectedBass()
      setselectedMid(this.sliders[1].value)
      getselectedMid()
      setselectedTreble(this.sliders[2].value)
      getselectedTreble()
      updateUserData();
    }

  }
};
</script>

<style scoped>
/* .equalizer {
  display: flex;
  align-items: center;
  justify-content: center;
  border: 3px solid whitesmoke;
  border-radius: 20px;
  padding: 50px;
  margin: 10px auto;
  max-inline-size: 625px;
} */
.equalizer {
  display: flex;
  align-items: center;
  justify-content: center;
  border: 3px solid whitesmoke;
  border-radius: 20px;
  padding: 30px;
  margin: 10px auto;
  max-inline-size: 625px;
}

.slider {
  margin: 0 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.slider input[type="range"] {
  -webkit-appearance: none;
  width: 100px;
  height: 5px;
  background: #eee;
  outline: none;
  border-radius: 5px;
  margin: 10px 0;
  transform: rotate(-90deg);
}

.slider input[type="range"]::-webkit-slider-thumb {
  -webkit-appearance: none;
  width: 20px;
  height: 20px;
  background: #2196f3;
  border-radius: 50%;
  cursor: pointer;
}

.slider-value {
  font-size: 14px;
  margin-top: 40px;
  color: white;
}
</style>
