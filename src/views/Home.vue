<template>
  <div class="home">
      <h1 class="center">Arcade Games</h1>
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
  min-height: 100vh;
}
h1 {
  padding-top: 7%;
}
</style>
