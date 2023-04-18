const express = require('express')
const app = express()

app.get('/', (res,req)=>{
    res.json({
        mesg: 'Hello Backend'
    })
})

app.listen(3000)