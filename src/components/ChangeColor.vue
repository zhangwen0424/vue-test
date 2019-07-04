<template>
<div>
  <h1>{{msg}}</h1>
  <p>{{colors}}</p>
  <p :style="{color: color}">
    {{content}}
    <span>({{color}})</span>
  </p>

  <p>
    Type1:
    <button @click="changeColorRandom">change color</button>
  </p>

  <p>
    Type2:
    <select v-model="selected" @change="selectChangeColor">
      <option value="">选择一个颜色</option>
      <option v-for="(color,key) in colors" :value="color" :key="key">{{color}}</option>
    </select>
  </p>

  <p>
    Type3:
    <input @change="changeInputColor">
  </p>
  <!-- <p>
    select to change:
    <select v-model="selected" @change="selectChangeColor">
      <option value="">选择一个颜色</option>
      <option v-for="(color, key) in colors" :value="color">{{color}}</option>
    </select>
  </p> -->

  <!-- <input type="number" max="10"> -->
</div>
</template>
<script>
export default{
  name: 'ChangeColor',
  data () {
    return {
      msg: 'change color to click',
      content: 'I like study vue!',
      colors: ['red', 'green', 'blue', 'yellow', 'black'],
      color: 'red',
      time: 0,
      selected: ''
    }
  },
  methods: {
    changeColorRandom: function () {
      var length = this.colors.length - 1
      if (length > this.time) {
        this.time++
      } else {
        this.time = 0
      }
      this.color = this.colors[this.time]
    },
    selectChangeColor: function () {
      this.color = this.selected
    },
    changeInputColor: function (event) {
      // console.log('event',event)
      this.color = ''
    }
  }
}
</script>

<style scope>
.content-half {
  width: 50%;
  text-align: right;
}
.type_left {
  display: inline-block,
}
input, button, select {
  width:120px
}
</style>
