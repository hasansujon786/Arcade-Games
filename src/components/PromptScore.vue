<template>
  <section class="PromptScore flex-center">
    <div class="content">
      <h2 class="center">O <sup>+</sup></h2>
      <h3>{{ 3  }} - {{ 0 }}</h3>
    </div>
  </section>
</template>

<script>
export default {
  name: 'PromptScore',
  data() {
    return {}
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