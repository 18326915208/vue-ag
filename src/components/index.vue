<template>
	<div>	
		<v-header></v-header>
		<v-banner v-show="flag"></v-banner>
    	<v-content  v-show="flag"></v-content>
    	<v-list @toggle="get"></v-list>
	</div>
</template>
<script>
  import Header from './header.vue';
  import Banner from './banner.vue';
  import Content from './content.vue';
  import List from "./list.vue";
  import Footer from "./footer.vue";

	export default{
		data(){
			return {
				flag : true
			}
		},
	 	beforeUpdate(){
			get();
		},
		components:{
     	 	"v-header":Header,
      		"v-banner":Banner,
      		"v-content":Content,
      		"v-list":List,
          "v-footer":Footer
      		
    	},
		methods : {
			get(dd){
				if(dd){	this.flag = dd ;}
				else{ this.flag = true}
			}
		}
		
	}
</script>


<style scoped>
	
</style>