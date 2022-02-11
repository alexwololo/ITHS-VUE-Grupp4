<template>
  <div id="container">
    <div style="grid-area: profilepic"><EmptyProfilePic /></div>
    <div style="grid-area: info"><InfoBox /></div>
    <div style="grid-area: bar"><CountDown /></div>
    <div style="grid-area: buttons"><YesNoDate /></div>
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
  #container {
    display: grid;
    grid-gap: 0.5em;
    grid-template-areas:
      'profilepic     info'
      'bar            buttons';
    grid-template-columns: 50%;
    grid-template-rows: 25%;
    height: auto;
    justify-content: center;
  }

  @media (max-width: 375px) {
    #container {
      display: grid;
      grid-gap: 0.5em;
      grid-template-areas:
        'profilepic'
        'info'
        'bar'
        'buttons';
      grid-template-columns: 50%;
      grid-template-rows: auto;
      height: auto;
      justify-content: center;
    }
  }
</style>
