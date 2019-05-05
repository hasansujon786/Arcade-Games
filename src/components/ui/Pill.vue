<template>
  <button
    class="ui-pill border-2 border-gray-700 text-gray-500 text-2xl md:text-3xl py-1 px-6 md:px-8"
    v-on="$listeners"
  >
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'ui-pill',
  data() {
    return {}
  }
}
</script>

<style lang="scss" scoped>
.ui-pill {
  --bg-color: rgba(114, 114, 114, 0.36);
  outline: none;
  background-color: var(--bg-color);
  border-radius: 30px;
  transition: background-color 400ms ease;
  display: inline-flex;
  justify-content: space-around;
  align-items: center;
}
</style>
