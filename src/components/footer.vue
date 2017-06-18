<template>
	<div>
	    <mt-tabbar v-model="selected" fixed>
	      <mt-tab-item id='index' isRouter>
	        <img src="../assets/s1.png" alt="" slot="icon-normal"> 
	        <img src="../assets/s2.png" alt="" slot="icon-active"> 
	       	首页
	      </mt-tab-item>
	      <mt-tab-item id='cart' isRouter>
	        <img src="../assets/c1.png" alt="" slot="icon-normal"> 
	        <img src="../assets/c2.png" alt="" slot="icon-active"> 
	       	购物车
	      </mt-tab-item>
	      <mt-tab-item id='shophome' isRouter>
	        <img src="../assets/my1.png" alt="" slot="icon-normal"> 
	        <img src="../assets/my2.png" alt="" slot="icon-active"> 
			门店
	      </mt-tab-item>
	      <mt-tab-item id='appointment' isRouter>
	        <img src="../assets/b1.png" alt="" slot="icon-normal"> 
	        <img src="../assets/b2.png" alt="" slot="icon-active"> 
			预约
	      </mt-tab-item>
	       <mt-tab-item id='more' isRouter>
	        <img src="../assets/m1.png" alt="" slot="icon-normal"> 
	        <img src="../assets/m1.png" alt="" slot="icon-active"> 
			更多
	      </mt-tab-item>
	    </mt-tabbar>
  </div>
	<!--<div class="ft">
		<ul>
			<li @click="action">
				<router-link to="/index">
					<i class="i1"></i>
					<span>首页</span>
				</router-link>
			</li>
			<li class="" @click="action">
				<router-link to="/cart">
					<i class="i2"></i>
					<span>购物车</span>
				</router-link>
			</li>
			<li @click="action">
				<router-link to="/shophome">
					<i class="i3"></i>
					<span>门店</span>
				</router-link>
			</li>
			<li @click="action">
				<router-link to="/appointment">
					<i class="i4"></i>
					<span>预约</span>
				</router-link>
			</li>
			<li @click="action">
				<router-link to="/more">
					<i class="i5"></i>
					<span>更多</span>
				</router-link>
			</li>
		</ul>
	</div>-->
</template>
<script>
	// import mTabbar from './tabbar.vue'
	import mtTabItem from './tabbar-item.vue'
	export default {
		components: {
		  	// mTabbar,
		 	mtTabItem
		},
		data() {
		  return{
		    selected:"index"
		    }
		}
	}

</script>
<style>
	.mint-tabbar{
			height: 1rem;
	}
	.is-active{
		color:#067aff;
	}
	.mint-tab-item{
		text-align: center;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}
	.mint-tab-item-icon{
		width:0.5rem;
	}
	.mint-tab-item-icon img{
		width:0.5rem;
		height:0.5rem;
	}
	.mint-tab-item-label{
		margin-top:0.1rem;
		font-size:0.23rem;  
		font-family: "微软雅黑";
	}
	/*.ft{
		height:1rem;
		width:100%;
		background:#f8f8f8;
		position:fixed;
		left:0;
		bottom:0;
	}
	ul{
		width:100%;
		height:100%;
	}
	li{
		list-style:none;
		width:20%;
		height:100%;
		float:left;
		text-align:center;
		position:relative;
	}
	a{
		color:#555;
		font-family: "微软雅黑";
	}
	i{
		width:.5rem;
		height:.5rem;
		display:block;
		position:absolute;
		top:0.1rem;
		left:.4rem;
	}
	.i1{
		background: url(../assets/s1.png);
		background-size:.5rem .5rem;
	}
	.i2{
		background: url(../assets/c1.png);
		background-size:.5rem .5rem;
	}
	.i3{
		background: url(../assets/my1.png);
		background-size:.5rem .5rem;
	}
	.i4{
		background: url(../assets/b1.png);
		background-size:.5rem .5rem;
	}
	.i5{
		background: url(../assets/m1.png);
		background-size:.5rem .5rem;
	}
	.action span{
		color:#0076ff;
	}
	.action .i1{
		background: url(../assets/s2.png);
		background-size:.5rem .5rem;
	}
	.action .i2{
		background: url(../assets/c2.png);
		background-size:.5rem .5rem;
	}
	.action .i3{
		background: url(../assets/my2.png);
		background-size:.5rem .5rem;
	}
	.action .i4{
		background: url(../assets/b2.png);
		background-size:.5rem .5rem;
	}
	.action .i5{
		background: url(../assets/m1.png);
		background-size:.5rem .5rem;
	}
	span{
		display:block;
		font-size:0.25rem;
		position:absolute;
		margin-left:.35rem;
		bottom:0;
	}*/

</style>