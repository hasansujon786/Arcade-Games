<template>
  <div class="Welcome">
    <div class="nav justify-content-between">
      <router-link :to="{ name: 'TicTacToe' }">TicTacToe</router-link>
      <router-link :to="{ name: 'MemoryBooster' }">MemoryBooster</router-link>
      <router-link :to="{ name: 'RockPaperScissor' }">RockPaperScissor</router-link>
      <router-link :to="{ name: 'about' }">Coming Soon..</router-link>
      <router-link :to="{ name: 'about' }">Coming Soon..</router-link>
      <router-link :to="{ name: 'about' }">Coming Soon..</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Welcome',
  data() {
    return {}
  },
  methods: {},
  computed: {}
}
</script>

<style lang="scss" scoped>
.nav {
  margin: 0rem auto;
  padding: 0 2rem;
  display: flex;
  flex-wrap: wrap;

  max-width: 90rem;
  flex-direction: column;
  margin-top: 7%;

  a {
    height: 20rem;
    border: 1px solid #000;
    font-weight: bold;
    text-decoration: none;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 3rem;
  }
}
</style>
