const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let ObjectId=Schema.Types.ObjectId;
const bcrypt = require('bcrypt')
const SALT_WORK_FACTOR = 10

let UserSchema = new Schema({ 
    userid  :{type:ObjectId},       
    username : {unique:true, type: String },        //用户账号
    password: {type: String},                        //密码
    userage: {type: Number},                        //年龄
    logindate : { type: Date}                       //最近登录时间
});
UserSchema.pre('save', function(next){
    bcrypt.genSalt(SALT_WORK_FACTOR,(err,salt)=>{
        if(err) return next(err)
        bcrypt.hash(this.password,salt,(err,hash)=>{
            if(err) return next(err)
            this.password = hash
            next()
        })
    })
})
userSchema.methods={
    comparePassword:(_password,password)=>{
        return new Promise((resolve,reject)=>{
            bcrypt.compare(_password,password,(err,isMatch)=>{
                if(!err) resolve(isMatch)
                else reject(err)
            })
        })
    }
}

module.exports = mongoose.model('userInfo',UserSchema)