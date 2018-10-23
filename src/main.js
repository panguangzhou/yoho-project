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
},{
  path:'/YfenLei',
  component:yfenLei,
  //路由嵌套
  // children: [
  //   {
  //     path: 'Ysearch',
  //     name: 'Ysearch',
  //     component: ysearch
  //   }
  // ]
},{
  path:'/Yguan',
  component:yguan
},
{
  path:'/YbuyCar',
  component:ybuyCar
},
{
  path:'/Yme',
  component:yme
},
{
  path:'/Ysearch',
  component:ysearch
}
]
const router = new VueRouter({
	routes // short for `routes: routes`
})
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
