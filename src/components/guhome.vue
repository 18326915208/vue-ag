<template>
	<div>
		<v-guindex></v-guindex>
		<div class="gu">
			<ul class="ul1">
				<li>
					<div class="li-l"><img src="../assets/home1.png"/></div>
					<div class="li-r">
						<h2>顾家工艺</h2>
					</div>
				</li>
			</ul>
			<div class="area">
				<p><i class="i1"></i>地址：北京市东城区东直门大街1290号</p>
				<p><i class="i2"></i>电话：<span>432374746</span></p>
				<p><i class="i3"></i>邮箱：<span>1234@qq.com</span></p>
				<p><i class="i4"></i>网址：<span>http://www.baidu.com</span></p>
			</div>
			<div class="time">
				<p><i class="i5"></i>营业时间</p>
			</div>
			<div class="time week">
				<p>周一、周二、周三、周四、周五、周六、周日8:30-22:00</p>
			</div>
		</div>
	</div>
</template>
<script>
	import GuIndex from "./guindex.vue"
	export default{
		components:{
			"v-guindex":GuIndex
		}
	}

</script>


<style scoped>
	.gu{
		width:100%;
		margin-top:1rem;
		color:#444;
	}

	.ul1 li{
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
	.area{
		background:#fff;
		margin:0.2rem 0;
		padding:0.2rem 0 0.2rem 0.8rem;
	}
	span{
		color:#0076ff;
	}
	p{	
		font:0.3rem/0.6rem "微软雅黑";
		position:relative;
	}
	i{
		width:0.6rem;
		height:0.6rem;
		display:inline-block;
		position:absolute;
		left:-0.6rem;
		top:0rem;
		background:#ddd;
		
	}
	.i1{
		background:url(../assets/a1.png) no-repeat 0.1rem 0.15rem;
		background-size:0.3rem 0.3rem;
	}
	.i2{
		background:url(../assets/a2.png) no-repeat 0.1rem 0.15rem;background-size:0.3rem 0.3rem;
	}
	.i3{
		background:url(../assets/a3.png) no-repeat 0.1rem 0.15rem;background-size:0.3rem 0.3rem;
	}
	.i4{
		background:url(../assets/a4.png) no-repeat 0.1rem 0.15rem;background-size:0.3rem 0.3rem;
	}
	.time{
		padding:0.2rem 0 0.2rem 0.8rem;
		background:#fff;
		font-size:0.35rem;
		border-bottom:1px solid #666;
	}
	.i5{
		background:url(../assets/time.png) no-repeat 0.1rem 0.08rem;background-size:0.4rem 0.4rem;
	}
	.time.week{
		border-bottom:none;
	}
</style>