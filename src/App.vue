<template>
  <div id="app" class="">
    <router-view />
  </div>
</template>

<script>
import './assets/css/main.css'
export default {}
</script>

<style lang="scss">
body {
  --game-bg: #161631;
  background: var(--game-bg);
}

.link-btn {
  border: none;
  font-size: 2rem;
  background: transparent;
  cursor: pointer;
  padding: 10px 10px;
  &:focus {
    outline-color: currentColor;
  }
}
</style>
