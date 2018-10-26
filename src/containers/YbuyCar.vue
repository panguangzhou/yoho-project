<template>
    <div>
        <advertising></advertising>
        <!-- 购物车头部 -->
      <header id="yoho-header" class="yoho-header boys">
    <a class="iconfont nav-back icon-fanhui" href="javascript:history.go(-1)"></a>
    <p class="nav-title">购物车</p>
    <span class="nav-btn" v-show="bianjizhuangtai">编辑</span>
</header>
    <!-- 购物车内容 -->
    <div class="shopping-cart-page yoho-page ">
    <p class="login-info" v-show="loginState">
        <span class="iconfont"></span>
        请您先
        <a class="btn btn-login" @click="login">登录</a>
        可以同步电脑和手机中的商品
    </p>
    <!-- 购物车为空时 -->
  <div class="cart-box" v-if="gaungguang">
        <div class="cart-zero">
    <i class="iconfont icon-buy-car"></i>
    <p>您的购物车暂无商品</p>
    <a @click="guan">随便逛逛</a>
</div>
</div>
  <!-- 购物车不为空时 -->
  <div class="buycart" v-if="carStatu">
    <div class="nav-item active" id="common-cart-nav" data-type="ordinary">
            <span>普通商品({{goodsNumber}})</span>
        </div>
        <div class="cart-content normal-good active">
                <a class="tips clearfix">
                    <div>
                        购物满¥299.00 已免运费
                    </div>
                    <span class="iconfont free-shipping icon-xiangyou"></span>
                </a>
            <div class="normal-box" v-for="(p,index) in goodslist" :key="index" @click='p.select!=p.select'>
                <div class="cart-brand box good-pools-data">
                        <div class="good-list">
                                <div class="good-item is-checked" data-promotion="" data-id="1589098" data-skn="51358054" data-mnum="1"  data-activityid="" data-poolbatchno="">
                                    <div class="opt" @click="p.select?getDeleteNum(index):removeDeleteNum(index)">
                                            <i class="iconfont chk select checked icon-dagou" :class="{'green':p.select}" @click="p.select=!p.select"></i>
                                        <i class="iconfont chk edit"></i>
                                    </div>
                                    <div class="good-new-info">
                                        <a href="javascript:;" class="img-a">
                                            <div class="img">
                                                <img class="thumb lazy" :src="p.img">
                                            </div>
                                        </a>
                                        <div class="info">
                                            <div class="fixed-height">
                                                <div class="intro intro-edit">
                                                    <div class="edit-box">
                                                            <div class="num-opt">
                                                                <a href="javascript:;" class="btn btn-opt-minus disabled"><span @click="p.numbers>1?p.numbers--:1">-</span></a>
                                                                <input type="text" class="good-num" disabled="true" data-min="1" data-max="5" v-model="p.numbers">
                                                                <a href="javascript:;" class="btn btn-opt-plus"><span @click="p.numbers++">+</span></a>
                                                            </div>
                                                        <div class="edit-size-info  edit-size-info-notop ">
                                                            <div class="txt">颜色:{{p.color}}尺码:{{p.chicun}}</div>
                                                            <div class="down">
                                                                <i class="iconfont icon-xiafanye"></i>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="count iconfont icon-guanbianniu" @click="deleteOne(index)"></div>
                                            </div>
                                            <div class="bottom">
                                                <div class="price">
                                                    <span class="market-price">¥{{p.price}}</span>
                                                </div>
                                                <div class="tags">
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                        </div>
                </div>
            </div>
            <div class="all-gift-box box">
                <div class="gift-item advanceBuy">
                    <div class="flag">
                        <i class="iconfont price-gift icon-dk"></i>
                    </div>
                    <div class="content">
                        <div class="info ">全场加价购</div>
                        <div class="opt to-gift ">
                            <a href="javascript:;">去换购</a><i class="iconfont to-arrow"></i>
                        </div>
                    </div>
                </div>
            </div>
            <div class="total box">
                <div class="price-compute">
                    <p>总计¥{{getTotal.getPrice}}=商品金额¥{{getTotal.getPrice}}</p>
                </div>
            </div>
            <div class="cart-footer">
                <div class="check-all">
                    <i class="iconfont chk select checked icon-dagou" @click="selectProduct(isSelectAll)" :class="{'green':isSelectAll}"></i>
                    <p>全选</p>
                </div>
                <div class="delete-all">
                  <p @click="deleteAll">全部删除</p>
                </div>
                <div class="opts edit">
                    <button class="btn btn-gray btn-fav">移入<br>收藏夹</button>
                    <button class="btn btn-red btn-del">删除</button>
                </div>
                <div class="opts bill ">
                    <div class="total">
                        <p class="price">总计:¥{{getTotal.getPrice}}&nbsp;&nbsp;({{getTotal.getNums}}件)</p>
                        <p class="intro">不含运费</p>
                    </div>
                    <button class="btn btn-red btn-balance">结算</button>
                </div>
            </div>
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
    </div>  
</template>

<script>
import common from "../lib/common.js";
var cookie = common.Cookie;
import advertising from "../components/Yadvertising.vue";
import $ from "jquery";
export default {
  data() {
    return {
      arrs: [],
      //   是否是登录的状态
      loginState: false,
      bianjizhuangtai: false,
      //购物车里的数据
      goodslist: [],
      //购物车状态
      carStatu: true,
      gaungguang: true,
      goodsNumber: "",
      //存储购物车多选删除的数据
      deleteNums: [],
      //全选状态
      quanxuan: false,
      //遍历每个状态的
      checkshowArr: []
    };
  },
  components: {
    advertising
  },
  computed: {
    isSelectAll() {
      if (this.goodslist.length === 0) {
        return false;
      }
      return this.goodslist.every(function(val) {
        return val.select;
      });
    },
    //计算选中商品的总价价格和数量
    getTotal() {
      let _goods = this.goodslist.filter(function(val) {
        return val.select;
      });
      let prices = 0;
      let nums = 0;
      for (let i = 0; i < _goods.length; i++) {
        prices += _goods[i].price * _goods[i].numbers;
        nums += _goods[i].numbers;
      }
      return { getPrice: prices, getNums: nums };
    }
  },
  methods: {
    //单击遍历每个选项的勾选状态
    checkshow() {
      for (let i = 0; i < this.goodslist.length; i++) {
        if (this.goodslist[i].select === true) {
          this.checkshowArr.push[i];
        }
      }
    },
    //单击，根据状态删除
    getDeleteNum(index) {
      this.deleteNums.push(index);
    },
    removeDeleteNum(index) {
      this.deleteNums.splice(index, 1);
    },
    //点击全选
    selectProduct(isSelectAll) {
      for (let i = 0; i < this.goodslist.length; i++) {
        this.goodslist[i].select = !isSelectAll;
      }
      this.quanxuan = !this.quanxuan;
    },
    //删除全部
    deleteAll() {
      for (let i = 0; i < this.goodslist.length; i++) {
        if (this.goodslist[i].select === true) {
          this.checkshowArr.push(i);
        }
      }
      this.goodslist = this.goodslist.filter(function(val) {
        return !val.select;
      });
      let arr = localStorage.valueOf();
      let keys = Object.keys(arr);
      for (let s = 0; s < this.checkshowArr.length; s++) {
        let boom = this.checkshowArr[s];
        localStorage.removeItem(keys[boom]);
      }
      if (this.goodslist.length ==0) {
        localStorage.removeItem("spanNums");
        this.goodsNumber = 0;
        this.carStatu = false;
        this.gaungguang = true;
      }
      let nums = localStorage.getItem("spanNums");
      nums = this.goodslist.length;
        this.goodsNumber = this.goodslist.length;
        localStorage.setItem("spanNums", JSON.stringify(nums));
      this.checkshowArr = [];
    },
    //删除单个
    deleteOne(index) {
      if (this.goodslist[index].select === true) {
        this.goodslist.splice(index, 1);
        let arr = localStorage.valueOf();
        let nums = localStorage.getItem("spanNums");
        let keys = Object.keys(arr);
        keys = keys.slice(0, nums);
        localStorage.removeItem(keys[index]);
        let len = JSON.parse(localStorage.getItem("spanNums"));
        len--;
        this.goodsNumber = len;
        localStorage.setItem("spanNums", JSON.stringify(len));
        if (len < 1) {
          localStorage.removeItem("spanNums");
          this.goodsNumber = 0;
          this.carStatu = false;
          this.gaungguang = true;
        }
      }
    },
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
    // 判断本地缓存有没有存储数据
    examine() {
      let arr = localStorage.valueOf();
      let nums = localStorage.getItem("spanNums");
      this.goodsNumber = nums;
      if (nums > 0) {
        this.bianjizhuangtai = true;
        this.carStatu = true;
        this.gaungguang = false;
      } else {
        this.carStatu = false;
        this.gaungguang = true;
        this.bianjizhuangtai = false;
      }
      let keys = Object.keys(arr);
      keys = keys.slice(0, nums);
      this.goodslist = keys.map(function(item) {
        return JSON.parse(localStorage.getItem(item));
      });
    },
    //判断是否是登录状态
    loginStates() {
      let len = cookie.get("use");
      if (len.length == 0) {
        this.loginState = true;
      } else {
        this.loginState = false;
      }
    }
  },
  mounted() {
    this.toggle();
    this.loginStates();
    this.examine();
    //给购物车加一个初始属性
    let _this = this;
    _this.goodslist.map(function(item) {
      _this.$set(item, "select", false);
    });
  }
};
</script>

<style>
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
.login-info {
  box-sizing: content-box;
  color: #24acaa;
  font-size: 0.825rem;
  height: 1.35rem;
  padding: 0.5rem 0.575rem;
  text-align: center;
}
.login-info .iconfont {
  font-size: 0.825rem;
}
.login-info .btn {
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
.box {
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
/* 购物车不为空时的页面 */
.buycart {
  width: 100%;
}
.buycart .nav-item.active {
  color: #000;
}
.buycart .nav-item {
  -webkit-box-flex: 1;
  -webkit-flex: 1;
  box-sizing: content-box;
  flex: 1;
  height: 0.875rem;
  padding: 0.875rem 0;
  position: relative;
}
.buycart .nav-item:first-child span {
  border: none;
}
.buycart .nav-item span {
  border-left: 1px solid #e0e0e0;
  box-sizing: border-box;
  font-size: 1rem;
  height: 0.875rem;
  line-height: 0.875rem;
  text-align: center;
  width: 100%;
  display: block;
}
.buycart .cart-content.active {
  display: block;
}
.buycart .cart-content {
  display: none;
  margin-top: 0.5rem;
}
.buycart .cart-content .tips {
  background: #ff7f81;
  color: #fff;
  display: block;
  font-size: 0.625rem;
  line-height: 1rem;
  margin-top: -0.5rem;
  min-height: 1.75rem;
  padding: 0.375rem 0.75rem;
}
.buycart .cart-content .tips div {
  float: left;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 14.25rem;
}
.buycart .cart-content .tips .free-shipping {
  color: #fff;
  float: left;
  font-size: 0.625rem;
  text-align: right;
  width: 3rem;
}
.buycart.box.cart-brand:first-child {
  margin-top: 0;
}
.buycart .box {
  background-color: #fff;
  margin-top: 0.5rem;
}
.good-item {
  display: -webkit-box;
  display: -webkit-flex;
  display: flex;
  min-height: 6.15rem;
  width: 100%;
}
.good-item .opt {
  -webkit-align-items: center;
  -webkit-box-align: center;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  align-items: center;
  display: -webkit-box;
  display: -webkit-flex;
  display: flex;
  justify-content: center;
  width: 2.5rem;
}
.good-item .opt .select {
  display: block;
}
.iconfont.chk {
  font-size: 1rem;
}
.iconfont.chk {
  font-size: 1rem;
}
.good-item .good-new-info {
  padding-left: 0;
}
.good-new-info,
.good-new-info .img-a {
  display: -webkit-box;
  display: -webkit-flex;
  display: flex;
}
.good-new-info {
  -webkit-box-flex: 1;
  -webkit-flex: 1;
  border-bottom: 1px solid #f0f0f0;
  flex: 1;
  padding: 0.5rem 0.75rem;
  width: 100%;
}
.good-new-info .img-a {
  -webkit-align-items: center;
  -webkit-box-align: center;
  align-items: center;
}
.good-new-info,
.good-new-info .img-a {
  display: -webkit-box;
  display: -webkit-flex;
  display: flex;
}
.good-new-info .img {
  position: relative;
}
.good-new-info .img .thumb {
  min-height: 5.1rem;
  width: 3.8rem;
}
.good-new-info .info {
  -webkit-box-flex: 1;
  -webkit-flex: 1;
  flex: 1;
  margin-left: 0.8rem;
  padding-top: 0.5rem;
  position: relative;
}
.good-new-info .info .fixed-height {
  display: -webkit-box;
  display: -webkit-flex;
  display: flex;
  min-height: 2.5rem;
  width: 100%;
}
.good-new-info .info .fixed-height .intro {
  -webkit-box-flex: 1;
  -webkit-flex: 1;
  flex: 1;
  width: 100%;
}
.good-new-info .info .name-row {
  display: -webkit-box;
  display: -webkit-flex;
  display: flex;
}
.good-new-info .info .name-row .name {
  -webkit-box-flex: 1;
  -webkit-flex: 1;
  color: #5a5a5a;
  flex: 1;
  font-size: 0.6rem;
}
.good-new-info .info .color-size-row {
  color: #b6b6b6;
  font-size: 0.7rem;
  margin-top: 0.1rem;
}
.good-new-info .info .color-size-row span {
  margin-right: 0.45rem;
}
.good-new-info .info .fixed-height .intro {
  -webkit-box-flex: 1;
  -webkit-flex: 1;
  flex: 1;
  width: 100%;
}
.good-new-info .edit-box {
  margin-bottom: 0.275rem;
  width: 10rem;
}
.good-new-info .num-opt {
  border: 1px solid #dfdfdf;
  border-radius: 0.125rem 0.125rem 0 0;
  display: -webkit-box;
  display: -webkit-flex;
  display: flex;
  height: 1.85rem;
  overflow: hidden;
}
.good-new-info .num-opt .btn.btn-opt-minus {
  border-right: 1px solid #dfdfdf;
}
.good-new-info .num-opt .btn {
  display: block;
  height: 100%;
  line-height: 1.85rem;
  text-align: center;
  width: 3rem;
}
.good-new-info .num-opt .btn.disabled .iconfont {
  color: #b0b0b0;
}
.good-new-info .num-opt .good-num:disabled {
  color: initial;
}
.good-new-info .num-opt .good-num {
  background-color: #fff;
  border: none;
  color: #444;
  font-size: 0.8rem;
  height: 1.85rem;
  line-height: 1.85rem;
  text-align: center;
  width: 6rem;
}
.good-new-info .num-opt .btn.btn-opt-plus {
  border-left: 1px solid #dfdfdf;
}
.good-new-info .num-opt .btn {
  display: block;
  height: 100%;
  line-height: 1.85rem;
  text-align: center;
  width: 2rem;
}
.good-new-info .num-opt .btn .iconfont {
  color: #444;
}
.good-new-info .edit-box .edit-size-info-notop {
  border-radius: 0 0 0.125rem 0.125rem;
  border-top: none;
}
.good-new-info .edit-box .edit-size-info {
  border: 1px solid #dfdfdf;
  border-radius: 0.125rem;
  color: #444;
  display: -webkit-box;
  display: -webkit-flex;
  display: flex;
  height: 1.85rem;
  line-height: 1.85rem;
  padding-left: 0.35rem;
  width: 100%;
}
.good-new-info .edit-box .edit-size-info .txt {
  -webkit-box-flex: 1;
  -webkit-flex: 1;
  flex: 1;
  font-size: 0.575rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.good-new-info .edit-box .edit-size-info .down {
  text-align: center;
  width: 1.375rem;
}
.good-new-info .edit-box .edit-size-info .down .iconfont {
  font-size: 0.75rem;
}
.good-new-info .info .count {
  color: #999;
  font-size: 1rem;
  text-align: right;
  width: 1.125rem;
  align-items: center;
  justify-content: center;
}
.good-new-info .info .price {
  color: #d0253b;
  font-size: 0.7rem;
}
.good-new-info .info .tags {
  line-height: 0.75rem;
  text-align: right;
  width: 100%;
}
.box {
  background-color: #fff;
  margin-top: 0.5rem;
}
.all-gift-box .gift-item {
  display: -webkit-box;
  display: -webkit-flex;
  display: flex;
  width: 100%;
}
.all-gift-box .gift-item .flag {
  color: #444;
  line-height: 2rem;
  padding-right: 0.45rem;
  text-align: right;
  width: 2rem;
}
.all-gift-box .gift-item .flag .iconfont {
  font-size: 0.8rem;
  vertical-align: middle;
}
.all-gift-box .gift-item:last-child .content {
  border: none;
}
.all-gift-box .gift-item .content,
.all-gift-box .gift-item .content .info {
  -webkit-box-flex: 1;
  -webkit-flex: 1;
  flex: 1;
}
.all-gift-box .gift-item .content {
  border-bottom: 1px solid #f1f1f1;
  display: -webkit-box;
  display: -webkit-flex;
  display: flex;
  height: 2.2rem;
  line-height: 2.2rem;
  padding-right: 0.75rem;
  width: 100%;
}
.all-gift-box .gift-item .content,
.all-gift-box .gift-item .content .info {
  -webkit-box-flex: 1;
  -webkit-flex: 1;
  flex: 1;
}
.all-gift-box .gift-item .content .opt {
  text-align: right;
  width: 3.475rem;
}
.to-gift a {
  color: #ff575c;
  font-size: 0.575rem;
}
.iconfont.to-arrow {
  color: #e0e0e0;
  margin-left: 0.275rem;
}
.shopping-cart-page .box {
  background-color: #fff;
  margin-top: 0.5rem;
}
.price-compute {
  background-color: #fff;
  border-top: 1px solid #e0e0e0;
  font-size: 0.7rem;
  margin-bottom: 0.5rem;
  padding: 0.5rem;
}
.cart-footer {
  background-color: #fff;
  bottom: 0;
  display: -webkit-box;
  display: -webkit-flex;
  display: flex;
  height: 3rem;
  left: 0;
  position: fixed;
  width: 100%;
  z-index: 1;
}
.cart-footer .check-all {
  padding-top: 0.5rem;
  text-align: center;
  width: 2.25rem;
}
.cart-footer .check-all .select {
  display: block;
}
.iconfont.chk {
  font-size: 1rem;
}
.cart-footer .check-all .edit {
  display: none;
}
.cart-footer .delete-all {
  display: flex;
  padding: 0.45rem;
}
.cart-footer .delete-all p {
  border-radius: 0.125rem;
  color: #fff;
  display: block;
  height: 2.2rem;
  line-height: 2.2rem;
  width: 4.25rem;
  background-color: #d1021c;
  font-size: 0.9rem;
  text-align: center;
}

.iconfont.chk {
  font-size: 1rem;
}
.cart-footer .opts.edit {
  display: none;
}
.cart-footer .opts {
  -webkit-box-flex: 1;
  -webkit-box-pack: end;
  -webkit-flex: 1;
  -webkit-justify-content: flex-end;
  display: -webkit-box;
  display: -webkit-flex;
  display: flex;
  flex: 1;
  justify-content: flex-end;
  padding: 0.45rem;
  text-align: right;
}
.cart-footer .opts .btn.btn-gray {
  background-color: #444;
}
.cart-footer .opts .btn {
  border-radius: 0.125rem;
  color: #fff;
  display: block;
  height: 2.2rem;
  margin-left: 0.35rem;
  margin-right: 0.35rem;
  width: 4.25rem;
}
.cart-footer .opts .btn.btn-red {
  background-color: #d1021c;
}
.cart-footer .opts .btn {
  border-radius: 0.125rem;
  color: #fff;
  display: block;
  height: 2.2rem;
  margin-left: 0.35rem;
  margin-right: 0.35rem;
  width: 4.25rem;
}
.cart-footer .opts.bill {
  display: -webkit-box;
  display: -webkit-flex;
  display: flex;
}
.cart-footer .opts {
  -webkit-box-flex: 1;
  -webkit-box-pack: end;
  -webkit-flex: 1;
  -webkit-justify-content: flex-end;
  display: -webkit-box;
  display: -webkit-flex;
  display: flex;
  flex: 1;
  justify-content: flex-end;
  padding: 0.45rem;
  text-align: right;
}
.cart-footer .opts .total {
  -webkit-box-flex: 1;
  -webkit-flex: 1;
  flex: 1;
  padding-top: 0.275rem;
}
.cart-footer .opts .btn.btn-red {
  background-color: #d1021c;
}
.cart-footer .opts .btn {
  border-radius: 0.125rem;
  color: #fff;
  display: block;
  height: 2.2rem;
  margin-left: 0.35rem;
  margin-right: 0.35rem;
  width: 4.25rem;
}
.cart-footer .opts .total .price {
  color: #d0253b;
  font-size: 0.8rem;
}
.cart-footer .opts .total .intro {
  color: #b6b6b6;
  font-size: 0.575rem;
}
/*原谅的颜色*/
.green {
  color: #58bc58;
}
</style>
