<template>
  <div class="hello">
    <h1>{{ msg }}</h1>

    <h2>Job Link</h2>
    <ul>
      <li v-for="(project, key) in projects" v-bind:key="{key}">
        <router-link :to="project.href" >
        {{project.name}}
        </router-link>
      </li>
      <li>
        <a
          href="https://github.com/zhangwen0424/Apis"
          target="_blank"
          title="my study api"
        >
        api
        </a>
      </li>
      <li>
        <a
          href="https://github.com/zhangwen0424/"
          target="_blank"
          title="more about me"
        >
        more
        </a>
      </li>
    </ul>

    <h2>Apis Link</h2>
    <ul>
      <li v-for="(api,key) in apis" :key="key">
        <a href="api.href" target="_blank">{{api.name}}</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to see my vue project！',
      projects: [{
        name: 'change color', href: '/ChangeColor'
      }, {
        name: 'change page', href: '/Changepage'
      }],
      apis: [{
        name: 'vue-router', href: 'http://router.vuejs.org/'
      }, {
        name: 'vuex', href: 'http://vuex.vuejs.org/'
      }, {
        name: 'vue-loader', href: 'http://vue-loader.vuejs.org/'
      }, {
        name: 'awesome-vue', href: 'https://github.com/vuejs/awesome-vue'
      }]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
