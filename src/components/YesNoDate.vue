<script>
  export default {
    methods: {
      onYes() {
        alert('Yes')
      },
      onNo() {
        alert('No')
      }
    }
  }
</script>

<template>
  <div @click="onYes" type="button" value="Yes?">
    <img alt="" src="/assets/thumb-up.svg" />
  </div>
  <div @click="onNo" type="button" value="No?">
    <img alt="" src="/assets/thumb-down.svg" />
  </div>
</template>

<style>
  img {
    float: right;
    width: 10%;
    background-color: white;
    border-radius: 40px;
    margin: 60px;
    padding: 20px;
    box-shadow: inset 0 -3em 3em rgb(139, 139, 139),
      0 0 0 2px rgba(139, 139, 139, 0.411),
      0.3em 0.3em 1em rgba(255, 255, 255, 0.3);
  }
</style>
