exports.home=((req,res)=>{
    res.render('home',{
        title:'Home',
        user:{
            name: 'sayandeep',
            email:'sayandeepdey8@gmail.com'
        }
    })
})

exports.about=((req,res)=>{
    res.render('about',{
        title:'About',
        content:{
            paragraph:`Hello this is Sayandeep`
        }
    })
})

