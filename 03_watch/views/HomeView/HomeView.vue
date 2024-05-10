<template>
  <div>
    <h1>当前路径: {{ currentPath }}</h1>
    <button @click="jump2A">aaa</button>
    <button @click="jump2B">bbb</button>
    <button @click="jump2About">about</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentPath: this.$route.path,
    };
  },
  methods: {
    jump2A() {
      this.$router.push("/a/aaa");
    },
    jump2B() {
      this.$router.push("/a/bbb");
    },
    jump2About() {
      this.$router.push("/about");
    },
  },
  watch: {
    $route: {
      handler(to, from) {
        // 路由发生变化时执行的操作
        console.log("路由变化:", to, from);
        this.currentPath = to.params.xx; // 更新当前路径
      },
      immediate: true, // 首次加载时也执行
    },
  },
};
</script>
