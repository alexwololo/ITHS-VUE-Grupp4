<template>
  <CountDown />
  <YesNoDate />
</template>

<script>
  import CountDown from '../components/CountDown.vue'
  import YesNoDate from '../components/YesNoDate.vue'

  export default {
    components: {
      CountDown,
      YesNoDate
    }
  }
</script>
