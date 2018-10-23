<template>
    <div>
      <!-- 轮播图部分 -->
    <div class="demo1">
        <div class="boysBanner">
        <div class="swiper-container">
            <ul class="swiper-wrapper">
                <li class="swiper-slide" v-for="(p,index) in arrImg" :key="index" >
                    <img :src="p">
                </li>
            </ul>
    <!-- Add Pagination -->
            <div class="swiper-pagination"></div>
        </div>
        </div>
    </div>

    <!-- 商品内容展示部分 -->
    <div class="guang-info" data-id="85581">
        <a class="info-author clearfix" style="display: none;">
            <img class="lazy avatar" data-original="//img12.static.yhbimg.com/author/2017/04/06/17/0294fec58f4bfbe89b28c7d6158bf21623.jpg?imageView2/2/interlace/1/q/60" src="//img12.static.yhbimg.com/author/2017/04/06/17/0294fec58f4bfbe89b28c7d6158bf21623.jpg?imageView2/2/interlace/1/q/60" style="display: block;">
            <span class="name">乐爷</span>
            <span class="min-tag">#买物</span>
        </a>

    <div class="info-img">
            <a href="javascript:;" class="info-match hide">
                    <div class="info-tag topic"></div>
            </a>
        <a class="img-box">
            <img src="//img11.static.yhbimg.com/article/2018/10/16/16/01751f037498e1ad8a5f6dfe756efe371f.jpg?imageView2/2/w/640/h/640/q/60" alt="">
        </a>
    </div>

    <div class="info-deps">
        <a class="info-title-container">
            <div class="info-title text-overflow">说性感，还有人烈得过这匹小野马吗？</div>
        </a>
        <p class="info-text">坚持做自己的性感女IDOL</p>
        <div class="time-view-like-share clearfix">
    <span>买物</span>&nbsp;&nbsp;|&nbsp;
    <span class="page-view">11057</span>人阅读
    <div class="like-share-container">
            <span class="like-count">37</span>
            <i class="iconfont like-btn icon-praise"></i>
    </div>
</div>
</div>
</div>
<!-- 第二个展示板块 -->
<div class="guang-info" data-id="85727" v-for="(p,index) in goods" :key="index">
    <div class="info-img">
        <a class="img-box">
            <img class="lazy" data-original="//img12.static.yhbimg.com/article/2018/10/22/17/024f37973e5bac8032ad175140f6552a04.jpg?imageView2/2/w/640/h/640/q/60" alt="" :src="p.bigImg" style="display: block;">
        </a>
    </div>
    <div class="info-deps">
        <a class="info-title-container">
            <div class="info-title text-overflow" v-text="p.title"></div>
        </a>
        <p class="info-text" v-text="p.txt"></p>
        <div class="time-view-like-share clearfix">
    <span>#OOTD</span>&nbsp;&nbsp;|&nbsp;
    <span class="page-view" v-text="p.rd"></span>人阅读
    <div class="like-share-container">
            <span class="like-count" v-text="p.dz"></span>
            <i class="iconfont like-btn icon-praise"></i>
    </div>
</div>    </div>

        <div class="product-list-box">
    <ul class="product-list">
        <li class="goods-box" v-for="(x,index) in p.datas" :key="index">
    <div class="goods-img">
        <a>
            <img class="lazy" data-original="//img11.static.yhbimg.com/goodsimg/2018/08/22/14/0108e0e0dde1e3652f92c085b524982a5d.jpg?imageView2/2/w/106/h/138/q/60" :src="x.minImg">
        </a>
    </div>
    <div class="goods-info">
        <a>
            <p class="title" v-text="x.title"></p>
            <p class="price" v-text="x.price"></p>
        </a>
    </div>
</li> 
    </ul>
        </div>
</div>
</div>
</template>

<script>
import Swiper from 'swiper';
import "../../node_modules/swiper/dist/css/swiper.css";
import $ from 'jquery';
export default {
  data() {
    return {
      arrImg: [
        require("../img/gaunBanner_1.jpg"),
        require("../img/gaunBanner_2.jpg"),
        require("../img/gaunBanner_3.jpg"),
        require("../img/gaunBanner_4.jpg"),
        require("../img/gaunBanner_5.jpg"),
      ],
      goods:[],
    };
  },
  methods:{
      toggle(){
          let _this = this;
          $.ajax({
            url: "http://localhost:9995/goodshow",
            type:'GET',
            data:{},
            success(data){
                _this.goods = data;
            }
          })
      }
  },
  mounted(){
     var swiper = new Swiper ('.demo1 .swiper-container',{
        direction: 'horizontal', // 水平切换选项
        loop: true, // 循环模式选项
        autoplay: {
            disableOnInteraction: false,//手动操作后仍自动滑动
        },
        // 如果需要分页器
        pagination: {
          el: '.swiper-pagination',
          clickable :true,
        }
     });
     this.toggle();
  }
};
</script>

<style scoped>
/*第一个轮播图部分*/
.boysBanner .swiper-wrapper .swiper-slide img {
  width: 100%;
  height: 100%;
}
.boysBanner .swiper-wrapper .swiper-slide {
  height: 182px;
}
/* 商品展示 */
.guang-info {
    background: #fff;
    margin-bottom: .75rem;
    padding: 0 0 .6rem;
}
.guang-info .info-author {
    display: block;
    width: 100%;
}
.guang-info .info-author .avatar {
    border-radius: 50%;
    float: left;
    height: 1.25rem;
    margin-left: .75rem;
    margin-top: .5rem;
    width: 1.25rem;
}
 .avatar {
    float: left;
    margin-left: .75rem;
}
.guang-info .info-author .name {
    color: #000;
    float: left;
    font-size: 14PX;
    margin-left: .75rem;
    padding: .75rem 0;
}
.guang-info .info-author .min-tag {
    background-color: #f0f0f0;
    color: #b0b0b0;
    float: right;
    font-size: .5rem;
    height: 1rem;
    line-height: 1rem;
    margin-right: .75rem;
    margin-top: .625rem;
    min-width: 2.5rem;
    padding: 0 .25rem;
    text-align: center;
}
.guang-info .info-img {
    position: relative;
    width: 100%;
}
.guang-info .info-match {
    background: #000;
    color: #fff;
    font-size: 14PX;
    height: 1.25rem;
    left: 0;
    line-height: 1.25rem;
    position: absolute;
    text-align: center;
    text-decoration: none;
    top: 0;
    width: 3.25rem;
    z-index: 1;
}
.guang-info .info-tag.topic {
    background-image: url(//cdn.yoho.cn/yohobuywap-node/img/topic.6aa333694c.png);
}
.guang-info .info-tag {
    background-size: 100%;
    height: 1.25rem;
    left: 2.625rem;
    position: absolute;
    top: 0;
    width: 1.25rem;
}
.guang-info .info-img .img-box {
    display: block;
    padding: .75rem .75rem 0;
}
.guang-info .info-img img {
    display: block;
    width: 100%;
}
.guang-info .info-deps {
    margin: .8rem 0 0;
    padding: 0 1rem 0 .75rem;
}
.guang-info .info-deps .info-title-container {
    color: #000;
    text-decoration: none;
}
.guang-info .info-deps .info-title {
    color: #000;
    font-size: 20PX;
    font-weight: 700;
    line-height: 1.1rem;
    max-height: 1.1rem;
}
.line-clamp-2, .text-overflow {
    overflow: hidden;
    text-overflow: ellipsis;
}
.text-overflow {
    white-space: nowrap;
}
.guang-info .info-deps .info-text {
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 4;
    color: #444;
    display: -webkit-box;
    font-size: 14PX;
    line-height: 1.15rem;
    margin: .4rem 0 0;
    overflow: hidden;
}
.guang-info .info-deps .time-view-like-share {
    margin-top: .4rem;
}
.time-view-like-share {
    color: #b0b0b0;
    font-size: .5rem;
    height: .95rem;
    line-height: .95rem;
}
.time-view-like-share .like-share-container {
    display: inline-block;
    float: right;
}
.time-view-like-share .like-share-container>* {
    float: left;
}
.time-view-like-share .like-share-container .iconfont {
    color: #b0b0b0;
    display: inline-block;
    font-size: 17PX;
    height: 1.5rem;
    line-height: 1.5rem;
    margin-right: 0;
    outline: none;
    position: relative;
    text-align: center;
    top: -.35rem;
    width: 1.5rem;
}
.time-view-like-share .like-share-container>* {
    float: left;
}
.time-view-like-share .iconfont {
    font-size: 12PX;
    margin-right: .1rem;
    vertical-align: 9%;
}
.hide {
    display: none;
}
 .product-list-box {
    -webkit-overflow-scrolling: touch;
    margin-top: 1rem;
    overflow-x: scroll;
    overflow-y: hidden;
    padding: 0 0 0 .5rem;
    width: 100%;
}
 .product-list {
    height: 4.5rem;
    overflow-y: hidden;
    white-space: nowrap;
}
 .product-list .goods-box {
    background-color: #f0f0f0;
    border-radius: .2rem;
    display: inline-block;
    height: 3.45rem;
    margin-right: .5rem;
    width: 8rem;
}
 .product-list .goods-box>.goods-img {
    float: left;
    height: 3.45rem;
    width: 2.65rem;
}
 .product-list .goods-box>.goods-img img {
    border-bottom-left-radius: .2rem;
    border-top-left-radius: .2rem;
    height: 100%;
    width: 100%;
}
 .product-list .goods-box>.goods-info {
    float: left;
    height: 3.45rem;
    padding: .4rem;
    width: 5.35rem;
}
 .product-list .goods-box>.goods-info .title {
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    color: #444;
    display: -webkit-box;
    font-size: .35rem;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: normal;
}
 .product-list .goods-box>.goods-info .price {
    color: #d0021b;
    font-size: .35rem;
}
</style>
