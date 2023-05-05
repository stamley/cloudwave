<template>
  <div class="container">
    <footer>
      <h3>Copyright © {{ currentYear }} Group 2 . All rights reserved.</h3>
      <h3>Stöööödd oss swish nummer : 0700310177</h3>
    </footer>
  </div>
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

<style scoped>
.container {}

footer {
  font-family: "Sporting", Helvetica;
  font-size: 12px;
  border-color: rgb(55, 96, 211);
  color: rgb(55, 96, 211);
  background-color: rgb(178, 197, 237);
  padding: 10px;
  text-align: center;
  /*margin-top: auto;*/
  /* position: absolute; */
  width: 100%;
  bottom: 0;
}
</style>
