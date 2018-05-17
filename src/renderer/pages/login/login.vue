<template>
  <div id="login" class="login">
      <h1>快速登录</h1>
      <div class="input-control">
        <div>
          <el-input placeholder="请输入内容" v-model="username" clearable>
            <template slot="append">@qq.com</template>
          </el-input>
        </div>
        <div>
          <el-input placeholder="请输入密码" v-model="password" clearable>
          </el-input>
        </div>
        <div>
            <el-button type="primary" @click="login()">登录</el-button>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  name: "login",

  data() {
    return {
      username: "",
      password: ""
    };
  },

  methods: {
    login() {
      try {
        if (!this.username || !this.password) {
          throw new Error("用户名和密码必填");
        }
      } catch (e) {
        this.$message.error(e.message);
        return;
      }

      this.$axios
        .post("api/user/login", {
          username: this.username + "@qq.com",
          password: this.password
        })
        .then(data => {
          let msg = "登录成功";
          this.$message.success(msg);
        })
        .catch(err => {
          this.dealError(err);
        });
    }
  }
};
</script>

<style lang="less">
.login {
  padding: 20px;
}

.input-control {
  width: 500px;
  margin-top: 30px;
  > div {
    margin-bottom: 20px;
    button {
      width: 100%;
    }
  }
}
</style>
