let request = require('request');
let cheerio = require('cheerio');
let MongoClient = require('mongodb').MongoClient;
let DB_CONN_STR = 'mongodb://localhost:27017';
request('http://www.mei.com/silo/men/36780-2040204090000005849-event-event.html?spm=a2o1p.8153750.2031503.2.15e23564sZsOLz', function (req, res, body) {
    let $ = cheerio.load(body);
    $('.listproduct').each(function (index, ele) {
        let imgUrl = $(ele).find('img').attr('src')
        let title = $(ele).find('img').attr('title')
        let price = $(ele).find('.red').text().split('￥')[1];
        let hot = index;
        let ids = 'g'+ index;
        let theme = '大衣';
        MongoClient.connect(DB_CONN_STR, function (err, db) {
            let dbo = db.db('yoho');
            dbo.collection('goodsUpdate').insert({ imgUrl, title,price,hot,ids,theme },function (err, request) {
                if (err) {
                    console.log(err)
                }
                console.log(request)
                if (request.length !== 0) {
                    res.send('yes')
                } else {
                    res.send('no')
                }
                db.close();
            })
        })
    })
})