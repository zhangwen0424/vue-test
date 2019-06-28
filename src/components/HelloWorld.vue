<template>
  <div class="hello">
    <h1>{{ msg }}</h1>

    <h2>项目链接</h2>
    <ul>
      <!--li v-for="(project, key) in projects" v-bind="{{key}}">
        <router-link
          to="https://vuejs.org"
          target="_blank"
        >
        {{project.name}}
        </router-link>
      </li-->
      <li>
        <a
          href="https://github.com/zhangwen0424/"
          target="_blank"
        >
        更多关于我
        </a>
      </li>
    </ul>

    <h2>知识链接</h2>
    <ul>
      <li>
        <a
          href="http://router.vuejs.org/"
          target="_blank"
        >
          vue-router
        </a>
      </li>
      <li>
        <a
          href="http://vuex.vuejs.org/"
          target="_blank"
        >
          vuex
        </a>
      </li>
      <li>
        <a
          href="http://vue-loader.vuejs.org/"
          target="_blank"
        >
          vue-loader
        </a>
      </li>
      <li>
        <a
          href="https://github.com/vuejs/awesome-vue"
          target="_blank"
        >
          awesome-vue
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: "欢迎查看我的vue项目！",
      projects: [{
        name: '小测试', href: '/'
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
