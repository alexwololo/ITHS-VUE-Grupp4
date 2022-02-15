<script>
  export default {
    data() {
      return {
        newArray: [],
        bot: [],
        convo: [],
        answer: 'Hej!',
        answer2: 'Hur mår du?',
        answer3: 'Härligt! Vill du ses på en fika?',
        messages: ''
      }
    },
    methods: {
      chatMessages() {
        this.convo.push(this.messages)
        console.log(this.convo)
        setTimeout(this.chatBot, 3100)
        setTimeout(this.chatBot, 3000)
        setTimeout(this.chatBot2, 5000)
        setTimeout(this.chatBot3, 3000)
      },
      chatBot() {
        if (this.newArray < 1) {
          this.bot.push(this.answer)
          console.log(this.bot)
        }
      },
      chatBot2() {
        if (this.newArray < 1) {
          this.bot.push(this.answer2)
        }
        this.bot.push(this.answer)
        console.log(this.bot)
      },
      chatBot2() {
        this.bot.push(this.answer2)
      },
      chatBot3() {
        if (this.convo.length > 1) {
          this.newArray.push(this.answer3)
          this.bot = []
          this.answer2 = null
          console.log(this.newArray)
          console.log(this.bot)
        }
      }
    }
  }
</script>
<template>
  <div id="wrapper">
    <div id="mainChat">
      <h3>Meddelanden</h3>
      <div id="chatBubble">
        <ul v-for="answers in this.bot" :key="answers">
          <li id="list2">
            <p id="chatAnswers">{{ answers }}</p>
          </li>
        </ul>
        <ul v-for="answers3 in this.newArray" :key="answers3">
          <li id="list3">
            <p id="chatAnswers">{{ answers3 }}</p>
          </li>
        </ul>
        <ul v-for="message in this.convo" :key="message">
          <li id="list1">
            <p id="chatMessage">{{ message }}</p>
          </li>
        </ul>
      </div>
      <h3>DMs</h3>

      <div v-if="this.convo.messages !== null" />
      <ul v-for="message in this.convo" :key="message">
        <li id="list1">
          <p id="chatMessage">{{ message }}</p>
        </li>
      </ul>
      <div v-if="this.bot.answer !== null" />
      <ul v-for="answers in this.bot" :key="answers">
        <li id="list2">
          <p id="chatAnswers">{{ answers }}</p>
        </li>
      </ul>
      <div v-if="this.newArray.answer3 !== null" />
      <ul v-for="answers3 in this.newArray" :key="answers3">
        <li class="lists">
          <p id="chatAnswers">{{ answers3 }}</p>
        </li>
      </ul>
      <div id="inputs">
        <input id="chatInput" v-model="messages" type="text" />
        <input
          @click="chatMessages()"
          type="button"
          id="button"
          value="Skicka!"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
  #chatMessage {
    background-color: rgb(92, 209, 82);
    color: white;
    width: 50%;
    padding: 5px;
    border-radius: 7px;
  }

  #chatAnswers {
    background-color: rgb(54, 138, 206);
    color: white;
    width: 50%;
    padding: 5px;
    border-radius: 7px;
  }

  #list1 {
    list-style-type: none;
    margin-right: 50px;
    margin-bottom: 0;
  }

  #list2 {
    list-style-type: none;
    margin-left: 70px;
    margin-bottom: 0;
  }

  #list3 {
    list-style-type: none;
    margin-left: 50px;
    margin-bottom: 0;
  }

  #wrapper {
    display: flex;
    justify-content: center;
    margin-top: 50px;
  }

  #mainChat {
    display: flex;
    flex-direction: column;
    background-color: rgba(255, 255, 255, 0.5);
    width: 80%;
    height: 500px;
    padding: 10px;
    border-radius: 10px;
  }

    margin-left: 50px;
    margin-bottom: 0;
  }

  #wrapper {
    display: flex;
    justify-content: center;
    margin-top: 50px;
  }

  #mainChat {
    display: flex;
    flex-direction: column;
    background-color: rgba(255, 255, 255, 0.5);
    width: 80%;
    height: 500px;
    padding: 10px;
    border-radius: 10px;
  }

  #button {
    background-color: #6200ee;
    padding: 8px;
    color: white;
    border-radius: 10px;
    border: none;
    margin-left: 5px;
    position: sticky;
  }

  #chatInput {
    border-radius: 7px;
    padding: 8px;
    border: none;
    border: solid grey 1px;
  }

  p {
    padding: 0;
    margin: 0;
  }

  #inputs {
    position: absolute;
    margin-top: 440px;
    margin-left: 10px;
  }

  #chatBubble {
    background-color: white;
    border-radius: 10px;
    height: inherit;
    width: 260px;
    border: solid grey 1px;
    margin-top: 380px;
    position: sticky;
  }
</style>
