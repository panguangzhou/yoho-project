<template>
    <div>
        <!--热门商品-->
        <div class="hot-category">
        <div class="floor-header-more">
            <h2>热门品类</h2>
        </div>
        <ul class="category-list clearfix">
            <li>
                <a>
                    <div class="img-box">
                        <img src="//img11.static.yhbimg.com/yhb-img01/2018/10/15/13/017d841a5de650e0aa05241ca22a51f566.jpg?imageView2/2/w/140/h/140/q/60" alt="卫衣">
                    </div>
                </a>
            </li>
            <li>
                <a>
                    <div class="img-box">
                        <img src="//img10.static.yhbimg.com/yhb-img01/2018/10/15/13/01b5400cc79e1a3387e571aa4a76363596.jpg?imageView2/2/w/140/h/140/q/60" alt="夹克">
                    </div>
                </a>
            </li>
            <li>
                <a>
                    <div class="img-box">
                        <img src="//img10.static.yhbimg.com/yhb-img01/2018/10/15/13/01319a50d7e5f49406aac26a7d3605b77f.jpg?imageView2/2/w/140/h/140/q/60" alt="衬衫">
                    </div>
                </a>
            </li>
            <li>
                <a>
                    <div class="img-box">
                        <img src="//img10.static.yhbimg.com/yhb-img01/2018/10/15/13/0113ccd615812f79ced8d4f8877c10b784.jpg?imageView2/2/w/140/h/140/q/60" alt="板鞋/滑板鞋">
                    </div>
                </a>
            </li>
            <li>
                <a>
                    <div class="img-box">
                        <img src="//img10.static.yhbimg.com/yhb-img01/2018/10/15/13/01c24f6b23c3336f84b17f9bcb08f523d5.jpg?imageView2/2/w/140/h/140/q/60" alt="休闲/运动鞋">
                    </div>
                </a>
            </li>
            <li>
                <a>
                    <div class="img-box">
                        <img src="//img11.static.yhbimg.com/yhb-img01/2018/10/15/13/011de2e3081d9633bdb7f7aaa26cf70a17.jpg?imageView2/2/w/140/h/140/q/60" alt="靴子">
                    </div>
                </a>
            </li>
            <li>
                <a>
                    <div class="img-box">
                        <img src="//img11.static.yhbimg.com/yhb-img01/2018/10/15/13/01dcbe6e52111d00ce427cea46e915c57b.jpg?imageView2/2/w/140/h/140/q/60" alt="牛仔裤">
                    </div>
                </a>
            </li>
            <li>
                <a>
                    <div class="img-box">
                        <img src="//img10.static.yhbimg.com/yhb-img01/2018/10/15/13/01abb1d97b046b2fc544b13716994fe64a.jpg?imageView2/2/w/140/h/140/q/60" alt="休闲裤">
                    </div>
                </a>
            </li>
            <li>
                <a>
                    <div class="img-box">
                        <img src="//img10.static.yhbimg.com/yhb-img01/2018/10/15/13/01799aa7264a23cbeb15805ab99aa391dd.jpg?imageView2/2/w/140/h/140/q/60" alt="手拎包/单肩包">
                    </div>
                </a>
            </li>
            <li>
                <a>
                    <div class="img-box">
                        <img src="//img11.static.yhbimg.com/yhb-img01/2018/10/15/13/0136265f11454fa2b1fe1615069c10cb6a.jpg?imageView2/2/w/140/h/140/q/60" alt="帽子">
                    </div>
                </a>
            </li>
            <li>
                <a >
                    <div class="img-box">
                        <img src="//img11.static.yhbimg.com/yhb-img01/2018/10/15/13/0190a673c07304a08d131d02bb1a20dcc2.jpg?imageView2/2/w/140/h/140/q/60" alt="首饰">
                    </div>
                </a>
            </li>
            <li>
                <a>
                    <div class="img-box">
                        <img src="//img11.static.yhbimg.com/yhb-img01/2018/10/15/13/01ad0b2ee36a9b0052355d17d445f5d3cd.jpg?imageView2/2/w/140/h/140/q/60" alt="袜子">
                    </div>
                </a>
            </li>
        </ul>
    </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
/*热门商品*/
.hot-category {
    border-bottom: 1px solid #e0e0e0;
    height:302px;
}
.hot-category .floor-header-more {
    background: #f0f0f0;
    color: #444;
    font-size: .8rem;
    height: 40px;
    line-height: 2rem;
    position: relative;
    text-align: center;
}

.hot-category .floor-header-more h2 {
    color: #000;
    font-size: 15px;
}
.hot-category .category-list {
    background: #fff;
}
.hot-category .category-list li {
    border-left: 1px solid #e0e0e0;
    border-top: 1px solid #e0e0e0;
    float: left;
    height:87px;
    overflow: hidden;
    width:25%;
}
.hot-category .category-list li .img-box img {
    height: 100%;
    max-height: 100%;
    max-width: 100%;
    vertical-align: middle;
    width: 100%;
}
.hot-category .category-list li .img-box {
    font-size: 0;
    height: 100%;
    line-height: 3.85rem;
    overflow: hidden;
    text-align: center;
    width: 100%;
}
</style>
