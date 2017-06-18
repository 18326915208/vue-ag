<template>
	<div class="ft">
		<ul class="ft-l">
			<li><router-link to="/cart"><i class="i1"></i><p>购物车</p></router-link></li>
			<li><i class="i2"></i><p>客服</p></li>
			<li><i class="i3"></i><p>收藏</p></li>
		</ul>
		<div class="ft-r" @click="now">加入购物车</div>
	</div>
</template>
<script>
	export default{
		data(){
			return {

			}
		},
		methods:{
			now(){
				alert("你还没有登录，请登录！")
			}
		}
	}

</script>
<style scoped>
	.ft{
		height:1rem;
		width:100%;
		background:#fff;
		left:0;
		bottom:1rem;
		margin-bottom: 1rem;
		font:0.3rem "微软雅黑";
		overflow: hidden;
	}
	.ft-l li a{
		color:#000;
		text-decoration: none;
	}
	.ft-l li{
		float:left;
		list-style:none;
		font-size:0.25rem;
		margin:0 0.2rem;
		text-align:center;
	}
	.ft-l li i{
		display:block;
		width:0.7rem;
		height:0.5rem;
		
	}
	.i1{
		background:url(../assets/gwc.png)no-repeat 0.1rem center;
        background-size:0.6rem 0.4rem;
	}
	.i2{
		background:url(../assets/kf.png)no-repeat 0.15rem center;
        background-size:0.4rem 0.4rem;
	}
	.i3{
		background:url(../assets/sc.png)no-repeat 0.15rem center;
        background-size:0.4rem 0.4rem;
	}
	.ft-r{
		float: right;
		right:0;
		top:0;
		line-height:1rem;
		color:#fff;
		text-align:center;
		width:2rem;
		height:100%;
		background:#484640;
	}
</style>