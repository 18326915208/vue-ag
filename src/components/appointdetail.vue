<template>
	<div>
		<v-detailindex></v-detailindex>
		<div class="detail">
			<img src="../assets/det.png" />
			<div class="time">
				<p>可选时间范围：周一、周二、周三、周四、周五；08:00-22:30</p>
				<p>预定时间不可以变更；预定订单不可以取消。</p>
			</div>
			<ul>
				<li>
					<span>选择时间</span>
					<i></i>
				</li>
				<li>
					<span>选择数量</span>
					<i></i>
				</li>
				<li>
					<span>选择门店</span>
					<i></i>
				</li>
				<li>
					<span>项目描述</span>
					<textarea></textarea>
				</li>
			</ul>
		</div>
		<v-appointfooter></v-appointfooter>
	</div>
</template>
<script>
	import DetailIndex from "./detailindex.vue";
	import AppointFooter from "./appointfooter.vue"
	export default{
		components:{
			"v-detailindex":DetailIndex,
			"v-appointfooter":AppointFooter
		}
	}
</script>
<style scoped>
	.detail{
		width:100%;
		margin-top:0.8rem;
	}
	img{
		display:block;
		width:100%;
	}
	.time{
		padding:0.2rem;
		font:0.25rem/0.5rem "微软雅黑";
		color:#808080;
	}
	ul{
		padding:0.2rem;
		font:0.3rem/0.8rem "微软雅黑";
		background:#fff;
	}
	ul li{
		list-style:none;

	}
	textarea{
		display: block;
		width: 100%;
	}
	ul li:first-child{
		border-bottom:1px solid #ddd;
	}
	ul li i{
		display: inline-block;
		width: 0.2rem;
		height: 0.2rem;
		margin-top: 0.35rem;
		background: url(../assets/jiantou.png)no-repeat;
		background-size: 0.2rem 0.2rem;
	}
</style>