<template>
  <div class="TicTacToe">

    <div class="game">
      <div class="center">
        <h1>TicTacToe
          <span v-if="isX">X</span>
          <span v-else>O</span>
        </h1>
        <p>{{ turns }}</p>
        <h1 v-if="!isSomeoneWon && turns == 9">draw</h1>
      </div>

      <section class="cells">
        <span v-for="(cell, i) in cells" :key="i">
          <button
            ref="cells"
            :class="{'disable': disableCell(i)}"
            @click="turn(i)"
            class="cells__cell" >
          <!-- {{ cell }} -->
          <div v-show="cells[i] == 'X'" class="cross play"></div>
          <div v-show="cells[i] == 'O'" class="circle play"></div>
          </button>
        </span>
      </section>

      <div class="button-group cont d-flex justify-content-between align-items-center">
        <button @click="newGame" class="button">New game</button>
      </div> 
    </div>

    <ag-prompt-score v-if="!isSomeoneWon && turns == 9"></ag-prompt-score>
  </div>
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
      this.isGameRunning = true
      this.isSomeoneWon = false
      this.turns = 0
      this.cells = ['#', '#', '#', '#', '#', '#', '#', '#', '#']
      this.$refs.cells.forEach(cell => (cell.id = ''))
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
        }
      }
    }
  },
  computed: {
    // eslint-disable-next-line
    disableCell(index) {
      // it gets true if the clicked tile doesn't have #
      return index => this.cells[index] !== '#'
    }
  },
  components: {
    agPromptScore: PromptScoreVue
  }
}
</script>
 
<style lang="scss" scoped>
.cells {
  display: grid;
  width: 50rem;
  height: 50rem;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  grid-gap: 5px;
  margin: 50px auto;
  background: rgb(26, 24, 27);
  // border: 5px solid #000;
  span {
    background: #fff;
  }
  &__cell {
    border-width: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    pointer-events: fill;
    background: #fff;
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
    background: rgb(134, 71, 218);
  }
}

.cont { 
  width: 50rem;
  margin: 0 auto;
  background: rgba(0, 0, 0, 0.438);
}
// .button-group { }
</style>