<template>
	<div class="con">
		<ul>
		  <li v-for="item in list" @click="to">
			<router-link to="/contentdetail"><img v-lazy="item"></router-link>
		  </li>
		</ul>
		
	</div>
</template>

<script>

	export default{
		data(){
			return{
				list:["./src/assets/icon1.png","./src/assets/icon2.png","./src/assets/icon3.png","./src/assets/icon4.png","./src/assets/icon5.png","./src/assets/icon6.png","./src/assets/icon7.png","./src/assets/icon8.png"]
			}
		},
		methods:{
			to(){
				// this.$indicator.open({
                //     text: '加载中...',
                // spinnerType: 'fading-circle'
                // })
			}
		}

	}
</script>
<style scoped>
	ul{
		width:100%;
		height:2.8rem;
		padding-top:0.3rem;
		background:#fff;
	}
	ul li{
		width:25%;
		float:left;
		text-align:center;
		list-style:none;
	}
	img{
		width:1rem;
		height:1.2rem;
	}
</style>