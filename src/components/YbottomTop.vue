<template>
    <div>
        <div class="footerDemo">
           <p class="op-row">
               <a  rel="nofollow">登录</a>
               <span class="sep-line">|</span>
               <a rel="nofollow">注册</a>
        <span class="back-to-top">
            回到顶部
            <i class="iconfont icon-huidingbu"></i>
        </span>
        </p>
        <address class="copyright">
        CopyRight©2007-2018 南京新与力文化传播有限公司
    </address>
        </div>
    </div>    
</template>

<script>
export default {

}
</script>

<style scoped>
.footerDemo {
    background-color: #fff;
    font-size: .6rem;
    width: 100%;
}
.footerDemo .op-row {
    height: 3rem;
    line-height: 3rem;
    padding: 0 .75rem;
    width: 100%;
}
.footerDemo .op-row a, .footerDemo .op-row span {
    display: inline-block;
    overflow: hidden;
}
.footerDemo .op-row .sep-line {
    color: #e0e0e0;
    margin: 0 .75rem;
}
.footerDemo .op-row .back-to-top {
    position: absolute;
    right: 1rem;
}
.footerDemo .copyright {
    background-color: #eee;
    color: #666;
    font-size: .6rem;
    height: 60PX;
    line-height: 60PX;
    text-align: center;
}
</style>
