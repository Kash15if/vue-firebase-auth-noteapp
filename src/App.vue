<template>
  <div id="app">
    <Header />
    <router-view></router-view>
  </div>
</template>

<script>
import LinkOption from "./components/LinkOption.vue";
import Header from "./components/Header.vue";

export default {
  name: "App",
  components: {
    LinkOption,
    Header,
  },
};
</script>

<style></style>
