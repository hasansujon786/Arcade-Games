<template>
  <div class="controlBox flex justify-between py-5 px-2">
    <ui-pill @click="changePlayer(true)" :class="{ 'active-x': isX }">
      <span class="pr-12 text-danger">X</span>
      <span>{{ X }}</span>
    </ui-pill>

    <ui-pill @click="changePlayer(false)" :class="{ 'active-o': !isX }">
      <span class="pr-12 text-secondary">O</span>
      <span>{{ O }}</span>
    </ui-pill>
  </div>
</template>

<script>
import PillVue from '../ui/Pill.vue'

export default {
  data() {
    return {}
  },
  props: {
    isX: {
      type: Boolean,
      required: true
    },
    changePlayer: {
      type: Function,
      required: true
    },
    O: {
      type: Number,
      required: true
    },
    X: {
      type: Number,
      required: true
    }
  },
  components: {
    uiPill: PillVue
  }
}
</script>

<style lang="scss" scoped>
.active-x {
  border-color: #ff4685;
}
.active-o {
  border-color: #3a54ff;
}
</style>
