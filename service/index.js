const Koa=require('koa')
const App=new Koa()
const {connect,initSchemas} =require('./database/init.js')
const mongoose =require('mongoose')
App.use(async(res)=>{
    res.body='<h1>my first Koa2 api</h1>'

})
;(async()=>{
    await connect()
    initSchemas();
    const User = mongoose.model('User')
    let oneUser =new User({username:'qinqiang',password:'123456',userage:28})
    oneUser.save().then(()=>{
        console.log('插入成功')
        let wherestr = {'username' : 'qinqiang'};
        let updatestr = {'userage': '82'};
        User.update(wherestr,updatestr).then((res)=>{
            console.log(res)
        })
    })

})()
App.listen(3000,()=>{
    console.log('--------服务启动成功---------')
})