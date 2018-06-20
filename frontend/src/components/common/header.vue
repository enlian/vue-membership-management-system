<template>
  <div class="header">
    <el-button type="text" class="logout-btn">退出</el-button>
    <span>吴淞</span>
  </div>
</template>

<script>
  export default {}
</script>


<style lang="less" scoped>
  .header {
    height: 40px;
    line-height: 40px;
    border-bottom: 1px solid #efefef;
    padding: 0 15px 0 15px;
    span{
      float: right;
      font-size: 14px;
      margin-right: 10px;
      color: #666;
    }
  }

  .logout-btn {
    float: right;
  }
</style>
