<template>
  <Layout>
    <section class="TicTacToe">
      <ScoreBoard :O="O" :X="X" :isX="isX" :changePlayer="changePlayer" />

      <section v-if="true" class="cells">
        <span class="cell__bg" v-for="(cell, i) in cells" :key="i">
          <button
            ref="cells"
            :class="{ disable: disableCell(i) }"
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

    <ag-prompt-score
      :closePrompt="closePrompt"
      :someoneWon="isSomeoneWon"
      v-if="ifGameDraw || showPrompt"
    ></ag-prompt-score>

    <PopupMenu />
  </Layout>
</template>

<script>
import PromptScoreVue from '@/components/PromptScore.vue'
import ScoreBoard from '@/components/ScoreBoard.vue'
import PopupMenu from '@/components/PopupMenu.vue'

export default {
  name: 'TicTacToe',
  data() {
    return {
      isGameRunning: true,
      // let myArr = Array(9).fill(null)
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
      showPrompt: false,
      X: 0,
      O: 0
    }
  },
  methods: {
    newGame() {
      // resets everything to get the shits right back on
      // alert(`${innerHeight} ${innerWidth}`)
      this.playAgain()
    },
    turn(index) {
      // arg index is cell position which was clicked
      if (!this.isGameRunning) return

      // check who's turn it is & calls the method to go next
      this.isX ? this.addMarkToCell(index, 'X') : this.addMarkToCell(index, 'O')
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
        // tracking the counts of all turns : max 9
        this.turns++
      } else {
        alert('spot taken')
      }
    },
    checkWin(playerMark) {
      // loop all the possible combinations
      for (let i = 0; i < this.combinations.length; i++) {
        if (
          /* 
            !Most complex part! I won't bother you'll get it, after a while
          */
          this.cells[this.combinations[i][0]] == playerMark &&
          this.cells[this.combinations[i][1]] == playerMark &&
          this.cells[this.combinations[i][2]] == playerMark
        ) {
          // Now the current player has won.
          this.isGameRunning = false
          this.isSomeoneWon = true
          // So show some cool stuff
          this.$refs.cells[this.combinations[i][0]].id = 'rotate-cell'
          this.$refs.cells[this.combinations[i][1]].id = 'rotate-cell'
          this.$refs.cells[this.combinations[i][2]].id = 'rotate-cell'
          this.increseScore(playerMark)
          setTimeout(() => {
            this.showPrompt = true
          }, 1000)
        }
      }
    },
    closePrompt() {
      this.playAgain()
    },
    playAgain() {
      this.isGameRunning = true
      this.isSomeoneWon = false
      this.turns = 0
      this.cells = ['#', '#', '#', '#', '#', '#', '#', '#', '#']
      this.$refs.cells.forEach(cell => (cell.id = ''))
      this.showPrompt = false
    },
    changePlayer(bool) {
      this.isX = bool
    },
    increseScore(playerMark) {
      if (playerMark == 'X') {
        this.X++
      } else {
        this.O++
      }
    }
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
    agPromptScore: PromptScoreVue,
    ScoreBoard,
    PopupMenu
  },

  beforeRouteLeave(to, from, next) {
    const answer = window.confirm('Do you really want to leave? you have unsaved changes!')
    if (answer) {
      next()
    } else {
      next(false)
    }
  }
}
</script>

<style lang="scss" scoped>
.cell__bg,
.TicTacToe {
  --royal-blue: #3a54ff;
  --hot-pink: #ff4685;
  --bd-color: rgba(114, 114, 114, 0.36);
  background-color: #161631;
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
  background-color: var(--bd-color);

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
</style>
