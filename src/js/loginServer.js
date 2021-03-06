let express = require('express');
let mongodb = require('mongodb');
let bodyParser = require('body-parser')
let app = express();
let code = require('../lib/base63.js')
let MongoClient = require('mongodb').MongoClient;
let DB_CONN_STR = 'mongodb://localhost:27017';
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())
// 用户名查询是否正确
app.post('/login', function (req, res) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    var username = req.body.username;
    var password = code(req.body.password)
    //检测数据库有没有相同的用户名
    MongoClient.connect(DB_CONN_STR, function (err, db) {
        let dbo = db.db('yoho');
        dbo.collection('admin').find({ username, password }).toArray(function (err, request) {
            if (err) {
                console.log(err)
            }
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
app.post('/reg', function (req, res) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    var username = req.body.username;
    var password = code(req.body.password);
    MongoClient.connect(DB_CONN_STR, function (err, db) {
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
//轮播图相册
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
        if (str.length !== 0) {
            let reg = new RegExp(req.query.searchName, 'i');
            dbo.collection('search').find({ name: { $regex: reg } }).toArray(function (err, request) {
                if (err) {
                    console.log(err)
                }
                res.send(request)
                db.close();
            })
        }
        else {
            res.send('no')
        }
    })
})
//获取商品列表信息
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
app.get('/goodshow', function (req, res) {
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
            res.send(request)
            db.close();

        })
    })
})
//初始化验证密码和登录状态
app.post('/checkLogin', function (req, res) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    let username = req.body.username;
    let password = code(req.body.password);
    MongoClient.connect(DB_CONN_STR, function (err, db) {
        let dbo = db.db('yoho');
        dbo.collection('admin').find({ username, password }).toArray(function (err, request) {
            if (err) {
                console.log(err)
            }
            if (request.length > 0) {
                res.send('yes')
            } else {
                res.send('no')
            }
            db.close();

        })
    })
})
//获取商品列表信息
app.post('/goodsUpdate', function (req, res) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    MongoClient.connect(DB_CONN_STR, function (err, db) {
        let page = parseInt(req.body.page);
        let dbo = db.db('yoho');
        dbo.collection('goodsUpdate').find({}).limit(10).skip(page).toArray(function (err, request) {
            if (err) {
                console.log(err)
            }
            res.send(request)
            db.close();

        })
    })
})
//商品排序
app.post('/goodsUpdate-sort', function (req, res) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    let bool = req.body.bool
    if (bool == 'true') {
        bool = 1
    } else {
        bool = -1
    }
    let item = req.body.item;
    console.log(bool)
    MongoClient.connect(DB_CONN_STR, function (err, db) {
        let dbo = db.db('yoho');
        if (item == 'ids') {
            dbo.collection('goodsUpdate').find({}).sort({ 'ids': bool }).toArray(function (err, request) {
                if (err) {
                    console.log(err)
                }
                res.send(request)
                db.close();
            })
        }
        if (item == 'hot') {
            dbo.collection('goodsUpdate').find({}).sort({ 'hot': bool }).toArray(function (err, request) {
                if (err) {
                    console.log(err)
                }
                res.send(request)
                db.close();
            })
        }
        if (item == 'price') {
            dbo.collection('goodsUpdate').find({}).sort({ 'price': bool }).toArray(function (err, request) {
                if (err) {
                    console.log(err)
                }
                res.send(request)
                db.close();
            })
        }
        if (item == 'nums') {
            dbo.collection('goodsUpdate').find({}).sort({ 'nums': bool }).toArray(function (err, request) {
                if (err) {
                    console.log(err)
                }
                res.send(request)
                db.close();
            })
        }

    })
})
app.post('/shouchang', function (req, res) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    //检测数据库有没有相同的用户名
    let ids = req.body.ids;
    let user = req.body.user;
    let idsArr=[];
    idsArr.push(ids);
    console.log(idsArr)
    let username ={user,idsArr}
    MongoClient.connect(DB_CONN_STR, function (err, db) {
        let dbo = db.db('yoho');
        dbo.collection('UserFavorites').find({user}).toArray(function (err, request) {
            if (err) {
                console.log(err)
            }
            if(request==''){
                dbo.collection('UserFavorites').insert(username,idsArr, function (error, requests){
                    if(error){
                        console.log(error)
                    }
                    console.log(requests)
                })
            }else{
                dbo.collection('UserFavorites').find({user}).toArray(function (error, requests){
                    if(error){
                        console.log(error)
                    }
                   console.log(requests[0].idsArr)
                })
            }
            db.close();
        })
    })
})
app.listen(9995);