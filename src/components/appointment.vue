<template>
	<div>
		<v-appointindex></v-appointindex>
		<ul class="appoint">
			<router-link to="/appointment/appointdetail">
				<li>
					<div class="li-l"><img src="../assets/appoint.png"/></div>
					<div class="li-r">
						<h2>家具维修</h2>
						<p>上门家具维修</p>
						<span class="price">定金：200.00</span>
						<span class="books">已预约1</span>
					</div>
				</li>
			</router-link>
		</ul>
		<v-footer></v-footer>
	</div>
</template>
<script>
	import AppointIndex from "./appointindex.vue";
	import Footer from "./footer.vue";
	export default{
		components:{
			"v-appointindex":AppointIndex,
			"v-footer":Footer
		}
	}
</script>
<style scoped>
	.appoint{
		width:100%;
		margin-top:0.8rem;
	}
	a{
		text-decoration:none;
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
		margin-right:0.2rem;
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
	p{
		width:3.8rem;
		overflow:hidden;
		text-overflow:ellipsis;
		white-space:nowrap;
		font:0.25rem/0.5rem "微软雅黑";
	}
	.price{
		position:absolute;
		bottom:0.3rem;
		color:#0076ff;
	}
	.books{
		position:absolute;
		bottom:0.3rem;
		right:0.15rem;
	}
</style>