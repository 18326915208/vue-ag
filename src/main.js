import Vue from 'vue'
import App from './App.vue'

import VueResource from "vue-resource";
import VueRouter from "vue-router";
import 'mint-ui/lib/style.css';
import MintUI from 'mint-ui';
import Vuex from "vuex";
//有插件 必须通过vue.use注册才能使用
Vue.use(VueResource);
Vue.use(VueRouter);
Vue.use(MintUI);
Vue.use(Vuex);
//1、定义模板
import Index from "./components/index.vue";
import Cart from "./components/cart.vue";
import ShopHome from "./components/shophome.vue";
import GuHome from "./components/guhome.vue";
import Appointment from "./components/appointment.vue";
import AppointDetail from "./components/appointdetail.vue";
import More from "./components/more.vue";
import Search from "./components/search.vue";
import GoodsDetail from "./components/goodsdetail.vue";
import LookComment from "./components/lookcomment.vue";
import GoodsImg from "./components/goodsimg.vue";
import ContentDetail from "./components/contentdetail.vue";
import MoreMy from "./components/moremy.vue";
//2、配置路由
var routes=[
	{path:"/index",component:Index},
	{path:"/index/goodsdetail",component:GoodsDetail},
	{path:"/cart",component:Cart},
	{path:"/shophome",component:ShopHome},
	{path:"/shophome/guhome",component:GuHome},
	{path:"/appointment",component:Appointment},
	{path:"/appointment/appointdetail",component:AppointDetail},
	{path:"/more",component:More},
	{path:"/more/moremy",component:MoreMy},
	{path:"/search",component:Search},
	{
		path:"/goodsdetail",
		component:GoodsDetail,
		// children:[
		// 	{
		// 		path:"lookcomment/:id",
		// 		component:LookComment
		// 	}
		// ]
	},
	{path:"/index/goodsdetail/lookcomment",component:LookComment},
	{path:"/index/goodsdetail/goodsimg",component:GoodsImg},
	{path:"/contentdetail",component:ContentDetail},
	// {path:"/moremy",component:MoreMy},
	{path:"*",redirect:"/index"}
]
//3、获取路由实例
var router=new VueRouter({
	routes
})
//4、挂载路由
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
