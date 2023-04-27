<template>
  <div class="equalizer">
    <div v-for="slider in sliders" :key="slider.name" class="slider">
      <input type="range" v-model="slider.value" min="0" max="100" step="1" />
      <div class="slider-value">{{ slider.label }}: {{ slider.value }}</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      sliders: [
        { name: "volume", label: "Volume", value: 50 },
        { name: "bass", label: "Bass", value: 50 },
        { name: "treble", label: "Treble", value: 50 },
        { name: "midrange", label: "Midrange", value: 50 },
        { name: "balance", label: "Balance", value: 50 },
      ],
    };
  },
};
</script>

<style scoped>
.equalizer {
  display: flex;
  align-items: center;
  justify-content: center;
  /*border: 3px solid whitesmoke;*/
  background-color: rgb(178, 197, 237);

  border-radius: 6px;
  padding: 50px;
  margin: 10px auto;
  max-inline-size: 625px;
  font-family: "Sporting", Helvetica;
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
  height: 1px;
  background: rgb(55, 96, 211);
  outline: none;
  border-radius: 5px;
  margin: 10px -10px;
  transform: rotate(-90deg);
}

.slider input[type="range"]::-webkit-slider-thumb {
  -webkit-appearance: none;
  width: 10px;
  height: 15px;
  background: rgb(55, 96, 211);
  border-radius: 16%;
  cursor: pointer;
}

.slider-value {
  font-size: 14px;
  margin-top: 40px;
  color: rgb(55, 96, 211);
}
</style>
