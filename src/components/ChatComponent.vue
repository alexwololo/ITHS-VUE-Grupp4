<template>
  <div id="wrapper">
    <div id="mainChat">
      <img id="chatImg" width="50" :src="users[profileId].picture" alt="" />
      <h3>Meddelanden</h3>
      <div id="icebreaker">
        <p>
          <router-link
            :to="'/icebreaker/' + this.$route.params.profileid"
            id="icebreaker"
            >Icebreaker-frågor</router-link
          >
        </p>
      </div>
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
      <div id="inputs">
        <input id="chatInput" v-model="messages" type="text" />
        <input
          @click="chatMessages()"
          @keydown.enter="chatMessages()"
          type="button"
          id="button"
          value="Skicka!"
        />
      </div>
    </div>
  </div>
</template>

<script>
  import usersData from '../og-profiles.json'
  export default {
    data() {
      return {
        users: usersData,
        profileId: this.$route.params.profileid - 1,
        newArray: [],
        bot: [],
        convo: [],
        answer: 'Hej ' + this.$store.state.user + '!',
        answer2: 'Hur mår du?',
        answer3: 'Härligt! Vill du ses på en fika?',
        messages: ''
      }
    },
    created() {
      if (localStorage.getItem('chosenQuestion')) {
        let question = localStorage.getItem('chosenQuestion')
        if (question.length) {
          this.messages = question
          this.chatMessages()
          localStorage.removeItem('chosenQuestion')
        }
      }
    },
    methods: {
      sendChat() {
        this.chatMessages()
      },
      chatMessages() {
        this.convo.push(this.messages)
        console.log(this.convo)
        setTimeout(this.chatBot, 3100)
        setTimeout(this.chatBot2, 5000)
        setTimeout(this.chatBot3, 3000)
        this.messages = ''
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

<style lang="scss" scoped>
  h3 {
    color: #000;
  }
  #chatMessage {
    background-color: rgb(92, 209, 82);
    color: white;
    width: 50%;
    padding: 5px;
    border-radius: 7px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.3), 0 6px 5px 0 rgba(0, 0, 0, 0.3);
  }

  #chatAnswers {
    background-color: rgb(54, 138, 206);
    color: white;
    width: 50%;
    padding: 5px;
    border-radius: 7px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.3), 0 6px 5px 0 rgba(0, 0, 0, 0.3);
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
    margin-top: 53px;
  }

  #mainChat {
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: rgb(255, 255, 255);
    width: 80%;
    height: 500px;
    padding: 10px;
    border-radius: 1rem;
  }

  #button {
    font-size: 1rem;
    font-family: 'Roboto', sans-serif;
    background-color: #6200ee;
    box-shadow: inset 0 -0.6em 0 -0.35em rgba(0, 0, 0, 0.17);
    padding: 8px;
    color: white;
    border-radius: 4px;
    border: none;
    margin-left: 5px;
  }

  #button:hover,
  #button:focus {
    background-color: #4a00b3;
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
    width: 270px;
    border: solid grey 1px;
  }

  #chatImg {
    border-radius: 50%;
    border: 1px solid grey;
  }
  #icebreaker {
    text-align: center;
    width: 80%;
    margin-bottom: 20px;
    text-decoration: none;
    color: #000;
  }
  #icebreaker #icebreaker {
    background-color: #6200ee;
    color: white;
    box-shadow: inset 0 -0.6em 0 -0.35em rgba(0, 0, 0, 0.17);
    border-radius: 4px;
    padding: 0.7em 1.4em;
  }

  #icebreaker #icebreaker:hover,
  #icebreaker #icebreaker:focus {
    background-color: #4a00b3;
  }

  @media screen and (min-width: 980px) {
    #wrapper {
      margin-top: 61px;
    }
  }
</style>
