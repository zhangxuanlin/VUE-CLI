<template>
  <div class="about">
    <h1>发送到发送到</h1>
    <div>{{ $route.params.id }}</div>
    <!-- <router-link to="/about/1">1</router-link>
    <router-link to="/about/2">2</router-link> -->
    <scan />
  </div>
</template>

<script>
import scan from '@c/common/scan.vue';

export default {
    data() {
        return {};
    },
    components: {
        scan,
    },
    mounted() {
        console.log(this.$route.params.pathMatch);
    },
    methods: {
    },
    watch: {
        $route(to, from) {
            console.log(to, from);
        },
    },
};
</script>

<style lang="less" scoped>
#a {
  width: 100%;
  height: 200px;
}

#githubLink {
  position: absolute;
  right: 0;
  top: 12px;
  color: #2d99ff;
}
h1 {
  margin: 10px 0;
  font-size: 40px;
}
#loadingMessage {
  text-align: center;
  padding: 40px;
  background-color: #eee;
}
#canvas {
  width: 100%;
}
#output {
  margin-top: 20px;
  background: #eee;
  padding: 10px;
  padding-bottom: 0;
}
#output div {
  padding-bottom: 10px;
  word-wrap: break-word;
}
#noQRFound {
  text-align: center;
}
</style>
