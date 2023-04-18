<template>
    <LoginView/>
    <CreateAccountView/>
    <SavedSoundsBoxView></SavedSoundsBoxView>
</template>
<script>
/* 
    This presenter shows either login view or create account view
    depending on wether the user is logged in or wants to create 
    account.    
*/

import CreateAccountView from '@/views/CreateAccountView.vue';
import LoginView from '@/views/LoginView.vue';
import SavedSoundsBoxView from '@/views/SavedSoundsBoxView.vue';

export default{
    name: "ProfileActionPresenter",
    components: { CreateAccountView, LoginView, SavedSoundsBoxView },
}
</script>