<template>
  <div id="app">
    <router-view></router-view>
    <vFoot></vFoot>
  </div>
</template>
<script>
  import vFoot from "./components/footer.vue"
  export default {
    
    name: 'app',
    components:{
      vFoot
    }
  }
</script>

<style>
 
  /*.fade-enter-active{
		animation:fade-enter 0.4s ;
	}
	.fade-leave-active{
		animation:fade-leave 0.4s ;
	}
	@keyframes fade-enter{
		from{
			transform: translateX(100%);
		}
		to{
			transform: translateX(0px);
		}
	}
	@keyframes fade-leave{
		from{
			transform: translateX(0);
		}
		to{
			transform: translateX(100%);
		}
	}*/
</style>
