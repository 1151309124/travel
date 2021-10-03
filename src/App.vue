<!--
 * @Author: your name
 * @Date: 2021-10-03 14:43:19
 * @LastEditTime: 2021-10-03 15:56:20
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \htmle:\travel\src\App.vue
-->
<template>
  <div id="app">
    <span>上传测试</span>
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
