import Vue from 'vue'
import App from './App.vue'
Vue.config.productionTip = false
import VueRouter from 'vue-router'
Vue.use(VueRouter)
//引进组件
import home from './components/Ytopnav.vue'
import ylogin from './containers/Ylogin.vue';
import yreg from './containers/Yreg.vue';
import yboys from './containers/Yboys.vue'
import yfenLei from './containers/YfenLei.vue'
import yguan from './containers/Yguan.vue'
import ybuyCar from './containers/YbuyCar.vue'
import yme from './containers/Yme.vue'
import ysearch from './components/Ysearch.vue'
import yxianqingye from './containers/Yxianqingye.vue'
import yjiesuan from './containers/Yjiesuan.vue'
import ygoodslist from './containers/Ygoodslist.vue'
import ywodedingdan from './containers/Ywodedingdan.vue'
//Ygaun的二级嵌套
import yzuixin from './cguan/Yzuixin.vue'
import ydapei from './cguan/Ydapei.vue'
import ytoutiao from './cguan/Ytoutiao.vue'
import yshangxin from './cguan/Yshangxin.vue'
import yshipin from './cguan/Yshipin.vue'
import yzixun from './cguan/Yzixun.vue'
const routes = [
  {
    path:'/',
    component:home
  },
  {
  path: '/Ylogin',
  component: ylogin
},
{
  path:'/Yreg',
  component:yreg
},
{
  path:'/Yboys',
  component:yboys
},
//分类的二级路由
{
  path:'/YfenLei',
  component:yfenLei,
},
//Yguan二级嵌套路由
{
  path:'/Yguan',
  component:yguan,
  children:[
    {
      path:'/Yguan',
      component:yzuixin
    },
    {
      path:'/Yguan/yzuixin',
      name:'yzuixin',
      component:yzuixin
    },
    {
      path:"/Yguan/ydapei",
      name:'ydapei',
      component:ydapei
    },
    {
      path:'/Yguan/ytoutiao',
      name:'ytoutiao',
      component:ytoutiao
    },
    {
      path:"/Yguan/yshangxin",
      name:'yshangxin',
      component:yshangxin
    },
    {
      path:'/Yguan/yshipin',
      name:'yshipin',
      component:yshipin
    },
    {
      path:'/Yguan/yzixun',
      name:'yzixun',
      component:yzixun
    },
  ]
},
{
  path:'/YbuyCar',
  component:ybuyCar
},
{
  path:'/Ysearch',
  component:ysearch
},
{
  path:'/Yme',
  component:yme
},
{
  path:'/Yxianqingye',
  component:yxianqingye
},{
  path:'/Yjiesuan',
  component:yjiesuan
},
{
  path:'/Ygoodslist',
  component:ygoodslist 
},{
  path:'/Ywodedingdan',
  component:ywodedingdan
}
]
const router = new VueRouter({
	routes // short for `routes: routes`
})
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
