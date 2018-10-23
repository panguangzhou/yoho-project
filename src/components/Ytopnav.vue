<template>
  <div>
    <!-- 顶部广告 -->
        <yadvertising></yadvertising>
<!-- mian     -->
        <div class="main-wrap" id="main-wrap" data-apppath="yohobuy://yohobuy.com/goapp?openby:yohobuy={&quot;action&quot;:&quot;go.home&quot;,&quot;params&quot;:{&quot;channel&quot;:&quot;1&quot;}}" data-minipath="//m.yohobuy.com/api/wechat/miniapp.jpg?miniapp_type=0&amp;param=%7B%22union_type%22%3A%22%22%7D&amp;miniQrType=0">     
          <div class="index-page yoho-page">
      <div class="index-container">
        <div class="index-header clearfix">
          <!-- 搜索框的状态 -->
            <div class="index-logo" :class='{"action":search}'>
            </div>
            <div class="box" :class='{"action":search}'>
                <a href="javascript:void(0);" class="no-search" @click="search=!search">取消</a>
                <form action="//search.m.yohobuy.com/" class="index-search">
                    <div class="search-box">
                        <input type="hidden" name="from" value="search">
                        <input type="text" name="query" placeholder="搜索" autocomplete="off" @click="search=!search" v-model="txt">
                        <span class="iconfont clear-text icon-guanbianniu" @click="changeText"></span>
                        <span class="iconfont icon-sousuo empty"></span>
                    </div>
                </form>
            </div>
        </div>

        <div class="index-channel">
            <img class="img" src="//img10.static.yhbimg.com/yhb-img01/2018/10/15/17/01f6d1c6aa6154529552d2335d493972a9.jpg?imageView2/2/w/640/h/800/q/90">
            <div class="index-channel-list">
                    <a href="javascript:;" class="list-item" @click="goBoys">
                        男生 <span class="lighter">BOYS</span>
                        <span class="iconfont icon-xiangyou"></span>
                    </a>
                    <a href="javascript:;" class="list-item">
                        女生 <span class="lighter">GIRLS</span>
                        <span class="iconfont icon-xiangyou"></span>
                    </a>
                    <a href="/javascript:;" class="list-item">
                        潮童 <span class="lighter">KIDS</span>
                        <span class="iconfont icon-xiangyou"></span>
                    </a>
                    <a href="/javascript:;" class="list-item">
                        创意生活 <span class="lighter">LIFESTYLE</span>
                        <span class="iconfont icon-xiangyou"></span>
                    </a>
            </div>
        </div>
    </div>
</div>
     <footer id="yoho-footer" class="yoho-footer" style="display: block;">

    <p class="op-row">
        <span @click="goLogin">登录</span>
        <span class="sep-line">|</span>
        <span @click="goReg">注册</span>
        <span class="back-to-top">
            <!-- 效果不好 -->
          <a href="#goTops">
            回到顶部
            <i class="iconfont icon-huidingbu"></i>
          </a>
        </span>
        </p><div class="float-top "></div>
    <p></p>
    <address class="copyright">
        CopyRight©2007-2018 南京新与力文化传播有限公司
    </address>
</footer>
    </div>
  </div>
</template>

<script>
import yadvertising from "./Yadvertising.vue";
export default {
  components:{
    yadvertising
  },
    data(){
      return {
        search:false,
        txt:'',
      }
    },
    methods:{
    changeText(){
      this.txt=''
    },
      //去登录界面
    goLogin(){
      this.$router.push('/Ylogin');
  },
  //去注册界面
  goReg(){
      this.$router.push('/Yreg')
  },
  //去boys界面
    goBoys(){
        this.$router.push('/Yboys')
    }
  }
}
</script>
<style>
a, abbr, acronym, address, applet, article, aside, audio, b, big, blockquote, body, canvas, caption, center, cite, code, dd, del, details, dfn, div, dl, dt, em, embed, fieldset, figcaption, figure, footer, form, h1, h2, h3, h4, h5, h6, header, hgroup, html, i, iframe, img, ins, kbd, label, legend, li, mark, menu, nav, object, ol, output, p, pre, q, ruby, s, samp, section, small, span, strike, strong, sub, summary, sup, table, tbody, td, tfoot, th, thead, time, tr, tt, u, ul, var, video {
    border: 0;
    font: inherit;
    font-size: 100%;
    margin: 0;
    padding: 0;
    vertical-align: baseline;
}
*, :after, :before {
    -webkit-tap-highlight-color: rgba(0,0,0,0);
    box-sizing: border-box;
}
.icon {
   width: 1em; height: 1em;
   vertical-align: -0.15em;
   fill: currentColor;
   overflow: hidden;
}
/*main*/
.main-wrap {
    margin-left: auto;
    margin-right: auto;
    position: relative;
    width: 100%;
}
.index-page {
    margin: 0 auto;
    overflow: hidden;
    width: 100%;
}
.index-page .index-container {
    background-color: #fff;
    position: relative;
    transition: transform .5s,-webkit-transform .5s;
}
.index-page .index-header {
    box-sizing: border-box;
    height: 2.4rem;
    line-height: 2.4rem;
    padding: 0 .5rem;
    width: 100%;
}
.index-page .index-header .index-logo {
    -webkit-transition: all .4s;
    background: url(//cdn.yoho.cn/yohobuywap-node/img/yohologo.ea3c272db8.png) 0 no-repeat;
    background-size: 7rem 1.5rem;
    float: left;
    height: 2.4rem;
    opacity: 1;
    transition: all .4s;
    width: 7.2rem;
}
/*搜索框状态*/
.index-page .index-header .index-logo.action {
    opacity: 0;
    width: 0;
} 
.index-page .index-header .box.action .clear-text, .index-page .index-header .box.action .no-search {
    display: block;
}
.index-page .index-header .box {
    overflow: hidden;
    position: relative;
    z-index: 1;
}
.index-page .index-header .no-search {
    color: #999;
    display: none;
    float: left;
    font-size: .7rem;
    margin-right: .25rem;
}
.index-page .index-header .index-search {
    -webkit-transition: width .4s;
    background: #fff;
    height: 2.4rem;
    overflow: hidden;
    transition: width .4s;
}
.index-page .index-header .index-search .search-box {
    -webkit-transition: width .4s;
    -webkit-transition: margin-left .4s;
    border: 1px solid #ccc;
    box-sizing: border-box;
    height: 1.4rem;
    overflow: hidden;
    padding-right: 2rem;
    position: relative;
    top: .5rem;
    transition: width .4s;
    transition: margin-left .4s;
}
.index-page .index-header .index-search input {
    -webkit-appearance: none;
    border: none;
    color: #999;
    float: left;
    font-size: .7rem;
    overflow: hidden;
    padding: .25rem;
    width: 96%;
}

button, input, select, textarea {
    font-size: 100%;
    margin: 0;
}
.index-page .index-header .index-search input {
    -webkit-appearance: none;
    border: none;
    color: #999;
    float: left;
    font-size: .7rem;
    overflow: hidden;
    padding: .25rem;
    width: 96%;
}
.index-page .index-header .index-search .clear-text {
    color: #ccc;
    display: none;
    right: 1.25rem;
}

.index-page .index-header .index-search .iconfont {
    font-size: .7rem;
    line-height: 1rem;
    position: absolute;
    top: .2rem;
    width: 1rem;
    z-index: 1;
}
input[type="hidden" i], input[type="image" i], input[type="file" i] {
    -webkit-appearance: initial;
    background-color: initial;
    cursor: default;
    padding: initial;
    border: initial;
}
input[type="hidden" i] {
    display: none;
}
input {
    -webkit-appearance: textfield;
    background-color: white;
    -webkit-rtl-ordering: logical;
    cursor: text;
    padding: 1px;
    border-width: 2px;
    border-style: inset;
    border-color: initial;
    border-image: initial;
}
input, textarea, select, button {
    text-rendering: auto;
    color: initial;
    letter-spacing: normal;
    word-spacing: normal;
    text-transform: none;
    text-indent: 0px;
    text-shadow: none;
    display: inline-block;
    text-align: start;
    margin: 0em;
    font: 400 13.3333px Arial;
}
input, textarea, select, button, meter, progress {
    -webkit-writing-mode: horizontal-tb !important;
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
.index-page .index-header .index-search  .empty {
    position: absolute;
    right: 0.15rem;
}
.index-page .index-header .index-search .search-icon {
    color: #666;
    right: .25rem;
}
.index-page .index-header .index-search .iconfont {
    font-size: .7rem;
    line-height: 1rem;
    position: absolute;
    top: .2rem;
    width: 1rem;
    z-index: 1;
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
.index-page .index-container .index-channel {
    background-color: #000;
    color: #fff;
    min-height: 20rem;
    position: relative;
    text-align: center;
}
img {
    border: 0;
    display: block;
    margin: 0 auto;
    max-width: 100%;
}
.index-page .index-container .index-channel .index-channel-list {
    margin-top: -7.5rem;
    position: absolute;
    top: 50%;
    width: 100%;
}
.index-page .index-container .index-channel .index-channel-list .list-item {
    background-color: #000;
    border: .2rem solid #fff;
    color: #fff;
    display: block;
    font-size: .8rem;
    font-weight: 700;
    height: 2.5rem;
    line-height: 2.05rem;
    margin: 0 auto 1rem;
    position: relative;
    text-align: center;
    width: 10.8rem;
}
.index-page .index-container .index-channel .index-channel-list .icon-xiangyou {
    font-weight: 700;
    position: absolute;
    right: .25rem;
    top: 0;
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
 /* main */
 /* footer */
 .yoho-footer {
    background-color: #fff;
    display: none;
    font-size: .6rem;
    position: relative;
    width: 100%;
}
.yoho-footer .op-row {
    height: 3rem;
    line-height: 3rem;
    padding: 0 .75rem;
}
.yoho-footer .op-row a, .yoho-footer .op-row span {
    display: inline-block;
    overflow: hidden;
}
.yoho-footer .op-row .sep-line {
    color: #e0e0e0;
    margin: 0 .75rem;
}

.yoho-footer .op-row a, .yoho-footer .op-row span {
    display: inline-block;
    overflow: hidden;
}
.yoho-footer .float-top {
    -webkit-background-size: cover;
    background: url(//cdn.yoho.cn/yohobuywap-node/img/back-to-top.fcf6828d24.png) no-repeat;
    background-size: cover;
    border-radius: 50%;
    bottom: auto;
    display: none;
    height: 2.2rem;
    left: auto;
    position: absolute;
    right: 1.175rem;
    top: 1.175rem;
    width: 2.2rem;
}
.yoho-footer .copyright {
    background-color: #eee;
    color: #666;
    font-size: .6rem;
    height: 60PX;
    line-height: 60PX;
    text-align: center;
}
.yoho-footer .op-row .back-to-top {
    position: absolute;
    right: 1rem;
}
.yoho-footer .op-row .back-to-top .icon-huidingbu{
  color:#000;
}
 /* footer */
</style>
