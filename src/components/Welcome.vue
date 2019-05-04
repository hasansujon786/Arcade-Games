<template>
  <div class="Welcome ">
    <div class="px-2 max-w-6xl mx-auto mt-8 md:mt-16">
      <div class="flex flex-col md:flex-row flex-wrap -mx-2">
        <div v-for="(name, i) in gameLinks" :key="i" class=" md:w-1/3 px-2 mb-5 md:mb-10">
          <router-link
            class="block border h-40 border-blue-700 text-blue-500 flex justify-center items-center md:h-48"
            :to="{ name: name }"
          >
            {{ name }}
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Welcome',
  data() {
    return {
      gameLinks: ['TicTacToe', 'MemoryBooster', 'RockPaperScissor', 'about', 'about', 'about']
    }
  },
  methods: {},
  computed: {}
}
</script>
