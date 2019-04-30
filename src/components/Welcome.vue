<template>
  <div class="Welcome">
    <div class="nav">
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
@import '~@/sass/modules/media-queries/mobile-first';

.nav {
  margin: 0rem auto;
  max-width: 100rem;
  margin-top: 7%;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: space-around;
  @include respond-mf(lt-phablet) {
    flex-direction: row;
  }
  @include respond-mf(lt-desktop) {
    justify-content: space-between;
  }

  a {
    height: 20rem;
    border: 1px solid #000;
    font-weight: bold;
    text-decoration: none;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 17px;
    margin-bottom: 3rem;
    @include respond-mf(lt-phablet) {
      flex: 0 0 45%;
    }
    @include respond-mf(lt-desktop) {
      flex: 0 0 32%;
    }
  }
}
</style>
