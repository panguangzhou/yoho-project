<template>
    <div>
        <advertising></advertising>
        <!-- 购物车头部 -->
        <header id="yoho-header" class="yoho-header boys">
    <a href="javascript:;" class="iconfont nav-back icon-fanhui"></a>
    <p class="nav-title">购物车</p>
    <span class="nav-btn">编辑</span>
</header>
    <!-- 购物车内容 -->
    <div class="shopping-cart-page yoho-page ">
    <p class="login-info" v-show="loginState">
        <span class="iconfont"></span>
        请您先
        <a class="btn btn-login" @click="login">登录</a>
        可以同步电脑和手机中的商品
    </p>
    <div class="cart-box">
        <div class="cart-zero">
    <i class="iconfont icon-buy-car"></i>
    <p>您的购物车暂无商品</p>
    <a @click="guan">随便逛逛</a>
</div>
</div>
    <div class="recommend-for-you box hide" style="display: block;">    <div id="goods-container" class="goods-container">
        <p class="title">
            <span>为你优选新品</span>
        </p>
        <div class="new-goods container clearfix">
                 
    <div class="good-info " data-good-id="" data-id="51358054" v-for="(p,index) in arrs" :key="index" >
        <div class="tag-container clearfix">
                    <!-- <p class="good-tag limit-tag">限量</p> -->
        </div>
        <div class="good-detail-img">
            <a class="good-thumb" >
                    <img class="lazy" :src="p.imgUrl">
            </a>
            <div class="similar-c">
    <div class="bg"></div>
    <a>找相似</a>
</div>        </div>
        <div class="good-detail-text">
            <div class="name">
                <a v-text="p.title"></a>
            </div>
            <div class="price">
                    <span class="sale-price " v-text="p.price"></span>
            </div>
            <a class="similar-btn iconfont"></a>
        </div>
    </div>
    </div>
    </div>
    </div>  
    </div>
    <button @click="loginStates">点击查看登录状态</button>  
    </div>  
</template>

<script>
import common from '../lib/common.js'
var cookie=common.Cookie;
import advertising from "../components/Yadvertising.vue";
import $ from "jquery";
export default {
  data() {
    return {
      arrs: [],
    //   是否是登录的状态
    loginState:false,
    };
  },
  components: {
    advertising
  },
  methods: {
    toggle() {
      let _this = this;
      $.ajax({
        url: "http://localhost:9995/goodslist",
        type: "GET",
        data: {},
        success(data) {
          _this.arrs = data;
        }
      });
    },
    // 点击登录
    login() {
      this.$router.push("/Ylogin");
    },
    // 随便逛逛
    guan() {
      this.$router.push("/Yguan");
    },
    //判断是否是登录状态
    loginStates(){
        let len = cookie.get('use');
        if(len.length==0){
            this.loginState=true
        }else{
            this.loginState=false
        }
    }
  },
  mounted() {
    this.toggle();
    this.loginStates();
  }
};
</script>

<style scoped>
/* 购物车头部 */
.yoho-header,
.yoho-header.boys {
  background-image: -webkit-linear-gradient(#323232, #414141);
  background-image: linear-gradient(#323232, #414141);
}
.yoho-header {
  background-color: #000;
  color: #fff;
  height: 3rem;
  line-height: 3rem;
  position: relative;
  width: 100%;
  z-index: 20;
}
.yoho-header .nav-back {
  height: 3rem;
  left: 0;
  line-height: 3rem;
  width: 2.625rem;
}
.yoho-header .nav-back,
.yoho-header .nav-home {
  color: #fff;
  display: block;
  font-size: 20px;
  height: 3rem;
  line-height: 3rem;
  outline: none;
  position: absolute;
  text-align: center;
  top: 0;
  width: 2.25rem;
}
.yoho-header .nav-title {
  font-size: 1.05rem;
  font-weight: 400;
  margin-left: 2.925rem;
  margin-right: 2.925rem;
}
.yoho-header .nav-title {
  color: #fff;
  font-size: 0.9rem;
  font-weight: 700;
  height: 100%;
  left: 0;
  margin-left: 2.5rem;
  margin-right: 2.5rem;
  overflow: hidden;
  position: absolute;
  right: 0;
  text-align: center;
  text-overflow: ellipsis;
  top: 0;
  white-space: nowrap;
}
.yoho-header .nav-btn {
  height: 3rem;
  line-height: 3rem;
  right: 0.3rem;
  width: 2.625rem;
}
.yoho-header .nav-btn,
.yoho-header .nav-sub-right {
  color: #fff;
  display: block;
  height: 3rem;
  line-height: 3rem;
  outline: none;
  position: absolute;
  text-align: center;
  top: 0;
  width: 2.25rem;
}
.yoho-header .nav-btn {
  font-size: 20px;
  font-size: 14px;
  right: 0.25rem;
}
/*购物车内容*/
.shopping-cart-page {
  margin-bottom: 3rem;
  overflow-x: hidden;
}
.shopping-cart-page .login-info {
  box-sizing: content-box;
  color: #24acaa;
  font-size: 0.825rem;
  height: 1.35rem;
  padding: 0.5rem 0.575rem;
  text-align: center;
}
.shopping-cart-page .login-info .iconfont {
  font-size: 0.825rem;
}
.shopping-cart-page .login-info .btn {
  background: #ed0010;
  color: #fff;
  display: inline-block;
  height: 1.35rem;
  line-height: 1.35rem;
  width: 2.35rem;
}
.cart-zero {
  height: auto;
  padding-bottom: 20%;
  padding-top: 2.25rem;
  width: 100%;
}
.cart-zero i {
  color: #505050;
  display: block;
  font-size: 3.6rem;
  margin: 0 auto;
  text-align: center;
}
.cart-zero a,
.cart-zero p {
  display: block;
  font-size: 0.6rem;
  text-align: center;
}
.cart-zero p {
  color: #444;
  padding: 0.6rem 0;
}
.cart-zero a {
  background: #444;
  border: 1px solid #505050;
  border-radius: 5px;
  color: #fff;
  height: 1.4rem;
  line-height: 1.4rem;
  margin: 0 auto;
  overflow: hidden;
  width: 27%;
}
.cart-zero a,
.cart-zero p {
  display: block;
  font-size: 0.6rem;
  text-align: center;
}
/*喜欢推荐*/
.recommend-for-you {
  font-size: 0.35rem;
  padding: 0.875rem 0;
}
.shopping-cart-page .box {
  background-color: #fff;
  margin-top: 0.5rem;
}
.recommend-for-you {
  background: #fff;
  border-bottom: 1px solid #e0e0e0;
  border-top: 1px solid #e0e0e0;
  font-size: 0.3rem;
  padding: 0.75rem 0 0.75rem 0.375rem;
}
.goods-container {
  min-height: 25.775rem;
  padding-left: 0.45rem;
  padding-top: 0.225rem;
}
.recommend-for-you .title {
  font-size: 0.95rem;
  line-height: 2.575rem;
}
.recommend-for-you .title {
  color: #444;
  font-size: 0.8rem;
  line-height: 2.2rem;
  text-align: center;
}
.good-info {
  height: 14.825rem;
  padding: 5px;
  width: 50%;
  overflow: hidden;
}
.good-info .tag-container {
  height: 0.825rem;
}
.good-info .tag-container {
  height: 0.7rem;
  overflow: hidden;
  width: 100%;
}
.good-info .tag-container .limit-tag {
  line-height: 0.75rem;
  width: 1.75rem;
}
.good-info .tag-container .good-tag {
  font-size: 0.525rem;
  height: 0.825rem;
  line-height: 0.825rem;
  margin-right: 0.125rem;
}
.good-info .tag-container .good-tag:last-child {
  margin-right: 0;
}
.good-info .tag-container .limit-tag {
  border: 1px solid #000;
  color: #000;
  line-height: 0.65rem;
  width: 1.5rem;
}
.good-info .tag-container .good-tag {
  box-sizing: border-box;
  display: block;
  float: left;
  font-size: 12px;
  height: 0.7rem;
  line-height: 0.7rem;
  margin-right: 0.1rem;
  text-align: center;
}
.good-detail-img {
  height: 10.775rem;
}
.good-detail-img {
  height: 9.2rem;
  position: relative;
}
.good-detail-img img {
  height: 10.775rem;
}
.good-detail-img img {
  display: block;
  height: 9.2rem;
  width: 100%;
}
.good-detail-img .similar-c {
  bottom: 0;
  display: none;
  height: 100%;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
  width: 100%;
}
.good-detail-img .similar-c .bg {
  background-color: #000;
  height: 100%;
  opacity: 0.6;
  width: 100%;
}
.good-detail-img .similar-c a {
  background-color: #d0021b;
  border-radius: 50%;
  color: #fff;
  display: block;
  font-size: 0.7rem;
  height: 3rem;
  left: 50%;
  line-height: 3rem;
  margin-left: -1.5rem;
  margin-top: -1.5rem;
  position: absolute;
  text-align: center;
  top: 50%;
  width: 3rem;
}
.good-detail-text {
  position: relative;
}
.good-detail-text .name a {
  font-size: 0.65rem;
  height: 1.75rem;
  line-height: 0.875rem;
  margin: 0.45rem 0 0.3rem;
  min-height: 1.475rem;
  padding: 0.15rem 0;
}
.good-detail-text .name a,
.good-detail-text .price {
  -webkit-transform: scale(0.9);
  font-size: 12px;
  transform: scale(0.9);
}
.good-detail-text .name a {
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  color: #444;
  display: -webkit-box;
  height: 1.5rem;
  line-height: 0.75rem;
  margin: 0.375rem 0 0.25rem;
  min-height: 1.25rem;
  overflow: hidden;
  padding: 0.125rem 0;
}
.good-detail-text .price {
  font-size: 0.65rem;
  line-height: 0.65rem;
}
.recommend-for-you .price {
  font-size: 0.7rem;
  margin-top: 0.225rem;
}
.good-detail-text .price {
  line-height: 0.55rem;
  white-space: nowrap;
}
.good-detail-text .name a,
.good-detail-text .price {
  -webkit-transform: scale(0.9);
  font-size: 12px;
  transform: scale(0.9);
}
.recommend-for-you .price {
  font-size: 0.6rem;
  line-height: 1;
  margin-top: 0.2rem;
  position: relative;
}
.width750 .recommend-for-you .price .sale-price {
  margin-right: 0.225rem;
}
.good-detail-text .price .sale-price {
  color: #d62927;
}
.recommend-for-you .price .sale-price {
  color: #d9134f;
  margin-right: 0.2rem;
}
.width750 .good-detail-text .price .market-price {
  margin: 0 0 0 0.15rem;
}
.good-detail-text .price .market-price {
  color: #b0b0b0;
  font-size: 12px;
  margin: 0 0 0 0.125rem;
  text-decoration: line-through;
}
.good-detail-text .similar-btn {
  bottom: -0.5rem;
  color: #b0b0b0;
  font-weight: 700;
  height: 2rem;
  line-height: 2.5rem;
  position: absolute;
  right: 0;
  text-align: center;
  width: 1.25rem;
}
</style>
