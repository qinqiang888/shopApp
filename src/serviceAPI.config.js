const BASEURL = "https://www.easy-mock.com/mock/5c7dd08e9a73e31352e88034/api/"
const LOCALURL = "http://localhost:3000/"
const URL ={
    getShopingMallInfo : BASEURL+'shopList',    //商城首页所有信息
    getGoodsInfo : BASEURL+'getGoodsInfo', 
    registerUser : LOCALURL+'user/register',  //用户注册接口
    login : LOCALURL+'user/login',  //用户登录接口
}

export default URL;