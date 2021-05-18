// 引入express
const express = require('express')
// 创建路由对象
const router = express.Router()
// 引入registerUser
const { registerUser } = require('../crud/register')
// 引入findUser
const { findUser } = require('../crud/login')
// 配置注册路由
router.post('/register', async (req, res) => {
    // console.log(res.body)
    const { username, password } = req.body
    await registerUser(username, password)
    res.send('注册成功,<a href="http://127.0.0.1:3000/login/index.html">点击登录</a>')
})
// 配置登录路由
router.post('/login', async (req, res) => {
    const { username, password } = req.body
    // console.log(findUser)
    // console.log(res.body)
    const userInfon = await findUser(username, password)
    console.log(userInfon)
    if (userInfon) {
        // res.send('登录成功')
        // router.username = username
        // 登录成功后，发送cookie数据
        // res.cookie('userId', userInfon._id, { maxAge: 1000 * 60 })
        req.session.userId = userInfon._id
        // res.redirect('http://127.0.0.1:3000/home?_id='+userInfon._id)
        res.redirect('http://127.0.0.1:3000/home/' + userInfon._id)
    } else {
        res.send('用户名或密码错误,<a href="http://127.0.0.1:3000/login/index.html">重新登录</a>')
    }
    // console.log(req.query)
})
module.exports = router