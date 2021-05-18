// 接收model对象
const userModel = require('../dbModel/index')
// 声明函数创建数据
function findUser(username, password) {
    return userModel.findOne({ username, password })
}
function findUserById(_id) {
    return userModel.findOne({ _id })
}
module.exports.findUser = findUser
module.exports.findUserById = findUserById