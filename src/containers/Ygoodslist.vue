<template>
    <div>
        <!-- 头部广告 -->
        <yadvertising></yadvertising>
        <!-- search -->
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
    <!--main  -->
    <div class="good-list-page yoho-page">
        <!-- topList -->
        <div class="filter-tab">
    <ul id="list-nav" class="list-nav clearfix">
        <li class="default 
        active
        
         buriedpoint first-li-more" data-bp-id="shop_listnav_default_1">
            <a href="javascript:void(0);">
                <span class="nav-txt">默认</span>
                <span class="iconfont icon-daosanjiao"></span>
            </a>
        </li>
        <li class="new  buriedpoint" data-bp-id="shop_listnav_new_1">
            <a href="javascript:void(0);">
                <span class="nav-txt">新品</span>
            </a>
        </li>
        <li class="popularity  buriedpoint" data-bp-id="shop_listnav_popularity_1">
            <a href="javascript:void(0);">
                <span class="nav-txt">人气</span>
            </a>
        </li>
        <li class="price  buriedpoint" data-bp-id="shop_listnav_price_1">
            <a href="javascript:void(0);">
                <span class="nav-txt">价格</span>
                <span class="icon">
                    <i class="iconfont up cur icon-arrow-top"></i>
                    <i class="iconfont down icon-xiafanye"></i>
                </span>
            </a>
        </li>
        <li class="filter buriedpoint" data-bp-id="shop_listnav_filter_1">
            <a href="javascript:void(0);">
                <span class="nav-txt">筛选</span>
                <span class="iconfont icon-daosanjiao"></span>
            </a>
        </li>
    </ul>

    <ul class="drop-list hide">
        <li class="default active" data-bp-id="shop_listnav_default_1" data-text="默认">
            <span>默认</span>
            <span class="chose"></span>
        </li>
        <li class="discount dec " data-bp-id="shop_listnav_discount_0" data-text="折扣">
            <span>折扣从高到低</span>
            <span class="chose"></span>
        </li>
        <li class="discount asc " data-bp-id="shop_listnav_discount_1" data-text="折扣">
            <span>折扣从低到高</span>
            <span class="chose"></span>
        </li>
    </ul>
</div>
    <!-- 主要商品内容区 -->
    <div id="goods-container" class="goods-container">
        <div class="default-goods container clearfix">
                 
        <div class="good-info " v-for="(p,index) in arrs" :key="index">
            <div class="tag-container clearfix">
            </div>
            <div class="good-detail-img">
                <a class="good-thumb" title="Dickies|男|Dickies 绣花徽章羊羔绒卫衣">
                        <img :src="p.imgUrl">
                </a>
                <div class="similar-c">
    <div class="bg"></div>
    <a >找相似</a>
</div>            </div>
            <div class="good-detail-text">
                <div class="name">
                    <a v-text="p.title"></a>
                </div>
                <div class="price">
                        <span class="sale-price no-price">¥{{p.price}}</span>
                </div>
                <a class="similar-btn iconfont icon-tab_icon_crm"></a>
            </div>
        </div>
</div>
        
            </div>
    </div>
    </div>
</template>

<script>
import yadvertising from '../components/Yadvertising.vue';
import $ from "jquery";
export default {
    data(){
        return {
            bool:false,
            arrs:[],
        }
    },
    components:{
        yadvertising
    },
    methods:{
        goboys(){
            this.$router.push('/Yboys')
        },
        gofenlei(){
            this.$router.push('/YfenLei')
        },
        gogouwu(){
            this.$router.push('/YbuyCar')
        },
        gome(){
            this.$router.push('/Yme')
        },
        //遍历生成数据
        toggle(){
            let _this = this;
            $.ajax({
                url:'http://localhost:9995/goodsUpdate',
                type:'post',
                data:{},
                success(data){
                    _this.arrs=data;
                }
            })
        },
    },
    mounted(){
        this.toggle();
    }
}
</script>

<style scoped>
/* search */
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
/* main */
.good-list-page {
    min-height: 22rem;
}
/* topList */
.good-list-page .list-nav {
    border-bottom: 1px solid #e6e6e6;
    border-top: .05rem solid #fff;
    position: relative;
}
.good-list-page .list-nav>li {
    float: left;
    font-size: 14PX;
    height: 33PX;
    line-height: 33PX;
    text-align: center;
    width: 20%;
}
.good-list-page .list-nav .active>a {
    color: #000;
}
.good-list-page .list-nav a {
    box-sizing: border-box;
    color: #999;
    display: block;
    height: 100%;
    width: 100%;
}
.good-list-page .list-nav .nav-txt {
    box-sizing: border-box;
    display: inline-block;
    height: 100%;
}
.good-list-page .list-nav .active>a .iconfont.cur, .good-list-page .list-nav .active>a .iconfont.drop {
    color: #000;
}
.good-list-page .list-nav .icon-daosanjiao {
    font-size: 12PX;
}
.good-list-page .list-nav .icon {
    position: relative;
}
.good-list-page .list-nav .icon .up {
    top: -11PX;
}
.good-list-page .list-nav .icon i {
    -webkit-transform: scale(.8);
    font-weight: 700;
    position: absolute;
    transform: scale(.8);
}
.good-list-page .list-nav .icon i {
    -webkit-transform: scale(.8);
    font-weight: 700;
    position: absolute;
    transform: scale(.8);
}
.good-list-page .list-nav .icon .down {
    top: -4PX;
}
/* 主要商品内容区*/
.good-list-page .goods-container {
    min-height: auto!important;
    padding-left: .375rem;
    padding-top: .2rem;
    position: relative;
}
.good-info {
    float: left;
    height: 13.5rem;
    margin: .25rem .375rem 1rem;
    width: 45%;
    box-sizing: border-box;
}
.good-info .tag-container {
    height: .7rem;
    overflow: hidden;
    width: 100%;
}
.good-detail-img {
    height: 9.2rem;
    position: relative;
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
    opacity: .6;
    width: 100%;
}
.good-detail-img .similar-c a {
    background-color: #d0021b;
    border-radius: 50%;
    color: #fff;
    display: block;
    font-size: .7rem;
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
.good-detail-text .name a, .good-detail-text .price {
    -webkit-transform: scale(.9);
    font-size: 12PX;
    transform: scale(.9);
}
.good-detail-text .name a {
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    color: #444;
    display: -webkit-box;
    height: 1.5rem;
    line-height: .75rem;
    margin: .375rem 0 .25rem;
    min-height: 1.25rem;
    overflow: hidden;
    padding: .125rem 0;
}
.good-detail-text .price {
    line-height: .55rem;
    white-space: nowrap;
}
.good-detail-text .name a, .good-detail-text .price {
    -webkit-transform: scale(.9);
    font-size: 12PX;
    transform: scale(.9);
}
.good-detail-text .price .sale-price.no-price {
    color: #000;
}
.good-detail-text .similar-btn {
    bottom: -.5rem;
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
