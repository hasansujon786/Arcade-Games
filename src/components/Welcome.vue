<template>
  <div class="Welcome">
    <div class="nav">
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
      <router-link :to="{name: 'TicTacToe'}">TicTacToe</router-link>
      <router-link :to="{name: 'MemoryBooster'}">MemoryBooster</router-link>
      <router-link :to="{name: 'RockPaperScissor'}">RockPaperScissor</router-link>
      <router-link :to="{name: 'RockPaperScissor'}">RockPaperScissor</router-link>
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
  // border: 1px solid #000;
  height: 50rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-gap: 3rem;
  padding: 7rem;
  margin-top: 5rem;

  a {
    border: 1px solid #000;
    font-weight: bold;
    text-decoration: none;
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
</style>