<template>
    <div>
        <yadvertising></yadvertising>
        <!-- 头部 -->
        <header id="yoho-header" class="yoho-header boys">
            <a href="javascript:history.go(-1);" class="iconfont nav-back icon-fanhui"></a>
            <p class="nav-title">确认订单</p>
        </header>
        <!-- 确认收货地址 -->
        <div class="address block address-wrap not-address">
                <i class="iconfont icon-che1"></i>
                <a class="choose">请选择收货地址<span class="iconfont icon-xiangyou"></span></a>
        </div>
        <!--支付方式 -->
        <section class="dispatch block">
            <div class="sub-block payment-type">
                <h3 class="border-none">
                    <p>支付方式</p>
                        <span>在线支付(推荐)</span>
                    <i class="iconfont " @click="zhifus" :class="[zhifu?'icon-arrow-top':'icon-xiafanye']"></i>
                </h3>
                <ul v-show="zhifu">
                        <li class="chosed">
                            <span>在线支付(推荐)</span>
                            <i class="right iconfont icon-dagou" data-id="15" data-payment-type="1"></i>
                        </li>
                        <li>
                            <span data-message="部分站点不支持刷卡支付，具体请咨询您当地快递公司">货到付款</span>
                            <i class="right iconfont icon-dagou" data-id="0" data-payment-type="2"></i>
                        </li>
                </ul>
            </div>
            <div class="sub-block delivery-id">
                <h3>
                    <p>配送方式</p>
                        <span>普通快递：运费¥0</span>
                        
                    <i class="iconfont " @click="peisongs" :class="[peisong?'icon-arrow-top':'icon-xiafanye']"></i>
                </h3>
                <ul class="dispatch-mode" v-show="peisong">
                    <li class="chosed" data-id="1">
                        <span>普通快递：运费¥0 </span>
                        <i class="right iconfont icon-cb-radio" data-id="1"></i>
                    </li>
                    <li class=" no-support" data-id="2">
                        <span>顺丰速运：运费¥5 (订单中商品暂不支持顺丰速运)</span>
                        <i class="right iconfont icon-radio" data-id="2"></i>
                    </li>
                </ul>
            </div>
            <div class="sub-block dispatch-time">
                <h3>
                    <p>送货时间</p>
                        <span>仅周一至周五送货</span>
                    <i class="iconfont " @click="songhuos" :class="[songhuo?'icon-arrow-top':'icon-xiafanye']"></i>
                </h3>
                <ul v-show="songhuo">
                    <li class="dispatch-time-info">快递公司会尽力按您选择的送货时间配送，如遇特殊情况(天气、环境等)无法按您要求时间配送，还请您谅解。</li>
                        <li data-id="2">
                            <span>送货时间不限</span>
                            <i class="right iconfont radio icon-radio"></i>
                        </li>
                        <li class="chosed" data-id="1">
                            <span>仅周一至周五送货</span>
                            <i class="right iconfont radio icon-cb-radio"></i>
                        </li>
                        <li data-id="3">
                            <span>仅双休日/节假日送货</span>
                            <i class="right iconfont radio icon-radio"></i>
                        </li>
                </ul>
            </div>
        </section>
        <!-- 商品详细展示 -->
        <section class="block goods-bottom">
            <div class="order-good" data-id="3495652">
    <div class="thumb-wrap">
       <img class="thumb lazy" :src="img" style="display: block;">
       <p class="tag"></p>
    </div>
    <div class="deps">
        <p class="name row" v-text="title"></p>
        <p class="row">
                <span class="color" v-text="'颜色:'+color">
                </span>

                <span class="size" v-text="'尺寸:'+chicun">
                </span>

        </p>


        <p class="row price-wrap">
            <span class="price" v-text='"￥"+price+".00"'>
            </span>
            <span class="count" v-text="numbers">
            </span>
        </p>
    </div>
</div>
            <div class="goods-num">共1件商品  合计<span>￥{{firstzongjia}}</span></div>
        </section>
        <!-- 是否使用优惠卷 -->
        <section class="block">
            <ul class="sale-invoice">
                <li class="coupon">
                    <a >
            <span class="title">优惠券</span>
        <span class="count">3张可用 已推荐1张</span>
        <span class="coupon-info pull-right">
            <span class="coupon-price-info">-￥50.00</span>
            <i class="iconfont icon-xiangyou"></i>
        </span>
        <span class="iconfont icon-wenhao coupon-help"></span>
                    </a>
                </li>

                <li class="coin" data-yoho-coin="0" data-yoho-coin-click="0">
                    <span class="title">有货币</span>
                    <span class="desc msg">共0有货币，满100可用</span>
                    <span class="iconfont icon-wenhao yoho-coin-help"></span>
                        <span class="coin-check">
                            <i class="iconfont checkbox icon-radio"></i>
                        </span>
                </li>


                <li class="invoice ">
                    <input type="hidden" class="user-mobile" value="152****5956">
                    <span class="title">发票</span>
                    <span class="iconfont checkbox icon-radio"></span>
                    <a id="invoice" class="invoice-info">
                        <span class="title">发票信息</span>
                        <span class="invoice-type"><i class="iconfont"></i></span>
                    </a>
                </li>

                <li class="no-print-price">
                    <span class="title">不打印价格</span>
                    <span class="desc">送朋友可不打印价格哦</span>
                    <span class="check">
                        <i class="iconfont checkbox icon-radio"></i>
                    </span>
                </li>
            </ul>
        </section>
        <!-- 打折后的价格 -->
        <section class="price-cal block">
            <ul class="total">
                <li>
                    <p>商品金额</p>
                    <span>+￥{{firstzongjia}}</span>
                </li>
                <li>
                    <p>运费</p>
                    <span>+￥{{yunfei}}</span>
                </li>
                <li>
                    <p>活动金额</p>
                    <span>-￥{{huodongjia}}</span>
                </li>
                <li>
                    <p>优惠券</p>
                    <span>-￥{{youhuiquan}}</span>
                </li>
            </ul>
            <div class="price-cost">
                实付金额
                <span v-text="zongjia"></span>
            </div>
        </section>
        <!-- 提交订单 -->
        <div class="bill">
            您需要支付：<span v-text="zongjia"></span>
            <a href="javascript:;">提交订单</a>
        </div>
        <!-- 引入空白板块 -->
        <ybottomBox></ybottomBox>
    </div>    
</template>

<script>
import yadvertising from '../components/Yadvertising.vue';
import ybottomBox from '../components/YbottomBox.vue';
export default {
    data(){
        return {
            zhifu:false,
            peisong:false,
            songhuo:false,
            color:'',
            chicun:'',
            numbers:'',
            price:'',
            img:'',
            title:'',
            //运费
            yunfei:10,
            // 活动减价
            huodongjia:50,
            // 优惠券
            youhuiquan:50,
            // 一开始的总价
            firstzongjia:0,
            // 计算后总价
            zongjia:0
        }
    },
components:{
    yadvertising,
    ybottomBox
},
methods:{
    zhifus(){
    this.peiosng=false;
    this.songhuo=false;
    this.zhifu=!this.zhifu
    },
    peisongs(){
        this.songhuo=false;
        this.zhifu=false;
        this.peisong=!this.peisong
    },
    songhuos(){
        this.zhifu=false;
        this.peiosng=false;
        this.songhuo=!this.songhuo
    }
},
mounted(){
    this.color=this.$route.query.color;
    this.chicun = this.$route.query.chicun;
    this.price = this.$route.query.price;
    this.numbers = this.$route.query.numbers;
    this.img = this.$route.query.img;
    this.title = this.$route.query.title;
    this.firstzongjia = (this.numbers*1)*(this.price*1).toFixed(2);
    this.zongjia = (this.firstzongjia-this.huodongjia-this.youhuiquan+(this.yunfei*1)).toFixed(2);
}
}
</script>

<style scoped>
/* 头部 */
.yoho-header, .yoho-header.boys {
    background-image: -webkit-linear-gradient(#323232,#414141);
    background-image: linear-gradient(#323232,#414141);
}
.yoho-header {
    height: 2.625rem;
    line-height: 2.625rem;
}
.yoho-header {
    background-color: #000;
    color: #fff;
    height: 2.25rem;
    line-height: 2.25rem;
    position: relative;
    width: 100%;
    z-index: 20;
}
.yoho-header .nav-back {
    height: 2.625rem;
    left: 0;
    line-height: 2.625rem;
    width: 2.625rem;
}
.yoho-header .nav-back, .yoho-header .nav-home {
    color: #fff;
    display: block;
    font-size: 20PX;
    height: 2.25rem;
    line-height: 2.25rem;
    outline: none;
    position: absolute;
    text-align: center;
    top: 0;
    width: 2.25rem;
}
.yoho-header .nav-back {
    left: 0;
}
.yoho-header .nav-title {
    font-size: 1.05rem;
    font-weight: 400;
    margin-left: 2.925rem;
    margin-right: 2.925rem;
}
.yoho-header .nav-title {
    color: #fff;
    font-size: .9rem;
    font-weight: 700;
    height: 100%;
    left: 0;
    margin-left: 2.5rem;
    margin-right: 2.5rem;
    overflow: hidden;
    position: absolute;
    right: 0;
    text-align: center;
    text-overflow: ellipsis;
    top: 0;
    white-space: nowrap;
}
/* 确认收货地址 */
 .address {
    border-top: none;
    display: block;
    margin-top: 0;
    padding-bottom: .8rem;
    position: relative;
}
 .block {
    background: #fff;
    border-bottom: 1px solid #e0e0e0;
    border-top: 1px solid #e0e0e0;
    margin: .5rem 0;
    padding: .75rem .5rem;
}
 .not-address i {
    font-size: 1.1rem;
    left: .4rem;
    position: absolute;
    top: 1rem;
}
 .not-address .choose {
    color: #000;
    display: block;
    font-size: .8rem;
    height: 1.6rem;
    line-height: 2.05rem;
    overflow: hidden;
    padding-left: 1rem;
    position: static;
}
 .not-address .choose span {
    font-size: .8rem;
    position: absolute;
    right: .5rem;
    top: .7rem;
}
/* 支付方式 */
.dispatch {
    margin: 0;
    padding: 0;
}
.block {
    background: #fff;
    border-bottom: 1px solid #e0e0e0;
    border-top: 1px solid #e0e0e0;
    margin: .5rem 0;
    padding: .75rem .5rem;
}
.dispatch .sub-block {
    color: #444;
}
.dispatch .sub-block h3 {
    border-bottom: 1px solid #e0e0e0;
    font-size: .9rem;
    height: 2rem;
    line-height: 2rem;
    margin-left: 5%;
    overflow: hidden;
    width: 95%;
}
.border-none {
    border-bottom: none!important;
}
 .dispatch .sub-block h3 i,
 .dispatch .sub-block h3 p {
    display: inline-block;
    height: 2rem;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
.dispatch .sub-block h3 span {
    display: inline-block;
    font-size: .8rem;
    height: 2rem;
    overflow: hidden;
    text-align: right;
    text-overflow: ellipsis;
    white-space: nowrap;
    width: 65%;
}
.dispatch .sub-block h3 i {
    font-size: 1rem;
    margin-left: .2rem;
}
.dispatch .sub-block h3 i,.dispatch .sub-block h3 p {
    display: inline-block;
    height: 2rem;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
.dispatch .sub-block h3 i {
    font-size: 1rem;
    margin-left: .2rem;
}
.dispatch .sub-block h3 i, .dispatch .sub-block h3 p {
    display: inline-block;
    height: 2rem;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
.dispatch .sub-block ul {
    background: #e0e0e0;
    font-size: .65rem;
    height: auto;
    line-height: 2rem;
    overflow: hidden;
    width: 100%;
}
.dispatch .sub-block ul li {
    border-bottom: 1px solid #fff;
    padding: 0 1rem;
}
.dispatch .sub-block ul li>i {
    float: right;
}
.dispatch .sub-block ul li:last-child {
    border-bottom: none;
}
.dispatch .sub-block ul li>i {
    float: right;
}
/* 商品详细展示 */
.block {
    background: #fff;
    border-bottom: 1px solid #e0e0e0;
    border-top: 1px solid #e0e0e0;
    margin: .5rem 0;
    padding: .75rem .5rem;
}
.order-good {
    border-bottom: 1px solid #e0e0e0;
    font-size: .65rem;
    height: auto;
    margin-left: .85rem;
    overflow: hidden;
    padding: .5rem 0;
    position: relative;
}
.order-good .thumb-wrap {
    float: left;
    height: 4rem;
    position: relative;
    width: 3rem;
}
.order-good .thumb {
    height: 100%;
    width: 100%;
}
.order-good .tag {
    bottom: 0;
    color: #fff;
    font-size: .3rem;
    left: 0;
    position: absolute;
    right: 0;
    text-align: center;
}
.order-good .deps {
    margin-left: 3.375rem;
}
.order-good .name {
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    display: -webkit-box;
    font-size: .8rem;
    max-width: 70%;
    overflow: hidden;
    text-overflow: ellipsis;
}
.order-good .row:nth-child(2) {
    height: 1.125rem;
    line-height: 1.125rem;
}
.order-good .row:nth-child(2)>span {
    margin-right: .375rem;
}
.order-good .color, .order-good .size {
    color: #b6b6b6;
}
.order-good .price-wrap {
    position: absolute;
    right: .75rem;
    text-align: right;
    top: .5rem;
}
.order-good .price {
    color: #e01;
}
.order-good .count {
    color: #999;
    display: block;
    line-height: 1.125rem;
    text-align: right;
}
.goods-num {
    background: #fff;
    color: #b0b0b0;
    font-size: .8rem;
    height: 2rem;
    padding: .5rem 0;
    text-align: right;
    width: 100%;
}
.goods-num span {
    color: red;
    padding-right: .5rem;
}
/* 是否使用优惠券 */

 .block {
    background: #fff;
    border-bottom: 1px solid #e0e0e0;
    border-top: 1px solid #e0e0e0;
    margin: .5rem 0;
    padding: .75rem .5rem;
}
.sale-invoice {
    font-size: .7rem;
    margin-top: -.5rem;
}
.sale-invoice li {
    border-bottom: 1px solid #f7f7f7;
    height: 2.25rem;
    line-height: 2.25rem;
    overflow: hidden;
}
.sale-invoice li a {
    display: block;
}
.sale-invoice .title {
    color: #444;
    font-size: .85rem;
}
.sale-invoice .count {
    background-color: #ff575c;
    color: #fff;
    font-size: .55rem;
    font-weight: 300;
    margin-left: .3rem;
    padding: .1rem .375rem;
}
.pull-right {
    float: right;
}
.coupon-help {
    color: #b0b0b0;
    margin-left: .75rem;
}
.sale-invoice li {
    border-bottom: 1px solid #f7f7f7;
    height: 2.25rem;
    line-height: 2.25rem;
    overflow: hidden;
}
.sale-invoice .title {
    color: #444;
    font-size: .85rem;
}
 .sale-invoice .desc {
    color: #999;
}
.yoho-coin-help {
    color: #b0b0b0;
    margin-left: .4rem;
}
.sale-invoice .coin-check {
    color: #999;
    float: right;
}
.sale-invoice li {
    border-bottom: 1px solid #f7f7f7;
    height: 2.25rem;
    line-height: 2.25rem;
    overflow: hidden;
}

.block input, .block textarea {
    background: #efefef;
    border: 0;
    border-radius: .1rem;
    box-sizing: border-box;
    color: #444;
    font-size: .6rem;
    height: 1.8rem;
    line-height: 1;
    margin: .5rem 0;
    outline: 0;
    padding: 0 .3rem;
    width: 100%;
}
.sale-invoice .title {
    color: #444;
    font-size: .85rem;
}
.sale-invoice .invoice .checkbox {
    float: right;
}
.sale-invoice .invoice .checkbox {
    float: right;
}
.sale-invoice .checkbox {
    display: inline-block;
    margin-right: -.5rem;
    text-align: center;
    width: 2rem;
}
 #invoice {
    border-top: 1px solid #f7f7f7;
}
.sale-invoice li a {
    display: block;
}
.sale-invoice .title {
    color: #444;
    font-size: .85rem;
}
#invoice .invoice-type {
    color: #444;
    float: right;
    font-size: .7rem;
}
.sale-invoice li:last-child {
    border-bottom: 0;
}
.sale-invoice li {
    border-bottom: 1px solid #f7f7f7;
    height: 2.25rem;
    line-height: 2.25rem;
    overflow: hidden;
}
.sale-invoice .title {
    color: #444;
    font-size: .85rem;
}
.no-print-price .title {
    color: #444;
    font-size: .85rem;
}
.sale-invoice .desc {
    color: #999;
}
 .no-print-price .check {
    color: #999;
    float: right;
}
.no-print-price .check .checkbox {
    color: #000;
    margin-left: .125rem;
}
.sale-invoice .checkbox {
    display: inline-block;
    margin-right: -.5rem;
    text-align: center;
    width: 2rem;
}
/* 打折后的价格 */
 .price-cal {
    font-size: .8rem;
    margin-bottom: 4.25rem;
    position: relative;
}
 .block {
    background: #fff;
    border-bottom: 1px solid #e0e0e0;
    border-top: 1px solid #e0e0e0;
    margin: .5rem 0;
    padding: .75rem .5rem;
}
 .total {
    font-size: .55rem;
    margin-top: .5rem;
}
 .price-cal li {
    font-size: .8rem;
}
 .price-cal li p,  .price-cal li span {
    display: inline-block;
}
 .price-cal li p,  .price-cal li span {
    display: inline-block;
}
 .total span {
    display: inline-block;
    width: 4rem;
}
 .price-cal span {
    position: absolute;
    right: .7rem;
    text-align: right;
}
 .price-cal span {
    position: absolute;
    right: .7rem;
    text-align: right;
}
.price-cost span {
    color: red;
}
/*提交订单*/
.bill {
    background: #fff;
    bottom: 0;
    font-size: .7rem;
    height: 2.5rem;
    left: 0;
    line-height: 2.5rem;
    overflow: hidden;
    padding-left: 4%;
    position: fixed;
    right: 0;
    z-index: 3;
}
 .bill span {
    color: red;
}
.bill a {
    background: #d0021b;
    border-radius: .25rem;
    color: #fff;
    display: inline-block;
    font-size: .75rem;
    height: 2rem;
    line-height: 2rem;
    overflow: hidden;
    position: absolute;
    right: .5rem;
    text-align: center;
    top: .25rem;
    width: 25%;
}
</style>
