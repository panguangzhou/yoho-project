<template>
    <div>
        <div class="footerDemo">
           <p class="op-row" v-if="loginBool">
               <a  rel="nofollow" @click="goLogin">登录</a>
               <span class="sep-line">|</span>
               <a rel="nofollow" @click="goReg">注册</a>
        <span class="back-to-top" @click="gotTop">
            回到顶部
            <i class="iconfont icon-huidingbu"></i>
        </span>
        </p>
        <p class="op-row" v-if="loginBoolNow">
          <span>Hi,</span>
          <a class="user-name" v-text="yourName"></a><span class="sep-line">|</span><a @click="clearCookie">退出</a>
        <span class="back-to-top" @click="gotTop">
            回到顶部
            <i class="iconfont icon-huidingbu"></i>
        </span>
        </p>
        <address class="copyright">
        CopyRight©2007-2018 南京新与力文化传播有限公司
    </address>
        </div>
    </div>    
</template>
<script>
import common from "../lib/common.js";
var cookie = common.Cookie;
import code from "../lib/base64.js";
var codemi = code.hex_sha1;
import $ from "jquery";
export default {
  data() {
    return {
      yourName: "",
      loginBool: true,
      loginBoolNow: false
    };
  },
  methods: {
    //去登录界面
    goLogin() {
      this.$router.push("/Ylogin");
    },
    //去注册界面
    goReg() {
      this.$router.push("/Yreg");
    },
    //检测cookie用户有没有登录
    checkLogin() {
      let _this = this;
      let str = cookie.get("yohoUsername");
      let paw = cookie.get("yohoPassword");
      if (str !== null && paw !== null) {
        $.ajax({
          url: "http://localhost:9995/checkLogin",
          type: "POST",
          data: {
            username: str,
            password: paw
          },
          success(data) {
            if (data == "yes") {
              _this.yourName = str;
              _this.loginBool = false;
              _this.loginBoolNow = true;
            }
          }
        });
      } else {
        _this.loginBool = true;
        _this.loginBoolNow = false;
      }
    },
    //点击退出登录的时候，清除cookie
    clearCookie() {
      cookie.remove("yohoUsername");
      cookie.remove("yohoPassword");
      this.loginBool = true;
      this.loginBoolNow = false;
    },
    //点击返回顶部
    gotTop(){
      $('html , body').animate({scrollTop: 0},'slow');
    }
  },
  mounted() {
    this.checkLogin();
  }
};
</script>

<style scoped>
.footerDemo {
  background-color: #fff;
  font-size: 0.6rem;
  width: 100%;
}
.footerDemo .op-row {
  height: 3rem;
  line-height: 3rem;
  padding: 0 0.75rem;
  width: 100%;
}
.footerDemo .op-row a,
.footerDemo .op-row span {
  display: inline-block;
  overflow: hidden;
}
.footerDemo .op-row .sep-line {
  color: #e0e0e0;
  margin: 0 0.75rem;
}
.footerDemo .op-row .back-to-top {
  position: absolute;
  right: 1rem;
}
.footerDemo .copyright {
  background-color: #eee;
  color: #666;
  font-size: 0.6rem;
  height: 60px;
  line-height: 60px;
  text-align: center;
}
</style>
