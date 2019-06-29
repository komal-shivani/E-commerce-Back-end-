const express=require('express')
const {OrderItem}=require('../models/order')
const router=express.Router()

router.get('/', (req,res)=>{
    OrderItem.find()
    .then(orderitems=>res.json(orderitems))
    .catch(err=>res.json(err))
})

router.post('/', (req,res)=>{
    const body=req.body
    const orderitem=new OrderItem(body)
    orderitem.save()
    .then(orderitem=>res.json(orderitem))
    .catch(err=>res.json(err))
})

router.get('/:id', (req,res)=>{
    const id=req.params.id
    OrderItem.findOne({
        _id:id,
        user:user._id
    })
    .then(orderitem=>{
        if(!orderitem){
            res.send({})
        }else{
            res.json(orderitem)
        }
    })
    .catch(err=>res.json(err))
})
router.put('/:id',(req,res)=>{
    const id=req.params.id
    const body=req.body
    OrderItem.findOneAndUpdate({
        id:id,
        user:user._id},
        {$set:body},
        {new:true, runValidator:true }
    )
    .then(orderitem=>res.json(orderitem))
    .catch(err=>res.json(err))
})

router.delete('/:id',(req,res)=>{
    const id=req.params.id
    OrderItem.findOneAndDelete({
        _id:id,
        user:user._id
    })
    .then(orderitem => res.json(orderitem))
    .catch(err => res.json(err))
    
})

module.exports={
    orderitemRouter:router
}