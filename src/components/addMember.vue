<template>
  <el-dialog
    ref="dialog"
    title="添加会员"
    :visible.sync="addDialogVisible"
    :before-close="handleClose">
    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
      <el-form-item label="姓名" prop="name">
        <el-input v-model="ruleForm.name" minlength='3' maxlength="10" placeholder="长度在 3 到 10 个字符"></el-input>
      </el-form-item>

      <el-form-item label="身份证" prop="id_num">
        <el-input v-model="ruleForm.id_num" minlength='15' maxlength="18" placeholder="长度 15 或 18 个字符"></el-input>
      </el-form-item>

      <el-form-item label="会员号" prop="member_num">
        <el-input v-model="ruleForm.member_num" minlength='4' maxlength="4" placeholder="长度在 4 个字符"></el-input>
      </el-form-item>

      <el-form-item label="余额(元)" prop="money">
        <el-input v-model="ruleForm.money" minlength='0' maxlength="10" placeholder="长度在 0 到 10 位数"></el-input>
      </el-form-item>

      <el-form-item label="地址" prop="address">
        <el-input v-model="ruleForm.address" placeholder="非必填"></el-input>
      </el-form-item>

    </el-form>
    <span slot="footer" class="dialog-footer">
      <el-button @click="closeDialog">取 消</el-button>
      <el-button type="primary" @click="submitForm">确 定</el-button>
    </span>
  </el-dialog>
</template>

<script>
  export default {
    props: ["addDialogVisible"],
    data() {
      return {
        ruleForm: {
          name: '',
          id_num: '',
          member_num: '',
          address: '',
          money: '0',
          create_time: new Date().getTime()
        },
        rules: {
          name: [
            {required: true, message: '请输入会员姓名', trigger: 'blur'},
            {min: 3, max: 10, message: '长度 3 到 10 个字符', trigger: 'blur'}
          ],
          id_num: [
            {required: true, message: '请输入会员身份证号', trigger: 'blur'},
            {min: 15, max: 18, message: '长度 15 或 18 个字符', trigger: 'blur'}
          ],
          member_num: [
            {required: true, message: '请输入会员卡号', trigger: 'blur'},
            {min: 4, max: 4, message: '长度 4 个字符', trigger: 'blur'}
          ],
          address: [
            {required: false, message: '请填写会员地址', trigger: 'blur'}
          ],
          money: [
            {required: true, message: '请输入会员余额', trigger: 'blur'},
            {min: 0, max: 10, message: '长度 0 到 10 位数', trigger: 'blur'}
          ],
        }
      };
    },
    methods: {
      submitForm() {
        this.$refs['ruleForm'].validate((valid) => {
          if (valid) {
            this.$emit('addRow', this.ruleForm);
            this.closeDialog();
            this.$refs['dialog'].open = () => {
              this.ruleForm = {
                name: '',
                id_num: '',
                member_num: '',
                address: '',
                money: '0',
                create_time: new Date().getTime()
              }
            }
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      closeDialog() {
        this.$emit('closeDialog');
      },
      handleClose(done) {
        this.closeDialog()
      },
    }
  }
</script>


<style scoped>

</style>
