<template>
	<div>
		<v-shopindex></v-shopindex>
		<div class="shophome">
			<div class="area">
				<div>省</div>
				<div>市</div>
				<div>区/县</div>
			</div>
			<ul>
				<router-link to="/shophome/guhome">
					<li>
						<div class="li-l"><img src="../assets/home1.png"/></div>
						<div class="li-r">
							<h2>顾家工艺</h2>
							<p>地址：北京市东城区东直门大街1290好</p>
							<span class="price">电话：62466897</span>
						</div>
					</li>
				</router-link>
				<li>
					<div class="li-l"><img src="../assets/home2.png"/></div>
					<div class="li-r">
						<h2>顾家工艺</h2>
						<p>地址：天津市和平区南开大学东大门对面</p>
						<span class="price">电话：45378643</span>
					</div>
				</li>
			</ul>
		</div>
		<!--<v-footer></v-footer>-->
	</div>
</template>
<script>
	import ShopIndex from "./shopindex.vue";
	import Footer from "./footer.vue";
	export default{
		components:{
			"v-shopindex":ShopIndex,
			"v-footer":Footer
		}
	}

</script>
<style scoped>
	.shophome{
		width:100%;
		margin-top:0.8rem;
	}
	a{
		text-decoration:none;
	}
	.area{
		width:100%;
		height:0.6rem;
		padding:0.2rem 0;
		background:#fff;
		border-bottom:1px solid #555;
		font:0.31rem/0.6rem "微软雅黑";
		text-align:center;
	}
	.area div{
		float:left;
		border-right:1px solid #555;
		width:33%;
		height:100%;
	}
	.area div:last-child{
		border-right:none;
	}
	ul li{
		background:#fff;
		list-style:none;
		padding:0.2rem 0.15rem;
		position:relative;
		overflow:hidden;

	}
	.li-l{
		float:left;
		width:2rem;
		height:2rem;
		margin-right:0.1rem;
	}
	.li-l img{
		width:2rem;
		height:2rem;
	}
	.li-r{
		padding:0.15rem 0 0.2rem 0;
		color:#444;
		font:0.25rem "微软雅黑";
	}
	h3{

	}
	p{
		width:3.8rem;
		overflow:hidden;
		text-overflow:ellipsis;
		white-space:nowrap;
	}
	.price{
		position:absolute;
		bottom:0.3rem;
	}
</style>