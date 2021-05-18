// 引入express
const express = require('express')
const { findUserById } = require('../crud/login')
// const userModel = require('../dbModel/index')
// 创建router对象
const uiRouter = express.Router()
// 配置路由
uiRouter.get('/home/:_id', async (req, res) => {
    if(req.session.userId){
        const userInfo = await findUserById(req.params._id)
        res.render('index', { username: userInfo.username })
    }else{
        res.redirect('http://127.0.0.1:3000/login/index.html')
    }
})
// 登录成功后跳转详情页
uiRouter.get('/detail', async (req, res) => {
    console.log(req.session.userId)
    if (req.session.userId) {
        // res.redirect('http://127.0.0.1/tetail.html')
        // res.redirect('http://127.0.0.1:3000/detail')
        // res.redirect('detail')
        res.render('detail',{})
    }else{
        res.redirect('http://127.0.0.1:3000/login/index.html')
    }

})
module.exports = uiRouter