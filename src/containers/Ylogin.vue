<template>
<div>
        <yadvertising></yadvertising>
        <div class="main-warp">
            <div class="banner-box">
                <img src="../img/login.jpg" alt="">
                <div class="banner-info">
                    <div class="top-operation-bar">
                        <span class="close iconfont icon-fanhui" @click="black"></span>
                        <a href="" class='register'><router-link to='/yreg' style="color:#fff;">注册</router-link></a>
                    </div>
                    <div class="tip">
                        Yoho!Family账号可登录Yoho!Buy有货 
                    </div>
                </div>
            </div>
            <div class="sms-login-form">
              <div class="form-group username">
            <label for="username" class="iconfont icon-shouji"></label><input type="text" name="username" placeholder="请输入手机号/邮箱" v-model="txt" @keyup="changeText" @click="changeText">
              <i id="clearUsrname" class="iconfont icon-guanbianniu" v-if="txtbool" @click="textRemove"></i>
                  </div>
                <div class="password">
            <label for="password" class="iconfont icon-bai-hudun"></label><input type="password" name="password" placeholder="请输入密码" v-model="paw" @keyup="changePaw" @click="changePaw">
            <span id="passwordEyeIcon" class="eye"><i class="iconfont icon-guanbianniu" v-if="pawbool" @click="pawRemove"></i></span>
                </div>
                <div class="userverify">
                    <div class="img-check">
                        <div class="img-check-header">
                            <span>请将下列图片点击翻转至正向朝上</span>
                            <a class="img-check-refresh" @click="toggle">换一批</a>
                    </div>
                    <div class="img-check-main">
        <ul class="img-check-pics">
            <li class="img-check-pic" data-val="0" style="background-image: url(https://m.yohobuy.com/passport/img-check.jpg?t=1); background-position: 0rem 0rem;"></li>
            <li class="img-check-pic" data-val="0" style="background-image: url(https://m.yohobuy.com/passport/img-check.jpg?t=1); background-position: -3.75rem 0rem;"></li>
            <li class="img-check-pic" data-val="0" style="background-image: url(https://m.yohobuy.com/passport/img-check.jpg?t=1); background-position: -7.5rem 0rem;"></li>
            <li class="img-check-pic" data-val="0" style="background-image: url(https://m.yohobuy.com/passport/img-check.jpg?t=1); background-position: -11.25rem 0rem;"></li>
        </ul>
            </div>
                    </div>
                </div>
                <button id="smsLoginBtn" class="sms-login-btn" type="button" @click="toggeLogin">登录</button>
                <div class="other-info"></div>
            </div>
        </div>
        </div>
</template>

<script>
// 引入cookie
import common from '../lib/common.js'
var cookie=common.Cookie;
import yadvertising from "../components/Yadvertising.vue";
import $ from "jquery";
export default {
  data() {
    return {
      txt: "",
      paw: "",
      txtbool: false,
      pawbool: false,
      changeUrl: "https://m.yohobuy.com/passport/img-check.jpg?t=1",
      show: false,
      use:[],
    };
  },
  components: {
    yadvertising
  },
  methods: {
    toggle() {
      let _this = this;
      let num = _this.randomNum;
      $.ajax({
        url: "http://localhost:9995/login",
        type: "GET",
        data: {
          num
        },
        success(data) {
          _this.changeUrl = data[0].naem;
        }
      });
    },
    //验证用户名跟密码是否正确
    toggeLogin() {
      let _this = this;
      let reg = /^1(3|4|5|7|8)\d{9}$/;
      if ((_this.txt === "") & (_this.paw === "")) {
        alert("bick");
        return false;
      } else {
        if (reg.test(_this.txt)) {
          if (_this.paw.length >= 6) {
            $.ajax({
              url: "http://localhost:9995/login",
              type: "GET",
              data: {
                username: _this.txt,
                password: _this.paw
              },
              success(data) {
                if (data == "yes") {
                  // console.log(_this.txt);
                  // console.log(_this.paw)
                  _this.use.push({username:_this.txt})
                 cookie.set('use',JSON.stringify(_this.use),7)
                 _this.$router.push('/Yboys')
                } else {
                  alert("密码或手机输入不正确");
                }
              }
            });
          } else {
            alert("输入密码不能少于6位");
          }
        } else {
          alert("手机格式输入不正确");
        }
      }
    },
    changeText() {
      if (this.txt.length > 0) {
        this.txtbool = true;
      } else {
        this.txtbool = false;
      }
    },
    changePaw() {
      if (this.paw.length > 0) {
        this.pawbool = true;
      } else {
        this.pawbool = false;
      }
    },
    //生成一个0-50的随机数到后台获取图片
    randomNum() {
      return Math.floor(Math.random() * 50);
    },
    //返回前一页
    black() {
      this.$router.go(-1);
    },
    //删除按钮删除一个字符串
    textRemove() {
      let nums = this.txt.length;
      if (nums > 0) {
        this.txt = this.txt.substring(0, nums - 1);
      }
    },
    pawRemove() {
      let nums = this.paw.length;
      if (nums > 0) {
        this.paw = this.paw.substring(0, nums - 1);
      }
    },
    //点击查看密码
    showCode() {
      this.show = !this.show;
    }
  }
};
</script>

<style>
a,
abbr,
acronym,
address,
applet,
article,
aside,
audio,
b,
big,
blockquote,
body,
canvas,
caption,
center,
cite,
code,
dd,
del,
details,
dfn,
div,
dl,
dt,
em,
embed,
fieldset,
figcaption,
figure,
footer,
form,
h1,
h2,
h3,
h4,
h5,
h6,
header,
hgroup,
html,
i,
iframe,
img,
ins,
kbd,
label,
legend,
li,
mark,
menu,
nav,
object,
ol,
output,
p,
pre,
q,
ruby,
s,
samp,
section,
small,
span,
strike,
strong,
sub,
summary,
sup,
table,
tbody,
td,
tfoot,
th,
thead,
time,
tr,
tt,
u,
ul,
var,
video {
  border: 0;
  font: inherit;
  font-size: 100%;
  margin: 0;
  padding: 0;
  vertical-align: baseline;
}
*,
:after,
:before {
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  box-sizing: border-box;
}
ul,
li {
  list-style: none;
}
div {
  display: block;
}
select {
  font-size: 100%;
  margin: 0;
  color: black;
  cursor: default;
  text-rendering: auto;
  color: initial;
  letter-spacing: normal;
  word-spacing: normal;
  text-transform: none;
  text-indent: 0px;
  text-shadow: none;
  display: inline-block;
  text-align: start;
  margin: 0em;
  font: 400 13.3333px Arial;
  border: none;
  outline-style: none;
}
input {
  font-size: 100%;
  margin: 0;
  outline: none;
}
button {
  border: 0;
  outline: 0;
}
a{
  text-decoration: none;
}
/*大图片部分*/
.main-warp {
  height: 145px;
}
.main-warp .banner-box {
  width: 375px;
  height: 145px;
  z-index: 1;
  position: relative;
}
.main-warp .banner-box img {
  max-width: 100%;
  overflow: hidden;
}
.main-warp .banner-box .banner-info {
  z-index: 2;
  height: 145px;
  position: absolute;
  width: 300px;
  top: 0;
  box-sizing: border-box;
  margin: 0 37.5px;
}
.main-warp .banner-box .banner-info .top-operation-bar {
  margin-top: 30px;
  height: 25px;
  width: 300px;
}
.main-warp .banner-box .banner-info .top-operation-bar .close {
  display: block;
  float: left;
  color: #fff;
}
.main-warp .banner-box .banner-info .top-operation-bar .register {
  display: block;
  float: right;
  color: #fff;
  border-radius: 0.625rem;
  width: 55px;
  height: 25px;
  border: 1px solid #fff;
  text-align: center;
}
.main-warp .banner-box .banner-info .tip {
  width: 375px;
  font-size: 0.55rem;
  position: absolute;
  bottom: 0.35rem;
  margin-top: 3.8rem;
  left: 50%;
  transform: translateX(-50%);
  text-align: center;
  color: #fff;
}
/*登录界面*/
.sms-login-form {
  width: 375px;
  height: 246px;
  margin-top: 1.5rem;
  padding-left: 1.875rem;
  padding-right: 1.875rem;
  overflow: hidden;
}
.sms-login-form .username {
  margin-bottom: 1.55rem;
}
.sms-login-form .form-group {
  border-bottom: 1px solid #ccc;
  height: 2rem;
}
.sms-login-form .form-group label {
  font-size: 1.25rem;
  margin-right: 0.9rem;
}
.sms-login-form .form-group label .iconfont {
  color: #444;
}
.sms-login-form .form-group input {
  background-color: transparent;
  border: none;
  box-shadow: none;
  width: 15rem;
  margin-left: 1.2rem;
}
.sms-login-form .form-group .icon-guanbianniu {
  color: #444;
  margin-right: 0.05rem;
}
.sms-login-form .password {
  border-bottom: 1px solid #ccc;
  height: 2rem;
}
.sms-login-form .password label {
  font-size: 1rem;
  margin-right: 0.9rem;
}
.sms-login-form .password label .iconfont {
  color: #444;
}
.sms-login-form .password input {
  background-color: transparent;
  border: none;
  box-shadow: none;
  width: 15rem;
  margin-left: 1.2rem;
}
.sms-login-form .userverify {
  margin-top: 1rem;
}
.sms-login-form .userverify .img-check {
  background-color: #fff;
  margin-top: 0;
  margin-bottom: 0;
}
.sms-login-form .userverify .img-check .img-check-header {
  color: #000;
  font-size: 0.7rem;
  line-height: 0.875rem;
  margin-bottom: 0.75rem;
  text-align: left;
}
.sms-login-form .userverify .img-check .img-check-header .img-check-refresh {
  color: #d0021b;
  float: right;
  font-size: 0.55rem;
}
/*验证图片*/
.img-check-main .img-check-pics {
  -webkit-box-pack: justify;
  -webkit-justify-content: space-between;
  display: -webkit-box;
  display: -webkit-flex;
  display: flex;
  justify-content: space-between;
  list-style: none;
  margin: 0;
  padding: 0;
}
.img-check-main > .img-check-pics > .img-check-pic {
  -webkit-transform: scale(0.91);
  background-color: #fff;
  border: 1px solid #e0e0e0;
  transform: scale(0.91);
}

.img-check-pics li {
  background-color: #575757;
  background-repeat: no-repeat;
  background-size: 15rem 15rem;
  height: 3.75rem;
  width: 3.75rem;
}
.sms-login-btn {
  background-color: #b0b0b0;
  border-radius: 0.1rem;
  color: #fff;
  font-size: 0.8rem;
  height: 1.75rem;
  margin-top: 1rem;
  width: 100%;
  text-align: center;
}
/*大图片部分*/
/*点击登录部分*/
/*点击登录部分 */
</style>
