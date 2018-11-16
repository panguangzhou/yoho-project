<template>
    <div>
        <!-- 头部广告 -->
        <yadvertising></yadvertising>
        <!-- 商品详情页头部 -->
       <header id="yoho-header" class="yoho-header boys">
    <a href="javascript:history.go(-1);" class="iconfont icon-fanhui"></a>
    <span class="iconfont new-nav-home icon-caidan
" @click="bool=!bool"></span>
    <p class="nav-title">个人中心</p>
    <div class="homebuttom  boys" v-if="bool">
        <div class="ul-arr"></div>
        <ul>
            <li @click="goboys">
                <a>
                    <i class="iconfont icon-yemian-copy"></i>
                    <span>首页</span>
                </a>
            </li>
            <li @click="gofenlei">
                <a>
                    <i class="iconfont icon-caidanlan"></i>
                    <span>分类</span>
                </a>
            </li>
            <li @click="gogouwu">
                <a rel="nofollow">
                    <i class="iconfont icon-buy-car"></i>
                    <span>购物车</span>
                </a>
            </li>
            <li @click="gome">
                <a rel="nofollow">
                    <i class="iconfont icon-wodedangxuan"></i>
                    <span>我的</span>
                </a>
            </li>
        </ul>
    </div>
</header>
    <!-- 个人信息 -->
    <div class="new-home-c yoho-page">
    <div class="header" v-if="loginBoolNow">
            <a>
                <div class="left">
                    <div class="user-avatar" data-avatar=""></div>
                    <div class="level level-0"></div>
                </div>
                <div class="right">
                    <div class="name eps" v-text="yourName"></div>
                    <div class="trend-code-c">
                        <div class="dot">#&nbsp;</div>
                        <div class="scroll-c go-scroll">
                            <div class="scroll-words trend-code">
                                12c0842136
                            </div>
                        </div>
                        <span class="dot">退出登录</span>
                        <div class="iconfont edit code-set"></div>
                    </div>
                </div>
            </a>
            <a class="iconfont qrcode icon-tab_icon_crm"></a>
            <div class="gif-part hide"></div>
            <a class="family-entry" >
    </a>
    </div>
    <!-- 没有登录状态 -->
    <div class="header" v-if="loginBool">
            <a class="login-btn" @click="goLogin">
                登录&nbsp;/&nbsp;注册
            </a>
    </div>
    <a class="family-entry" >
    </a>
    <!-- 默认频道 -->
    <div class="list s-list">
        <a class="family-entry">
        </a><div class="list-item"><a class="family-entry" >
            </a><div class="body"><a class="family-entry" >
                <div class="main eps">默认购物频道</div>
                </a><a @click="goboys">
                    <div class="value">
                        男士MEN
                    </div>
                </a>
                <div class="arr iconfont icon-xiangyou"></div>
            </div>
        </div>
    </div>
    <div class="notice-c hide">
        <div class="title">
            <span>有货</span>
            <span class="red">公告</span>
        </div>
        <div class="main eps">礼品卡功能上线，需要采购请联系有货客服</div>
    </div>
    <div class="list s-list" @click="gowodedingdan">
        <div class="list-item">
            <div class="body">
                <div class="main eps">我的订单</div>
                <a>
                    <div class="value">全部订单</div>
                </a>
                <div class="arr iconfont icon-xiangyou"></div>
            </div>
        </div>
    </div>
    <!-- 购物操作流程 -->
    <div class="service">
        <a>
            <div class="service-item">
                <div class="iconfont pic icon-fukuan"></div>
                <p class="name">待付款</p>
            </div>
        </a>
        <a >
            <div class="service-item">
                <div class="iconfont pic icon-hezi"></div>
                <p class="name">待发货</p>
            </div>
        </a>
        <a>
            <div class="service-item">
                <div class="iconfont pic icon-che1"></div>
                <p class="name">待收货</p>
            </div>
        </a>
        <div class="service-item">
            <a>
                <p class="num">0</p>
                <p class="name">商品收藏</p>
            </a>
        </div>
        <div class="service-item">
            <a>
                <p class="num">0</p>
                <p class="name">品牌收藏</p>
            </a>
        </div>
        <div class="service-item">
            <a>
                <p class="num">0</p>
                <p class="name">浏览记录</p>
            </a>
        </div>
    </div>
    <div class="list">
        <a class="list-item">
            <div class="pic iconfont icon-coupon"></div>
            <div class="body">
                <div class="main eps">优惠券</div>
                <div class="value">3张</div>
                <div class="arr iconfont icon-xiangyou"></div>
            </div>
        </a>
        <a class="list-item">
            <div class="pic iconfont icon-dk"></div>
            <div class="body">
                <div class="main eps">有货币</div>
                <div class="value"></div>
                <div class="arr iconfont icon-xiangyou"></div>
            </div>
        </a>
    </div>
    <div class="list">
        <a class="list-item">
            <div class="pic iconfont icon-xiaoxi"></div>
            <div class="body">
                <div class="main eps ">消息</div>
                <div class="value"></div>
                <div class="arr iconfont icon-xiangyou"></div>
            </div>
        </a>
        <a class="list-item">
            <div class="pic iconfont icon-kefu"></div>
            <div class="body">
                <div class="main eps">服务与反馈</div>
                <div class="value"></div>
                <div class="arr iconfont icon-xiangyou"></div>
            </div>
        </a>
    </div>
    <div class="ad-pic res-c clearfix">
        <div class="resource-content">
                <div data-id="299771">
            <div class="banner-list">
        <a  rel="nofollow">
            <img src="//img11.static.yhbimg.com/yhb-img01/2017/12/18/17/015ca6b18d8571b763e583a288646f737c.jpg?imageView2/3/w/640/h/200/q/60" alt="活动图片">
        </a>
    </div>
    </div>
            <div style="background-image:url(//img10.static.yhbimg.com/yhb-img01/2017/09/27/14/01ad94e9b9827c3dd636ce906d9640229d.jpg?imageView2/2/w/640/h/26/q/60)" class="divide-image"></div>
    <div data-id="288447">
            <div class="banner-list">
        <a id="288447" name="一张图片" rel="nofollow">
            <img src="//img11.static.yhbimg.com/yhb-img01/2017/11/16/16/0170b0b5b96d1dc3cfd8a23599cc3eb425.jpg?imageView2/3/w/640/h/200/q/60" alt="活动图片">
        </a>
    </div>
    </div>
        </div>
    </div>
    <div id="new-recommend-c" class="" data-switch="false">
        <div class="toper">
            <div class="title">为你优选</div>
        </div>
        <div class="container">
    <div class="good-info " data-good-id="" data-id="" v-for="(p,index) in goodslist" :key="index">
        <div class="tag-container clearfix">
        </div>
        <div class="good-detail-img">
            <a class="good-thumb">
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
                    <span class="sale-price "  v-text="p.price"></span>
            </div>
            <a class="similar-btn iconfont icon-caidan"></a>
        </div>
    </div>
    </div>
    </div>
    </div>
    <ybottomTop></ybottomTop>
    <div class="float-top iconfont icon-huidingbu" @click="gotTop"></div>
    </div>    
</template>

<script>
import common from "../lib/common.js";
var cookie = common.Cookie;
import yadvertising from "../components/Yadvertising.vue";
import ybottomTop from "../components/YbottomTop.vue";
import $ from "jquery";
export default {
  components: {
    yadvertising,
    ybottomTop
  },
  data() {
    return {
      bool: false,
      goodslist: [],
      userinfoStatu: false,
      yourName: "",
      loginBool: true,
      loginBoolNow: false
    };
  },
  methods: {
    toggle() {
      let _this = this;
      $.ajax({
        url: "http://localhost:9995/goodslist",
        type: "GET",
        data: {},
        success(data) {
          _this.goodslist = data;
        }
      });
    },
    //跳转链接
    goboys() {
      this.$router.push("/Yboys");
    },
    gofenlei() {
      this.$router.push("/YfenLei");
    },
    gogouwu() {
      this.$router.push("/YbuyCar");
    },
    gome() {
      this.$router.push("/Yme");
    },
    goLogin(){
        this.$router.push('/Ylogin')
    },
    //检测用户是否登录
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
    //滚动条的位置
    showTime(){
        $(window).scroll(function(){
            if($(this).scrollTop()>500){
                $('.float-top').show();
            }else{
                $('.float-top').hide();
            }
        })
    },
    //点击返回顶部
    gotTop(){
      $('html , body').animate({scrollTop: 0},'slow');
    },
    //点击跳转到我的订单页面
    gowodedingdan(){
      this.$router.push('/Ywodedingdan');
    }
  },
  mounted() {
    this.toggle();
    this.checkLogin();
    this.showTime();
  }
};
</script>

<style scoped>
/* 头部样式 */
.yoho-header,
.yoho-header.boys {
  background-image: -webkit-linear-gradient(#323232, #414141);
  background-image: linear-gradient(#323232, #414141);
}
.yoho-header {
  background-color: #000;
  color: #fff;
  height: 2.25rem;
  line-height: 2.25rem;
  position: relative;
  width: 100%;
  z-index: 20;
}
.yoho-header .icon-fanhui,
.yoho-header .icon-caidan {
  color: #fff;
  display: block;
  font-size: 20px;
  height: 2.25rem;
  line-height: 2.25rem;
  outline: none;
  position: absolute;
  text-align: center;
  top: 0;
  width: 2.25rem;
}
.yoho-header .icon-fanhui {
  left: 0;
}
.yoho-header .icon-caidan {
  right: 0;
}
.yoho-header .icon-fanhui,
.yoho-header .icon-caidan {
  color: #fff;
  display: block;
  font-size: 20px;
  height: 2.25rem;
  line-height: 2.25rem;
  outline: none;
  position: absolute;
  text-align: center;
  top: 0;
  width: 2.25rem;
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
.hide {
  display: none;
}
.homebuttom {
  background-size: 100% 100%;
  color: #fff;
  height: 8.875rem;
  overflow: hidden;
  padding-top: 0.425rem;
  position: absolute;
  right: 0.3rem;
  top: 2rem;
  width: 7rem;
  z-index: 2;
}
.homebuttom.boys .ul-arr {
  background-color: #434343;
}
.homebuttom .ul-arr {
  -webkit-transform: rotate(45deg);
  height: 0.75rem;
  position: absolute;
  right: 0.8rem;
  top: 0.1rem;
  transform: rotate(45deg);
  width: 0.75rem;
}
.homebuttom.boys ul {
  background-image: -webkit-linear-gradient(#434343, #171717);
  background-image: linear-gradient(#434343, #171717);
}
.homebuttom ul {
  border-radius: 0.25rem;
  height: 8.45rem;
  overflow: hidden;
  padding: 1px 0;
  width: 100%;
}
.homebuttom ul li {
  float: left;
  height: 2.1rem;
  line-height: 2.1rem;
  overflow: hidden;
  padding-left: 1rem;
  width: 100%;
}
.homebuttom ul li i {
  color: #fff;
  display: block;
  float: left;
  font-size: 0.75rem;
  width: 1.75rem;
}
.homebuttom.boys ul li span {
  border-bottom: 1px solid #444;
}
.homebuttom ul li span {
  border-bottom: 1px solid #fff;
  color: #fff;
  display: block;
  float: left;
  font-size: 0.7rem;
  height: 2.1rem;
  padding-left: 0.5rem;
  width: 4.25rem;
}
/*  */
.new-home-c {
  background-color: #f0f0f0;
}
/* 头部个人信息 */
.new-home-c .header {
  background-image: url(//cdn.yoho.cn/yohobuywap-node/img/header-bg.b98d69725a.jpg);
  background-size: cover;
  height: 5.1rem;
  padding: 1.15rem 0.75rem 1.45rem;
  position: relative;
  width: 100%;
  overflow: hidden;
}
.new-home-c .header .left {
  float: left;
  height: 2.5rem;
  position: relative;
  width: 2.5rem;
}
.new-home-c .header .left .user-avatar {
  background-image: url(//cdn.yoho.cn/yohobuywap-node/img/user-avatar.c163d87b5d.png);
  background-position: 50%;
  background-size: cover;
  border: 0.075rem solid #fff;
  border-radius: 50%;
  height: 100%;
  overflow: hidden;
  width: 100%;
}
.new-home-c .header .left .level {
  background-size: 100% 100%;
  bottom: -0.3rem;
  height: 0.625rem;
  left: 0.5rem;
  position: absolute;
  width: 1.5rem;
}
.new-home-c .header .right {
  color: #fff;
  float: left;
  height: 2.5rem;
  margin-left: 0.5rem;
  width: 11.25rem;
}
.new-home-c .header .right .name {
  font-size: 0.8rem;
  line-height: 1.25rem;
}
.new-home-c .eps {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.new-home-c .header .right .trend-code-c {
  float: left;
  line-height: 1.25rem;
}
.new-home-c .header .right .trend-code-c .dot:first-of-type {
  text-align: left;
  font-size:0.3rem;
}
.new-home-c .header .right .trend-code-c .scroll-c {
  height: 1.25rem;
  max-width: 4.75rem;
  overflow: hidden;
  position: relative;
}
.new-home-c .header .right .trend-code-c div {
  float: left;
}
.new-home-c .header .right .trend-code-c .scroll-words {
  left: 0;
  position: relative;
  top: 0;
  white-space: nowrap;
}
.new-home-c .header .right .trend-code-c div {
  float: left;
}
.new-home-c .header .right .trend-code-c .dot {
  text-align: right;
  width: 0.75rem;
}
.new-home-c .header .right .trend-code-c div {
  float: left;
}
.new-home-c .header .right .trend-code-c .edit {
  font-size: 0.75rem;
  margin-left: 0.25rem;
  vertical-align: middle;
  width: 0.75rem;
}
.new-home-c .header .right .trend-code-c div {
  float: left;
}
.new-home-c .header .qrcode {
  color: #fff;
  display: block;
  font-size: 0.925rem;
  height: 0.925rem;
  position: absolute;
  right: 0.75rem;
  top: 0.5rem;
  width: 0.925rem;
}
.new-home-c .header .gif-part {
  background-image: url(//cdn.yoho.cn/yohobuywap-node/img/arr-page.e4e44661ea.gif);
  background-size: 100% 100%;
  bottom: 0;
  height: 3.5rem;
  position: absolute;
  right: 0;
  width: 3.5rem;
}
.hide {
  display: none;
}
.new-home-c .header .family-entry {
  background-image: url(//cdn.yoho.cn/yohobuywap-node/img/family-entry.e4e44661ea.gif);
  background-repeat: no-repeat;
  background-size: 100%;
  bottom: 0;
  display: block;
  height: 3.4rem;
  position: absolute;
  right: 0;
  width: 3.4rem;
}
/* 未登录状态下的样式 */
.new-home-c .header .login-btn {
    border: .075rem solid #fff;
    color: #fff;
    display: block;
    font-size: 1rem;
    height: 2rem;
    line-height: 2rem;
    margin: .375rem auto;
    text-align: center;
    width: 6.5rem;
}
/* 默认频道 */
.new-home-c .list {
  background-color: #fff;
  clear: both;
  margin-bottom: 0.5rem;
}
.new-home-c .s-list .list-item {
  height: 2rem;
  line-height: 2rem;
}
.new-home-c .list .list-item {
  display: block;
  height: 2.2rem;
  line-height: 2.2rem;
  padding: 0 0 0 0.75rem;
}
.new-home-c .list .list-item:last-child .body {
  border-bottom: 0;
}
.new-home-c .s-list .list-item .body {
  border-bottom: 0;
}
.new-home-c .list .list-item .body {
  border-bottom: 1px solid #e0e0e0;
  width: 90%;
}
.new-home-c .s-list .list-item div {
  height: 2rem;
}
.new-home-c .s-list .list-item .body .main {
  font-size: 0.8rem;
  width: 9rem;
  float: left;
}
.new-home-c .list .list-item div {
  color: #444;
  float: left;
  font-size: 0.7rem;
  height: 2.2rem;
}
.new-home-c .eps {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.new-home-c .s-list .list-item .body .value {
  text-align: right;
  width: 7rem;
  float: left;
  margin-left: 3rem;
}
.new-home-c .list .list-item .body .arr {
  color: #e0e0e0;
  font-size: 0.6rem;
  text-align: right;
  width: 0.75rem;
  float: right;
}
/*购物操作流程*/
.new-home-c .service {
  background-color: #fff;
  float: left;
  margin-bottom: 0.5rem;
  margin-top: -0.5rem;
}
.new-home-c .service .service-item {
  border-top: 1px solid #e0e0e0;
  color: #444;
  float: left;
  height: 3.625rem;
  padding: 0.5rem 1.625rem;
  position: relative;
  text-align: center;
  width: 7.5rem;
}
.new-home-c .service .service-item .pic {
  font-size: 1.25rem;
  height: 1.375rem;
  line-height: 1.125rem;
  padding-top: 0.25rem;
}
.new-home-c .service .service-item .name {
  color: #444;
  font-size: 0.6rem;
  height: 1.375rem;
  line-height: 1.375rem;
}
/*为你优选 */
#new-recommend-c .toper {
  border-bottom: 1px solid #e0e0e0;
  height: 2rem;
  line-height: 0.8rem;
  padding: 0.6rem 0.75rem;
}
#new-recommend-c .toper .title {
  border-left: 0.125rem solid #444;
  color: #444;
  font-size: 0.8rem;
  font-weight: 500;
  line-height: 0.7rem;
  margin-top: 0.1rem;
  padding-left: 0.5rem;
}
#new-recommend-c .container {
  padding-left: 0.375rem;
  overflow: hidden;
}
/* 返回顶部小标签 */
.float-top {
    width:2.3rem;
    height: 2.3rem;
    position:fixed;
    right:1rem;;
    bottom:5rem;
    background-color:rgba(0,0,0,.3);
    border-radius: 50%;
    color:#fff;
    font-size:1rem;
    text-align:center;
    line-height:2.3rem;
    z-index: 9999;
}
</style>
