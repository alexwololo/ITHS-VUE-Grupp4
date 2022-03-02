<template>
  <ResponsiveNavigation
    :nav-links="navLinks"
    background="#fff"
    link-color="#777"
    hover-background="#ddd"
  />

  <div class="icbreaker-container">
    <div class="icebreaker-info">
      <h1>
        Vi har satt ihop ett par frågor som kan hjälpa dig att föra ditt samtal
        vidare
      </h1>
      <p>Välj en av nedanstående frågor för att bibehålla er gnista!</p>
    </div>
    <div class="icbreaker-questions">
      <ul>
        <li><icebreaker />{{ randomQuestion }}</li>
        <li><icebreaker />{{ randomQuestion }}</li>
        <li><icebreaker />{{ randomQuestion }}</li>
        <li><icebreaker />{{ randomQuestion }}</li>
        <li><icebreaker />{{ randomQuestion }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
  import ResponsiveNavigation from '../components/ResponsiveNavigation.vue'

  export default {
    components: {
      ResponsiveNavigation
    },
    data() {
      return {
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
          'Om du skulle starta en organisation inom välgörenhet, vad skulle det isåfall vara?',
          'Vad är det roligaste du sett online under senare tid?',
          'Vad innebär självförrbättring för dig?',
          'Finns det någon typ webbsida eller app som inte existerar i dagsläget, men som du verkligen önskar gjorde?',
          'När någon får reda på till exempel vad du jobbar med eller var du kommer ifrån, finns det någon följdfråga som de ställer som återkommer ofta?',
          'Är du som mest produktiv på morgonen eller kvällen? Tror du att det är möjligt att förändra detta och vänja sig till ett nytt schema, isåfall hur?',
          'Finns det något ämne du kan prata om non-stop i 20 minuter, utan någon förberedelse?',
          'Har du någon quilty pleasure?',
          'Finns det någon person som inspirerar dig?',
          'Vilka ämnen borde man lära sig i skolan och vilka borde man inte?',
          'Vilket är det största fordonet som du har kört?',
          'Vilken ny regel tycker du ska införas i den sport som du är mest intresserad av?',
          'Hur ser den perfekta fruskosten ut för dig?',
          'Om du kunde välja dina drömmar, vad skulle du föredra att drömma om?',
          'Vad säger dig mest om en person?',
          'Vilka är dom bästa skorna som du någonsin haft?',
          'Vilken är din favorit kombination av mat?',
          'Vad önskar du var olagligt?',
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
          'Hur ofta dansar du?'
        ]
      }
    },
    computed: {
      randomQuestion() {
        let q = this.questions.length
        let icebreaker = Math.floor(Math.random() * q)
        return this.questions[icebreaker]
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
    background-color: rgba(255, 255, 255, 0.5);
  }

  @media (max-width: 768px) {
    .icbreaker-container {
      margin: 40px auto;
      padding-left: 20%;
      padding-right: 20%;
      text-align: center;
    }
  }
</style>
