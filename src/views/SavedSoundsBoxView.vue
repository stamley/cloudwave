<template>
    <div class="box-container">
        <div class="sound-box">
            <div class="sound-scroll-box">
                <div v-for="sound in musicList" :key="sound.name" @click="playMusic(sound.url)">
                    {{ sound.name }}
                </div>
            </div>


        </div>
    </div>
</template>

<!-- <script>
import { getMusicList } from "@/firebaseModel.js";
export default {
    name: "SavedSoundsBoxView",
    data() {
        return {
            // sounds: ["'Piano' created 2023-03", "'Guitar' created 2023-04", "'Flute' created 2023-05", "'Drums' created 2023-06", "'SawtoothSynth' created 2023-07", "'SinewaveSynth' created 2023-08"]

            musicList: [],
            audio: null
        };
    },
    created() {
        getMusicList().then((musicList) => {
            this.musicList = musicList;
        });
    },

    methods: {
        playMusic(url) {
            console.log("you chose " + url + " to listen");
            if (this.audio) {
                this.audio.pause();
            }
            this.audio = new Audio(url);
            this.audio.play();
        },
    },
}
</script> -->


<!-- <script>
import { getMusicList } from "@/firebaseModel.js";
import { auth } from "@/firebaseModel.js"; // import auth from firebase.js

export default {
    name: "SavedSoundsBoxView",
    data() {
        return {
            musicList: [],
            audio: null
        };
    },
    async created() {
        try {
            const user = await new Promise((resolve) => {
                const unsubscribe = auth.onAuthStateChanged((user) => {
                    resolve(user);
                    unsubscribe();
                });
            });

            const musicList = await getMusicList(user.uid);
            this.musicList = musicList;
        } catch (error) {
            console.error(error);
        }
    },
    methods: {
        playMusic(url) {
            console.log("you chose " + url + " to listen");
            if (this.audio) {
                this.audio.pause();
            }
            this.audio = new Audio(url);
            this.audio.play();
        }
    }
};

</script> -->

<script>
import { getMusicList } from "@/firebaseModel.js";
import { auth, storage } from "@/firebaseModel.js";

export default {
    name: "SavedSoundsBoxView",
    data() {
        return {
            musicList: [],
            audio: null,
        };
    },
    async created() {
        try {
            const user = await new Promise((resolve) => {
                const unsubscribe = auth.onAuthStateChanged((user) => {
                    resolve(user);
                    unsubscribe();
                });
            });

            const musicList = await getMusicList(user.uid);
            this.musicList = musicList;

            // Listen for changes in the storage bucket
            storage.ref(`users/${user.uid}`).on("child_added", (snapshot) => {
                const url = snapshot.downloadURL;
                const title = snapshot.metadata.customMetadata.title;
                const artist = snapshot.metadata.customMetadata.artist;
                this.musicList.push({ url, title, artist });
            });
        } catch (error) {
            console.error(error);
        }
    },
    methods: {
        playMusic(url) {
            console.log("you chose " + url + " to listen");
            if (this.audio) {
                this.audio.pause();
            }
            this.audio = new Audio(url);
            this.audio.play();
        },
    },
};
</script>


<style scoped>
::-webkit-scrollbar {
    width: 12px;
}

::-webkit-scrollbar-track {
    /*-webkit-box-shadow: inset 0 0 3px     rgba(0,0,0,0.3); */
    border-radius: 6px;
}

::-webkit-scrollbar-thumb {
    border-radius: 6px;
    outline-style: solid;
    outline-width: 2px;
    /*-webkit-box-shadow: inset 0 0 3px     rgba(0,0,0,0.5); */
}

.sound-box {
    /*outline-style:ridge;*/
    /*outline-color: black;*/
    width: 700px;
    max-inline-size: 700px;
    border-radius: 6px;
    padding: 20px;
    /*margin: 50px auto;*/
    left: 10%;
    height: 120px;
    display: flex;
    flex-direction: row;
    background-color: rgb(178, 197, 237);
    justify-content: center;
}

.sound-scroll-box {
    font-family: "Sporting", Helvetica;
    color: rgb(55, 96, 211);
    font-size: 15px;
    outline-style: solid;
    border-radius: 6px;
    outline-color: rgb(55, 96, 211);
    outline-width: 2px;
    width: 70%;
    overflow: auto;
}

.box-container {
    display: flex;
    justify-content: center;

}

button {
    margin-left: 10px
}
</style>