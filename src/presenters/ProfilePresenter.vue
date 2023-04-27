<template>
  <TopButtonsView />
  <ProfileboxView />
  <SoundsView />
  <SavedSoundsBoxView />
  <ModifySoundsView />
  <EqualizerView />
  <FooterView />
</template>
<script>
/*
    This presenter shows data regarding the active profile and
    the sounds of the users.
    It also includes the options for modifying the existing 
    sound used for the synth.
*/

import ModifySoundsView from "@/views/ModifySoundsView.vue";
import ProfileboxView from "@/views/ProfileboxView.vue";
import SoundsView from "@/views/SoundsView.vue";
import EqualizerView from "@/views/EqualizerView.vue";
import TopButtonsView from "@/views/TopButtonsView.vue";
import SavedSoundsBoxView from "@/views/SavedSoundsBoxView.vue";
import FooterView from "@/views/FooterView.vue";

export default {
  name: "ProfilePresenter",
  components: {
    ProfileboxView,
    SoundsView,
    ModifySoundsView,
    EqualizerView,
    TopButtonsView,
    SavedSoundsBoxView,
    FooterView,
  },
};
</script>
<style>
body {
  /* background-image: url("https://img.freepik.com/premium-photo/abstract-music-background_476363-6545.jpg?w=2000"); */
  background-size: 100%;
  background-color: rgb(0, 0, 0);
}
button {
  font-family: "Sporting", Helvetica;
  font-size: 16px;
  border-radius: 5px;
  background-color: rgb(178, 197, 237);
  border-color: rgb(55, 96, 211);
  color: rgb(55, 96, 211);
}

</style>
