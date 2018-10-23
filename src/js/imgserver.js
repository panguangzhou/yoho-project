let mongodb = require('mongodb');
let MongoClient = require('mongodb').MongoClient;
let DB_CONN_STR = 'mongodb://localhost:27017';
MongoClient.connect(DB_CONN_STR, function (err, db) {
	let goodsname=[
		{
			bigImg:'https://img12.static.yhbimg.com/article/2018/10/22/14/028d3e0455290c133d97f67fd211834ed7.jpg?imageView2/2/w/640/h/640/q/60',
			title:'软萌温暖的绒感外套，男生也值得拥有',
			txt:'PUMA 携手嘻哈歌手BIG SEAN带来的重磅联名之作',
			type:'搭配',
			rd:967,
			dz:34,
			datas:[
				{
					minImg:'https://img13.static.yhbimg.com/goodsimg/2018/10/14/17/02d1e9d0b956eeff3be417824dcfdef1f6.jpg?imageView2/2/w/106/h/138/q/60',
					title:'M+RC NOIR 镭射金属斜挎包',
					price:1499.00
				},
				{
					minImg:'https://img11.static.yhbimg.com/goodsimg/2018/09/10/16/019de1c628cf6e39653a8534040e13626e.jpg?imageView2/2/w/106/h/138/q/60',
					title:'Timberland 科尔沁之#砂系列',
					price:1790.00
				},
				{
					minImg:'https://img13.static.yhbimg.com/goodsimg/2018/10/19/09/02180a20ca0f4302ca921644d509c80194.jpg?imageView2/2/w/106/h/138/q/60',
					title:'ABLE JEANS 男士自然立体锥形',
					price:699.00
				},
				{
					minImg:'https://img12.static.yhbimg.com/goodsimg/2018/10/16/17/0253651289b33678c122f8d9f481181ef3.jpg?imageView2/2/w/106/h/138/q/60',
					title:'PAVO 复古文艺圆框平光镜',
					price:229.00
				},
			]
		},
		{
			bigImg:'https://img13.static.yhbimg.com/article/2018/10/22/13/02a480c17a63f2f0192f6e5d2eadb10264.jpg?imageView2/2/w/640/h/640/q/60',
			title:'这么冷的天，其实你可以选择摇粒',
			txt:'军绿色的工装裤感觉大概是男孩子的心头好吧',
			type:'搭配',
			rd:2377,
			dz:34,
			datas:[
				{
					minImg:'https://img10.static.yhbimg.com/goodsimg/2018/09/07/18/014599aad368f4d0ac5b945bea2e339841.jpg?imageView2/2/w/106/h/138/q/60',
					title:'SLOW 银色‘真’字胸针',
					price:102
				},
				{
					minImg:'https://img13.static.yhbimg.com/goodsimg/2018/10/06/12/02ab522a39f388372436fd3d303fa774a4.jpg?imageView2/2/w/106/h/138/q/60',
					title:'adidas Originals TEMPER RUN',
					price:1099
				},
				{
					minImg:'https://img11.static.yhbimg.com/goodsimg/2018/10/14/17/010925b7c8b6a6acc71bef7290e5a56009.jpg?imageView2/2/w/106/h/138/q/60',
					title:'M+RC NOIR LOGO鸭舌帽',
					price:729
				},
				{
					minImg:'https://img11.static.yhbimg.com/goodsimg/2018/08/29/17/01afd65873be47b1c6e589182de0d02eab.jpg?imageView2/2/w/106/h/138/q/60',
					title:'TYAKASHA塔卡沙 芝麻系列',
					price:474
				},
				{
					minImg:'https://img12.static.yhbimg.com/goodsimg/2018/10/16/13/02cb92ceeba3b08bab15732d81f2847b17.jpg?imageView2/2/w/106/h/138/q/60',
					title:'PAVO 复古个性飞机项链',
					price:99
				}
			]
		}
]
	let dbo = db.db('yoho');
	dbo.collection('guanshow').insert(goodsname,function (err, request) {
		if (err) {
			console.log(err)
		}
		console.log(request)
	})
})