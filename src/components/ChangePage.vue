<template>
  <el-row>
  <el-radio v-model="radio" label="1">备选项1</el-radio>
  <el-radio v-model="radio" label="2">备选项2</el-radio>
  </el-row>
</template>

<script>
export default {
  data () {
    return {
      radio: '1'
    }
  }
}
</script>
