const express=require('express')
const router=express.Router()
const HomeController=require('../Controller/Homecontroller')

router.get('/',HomeController.home)
router.get('/about',HomeController.about)
router.get('/post',HomeController.post)


module.exports=router