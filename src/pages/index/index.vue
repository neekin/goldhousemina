<template>
   <div class="container">
      <!-- <swiper
        autoplay="true"
        interval="2000"
        duration="1000"
        indicatorDots="true"
        circular="true"
        indicator-color='#0094ff'
      >
         <swiper-item  v-for='item in ads'>
              <img :src="item.path.thumb.url" alt="">
          </swiper-item>
      </swiper> -->
     <Button openType="getUserInfo" lang="zh_CN" @getuserinfo="onGotUserInfo">
  获取用户信息
</Button>
   </div>
</template>

<script>
import card from '@/components/card'
import { getAds,login } from '@/api/index'
import { alert } from '@/utils/alert'
export default {
  data () {
    return {
      userInfo: {},
      ads:[]
    }
  },

  components: {
    card
  },


  methods: {
    onGotUserInfo(e){
    var data = e.target.userInfo;
    wx.login({
      success:function(res){
        if(!res.code){
          alert({title:'登录失败',icon:'none'})
            return
        }
          data['code']= res.code
          login(data).then(res=>{
            alert({title:res.msg})
          })
      }
    })
      //  login(e.target.userInfo)

    },
   indexgetAds(){
    //      getAds().then(res=>{
    //        res.filter((e,i)=>{
    //             e.path.thumb.url = 'http://localhost:3000'+ e.path.thumb.url
    //        })
    //      this.ads = res;
    //      console.log(this.ads);
    //  })
 
    }
  },

   created () {
    // 调用应用实例的方法获取全局数据
     this.indexgetAds();

  }
}
</script>

<style scoped>
swiper{
  height:400rpx;
  width: 750rpx;
}
swiper image{
  width:100%;
}
</style>
