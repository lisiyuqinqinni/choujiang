<template>
    <div class="draw">
        <div class="header">
            <img src="../../static/images/active/201711/head.jpg" alt="">
        </div>
        <div class="main">
            <div class="main-title">九宫格抽奖</div>
            <div class="roulette">
                <div class="roulette-box" v-for="imgs,index in images">
                    <div class="box-item" v-for="img,ind in imgs" @click="draw(index,ind)">
                        <img :src="img" alt="">
                        <div :class="{mask:index==isTurn.index&&ind==isTurn.ind}"></div>
                    </div>
                </div>
            </div>
            <div class="main-title">成单记录</div>
            <div class="order-form mar">
                <ul>
                    <li v-for="item in shuju">
                        客户（{{item.UserName}}）本月累计购买产品 {{item.Water}} 万元，成单时间 {{item.DatePay}} ，获得 2 次抽奖机会。
                    </li>
                </ul>
            </div>
            <div class="main-title">中奖记录</div>
            <div class="wining mar"></div>
            <div class="main-title">活动时间与对象</div>
            <div class="time mar"></div>
            <div class="main-title">活动规则</div>
            <div class="rule mar">
                <ul>
                    <li>1、凡在 11月1日-11月30日期间，以100万为基数，每打款100万的客户，可以拥有一次 抽奖机会。例如：A客户打款600万，那么此次可以抽奖6次。机会多多、大奖多多。</li>
                    <li>2、 12月1日-12月10日期间，我们会在专题页 进行相应的抽奖活动。每位客户的成单 累计结果会自动折合成相应的 兑奖次数。</li>
                </ul>
            </div>
            <div class="main-title">奖品设置</div>
            <div class="prize mar">
                <p>抽奖活动为九宫格设置，分设8种不同的奖品（每次抽奖必中）：</p>
                <ul>
                    <li>1.实物奖品：价值8500元的iPhoneX手机；</li>
                    <li>2.实物奖品：价值5000元的小米13.3英寸金属超薄笔记本；</li>
                    <li>3.实物奖品：价值2000元90分金属拉杆箱20英寸；</li>
                    <li>4.虚拟奖品：1000积分、500积分、200积分、100积分、50积分。</li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    import arr from "../lib/txt.js"
    export default {
        data() {
            return {
                images:[["../../static/images/active/201711/gift1.png","../../static/images/active/201711/gift2.png","../../static/images/active/201711/gift3.png"],
                ["../../static/images/active/201711/gift4.png","../../static/images/active/201711/lottery.png","../../static/images/active/201711/gift5.png"],
                ["../../static/images/active/201711/gift6.png","../../static/images/active/201711/gift7.png","../../static/images/active/201711/gift8.png"]],
                isTurn:{
                    index:null,
                    ind:null
                },
                turnArr:[[0,0],[0,1],[0,2],[1,2],[2,2],[2,1],[2,0],[1,0]],
                shuju: arr
            }
        },
        created () {
            setInterval( () =>{
                let first = this.shuju.splice(0, 1)
                this.shuju.push(...first)
            },1500)
        },
        methods: {
            draw (index,ind){
                index==1&&ind==1?this.turn():null
            },
            turn () {
                let num = 0
                let vm = this
                let time1 = setInterval( () =>{
                    vm.isTurn.index = vm.turnArr[num][0]
                    vm.isTurn.ind = vm.turnArr[num][1]
                    num++
                    num>=8?num=0:null
                },500)
                setTimeout( () =>{
                   clearInterval(time1);
                },9000)
            }
        }
    }
</script>

<style scoped>
    .mar{
        margin: 0 auto;
    }
    .draw{
        background: url("../../static/images/active/201711/bg.png"), url("../../static/images/active/201711/bj.png");
        background-position:left 100px, left top;
        background-size: cover cover;
    }
    .header img{
        width: 100%;
        vertical-align: middle;
    }
    .main-title{
        width: 276px;
        height: 166px;
        background: url("../../static/images/active/201711/title.png") no-repeat center center;
        margin: 0 auto;
        font-size: 20px;
        color: rgb(255, 80, 217);
        line-height: 166px;
        text-align: center;
    }
    .roulette{
        box-sizing: border-box;
        width: 724px;
        height: 655px;
        margin: 0 auto;
        background: url("../../static/images/active/201711/light.gif") no-repeat;
        background-size: 100% 100%;
        padding: 60px 45px;
    }
    .roulette-box{
        padding: 0 10px;
        display: flex;
        justify-content: space-between;
    }
    .box-item{
        position: relative;
    }
    .mask{
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: black;
        opacity: .5;
    }
    .order-form,.wining{
        width: 1030px;
        height: 476px;
        background: url("../../static/images/active/201711/deal_list.png") no-repeat;
        box-sizing: border-box;
        background-size: 100%;
        padding: 50px 80px;
    }
    .time,.rule,.prize{
        background: url("../../static/images/active/201711/active-time.png") no-repeat;
        background-size: 100% 100%;
        width: 1030px;
        height: 304px;
        box-sizing: border-box;
    }
    .rule{
        box-sizing: border-box;
        padding: 50px 150px;
        font-size: 14px;
        color: #fff;
        line-height: 36px;
    }
    .rule ul li{
        padding-left: 60px;
        background: url("../../static/images/active/201711/regular.png") no-repeat top left;
    }
    .prize{
        padding: 60px 150px;
        height: 400px;
        background-size: 100% 100%;
    }
    .prize p{
        margin-top: 30px;
        font-size: 16px;
        color: #fff;
        text-align: center;
        line-height: 32px;
    }
    .prize ul li{
        color: #fff;
        font-size: 14px;
        line-height: 40px;
        padding-left: 60px;
        background: url("../../static/images/active/201711/prize.png") no-repeat left center;
        background-size:;
    }
    .order-form ul {
        height: 300px;
        overflow: hidden;
        font-size: 14px;
        color: #fff;
        line-height: 34px;
        text-align: center;
    }
    @media screen and (max-width: 1100px) {
        .roulette{
            background: none;
        }
    }
    @media screen and (max-width: 700px) {
        .roulette{
            width: 100%;
            padding: 0;
            height: auto;
        }
        .box-item{
            width: 33.3%;
        }
        .box-item img{
            width: 100%;
        }
        .mar{
            padding: 0;
            font-size: 12px;
            width: 100%;
            line-height: 1.5rem;
            padding: 15% 20% 5% 20%;
            height: auto !important;
            background-size: 100% 100% !important;

        }
    }
</style>