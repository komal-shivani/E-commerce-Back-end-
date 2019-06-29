const express=require('express')
const cors=require('cors')
const app=express()
const port=3004

const {mongoose}=require('./config/database')
const {usersRouter}=require('./app/controllers/userContoller')
const {AddressRouter}=require('./app/controllers/addressController')
const { categoryRouter }=require('./app/controllers/categoryController')
const { productRouter }=require('./app/controllers/productController')
const { reviewRouter }=require('./app/controllers/reviewController')
const { cartLineItemRouter }=require('./app/controllers/cartlineitemController')
app.use(express.json())
app.use(cors())

app.use('/users', usersRouter)
app.use('/address',AddressRouter)
app.use('/category',categoryRouter) 
app.use('/products', productRouter)
app.use('/reviews', reviewRouter)
app.use('/cartlineitems', cartLineItemRouter)

app.listen(port,()=>{
    console.log('listening to port', port)
})