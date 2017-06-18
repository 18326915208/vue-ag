<template>
	<div class="ft">
		<span class="ft-l">定金：200:00</span>
		<span class="ft-r" @click="now">立即预定</span>
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
		margin-bottom: 1rem;
		overflow: hidden;
	}
	.ft span{
		display:block;
		font:0.3rem "微软雅黑";line-height:1rem;
	}
	.ft-l{
		float: left;
		color:#0076ff;
		margin-left:0.2rem;
	}
	.ft-r{
		float: right;
		color:#fff;
		text-align:center;
		width:2rem;
		height:100%;
		background:#484640;
	}
</style>