<template>
    <div class="footer-tab">
    <a class="tab-item current " v-for="(p,index) in arrs" :key="index" @click="toggle(index)" :class="{'active':page ===index}">
        <p class="iconfont" :class="p.iconImg"></p>
        <p class="tab-name" v-text="p.name"></p>
    </a>
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
                    bool:true
                },
                {
                    name:'分类',
                    iconImg:'icon-caidanlan',
                    bool:false
                },
                {
                    name:'逛',
                    iconImg:'icon-huojian',
                    bool:false
                },
                {
                    name:'购物车',
                    iconImg:'icon-buy-car',
                    bool:false
                },
                {
                    name:'我的',
                    iconImg:'icon-wodedangxuan',
                    bool:false
                }
            ]
        }
    },
    methods:{
        toggle(index){
            this.page =index;
           //切换页面
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
            }
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
.footer-tab {
    background: #fff;
    border-top: 1px solid #b0b0b0;
    bottom: 0;
    left: 0;
    box-sizing: border-box;
    padding-top:3px;
    height:50px;
    position:fixed;
    width: 100%;
    z-index:500;
}
.footer-tab .tab-item{
    display: block;
    float:left;
    width:20%;
    height:25px;
    line-height:25px;
    padding-top:2px;
    color:#888;
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
.active{
    color:#000;
}
</style>
