<template>
	<div>
		<v-goodsdetailhead></v-goodsdetailhead>
		<v-goodsbanner></v-goodsbanner>
		<v-goodslist></v-goodslist>
		<v-goodsdetailfoot></v-goodsdetailfoot>
	</div>
</template>
<script>
	import GoodsdetailHead from "./goodsdetailhead.vue";
	import GoodsBanner from "./goodsbanner.vue";
	import GoodsList from "./goodslist.vue";
	import GoodsdetailFoot from "./goodsdetailfoot.vue";

	export default{
		data(){
			return{
				
			}
		},
		components:{
			"v-goodsdetailhead":GoodsdetailHead,
			"v-goodsbanner":GoodsBanner,
			"v-goodslist":GoodsList,
			"v-goodsdetailfoot":GoodsdetailFoot
		}

	}
</script>
<style scoped>
	
</style>