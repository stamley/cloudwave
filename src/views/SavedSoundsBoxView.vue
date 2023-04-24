<template>
    <div class = "box-container">
        <div class="sound-box">
            <div v-for="sound in sounds" :key="sound.id">
                {{sound}}
            </div>
        </div>
    </div>
    <div>
        <button>Remove</button>
        <button>Modify</button>
    </div>
</template>

<script>
export default{
    name: "SavedSoundsBoxView",
    
    data(){
        return {
            sounds: ["'Piano' created 2023-03","'Guitar' created 2023-04","'Flute' created 2023-05", "'Drums' created 2023-06","'SawtoothSynth' created 2023-07","'SinewaveSynth' created 2023-08"]};
    }
}
</script>

<style>
.sound-box{
    outline-style:ridge;
    outline-color: black;
    width: 40%;
    left: 10%;
    height: 50px;
    overflow: auto;
    display: flex;
    flex-direction: column;
}
.box-container{
    display: flex; 
    justify-content: center;
}

</style>