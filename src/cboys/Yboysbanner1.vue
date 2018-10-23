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
    </div>
</template>

<script>
import Swiper from 'swiper';
import "../../node_modules/swiper/dist/css/swiper.css";
export default {
  data() {
    return {
      arrImg: [
        require("../img/boysBanner_1.jpg"),
        require("../img/boysBanner_2.jpg"),
        require("../img/boysBanner_3.jpg"),
        require("../img/boysBanner_4.jpg"),
        require("../img/boysBanner_5.jpg"),
        require("../img/boysBanner_6.jpg"),
        require("../img/boysBanner_7.jpg"),
        require("../img/boysBanner_8.jpg")
      ]
    };
  },
  mounted(){
     var swiper = new Swiper ('.swiper-container .demo1',{
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
     })
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
</style>
