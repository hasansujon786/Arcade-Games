<template>
  <div class="popupMenu">
    <section class="popupMenu__body">
      <div class="popupMenu__card bd">
        <h1 class="center text-danger">{{ name }}</h1>
        <slot></slot>
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
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~@/sass/modules/media-queries/mobile-first';

.popupMenu {
  background: rgba(23, 16, 59, 0.8);
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  h1 {
    text-transform: capitalize;
  }
  &__card {
    background: rgb(9, 6, 29);
    width: 80vw;
    max-width: 400px;
    margin: 0 auto;
    padding: 3rem 2rem;
  }
  &__body {
    margin-top: 30%;
    @include respond-mf(lt-tablet) {
      margin-top: 10%;
    }
  }
}
</style>
