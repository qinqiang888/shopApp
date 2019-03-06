const Koa=require('koa')
const App=new Koa()
const {connect} =require('./database/init.js')
App.use(async(res)=>{
    res.body='<h1>my first Koa2 api</h1>'

})
;(async()=>{
    await connect()
})()
App.listen(3000,()=>{
    console.log('--------服务启动成功---------')
})