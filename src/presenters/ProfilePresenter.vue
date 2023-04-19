<template>
    <ProfileboxView/>
    <SoundsView/>
    <ModifySoundsView/>
    <TopButtonsView/>
</template>
<script>

/*
    This presenter shows data regarding the active profile and
    the sounds of the users.
    It also includes the options for modifying the existing 
    sound used for the synth.
*/

import ModifySoundsView from '@/views/ModifySoundsView.vue';
import ProfileboxView from '@/views/ProfileboxView.vue';
import SoundsView from '@/views/SoundsView.vue';
import TopButtonsView from '@/views/TopButtonsView.vue';

export default{
    name: "LoginPresenter",
    components: { ProfileboxView, SoundsView, ModifySoundsView, TopButtonsView },
}
</script>