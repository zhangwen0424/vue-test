<template>
  <el-container>
    <el-header>
      <el-col :span='4' :push='20'>
          <img src="../../assets/profile.png" title="我的头像" alt="我的头像" @click="homePage">
          <!-- <i class="el-icon-caret-bottom"></i> -->
      </el-col>
    </el-header>
    <el-aside width="200px">aside</el-aside>
    <el-main>
      <!-- <router-link></router-link> -->
    </el-main>
  </el-container>
</template>
<script>
export default {
  name: 'Nav',
  methods: {
    homePage: function () {
      window.location.href = '/'
    }
  }
}
</script>
<style scope>
  .el-container {
    background: #f6f6f6;
  }
  .el-header {
    position: flex;
    top: 0;
    left: 0;
    right:0;
    z-index: 1000;
  }
  .nav_right {
    width: 50%;
    height: 100%;
    display: inline-block;
    float: right;
    text-align: right;
  }
  img {
    width: 50px;
     height: 50px;
     border-radius: 25px;
     margin-top: 5px;
     display: inline-block;
     float: right;
  }
  .el-aside {
    background: #eee;
    height: calc(100vh - 60px);
  }
</style>
