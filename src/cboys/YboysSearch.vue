<template>
    <div>
        <!-- 头部导航栏部分 -->
        <div id="browser-header">
        <span class="nav-btn iconfont icon-caidanlan"></span>
        <span class="logo" style="transform: rotateX(360deg);"></span>
        <span class="search-btn iconfont icon-sousuo"><a href="//search.m.yohobuy.com/search"></a></span>
        </div>
        <!-- 点击显示右边跳转页面 -->
        <div class="side-nav on" style="pointer-events: auto;">
    <ul class="first">
        <li class="boys">
            <a href="https://m.yohobuy.com/boys" style="">
                <span class="nav-img" style="background-image: url(//img12.static.yhbimg.com/yhb-img01/2015/09/28/10/02efef3ab9c5572af60a63a518f1bd3618.png?imageView/2/w/60/h/60)"></span>
                <em>男生</em>
                <span class="title">BOYS</span>
            </a>
        </li>
        <li class="girls">
            <a href="https://m.yohobuy.com/girls" style="">
                <span class="nav-img" style="background-image: url(//img11.static.yhbimg.com/yhb-img01/2015/09/28/10/01399a2fd752e0d334f57be11d4dbf41c5.png?imageView/2/w/60/h/60)"></span>
                <em>女生</em>
                <span class="title">GIRLS</span>
            </a>
        </li>
        <li class="kids">
            <a href="https://m.yohobuy.com/kids" style="">
                <span class="nav-img" style="background-image: url(//img11.static.yhbimg.com/yhb-img01/2015/10/19/07/01263e3f813116cc9b61010b8ca580c742.png?imageView/2/w/60/h/60)"></span>
                <em>童装</em>
                <span class="title">KIDS</span>
            </a>
        </li>
        <li class="life style">
            <a href="https://m.yohobuy.com/lifestyle" style="">
                <span class="nav-img" style="background-image: url(//img12.static.yhbimg.com/yhb-img01/2015/10/19/07/026df1f974add11e823d1912d920176b6c.png?imageView/2/w/60/h/60)"></span>
                <em>创意生活</em>
                <span class="title">LIFE STYLE</span>
            </a>
        </li>
    </ul>
    <ul>
        <li class="trendfinder">
            <a href="https://guang.m.yohobuy.com" style="">
                <span class="nav-img" style="background-image: url(//img11.static.yhbimg.com/yhb-img01/2015/10/22/07/01ca6c4eb538c1f91d899a091d7ae5139b.png?imageView/2/w/60/h/60)"></span>
                <em>逛</em>
                <span class="title">TRENDFINDER</span>
                <span class="enter-subnav iconfont"></span>
                <span class="enter-subnav iconfont"></span>
                <span class="enter-subnav iconfont"></span>
                <span class="enter-subnav iconfont"></span>
            </a>
            <ul class="sub-nav">
                <li class="" style="background-color:false;">
                        <a href="javascript:;" style="">
                        <i class="nav-back iconfont"></i>
                        <em>逛</em>
                        <span class="title">TRENDFINDER</span>
                    </a>
                </li>
                <li class="" style="background-color:;">
                        <a href="https://guang.m.yohobuy.com" style="">
                        <em>查看全部</em>
                        <span class="title">All</span>
                    </a>
                </li>
                <li class="" style="background-color:;">
                        <a href="https://guang.m.yohobuy.com/?gender=1,3" style="">
                        <em>只看男生</em>
                        <span class="title">Boys</span>
                    </a>
                </li>
                <li class="" style="background-color:;">
                        <a href="https://guang.m.yohobuy.com/?gender=2,3" style="">
                        <em>只看女生</em>
                        <span class="title">Girls</span>
                    </a>
                </li>
            </ul>
        </li>
    </ul>
</div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
#browser-header{
    background-image: linear-gradient(#323232,#414141);
    height: 2.5rem;
    line-height: 2.5rem;
    overflow: hidden;
    position: relative;
}
#browser-header .nav-btn {
    bottom: 0;
    left: 0;
    margin: 0 .75rem;
    position: absolute;
    text-align: center;
    top: 0;
    width: 1rem;
    z-index: 2;
}
#browser-header .icon-caidanlan{
    color:#fff;
    font-size:1.2rem;
}
#browser-header .logo {
    background: url(//cdn.yoho.cn/yohobuywap-node/img/yohologo02.4b84a9fb7d.png) no-repeat 50%;
    background-size: 100%;
    display: block;
    height: 2.5rem;
    margin: 0 auto;
    width: 5.2rem;
}
#browser-header .icon-sousuo{
    color:#fff;
    font-size:1.5rem;
}
#browser-header .search-btn {
    height: 2.25rem;
    position: absolute;
    right: 0;
    text-align: center;
    top: 0;
    width: 2.25rem;
}
/* 点击显示右边跳转页面 */
/* .side-nav.on {
    display: block;
} */
.side-nav {
    -webkit-transition: all .3s;
    background: #f0f0f0;
    bottom: 0;
    display: none;
    left: 0;
    overflow: hidden;
    overflow-y: auto;
    position: fixed;
    right: 2.5rem;
    top: 0;
    transition: all .3s;
    width:80%;
    z-index: 4;
}
.side-nav>ul {
    background: #fff;
    border-bottom: 1px solid #e0e0e0;
    border-top: 1px solid #e0e0e0;
    margin-bottom: .5rem;
}
.side-nav .first li {
    border-bottom: 1px solid #e0e0e0;
    height: 2.2rem;
    line-height: 2.2rem;
}
.side-nav li {
    background: #fff;
    height: 1.9rem;
    line-height: 1.9rem;
    position: relative;
}
.side-nav li a {
    color: #444;
    display: block;
    height: 100%;
    padding-left: 2.75rem;
}
.side-nav>ul {
    background: #fff;
    border-bottom: 1px solid #e0e0e0;
    border-top: 1px solid #e0e0e0;
    margin-bottom: .5rem;
}
.side-nav li {
    background: #fff;
    height: 1.9rem;
    line-height: 1.9rem;
    position: relative;
}
.side-nav li a {
    color: #444;
    display: block;
    height: 100%;
    padding-left: 2.75rem;
}
.sub-nav {
    -webkit-transform: translateX(13.5rem);
    -webkit-transition: -webkit-transform .3s;
    background: #fff!important;
    bottom: 0;
    display: none;
    left: 0;
    overflow: hidden;
    position: fixed;
    top: 0;
    transform: translateX(13.5rem);
    transition: -webkit-transform .3s;
    transition: transform .3s;
    transition: transform .3s,-webkit-transform .3s;
    width: 13.5rem;
}
.sub-nav li:first-child {
    background: #3e3e3e;
    height: 2.25rem!important;
    line-height: 2.25rem!important;
}
.sub-nav li {
    border: none;
    border-bottom: 1px solid #e0e0e0;
    height: 2rem!important;
    line-height: 2rem!important;
}
.side-nav li {
    background: #fff;
    height: 1.9rem;
    line-height: 1.9rem;
    position: relative;
}
.sub-nav li:first-child a {
    border-bottom: none;
    color: #fff;
    padding-left: 1.75rem;
}
.sub-nav li a {
    display: block;
    font-size: .9rem;
    margin: 0 0 0 .75rem;
    padding-left: .25rem;
    position: relative;
    z-index: 2;
}
.side-nav li a {
    color: #444;
    display: block;
    height: 100%;
    padding-left: 2.75rem;
}
.sub-nav li:first-child .nav-back {
    left: 0;
    position: absolute;
}
.sub-nav li em {
    font-size: .75rem!important;
    font-weight: 400;
}
.side-nav li .title {
    -webkit-transform: scale(.5);
    -webkit-transform-origin: 0 50% 0;
    display: inline-block;
    font-size: .9rem;
    padding-left: .5rem;
    transform: scale(.5);
    transform-origin: 0 50% 0;
    vertical-align: bottom;
}
</style>
