<template>
  <ProfileboxView />
  <SoundsView />
  <ModifySoundsView />
  <EqualizerView />
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

export default {
  name: "ProfilePresenter",
  components: { ProfileboxView, SoundsView, ModifySoundsView, EqualizerView },
};
</script>
<style>
body {
  /* background-image: url("https://img.freepik.com/premium-photo/abstract-music-background_476363-6545.jpg?w=2000"); */
  background-size: 100%;
  background-image: url("https://hotpotmedia.s3.us-east-2.amazonaws.com/8-xT9xypBeZh00cRt.png?nc=1");
}
</style>
