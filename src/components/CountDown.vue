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
    border: 1px solid black;
    margin: auto;
  }

  //Den rörliga delen av bar:en
  .percentage {
    position: absolute;
    height: 100%;
    background-color: #ad74ff;
  }
</style>
