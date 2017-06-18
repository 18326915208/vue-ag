<template>
	<div class="list">
		<router-view></router-view>
	<ul v-show="flag">
			<!--<li v-for="item in list" @click='go("index/goodsdetail")'>-->
			<li v-for="item in list">
				<router-link to="/index/goodsdetail">
					<div class="li-l"><img :src="item.goodsListImg" /></div>
					<div class="li-r">
						<p>{{item.goodsName}}</p>
						<span class="price">￥{{item.price}}</span>
					</div>
				</router-link>
			</li>
		</ul>
	</div>
</template>
<script>
	export default{
		data(){
			return{
				list:[],
				flag : true
			}
		},
		methods:{
			go(id){
				this.flag = false;
				this.$router.push(id);
				this.$emit("toggle",this.flag)
			}
		},
		mounted:function(){
			this.$http.jsonp("http://datainfo.duapp.com/shopdata/getGoods.php")
			.then(function(res){
				for(let i=0;i<res.body.length;i++){
					this.list.push(res.body[i]);
				}
			})
		}

	}
</script>
<style scoped>
	.list{
		margin-bottom:1rem;
		background:#fff;
	}
	a{
		text-decoration:none;
	}
	ul li{
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
		padding:0.2rem 0;
		color:#444;
		font:0.25rem "微软雅黑";
	}
	.price{
		color:#0076ff;
		position:absolute;
		bottom:0.3rem;
	}
</style>