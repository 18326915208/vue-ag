<template>
	<div>
		<v-contenthead></v-contenthead>
		<ul class="break">
            <li v-for="(val,ind) in data" :class="{'color':ind==0}">{{val}}</li>
            <li class="last"><i class="f1"></i></li>
        </ul>
        <ul class="con-list">
            <li v-for="flag in list">
                <img :src="flag.goodsListImg" alt="">
                <div class="con-list-r">
                    <p class="p-tit">{{flag.goodsName}}</p>
                    <p>销售0笔</p>
                    <i class="joincart"><img src="../assets/c1.png"/></i>
                    <div class="div-com">
                        <span class="l">￥{{flag.price}}</span><span class="del">{{flag.discount}}折</span><span class="r">暂无评价</span>
                    </div>
                </div>
            </li>
        </ul>
	</div>
</template>

<script>
    import ContentHead from "./contenthead.vue";
    import List from "./list.vue";
	export default{
		data(){
			return{
                data:["默认","价格","销量"],
                dataimg:['../assets/k1.png','../assets/k2.png','../assets/k3.png','../assets/k4.png'],
                list:[]
			}
		},
		components:{
			"v-contenthead":ContentHead,
            "v-list":List
		},
        methods:{
            
            
        },
        mounted:function(){
			this.$http.jsonp("http://datainfo.duapp.com/shopdata/getGoods.php")
			.then(function(res){
				for(let i=0;i<res.body.length;i++){
					this.list.push(res.body[i]);
				}
			})
		}
	}
</script>
<style scoped>
li{
    list-style:none;
}
	.break{
        width: 100%;
        margin-top: 0.8rem;
        padding: 0.2rem;
        background: #fff;
        font:0.3rem "微软雅黑";
        overflow: hidden;
        position: fixed;
        top:0;
        z-index: 100;
    }
    .break li{
        float:left;
        margin-right: 0.2rem;
        padding:0 0.1rem;
    }
    .break li:nth-child(2){
        background: url(../assets/shang.png) no-repeat right;
        background-size: 0.1rem 0.2rem;
    }
    .break li:nth-child(3){
        background: url(../assets/xia.png) no-repeat right;
        background-size: 0.1rem 0.2rem;
    }
    .color{
        color:#0076ff;
        border: none;
    }
    .last{
        position: absolute;
        right:0.4rem;
    }
    .f1{
        width: 0.4rem;
        height: 0.4rem;
        display: block;
        background: url(../assets/f1.png) no-repeat;
        background-size: 0.4rem 0.4rem;
    }
    .con-list{
        margin: 1.8rem 0 1rem;
        background:#fff;
        padding: 0.1rem 0.2rem;
    }
    .con-list li{
        overflow: hidden;
        margin-bottom:0.2rem;
    }
    .con-list li img{
        float: left;
        width: 1.5rem;
        height: 1.5rem;
    }
    .con-list li .con-list-r{
        font:0.23rem "微软雅黑";
        margin-left: 1.65rem;
        position:relative;
        color: #8f8f8f;
    }
    .con-list li .con-list-r .p-tit{
        color: #000;
        overflow: hidden;
        line-height: 0;
        font:700 0.3rem "";
    }
    .con-list li .con-list-r .joincart{
        position: absolute;
        right:0;
        top:0.35rem;
        display:block;
        width: 0.6rem;
        height: 0.6rem;
        border:1px solid #4e4c46;
        border-radius: 50%;
        text-align: center;
    }
    .con-list li .con-list-r .joincart img{
        float: none;
        display: inline-block;
        margin-top: 0.075rem;
        width: 0.45rem;
        height: 0.45rem;
    }
    .div-com{
        margin-top:0.3rem;
        overflow: hidden;
    }
    .div-com .l{
        color:#0076ff;
        margin-right: 0.2rem;
    }
    .div-com .r{
        float:right;
    }
</style>