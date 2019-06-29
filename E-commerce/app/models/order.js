const mongoose=require('mongoose')
// userId
// addressId
// paymentMethod
// total
// createdAt
// code
// orderLineItems[
//     {
//         productId, price, quantity
//     }
// ]

const Schema=mongoose.Schema
const OrderSchema=new Schema({
       user:{
           type:Schema.Types.ObjectId,
           ref:'User'
       },
       address:{
           type:Schema.Types.ObjectId,
           ref:'Address'
       },
       paymentmethod:{
           type:String
       },
       total:{
           type:String
       },
       createdAt:{
           type:Date,
           default:Date.now
       }
})