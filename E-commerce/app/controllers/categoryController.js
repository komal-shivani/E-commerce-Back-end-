const express=require('express')
const router=express.Router()
const {Category}=require('../models/category')

router.get('/',(req,res)=>{
    const body=req.body
    Category.find()
        .then(categories=> res.json(categories))
        .catch(err=> res.json(err))
})

router.post('/',(req,res)=>{
    const body=req.body
    const category=new Category(body)
    category.save()
    .then(category=> res.json(category))
    .catch(err=>res.json(err))
})

router.get('/:id',(req,res)=>{
    const body=req.body
    const id=req.params.id
    Category.findById(id)
    .then(category=> res.json(category))
    .catch(err=> res.json(err))
})

module.exports={
    categoryRouter:router
}