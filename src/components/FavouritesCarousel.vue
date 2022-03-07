<template>
  <div class="carousel">
    <div class="inner" ref="inner" :style="innerStyles">
      <div class="card" v-for="user in users" :key="user.id">
        <router-link class="link-style" :to="'/favorite/' + user.id"
          ><img
            :src="usersData[user.id - 1].picture"
            alt="Profile picture"
            class="profile-picture2"
          />
        </router-link>
      </div>
    </div>
  </div>
  <div class="button-container">
    <img @click="prev" src="../../assets/arrow-left.svg" width="30" />
    <img @click="next" src="../../assets/arrow-right.svg" width="30" />
  </div>
</template>

<script>
  import usersData from '../og-profiles.json'

  export default {
    data() {
      return {
        users: JSON.parse(localStorage.getItem('favoritedProfiles')),
        usersData: usersData,
        innerStyles: {},
        step: '',
        transitioning: false
      }
    },

    mounted() {
      this.setStep()
      this.resetTranslate()
    },

    methods: {
      setStep() {
        const innerWidth = this.$refs.inner.scrollWidth
        if (this.users) {
          const totalCards = this.users.length
          this.step = `${innerWidth / totalCards}px`
        } else {
          const totalCards = 1
          this.step = `${innerWidth / totalCards}px`
        }
      },

      next() {
        if (this.transitioning) return

        this.transitioning = true

        this.moveLeft()

        this.afterTransition(() => {
          const user = this.users.shift()
          this.users.push(user)
          this.resetTranslate()
          this.transitioning = false
        })
      },

      prev() {
        if (this.transitioning) return
        this.transitioning = true
        this.moveRight()
        this.afterTransition(() => {
          const user = this.users.pop()
          this.users.unshift(user)
          this.resetTranslate()
          this.transitioning = false
        })
      },

      moveLeft() {
        this.innerStyles = {
          transform: `translateX(-${this.step})
                      translateX(-${this.step})`
        }
      },

      moveRight() {
        this.innerStyles = {
          transform: `translateX(${this.step})
                      translateX(-${this.step})`
        }
      },

      afterTransition(callback) {
        const listener = () => {
          callback()
          this.$refs.inner.removeEventListener('transitionend', listener)
        }
        this.$refs.inner.addEventListener('transitionend', listener)
      },

      resetTranslate() {
        this.innerStyles = {
          transition: 'none',
          transform: `translateX(-${this.step})`
        }
      }
    }
  }
</script>

<style scoped>
  .carousel {
    max-width: 100%;
    overflow: hidden;
  }

  .inner {
    width: 100%;
    height: 200px;
    margin-left: 150px;
    white-space: nowrap;
    transition: transform 0.2s;
    display: flex;
    justify-content: center;
  }

  .card {
    width: 90px;
    height: 150px;
    margin-left: 40px;
    margin-right: 40px;
    background-color: white;
    display: inline-flex;
    color: black;
    border-radius: 4px;
    align-items: center;
    justify-content: center;
  }

  .profile-picture2 {
    align-self: center;
    width: 150px;
    border: 2px solid grey;
    border-radius: 50%;
    margin-top: 0.75rem;
  }

  button {
    margin-right: 5px;
    margin-top: 10px;
  }

  .button-container {
    margin-left: 1rem;
    margin-right: 1rem;
    margin-bottom: 1rem;
    display: flex;
    justify-content: space-between;
  }
</style>
