(async function () {
    // 引入express
    const express = require('express')
    // 连接数据库
    await require('./db/connectdb/index')
    // 引入router
    const router = require('./db/router/router')
    // 引入ejs
    const uiRouter = require('./db/router/uirouter')
    // 引入cookie
    const cookie = require('cookie-parser')
    // 引入session
    const session = require('express-session')
    const mongo = require('connect-mongo')
    const MongoStore = require('connect-mongo')(session);
    // 创建应用对象
    const app = express()
    // 使用中间件
    app.use(express.static('../public'))
    // 使用中间件解析post发送的数据(发送至body请求体总的)
    app.use(express.urlencoded({ extended: true }))
    // 开启session
    app.use(session({
        name: 'idoyx',   //设置cookie的name，默认值是：connect.sid
        secret: 'ouyangxiaoIloveYour', //参与加密的字符串（又称签名）
        saveUninitialized: false, //是否为每次请求都设置一个cookie用来存储session的id
        resave: true ,//是否在每次请求时重新保存session
        store: new MongoStore({
          url: 'mongodb://localhost:27017/test-app',
          touchAfter: 24 * 3600 // 24小时之内只修改一次
        }),
        cookie: {
          httpOnly: true, // 开启后前端无法通过 JS 操作
          maxAge: 1000*30 // 这一条 是控制 sessionID 的过期时间的！！！
        },
      }));
    // 使用中间件解析cookie
    app.use(cookie())
    // 使用中间件
    app.use(router)
    app.use(uiRouter)
    app.set('view engine', 'ejs')
    app.set('views', './views/home')
    // 设置端口号并启动服务器
    app.listen(3000, (err) => {
        if (err) console.log('error', err)
        else console.log('success')
    })
})()