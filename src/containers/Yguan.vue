<template>
    <div>
        <advertising></advertising>
        <!-- 顶部tab标签 -->
        <div class="nav-scroll">
            <ul id="guang-nav" class="guang-nav">
                    <li class="guang-nav-item" data-type="p.type" v-for="(p,index) in arrs" :key="index" @click="toggle(index)">
                        <span v-text="p.name" :class="{'focus':page==index}"></span>
                    </li>
            </ul>
        </div>
        <router-view/>
        <!-- 页脚导航 -->
        <yfooter></yfooter>
    </div>
</template>

<script>
import advertising from '../components/Yadvertising.vue'
import yfooter from '../components/Yfooter.vue'
export default {
    components:{
        advertising,
        yfooter,
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
            switch(index){
                case 0:
                this.page=0;
                this.$router.push('/Yguan/yzuixin');
                break;
                case 1:
                this.page=1;
                this.$router.push('/Yguan/ydapei');
                break;
                case 2:
                this.page=2;
                this.$router.push('/Yguan/ytoutiao')
                break;
                case 3:
                this.$router.push('/Yguan/yshangxin')
                break;
                case 4:
                this.$router.push('/Yguan/yshipin');
                break;
                case 5:
                this.$router.push('/Yguan/yzixun');
                break;
            }
        }
    },
    mounted(){
        // this.toggle();
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
