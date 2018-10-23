<template>
    <div>
        <!-- 热门品牌 -->
        <ul class="hot-brands clearfix">
    <div class="floor-header-more">
    <h2>热门品牌</h2>
        </div>
            <li class="brand">
                <a>
                    <div class="brand-logo">
                        <img src="//img10.static.yhbimg.com/yhb-img01/2018/09/12/14/0116d732250e5a098e6add360f8dbdf8fd.jpg?imageView2/2/w/158/h/174/q/60" alt="Life·After Life">
                    </div>
                </a>
            </li>
            <li class="brand">
                <a>
                    <div class="brand-logo">
                        <img src="//img10.static.yhbimg.com/yhb-img01/2018/09/12/14/0170053086643059b3ebda8a24e1ff6895.jpg?imageView2/2/w/158/h/174/q/60" alt="COKEIN">
                    </div>
                </a>
            </li>
            <li class="brand">
                <a>
                    <div class="brand-logo">
                        <img src="//img11.static.yhbimg.com/yhb-img01/2018/09/12/14/01ab78a6c41d5f9d811c9c15538603f63c.jpg?imageView2/2/w/158/h/174/q/60" alt="BABAMA">
                    </div>
                </a>
            </li>
            <li class="brand">
                <a>
                    <div class="brand-logo">
                        <img src="//img11.static.yhbimg.com/yhb-img01/2018/09/12/14/0131db3460d6e488bfb0b8f11b8031c61a.jpg?imageView2/2/w/158/h/174/q/60" alt="初弎">
                    </div>
                </a>
            </li>
            <li class="brand">
                <a>
                    <div class="brand-logo">
                        <img src="//img10.static.yhbimg.com/yhb-img01/2018/09/12/14/01f0c4521293176188ee971d27fd809dce.jpg?imageView2/2/w/158/h/174/q/60" alt="Genanx">
                    </div>
                </a>
            </li>
            <li class="brand">
                <a>
                    <div class="brand-logo">
                        <img src="//img10.static.yhbimg.com/yhb-img01/2018/09/12/14/01118bc9b1336e31d8550a00abb1950b0d.jpg?imageView2/2/w/158/h/174/q/60" alt="鬼洗">
                    </div>
                </a>
            </li>

        <li class="more">
            <a class="">
                <img src="//img10.static.yhbimg.com/yhb-img01/2016/09/06/14/0173088d664d59084d9dd61fa2d8b78908.png?imageView2/2/w/320/h/172/q/60">
            </a>
        </li>
    </ul>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
/*热门品牌*/
.hot-brands {
    background: #fff;
    border-bottom: 1px solid #e0e0e0;
    height:201px;
}
.hot-brands .floor-header-more {
    background: #f0f0f0;
    color: #444;
    font-size: .8rem;
    height: 2rem;
    line-height: 2rem;
    position: relative;
    text-align: center;
}
.hot-brands .brand {
    background-color: #e0e0e0;
    float: left;
    height:84px;
    overflow: hidden;
    width:25%;
}
.hot-brands a {
    display: block;
    height: 100%;
    text-decoration: none;
}
.hot-brands .brand .brand-logo {
    font-size: 0;
    height: 100%;
    text-align: center;
    vertical-align: middle;
    width: 100%;
}
.hot-brands .brand .brand-logo img {
    height: 100%;
    width: 100%;
}
.hot-brands .more {
    float: left;
    height: 4rem;
    overflow: hidden;
    width: 8rem;
}
</style>
