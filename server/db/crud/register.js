// 接收model对象
const userModel = require('../dbModel/index')
// 声明函数创建数据
function registerUser (username,password){
    return userModel.create({username,password})
}
module.exports.registerUser = registerUser