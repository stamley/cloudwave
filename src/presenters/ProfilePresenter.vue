<template>
    <ProfileboxView/>
    <SoundsView/>
    <ModifySoundsView/>
    <EqualizerView />
    <TopButtonsView/>
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

export default {
  name: "ProfilePresenter",
  components: { ProfileboxView, SoundsView, ModifySoundsView, EqualizerView, TopButtonsView },
};
</script>
<style>
body {
  background-image: url("https://img.freepik.com/premium-photo/abstract-music-background_476363-6545.jpg?w=2000");
  background-size: 100%;
}
</style>
