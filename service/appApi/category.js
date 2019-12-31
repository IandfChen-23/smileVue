const Koa=require('koa')
const mongoose=require('mongoose')
const Router=require('koa-router')
const fs=require('fs')
let router=new Router()
router.get('/insertAllCategory',async (ctx)=>{
    fs.readFile('./data_json/category.json','utf8',(err,data)=>{
        
        if(!err){
            data=JSON.parse(data)
            
            let saveCount=0
            const Category=mongoose.model('Category')
            data.map((val,index)=>{
                let newCategory=new Category(val);
                newCategory.save().then(()=>{
                    saveCount++;
                    console.log('插入数据成功',saveCount);
                }).catch((err)=>{
                    console.log(err);
                })
            })
        }
        
    })
    ctx.body='开始导入数据'
})
module.exports=router