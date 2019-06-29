const express=require('express')
const cors=require('cors')
const app=express()
const port=3004

const {mongoose}=require('./config/database')
const {usersRouter}=require('./app/controllers/userContoller')

app.use(express.json())
app.use(cors())
app.use('/users', usersRouter)

app.listen(port,()=>{
    console.log('listening to port', port)
})