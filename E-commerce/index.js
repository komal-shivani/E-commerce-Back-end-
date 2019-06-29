const express=require('express')
const cors=require('cors')
const app=express()
const port=3004

const {mongoose}=require('./config/database')
const {usersRouter}=require('./app/controllers/userContoller')
const {AddressRouter}=require('./app/controllers/addressController')

app.use(express.json())
app.use(cors())
app.use('/users', usersRouter)
app.use('/address',AddressRouter)

app.listen(port,()=>{
    console.log('listening to port', port)
})