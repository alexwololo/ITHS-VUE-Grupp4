<template>
  <div class="container">
    <div class="profilepic"><EmptyProfilePic /></div>
    <div class="info"><InfoBox /></div>
    <div class="bar"><CountDown /></div>
    <div class="buttons"><YesNoDate /></div>
  </div>
</template>

<script>
  import CountDown from '../components/CountDown.vue'
  import YesNoDate from '../components/YesNoDate.vue'
  import EmptyProfilePic from '../components/EmptyProfilePic.vue'
  import InfoBox from '../components/InfoBox.vue'

  export default {
    components: {
      CountDown,
      YesNoDate,
      EmptyProfilePic,
      InfoBox
    }
  }
</script>

<style scoped>
  .container {
    display: grid;
    grid-template-columns: auto;
    grid-template-rows: auto;
    grid-column-gap: 5px;
    grid-row-gap: 5px;
  }

  .profilepic {
    grid-area: 1 / 1 / 2 / 2;
  }
  .info {
    grid-area: 1 / 2 / 2 / 3;
  }
  .bar {
    grid-area: 2 / 1 / 3 / 2;
  }
  .buttons {
    grid-area: 2 / 2 / 3 / 3;
  }

  @media (max-width: 375px) {
    .container {
      display: grid;
      grid-template-columns: auto;
      grid-template-rows: auto;
      grid-column-gap: 5px;
      grid-row-gap: 5px;
    }

    .profilepic {
      grid-area: 1 / 1 / 2 / 2;
    }
    .info {
      grid-area: 2 / 1 / 3 / 2;
    }
    .bar {
      grid-area: 3 / 1 / 4 / 2;
    }
    .buttons {
      grid-area: 4 / 1 / 5 / 2;
    }
  }
</style>
