<template>
  <ResponsiveNavigation
    :nav-links="navLinks"
    background="#fff"
    link-color="#5E5E5E"
    hover-background="#ddd"
  />

  <div class="icbreaker-container">
    <div class="icebreaker-info">
      <h1>
        Vi har satt ihop ett par frågor som kan hjälpa dig att föra ditt samtal
        vidare
      </h1>
      <p>
        Tryck på en av nedanstående frågor för att skicka ditt meddelande och
        bibehåll er gnista!
      </p>
    </div>
    <div class="icbreaker-questions">
      <ul>
        <router-link id="router" :to="'/chat/' + this.$route.params.profileid">
          <li
            @click="sendQuestion($event)"
            v-for="question in questionsList"
            :key="question"
          >
            {{ randomQuestion() }}
          </li></router-link
        >
      </ul>
    </div>
    <button class="reloadBtn" @click="reloadPage">Uppdatera</button>
  </div>
</template>

<script>
  import ResponsiveNavigation from '../components/ResponsiveNavigation.vue'
  import usersData from '../og-profiles.json'

  export default {
    components: {
      ResponsiveNavigation
    },
    data() {
      return {
        message: '',
        user: usersData,
        questionsList: [{ id: 1 }, { id: 2 }, { id: 3 }],
        navLinks: [
          {
            text: 'Home',
            path: '/lounge',
            icon: 'ion-ios-home'
          },
          {
            text: 'Start dating',
            path: '/date',
            icon: 'ion-ios-thumbs-up'
          },
          {
            text: 'Messages',
            path: '/chat',
            icon: 'ion-ios-mail'
          },
          {
            text: 'Favourites',
            path: '/favorites',
            icon: 'ion-ios-heart'
          },
          {
            text: 'Edit profile',
            path: '/edit',
            icon: 'ion-ios-create'
          },
          {
            text: 'Log out',
            path: '/',
            icon: 'ion-ios-log-out'
          }
        ],
        questions: [
          'Om du skulle starta en organisation inom välgörenhet, vad skulle det isåfall vara om?',
          'Vad är det roligaste du sett online under senare tid?',
          'Vad innebär självförbättring för dig?',
          'Finns det någon typ webbsida eller app som inte existerar i dagsläget, men som du verkligen önskar gjorde?',
          'När någon får reda på till exempel vad du jobbar med eller var du kommer ifrån, finns det någon följdfråga som de ställer som ofta återkommer?',
          'Är du som mest produktiv på morgonen eller kvällen? Tror du att det är möjligt att förändra detta och vänja sig till ett nytt schema, isåfall hur?',
          'Finns det något ämne du kan prata om non-stop i 20 minuter, utan någon förberedelse?',
          'Har du någon quilty pleasure?',
          'Finns det någon person som inspirerar dig?',
          'Vilka ämnen borde man lära sig i skolan och vilka borde man inte?',
          'Vilket är det största fordonet som du har kört?',
          'Vilken ny regel tycker du ska införas i den sport som du är mest intresserad av?',
          'Hur ser den perfekta frukosten ut för dig?',
          'Om du kunde välja dina drömmar, vad skulle du föredra att drömma om?',
          'Vad säger dig mest om en person?',
          'Vilka är dom bästa skorna som du någonsin haft?',
          'Vilken är din favorit kombination av mat?',
          'Finns det något du önskar var olagligt?',
          'Vad är ett problem du har, som du anser är unikt för dig?',
          'Vad motiverar dig mest?',
          'Vilken är den bästa platsen för dig för att avnjuta en god kopp kaffe?',
          'Vilken färdighet eller talang skulle du helst vilja lära dig?',
          'Vilken kultur skulle du vilja lära dig mer om?',
          'Vilket stort problem tror du tekniken kommer att lösa härnäst?',
          'Vilket är det största äventyret du har varit med om?',
          'Vad tycker du gör en bra dag?',
          'Vad vill du göra när du går i pension?',
          'Vilka offentliga utrymmen trivs du bäst i?',
          'Vem var din favorit lärare?',
          'Hur ofta dansar du?',
          'Vilken leksak hatade du som mest som barn?',
          'Finns det något tillfälle då du var helt utanför din comfort-zone?',
          'Vad är det mest kreativa du har åstadkommit?',
          'Är det någonting du ser fram emot?',
          'Tror du att det universum vi lever i är en simulering?',
          'Vilket är det sämsta rådet du någonsin fått?',
          'Vad är det som utmärker sig mest i den stad du bor i?'
        ]
      }
    },
    methods: {
      randomQuestion() {
        let q = this.questions.length
        let icebreaker = Math.floor(Math.random() * q)
        return this.questions[icebreaker]
      },
      reloadPage() {
        window.location.reload()
      },
      sendQuestion(event) {
        let chosenQuestion = event.target.innerText
        localStorage.setItem('chosenQuestion', chosenQuestion)
        console.log(event.target.innerText)
      }
    }
  }
</script>

<style scoped>
  .icbreaker-container {
    min-width: 200px;
    padding: 60px 30px;
    margin: 60px 30%;
    text-align: center;
    background-color: rgb(255, 255, 255);
    border-radius: 1rem;
  }

  #router {
    text-decoration: none;
    color: black;
  }

  .reloadBtn {
    font-family: 'Roboto', sans-serif;
    box-shadow: inset 0 -0.6em 0 -0.35em rgba(0, 0, 0, 0.17);
    background-color: #6200ee;
    border: none;
    border-radius: 4px;
    color: white;
    padding: 15px 75px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 4px 2px;
    cursor: pointer;
    width: 100%;
  }

  .reloadBtn:hover,
  .reloadBtn:focus {
    background-color: #4a00b3;
  }

  ul li:hover {
    background-color: rgb(197, 188, 188);
  }

  .icebreaker-info p {
    font-weight: bold;
  }

  .icbreaker-questions ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  .icbreaker-questions li {
    text-align: left;
    padding: 5px 10px;
    background-color: white;
    border: 1px solid black;
    border-radius: 10px;
    margin: 20px auto;
    padding: 40px 40px;
    min-height: 130px;
    cursor: pointer;
  }

  @media (max-width: 768px) {
    .icbreaker-container {
      margin: 0;
      padding-left: 20%;
      padding-right: 20%;
      text-align: center;
      border-radius: 0;
    }
  }
</style>
