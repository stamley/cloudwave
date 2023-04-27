<template>
  <footer>
    <h3>Copyright © {{ currentYear }} Group 2 . All rights reserved.</h3>
    <h3>Stöööödd oss swish nummer : 0700310177</h3>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      currentYear: new Date().getFullYear(),
    };
  },
};
</script>

<style>
footer {
  font-family: "Sporting", Helvetica;
  font-size: 12px;
  background-color: rgb(178, 197, 237);
  border-color: rgb(55, 96, 211);
  color: rgb(55, 96, 211);
  background-color: rgb(178, 197, 237);
  padding: 10px;
  text-align: center;
  /*margin-top: auto;*/
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
}
</style>
