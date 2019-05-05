<template>
  <Layout>
    <section class="mBooster ">
      <div class="view-port px-2">
        <control-box :shuffle="shuffle" :resetGame="resetGame" :score="score"></control-box>
        <grid-box
          class="mt-3 md:mt-10"
          :class="{ shrink: isTableShrinked }"
          :cells="cells"
          :turn="turn"
        ></grid-box>
      </div>

      <popup-menu v-if="isTableShrinked" :exit="exitGame" name="memory booster">
        <p class="text-gray-500 text-sm pb-8">Do you really want to leave?</p>
      </popup-menu>
    </section>
  </Layout>
</template>

<script>
import ControlBoxVue from '../components/mbooster/ControlBox.vue'
import GridBoxVue from '../components/mbooster/GridBox.vue'
import PopupMenu from '@/components/PopupMenu.vue'

export default {
  name: 'mBooster',
  data() {
    return {
      cells: [], // value of the cells
      selectedCell1: '', //  keeps the value of 1st selected cell
      selectedCell2: '', // keeps the value of 2nd selected cell
      seIndex1: 0, //  keeps the index of 1st selected cell
      seIndex2: 0, //  keeps the][] value of 2nd selected cell
      isSelected: false, // checks if the user has selected his first choice
      score: 0, // user score
      allwotoTurn: true, // checks if the user is allowed to turn or not
      isTableShrinked: true
    }
  },
  methods: {
    turn(i) {
      if (this.allwotoTurn === false) {
        return
      }
      this.allwotoTurn = false
      this.turnNow(i)
    },
    turnNow(i) {
      /* isSelected prop is cheking if the user has selected his first choice */
      if (this.isSelected === false) {
        this.isSelected = true
        this.seIndex1 = i // seIndex1 keeps the index of 1st selected cell
        this.selectedCell1 = this.cells[i].val // selectedCell1 keeps the value of 1st selected cell
        this.cells[i].cellShow = false // cellShow hids the selected cell
        setTimeout(() => {
          this.allwotoTurn = true
        }, 300)
      } else {
        this.isSelected = false
        this.seIndex2 = i // seIndex2 keeps the index of 1st selected cell
        this.selectedCell2 = this.cells[i].val // selectedCell2 keeps the value of 1st selected cell
        this.cells[i].cellShow = false // cellShow hids the selected cell

        this.checkIfMatched(this.selectedCell1, this.selectedCell2)
      }
    },
    checkIfMatched(cell1, cell2) {
      if (cell1 === cell2) {
        // if matched
        this.score += 1
        setTimeout(() => {
          this.cells[this.seIndex1].cls = 'won'
          this.cells[this.seIndex2].cls = 'won'
          this.clearSelectedCell()
        }, 500)
      } else {
        // if not matched
        // show the selected cells again after a while
        setTimeout(() => {
          // this.$set(this.cellShow, this.seIndex1, true);
          this.cells[this.seIndex1].cellShow = true
          this.cells[this.seIndex2].cellShow = true
          // this.$set(this.cellShow, this.seIndex2, true);
          this.clearSelectedCell()
        }, 1000)
      }
    },
    clearSelectedCell() {
      // clear the vlue of selected cells
      this.selectedCell1 = ''
      this.selectedCell2 = ''
      this.seIndex1 = 0
      this.seIndex2 = 0
      this.allwotoTurn = true
    },
    shuffle() {
      this.cells = this.cells.sort(() => {
        return 0.5 - Math.random()
      })
    },
    resetGame() {
      this.setCellValue()
      this.shuffle()
      this.clearSelectedCell()
      this.score = 0
      this.isSelected = false
    },
    setCellValue() {
      const cells = [
        { id: 1, val: '1', cls: '', id2: 'a', cellShow: true },
        { id: 2, val: '2', cls: '', id2: 'b', cellShow: true },
        { id: 3, val: '3', cls: '', id2: 'c', cellShow: true },
        { id: 4, val: '4', cls: '', id2: 'd', cellShow: true },
        { id: 5, val: '5', cls: '', id2: 'p', cellShow: true },
        { id: 6, val: '6', cls: '', id2: 'e', cellShow: true },
        { id: 7, val: '7', cls: '', id2: 'f', cellShow: true },
        { id: 8, val: '8', cls: '', id2: 'g', cellShow: true },
        { id: 9, val: '1', cls: '', id2: 'h', cellShow: true },
        { id: 10, val: '2', cls: '', id2: 'i', cellShow: true },
        { id: 12, val: '3', cls: '', id2: 'j', cellShow: true },
        { id: 11, val: '4', cls: '', id2: 'k', cellShow: true },
        { id: 13, val: '5', cls: '', id2: 'l', cellShow: true },
        { id: 14, val: '6', cls: '', id2: 'm', cellShow: true },
        { id: 15, val: '7', cls: '', id2: 'n', cellShow: true },
        { id: 16, val: '8', cls: '', id2: 'o', cellShow: true }
      ]
      this.cells = cells
    },
    alertNow(msg) {
      alert(msg)
    },
    showAllHiddenCards() {
      const cells = [
        { id: 1, val: '1', cls: '', id2: 'a', cellShow: false },
        { id: 2, val: '2', cls: '', id2: 'b', cellShow: false },
        { id: 3, val: '3', cls: '', id2: 'c', cellShow: false },
        { id: 4, val: '4', cls: '', id2: 'd', cellShow: false },
        { id: 5, val: '5', cls: '', id2: 'p', cellShow: false },
        { id: 6, val: '6', cls: '', id2: 'e', cellShow: false },
        { id: 7, val: '7', cls: '', id2: 'f', cellShow: false },
        { id: 8, val: '8', cls: '', id2: 'g', cellShow: false },
        { id: 9, val: '1', cls: '', id2: 'h', cellShow: false },
        { id: 10, val: '2', cls: '', id2: 'i', cellShow: false },
        { id: 12, val: '3', cls: '', id2: 'j', cellShow: false },
        { id: 11, val: '4', cls: '', id2: 'k', cellShow: false },
        { id: 13, val: '5', cls: '', id2: 'l', cellShow: false },
        { id: 14, val: '6', cls: '', id2: 'm', cellShow: false },
        { id: 15, val: '7', cls: '', id2: 'n', cellShow: false },
        { id: 16, val: '8', cls: '', id2: 'o', cellShow: false }
      ]
      this.cells = cells
    },
    startNewGame() {
      this.isTableShrinked = !this.isTableShrinked
      this.setCellValue()
      this.shuffle()
    },
    exitGame(answer) {
      if (answer) {
        this.$router.go(-1)
      } else {
        this.startNewGame()
      }
    }
  },
  computed: {},
  components: {
    controlBox: ControlBoxVue,
    gridBox: GridBoxVue,
    popupMenu: PopupMenu
  },
  created() {
    this.showAllHiddenCards()
    // this.setCellValue()
    // this.shuffle()
  },
  mounted() {
    // this.shuffle()
    // this.isTableShrinked = false
    // setTimeout(() => {}, 1000)
  }
  // beforeRouteLeave(to, from, next) {
  //   console.log('method calletd')
  //   next(false)
  // }
}
</script>

<style lang="scss" scoped>
.mBooster {
  height: 100%;
  position: relative;
}
.view-port {
  max-width: 36rem;
  margin: 0 auto;
}
.shrink {
  // transform: scale(0);
  opacity: 0;
}

// .gameName {
//   font-size: 3rem;
//   box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);
//   padding: 0.5rem 2rem;
// }

// <!-- <div class="btn-control">
//     <button @click="shuffle">Shuffle</button>
//     <h1 class="score">{{ score }}</h1>
//     <button @click="resetGame">Reset Game</button>
//   </div> -->
</style>
