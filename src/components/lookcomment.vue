<template>
    <div id="comment">
        <div class="hd">
            <router-link to="/index/goodsdetail"><p class="a_p"></p></router-link>
            <div class="hd-l">评价详情</div>
        </div>
        <div class="com-con">
            <span v-for="(item,ind) in list" :class="{'color':ind==0}">{{item}}</span>
        </div>
        <div class="list pj">
            <div class="pad bot">商品评价(1)</div>
            <div class="pad">
                <img src="../assets/start.png"/>
                <span class="user">user123456</span>
            </div>
            <div class="pad good">好极了</div>
            <div class="pad bot">2017-05-31</div>
        </div>
    </div>
</template>
  
<script>
    // import "../css/css.css";
    export default {
        data(){
			return{
				onOff:false,
                onClose:false,
                list:["满意(1)","一般(0)","不满意(0)"],
                arrimg:["./src/assets/j1.png","./src/assets/j2.png","./src/assets/2.png","./src/assets/4.png","./src/assets/home2.png"]
			}
		}
    }
</script>

<style scoped>
   
</style>
  
