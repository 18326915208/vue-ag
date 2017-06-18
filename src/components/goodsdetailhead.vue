<template>
	<div class="hd">
		<router-link to="/index"></router-link>
		<div class="hd-l">
			<span :click="tab" v-for="(val,ind) in arr" :class="{'border':ind==0}">{{val}}</span>
		</div>
	</div>
</template>
<script>
	export default{
		data(){
			return{
				arr:['商品','详情','评价']
			}
		},
		methods:{
			tab(){

			}
		}
	}
</script>
<style scoped>
	.hd{
		width:100%;
		height:0.8rem;
		background:#484640;
		color:#bfbebc;
		position:fixed;
		left:0;
		top:0;
		z-index:1000;
		text-align:center;
	}
	.border{
		border-bottom:0.04rem solid #fff;
		color:#fff;
	}
	.hd-l{
		font:0.35rem/0.8rem "微软雅/黑";
	}
	.hd-l span{
		margin: 0 0.1rem;
		padding:0.15rem;
	}
	a{
		position:absolute;
		left:0.2rem;
		top:0.25rem;
		display:inline-block;
		width:0.45rem;
		height:0.4rem;
		background:url(../assets/back.png)no-repeat;
		background-size:0.4rem 0.4rem;
	}
</style>