<template>
  <div id="indexId">
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
    z-index: 2;
    margin-top: 20px;
    right: 50px
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
  }
</style>