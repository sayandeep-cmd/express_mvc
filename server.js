const express=require('express')
const app=express()
const router=require('./Router/homerouter')

const ejs=require('ejs')
app.set("view engine",'ejs')
app.set('views')

//static page create
app.use(express.static('public'))
app.use(router)

const port=5000
app.listen(port,(error)=>{
    if(!error){
        console.log(`server running at http://localhost:${port}`);
    }else{
        console.log('error');
    }
})