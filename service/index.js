const Koa=require('koa')
const App=new Koa()
const {connect,initSchemas} =require('./database/init.js')
const bodyParser = require('koa-bodyparser')
const cors = require('koa2-cors')
const mongoose =require('mongoose')
const Router =require("koa-router")
let userinfo=require('./controller/userinfo.js')
let router =new Router()
console.log(userinfo.routes)
App.use(bodyParser())
App.use(cors())

router.use('/user',userinfo.routes())
App.use(router.routes())
App.use(router.allowedMethods())
App.use(async(res)=>{
    res.body='<h1>my first Koa2 api </h1>'

})
// ;(async()=>{
//     await connect()
//     initSchemas();
//     const userInfo = mongoose.model('userInfo')
//     let oneUser =new userInfo({username:'admin',password:'123456',userage:27})
//     oneUser.save().then(()=>{
//         console.log('插入成功')
//     })
//     let user=await userInfo.findOne({username:'mary'}).exec()
//     console.log('------------------------------')
//     console.log(user)

// })()
App.listen(3000,()=>{
    console.log('--------服务启动成功---------')
})