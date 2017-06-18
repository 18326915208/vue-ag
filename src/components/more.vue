<template>
	<div>
		<v-morehead></v-morehead>
		<ul class="more">
			<router-link to="/more/moremy"><li>我的</li></router-link>
			<router-link to="/more/moremy"><li>订单</li></router-link>
			<router-link to="/more/moremy"><li>客服</li></router-link>
			<router-link to="/more/moremy"><li>论坛</li></router-link>
		</ul>
		<!--<v-footer></v-footer>-->
		
	</div>
</template>
<script>
	//  import "../css/css.css";
	import MoreHead from "./morehead.vue";
	import Footer from "./footer.vue";
	export default{
		data(){
			return{
				onMy:false
			}
		},
		components:{
			"v-morehead":MoreHead,
			"v-footer":Footer
		}
	}
	
</script>
<style scoped>
	.more{
		width:100%;
		margin-top:0.8rem;
		background:#fff;
	}
	.more li{
		font:0.3rem/0.7rem "微软雅黑";
		list-style:none;
		color:#565656;
		padding-left: 0.2rem;
		border-bottom:0.01rem solid #ddd;
	}
	a{
		text-decoration:none;
		color:#565656;
	}
	
</style>