<template>
	<div>
		<div class="goods">
			<div class="list">
				<h3>韩式田园书桌 卧室书台书房家具儿童实木电脑桌组合带书架直转角</h3>
				<p>韩式田园书桌 卧室书台书房家具儿童实木电脑桌组合带书架直转角</p>
				<div class="price">￥561.44</div>
				<div class="price_bot">
					<del>4038.00</del>
					<span>库存1123件</span>
					<span class="xl">销量2笔</span>
				</div>
			</div>
			<div class="list">颜色分类：多功能转椅、物流点自提，1件<i class="i1"></i></div>
			<div class="select list">
				<div class="pad bot"><span>选择送货地址</span><i class="i1"></i></div>
				<p class="yf">运费</p>
			</div>
			<div class="list pj">
				<div class="pad bot">商品评价(1)</div>
				<div class="pad">
					<img src="../assets/start.png"/>
					<span class="user">user123456</span>
				</div>
				<div class="pad good">好极了</div>
				<div class="pad bot">2017-05-31</div>
				<div class="btn"><router-link to="/index/goodsdetail/lookcomment"><button>查看全部评价</button></router-link></div>
			</div>
			<div class="list"><router-link to="/index/goodsdetail/goodsimg">商品详情<i class="i1"></i></router-link></div>
            <div class="list">商品编号：<span class=" num">9387374858574636326737</span></div>
			<div class="list">点击加载更多</div>
            <!--<transition name="fade">
                <div id="comment" v-show="onOff">
                    <div class="hd">
                        <p class="a_p" @click="onOff=false"></p>
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
            </transition>-->
            <!--<transition name="fade">
                <div id="comment" v-show="onClose">
                    <div class="hd">
                        <p  class="a_p" @click="onClose=false"></p>
                        <div class="hd-l">商品详情</div>
                    </div>
                    <ul class="spxq">
                       <li v-for="imgs in arrimg"><img :src="imgs"/></li>
                    </ul>
                </div>
            </transition>-->
		</div>
	</div>
</template>
<script>
import "../css/goodesdetail.css";
	export default{
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
	/*.goods{
		margin-bottom:1.1rem;
	}
	.list{
		margin-bottom:0.1rem;
		background:#fff;
		padding:0.2rem;
		font:0.25rem "微软雅黑";
	}
	.list h3{
		font:0.3rem "微软雅黑";
		font-weight:700;
	}
	p{
		color:#808080;
		font:0.25rem "微软雅黑";
		margin-top:0.15rem;
	}
	.price{
		font:0.3rem "微软雅黑";
		color:#0076ff;
	}
	.price_bot{
		font:0.3rem/0.5rem "";
		color:#808080;
		overflow: hidden;
	}
	.xl{
		float:right;
	}
	i{
		display:inline-block;
		width:0.2rem;
		height:0.3rem;
		float:right;
	}
	.i1{
		background: url(../assets/jiantou.png);
		background-size:.2rem .3rem;
	}
	.select,.pj{
		padding:0;
	}
	.pad{
		color:#808080;
		padding:0.1rem 0.2rem;
		overflow: hidden;
	}
	.bot{
		border-bottom:1px solid #eee;
	}
	.yf{
		padding:0.1rem 0.2rem;
		margin-top:0;
	}
	.pad img{
		width:2rem;
		height:0.3rem;
	}
	.pad .user{
		float:right;
	}
	.good{
		color:#000;
	}
	.btn{
		text-align: center;
		padding: 0.2rem 0;
	}
	button{
		padding: 0.1rem;
		color:#484640;
		border:1px solid #484640;
	}
    .num{
        color: #88888c;
    }*/
    /*#comment{
        width: 100%;
        height: 100%;
        background:#eeeeec;
        transform: translateX(0);
        position:absolute;
        left: 0;
        top:0;
        z-index: 1000;
    }
	#comment .hd{
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
	#comment .a_p{
		position:absolute;
		left:0.2rem;
		top:0.25rem;
		display:inline-block;
		width:0.45rem;
		height:0.4rem;
		background:url(../assets/back.png)no-repeat;
		background-size:0.4rem 0.4rem;
        margin:0;
	}
	#comment .hd-l{
		position:absolute;
		left:0.8rem;
		top:0;
		font:0.3rem/0.8rem "微软雅黑";
	}
	#comment .com-con{
        margin-top:0.8rem;
		width:100%;
        height: 1rem;
        font:0.3rem/1rem "微软雅黑";
		background: #fff;
        margin-bottom: 0.2rem;
	}
    #comment .com-con span{
        margin: 0 0.22rem;
        padding:0 0.3rem 0.2rem;
        list-style:none;
	}
    .color{
        color: #0076ff;
        border-bottom:0.04rem solid #0076ff;
    }*/
    /*.spxq{
        width:100%;
        margin-top:0.8rem;
    }
    .spxq li{
        list-style: none;
        width: 100%;
        height:4rem;
    }
    .spxq li img{
        width:100%;
        height: 100%;
    }
	.fade-enter-active{
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