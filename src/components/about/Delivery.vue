<template>
  <div class="history">
    <div class="card-group text-center">
  <div class="card" v-for='(item,index) in items' :key='index'>
    <img class="card-img-top" :src="item.imgSrc" alt="Card image cap">
    <div class="card-body">
      <h5 class="card-title">{{item.title}}</h5>
      <p class="card-text">{{item.activity}}</p>
      <button type="button" class="btn btn-primary" @click="xiangqing">查询快递详情</button>
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
           imgSrc:'../../../static/del-sf.png',
           title:'您的快递已经被飞飞吃掉了',
          
          
         },
         {           
           imgSrc:'../../../static/del-yt.jpg',
           title:'您的快递已经被飞飞吃掉了',
           
         
         },
          {           
           imgSrc:'../../../static/del-zt.jpg',
           title:'您的快递已经被飞飞吃掉了',
           
         }
       ]
    }
  },
  methods:{
    xiangqing(){
      alert('说了被吃掉了，详情你妹啊')
    }
  }
};
</script scoped>
<style lang=''>
img{
  height:50%;
}

</style>