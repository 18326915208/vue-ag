<template>
	<div class="hd">
		<router-link to="/index"><p class="a_p"></p></router-link>
		<div class="hd-l">客厅</div>
		<div class="hd-r">
			<router-link to="/cart"><img src="../assets/cart1.png" /></router-link>
		</div>
		<div class="hd-r2">
			<router-link to="/search"><img src="../assets/search1.png" /></router-link>
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
		position:fixed;
		left:0;
		top:0;
		z-index:1000;
	}
	.hd-l{
		position:absolute;
		left:.8rem;
		top:0rem;
		font:0.35rem/0.8rem "微软雅黑";
	}
	.hd-r{
		position:absolute;
		right:.8rem;
		top:0.05rem;
	}
	.hd-r2{
		position:absolute;
		right:.3rem;
		top:0.05rem;
	}
	img{
		width:0.3rem;
		height:0.3rem;
	}
    .a_p{
		position:absolute;
		left:0.2rem;
		top:0.2rem;
		display:inline-block;
		width:0.45rem;
		height:0.4rem;
		background:url(../assets/back.png)no-repeat;
		background-size:0.4rem 0.4rem;
        margin:0;
	}
</style>