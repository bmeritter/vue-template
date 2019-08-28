<template>
    <div>
        <div class="app">
            Hello {{msg}}
        </div>

        <div>
            <router-link to="/page1">go page1</router-link>
            <router-link to="/page2">go page2</router-link>
        </div>
        <div>
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
  export default {
    name: 'App',

    data() {
      return {
        msg: "Vue",
      };
    }
  };
</script>

<style lang="scss" scoped>
    .app {
        color: red;
    }
</style>
