<template>
    <div>
        <!-- 头部广告 -->
        <yadvertising></yadvertising>

        <!-- 搜索宽 -->
        <div id="search-input" class="search-input">
            <div @click="serach">
                <i class="iconfont icon-sousuo"></i>
                <p>搜索商品</p>
            </div>
        </div>
        <!-- 顶部的选项卡-->
        <ul class="category-nav">
                <li v-for="(p,index) in arrs" :key="index" :class="{'active':page===index}" @click='toggle3(index)'>
                    <span v-text="p.name"></span>
                </li>
        </ul>

        <!-- 菜单导航 -->
        <div class="content lifestyle" style="height: 998px;" v-show="page===0">
            <!-- 左边菜单导航 -->
            <ul class="primary-level">
                            <li class="p-level-item" v-for="(p,index) in boysFenLei" :key="index" v-text="p.name"
                            @click="toggle2(index)" :class="{'focus':tab1===index}">
                            </li>
                    </ul>
                    <div class="sub-level-container">
                            <ul class="sub-level" v-show="tab1===0">
                                    <li>
                                        <a href="//m.yohobuy.com/list/gd1,3-ci5.html?title=上衣">
                                            全部上衣
                                        </a>
                                    </li>
                                    <li>
                                        <a href="//m.yohobuy.com/list/gd1,3-ci45.html">
                                            T恤
                                        </a>
                                    </li>
                                    <li>
                                        <a href="//m.yohobuy.com/list/gd1,3-ci56.html">
                                            衬衫
                                        </a>
                                    </li>
                                    <li>
                                        <a href="//m.yohobuy.com/list/gd1,3-ci48.html">
                                            POLO衫
                                        </a>
                                    </li>
                                    <li>
                                        <a href="//m.yohobuy.com/list/gd1,3-ci53.html">
                                            背心
                                        </a>
                                    </li>
                                    <li>
                                        <a href="//m.yohobuy.com/list/gd1,3-ci61.html">
                                            卫衣
                                        </a>
                                    </li>
                                    <li>
                                        <a href="//m.yohobuy.com/list/gd1,3-ci209.html">
                                            马甲
                                        </a>
                                    </li>
                                    <li>
                                        <a href="//m.yohobuy.com/list/gd1,3-ci72.html">
                                            夹克
                                        </a>
                                    </li>
                                    <li>
                                        <a href="//m.yohobuy.com/list/gd1,3-ci207.html">
                                            防风外套
                                        </a>
                                    </li>
                                    <li>
                                        <a href="//m.yohobuy.com/list/gd1,3-ci1214.html">
                                            风衣
                                        </a>
                                    </li>
                                    <li>
                                        <a href="//m.yohobuy.com/list/gd1,3-ci78.html">
                                            套装
                                        </a>
                                    </li>
                                    <li>
                                        <a href="//m.yohobuy.com/list/gd1,3-ci66.html">
                                            西装
                                        </a>
                                    </li>
                                    <li>
                                        <a href="//m.yohobuy.com/list/gd1,3-ci205.html">
                                            皮衣
                                        </a>
                                    </li>
                                    <li>
                                        <a href="//m.yohobuy.com/list/gd1,3-ci1206.html">
                                            大衣
                                        </a>
                                    </li>
                                    <li>
                                        <a href="//m.yohobuy.com/list/gd1,3-ci1216.html">
                                            毛衣
                                        </a>
                                    </li>
                                    <li>
                                        <a href="//m.yohobuy.com/list/gd1,3-ci1218.html">
                                            针织衫
                                        </a>
                                    </li>
                                    <li>
                                        <a href="//m.yohobuy.com/list/gd1,3-ci211.html">
                                            棉衣
                                        </a>
                                    </li>
                                    <li>
                                        <a href="//m.yohobuy.com/list/gd1,3-ci213.html">
                                            羽绒服
                                        </a>
                                    </li>
                            </ul>
                            <ul class="sub-level" v-show="tab1===1">
                                    <li>
                                        <a href="//m.yohobuy.com/list/gd1,3-ci8.html?title=裤装">
                                            全部裤装
                                        </a>
                                    </li>
                                    <li>
                                        <a href="//m.yohobuy.com/list/gd1,3-ci86.html">
                                            短裤
                                        </a>
                                    </li>
                                    <li>
                                        <a href="//m.yohobuy.com/list/gd1,3-ci90.html">
                                            休闲裤
                                        </a>
                                    </li>
                                    <li>
                                        <a href="//m.yohobuy.com/list/gd1,3-ci92.html">
                                            牛仔裤
                                        </a>
                                    </li>
                                    <li>
                                        <a href="//m.yohobuy.com/list/gd1,3-ci98.html">
                                            运动裤
                                        </a>
                                    </li>
                                    <li>
                                        <a href="//m.yohobuy.com/list/gd1,3-ci100.html">
                                            紧身裤/打底裤
                                        </a>
                                    </li>
                                    <li>
                                        <a href="//m.yohobuy.com/list/gd1,3-ci102.html">
                                            西裤
                                        </a>
                                    </li>
                                    <li>
                                        <a href="//m.yohobuy.com/list/gd1,3-ci268.html">
                                            连体裤
                                        </a>
                                    </li>
                            </ul>
                            <ul class="sub-level" v-show="tab1===2">
                                    <li>
                                        <a href="//m.yohobuy.com/list/gd1,3-ci11.html?title=鞋靴">
                                            全部鞋靴
                                        </a>
                                    </li>
                                    <li>
                                        <a href="//m.yohobuy.com/list/gd1,3-ci1449.html">
                                            休闲/运动鞋
                                        </a>
                                    </li>
                                    <li>
                                        <a href="//m.yohobuy.com/list/gd1,3-ci107.html">
                                            雪地靴
                                        </a>
                                    </li>
                                    <li>
                                        <a href="//m.yohobuy.com/list/gd1,3-ci113.html">
                                            凉鞋/凉拖
                                        </a>
                                    </li>
                                    <li>
                                        <a href="//m.yohobuy.com/list/gd1,3-ci123.html">
                                            时装鞋
                                        </a>
                                    </li>
                                    <li>
                                        <a href="//m.yohobuy.com/list/gd1,3-ci119.html">
                                            靴子
                                        </a>
                                    </li>
                                    <li>
                                        <a href="//m.yohobuy.com/list/gd1,3-ci126.html">
                                            保养护理
                                        </a>
                                    </li>
                            </ul>
                            <ul class="sub-level" v-show="tab1===3">
                                    <li>
                                        <a href="//m.yohobuy.com/list/gd1,3-ci14.html?title=包类">
                                            全部包类
                                        </a>
                                    </li>
                                    <li>
                                        <a href="//m.yohobuy.com/list/gd1,3-ci136.html">
                                            双肩包
                                        </a>
                                    </li>
                                    <li>
                                        <a href="//m.yohobuy.com/list/gd1,3-ci142.html">
                                            单肩包/手拎包
                                        </a>
                                    </li>
                                    <li>
                                        <a href="//m.yohobuy.com/list/gd1,3-ci147.html">
                                            钱包/卡包
                                        </a>
                                    </li>
                                    <li>
                                        <a href="//m.yohobuy.com/list/gd1,3-ci150.html">
                                            腰包
                                        </a>
                                    </li>
                                    <li>
                                        <a href="//m.yohobuy.com/list/gd1,3-ci156.html">
                                            邮差包
                                        </a>
                                    </li>
                                    <li>
                                        <a href="//m.yohobuy.com/list/gd1,3-ci160.html">
                                            电脑包
                                        </a>
                                    </li>
                                    <li>
                                        <a href="//m.yohobuy.com/list/gd1,3-ci163.html">
                                            储物包
                                        </a>
                                    </li>
                                    <li>
                                        <a href="//m.yohobuy.com/list/gd1,3-ci165.html">
                                            环保包
                                        </a>
                                    </li>
                                    <li>
                                        <a href="//m.yohobuy.com/list/gd1,3-ci168.html">
                                            包配
                                        </a>
                                    </li>
                                    <li>
                                        <a href="//m.yohobuy.com/list/gd1,3-ci169.html">
                                            tote包
                                        </a>
                                    </li>
                                    <li>
                                        <a href="//m.yohobuy.com/list/gd1,3-ci170.html">
                                            旅行包
                                        </a>
                                    </li>
                                    <li>
                                        <a href="//m.yohobuy.com/list/gd1,3-ci171.html">
                                            旅行箱
                                        </a>
                                    </li>
                                    <li>
                                        <a href="//m.yohobuy.com/list/gd1,3-ci610.html">
                                            手包/钥匙包
                                        </a>
                                    </li>
                            </ul>
                            <ul class="sub-level" v-show="tab1===4">
                                    <li>
                                        <a href="//m.yohobuy.com/list/gd1,3-ci17.html?title=服配">
                                            全部服配
                                        </a>
                                    </li>
                                    <li>
                                        <a href="//m.yohobuy.com/list/gd1,3-ci179.html">
                                            首饰
                                        </a>
                                    </li>
                                    <li>
                                        <a href="//m.yohobuy.com/list/gd1,3-ci178.html">
                                            帽子
                                        </a>
                                    </li>
                                    <li>
                                        <a href="//m.yohobuy.com/list/gd1,3-ci182.html">
                                            手表
                                        </a>
                                    </li>
                                    <li>
                                        <a href="//m.yohobuy.com/list/gd1,3-ci177.html">
                                            太阳镜/眼镜
                                        </a>
                                    </li>
                                    <li>
                                        <a href="//m.yohobuy.com/list/gd1,3-ci181.html">
                                            配饰
                                        </a>
                                    </li>
                                    <li>
                                        <a href="//m.yohobuy.com/list/gd1,3-ci274.html">
                                            皮带
                                        </a>
                                    </li>
                                    <li>
                                        <a href="//m.yohobuy.com/list/gd1,3-ci180.html">
                                            袜子
                                        </a>
                                    </li>
                                    <li>
                                        <a href="//m.yohobuy.com/list/gd1,3-ci1362.html">
                                            围巾/丝巾/披肩
                                        </a>
                                    </li>
                                    <li>
                                        <a href="//m.yohobuy.com/list/gd1,3-ci187.html">
                                            手套
                                        </a>
                                    </li>
                            </ul>
                            <ul class="sub-level" v-show="tab1===5">
                                    <li>
                                        <a href="//m.yohobuy.com/list/gd1,3-ci1224.html?title=数码3C">
                                            全部数码3C
                                        </a>
                                    </li>
                                    <li>
                                        <a href="//m.yohobuy.com/list/gd1,3-ci1226.html">
                                            影音娱乐
                                        </a>
                                    </li>
                                    <li>
                                        <a href="//m.yohobuy.com/list/gd1,3-ci1228.html">
                                            手机配件
                                        </a>
                                    </li>
                                    <li>
                                        <a href="//m.yohobuy.com/list/gd1,3-ci1230.html">
                                            智能设备
                                        </a>
                                    </li>
                                    <li>
                                        <a href="//m.yohobuy.com/list/gd1,3-ci1232.html">
                                            电脑配件
                                        </a>
                                    </li>
                            </ul>
                            <ul class="sub-level" v-show="tab1===6">
                                    <li>
                                        <a href="//m.yohobuy.com/list/gd1,3-ci1268.html?title=玩具礼品">
                                            全部玩具礼品
                                        </a>
                                    </li>
                                    <li>
                                        <a href="//m.yohobuy.com/list/gd1,3-ci1270.html">
                                            火机烟具
                                        </a>
                                    </li>
                                    <li>
                                        <a href="//m.yohobuy.com/list/gd1,3-ci1272.html">
                                            益智/DIY
                                        </a>
                                    </li>
                                    <li>
                                        <a href="//m.yohobuy.com/list/gd1,3-ci1274.html">
                                            玩具模型
                                        </a>
                                    </li>
                                    <li>
                                        <a href="//m.yohobuy.com/list/gd1,3-ci1276.html">
                                            礼品
                                        </a>
                                    </li>
                            </ul>
                            <ul class="sub-level" v-show="tab1===7">
                                    <li>
                                        <a href="//m.yohobuy.com/list/gd1,3-ci24.html?title=美妆/个护">
                                            全部美妆/个护
                                        </a>
                                    </li>
                                    <li>
                                        <a href="//m.yohobuy.com/list/gd1,3-ci217.html">
                                            面部护理
                                        </a>
                                    </li>
                                    <li>
                                        <a href="//m.yohobuy.com/list/gd1,3-ci219.html">
                                            身体护理
                                        </a>
                                    </li>
                                    <li>
                                        <a href="//m.yohobuy.com/list/gd1,3-ci223.html">
                                            香水彩妆
                                        </a>
                                    </li>
                                    <li>
                                        <a href="//m.yohobuy.com/list/gd1,3-ci193.html">
                                            口腔护理
                                        </a>
                                    </li>
                            </ul>
                            <ul class="sub-level" v-show="tab1===8">
                                    <li>
                                        <a href="//m.yohobuy.com/list/gd1,3-ci19.html?title=内衣/家居服">
                                            全部内衣/家居服
                                        </a>
                                    </li>
                                    <li>
                                        <a href="//m.yohobuy.com/list/gd1,3-ci189.html">
                                            内裤
                                        </a>
                                    </li>
                                    <li>
                                        <a href="//m.yohobuy.com/list/gd1,3-ci190.html">
                                            家居服
                                        </a>
                                    </li>
                            </ul>
                            <ul class="sub-level" v-show="tab1===9">
                            </ul>
                            <ul class="sub-level" v-show="tab1===10">
                            </ul>
                            <ul class="sub-level" v-show="tab1===11">
                                    <li>
                                        <a href="//m.yohobuy.com/list/gd1,3-ci1240.html?title=居家生活">
                                            全部居家生活
                                        </a>
                                    </li>
                                    <li>
                                        <a href="//m.yohobuy.com/list/gd1,3-ci1250.html">
                                            清洁用品
                                        </a>
                                    </li>
                                    <li>
                                        <a href="//m.yohobuy.com/list/gd1,3-ci1260.html">
                                            家装软饰
                                        </a>
                                    </li>
                                    <li>
                                        <a href="//m.yohobuy.com/list/gd1,3-ci1264.html">
                                            生活用品
                                        </a>
                                    </li>
                                    <li>
                                        <a href="//m.yohobuy.com/list/gd1,3-ci1266.html">
                                            家纺
                                        </a>
                                    </li>
                            </ul>
                            <ul class="sub-level" v-show="tab1===12">
                                    <li>
                                        <a href="//m.yohobuy.com/list/gd1,3-ci1294.html?title=厨具餐具">
                                            全部厨具餐具
                                        </a>
                                    </li>
                                    <li>
                                        <a href="//m.yohobuy.com/list/gd1,3-ci1298.html">
                                            厨房配件
                                        </a>
                                    </li>
                                    <li>
                                        <a href="//m.yohobuy.com/list/gd1,3-ci1300.html">
                                            餐具
                                        </a>
                                    </li>
                                    <li>
                                        <a href="//m.yohobuy.com/list/gd1,3-ci1302.html">
                                            茶具/咖啡具
                                        </a>
                                    </li>
                                    <li>
                                        <a href="//m.yohobuy.com/list/gd1,3-ci1304.html">
                                            水具酒具
                                        </a>
                                    </li>
                            </ul>
                            <ul class="sub-level" v-show="tab1===13">
                                    <li>
                                        <a href="//m.yohobuy.com/list/gd1,3-ci1286.html?title=文具杂志">
                                            全部文具杂志
                                        </a>
                                    </li>
                                    <li>
                                        <a href="//m.yohobuy.com/list/gd1,3-ci1288.html">
                                            学生文具
                                        </a>
                                    </li>
                                    <li>
                                        <a href="//m.yohobuy.com/list/gd1,3-ci1290.html">
                                            本册/便签
                                        </a>
                                    </li>
                                    <li>
                                        <a href="//m.yohobuy.com/list/gd1,3-ci1292.html">
                                            图书/杂志
                                        </a>
                                    </li>
                            </ul>
                            <ul class="sub-level" v-show="tab1===14">
                                    <li>
                                        <a href="//m.yohobuy.com/list/gd1,3-ci1278.html?title=生活电器">
                                            全部生活电器
                                        </a>
                                    </li>
                                    <li>
                                        <a href="//m.yohobuy.com/list/gd1,3-ci1280.html">
                                            家用电器
                                        </a>
                                    </li>
                                    <li>
                                        <a href="//m.yohobuy.com/list/gd1,3-ci1282.html">
                                            个护健康
                                        </a>
                                    </li>
                            </ul>
                    </div>
                </div>
                <!-- girls -->
                <div class="girls" v-show="page===1">
                    <h2>hello world</h2>
                </div>
                <!-- Kids -->
                <div class="kids" v-show="page===2">
                    <h2>hello worlds</h2>
                </div>
                <!-- liftStyle -->
                <div class="liftStyle" v-show="page===3">
                    <h2>hello world
                    </h2>
                </div>
        <!-- 页脚 -->
        <yfooter></yfooter>
    </div>    
</template>

<script>
import yadvertising from "../components/Yadvertising.vue";
import yfooter from "../components/Yfooter.vue";
import $ from "jquery";
export default {
  data() {
    return {
      page: 0,
      tab1:0,
      arrs: [
        {
          name: "boys",
          bool: true
        },
        {
          name: "girls",
          bool: false
        },
        {
          name: "kids",
          bool: false
        },
        {
          name: "lifestyle",
          bool: false
        }
      ],
      boysFenLei: []
    };
  },
  components: {
    yadvertising,
    yfooter
  },
  methods: {
    toggle() {
      let _this = this;
      $.ajax({
        url: "http://localhost:9995/getgoods",
        type: "GET",
        data: {
            username:'goods'
        },
        success(data) {
           _this.boysFenLei=data;
        }
      });
    },
    toggle2(index){
      this.tab1 = index;
  },
  toggle3(index){
      this.page=index;
      console.log(666)
  }
  ,
  serach(){
      this.$router.push('Ysearch')
  }
  },
  
  mounted() {
      this.toggle();
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
.iconfont {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  -webkit-text-stroke-width: 0.4px;
  font-family: iconfont, sans-serif !important;
  font-size: 0.6rem;
  font-style: normal;
  text-decoration: none;
}
body {
  font-size: 24px;
}
.active {
  color: #000;
}
.focus{
    background:#fff;
}
/*搜索框*/
.search-input {
  background-color: #f8f8f8;
  padding: 0.325rem 0.5rem;
  position: relative;
}
.icon-sousuo {
  bottom: 0;
  color: #999;
  left: 1.075rem;
  line-height: 2.15rem;
  position: absolute;
  top: 0;
}
.search-input p {
  background: #fff;
  border: none;
  border-radius: 1.5rem;
  box-sizing: border-box;
  color: #999;
  font-size: 13px;
  height: 2rem;
  line-height: 1.5rem;
  padding-left: 1.65rem;
  width: 100%;
}
/* 顶部的选项卡 */
.category-nav {
  border-bottom: 1px solid #e6e6e6;
  height: 1.75rem;
}
.category-nav li {
  box-sizing: border-box;
  color: #999;
  border-right: 1px solid #ccc;
  display: block;
  float: left;
  height: 100%;
  text-align: center;
  width: 25%;
}
/* <!-- 菜单导航 --> */
.primary-level {
  box-sizing: border-box;
  float: left;
  width: 45%;
  background:#f8f8f8;
}
.primary-level > li {
  height: 2.225rem;
  line-height: 2.225rem;
  overflow: hidden;
  padding: 0 0.8rem;
  text-overflow: ellipsis;
  white-space: nowrap;
}
/* // 右边菜单导航 */
.sub-level-container {
    background: #fff;
    box-sizing: border-box;
    float: left;
    height: 100%;
    overflow-x: auto;
    width: 55%;
}
 .sub-level-container .sub-level {
    width: 100%;
}
  .sub-level-container .sub-level>li {
    border-bottom: 1px solid #e6e6e6;
    box-sizing: border-box;
    height: 2.225rem;
    line-height: 2.225rem;
    padding-left: .5rem;
}
  .sub-level-container .sub-level a {
    color: #000;
    display: block;
    height: 100%;
    width: 100%;
}
/*girls*/
.girls{
    width:100%;
    height:998px;
    background:pink;
}
/* kids */
.kids{
    width: 100%;
    height:998px;
    background:skyblue;
}
/*liftStyle*/
.liftStyle{
    width:100%;
    height:998px;
    background:orange;
}
</style>
