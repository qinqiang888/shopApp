<template>
<div>
    <div class="search-bar">
        <van-row gutter="5">
            <van-col span="3">
                <img :src="locationIcon" width="80%" class="location-icon">  

            </van-col>
            <van-col span="16">
                <input type="text" class="search-input"/>
            </van-col>
            <van-col span="5">
                <van-button type="default" width="100%">搜索</van-button>
            </van-col>
        </van-row>
     </div>
    <!-- swiper -->
    <div class="swiper-area">
    <van-swipe :autoplay="1000">
        <van-swipe-item v-for="(banner,index) in bannerPicArray" :key="index">
            <img :src="banner.imageUrl" width="100%"/>
        </van-swipe-item>
    </van-swipe>
    </div>
    <!-- type-bar -->
    <div class="type-bar">
    <div  v-for="(cate,index) in category" :key="index" >
            <img :src="cate.image" width="90%" />
            <span>{{cate.mallCategoryName}}</span> 
    </div>
    </div>
</div>
</template>

<script>
import axios from 'axios'
    export default {
        data() {
            return {
                msg: 'shopApp',
                locationIcon:require('../../assets/images/location.png'),
                 bannerPicArray:[
                    {imageUrl:'http://h.hiphotos.baidu.com/image/pic/item/cefc1e178a82b901fd40c8077d8da9773912ef11.jpg'},
                    {imageUrl:'http://b.hiphotos.baidu.com/image/pic/item/78310a55b319ebc4cee036bd8c26cffc1e17167d.jpg'},
                    {imageUrl:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1552315885&di=a985080247548e256fc87a6212ebef0c&imgtype=jpg&er=1&src=http%3A%2F%2Fimage.17173.com%2Fbbs%2Fv1%2F2010%2F09%2F08%2F1283947526539.jpg'},
                 ],
                 category:[],
            }
        },
        created(){
            axios({
                url: 'https://www.easy-mock.com/mock/5c7dd08e9a73e31352e88034/api/shopList',
                method: 'get',
            })
            .then(response => {
                this.category=response.data.data.category;
            })
            .catch((error) => {     
            })
        },
        mounted(){
            
        }
    }
</script>

<style scoped>
 .search-bar{
      height: 2.2rem;
      background-color: #e5017d;
      line-height:2.2rem;
      overflow: hidden;
  }
.search-input{
      width:100%;
      height: 1.3rem;
      border-top:0px;
      border-left:0px;
      border-right:0px;
      border-bottom: 1px solid 1px !important ;
      background-color: #e5017d;
      color:#fff;
  }
  .location-icon{
      padding-top: .2rem;
      padding-left: .3rem;
  }
  .swiper-area{
      clear: both;
      max-height: 10rem;
      overflow: hidden;
  }
   .type-bar{
      background-color: #fff;
      margin:0 .3rem .3rem .3rem;
      border-radius: .3rem;
      font-size:14px;
      display: flex;
      flex-direction:row;
      flex-wrap:nowrap;
  }
  .type-bar div{
      padding: .3rem;
      font-size: 12px;
      text-align: center;
  }
</style>