<template>
  <div>
    <vHeader></vHeader>
    <el-container>
      <el-header>
        <p class="title">会员管理</p>
      </el-header>
      <el-main>
        <el-row class="add-member">
          <el-col :span="12">
            <el-button type="primary" @click="addDialogVisible = true">添加会员</el-button>
          </el-col>
          <el-col :span="5" :offset="7">
            <el-input
              v-model="searchValue"
              placeholder="根据会员号搜索"
              suffix-icon="el-icon-search">
            </el-input>
          </el-col>
        </el-row>

        <el-table
          :data="tableData"
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
            prop="money"
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
            prop="create_time"
            label="入会日期">
            <template slot-scope="scope">
              {{scope.row.create_time | moment("YYYY-MM-DD")}}
            </template>
          </el-table-column>
          <el-table-column
            fixed="right"
            label="操作"
            width="150">
            <template slot-scope="scope">
              <el-button
                @click.native.prevent="editRow(scope)"
                type="primary"
                size="small">
                编辑
              </el-button>
              <el-button
                @click.native.prevent="deleteRow(scope)"
                type="danger"
                size="small">
                删除
              </el-button>
            </template>
          </el-table-column>
        </el-table>
      </el-main>

      <addMember
        @closeDialog="closeAddDialog"
        @addRow="addRow"
        :addDialogVisible='addDialogVisible'/>

      <editMember
        @closeDialog="closeEditDialog"
        @updateRow="updateRow"
        :editDialogVisible='editDialogVisible'
        :editRowValue="editRowValue"
      />


    </el-container>
  </div>

</template>

<script>
  import vHeader from './common/header.vue'
  import addMember from './addMember.vue'
  import editMember from './editMember.vue'
  import _ from 'lodash';

  export default {
    components: {addMember, editMember,vHeader},
    data() {
      return {
        searchValue: '',
        editRowValue:{
          name: '',
          id_num: '',
          member_num: '',
          address: '',
          money: '0'
        },
        addDialogVisible: false,
        editDialogVisible: false,
        tableData: [{
          member_num: '1234',
          id_num: '123456789111111111',
          money: '500',
          create_time: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }],
        backupData: null
      }
    },
    mounted() {
      this.backupData = this.tableData;
    },
    watch: {
      searchValue: function (newValue, oldValue) {
        if (newValue !== oldValue && newValue !== '') {
          let oriData = this.backupData;
          let newData = _.cloneDeep(oriData);
          newData = _.filter(newData, function (o) {
            return newValue.match(o.member_num) || o.member_num.match(newValue) || newValue === o.member_num;
          });
          this.tableData = newData
        } else {
          this.tableData = this.backupData;
        }
      }
    },
    methods: {
      editRow(scope) {
        this.editRowValue = scope.row;
        this.editDialogVisible = true;
      },
      deleteRow(scope) {
        let name = scope.row.name,
          member_num = scope.row.member_num;

        this.$confirm('确定删除 ' + name + '(' + member_num + ') ？您的操作将被记录在案。')
          .then(() => {
            let newData = this.tableData;
            _.remove(newData, (n) => {
              return n.member_num === member_num;
            });

            this.$set(this.tableData, newData);
          })
          .catch(() => {
          });
      },
      addRow(data) {
        let newData = this.tableData;
        newData.unshift(data);
        this.$set(this.tableData, newData);
      },
      updateRow(data) {
        let member_num = data.member_num;
        let newData = this.tableData;
        let index = _.findIndex(newData, function (i) {
          return i.member_num === member_num;
        });

        if (index !== -1) {
          newData[index] = data;
        }

        this.$set(this.tableData, newData);
      },
      closeAddDialog() {
        this.addDialogVisible = false;
      },
      closeEditDialog() {
        this.editDialogVisible = false;
      },
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
