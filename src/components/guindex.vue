<template>
	<div class="hd">
		<router-link to="/shophome"></router-link>
		<div class="hd-l">顾家工艺</div>
	</div>
</template>
<script>
	export default{
		
	}
</script>
<style scoped>
	.hd{
		width:100%;
		height:0.8rem;
		background:#484640;
		color:#fff;
		font:0.25rem/0.8rem "微软雅黑";
		position:fixed;
		left:0;
		top:0;
		z-index:1000;
	}
	.hd-l{
		position:absolute;
		left:0.8rem;
		top:0rem;
		font:0.3rem/0.8rem "微软雅/黑";
	}
	a{
		display:inline-block;
		width:0.45rem;
		height:0.45rem;
		margin:0.1rem 0 0 0.2rem;
		text-align:center;
		vertical-align:middle;
		background:url(../assets/back.png)no-repeat;
		background-size:0.4rem 0.4rem;
	}
</style>