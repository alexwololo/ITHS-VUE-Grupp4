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

<style scoped>
  img {
    width: 10%;

    background-color: aliceblue;
    border-radius: 60px;
    margin: 50px;
    border: solid aliceblue 20px;
  }
</style>
