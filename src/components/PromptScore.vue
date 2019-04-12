<template>
  <section @click="closePrompt" class="PromptScore flex-center">
    <div class="content">
      <!-- <h2 class="center">O <sup>+</sup></h2>
      <h3>{{ 3  }} - {{ 0 }}</h3> -->
      <span v-if="won">
        <h3>Won</h3>
      </span>
      <span v-else>
        <h3>Draw</h3>

      </span>
    </div>
  </section>
</template>

<script>
export default {
  name: 'PromptScore',
  data() {
    return {}
  },
  props: {
    closePrompt: {
      type: Function,
    },
    won: {
      type: Boolean,
      // default: false
    },
  },
  methods: {
  },
  computed: {

  }
}
</script>

<style lang="scss" scoped>
.PromptScore {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: rgba(46, 46, 51, 0.9);
}
.content {
  color: orange;

  h3 {
    font-size: 14rem;
  }
}
</style>