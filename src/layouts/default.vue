<template>
  <section class="defaultLayout">
    <!-- <header class="center"><router-link class="center" to="/">Home</router-link></header> -->
    <main>
      <slot></slot>
    </main>
  </section>
</template>

<script>
export default {
  name: 'defaultLayout',
  data() {
    return {}
  }
}
</script>

<style lang="scss" scoped>
.defaultLayout {
  height: 100vh;
}
main {
  position: relative;
  height: 100vh;
}
</style>
