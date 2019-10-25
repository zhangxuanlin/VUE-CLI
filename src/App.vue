<template>
  <div id="app">
    <div id="nav">
      <router-link to="/9">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/user">user</router-link> |
      <router-link to="/bigData">bigData</router-link> |
      <router-link to="/defaua">defaua</router-link>
    </div>
    <transition name="fade"  mode="out-in">
      <router-view/>
    </transition>
  </div>
</template>

<style lang="less">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
  }
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
