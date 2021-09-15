<template>
  <div id="app">
    <Nav/>
    <!-- <img src="./assets/profile.png" title="home page" @click="homePage"> -->
    <!-- <router-view/> -->
  </div>
</template>

<script>
import Nav from '@/components/nav_menu'

export default {
  name: 'App',
  components: { Nav },
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
  /* text-align: center;
  color: #2c3e50; */
  /* margin-top: 60px; */
}
.el-header {
  background: #54c7fc;
}
img {
  width: 200px;
  height: 200px;
  cursor: pointer;
}
</style>
