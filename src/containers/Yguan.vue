<template>
    <div>
        <advertising></advertising>
        <!-- 顶部tab标签 -->
        <div class="nav-scroll">
            <ul id="guang-nav" class="guang-nav">
                    <li class="guang-nav-item" data-type="p.type" v-for="(p,index) in arrs" :key="index" @click="toggle(index)">
                        <span v-text="p.name"></span>
                    </li>
            </ul>
        </div>
        <yzuixin v-if="page===0"></yzuixin>
        <ydapei v-if="page===1"></ydapei>
        <ytoutiao v-if="page===2"></ytoutiao>
        <yshangxin v-if="page===3"></yshangxin>
        <yshipin v-if="page===4"></yshipin>
        <yzixun v-if="page===5"></yzixun>
        <!-- 页脚导航 -->
        <yfooter></yfooter>
    </div>
</template>

<script>
import advertising from '../components/Yadvertising.vue'
import yfooter from '../components/Yfooter.vue'
import yzuixin from '../cguan/Yzuixin.vue'
import ytoutiao from '../cguan/Ytoutiao.vue'
import yshangxin from '../cguan/Yshangxin.vue'
import yshipin from '../cguan/Yshipin.vue'
import yzixun from '../cguan/Yzixun.vue'
import ydapei from '../cguan/Ydapei.vue'
export default {
    components:{
        advertising,
        yfooter,
        yzuixin,
        ytoutiao,
        yshangxin,
        yshipin,
        yzixun,
        ydapei
    },
    data(){
        return {
            page:0,
            arrs:[
                {
                    name:'最新',
                    type:0
                    },
                {
                    name:'搭配',
                    type:2
                    },
                {
                    name:'头条',
                    type:1001
                    },
                {
                    name:'上新',
                    type:4,
                    },
                {
                    name:'视频',
                    type:22
                    },
                    {
                        name:'资讯',
                        type:'-1'
                    }
            ]
        }
    },
    methods:{
        toggle(index){
            this.page =index;
        }
    }
}
</script>

<style>
/* 样式跟随 */
.focus{
    color:#000;
}
.nav-scroll {
    height: 2rem;
    overflow: hidden;
    width:100%;
}
.guang-nav {
    background-color: #fff;
    font-size: 0;
    height: 2rem;
    line-height: 0;
    overflow-x: scroll;
    overflow-y: hidden;
    padding: 0 .575rem;
    white-space: nowrap;
}
 .guang-nav .guang-nav-item {
    color: #ccc;
    display: inline-block;
    font-size: 14PX;
    padding: 0 .575rem;
    text-align: center;
    width:4.75rem;
}
.guang-nav .guang-nav-item .focus span {
    border-bottom: .1rem solid #444;
}
 .guang-nav .guang-nav-item span {
    border-bottom: .1rem solid #fff;
    display: block;
    line-height: 1.9rem;
    padding: 0 .35rem;
}
</style>
