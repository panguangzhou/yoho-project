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
    <div class="float-top iconfont icon-huidingbu" @click="gotTop"></div>
    </div>
</template>

<script>
import yadvertising from "../components/Yadvertising.vue";
import yboysSearch from "../cboys/YboysSearch.vue";
import yboysbanner1 from "../cboys/Yboysbanner1.vue";
import yboysbanner2 from "../cboys/Yboysbanner2.vue";
import yboysCategory from "../cboys/YboysCategory.vue";
import yboysHotgoods from "../cboys/YboysHotgoods.vue";
import yboysHotPinpai from "../cboys/YboysHotPinpai.vue";
import yboysZhangShi from "../cboys/YboysZhangShi.vue";
import yboysKongBai from "../cboys/YboysKongBai.vue";
import yboysXinRen from "../cboys/YboysXinRen.vue";
import yboysRenQITuiJian from "../cboys/YboysRenQITuiJian.vue";
import yfooter from "../components/Yfooter.vue";
import yboysLike from "../cboys/YboysLike.vue";
import ybottomBox from "../components/YbottomBox.vue";
import $ from "jquery";
export default {
  data() {
    return {};
  },
  components: {
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
    yboysLike,
    ybottomBox
  },
  methods: {
    //滚动条的位置
    showTime() {
      $(window).scroll(function() {
        if ($(this).scrollTop() > 500) {
          $(".float-top").show();
        } else {
          $(".float-top").hide();
        }
      });
    },
    //点击返回顶部
    gotTop() {
      $("html , body").animate({ scrollTop: 0 }, "slow");
    }
  },
  mounted() {
    this.showTime();
  }
};
</script>

<style scoped>
/* 公共样式 */
a,
abbr,
acronym,
address,
applet,
article,
aside,
audio,
b,
big,
blockquote,
body,
canvas,
caption,
center,
cite,
code,
dd,
del,
details,
dfn,
div,
dl,
dt,
em,
embed,
fieldset,
figcaption,
figure,
footer,
form,
h1,
h2,
h3,
h4,
h5,
h6,
header,
hgroup,
html,
i,
iframe,
img,
ins,
kbd,
label,
legend,
li,
mark,
menu,
nav,
object,
ol,
output,
p,
pre,
q,
ruby,
s,
samp,
section,
small,
span,
strike,
strong,
sub,
summary,
sup,
table,
tbody,
td,
tfoot,
th,
thead,
time,
tr,
tt,
u,
ul,
var,
video {
  border: 0;
  font: inherit;
  font-size: 100%;
  margin: 0;
  padding: 0;
  vertical-align: baseline;
}
ol,
ul {
  list-style: none;
}
.iconfont {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  -webkit-text-stroke-width: 0.4px;
  font-family: iconfont, sans-serif !important;
  font-size: 0.6rem;
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
/* 返回顶部小标签 */
.float-top {
  width: 2.3rem;
  height: 2.3rem;
  position: fixed;
  right: 1rem;
  bottom: 5rem;
  background-color: rgba(0, 0, 0, 0.3);
  border-radius: 50%;
  color: #fff;
  font-size: 1rem;
  text-align: center;
  line-height: 2.3rem;
  z-index: 9999;
}
</style>
