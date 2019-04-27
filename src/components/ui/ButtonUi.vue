<template>
  <button v-if="type === 'exit'" class="exit-btn"><slot></slot></button>
  <button v-else-if="type !== 'exit'" class="exit-btn"><slot></slot></button>
</template>

<script>
export default {
  name: 'ButtonUi',
  data() {
    return {}
  }
}
</script>

<style lang="scss" scoped></style>
