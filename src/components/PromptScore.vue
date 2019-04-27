<template>
  <section @click="closePrompt" class="PromptScore flex-center">
    <div class="content">
      <span v-if="someoneWon">
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
      required: true
    },
    someoneWon: {
      type: Boolean,
      required: true
    }
  },
  methods: {},
  computed: {}
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
