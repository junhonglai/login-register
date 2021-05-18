// 引入mongoose
const mongoose = require('mongoose')
// 创建约束
const Schema = mongoose.Schema
// 创建约束规则
const userSchema = new Schema({
    username:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    date:{
        type:Date,
        default:Date.now()
    }
})
// 创建集合
module.exports = mongoose.model('users',userSchema)