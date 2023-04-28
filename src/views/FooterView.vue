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
  background-color: #883333;
  padding: 10px;
  text-align: center;
}
</style>
