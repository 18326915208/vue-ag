<template>
	<div class="hd">
		<router-link to="/index"></router-link>
		<i class="i1"></i>
		<input type="text" v-model="value" placeholder="搜索商品名称"/>
		<i class="i2"></i>
		<ul>
			<li v-for="item in arr">{{item}}</li>
		</ul>
	</div>
</template>
<script>
	var time=null;
	export default{
		data(){
			return{
				value:"",
				arr:[]
			}
		},
		watch:{
			value(newval,oldval){
				console.log(newval+":"+oldval);
				clearTimeout(time);
				time=setTimeout(()=>{
					const url="https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su?wd="+newval;
					this.$http.jsonp(url,{
						jsonp:"cb"
					}).then(res=>{
						console.log(res);
						this.arr=res.body.s
					})
				},200)
			}
		}
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
	.inp{

	}
	input{
		width:4rem;
		height:0.5rem;
		border-radius:0.1rem;
		font:0.28rem/0.5rem "";
		padding-left:0.5rem;
		border:none;
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
	ul{
		padding:0.2rem;

	}
	ul li{
		font:0.3rem/0.6rem "";
		color:#333;
		list-style:none;
	}
	.i1{
		display:inline-block;
		width:0.3rem;
		height:0.3rem;
		background:url(../assets/search.png)no-repeat;
		background-size:0.3rem 0.3rem;
		position:absolute;
		left:0.8rem;
		top:0.25rem;
	}
	.i2{
		display:inline-block;
		width:0.5rem;
		height:0.5rem;
		background:url(../assets/sea.png)no-repeat;
		background-size:0.4rem 0.4rem;
		position:absolute;
		right:0.3rem;
		top:0.25rem;
	}
</style>