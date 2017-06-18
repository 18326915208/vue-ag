<template>
    <div id="comment">
        <div class="hd">
            <router-link to="/index/goodsdetail"><p class="a_p"></p></router-link>
            <div class="hd-l">商品详情</div>
        </div>
        <ul class="spxq">
            <li v-for="imgs in arrimg"><img :src="imgs"/></li>
        </ul>
    </div>
</template>
<script>
    export default {
        data(){
			return{
                arrimg:["./src/assets/j1.png","./src/assets/j2.png","./src/assets/2.png","./src/assets/4.png","./src/assets/j1.png","./src/assets/home2.png"]
			}
		}
    }
</script>
  
