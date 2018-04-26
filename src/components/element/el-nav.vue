<template>
    <el-menu id="nav-demp"
    :default-active="activeIndex2"
    class="el-menu-demo"
    mode="horizontal"
    @select="handleSelect"
    :background-color= color1
    text-color="#fff"
    active-text-color="#ffd04b" >
    <el-menu-item index="1">CE</el-menu-item>
    <el-menu-item index="2"><router-link to="/index">首页</router-link></el-menu-item>
    <el-submenu index="3">
        <template slot="title">板块</template>
        <el-menu-item index="3-1">暂无</el-menu-item>
        <el-menu-item index="3-2">暂无</el-menu-item>
        <el-menu-item index="3-3">暂无</el-menu-item>
        <el-submenu index="3-4">
        <template slot="title">待添加</template>
        <el-menu-item index="3-4-1">待添加</el-menu-item>
        <el-menu-item index="3-4-2">待添加</el-menu-item>
        <el-menu-item index="3-4-3">待添加</el-menu-item>
        </el-submenu>
    </el-submenu>
    <el-menu-item  index="4">地图</el-menu-item>
    <el-menu-item @click="dialogTableVisible = true" index="5">联系方式</el-menu-item>
    <el-menu-item index="6">
      <div class="block">
        <span class="demonstration"></span>
        <el-color-picker v-model="color1"></el-color-picker>
      </div>
    </el-menu-item>
    <el-dialog title="联系方式" :visible.sync="dialogTableVisible">
     <span>hmm7023@gmail.com</span>
    </el-dialog>
    </el-menu>
</template>

<script>
export default {
  data() {
    return {
      activeIndex2: "1" ,
      color1: '#409EFF',
      dialogTableVisible: false
    };
  },
  watch:{
    color1:function(val){
      this.$emit('sendColorCode',val)
    }
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
    
  }
};
</script>

<style>
</style>
