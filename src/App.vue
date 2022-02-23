<template>
  <div id='app'>
    <router-link to='/'>
      首页
    </router-link> |
    <router-link to='/about'>
      关于
    </router-link>
    <router-link to='/page1'>
      page1
    </router-link>
    <router-link to='/page2'>
      page2
    </router-link>
    <router-link to='/page3'>
      page3
    </router-link>
    <br />
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        title: 'hello VueCLI'
      }
    }
  }
</script>

<style>

</style>