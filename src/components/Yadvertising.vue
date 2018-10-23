<template>
    <div>
        <div class="top-downloadbar" id="top-downloadbar" v-if="bool">
      <a href="javascript:void(0);" class="iconfont icon-guanbianniu" id="download-close" @click="toggle">
        </a>	    
        <span class="download-icon"></span>
        <span class="download-text">Yoho!Buy有货</span>
        <p class="download-text-desc">新用户送惊喜礼包</p>
        <a class="download-go" id="download-go" href="https://union.yoho.cn/union/app-downloads.html?union_type=100000000000055&amp;client_id=1017347430&amp;openby:yohobuy={&quot;action&quot;:&quot;go.home&quot;,&quot;params&quot;:{&quot;channel&quot;:&quot;1&quot;}}">立即打开</a>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            bool:true
        }
    },
    methods:{
        toggle(){
            this.bool=false
        }
    }
}
</script>

<style scoped>
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
/* 顶部广告*/
.top-downloadbar {
    display: block;
    height: 2.5rem;
    background: rgba(68,68,68,.95);
    width: 100%;
    padding: .125rem 0;
    position: relative;
    box-sizing: content-box;
}
.top-downloadbar .download-close, .top-downloadbar .download-icon {
    position: absolute;
    top: 50%;
    -webkit-transform: translateY(-50%);
    transform: translateY(-50%);
    background-size: cover;
}
.top-downloadbar .icon-guanbianniu {
    margin-left: .25rem;
    font-size:0.7rem;
    color:#fff;
    line-height: 2.5rem;
}
a {
    color: #000;
    outline: none;
    text-decoration: none;
}
.top-downloadbar .download-icon {
    width: 2rem;
    height: 2rem;
    left: 1.25rem;
    background-image: url(../img/demo1topnav2.png);
}
.top-downloadbar .download-icon {
    position: absolute;
    top: 50%;
    -webkit-transform: translateY(-50%);
    transform: translateY(-50%);
    background-size: cover;
}
.top-downloadbar .download-text {
    position: absolute;
    top: 50%;
    -webkit-transform: translateY(-80%);
    transform: translateY(-80%);
    left: 3.5rem;
    color: #fff;
    font-size: .6rem;
}
.top-downloadbar .download-text-desc {
    position: absolute;
    top: 50%;
    -webkit-transform: translateY(-10%) scale(.5);
    transform: translateY(-10%) scale(.5);
    -webkit-transform-origin: left center;
    transform-origin: left center;
    left: 3.5rem;
    color: #c7c7c7;
    font-size: 1rem;
}
.top-downloadbar .download-go, .top-downloadbar .download-go-wechat {
    position: absolute;
    top: 50%;
    -webkit-transform: translateY(-50%);
    transform: translateY(-50%);
    font-size: .6rem;
    padding: 0 .375rem;
    height: 1.125rem;
    line-height: 1.125rem;
    border-radius: .125rem;
    color: #fff;
    text-decoration: none;
}
.top-downloadbar .download-go {
    right: .375rem;
    background: red;
}
/*顶部的广告*/
</style>
