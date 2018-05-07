<template>
  <div id="indexId" >
    <el-card class="left-box-card"  >
      <div slot="header" class="clearfix">
        <span>卡片名称</span>
        <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
      </div>
      <div v-for="o in 4" :key="o" class="text item">
        {{'列表内容 ' + o }}
      </div>
    </el-card>
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>热门话题</span>
        <el-button style="float: right; padding: 3px 0" type="text">更多</el-button>
      </div>
      <div v-for="o in 5" :key="o" class="text item">
        {{'列表内容 ' + o }}
      </div>
  </el-card>
  </div>
</template>

<script>

</script>

<style>
  #indexId{
    position:absolute;
    margin: 0 auto;
    width: 100%;
    z-index: 2;
    left: 0;
  }
  .text {
    font-size: 14px;
  }
  .el-card__body{
    padding: 12px;
  }

  .item {
    margin-bottom: 10px;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }
  .clearfix:after {
    clear: both
  }

  .box-card {
    width: 400px;
    right:10px;
  }
  .left-box-card{
    width: 800px;

  }
</style>