<template>
  <div class="data container">
    <h1>data</h1>
    <button @click="fetchData" class="button">get data</button>
    <div v-if="allData">
      <h2  v-for="(user, i) in allData" :key="i">{{ user.name }}</h2>
    </div>
  </div>
</template>
 
<script>
export default {
  name: 'data-page',
  data() {
    return {
      allData: null
    }
  },
  methods: {
    fetchData () {
      console.log('getting data')
      fetch('data/db.json')
            .then(r => r.json())
            .then(json => {
              this.allData = json
            })
            .catch(err => console.log(err))   
      console.log('lagged data')
    },
  },
}
</script>
 
<style lang="scss" scoped>
</style>