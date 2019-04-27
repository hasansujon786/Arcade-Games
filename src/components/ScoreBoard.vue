<template>
  <section class="score-board d-flex justify-content-between">
    <div @click="changePlayer(true)" :class="{ 'active-player': isX }" class="score-board__chip x">
      X <span>{{ X }}</span>
    </div>
    <div
      @click="changePlayer(false)"
      :class="{ 'active-player': !isX }"
      class="score-board__chip o"
    >
      O <span>{{ O }}</span>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ScoreBoard',
  data() {
    return {}
  },
  props: {
    isX: {
      type: Boolean,
      required: true
    },
    changePlayer: {
      type: Function,
      required: true
    },
    O: {
      type: Number,
      required: true
    },
    X: {
      type: Number,
      required: true
    }
  },
  methods: {
    log() {
      alert('hee')
    }
  }
}
</script>

<style lang="scss" scoped>
.score-board {
  max-width: 50rem;
  width: 40rem;
  &__chip {
    border: 2px solid var(--bd-color);
    background-color: var(--bd-color);
    font-size: 3.5rem;
    width: 18rem;
    border-radius: 30px;
    text-align: center;
    transition: background-color 400ms ease;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
}

.o {
  color: var(--royal-blue);
}
.x {
  color: var(--hot-pink);
}
.o span,
.x span {
  color: #e9e9e9;
}
.active-player.o {
  border-color: var(--royal-blue);
}
.active-player.x {
  border-color: var(--hot-pink);
}
</style>
