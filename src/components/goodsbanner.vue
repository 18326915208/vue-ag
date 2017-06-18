<template>
	<div class="ban">
		<mt-swipe :auto="4000">
		  <mt-swipe-item v-for="item in list"><img :src="item" /></mt-swipe-item>
		</mt-swipe>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				list:"",
				arr:["./src/assets/j1.png","./src/assets/j2.png"]
			}
		},
		mounted:function(){
			this.$http.jsonp("http://datainfo.duapp.com/shopdata/getBanner.php")
			.then(function(res){
				for(let i=0;i<res.body.length;i++){
					this.list=JSON.parse(res.body[0].goodsBenUrl);
				}
			})
		}
	}
</script>
<style scoped>
	.ban{
		margin-top:0.8rem;
		height:5.5rem;
	}
	.ban img{
		width:100%;
		height:100%;
	}
</style>