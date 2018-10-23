<template>
    <div>
        <div class="maybe-like">
    <p class="title">
        <i class="icon"></i>
        <span>你可能喜欢</span>
    </p>
    <div id="goods-list" class="goods-list clearfix">     
    <div class="good-info" v-for="(p,index) in arrs" :key="index" @click="goxiangqingye(p.imgUrl,p.ids,p.price,p.title,p.nums,p.hot)">
        <div class="tag-container clearfix">
        </div>
        <div class="good-detail-img">
            <a class="good-thumb" >
                    <img class="lazy" :src="p.imgUrl">
            </a>
            <div class="similar-c">
    <div class="bg"></div>
    <a >找相似</a>
</div>
</div>
        <div class="good-detail-text">
            <div class="name">
                <a v-text="p.title"></a>
            </div>
            <div class="price">
                    <span class="sale-price" v-text="p.price"></span>
                    <span class="market-price" v-text="p.daze"></span>
            </div>
            <a class="similar-btn iconfont"></a>
        </div>
    </div>
    </div>
        </div>
    </div>
</template>

<script>
import $ from "jquery";
export default {
  data() {
    return {
      arrs: []
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
          _this.arrs = data;
        }
      });
    },
    //跳转到商品详情页
    goxiangqingye(img,ids,price,title,nums,hot){
      this.$router.push({
        path:'/Yxianqingye',
        query:{
          img,
          ids,
          price,
          title,
          nums,
          hot
        }
        }
        )
    },
    // 找相似
    getxiangshi(){

    }
  },
  mounted() {
    this.toggle();
    $(window).scroll(function(){
      var scrollTop = $(this).scrollTop();
      var scrollHeight = $(document).height();
      var windowHeight = $(this).height();
      if (scrollTop + windowHeight == scrollHeight) {
        $.ajax({
          url: "http://localhost:9995/goodslist",
          type: "GET",
          data: {},
          success(data) {
          }
        });
      }
    });
  }
};
</script>

<style>
.maybe-like {
  background: #fff;
  border-top: 1px solid #ccc;
  margin-top: 0.75rem;
  padding-left: 0.375rem;
  position: relative;
}
.maybe-like .title {
  color: #dadada;
  font-size: 0.95rem;
  height: 2.6rem;
  line-height: 2.6rem;
  text-align: center;
}
.good-info {
  float: left;
  height: 12.65rem;
  width: 50%;
  padding: 8px;
  box-sizing: border-box;
}
.good-info .tag-container {
  height: 0.7rem;
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
  height: 2rem;
  line-height: 0.75rem;
  margin: 0.375rem 0 0.25rem;
  min-height: 1.25rem;
  overflow: hidden;
  padding: 0.125rem 0;
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
.good-detail-text .price .sale-price {
  color: #d62927;
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
