
<template>
  <div id="app" >
    <!-- style="background-color:#2c3e50" -->
      <el-container>
        <el-header><elnav></elnav></el-header>
        <el-main id="app-main" justify="center">
          <router-view></router-view>
          <vue-particles color="#409EFF"></vue-particles>
        </el-main>
        <el-footer><elfoot/></el-footer>
      </el-container>
  </div>
</template>

<script>
import elnav from "@/components/element/el-nav";
import elfoot from "@/components/element/el-foot";
export default {
  name: "App",
  components: { elnav , elfoot },
  data(){
    
  },
  methods:{
    
  }
};
</script>

<style>
#app-main{
   font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
   text-align: center;
   position:relative;
}
#particles-js{
    /* position:absolute;
    z-index:1; */
    width: 100%;
}
</style>
