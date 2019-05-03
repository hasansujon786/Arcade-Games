<template>
  <div id="app" class="">
    <router-view />
  </div>
</template>

<script></script>

<style lang="scss">
// text-shadow: 0px 2px 3px black;

body {
  --game-bg: #161631;
  background: var(--game-bg);
}

.link-btn {
  outline: none;
  font-size: 2rem;
  background: transparent;
  border-width: 0;
  color: var(--c, var(--link-color));
  cursor: pointer;
  padding: 10px 10px;
}
</style>
