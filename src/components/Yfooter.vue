<template>
    <div class="footer-tab">
    <div class="tab-item current" :class="{'active':page===index}" v-for="(p,index) in arrs" :key="index" @click="toggle(index)">
        <p class="iconfont" :class="p.iconImg"></p>
        <p class="tab-name" v-text="p.name"></p>
    </div>
</div>
</template>

<script>
export default {
    data(){
        return {
            page:0,
            arrs:[
                {
                    name:'首页',
                    iconImg:'icon-yemian-copy',
                },
                {
                    name:'分类',
                    iconImg:'icon-caidanlan',
                },
                {
                    name:'逛',
                    iconImg:'icon-huojian',
                },
                {
                    name:'购物车',
                    iconImg:'icon-buy-car',
                },
                {
                    name:'我的',
                    iconImg:'icon-wodedangxuan',
                }
            ]
        }
    },
    methods:{
        toggle(index){
            this.page=index
            switch(index){
                case 0:
                this.$router.push('/Yboys');
                break;
                case 1:
                this.$router.push('/YfenLei');
                break;
                case 2:
                this.$router.push('/Yguan')
                break;
                case 3:
                this.$router.push('/YbuyCar');
                break;
                case 4:
                this.$router.push('/Yme')
            };
        }
    } 
}
</script>

<style sscoped>
a, abbr, acronym, address, applet, article, aside, audio, b, big, blockquote, body, canvas, caption, center, cite, code, dd, del, details, dfn, div, dl, dt, em, embed, fieldset, figcaption, figure, footer, form, h1, h2, h3, h4, h5, h6, header, hgroup, html, i, iframe, img, ins, kbd, label, legend, li, mark, menu, nav, object, ol, output, p, pre, q, ruby, s, samp, section, small, span, strike, strong, sub, summary, sup, table, tbody, td, tfoot, th, thead, time, tr, tt, u, ul, var, video {
    border: 0;
    font: inherit;
    font-size: 100%;
    margin: 0;
    padding: 0;
    vertical-align: baseline;
}
.active{
    /* color:#f60; */
}
.footer-tab {
    border-top: 1px solid #b0b0b0;
    bottom: 0;
    left: 0;
    box-sizing: border-box;
    padding-top:3px;
    height:50px;
    position:fixed;
    width: 100%;
    z-index:2;
    background:#ccc;
}
.footer-tab .tab-item{
    display: block;
    float:left;
    width:20%;
    height:3rem;
    line-height:25px;
    padding-top:2px;
    overflow:hidden;
}
.footer-tab .tab-item .iconfont{
    text-align: center;
    font-size:1.2rem;
}
.footer-tab .tab-item .tab-name{
    text-align: center;
    font-size: 12PX;
    line-height: 1;
    margin-top: .25rem;
    transform: scale(.9)
}
</style>
