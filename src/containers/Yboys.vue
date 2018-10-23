<template>
    <div>
    <!-- 广告 -->
        <yadvertising></yadvertising>
    <!-- 头部搜索 -->
        <yboysSearch></yboysSearch>
    <!-- 第一个轮播图 -->
        <yboysbanner1></yboysbanner1>
    <!-- 商品菜单导航 -->
        <yboysCategory></yboysCategory>
    <!-- 图片展示 -->
        <yboysZhangShi></yboysZhangShi>
    <!-- 热门商品 -->
        <yboysHotgoods></yboysHotgoods>
    <!-- 空白图片 -->
        <yboysKongBai></yboysKongBai>
    <!-- 第二个轮播图 -->
        <yboysbanner2></yboysbanner2>
     <!--热门品牌  -->
        <yboysHotPinpai></yboysHotPinpai>
    <!-- 空白图片 -->
        <yboysKongBai></yboysKongBai>
    <!--新人福利-->
    <yboysXinRen></yboysXinRen>
    <!--人气推荐 -->
    <yboysRenQITuiJian></yboysRenQITuiJian>
    <!-- 猜你喜欢 -->
    <yboysLike></yboysLike>
    <!-- 页脚 -->
    <yfooter></yfooter>
    </div>
</template>

<script>
import yadvertising from '../components/Yadvertising.vue';
import yboysSearch from '../cboys/YboysSearch.vue';
import yboysbanner1 from '../cboys/Yboysbanner1.vue';
import yboysbanner2 from '../cboys/Yboysbanner2.vue';
import yboysCategory from '../cboys/YboysCategory.vue';
import yboysHotgoods from '../cboys/YboysHotgoods.vue';
import yboysHotPinpai from '../cboys/YboysHotPinpai.vue';
import yboysZhangShi from '../cboys/YboysZhangShi.vue';
import yboysKongBai from '../cboys/YboysKongBai.vue';
import yboysXinRen from '../cboys/YboysXinRen.vue';
import yboysRenQITuiJian from '../cboys/YboysRenQITuiJian.vue';
import yfooter from '../components/Yfooter.vue';
import yboysLike from '../cboys/YboysLike.vue';
import $ from 'jquery';
export default {
    data(){
        return {
        }
    },
    components:{
        yadvertising,
        yboysSearch,
        yboysbanner1,
        yboysCategory,
        yboysbanner2,
        yboysHotgoods,
        yboysHotPinpai,
        yboysZhangShi,
        yboysKongBai,
        yboysXinRen,
        yboysRenQITuiJian,
        yfooter,
        yboysLike
    },
     methods:{
      //请求轮播图的图片
  }
}

</script>

<style scoped>
/* 公共样式 */
a, abbr, acronym, address, applet, article, aside, audio, b, big, blockquote, body, canvas, caption, center, cite, code, dd, del, details, dfn, div, dl, dt, em, embed, fieldset, figcaption, figure, footer, form, h1, h2, h3, h4, h5, h6, header, hgroup, html, i, iframe, img, ins, kbd, label, legend, li, mark, menu, nav, object, ol, output, p, pre, q, ruby, s, samp, section, small, span, strike, strong, sub, summary, sup, table, tbody, td, tfoot, th, thead, time, tr, tt, u, ul, var, video {
    border: 0;
    font: inherit;
    font-size: 100%;
    margin: 0;
    padding: 0;
    vertical-align: baseline;
}
ol, ul {
    list-style: none;
}
.iconfont {
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    -webkit-text-stroke-width: .4px;
    font-family: iconfont,sans-serif!important;
    font-size: .6rem;
    font-style: normal;
    text-decoration: none;
}
a {
    color: #000;
    outline: none;
    text-decoration: none;
}
img {
    border: 0;
    display: block;
    margin: 0 auto;
    max-width: 100%;
}
</style>
