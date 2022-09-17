let mysql = require('mysql2')

let connection = mysql.createConnection({
    host:'localhost',
    port:'3306',
    user:'root',
    password:'12345678',
    database:'boblog'
})

connection.connect(err => {
    if(err){
        console.log('连接失败',err)
        return
    }
    console.log('连接成功')
})

connection.end()