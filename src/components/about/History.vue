<template>
  <div class="history">
    <div class="card-group">
  <div class="card" v-for='(item,index) in items' :key='index'>
    <img class="card-img-top" :src="item.imgSrc" alt="Card image cap">
    <div class="card-body">
      <h5 class="card-title">{{item.title}}</h5>
      <p class="card-text">{{item.activity}}</p>
    </div>
    <div class="card-footer">
      <small class="text-muted">{{item.ps}}</small>
    </div>
  </div>
  
  
</div>
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  name: "history",

  data() {
    return {
       items:[
         {
           imgSrc:'../../../static/pizza1.jpg',
           title:'意大利披萨',
           activity:'已经支付完成',
           ps:'本活动解释权最终不解释'
         },
         {           
           imgSrc:'../../../static/pizza2.jpg',
           title:'水果王披萨',
           activity:'已经支付完成',
           ps:'本活动解释权最终不解释'
         
         },
          {           
           imgSrc:'../../../static/pizza3.jpg',
           title:'香蕉你个巴拉披萨',
           activity:'已经支付完成',
           ps:'本活动解释权最终不解释'
         
         }
       ]
    }
  }
};
</script>
<style lang=''>
img{
  height:50%;
}

</style>