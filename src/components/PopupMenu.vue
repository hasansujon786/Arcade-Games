<template>
  <div class="popupMenu flex-center">
    <section class="popupMenu__body mt-40">
      <div class="popupMenu__card px-4 py-4">
        <h1 class="text-2xl text-danger mb-1">{{ name }}</h1>
        <slot></slot>
        <div class="button-group mt-8 text-right">
          <button @click="exit(true)" class="buttons__home text-danger">
            <i class="icon icon-home"></i>
            Home
          </button>
          <button @click="exit(false)" class="buttons__play text-primary">
            <i class="icon icon-refresh"></i>
            new
          </button>
        </div>
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
    name: {
      type: String,
      default: 'Arcade Games'
    },
    exit: {
      type: Function,
      required: false
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
    text-transform: capitalize;
    font-weight: bold;
  }
  &__card {
    background: rgb(9, 6, 29);
    width: 80vw;
    max-width: 400px;
    margin: 0 auto;
  }
}

.button-group {
  button {
    padding: 3px;
    cursor: pointer;
    outline-color: currentColor;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background: transparent;
    border: none;
    margin-left: 1rem;
    font-weight: bold;
    font-size: 14px;
    text-transform: lowercase;
    i {
      margin-bottom: 4px;
    }
  }
}
</style>
