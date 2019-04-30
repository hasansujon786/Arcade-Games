<template>
  <Layout>
    <section class="mBooster ">
      <div class="container">
        <div class="view-port">
          <control-box></control-box>
          <grid-box :cells="cells" :turn="turn"></grid-box>
        </div>
      </div>
    </section>
  </Layout>
</template>

<script>
import ControlBoxVue from '../components/mbooster/ControlBox.vue'
import GridBoxVue from '../components/mbooster/GridBox.vue'
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
      allwotoTurn: true // checks if the user is allowed to turn or not
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
    }
  },
  computed: {},
  components: {
    controlBox: ControlBoxVue,
    gridBox: GridBoxVue
  },
  created() {
    this.setCellValue()
    this.shuffle()
  }
  // beforeRouteLeave(to, from, next) {
  //   console.log('method calletd')
  //   next(false)
  // }
}
</script>

<style lang="scss" scoped>
.mBooster {
  --game-bg: #161631;
  background: var(--game-bg);
  height: 100%;
}
.view-port {
  max-width: 50rem;
  margin: 0 auto;
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
