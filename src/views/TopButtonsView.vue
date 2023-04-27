<template>
    <div class="container">
        <div class="imgDiv">
            <img src="../assets/logo.png" alt="icon">
        </div>
        <div class="buttons">
            <button class="deleteButton">Delete account</button>
            <button class="changeUserButton">Change User</button>
            <button class="changeMailButton">Change mail</button>
            <button class="changePassword">Change password</button>
        </div>
    </div>
</template>
<script>
</script>

<style scoped>

.container{
    width: 65%;
    margin-right: auto;
    margin-left: auto;
    display: grid;
    grid-template-columns: 20% auto;
    grid-template-rows:auto;
    grid-template-areas:
    "imgDiv buttons";
    padding-top: 20px;
    /*background-image: url(https://media1.giphy.com/media/M9TbsVzWI8YAEEJJ5u/giphy.gif?cid=6c09b952b4a564a8722f7078d8617830e3e24954ce826060&rid=giphy.gif&ct=s);*/
    background-size: contain;
    border-radius: 5px;
}

.imgDiv img{
    width: 60%;
    /*border-radius: 30%;*/
    height: auto;
    margin: 5px;
    /*border: solid;*/
}

.imgDiv{
    grid-area: imgDiv;
}

.buttons{
    padding-top: 10px;
    grid-area: buttons;
    display: grid;
    grid-template-columns: auto;
    grid-template-rows: auto;
    grid-template-areas:
    "deleteButton changeUserButton changeMailButton changePassword";
}

.buttons button{
    border-radius: 10px;
    margin: 30px;
    font-family: "Sporting", Helvetica;
    background-color: rgb(178, 197, 237);
    color: rgb(55, 96, 211);
}

.deleteButton{
    grid-area: deleteButton;
}

.changeUserButton{
    grid-area: changeUserButton;
}

.changeMailButton{
    grid-area: changeMailButton;
}

.changePassword{
    grid-area: changePassword;
}

.buttons button:active{
    background-color: black;
}
</style>>