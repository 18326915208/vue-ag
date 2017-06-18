<template>
	<div class="hd">
		<div>NEXT家居</div>
		<div class="hd-l">门店</div>
		<div class="hd-r">
			地图
		</div>
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
		text-align:center;
		position:fixed;
		left:0;
		top:0;
		z-index:1000;
	}
	.hd-l{
		position:absolute;
		left:0.2rem;
		top:0rem;
		font:0.3rem/0.8rem "微软雅黑";
	}
	.hd-r{
		position:absolute;
		right:.3rem;
		top:0.05rem;
	}
</style>