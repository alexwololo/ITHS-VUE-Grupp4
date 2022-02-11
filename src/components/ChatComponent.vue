<script>
export default {
  data() {
    return { bot: [], convo: [], answer: 'Hej!', messages: ""}
  },
  methods: {
    chatMessages() {
      this.convo.push(this.messages)
      console.log(this.convo)
      setTimeout(this.chatBot, 3000)

    },
   chatBot() {
      this.bot.push(this.answer)
      console.log(this.bot)

},
}
}
</script>
<template>
<h1>Chat</h1>
<div v-if="this.convo.messages !== null" />
<ul v-for="message in this.convo" :key="message">
<li>
<p id="chatMessage">{{ message }}</p></li>
</ul>
<div v-if="this.bot.answer== null" />
<ul v-for="answers in this.bot" :key="answers">
<li>
<p id="chatAnswers">{{ answers }}</p></li>
</ul>
<input id="chatInput" v-model="messages" type="text" />
<input @click="chatMessages()" type="button" value="Skicka!" />

</template>

<style scoped>
  #chatMessage {
    background-color: rgb(92, 209, 82);
    color:white;
    width: 20%;
    padding: 5px;
    border-radius: 7px;

  }

  #chatAnswers {
    background-color: rgb(54, 138, 206);
    color:white;
    width: 20%;
    padding: 5px;
    border-radius: 7px;

  }

  #chatInput {
    margin-top: 200px;
  }
</style>
