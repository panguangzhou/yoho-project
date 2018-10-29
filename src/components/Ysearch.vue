<template>
    <div>
        <!-- 头部广告 -->
       <advertising></advertising>
       <!-- 头部搜索 -->
    <header id="yoho-header" class="yoho-header boys">
    <a href="javascript:history.go(-1);" class="iconfont nav-back icon-fanhui"></a>
    <span class="iconfont nav-home new-nav-home icon-caidan" @click="hides"></span>
    <p class="nav-title">搜索</p>
    <div class="homebuttom boys" :class="{'hide':hide}" >
        <div class="ul-arr"></div>
        <ul>
            <li>
                <a href="//m.yohobuy.com/?go=1">
                    <i class="iconfont icon-yemian-copy"></i>
                    <span>首页</span>
                </a>
            </li>
            <li>
                <a href="//m.yohobuy.com/cate">
                    <i class="iconfont icon-tab_icon_crm"></i>
                    <span>分类</span>
                </a>
            </li>
            <li>
                <a href="//m.yohobuy.com/cart/index/index" rel="nofollow">
                    <i class="iconfont icon-buy-car"></i>
                    <span>购物车</span>
                </a>
            </li>
            <li>
                <a href="//m.yohobuy.com/home" rel="nofollow">
                    <i class="iconfont icon-wodedangxuan"></i>
                    <span>我的</span>
                </a>
            </li>
        </ul>
    </div>
</header>
<!-- 点击搜索框 -->
<div id="search-input" class="search-input">            
            <form id="search-form">
                <i class="search-icon iconfont icon-sousuo"></i>
                <input type="hidden" name="from" value="search">
                <input type="text" placeholder="Dickies 70元优惠券" name="query" data-bp-id="search_page_input_1" class="buriedpoint" autocomplete="off"  @keyup="toggle" v-model="str">
                <i class="clear-input iconfont hide" style="touch-action: pan-y; user-select: none; -webkit-user-drag: none; -webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></i>
                <span id="search" class="search buriedpoint" type="submit" data-bp-id="search_index_one_0">搜索</span>
            </form>
        </div>
    <!-- 模糊查询的商品 -->
    <ul class="search-associate" v-if="bool">
        <li v-for="(p,index) in arrStr" :key="index">
            <span class="keyword" v-text="p.name">666</span>
        </li>
    </ul>
    <div class="display" v-if="display">
    <!-- 热门搜索商品 -->
    <div class="hot-search-new clearfix">
                <div class="new-hot">
                    <div class="hot-title hot-term">热搜</div>
                        <div class="hot-term">
                            <a href="javascript:void(0);">卫衣</a>
                        </div>
                        <div class="hot-term">
                            <a href="javascript:void(0);">工装裤</a>
                        </div>
                        <div class="hot-term">
                            <a href="javascript:void(0);">PUMA</a>
                        </div>
                        <div class="hot-term">
                            <a href="javascript:void(0);">夹克</a>
                        </div>
                        <div class="hot-term">
                            <a href="javascript:void(0);">converse</a>
                        </div>
                        <div class="hot-term">
                            <a href="javascript:void(0);">休闲裤</a>
                        </div>
                        <div class="hot-term">
                            <a href="javascript:void(0);">MADNESS</a>
                        </div>
                        <div class="hot-term">
                            <a href="javascript:void(0);">袜子</a>
                        </div>
                        <div class="hot-term">
                            <a href="javascript:void(0);">Dickies</a>
                        </div>
                        <div class="hot-term">
                            <a href="javascript:void(0);">adidas Originals</a>
                        </div>
                </div>
            </div>

    <!-- 猜你喜欢 -->
    <div class="search-items clearfix">
            <div class="search-index">
                <div class="search-group history-search hide" style="display: none;">
                    <div class="search-content-title">
                        <h3 class="left">最近搜索</h3>
                        <i id="clear-history" class="iconfont right ico-del hide" style="touch-action: pan-y; user-select: none; -webkit-user-drag: none; -webkit-tap-highlight-color: rgba(0, 0, 0, 0); display: none;"></i>
                    </div>
                    <div class="search-content">
                        <ul class="history clearfix"></ul>
                    </div>
                </div>
                    <div class="search-group want-search">
                        <h3>猜你想找</h3>
                        <div class="search-content">
                            <ul class="want clearfix">
                                    <li>
                                        <a href="javascript:void(0);">速写CROQUIS</a>
                                    </li>
                                    <li>
                                        <a href="javascript:void(0);">夹克</a>
                                    </li>
                                    <li>
                                        <a href="javascript:void(0);">卫衣</a>
                                    </li>
                                    <li>
                                        <a href="javascript:void(0);">休闲裤</a>
                                    </li>
                                    <li>
                                        <a href="javascript:void(0);">休闲/运动鞋</a>
                                    </li>
                                    <li>
                                        <a href="javascript:void(0);">T恤</a>
                                    </li>
                                    <li>
                                        <a href="javascript:void(0);">MO&amp;Co.</a>
                                    </li>
                                    <li>
                                        <a href="javascript:void(0);">MATERIAL GIRL</a>
                                    </li>
                                    <li>
                                        <a href="javascript:void(0);">Levi's官方旗舰店</a>
                                    </li>
                                    <li>
                                        <a href="javascript:void(0);">HIPANDA</a>
                                    </li>
                            </ul>
                        </div>
                    </div>
            </div>
        </div>
        </div>
        <!-- 页脚导航部分 -->
        <footer id="yoho-footer" class="yoho-footer" style="display: block;">

    <p class="op-row">
        <span @click="goLogin">登录</span>
        <span class="sep-line">|</span>
        <span @click="goReg">注册</span>
        <span class="back-to-top">
            <!-- 效果不好 -->
          <a @click="gotTop">
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
</template>

<script>
import advertising from './Yadvertising.vue'
import $ from 'jquery';
export default {
    data(){
        return {
            hide:true,
            str:'',
            arrStr:[],
            bool:false,
            display:true
        }
    },
    components:{
        advertising
    },
    methods:{
        hides(){
            this.hide=!this.hide
        },
         // 跳转到登录界面
    goLogin(){
        this.$router.push('/Ylogin');
    },
    // 跳转到注册界面
    goReg(){
        this.$router.push('/Yreg')
    },
    // 模糊查询
    toggle(){
        let _this = this;
        $.ajax({
            url:'http://localhost:9995/search',
            type:'GET',
            data:{
                searchName:_this.str
            },
            success(data){
                _this.arrStr = data;
                if(data==='no'){
                    _this.bool=false
                    _this.display=true
                }else{
                    _this.bool=true
                    _this.display=false
                }
            }
        })
    },
    //点击返回顶部
    gotTop(){
      $('html , body').animate({scrollTop: 0},'slow');
    }
    },
}
</script>

<style scoped>
/* 隐藏样式 */
.hide{
    display: none;
}
/*header search*/
.yoho-header {
    background-color: #000;
    color: #fff;
    height: 2.65rem;
    line-height: 2.65rem;
    position: relative;
    width: 100%;
    z-index: 20;
}
.yoho-header .nav-back {
    height: 2.625rem;
    left: 0;
    line-height: 2.625rem;
    width: 2.625rem;
}
.yoho-header .nav-back, .yoho-header .nav-home {
    color: #fff;
    font-size: 20PX;
    height: 2.25rem;
    line-height: 2.25rem;
    outline: none;
    position: absolute;
    text-align: center;
    top: 0;
    width: 2.25rem;
}
.yoho-header .nav-home {
    height: 2.625rem;
    line-height: 2.625rem;
    right: 0;
    width: 2.625rem;
}
.yoho-header .nav-title {
    color: #fff;
    font-size: 1.35rem;
    font-weight: 700;
    height: 100%;
    left: 0;
    margin-left: 2.5rem;
    margin-right: 2.5rem;
    overflow: hidden;
    position: absolute;
    right: 0;
    text-align: center;
    text-overflow: ellipsis;
    top: 0;
    white-space: nowrap;
}
/*右边菜单点击按钮*/
.homebuttom {
    height: 8.875rem;
    top: 2.325rem;
}
.hide {
    display: none;
}
.homebuttom {
    background-size: 100% 100%;
    color: #fff;
    height: 8.875rem;
    overflow: hidden;
    padding-top: .425rem;
    position: absolute;
    right: .3rem;
    top: 2rem;
    width: 7rem;
    z-index: 2;
}
.homebuttom.boys .ul-arr {
    background-color: #434343;
}
.homebuttom .ul-arr {
    -webkit-transform: rotate(45deg);
    height: .75rem;
    position: absolute;
    right: .8rem;
    top: .1rem;
    transform: rotate(45deg);
    width: .75rem;
}
.homebuttom.boys ul {
    background-image: -webkit-linear-gradient(#434343,#171717);
    background-image: linear-gradient(#434343,#171717);
}
.homebuttom ul {
    border-radius: .25rem;
    height: 8.45rem;
    overflow: hidden;
    padding: 1px 0;
    width: 100%;
}
.homebuttom ul li {
    float: left;
    height: 2.1rem;
    line-height: 2.1rem;
    overflow: hidden;
    padding-left: 1rem;
    width: 100%;
}
.homebuttom ul li i {
    color: #fff;
    display: block;
    float: left;
    font-size: .75rem;
    width: 1.75rem;
}
.homebuttom.boys ul li span {
    border-bottom: 1px solid #444;
}
.homebuttom ul li span {
    border-bottom: 1px solid #fff;
    color: #fff;
    display: block;
    float: left;
    font-size: .7rem;
    height: 2.1rem;
    padding-left: .5rem;
    width: 4.25rem;
}
/*点击搜索框*/
.search-input, .shop-index .search-area .search-input {
    background: #f8f8f8;
    padding: .35rem .55rem;
    position: relative;
}
 .search-input form, .shop-index .search-area .search-input form {
    width: 100%;
}
 .search-input input, .shop-index .search-area .search-input input {
    background: #fff;
    border: none;
    border-radius: .7rem;
    font-size: .6rem;
    height: 1.4rem;
    padding: 0 1.3rem;
    width: 14.75rem;
}
.search-input .search, .shop-index .search-area .search-input .search {
    background: transparent;
    border: none;
    color: #666;
    font-size: 15PX;
    line-height: 1.4rem;
    position: absolute;
    right: 1rem;
    top: .35rem;
}
/* 热门搜索商品*/
.hot-search-new, .shop-index .search-area .hot-search-new {
    border-bottom: 1px solid #e0e0e0;
    overflow-x: auto;
    white-space: nowrap;
    width: 100%;
}
.hot-search-new .new-hot, .shop-index .search-area .hot-search-new .new-hot {
    background: #fff;
    line-height: 0;
    padding-bottom: .625rem;
    padding-left: .75rem;
    padding-top: .625rem;
}
 .hot-search-new .hot-title, .shop-index .search-area .hot-search-new .hot-title {
    border: none;
    color: #000;
    font-size: .85rem;
    padding: 0;
}
.hot-search-new .hot-term, .shop-index .search-area .hot-search-new .hot-term {
    background: #fff;
    border: 1px solid #e0e0e0;
    border-radius: .2rem;
    color: #000;
    display: inline-block;
    font-size: .7rem;
    height: 1.55rem;
    line-height: 1.55rem;
    margin-right: .375rem;
    overflow: hidden;
    padding: 0 .5rem;
    text-overflow: ellipsis;
    white-space: nowrap;
    width: auto;
}
.hot-search-new .hot-term, .shop-index .search-area .hot-search-new .hot-term {
    background: #fff;
    border: 1px solid #e0e0e0;
    border-radius: .2rem;
    color: #000;
    display: inline-block;
    font-size: .7rem;
    height: 1.55rem;
    line-height: 1.55rem;
    margin-right: .375rem;
    overflow: hidden;
    padding: 0 .5rem;
    text-overflow: ellipsis;
    white-space: nowrap;
    width: auto;
}
/* 猜你喜欢 */
/* .search-items, .shop-index .search-area .search-items {
    background: #f0f0f0;
    padding-top: .75rem;
}
.search-items .search-index, .shop-index .search-area .search-items .search-index {
    background: #fff;
    border-top: 1px solid #e0e0e0;
    padding: .75rem;
}
.search-items .search-content-title, .shop-index .search-area .search-items .search-content-title {
    height: 1rem;
}
.search-items .search-content-title .left, .shop-index .search-area .search-items .search-content-title .left {
    float: left;
}
.search-items .search-group h3, .shop-index .search-area .search-items .search-group h3 {
    color: #b0b0b0;
    font-size: .7rem;
}
.search-items h3, .shop-index .search-area .search-items h3 {
    font-size: .6rem;
    margin-bottom: .5rem;
}
.search-items .search-content-title .right, .shop-index .search-area .search-items .search-content-title .right {
    float: right;
}
.search-items .search-content-title .ico-del, .shop-index .search-area .search-items .search-content-title .ico-del {
    color: #b0b0b0;
    display: inline-block;
    height: .65rem;
    width: .6rem;
} */
 .search-items .want-search, .shop-index .search-area .search-items .want-search {
    padding-top: .5rem;
}
.search-items .search-group h3, .shop-index .search-area .search-items .search-group h3 {
    color: #b0b0b0;
    font-size: .7rem;
}
.search-items h3, .shop-index .search-area .search-items h3 {
    font-size: .6rem;
    margin-bottom: .5rem;
}
.search-items .search-content, .shop-index .search-area .search-items .search-content {
    box-sizing: border-box;
    clear: both;
    padding-bottom: .45rem;
}
.search-items .want, .shop-index .search-area .search-items .want {
    max-height: 6.25rem;
    overflow: hidden;
}
.search-items li, .shop-index .search-area .search-items li {
    display: inline-block;
    margin-bottom: .375rem;
    margin-right: .375rem;
    max-width: 100%;
    overflow: hidden;
}
.search-items .search-content a, .shop-index .search-area .search-items .search-content a {
    background: #fff;
    border: 1px solid #e0e0e0;
    border-radius: .2rem;
    font-size: .7rem;
    width: auto;
}
.search-items a, .shop-index .search-area .search-items a {
    background: #f8f8f8;
    color: #000;
    float: left;
    font-size: .7rem;
    height: 1.55rem;
    line-height: 1.55rem;
    overflow: hidden;
    padding: 0 .5rem;
    text-overflow: ellipsis;
    white-space: nowrap;
}
/* footer */
 .yoho-footer {
    background-color: #fff;
    display: none;
    font-size: .6rem;
    position: relative;
    width: 100%;
    position: fixed;
    bottom: 0;
    left:0;
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
 /*模糊查询的样式*/
 .search-associate {
    background: #f8f8f8;
    position: absolute;
    width: 100%;
    z-index: 1;
}
.search-associate li {
    background: #fff;
    box-sizing: border-box;
    clear: both;
    height: 2.1rem;
    line-height: 2.1rem;
    margin-bottom: .125rem;
    padding: 0 .5rem;
    width: 100%;
}
.search-associate .keyword {
    float: left;
    font-size: .75rem;
}
</style>
