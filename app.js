const express=require("express")
const app=express()

app.get('/',(req,res)=>{
    res.status(201).send("get call")
})

module.exports=app

app.listen(3000,()=>{
    console.log("Server is running on 3000")
})
