<template>
  <transition-group name="cell" tag="div" class="table">
    <div v-for="(cell, i) in cells" :key="cell.id" class="cells">
      <transition name="flip" mode="out-in">
        <div
          :key="cell.id"
          @click.self="turn(i)"
          v-if="cell.cellShow"
          class="cells__both cells__front"
        ></div>
        <div :class="cell.cls" :key="cell.id2" v-else class="cells__both cells__back">
          <img class="char" :src="require(`@/assets/mBooster/char/${cell.val}.png`)" />
        </div>
      </transition>
    </div>
  </transition-group>
</template>

<script>
export default {
  name: 'gird-box',
  props: {
    cells: {
      type: Array,
      required: true
    },
    turn: {
      type: Function,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.table {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(4, 1fr);
  grid-gap: 0.3rem;
  width: 100%;
  height: 78vh;
  transition: all 0.5s ease-out;
}

.cells {
  font-size: 4rem;
  cursor: pointer;

  &__both {
    border-radius: 2px;
    width: 100%;
    height: 100%;
    transition: all 0.3s;
    backface-visibility: visible !important;
    border: 1px solid rgb(53, 49, 87);
    &:hover {
      border-color: rgb(131, 124, 190);
    }
  }

  &__front {
    background-color: rgb(9, 6, 29);
    background-image: url('~@/assets/mBooster/card-bg.png');
    background-size: cover;
    background-position: center;
  }
  &__back {
    background: rgb(175, 174, 184);
  }
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
  opacity: 0.1;
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
