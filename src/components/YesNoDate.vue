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
  <div @click="onYes" type="button">
    <img alt="" src="/assets/thumb-up.svg" />
  </div>
  <div @click="onNo" type="button">
    <img alt="" src="/assets/thumb-down.svg" />
  </div>
</template>

<style scoped>
  img {
    width: 20%;
    background-color: white;
    border-radius: 40px;
    display: block;
    margin-left: auto;
    margin-right: auto;
    box-shadow: inset 0 -3em 3em rgb(139, 139, 139),
      0 0 0 2px rgba(139, 139, 139, 0.411),
      0.3em 0.3em 1em rgba(255, 255, 255, 0.3);
  }
</style>
