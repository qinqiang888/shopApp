<template>
    <div>
        <van-nav-bar
            title="用户注册"
            left-text="返回"
            left-arrow
            @click-left="goBack"
         />
         <div class="register-panel">
            <van-field 
                v-model="username"
                label="用户名"
                icon="clear"
                placeholder="请输入用户名"
                required
                @click-icon="username=''"
                :error-message="usernameErrorMsg"
            />

            <van-field 
                v-model="password"
                type="password"
                label="密码" 
                placeholder="请输入密码"
                required
                :error-message="passwordErrorMsg"
               
            />
            <div class="register-button">
                <van-button type="primary" @click="registerAction" size="large" :loading="openLoading">马上注册</van-button>
            </div>
         </div>
    </div>
</template>

<script>
    import axios from 'axios'
    import url from '@/serviceAPI.config.js'
    import { Toast } from 'vant'
    export default {
        data() {
            return {
                username: '',
                password: '',
                openLoading:false, //是否开启用户注册的Loading状态
                usernameErrorMsg:'',  //当用户名出现错误时的提示信息
                passwordErrorMsg:'',  //当密码出现错误时的提示信息
            }
        },
       methods: {
           goBack() {
               this.$router.go(-1)
           },
            registerAction(){
                this.checkForm() && this.axiosRegisterUser()
            },
           axiosRegisterUser(){
               this.openLoading=true;
               axios({
                   url:url.registerUser,
                   method: 'post',
                   data:{
                       username:this.username,
                       password:this.password
                   }
               })
               .then(response=>{
                   console.log(response)
                   if(response.data.status==1){
                       Toast.success(response.data.message)
                       this.openLoading=false
                       this.$router.push('/')
                   }else{
                       console.log(response.data.message)
                       this.openLoading=false
                       Toast.fail('注册失败')
                   }
               })
               .catch((error)=>{
                   console.log(error)
                   Toast.fail('注册失败')
                    this.openLoading=false
               })
           },
           //****表单验证方法
           checkForm(){
              let isOk = true
              if(this.username.length<5){
                  this.usernameErrorMsg = "用户名不能少于5位"
                  isOk=false
              }else{
                  this.usernameErrorMsg = ''
              } 
              if(this.password.length<6){
                  this.passwordErrorMsg = '密码不能少于6位'
                  isOk = false
              }else{
                  this.passwordErrorMsg = ''
              }
              return isOk
           } 
       }, 
    }
</script>

<style scoped>
    .register-panel{
        width:96%;
        border-radius: 5px;
        margin:20px auto;
        padding-bottom:80px;
    }
    .register-button{
        padding-top:10px;
    }
</style>