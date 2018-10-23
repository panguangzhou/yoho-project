<template>
    <div>
        <!-- 第二个轮播图 -->
    <div class="swiper-container">
            <ul class="swiper-wrapper">
                <li class="swiper-slide" v-for="(p,index) in arrImgzhong" :key="index" >
                    <img :src="p" alt="">
                </li>
            </ul>
    <!-- Add Pagination -->
            <div class="swiper-pagination"></div>
        </div>
    </div>
</template>

<script>
import Swiper from 'swiper';
import "../../node_modules/swiper/dist/css/swiper.css";
export default {
    data(){
        return {
             arrImgzhong:[
               require('../img/boysBannerzhong_1.jpg'),
               require('../img/boysBannerzhong_2.jpg'),
               require('../img/boysBannerzhong_3.jpg'),
            ]
        }
    },
    mounted(){
     var swiper = new Swiper ('.swiper-container',{
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
}
</script>

<style>

</style>
