let express = require('express');
let mongodb = require('mongodb');
let app = express();
let MongoClient = require('mongodb').MongoClient;
let DB_CONN_STR = 'mongodb://localhost:27017';
//图片验证
// app.get('/yanzheng',function(req,res){
//     //解决跨域问题，这样做不安全
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
//     res.header("Access-Control-Allow-Headers", "X-Requested-With");
//     res.header('Access-Control-Allow-Headers', 'Content-Type');
//     //打印请求头的信息
//     let num = req.query.num
//     console.log(num)
//     MongoClient.connect(DB_CONN_STR, function (err, db) {
//         console.log('连接成功');
//         let dbo = db.db('yoho');
//         dbo.collection('yanzheng').find({naem:`https://m.yohobuy.com/passport/img-check.jpg?t=${num}`}).toArray(function (err, request) {
//             if (err) {
//                 console.log(err)
//             }
//             console.log(request);
//             res.send('hello world');
//             db.close();
//         })
//     })
// })
//用户名查询是否正确
app.get('/login', function (req, res) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    var username = req.query.username;
    var password = req.query.password;
    //检测数据库有没有相同的用户名
    MongoClient.connect(DB_CONN_STR, function (err, db) {
        let dbo = db.db('yoho');
        dbo.collection('admin').find({ username, password }).toArray(function (err, request) {
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
//注册用户名
app.get('/reg', function (req, res) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    MongoClient.connect(DB_CONN_STR, function (err, db) {
        var username = req.query.username;
        var password = req.query.password;
        let arr = [{ username, password }];
        var dbo = db.db('yoho');
        dbo.collection('admin').find({ username }).toArray(function (err, request) {
            if (err) {
                console.log(err)
            }
            //如果查询的结果是空的，就往数据库添加用户名和密码
            if (request.length == 0) {
                dbo.collection('admin').insert(arr, function (err, requests) {
                    if (err) {
                        console.log(err)
                    }
                    res.send('yes')
                })
            } else {
                res.send('no')
            }
            db.close();
        })
    })
})
//用户登录
app.get('/boysBanner', function (req, res) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    //检测数据库有没有相同的用户名
    MongoClient.connect(DB_CONN_STR, function (err, db) {
        let dbo = db.db('yoho');
        dbo.collection('bannerUrl').find({}).toArray(function (err, request) {
            if (err) {
                console.log(err)
            }
            res.send(request)
            db.close();
        })
    })
})
//获取商品分类列表
app.get('/getgoods', function (req, res) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    MongoClient.connect(DB_CONN_STR, function (err, db) {
        if (req.query.username === 'goods') {
            let dbo = db.db('yoho');
            dbo.collection('goods').find({}).toArray(function (err, request) {
                if (err) {
                    console.log(err)
                }
                res.send(request)
                db.close();
            })
        }
    })
})
// 数据库的模糊查询
app.get('/search', function (req, res) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    let str = req.query.searchName;
    MongoClient.connect(DB_CONN_STR, function (err, db) {
        let dbo = db.db('yoho');
        console.log(str.length)
        if (str.length !== 0) {
            let reg = new RegExp(req.query.searchName, 'i');
            dbo.collection('search').find({ name: { $regex: reg } }).toArray(function (err, request) {
                if (err) {
                    console.log(err)
                }
                res.send(request)
                console.log(request)
                db.close();
            })
        }
        else {
            res.send('no')
        }
    })
})
app.get('/goodslist', function (req, res) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    MongoClient.connect(DB_CONN_STR, function (err, db) {
        let dbo = db.db('yoho');
        dbo.collection('goodslist').find({}).toArray(function (err, request) {
            if (err) {
                console.log(err)
            }
            res.send(request)
            db.close();

        })
    })
})
//逛的数据
app.get('/goodshow',function(req,res){
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    MongoClient.connect(DB_CONN_STR, function (err, db) {
        let dbo = db.db('yoho');
        dbo.collection('guanshow').find({}).toArray(function (err, request) {
            if (err) {
                console.log(err)
            }
            console.log(request)
            res.send(request)
            db.close();

        })
    })
})
    app.listen(9995);