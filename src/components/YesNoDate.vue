<template>
  <img src="/assets/thumb-up.svg" @click="onYes" />
  <img src="/assets/thumb-down.svg" @click="onNo" />
</template>

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

<style scoped>
  img {
    width: auto;
    background-color: white;
    border-radius: 40px;
    margin-left: 30px;
    margin-right: 30px;
    padding: 20px;
    box-shadow: inset 0 -3em 3em rgb(139, 139, 139),
      0 0 0 2px rgba(139, 139, 139, 0.411),
      0.3em 0.3em 1em rgba(255, 255, 255, 0.3);
  }
  @media (max-width: 375px) {
    img {
      width: auto;
      background-color: white;
      padding: 30px;
      border-radius: 40px;
      margin: 10px;
      box-shadow: inset 0 -3em 3em rgb(139, 139, 139),
        0 0 0 2px rgba(139, 139, 139, 0.411),
        0.3em 0.3em 1em rgba(255, 255, 255, 0.3);
    }
  }
</style>
