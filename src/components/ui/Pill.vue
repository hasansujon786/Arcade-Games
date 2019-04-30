<template>
  <button class="ui-pill" v-on="$listeners">
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
  --bd-color: rgba(114, 114, 114, 0.36);
  color: #9c9c9c;
  outline: none;
  border: 2px solid var(--bd-color);
  background-color: var(--bd-color);
  font-size: 3rem;
  padding: 0.7rem 3rem;
  border-radius: 30px;
  transition: background-color 400ms ease;
  display: inline-flex;
  justify-content: space-around;
  align-items: center;
}
</style>
