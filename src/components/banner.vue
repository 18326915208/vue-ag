<template>
	<div class="ban">
		<mt-swipe :auto="4000">
		  <mt-swipe-item><img src="../assets/4.png" /></mt-swipe-item>
		  <mt-swipe-item><img src="../assets/2.png" /></mt-swipe-item>
		  <mt-swipe-item><img src="../assets/1.png" /></mt-swipe-item>
		</mt-swipe>
	</div>
</template>

<script>
	export default{
		data(){
			return{

			}
		}
	}
</script>
<style scoped>
	.ban{
		margin-top:0.8rem;
		height:3.5rem;
	}
	.ban img{
		width:100%;
		height:3.5rem;
	}
</style>