const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let ObjectId=Schema.Types.ObjectId;

let UserSchema = new Schema({ 
    userid  :{type:ObjectId},       
    username : {unique:true, type: String },        //用户账号
    password: {type: String},                        //密码
    userage: {type: Number},                        //年龄
    logindate : { type: Date}                       //最近登录时间
});
module.exports = mongoose.model('userInfo',UserSchema)