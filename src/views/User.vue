<template>
  <div class="home">
    9
    <nav>
      <router-link to="/user/me">me</router-link> |
      <router-link to="/user/you">you</router-link> |
        <router-link to="/user/query/2222">query</router-link> |
        <router-link to="/user/query/111">query</router-link>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
};
</script>


<style lang="less">
</style>
