<template>
  <el-container>
    <el-header>
      <p class="title">会员管理</p>
    </el-header>
    <el-main>
      <el-row class="add-member">
        <el-col :span="12">
          <el-button type="primary" @click="dialogVisible = true">添加会员</el-button>
        </el-col>
        <el-col :span="5" :offset="7">
          <el-input
            placeholder="根据会员号搜索"
            suffix-icon="el-icon-search">
          </el-input>
        </el-col>
      </el-row>
  
      <el-table
        :data="tableData3"
        border
        style="width: 100%">
        <el-table-column
          prop="member_num"
          label="会员号">
        </el-table-column>
        <el-table-column
          prop="name"
          label="姓名">
        </el-table-column>
        <el-table-column
          prop="total_money"
          label="余额(元)">
        </el-table-column>
        <el-table-column
          prop="id_num"
          label="身份证号">
        </el-table-column>
        <el-table-column
          prop="address"
          label="地址">
        </el-table-column>
        <el-table-column
          prop="join_time"
          label="入会日期">
        </el-table-column>
        <el-table-column
          fixed="right"
          label="操作"
          width="150">
          <template slot-scope="scope">
            <el-button
              @click.native.prevent="deleteRow(scope.$index, tableData4)"
              type="primary"
              size="small">
              编辑
            </el-button>
            <el-button
              @click.native.prevent="deleteRow(scope.$index, tableData4)"
              type="danger"
              size="small">
              删除
            </el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-main>

    <el-dialog
      title="提示"
      :visible.sync="dialogVisible"
      width="30%"
      :before-close="handleClose">
      <span>这是一段信息</span>
      <span slot="footer" class="dialog-footer">
    <el-button @click="dialogVisible = false">取 消</el-button>
    <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
  </span>
    </el-dialog>


  </el-container>
</template>

<script>
  import addMember from './addMember.vue'
  export default {
    components: {addMember},
    data() {
      return {
        dialogVisible:false,
        tableData3: [{
          member_num: '1234',
          id_num: '123456789',
          total_money: 500,
          join_time: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }]
      }
    },
    methods: {
      handleClose(done) {
        this.$confirm('确认关闭？')
          .then(_ => {
            done();
          })
          .catch(_ => {});
      }
    }
  }
</script>


<style scoped>
  .el-header {
    margin-bottom: 20px;
  }

  .title {
    font-size: 1.8em;
    text-align: center;
  }

  .add-member {
    margin-bottom: 20px;
  }
</style>
