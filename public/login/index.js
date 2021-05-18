// 获取表单元素
const userName = document.querySelector('input[name=username]')
const password = document.querySelector('input[name=password]')
const userSpan = document.querySelector('#userSpan')
const pswSpan = document.querySelector('#pswSpan')
const loginBtn = document.querySelector('#loginBtn')
// 给用户输入框绑定焦点失去事件,进行校验
userName.oninput = function (e) {
    // console.log(e.keyCode===8);
    let userStr = userName.value.trim()
    const userReg = /^\w{6,12}$/i
    if (!userStr) {
        userSpan.textContent = '用户名必须是6-12位的数字或字母或下划线'
        userSpan.style.color = 'red'
        return
    } 
    if (userReg.test(userStr)) {
        userSpan.textContent = '格式正确'
        userSpan.style.color = 'green'
    } else {
        userSpan.textContent = '用户名必须是6-12位的数字或字母或下划线'
        userSpan.style.color = 'red'
    }
}
// 校验密码
password.oninput = function (e) {
    // console.log(1)
    const pswStr = password.value.trim()
    const pswReg = /^\w{6,12}$/i
    if (!pswStr) {
        pswSpan.textContent = '用户名必须是6-12位的数字或字母或下划线'
        pswSpan.style.color = 'red'
        return
    }
    if (pswReg.test(pswStr)) {
        pswSpan.textContent = '格式正确'
        pswSpan.style.color = 'green'
    } else {
        pswSpan.textContent = '用户名必须是6-12位的数字或字母或下划线'
        pswSpan.style.color = 'red'
    }
}
// 给登录按钮绑定单击事件
loginBtn.onclick = function (e) {
    console.log(1);
    if (!userSpan.style.color || !pswSpan.style.color) return e.preventDefault()
    if (userSpan.style.color !== 'green' || pswSpan.style.color !== 'green') {
        return e.preventDefault()
    }
}



