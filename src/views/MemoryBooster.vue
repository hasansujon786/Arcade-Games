<template>
  <div class="game">
    <div class="gameName">Memory Booster</div>

    <div class="board">
      <transition-group name="cell" tag="div" class="table">
        <div v-for="(cell, i) in cells" :key="cell.id" class="cells">
          <transition name="flip" mode="out-in">
            <div :key="cell.id" @click.self="turn(i)" v-if="cell.cellShow" class="cells__both cells__front"></div>
            <div :class="cell.cls" :key="cell.id2" v-else class="cells__both cells__back">
              <img class="char" :src="require(`@/assets/char/${cell.val}.png`)">
            </div>
          </transition>
        </div>
      </transition-group>

      <div class="btn-control">
        <!-- <button @click="shuffle">Shuffle</button> -->
        <h1 class="score">{{ score }}</h1>
        <button @click="resetGame">Reset Game</button>
      </div>
    </div>
  </div>
</template> 

<script>
export default {
  name: "Game",
  data() {
    return {
      cells: [],            // value of the cells
      selectedCell1: "",    //  keeps the value of 1st selected cell
      selectedCell2: "",    // keeps the value of 2nd selected cell
      seIndex1: 0,          //  keeps the index of 1st selected cell
      seIndex2: 0,          //  keeps the][] value of 2nd selected cell
      isSelected: false,    // checks if the user has selected his first choice
      score: 0,             // user score
      allwotoTurn: true,    // checks if the user is allowed to turn or not
    };
  },
  methods: {
    turn(i) {
      if (this.allwotoTurn === false) {
        return;
      }
      this.allwotoTurn = false;
      this.turnNow(i);
    },
    turnNow(i) {
      /* isSelected prop is cheking if the user has selected his first choice */
      if (this.isSelected === false) {
        this.isSelected = true;
        this.seIndex1 = i; // seIndex1 keeps the index of 1st selected cell
        this.selectedCell1 = this.cells[i].val; // selectedCell1 keeps the value of 1st selected cell
        this.cells[i].cellShow = false; // cellShow hids the selected cell
        setTimeout(() => {
          this.allwotoTurn = true;
        }, 300);
      } else {
        this.isSelected = false;
        this.seIndex2 = i; // seIndex2 keeps the index of 1st selected cell
        this.selectedCell2 = this.cells[i].val; // selectedCell2 keeps the value of 1st selected cell
        this.cells[i].cellShow = false; // cellShow hids the selected cell

        this.checkIfMatched(this.selectedCell1, this.selectedCell2);
      }
    },
    checkIfMatched(cell1, cell2) {
      if (cell1 === cell2) {
        // if matched
        this.score += 1;
        setTimeout(() => {
          this.cells[this.seIndex1].cls = "won";
          this.cells[this.seIndex2].cls = "won";
          this.clearSelectedCell();
        }, 500);
      } else {
        // if not matched
        // show the selected cells again after a while
        setTimeout(() => {
          // this.$set(this.cellShow, this.seIndex1, true);
          this.cells[this.seIndex1].cellShow = true;
          this.cells[this.seIndex2].cellShow = true;
          // this.$set(this.cellShow, this.seIndex2, true);
          this.clearSelectedCell();
        }, 1000);
      }
    },
    clearSelectedCell() {
      // clear the vlue of selected cells
      this.selectedCell1 = "";
      this.selectedCell2 = "";
      this.seIndex1 = 0;
      this.seIndex2 = 0;
      this.allwotoTurn = true;
    },
    shuffle() {
      this.cells = this.cells.sort(() => {
        return 0.5 - Math.random();
      });
    },
    resetGame() {
      this.setCellValue();
      this.shuffle();
      this.clearSelectedCell();
      this.score = 0;
      this.isSelected = false;
    },
    setCellValue() {
      const cells = [
        { id: 1, val: "1", cls: "", id2: "a", cellShow: true },
        { id: 2, val: "2", cls: "", id2: "b", cellShow: true },
        { id: 3, val: "3", cls: "", id2: "c", cellShow: true },
        { id: 4, val: "4", cls: "", id2: "d", cellShow: true },
        { id: 5, val: "5", cls: "", id2: "p", cellShow: true },
        { id: 6, val: "6", cls: "", id2: "e", cellShow: true },
        { id: 7, val: "7", cls: "", id2: "f", cellShow: true },
        { id: 8, val: "8", cls: "", id2: "g", cellShow: true },
        { id: 9, val: "1", cls: "", id2: "h", cellShow: true },
        { id: 10, val: "2", cls: "", id2: "i", cellShow: true },
        { id: 12, val: "3", cls: "", id2: "j", cellShow: true },
        { id: 11, val: "4", cls: "", id2: "k", cellShow: true },
        { id: 13, val: "5", cls: "", id2: "l", cellShow: true },
        { id: 14, val: "6", cls: "", id2: "m", cellShow: true },
        { id: 15, val: "7", cls: "", id2: "n", cellShow: true },
        { id: 16, val: "8", cls: "", id2: "o", cellShow: true }
      ];
      this.cells = cells;
    }
  },
  computed: {},
  created() {
    this.setCellValue();
    this.shuffle();
  }
};
</script>

<style lang="scss" scoped>
.game {
  // padding: 2rem;
}

.gameName {
  font-size: 3rem;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);
  padding: 0.5rem 2rem;
}

.btn-control {
  margin: 2rem auto 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}

.score {
  font-size: 4rem;
}

.table {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(4, 1fr);
  grid-gap: 0.5rem;
  width: 100%;
  height: 50rem;
  // margin: 0 auto;
  // bottom: 3rem;
  // left: 0;

  // border: 4px solid rgb(22, 17, 17);
  box-sizing: content-box;
  background: rgb(235, 235, 235);
}

.board {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 0 2rem;
  max-width: 50rem;
  margin: 5rem auto 0;
}
.cells {
  font-size: 4rem;
  cursor: pointer;

  &__both {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    background: rgb(204, 171, 171);
    transition: all 0.3s;
    backface-visibility: visible !important;
  }

  &__front {
    color: rgb(204, 171, 171);
    background: rgb(230, 135, 135);
    &:hover {
      background: rgb(209, 124, 124);
      color: rgb(187, 154, 154);
    }
  }
  // &__back {
  // }
}
.char {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.flip-enter-active {
  animation: flipInY 0.5s;
  -webkit-backface-visibility: visible;
  backface-visibility: visible;
}
.flip-leave-active {
  animation: flipOutY 0.5s;
  -webkit-backface-visibility: visible;
  backface-visibility: visible;
}
.cell-move {
  transition: transform 1s;
}
.won {
  background: rgb(151, 125, 125);
}

@keyframes flipInY {
  from {
    -webkit-transform: perspective(400px) rotate3d(0, 1, 0, 90deg);
    transform: perspective(400px) rotate3d(0, 1, 0, 90deg);
    -webkit-animation-timing-function: ease-in;
    animation-timing-function: ease-in;
    opacity: 0;
  }

  40% {
    -webkit-transform: perspective(400px) rotate3d(0, 1, 0, -20deg);
    transform: perspective(400px) rotate3d(0, 1, 0, -20deg);
    -webkit-animation-timing-function: ease-in;
    animation-timing-function: ease-in;
  }

  60% {
    -webkit-transform: perspective(400px) rotate3d(0, 1, 0, 10deg);
    transform: perspective(400px) rotate3d(0, 1, 0, 10deg);
    opacity: 1;
  }

  80% {
    -webkit-transform: perspective(400px) rotate3d(0, 1, 0, -5deg);
    transform: perspective(400px) rotate3d(0, 1, 0, -5deg);
  }

  to {
    -webkit-transform: perspective(400px);
    transform: perspective(400px);
  }
}

@keyframes flipOutY {
  from {
    -webkit-transform: perspective(400px);
    transform: perspective(400px);
  }

  30% {
    -webkit-transform: perspective(400px) rotate3d(0, 1, 0, -15deg);
    transform: perspective(400px) rotate3d(0, 1, 0, -15deg);
    opacity: 1;
  }

  to {
    -webkit-transform: perspective(400px) rotate3d(0, 1, 0, 90deg);
    transform: perspective(400px) rotate3d(0, 1, 0, 90deg);
    opacity: 0;
    display: none;
    visibility: hidden;
  }
}
</style>
