<template>
	<div>
		<v-cartindex></v-cartindex>
		<div class="cart">
			<ul>
				<li>
					<input class="inp1" type="checkbox" value="" />
					<div class="hotimg">
						<img src="../assets/hot.png"/>
						<p class="p">榆木儿童书桌简约现代中式书房家具办公电脑桌写字看书你</p>
						<div class="kind">
							<span class="k-color">颜色分类：书桌+椅子</span>
							<span>库存：120件</span>
						</div>
						<div class="jiage">
							<span class="price">￥{{allnum}}</span>
							<div class="but_tab">
								<button @click="min">-</button>
									{{count}}
								<button @click="dec">+</button>
							</div>
							
						</div>
					</div>
				</li>
			</ul>
			<div class="allselect">
				<div class="alls">
					<input class="inp2" type="checkbox" value="" />
					<span class="allword">全选</span>
				</div>
				<div class="allprice">
					<p class="allprice-p">总价：<span class="numprice">￥{{allnum}}</span></p>
					<p class="no">不含运费</p>
				</div>
				<div class="jieuan">
					<router-link to="">结算</router-link>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import CartIndex from "./cartindex.vue";
	export default{
		data(){
			return{
				num:2445.00,
				allnum:2445.00,
				count:1
			}
		},
		methods:{
			min(){
				this.count--
				this.allnum=this.num*this.count
			},
			dec(){
				this.count++,
				this.allnum=this.num*this.count
			}
		},
		components:{
			"v-cartindex":CartIndex,
		}

	}
</script>
<style scoped>
	.cart{
		margin-top:0.8rem;
		width:100%;
	}
	ul{
		background:#fff;
		padding:0.3rem .2rem;
	}
	ul li{
		list-style:none;
		overflow:hidden;
	}
	input{
		width:0.33rem;
		height:.33rem;
		border-radius:50%;
	}
	.inp1{
		float:left;
		margin-top:.5rem;
		margin-right:.3rem;
	}
	.hotimg{
		font:0.3rem "微软雅黑";
		color:#444;
	}
	.p{
		height:0.8rem;
		width:3.3rem;
		overflow:hidden;
		text-overflow:ellipsis;
	}
	.kind{
		margin:.1rem 0;
		font:0.2rem "微软雅黑";
		color:#8f8f8f;
	}
	.k-color{
		width:1.9rem;
		display:inline-block;
		overflow:hidden;
		text-overflow:ellipsis;
		white-space:nowrap;
	}
	.jiage{
		position: relative;
		padding:0.1rem 0;
	}
	.price{
		color:#0076ff;
		margin-right:0.4rem;
	}
	img{
		float:left;
		margin-right:.15rem;
		width:1.5rem;
		height: 1.5rem;
	}
	.but_tab{
		position: absolute;
		top:0.1rem;
		right:0.2rem;
	}
	button{
		width:.4rem;
		height:.4rem;
		border-radius:50%;
		font:.3rem "微软雅黑";
		line-height: 0;
		border:none;
		display:inline-block;
		vertical-align:middle;
		text-align:center;
	}
	.allselect{
		height:0.8rem;
		width:100%;
		background:#fff;
		position:fixed;
		bottom:1rem;
		left:0;
		overflow:hidden;
	}
	.inp2{
		position:absolute;
		left:0.3rem;
		bottom:.22rem;
	}
	.allword{
		font:0.3rem/0.8rem "微软雅黑";
		position:absolute;
		left:.8rem;
		bottom:0rem;
	}
	.alls{
		float:left;
	}
	.allprice{
		float:right;
		margin-right:1.8rem;
		overflow: hidden;
		font:0.3rem "微软雅黑";
	}
	.numprice{
		color:#0076ff;
	}
	.no{
		text-align:right;
		margin-top: 0.05rem;
		color:#666;
		font-size:0.2rem;
	}
	.jieuan{
		position:absolute;
		right:0;
		bottom:0;
		width:1.5rem;
		height:0.8rem;
		background:#333;
		color:#fff;
		font:0.3rem/0.8rem "微软雅黑";
		text-align:center;
	}
	.jieuan a{
		color:#fff;
		text-decoration: none;
	}
</style>