<template>
  <div class="popupMenu">
    <section class="popupMenu__body">
      <h1 class="center text-danger">Tic Tac Toe</h1>
      <div class="popupMenu__card">
        <p class="paragraph">Do you really want to leave? you have unsaved changes!</p>
        <section class="center">
          <button @click="exitGame(true)" class="link-btn" style="--c: var(--danger)">
            Exit the Game
          </button>
          <button @click="exitGame(false)" class="link-btn ml-4" style="--c: var(--primary)">
            Back to Game
          </button>
        </section>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'popupMenu',
  data() {
    return {}
  },
  props: {
    exitGame: {
      type: Function,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.popupMenu {
  background: rgba(23, 16, 59, 0.8);
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  h1 {
    font-weight: bold;
    font-size: 5rem;
  }
  &__card {
    background: rgb(9, 6, 29);
    width: 80vw;
    margin: 0 auto;
    padding: 3rem 2rem;
  }
  &__body {
    margin-top: 30%;
  }
}
</style>
