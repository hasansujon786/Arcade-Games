<template>
  <Layout>
    <section class="TicTacToe">
    <!-- <h2>{{ ifGameDraw }}</h2> -->
      <section class="score-board d-flex justify-content-between">
        <div :class="{'active-player': isX}" class="chip shadow">X - 0</div>
        <div :class="{'active-player': !isX}" class="chip shadow">O - 3</div>
      </section>

        <section v-if="true" class="cells">
          <span class="cell__bg" v-for="(cell, i) in cells" :key="i">
            <button
              ref="cells"
              :class="{'disable': disableCell(i)}"
              @click="turn(i)"
              class="cells__cell"
            >
              <div v-show="cells[i] == 'X'" class="cross play"></div>
              <div v-show="cells[i] == 'O'" class="circle play"></div>
            </button>
          </span>
        </section>

        <section class="center">
          <button @click="newGame" class="link-btn">Restart</button>
        </section>

    </section>

    <ag-prompt-score :closePrompt="closePrompt"
      :won="isSomeoneWon" v-if="ifGameDraw || showPrompt"
    ></ag-prompt-score>

  </Layout>
</template>
 
<script>
import PromptScoreVue from '@/components/PromptScore.vue'

export default {
  name: 'TicTacToe',
  data() {
    return {
      isGameRunning: true,
      cells: ['#', '#', '#', '#', '#', '#', '#', '#', '#'],
      combinations: [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
      ],
      isX: true,
      turns: 0,
      isSomeoneWon: false,
      addClass: false,
      showPrompt: false
    }
  },
  methods: {
    newGame() {
      // resets everything to get the shits right back on
      this.playAgain()
    },
    turn(index) {
      // arg index is cell position which was clicked
      if (!this.isGameRunning) return

      // check who's turn it is & calls the method to go next
      this.isX ? this.addMarkToCell(index, 'X') : this.addMarkToCell(index, 'O')
      // tracking the counts of all turns : max 9
      this.turns++
    },
    addMarkToCell(index, playerMark) {
      // if the spot is free which was clicked
      if (this.cells[index] == '#') {
        // add 'X' or 'O' as playerMark toc the cells array
        this.$set(this.cells, index, playerMark)
        // check if current player has won the game
        this.checkWin(playerMark)
        // change the player
        this.isX = !this.isX
      } else {
        alert('spot taken')
      }
    },
    checkWin(playerMark) {
      // loop all the possible combinations
      for (let i = 0; i < this.combinations.length; i++) {
        if (
          /* 
            !Most complex part! I won't bother you'll get it, after awhile
          */
          this.cells[this.combinations[i][0]] == playerMark &&
          this.cells[this.combinations[i][1]] == playerMark &&
          this.cells[this.combinations[i][2]] == playerMark
        ) {
          // Now the current player has won.
          // So show some cool stuff
          this.isGameRunning = false
          this.$refs.cells[this.combinations[i][0]].id = 'rotate-cell'
          this.$refs.cells[this.combinations[i][1]].id = 'rotate-cell'
          this.$refs.cells[this.combinations[i][2]].id = 'rotate-cell'
          this.isSomeoneWon = true
          setTimeout(() => {
            this.showPrompt = true
          }, 1000)
        }
      }
    },
    closePrompt() {
      this.playAgain()
    },
    playAgain () {
      this.isGameRunning = true
      this.isSomeoneWon = false
      this.turns = 0
      this.cells = ['#', '#', '#', '#', '#', '#', '#', '#', '#']
      this.$refs.cells.forEach(cell => (cell.id = ''))
      this.showPrompt = false
    },
  },
  computed: {
    // eslint-disable-next-line
    disableCell(index) {
      // it gets true if the clicked tile doesn't have #
      return index => this.cells[index] !== '#'
    },
    ifGameDraw() {
      return !this.isSomeoneWon && this.turns == 9
    }
  },
  components: {
    agPromptScore: PromptScoreVue
  }
}
</script>
 
<style lang="scss" scoped>
.cell__bg,
.TicTacToe {
  background: #fff;
}
.TicTacToe {
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
}
.cells {
  display: grid;
  max-width: 50rem;
  max-height: 50rem;
  height: 40rem;
  width: 40rem;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  grid-gap: 5px;
  // grid border color
  background: rgb(201, 201, 201);

  // span { background: #fff; }

  &__cell {
    border-width: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    pointer-events: fill;
    background: transparent;
    cursor: pointer;
    font-size: 3rem;
    width: 100%;
    height: 100%;
    transition: all 0.5s ease;
  }
  .disable {
    // background: rgb(218, 218, 218);
  }

  #rotate-cell {
    transform: rotate(360deg);
    background: rgb(243, 237, 250);
  }
}


.link-btn {
  font-size: 3.8rem;
  color: var(--dark);
}
.score-board {
  max-width: 50rem;
  width: 40rem;
  // background: rgba(0, 0, 0, 0.432);
}
.chip {
  font-size: 3rem;
  padding: 0rem 2rem;
  width: 18rem;
  border-radius: 4px;
  text-align: center;
  transition: background-color 400ms ease;
}
.active-player {
  background: aquamarine;
}

@media only screen and  (max-width: 320px) {
  .score-board { width: 38rem; }
  .cells {
    width: 38rem;
    height: 38rem;
  }

}
</style>