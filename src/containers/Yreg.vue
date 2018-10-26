<template>
    <div>
        <div class="main-wrap" id="main-wrap" data-minipath="//m.yohobuy.com/api/wechat/miniapp.jpg?miniapp_type=0&amp;param=%7B%22union_type%22%3A%22%22%7D&amp;miniQrType=0">    
            <div class="reg-new-page">
    <div class="top-operation-bar">
        <button class="iconfont icon-fanhui" onclick="javascript:history.go(-1);" type="button"></button>
        <span class="page-title">注册</span>
    </div>
    <form class="reg-form">
        <div class="form-group mobile">
            <label for="mobile" class="iconfont icon-shouji"></label>
            <select name="" id="countryCodeSelector" class="country-select">
                    <option v-for="(p,index) in arrsNumber" :key="index" v-text="p.name" :value="p.number"></option>
            </select>
            <i class="iconfont icon-daosanjiao"></i>
            <i class="line">|</i>
            <span class="shoujiquhao"></span>
            <input type="tel" name="mobile" placeholder="请输入手机号" class="mobile-input" autocomplete="off" v-model="txt">
            <i id="clearMobile" class="iconfont icon-guanbianniu"></i>
        </div>
        <div class="form-group verify-code">
            <label for="verifyCode" class="iconfont icon-bai-hudun"></label><input type="text" name="verifyCode" placeholder="请输入验证码" class="verify-code-input" autocomplete="off"><button id="getVerifyCodeBtn" class="get-verify-code" type="button">获取验证码</button>
        </div>
        <div class="form-group password">
            <label for="password" class="iconfont icon-mima"></label><input type="password" name="password" placeholder="请输入密码" autocomplete="off" v-model="paw">
            <span id="passwordEyeIcon" class="eye"><i class="iconfont icon-faxian-on"></i><i class="iconfont icon-yanjing hide"></i></span>
        </div>
        <div class="form-group invite-code">
            <label for="inviteCode" class="iconfont icon-yikeappshouyetubiao31"></label><input type="text" name="inviteCode" placeholder="好友潮流口令（非必填）" autocomplete="off" value="">
        </div>
        <input name="token" type="hidden" value="">
        <div data-userverify="true" data-geetest="false" id="js-img-check" class="full-img-verify"><div class="img-check">
    <div class="img-check-header">
        <span>请将下列图片点击翻转至正向朝上</span>
        <a class="img-check-refresh">换一批</a>
    </div>
    <div class="img-check-main">
        <ul class="img-check-pics">
            <li class="img-check-pic" data-val="0" style="background-image: url(https://m.yohobuy.com/passport/img-check.jpg?t=2); background-position: 0rem 0rem;"></li>
            <li class="img-check-pic" data-val="0" style="background-image: url(https://m.yohobuy.com/passport/img-check.jpg?t=2); background-position: -3.75rem 0rem;"></li>
            <li class="img-check-pic" data-val="0" style="background-image: url(https://m.yohobuy.com/passport/img-check.jpg?t=2); background-position: -7.5rem 0rem;"></li>
            <li class="img-check-pic" data-val="0" style="background-image: url(https://m.yohobuy.com/passport/img-check.jpg?t=2); background-position: -11.25rem 0rem;"></li>
        </ul>
    </div>
</div></div>
<input id="yohobuy" type="text" style="display:none;" />
        <button id="regBtn" class="reg-btn" type="button" @click="regCode">注册</button>
        <div class="protocol">
            <span class="iconfont checkbox icon-dagou" @click="agree=!agree" :class="{'blue':agree}"></span>
            我已阅读并同意遵守<a title="Yoho!Buy有货服务条款" target="_blank">Yoho!Buy有货服务条款</a>
        </div>
    </form>
</div>
</div>
    </div>
</template>
<script>
import $ from "jquery";
export default {
  data() {
    return {
      txt: "",
      paw: "",
      index: 0,
      bool: false,
      agree: false,
      url:'',
      arrsNumber: [
        {
          name: "中国",
          number: "+86"
        },
        {
          name: "韩国",
          number: "+82"
        },
        {
          name: "加拿大",
          number: "+1"
        },
        {
          name: "马拉西亚",
          number: "+60"
        },
        {
          name: "美国",
          number: "+1"
        },
        {
          name: "日本",
          number: "+81"
        },
        {
          name: "新加坡",
          number: "+65"
        },
        {
          name: "英国",
          number: "+44"
        },
        {
          name: "澳大利亚",
          number: "+61"
        },
        {
          name: "中国澳门",
          number: "+853"
        },
        {
          name: "中国台湾",
          number: "+886"
        },
        {
          name: "中国香港",
          number: "+852"
        }
      ]
    };
  },
  //实现用户注册功能
  //15219595956
  methods: {
    regCode() {
      let _this = this;
      let reg = /^1(3|4|5|7|8)\d{9}$/;
      if (_this.txt.length !== 0 && _this.paw.length !== 0) {
        if (reg.test(_this.txt)) {
          if (_this.paw.length >= 6) {
            if (_this.agree === true) {
              //验证正确，发起正则请求
              $.ajax({
                url: "http://localhost:9995/reg",
                type: "POST",
                data: {
                  username: _this.txt,
                  password: _this.paw
                },
                success(data) {
                  if (data == "yes") {
                    _this.bool = true;
                    _this.txt='';
                    _this.paw='';
                    _this.$router.push('/Ylogin')
                  } else {
                    alert("用户名已经被注册");
                  }
                }
              });
            }else{
              alert('你还没有同意用户协议')
            }
          } else {
            console.log("输入的密码位数不能少于6位");
          }
        } else {
          alert("手机输入不正确");
          return false;
        }
      } else {
        alert("用户名和密码不能输入为空");
        return false;
      }
    },
    //获取区号的功能
    getArea() {}
  }
};
</script>
<style>
/*公共样式*/
.iconfont {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  -webkit-text-stroke-width: 0.4px;
  font-family: iconfont, sans-serif !important;
  font-size: 0.6rem;
  font-style: normal;
  text-decoration: none;
}
button,
input,
select,
textarea {
  font-size: 100%;
  margin: 0;
}
option {
  font-weight: normal;
  display: block;
  white-space: pre;
  min-height: 1.2em;
  padding: 0px 2px 1px;
}
/*公共样式*/
/*注册*/
.main-wrap {
  margin-left: auto;
  margin-right: auto;
  position: absolute;
  width: 100%;
}
.main-wrap .reg-new-page {
  padding-left: 1.875rem;
  padding-right: 1.875rem;
}
.main-wrap .reg-new-page .top-operation-bar {
  color: #000;
  height: 1.25rem;
  margin-top: 1.25rem;
  width: 15rem;
}
.main-wrap .reg-new-page .top-operation-bar button {
  background-color: transparent;
  border: none;
  box-shadow: none;
  font-size: 1.125rem;
  padding: 0;
  text-align: center;
  width: 1.25rem;
}
.main-wrap .reg-new-page .top-operation-bar .page-title {
  display: inline-block;
  font-size: 0.85rem;
  margin-top: 0.175rem;
  text-align: center;
  width: 12.5rem;
}
/* 输入手机 */
.main-wrap .reg-new-page .reg-form {
  margin-top: 2.5rem;
}
.main-wrap .reg-new-page .reg-form .mobile {
  border-bottom: 1px solid #ccc;
  height: 1.25rem;
  padding-bottom: 0.3rem;
  margin-bottom: 1.4rem;
}
.main-wrap .reg-new-page .reg-form .mobile label {
  margin-right: 0.75rem;
  font-size: 1rem;
}
.main-wrap .reg-new-page .reg-form .mobile .country-select {
  background-color: transparent;
  border: none;
  width: 3.5rem;
  appearance: none;
}
.main-wrap .reg-new-page .reg-form .mobile .icon-daosanjiao {
  float: none;
  font-size: 0.3rem;
  color: #444;
}
.main-wrap .reg-new-page .reg-form .mobile .line {
  margin-right: 0.5rem;
  float: none;
}
.main-wrap .reg-new-page .reg-form .mobile .mobile-input {
  width: 7rem;
}
.main-wrap .reg-new-page .reg-form input {
  border: none;
  background-color: transparent;
  box-shadow: none;
}
/*输入密码*/
.main-wrap .reg-new-page .reg-form .verify-code {
  border-bottom: 1px solid #d0d0d0;
  height: 1.25rem;
  margin-bottom: 1.4rem;
}
.main-wrap .reg-new-page .reg-form .verify-code-input {
  width: 8rem;
  border: none;
  background-color: transparent;
  box-shadow: none;
  display: inline-block;
  padding-left: 1rem;
}
.main-wrap .reg-new-page .reg-form .verify-code .get-verify-code {
  background-color: #b0b0b0;
  border-radius: 0.625rem;
  color: #fff;
  float: right;
  font-size: 0.55rem;
  height: 1.25rem;
  line-height: 1.25rem;
}
/*密码*/
.main-wrap .reg-new-page .reg-form .password {
  border-bottom: 1px solid #d0d0d0;
  height: 1.25rem;
  margin-bottom: 1.4rem;
}
.main-wrap .reg-new-page .reg-form .password label {
  font-size: 0.65rem;
  margin-right: 0.9rem;
}
.main-wrap .reg-new-page .reg-form .password input {
  width: 10rem;
  border: none;
  background-color: transparent;
  box-shadow: none;
  display: inline-block;
  padding-left: 1rem;
}
.main-wrap .reg-new-page .reg-form .password .eye {
  float: right;
  text-align: center;
  width: 0.75rem;
}
.main-wrap .reg-new-page .reg-form .invite-code {
  border-bottom: 1px solid #d0d0d0;
  height: 1.25rem;
  margin-bottom: 1.4rem;
}
.main-wrap .reg-new-page .reg-form .invite-code label {
  font-size: 0.65rem;
  margin-right: 0.9rem;
}
.main-wrap .reg-new-page .reg-form .invite-code input {
  width: 13rem;
  border: none;
  background-color: transparent;
  box-shadow: none;
  display: inline-block;
  padding-left: 1rem;
}
/*验证图片*/
.main-wrap .reg-new-page .img-check {
  background-color: #fff;
  margin-bottom: 0;
  margin-top: 0;
}
.main-wrap .reg-new-page .img-check .img-check-header {
  color: #b0b0b0;
  font-size: 0.7rem;
  line-height: 0.875rem;
  margin-bottom: 0.75rem;
  text-align: left;
}
.main-wrap .reg-new-page .img-check .img-check-header span {
  color: #444;
  font-size: 0.5475rem;
  line-height: 1.5;
}
.main-wrap .reg-new-page .img-check .img-check-header .img-check-refresh {
  color: #d0021b;
  float: right;
}
.main-wrap .reg-new-page .img-check .img-check-main .img-check-pics {
  display: flex;
  justify-content: space-between;
  list-style: none;
  margin: 0;
  padding: 0;
  -webkit-box-pack: justify;
}
.main-wrap
  .reg-new-page
  .img-check
  .img-check-main
  .img-check-pics
  .img-check-pic {
  background-color: #fff;
  border: 1px solid #e0e0e0;
  transform: scale(0.91);
}
.main-wrap .reg-new-page .img-check .img-check-main .img-check-pics li {
  background-repeat: no-repeat;
  background-size: 15rem 15rem;
  height: 3.75rem;
  width: 3.75rem;
}
/* 确认按钮 */
.main-wrap .reg-new-page .reg-btn {
  background-color: #b0b0b0;
  border-radius: 0.1rem;
  color: #fff;
  font-size: 0.8rem;
  height: 1.75rem;
  margin-top: 1rem;
  width: 100%;
  text-align: center;
  padding: 0 1rem;
  overflow: hidden;
}
.main-wrap .reg-new-page .protocol {
  color: #444;
  font-size: 0.4rem;
  margin-top: 0.5rem;
  text-align: center;
  width: 100%;
}.main-wrap .reg-new-page .protocol .blue{
    color:#58bc58;
}
.main-wrap .reg-new-page .protocol a {
  color: #c00;
  font-size: 0.4rem;
  text-decoration: underline;
}
.letgo{
  font-size:2rem;
  color:#58BC58;
  text-align: center;
  width:100%;
}
</style>




