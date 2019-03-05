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
            <img v-lazy="banner.image" width="100%"/>
        </van-swipe-item>
    </van-swipe>
    </div>
    <!-- type-bar -->
    <div class="type-bar">
    <div  v-for="(cate,index) in category" :key="index" >
            <img v-lazy="cate.image" width="90%" />
            <span>{{cate.mallCategoryName}}</span> 
    </div>
    </div>
    <!-- ad-banner -->
    <div class="ad-banner">
        <img v-lazy="adBanner" width="100%">
    </div>
    <!--Recommend goods area-->
    <div class="recommend-area">
        <div class="recommend-title">
            商品推荐
        </div>
        <div class="recommend-body">
            <swiper :options="swiperOption">
                <swiper-slide v-for="(item,index) in recommendGoods " :key="index" >
                    <div class="recommend-item">
                        <img :src="item.image" width="80%">
                        <div>{{item.goodsName}}</div>
                        <div>￥{{item.price | moneyFilter}}(￥{{item.mallPrice  | moneyFilter}})</div>
                    </div>
                </swiper-slide> 
            </swiper>
        </div>
    </div>
    <floor-component :floorData="floor1" :floorTitle="floorName.floor1"></floor-component>
    <floor-component :floorData="floor2" :floorTitle="floorName.floor2"></floor-component>
    <floor-component :floorData="floor3" :floorTitle="floorName.floor3"></floor-component>
</div>
</template>

<script>
import axios from 'axios'
  import 'swiper/dist/css/swiper.css'
    import {swiper , swiperSlide} from 'vue-awesome-swiper'
    import floorComponent from '../component/floorComponent'
    import { toMoney } from '@/filter/moneyFilter.js'
    export default {
        data() {
            return {
                msg: 'shopApp',
                 swiperOption:{
                    slidesPerView:3
                },
                locationIcon:require('../../assets/images/location.png'),
                 bannerPicArray:[
                    {imageUrl:'http://h.hiphotos.baidu.com/image/pic/item/cefc1e178a82b901fd40c8077d8da9773912ef11.jpg'},
                    {imageUrl:'http://b.hiphotos.baidu.com/image/pic/item/78310a55b319ebc4cee036bd8c26cffc1e17167d.jpg'},
                    {imageUrl:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1552315885&di=a985080247548e256fc87a6212ebef0c&imgtype=jpg&er=1&src=http%3A%2F%2Fimage.17173.com%2Fbbs%2Fv1%2F2010%2F09%2F08%2F1283947526539.jpg'},
                 ],
                 category:[],
                 adBanner:'',
                 recommendGoods:[],
                 floor1:[],
                 floor2:[],
                 floor3:[],
                 floorName:{},
                 hotGoods:[],  //热卖商品
            }
        },
        filters:{
            moneyFilter(money){
                return toMoney(money)
            }
        },
        components:{swiper,swiperSlide,floorComponent},
        created(){
            axios({
                url: 'https://www.easy-mock.com/mock/5c7dd08e9a73e31352e88034/api/shopList',
                method: 'get',
            })
            .then(response => {
                this.category=response.data.data.category;
                this.bannerPicArray=response.data.data.slides;
                this.adBanner = response.data.data.advertesPicture.PICTURE_ADDRESS;
                this.recommendGoods = response.data.data.recommend;
                this.floor1 = response.data.data.floor1;
                this.floor2 = response.data.data.floor2;
                this.floor3 = response.data.data.floor3;
                this.floorName = response.data.data.floorName;
                this.hotGoods = response.data.data.hotGoods;
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
        height:2.2rem;
        background-color: #e5017d;
        line-height: 2.2rem;
        overflow: hidden;
    }
    .search-input{
        width:100%;
        height: 1.3rem;
        border-top:0px;
        border-left:0px;
        border-right:0px;
        border-bottom:1px solid #fff !important;
        background-color: #e5017d;
        color:#fff;
    }
    .location-icon{
        padding-top:.2rem;
        padding-left:.3rem;
    }
    .swiper-area{
        clear:both;
        max-height:15rem;
        overflow: hidden;
    }
    .type-bar{
        background-color: #fff;
        margin:0 .3rem .3rem .3rem;
        border-radius: .3rem;
        font-size:14px;
        display:flex;
        flex-direction:row;
        flex-wrap:nowrap;
    }
    .type-bar div{
        padding:.3rem;
        font-size:12px;
        text-align: center;
        flex:1;
    }
</style>