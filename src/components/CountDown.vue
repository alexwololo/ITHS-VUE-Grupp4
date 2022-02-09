<template>
  <div class="loading-bar">
    <div class="percentage" :style="{ width: percentage + '%' }" />
  </div>
</template>

<script>
  export default {
    data() {
      return {
        percentage: 100
      }
    },
    created() {
      let intval = setInterval(() => {
        if (this.percentage < 101) this.percentage -= 0.1
        else clearInterval(intval)
      }, 1)
    }
  }
</script>

<style lang="scss">
  //"Lådan" till bar:en
  .loading-bar {
    position: relative;
    width: 400px;
    height: 30px;
    margin: auto;
    background-color: rgb(221, 221, 221);
    box-shadow: inset 0 -3em 3em rgb(139, 139, 139),
      0 0 0 2px rgba(139, 139, 139, 0.411),
      0.3em 0.3em 1em rgba(255, 255, 255, 0.3);
  }

  //Den rörliga delen av bar:en
  .percentage {
    position: absolute;
    height: 100%;
    background-color: #ae74ffee;
  }
</style>
