<template>
    <div>
        <yadvertising></yadvertising>
        <!-- 商品详情页头部 -->
       <header id="yoho-header" class="yoho-header boys">
    <a href="javascript:history.go(-1);" class="iconfont icon-fanhui"></a>
    <span class="iconfont new-nav-home icon-caidan
" @click="bool=!bool"></span>
    <p class="nav-title">商品详情</p>
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
<!-- 商品图片展示区域 -->
<div class="banner-top">
    <div class="banner-swiper">
        <img :src="img" alt="商品图片">
    </div>
    </div> 
    <!-- 商品标题 -->
    <div class="goods-name">
        <h1 class="name" v-text="title"></h1>
    </div>
    <!-- 价格区域 -->
    <div class="price-date">
        <div class="goods-price">
            <h2 class="current-price" v-text="prices"></h2>
            <h2 class="previous-price"></h2>
        </div>
    </div>
    <!-- 会员价 -->
    <ul class="vip-level clearfix">
        <li class="icons-item ">
            <span class="vip-img">
            </span>
            <span class="vip-price">¥531.05</span>
        </li>
        <li class="icons-item ">
            <span class="vip-img">
            </span>
            <span class="vip-price">¥503.10</span>
        </li>
        <li class="icons-item ">
            <span class="vip-img">
            </span>
            <span class="vip-price">¥491.92</span>
        </li>
</ul>
    <!-- 领取优惠券 -->
    <div class="brand-coupon">
	    <i class="iconfont font-right pull-right"></i>
	    <i class="promotion-icon">券</i><span>领取优惠券</span>
	</div>
    <!-- 加价促销 -->
    <div class="goods-discount" id="goodsDiscount">
        <h2 class="first-item tap-hightlight short-text"><span class="promotion-icon">促</span>全场￥99加价购<span class="iconfont dropdown" :class="[youhui?'icon-arrow-top':'icon-xiafanye']" @click="youhui=!youhui"></span></h2>
        <div class="discount-folder">
            <h2 class="folder-item tap-hightlight" v-show="youhui"><span class="promotion-icon">促</span>全场￥59加价购</h2>
        </div>
        <div class="discount-folder">
            <h2 class="folder-item tap-hightlight" v-show="youhui"><span class="promotion-icon">促</span>全场￥39加价购</h2>
        </div>
</div>
    <!-- 商品评价和资讯-->
    <div class="feedback-list ">
        <ul id="nav-tab" class="nav-tab clearfix" style="touch-action: pan-y; user-select: none; -webkit-user-drag: none; -webkit-tap-highlight-color: rgba(0, 0, 0, 0);">
            <li class="comment-nav tap-hightlight focus">商品评价(<span class="comments-num">30</span>)</li>
                <li class="consult-nav tap-hightlight">购买咨询(<span class="consults-num">25</span>)</li>
        </ul>
        <div id="feedback-content">
            <div class="comment-content content">
                    <div class="comment-content-main content-main clearfix">
                        <div class="user-info clearfix">
                            <span class="user-name pd-right">
                                KIDDO
                            </span>
                        <span class="goods-spec">
                            购买了<b>海军蓝</b>
                        </span>
                        <span class="goods-size">/M</span>
                        </div>
                    <p class="detail-content">
                        挺帅
                    </p>
                    <span class="comment-time">
                        2018-10-21 10:36:42
                    </span>
                    </div>
                    <a class="comment-content-footer tap-hightlight" href="//m.yohobuy.com/product/detail/comments?product_id=1077039" rel="nofollow">
                        查看更多
                        <span class="iconfont"></span>
                    </a>
            </div>
        
            <div class="consult-content content hide">
                    <div class="consult-content-main content-main">
                            <div class="question">
                                <span class="iconfont"></span>
                                <p>
                                    177 120斤穿多大<br>
                                    <span class="time">2018-10-21 17:42:59</span>
                                </p>
                            </div>
        
                            <div class="answer">
                                <span class="iconfont"></span>
                                <p>向您推荐L号供参考,由于版型和个人穿衣风格不同，建议您参照此款商品尺码信息。</p>
                            </div>
                            <div class="question">
                                <span class="iconfont"></span>
                                <p>
                                    165 60 想穿大一点的什么码<br>
                                    <span class="time">2018-10-13 10:57:20</span>
                                </p>
                            </div>
        
                            <div class="answer">
                                <span class="iconfont"></span>
                                <p>向您推荐S号供参考,由于版型和个人穿衣风格不同，建议您参照此款商品“尺码信息”。</p>
                            </div>
                    </div>
                    <a class="consult-content-footer tap-hightlight" href="//m.yohobuy.com/product/detail/consults?product_id=1077039&amp;total=25" rel="nofollow">
                        查看更多
                        <span class="iconfont"></span>
                    </a>
            </div>
        </div>
        </div>
       <!--加入购物车 -->
       <div class="cart-bar">
    <a class="new-foot-ico" rel="nofollow" @click="gobuyCar">
        <div class="num-incart iconfont icon-buy-car">
            <span :class="[spanbool?'num-tag':'']" v-text="spanNum"></span>
        </div>
        <div class="tip">购物车</div>
    </a>
    <a class="new-foot-ico store">
        <div class="iconfont icon-hezi"></div>
        <div class="tip">品牌店铺</div>
    </a>
    <a href="javascript:;" class="new-foot-ico fav like-btn-c">
        <div id="likeBtn" class="favorite iconfont icon-dagou"></div>
        <div class="tip opa">收藏</div>
    </a>
    <span class="btn-c" @click="state=!state">
        <a id="addtoCart" href="javascript:;" class="addto-cart add-to-cart-url">加入购物车</a>
    </span>
</div>
<!--商品属性选项卡 -->
<div class="chose-panel" v-show="state">
    <div class="main">
        <div class="close iconfont icon-guanbianniu" @click="state=!state"></div>
        <div class="infos ">
            <div class="basic-info">
                <div class="thumb-img">
                    <img class="thumb" :src="img">
                </div>
                <div class="text-info">
                    <p class="price">
                        <span class="sale-price no-price" v-text="prices"></span>  
                    </p>
                    <p class="not-choose hide">请选择颜色、尺码</p>
                    <p class="choosed-info">已选</p>
                    <p class="size-info" v-text="color"></p>
                    <p class="size-rec" v-text="chicun"></p>
                </div>
            </div>
            <div class="chose-items">
                    <div class="block-list">
                        <span class="name">颜色</span>
                        <ul class="size-row clearfix">
                            <li class="block chosed" data-prop-id="color" data-value-id="1181308" v-text="color"></li>
                        </ul>
                    </div>
                    <div class="block-list">
                        <span class="name">尺码</span>
                        <ul class="size-row clearfix">
                            <li class="block" data-prop-id="size" data-value-id="203" v-for="(p,index) in sizearr" :key="index" v-text="p" @click="getsize(index,p)" :class="[index===page?'chosed':'']"></li>
                        </ul>
                    </div>
                <div class="num">
                    <span class="name">数量</span>
                    <div class="clearfix">
                        <a class="btn btn-minus " href="javascript:void(0);">
                            <span class="iconfont" @click="numbers>1?numbers--:1">-</span>
                        </a>
                        <input id="good-num" class="good-num disabled" type="text" disabled="true" v-model="numbers">
                            <a class="btn btn-plus" href="javascript:void(0);">
                                <span class="iconfont" @click="numbers>=nums?nums:numbers++">+</span>
                            </a>
                    </div>
                    <span class="left-num"></span>
                    <input id="left-num" type="hidden" value="0">
                    <input id="limitNum" type="hidden" value="">
                </div>
            </div>
        </div>
        <div class="btn-wrap">
                <button id="chose-btn-buynow" class="btn btn-sure-buynow" @click="lijigoumai">立即购买</button>
                <button id="chose-btn-sure" class="btn btn-sure-addtocart" @click="jiarugouwuche">加入购物车</button>
        </div>
    </div>
</div>
    </div>  
</template>
<script>
import common from "../lib/common.js";
var cookie = common.Cookie;
import yadvertising from "../components/Yadvertising.vue";
export default {
  data() {
    return {
      page: "",
      // 右侧菜单栏
      bool: false,
      // 商品详情
      img: "",
      ids: "",
      prices: 0,
      nums: 0,
      title: "",
      hot: 0,
      // 优惠券
      youhui: false,
      numbers: 1,
      //商品详情
      state: false,
      //尺码点击状态
      size: false,
      sizearr: ["M", "L", "XL", "XXL"],
      sizebool: false,
      color: "黑色",
      chicun: "",
      spanbool: false,
      spanNum: 0
    };
  },
  methods: {
    //   去首页
    goboys() {
      this.$router.push("/Yboys");
    },
    // 去分类页
    gofenlei() {
      this.$router.push("/YfenLei");
    },
    // 去购物车页
    gogouwu() {
      this.$router.push("/YbuyCar");
    },
    // 去个人主页
    gome() {
      this.$router.push("/Yme");
    },
    getsize(index, p) {
      this.chicun = p;
      this.page = index;
    },
    gobuyCar() {
      this.$router.push("/YbuyCar");
    },
    // 计算购物车里面的商品数量
    goSpanNum() {
      let len = JSON.parse(localStorage.getItem("spanNums"));
      if (len == null) {
        this.spanNum++;
        localStorage.setItem("spanNums", JSON.stringify(this.spanNum));
        let lenS = JSON.parse(localStorage.getItem("spanNums"));
        this.spanNum=lenS;
      } else {
        this.spanNum++;
        localStorage.setItem("spanNums", JSON.stringify(this.spanNum));
        let lenS = JSON.parse(localStorage.getItem("spanNums"));
        this.spanNum=lenS; 
      }
    },
    //检查购物车的状态
    checkStatu(){
      let len = JSON.parse(localStorage.getItem("spanNums"));
      if(len==null){
        this.spanbool=false;
      }
    },
    getnums(){
      let lennum = JSON.parse(localStorage.getItem("spanNums"));
      this.spanNum=lennum;
        if(this.spanNum!==0){
        this.spanbool=true;
      }
    },
    // 立即购买
    lijigoumai() {
      if (this.page !== "") {
        //判断是否登录
        let len = cookie.get("yohoUsername");
        if (len==null) {
          this.$router.push("/Ylogin");
        } else {
          this.$router.push({
            path: "/Yjiesuan",
            query: {
              color: this.color,
              chicun: this.chicun,
              numbers: this.numbers,
              price: this.prices,
              img: this.img,
              title: this.title
            }
          });
        }
      }
    },
    // 加入购物车
    jiarugouwuche() {
      if (this.page !== "") {
        let len = cookie.get("yohoUsername");
        if (len.length == 0) {
          this.$router.push("/Ylogin");
        } else {
          let serial = this.ids;
          var obj = {
            color: this.color,
            chicun: this.chicun,
            numbers: this.numbers,
            price: this.prices,
            img: this.img,
            title: this.title,
            ids: this.ids
          };
          // 判断商品的ID是否相同，相同的商品ID数量相加，不同的直接添加到数据库
          var str = JSON.parse(localStorage.getItem(serial));
          var bool = JSON.parse(localStorage.getItem(serial + obj.chicun));
          if (str == null && bool == null) {
            localStorage.setItem(serial, JSON.stringify(obj));
            this.goSpanNum();
          } else {
            let strChiCun = str.chicun;
            if (obj.chicun !== strChiCun) {
              //   如果尺寸不同，添加商品
              var i = 0;
              //   数据替代，第三方存储，防止覆盖
              if (bool !== null) {
                i = bool.numbers;
              }else{
                this.goSpanNum();
              }
              obj.numbers = i + obj.numbers;
              localStorage.setItem(serial + obj.chicun, JSON.stringify(obj));
            } else {
              obj.numbers = str.numbers + obj.numbers;
              localStorage.setItem(serial, JSON.stringify(obj));
            }
          }

          this.state = false;
          this.getnums();
        }
      }
    }
  },
  components: {
    yadvertising
  },
  mounted() {
    (this.img = this.$route.query.img),
      (this.ids = this.$route.query.ids),
      (this.prices = this.$route.query.price),
      (this.title = this.$route.query.title),
      (this.nums = this.$route.query.nums),
      (this.hot = this.$route.query.hot);
      this.getnums();
      this.checkStatu();
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
/* 隐藏或显示的状态 */
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
/* 商品图片展示区域 */
.banner-top {
  -webkit-align-items: center;
  -webkit-box-align: center;
  align-items: center;
  display: -webkit-box;
  display: -webkit-flex;
  display: flex;
  min-height: 16.5rem;
  overflow: hidden;
  position: relative;
}
.banner-swiper {
  margin-top: 0.75rem;
  margin-left: 3rem;
  min-height: 15rem;
  overflow: hidden;
  width: 13rem;
}
/* 商品标题 */
.goods-name {
  background-color: #515150;
  box-sizing: border-box;
  color: #fff;
  padding: 0.5rem 0.7rem;
  width: 100%;
}
.goods-name .name {
  font-size: 0.7rem;
  line-height: 1.1rem;
}
/* 商品价格 */
.price-date {
  background-color: #fff;
  border-bottom: 1px solid #e0e0e0;
  color: #b0b0b0;
  height: 2.2rem;
  padding-left: 0.75rem;
  padding-right: 0.75rem;
  position: relative;
  width: 100%;
}
.goods-price {
  font-size: 0.86475rem;
}
.goods-price .current-price {
  color: #d0021b;
  margin-right: 0.25rem;
  line-height: 2.2rem;
}
/*会员价*/
.vip-level {
  background-color: #fff;
  border-bottom: 1px solid #e0e0e0;
  box-sizing: box-border;
  color: #999;
  font-size: 0.55rem;
  min-height: 2.2rem;
  padding-left: 0.7rem;
  padding-right: 0.7rem;
}
.vip-level .icons-item:first-child {
  text-align: left;
}
.vip-level .icons-item {
  float: left;
  height: 2.2rem;
  margin: 0;
  width: 33.3%;
}
.vip-level .icons-item:first-child .vip-img {
  background: url(//cdn.yoho.cn/yohobuywap-node/img/silver.ec0710b40b.png)
    no-repeat;
  background-size: contain;
}
.vip-level .icons-item .vip-img {
  height: 0.8rem;
  width: 1.325rem;
}
.vip-level .icons-item span {
  display: inline-block;
  line-height: 2.2rem;
  padding-left: 0.2rem;
  padding-top: 0.125rem;
  vertical-align: middle;
}
.vip-level .icons-item span {
  display: inline-block;
  line-height: 2.2rem;
  padding-left: 0.2rem;
  padding-top: 0.125rem;
  vertical-align: middle;
}
/*领取优惠券*/
.brand-coupon {
  font-size: 0.7rem;
  line-height: 2.2rem;
}
.brand-coupon,
.price-date {
  background-color: #fff;
  border-bottom: 1px solid #e0e0e0;
  color: #b0b0b0;
  height: 2.2rem;
  padding-left: 0.75rem;
  padding-right: 0.75rem;
  position: relative;
  width: 100%;
}
.brand-coupon .font-right {
  color: #b0b0b0;
}
.brand-coupon .iconfont {
  font-size: inherit;
}
.pull-right {
  float: right;
}
.brand-coupon .promotion-icon {
  background-color: #d0021b;
  border-radius: 0.1rem;
  color: #fff;
  float: left;
  font-size: 0.55rem;
  line-height: 0.9rem;
  margin-right: 0.25rem;
  margin-top: 0.65rem;
  padding: 0 0.1rem;
}
.brand-coupon span {
  color: #444;
}
/*加价促销*/
.goods-discount {
  background-color: #fff;
  border-bottom: 1px solid #e0e0e0;
  color: #444;
  display: block;
  font-size: 0.7rem;
  height: auto;
  padding-top: 0;
  width: 100%;
}
.goods-discount .short-text {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.goods-discount h2 {
  line-height: 0.9rem;
  padding: 0.75rem 1.5rem 0.75rem 0.75rem;
  position: relative;
}
.goods-discount .coin-item > .promotion-icon,
.goods-discount .first-item > .promotion-icon,
.goods-discount .folder-item > .promotion-icon {
  background-color: #d0021b;
  border-radius: 0.1rem;
  color: #fff;
  float: left;
  font-size: 0.55rem;
  margin-right: 0.25rem;
  padding: 0 0.1rem;
}
.goods-discount .iconfont {
  color: #e0e0e0;
  font-size: 1.125rem;
  position: absolute;
  right: 0.9rem;
  top: 0.75rem;
  width: 0.875rem;
}
.goods-discount .discount-folder .folder-item {
  border-top: 1px solid #e0e0e0;
}
/*商品评价和咨询*/
.feedback-list {
  background-color: #f0f0f0;
  margin-bottom: 0.5rem;
  margin-top: 0.5rem;
}
.feedback-list .nav-tab {
  background-color: #fff;
  border-bottom: 1px solid #e0e0e0;
  border-top: 1px solid #e0e0e0;
  padding: 0.25rem 0;
  width: 100%;
}
/*选中样式*/
.focus {
  color: #000;
}
.feedback-list .comment-nav {
  border-right: 1px solid #ccc;
}
.feedback-list .comment-nav,
.feedback-list .consult-nav {
  box-sizing: border-box;
  color: #b0b0b0;
  float: left;
  font-size: 0.7rem;
  height: 1.5rem;
  line-height: 1.5rem;
  text-align: center;
  width: 50%;
}
.feedback-list .content-main {
  background-color: #fff;
  border-bottom: 1px solid #e0e0e0;
}
.feedback-list .content-main.comment-content-main .user-info {
  max-width: 100%;
}
.feedback-list .content-main.comment-content-main .comment-time,
.feedback-list .content-main.comment-content-main .detail-content {
  padding-left: 0.7rem;
}
.feedback-list .content-main.comment-content-main .detail-content,
.feedback-list .content-main.comment-content-main .goods-spec {
  color: #444;
}
.feedback-list .content-main.comment-content-main .detail-content {
  color: #444;
  font-size: 0.7rem;
  line-height: 0.9rem;
  padding-left: 0.7rem;
  padding-right: 0.7rem;
}
.feedback-list .content-main.comment-content-main .comment-time {
  color: #c1c1c1;
}
.feedback-list .content-main.comment-content-main .comment-time,
.feedback-list .content-main.comment-content-main .detail-content {
  padding-left: 0.7rem;
}
.feedback-list .content-main.comment-content-main .comment-time,
.feedback-list .content-main.comment-content-main .goods-spec {
  font-size: 0.6rem;
  line-height: 1.55rem;
}
.feedback-list .comment-content-footer,
.feedback-list .consult-content-footer {
  background-color: #fff;
  border-bottom: 1px solid #e0e0e0;
  color: #b0b0b0;
  display: block;
  font-size: 0.7rem;
  line-height: 2.2rem;
  min-height: 2.2rem;
  text-align: center;
}
.feedback-list .comment-content-footer .iconfont,
.feedback-list .consult-content-footer .iconfont {
  font-size: inherit;
}
.feedback-list .content-main.consult-content-main {
  padding: 0.5rem 0.7rem;
}
.feedback-list .content-main.consult-content-main .question {
  color: #444;
  font-size: 0.6rem;
}
.feedback-list .content-main.consult-content-main .question span {
  display: block;
  float: left;
  font-size: inherit;
  padding-right: 0.375rem;
}
.feedback-list .content-main.consult-content-main .question p {
  overflow: hidden;
}
.feedback-list .content-main.consult-content-main .question span {
  display: block;
  float: left;
  font-size: inherit;
  padding-right: 0.375rem;
}
.feedback-list .content-main.consult-content-main .time {
  color: #b0b0b0;
  font-size: 0.55rem;
}
.feedback-list .content-main.consult-content-main .answer {
  color: #b0b0b0;
  font-size: 0.6rem;
  line-height: 0.9rem;
  margin-top: 0.35rem;
}
.feedback-list .content-main.consult-content-main .answer span {
  color: #444;
  display: block;
  float: left;
  font-size: inherit;
  padding-right: 0.375rem;
}
.feedback-list .content-main.consult-content-main .answer p {
  overflow: hidden;
}
.feedback-list .comment-content-footer,
.feedback-list .consult-content-footer {
  background-color: #fff;
  border-bottom: 1px solid #e0e0e0;
  color: #b0b0b0;
  display: block;
  font-size: 0.7rem;
  line-height: 2.2rem;
  min-height: 2.2rem;
  text-align: center;
}
.feedback-list .comment-content-footer .iconfont,
.feedback-list .consult-content-footer .iconfont {
  font-size: inherit;
}
.feedback-list .content-main.comment-content-main .pd-right {
  padding-right: 0.45rem;
}
.feedback-list .content-main.comment-content-main .user-name {
  color: #444;
  float: left;
  font-size: 0.6rem;
  height: 1.55rem;
  line-height: 1.55rem;
  padding-left: 0.7rem;
}
/* 加入购物车 */
.cart-bar {
  background-color: #fff;
  border-top: 1px solid #e0e0e0;
  bottom: 0;
  box-sizing: border-box;
  height: 3rem;
  left: 0;
  padding: 0.5rem 0.7rem;
  position: relative;
  position: fixed;
  width: 100%;
  z-index: 2;
}
.cart-bar .new-foot-ico {
  width: 20%;
  height: 5rem;
}
.cart-bar .new-foot-ico .iconfont {
  font-size: 1.2rem;
  text-align: center;
}
.cart-bar .tip {
  font-size: 0.6rem;
  color: #999;
  text-align: center;
}
.cart-bar .addto-cart,
.cart-bar .sold-out {
  background-color: #eb0313;
  color: #fff;
  font-size: 0.8rem;
  height: 3rem;
  line-height: 3rem;
  text-align: center;
  width: 40%;
  overflow: hidden;
}
.cart-bar .num-incart {
  position: relative;
}
.cart-bar .num-incart .num-tag {
  background: #eb0313;
  border-radius: 50%;
  color: #fff;
  display: block;
  font-size: 1rem;
  height: 1.25rem;
  line-height: 1.25rem;
  position: absolute;
  right: 0.125rem;
  text-align: center;
  top: -0.25rem;
  width: 1.25rem;
}
.cart-bar a {
  display: inline-block;
  float: left;
}
/* 商品属性选项卡 */
.chose-panel {
  background: rgba(0, 0, 0, 0.3);
  bottom: 0;
  height: 100%;
  left: 0;
  position: fixed;
  right: 0;
  top: 0;
  z-index: 5;
}
.chose-panel .main {
  background: #fff;
  bottom: 0;
  height: 70%;
  left: 0;
  padding-bottom: 2.5rem;
  position: absolute;
  right: 0;
}
.chose-panel .close {
  color: #b1b1b1;
  float: right;
  height: 1.5rem;
  line-height: 1.5rem;
  position: relative;
  text-align: center;
  width: 1.5rem;
  z-index: 2;
}
.chose-panel .infos {
  height: 100%;
  padding: 0 0.75rem;
}
.chose-panel .basic-info {
  border-bottom: 1px solid #e6e6e6;
  min-height: 4.75rem;
  padding-bottom: 0.75rem;
  position: relative;
}
.chose-panel .thumb-img {
  border: 1px solid #e6e6e6;
  border-radius: 5px;
  min-height: 5rem;
  position: absolute;
  top: -1.5rem;
  width: 4.1rem;
}
img {
  border: 0;
  display: block;
  margin: 0 auto;
  max-width: 100%;
}
.chose-panel .text-info {
  height: auto;
  margin-left: 4.875rem;
  margin-top: 0.75rem;
}
.chose-panel .text-info .price {
  display: inline;
  font-size: 0.6rem;
}
.chose-panel .text-info .sale-price.no-price {
  color: #000;
}
.chose-panel .text-info .sale-price {
  color: #d0021b;
  font-size: 0.7rem;
  margin-right: 0.375rem;
}
.chose-panel .text-info .hide {
  display: none;
}
.chose-panel .text-info .choosed-info {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.chose-panel .text-info .hide {
  display: none;
}
.chose-panel .text-info .size-info {
  color: #444;
  display: block;
  font-size: 0.6rem;
  margin-top: 0.125rem;
}
.chose-panel .text-info .hide {
  display: none;
}
.chose-panel .chose-items {
  height: 60%;
  overflow: auto;
}
.chose-panel .block-list {
  border-bottom: 1px solid #e6e6e6;
  margin: 0.75rem 0;
}
.chose-panel .block-list,
.chose-panel .num {
  font-size: 0.7rem;
  overflow: hidden;
  padding-left: 2rem;
  position: relative;
}
.chose-panel .block-list > span,
.chose-panel .num > span {
  left: 0;
  position: absolute;
  top: 0.25rem;
}
.chose-panel .block.chosed {
  background: #d0021b;
  border-color: #e10;
  color: #fff;
}
.chose-panel .block {
  border: 1px solid #444;
  border-radius: 6px;
  box-sizing: border-box;
  display: block;
  float: left;
  height: 1.5rem;
  line-height: 1.5rem;
  margin-bottom: 0.75rem;
  margin-right: 0.75rem;
  max-width: 12rem;
  min-width: 2rem;
  overflow: hidden;
  padding: 0 0.5rem;
  text-align: center;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.chose-panel .block-list {
  border-bottom: 1px solid #e6e6e6;
  margin: 0.75rem 0;
}
.chose-panel .block-list,
.chose-panel .num {
  font-size: 0.7rem;
  overflow: hidden;
  padding-left: 2rem;
  position: relative;
}
.chose-panel .block-list > span,
.chose-panel .num > span {
  left: 0;
  position: absolute;
  top: 0.25rem;
}
.chose-panel .block {
  border: 1px solid #444;
  border-radius: 6px;
  box-sizing: border-box;
  display: block;
  float: left;
  height: 1.5rem;
  line-height: 1.5rem;
  margin-bottom: 0.75rem;
  margin-right: 0.75rem;
  max-width: 12rem;
  min-width: 2rem;
  overflow: hidden;
  padding: 0 0.5rem;
  text-align: center;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.chose-panel .num {
  margin-bottom: 0.5rem;
}
.chose-panel .block-list,
.chose-panel .num {
  font-size: 0.7rem;
  overflow: hidden;
  padding-left: 2rem;
  position: relative;
}
.chose-panel .block-list > span,
.chose-panel .num > span {
  left: 0;
  position: absolute;
  top: 0.25rem;
}
.chose-panel .num .btn {
  border: 1px solid #e6e6e6;
  display: block;
  float: left;
  height: 2rem;
  line-height: 2rem;
  text-align: center;
  width: 2rem;
}
.chose-panel .block-list input.disabled,
.chose-panel .num input.disabled {
  -webkit-appearance: none;
  background-color: #fff;
  border-radius: 0;
  color: #000;
  opacity: 1;
}
.chose-panel .good-num {
  border: 1px solid #e6e6e6;
  float: left;
  height: 2rem;
  line-height: 2rem;
  margin-left: -1px;
  padding: 0;
  text-align: center;
  width: 2.65rem;
}
button,
input,
select,
textarea {
  font-size: 100%;
  margin: 0;
}
.chose-panel .num .btn {
  border: 1px solid #e6e6e6;
  display: block;
  float: left;
  height: 2rem;
  line-height: 2rem;
  text-align: center;
  width: 2rem;
}
.chose-panel .btn-plus {
  margin-left: -1px;
}
.chose-panel .block-list > span.left-num,
.chose-panel .num > span.left-num {
  color: #b0b0b0;
  left: 9.5rem;
  overflow: hidden;
  position: absolute;
  top: 0.5rem;
  white-space: nowrap;
}
.chose-panel .btn-wrap {
  bottom: 0;
  position: fixed;
  width: 100%;
}
.chose-panel .btn-wrap .btn-sure-buynow {
  background: #444;
  border: none;
  color: #fff;
  float: left;
  font-size: 0.8rem;
  height: 2rem;
  width: 50%;
  text-align: center;
}
.chose-panel .btn-wrap .btn-sure-addtocart {
  background: #d0021b;
  border: none;
  color: #fff;
  float: left;
  font-size: 0.8rem;
  height: 2rem;
  width: 50%;
  text-align: center;
}
.chose-panel .block.chosed {
  background: #d0021b;
  border-color: #e10;
  color: #fff;
}
</style>
