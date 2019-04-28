<template>
  <div class="popupMenu">
    <section class="popupMenu__body">
      <h1 class="center">Tic Tac Toe</h1>
      <div class="popupMenu__card">
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam, delectus.</p>
        <section class="right">
          <button class="link-btn">Exit Game</button>
          <button class="link-btn ml-4">Back to Game</button>
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
  }
}
</script>

<style lang="scss" scoped>
.popupMenu {
  background: rgba(255, 255, 255, 0.185);
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
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

.link-btn {
  font-size: 2rem;
  background: transparent;
  border-width: 0;
  color: #007bff;
  cursor: pointer;
}
</style>
