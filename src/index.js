const express = require('express')
const mongoose = require('mongoose')
require('dotenv').config()
const port = process.env.PORT || 3000
const execute_app = express()
//port 3000 connection
execute_app.listen(port, ()=>{console.log('listening the port', port)})

//first request to connect to: http://localhost:3000
execute_app.get('/',(req, res)=>{
	res.send('Programacion 3')
})

mongoose
.connect(process.env.MONGODB_CONNECTION_STRING)
.then(()=>console.log('Connect with mongodb'))
.catch((error)=>console.error(error))