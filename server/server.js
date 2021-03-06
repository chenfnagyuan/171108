// 1. 引入express
const express = require('express')

// 2. 生成应用对象(执行express函数)
const app = express()

// 3. 注册根路由(使用app的use())
app.use('/', function (req, res) {
    res.send('hello server!')
})

// 4. 启动服务器(使用app监听指定端口)
app.listen('8888', () => {  console.log('start server at port 8888')
})