<template>
  <div id="app">
    <img src="./assets/profile.png" title="home page" @click="homePage">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  methods: {
    homePage: function () {
      window.location.href = '/'
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
img {
  width: 200px;
  height: 200px;
  cursor: pointer;
}
</style>
