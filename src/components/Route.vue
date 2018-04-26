<template id="hello">
  <div id="routeapp">
        <p>
            <router-link to="/user/foo">/user/foo</router-link>
            <router-link to="/user/bar">/user/bar</router-link>
        </p>
        <router-view></router-view>
  </div>
</template>

<script>
export default {
  data() {
    return {
      inputValue: "",
      lists: []
    };
  },
  methods: {}
};
</script>

<style type="text/css">

</style>