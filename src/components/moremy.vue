<template>
    <div id="my">
        <div class="hd">
            <router-link class="a_p" to="/more"></router-link>
            <div class="hd-l">我的</div>
        </div>
        <ul class="mycon">
            <li><span>中国+86</span></li>
            <li>
                <span class="m-p">手机号</span>
                <input class="inp" type="text" v-focus/>
            </li>
            <li>
                <input class="inp" type="password" placeholder="请输入密码"/>
            </li>
        </ul>
        <div class="btn"><button @click="taplogin">登录</button></div>
        <div class="reg"><span class="l" @click="nowreg">立即注册</span><span class="r">忘记密码?</span></div>
    </div>
</template>
<script>
    export default{
        methods:{
            taplogin(){
                alert("你好，请先注册！")
            },
            nowreg(){
                
            }
        },
		directives:{
			focus: {
				// 指令的定义---
				inserted(el){
					el.focus()
				}
			}
		}
	}
</script>
<style scoped>
/*#my{
    width: 100%;
    height: 100%;
    background:#fff;
    transform: translateX(0);
    position:absolute;
    left: 0;
    top:0;
    z-index: 1000;
}*/
#my{
    background:#fff;
}
 .hd{
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
.a_p{
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
.hd-l{
    position:absolute;
    left:0.8rem;
    top:0;
    font:0.35rem/0.8rem "微软雅黑";
}
.mycon{
    margin-top: 0.8rem;
    font:0.3rem/0.5rem "微软雅黑";
}
.mycon li{
    list-style: none;
    padding: 0.3rem 0.2rem 0;
    border-bottom:1px solid #aaa;
    position: relative;
}

span.m-p{
    font-size:.1rem;
    color: #999;
    position:absolute;
    top:-0.1rem;
    left:.2rem;
    font-style: normal;
}
.inp{
    border:none;
    outline: none;
    font:0.3rem "";
}
.btn{
    text-align: center;
    padding-bottom: 0.2rem;
}
button{
    width:4.5rem;
    height: 0.8rem;
    color: #fff;
    font:0.3rem "微软雅黑";
    background: #bfbfbf;
    border:none;
    outline: none;
}
.reg{
    font:0.25rem/0.5rem "微软雅黑";
    overflow: hidden;
    padding: 0 0.2rem;
    color: #999;
}
.l{
    float: left;
}
.r{
    float: right;
}
</style>
