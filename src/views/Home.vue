<template>
  <div class="home">
      <h1 class="center pt-5">Arcade</h1>
      <ag-welcome></ag-welcome>
  </div>
</template>

<script>
import WelcomeVue from '../components/Welcome.vue';

export default {
  name: 'home',
  components: {
    agWelcome: WelcomeVue,
  }
}
</script>


<style lang="scss" scoped>
.home {
  background: var(--dark);
  height: 100vh;
}
h1 {
  // padding-top: 10rem;
}
</style>
