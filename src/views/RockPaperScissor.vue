<template>
  <Layout>
    <section class="RockPaperScissor h-100">
      <button class="tip__btn">i</button>

      <section class="score-box m-auto d-flex center justify-content-around">
        <div>
          <h3>Comp</h3>
          <h1>{{ compScore }}</h1>
        </div>

        <h1 class="center">{{ whoWon }}</h1>

        <div>
          <h3>User</h3>
          <h1>{{ userScore }}</h1>
        </div>
      </section>

      <section class="comp">
        <figure class="comp__img-box m-auto">
          <button @click="startGame" class="comp__btn chose-btn border">
            <img
              v-show="compSelector == 0"
              src="@/assets/rps/rock.jpg"
              alt="rock"
              class="rounded-circle"
            >
            <img
              v-show="compSelector == 1"
              src="@/assets/rps/paper.jpg"
              alt="paper"
              class="rounded-circle"
            >
            <img
              v-show="compSelector == 2"
              src="@/assets/rps/scissor.jpg"
              alt="scissor"
              class="rounded-circle"
            >
          </button>
        </figure>
      </section>

      <section v-if="true" class="user container mt-5">
        <div class="m-auto" style="max-width: 54rem">
          <figure class="user__img-box m-auto">
            <button @click="getUserChoice('rock')" class="user__btn chose-btn border">
              <img src="@/assets/rps/rock.jpg" alt="rock" class="rounded-circle">
            </button>
          </figure>
          <figure class="user__img-box m-auto">
            <button @click="getUserChoice('scissor')" class="user__btn chose-btn border">
              <img src="@/assets/rps/scissor.jpg" alt="scissor" class="rounded-circle">
            </button>
          </figure>
          <figure class="user__img-box m-auto">
            <button @click="getUserChoice('paper')" class="user__btn chose-btn border">
              <img src="@/assets/rps/paper.jpg" alt="paper" class="rounded-circle">
            </button>
          </figure>
        </div>
      </section>


    </section> 
  </Layout>
</template>

<script>
export default {
  name: 'RockPaperScissor',
  data() {
    return {
      whoWon: null,
      userScore: 0,
      compScore: 0,
      compChoices: ['rock', 'paper', 'scissor'],
      compSelector: 0,
      userChoice: null,
      userCanChoice: false,
      intervel: null,
      showTip: false
    }
  },
  methods: {
    startGame() {
      if (!this.userCanChoice) {
        this.intervel = setInterval(() => this.loopCompImg(), 100)
        this.userCanChoice = true
        this.whoWon = null
      } else {
        console.log('click on user')
      }
    },
    getUserChoice(uchoice) {
      if (this.userCanChoice) {
        clearInterval(this.intervel)
        this.userCanChoice = false
        this.userChoice = uchoice
        this.getRandomCompSelector()
        this.checWhoWon(uchoice, this.compChoices[this.compSelector])
      } else {
        console.log('click on comp')
      }
    },
    getRandomCompSelector() {
      this.compSelector = Math.floor(Math.random() * (2 - 0 + 1) + 0)
    },
    loopCompImg() {
      if (this.compSelector < 2) {
        this.compSelector++
      } else {
        this.compSelector = 0
      }
    },
    checWhoWon(user, comp) {
      if (user == 'rock' && comp == 'paper') {
        // comp won
        this.whoWon = 'comp'
      } else if (user == 'paper' && comp == 'rock') {
        // user won
        this.whoWon = 'user'
      } else if (user == 'rock' && comp == 'scissor') {
        // user won
        this.whoWon = 'user'
      } else if (user == 'scissor' && comp == 'rock') {
        // comp won
        this.whoWon = 'comp'
      } else if (user == 'scissor' && comp == 'paper') {
        // user won
        this.whoWon = 'user'
      } else if (user == 'paper' && comp == 'scissor') {
        // comp won
        this.whoWon = 'comp'
      } else if (user == comp) {
        // draw
        this.whoWon = 'draw'
      } else {
        // error
        console.error('err in check who won')
      }

      // incress the score of winner
      this.incressScore()
    },
    incressScore() {
      if (this.whoWon == 'user') {
        this.userScore++
      } else if (this.whoWon == 'comp') {
        this.compScore++
      }
    }
  },
  computed: {}
  // beforeRouteLeave (to, from, next) {
  //   let ans = prompt('hey')
  //   // if(ans ==)
  //   ans == 'exit' ? next() : next(false)
  //   // ...
  // }
}
</script>

<style lang="scss" scoped>
.score-box {
  max-width: 50rem;
}
.chose-btn {
  width: 100%;
  height: 100%;
  background: transparent;
  border-radius: 50%;
  cursor: pointer;
  transition: all 0.2s ease;
  &:hover {
    border: 1px solid #000 !important;
  }
}
.comp {
  &__img-box {
    width: 22rem;
    height: 22rem;
  }

  &__btn {
  }
}
.user {
  text-align: center;
  &__img-box {
    display: inline-block;
    width: 15rem;
    height: 15rem;
    &:nth-child(2) {
      // margin-bottom: -10rem !important;
      float: right;
    }
    &:first-child {
      float: left;
    }
    &:last-child {
    }
  }

  &__btn {
    transition: all 0.3s ease;
    &:focus {
      border: 1px solid #000000 !important;
      transform: scale(1.2);
    }
  }
}

.tip {
  &__btn {
    --bg-color: var(--success);
    width: 4rem;
    height: 4rem;
    border-radius: 50%;
    font-weight: bold;
    font-size: 3rem;
    position: absolute;
    border: solid 1px #b6b6b6;
    color: #b6b6b6;
    // background: #fff;
    // top: 3rem;
    bottom: 2rem;
    left: 2rem;
    &:focus {
      border: 1px solid var(--bg-color);
      background: var(--bg-color);
      color: #fff;
    }
  }
}

:focus {
  outline: none;
}
::-moz-focus-inner {
  border: 0;
}
</style>
