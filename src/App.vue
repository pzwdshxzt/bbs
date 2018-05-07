
<template>
    <!-- style="background-color:#2c3e50" -->
      <el-container  id="app" justify ="start">
        <el-header><elnav></elnav></el-header>
        <el-main id="app-main" justify="center">
          <transition :name="fade">
            <router-view></router-view>
          </transition>
          <vue-particles color="#409EFF"></vue-particles>
        </el-main>
        <el-footer><elfoot/></el-footer>
      </el-container> 
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
#app{
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
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
