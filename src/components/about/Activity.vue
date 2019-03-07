<template>
  <div class="activity">
   <div class="card mb-3" v-for='(item,index) in items' :key='index'>
  <img class="card-img-top" :src="item.imgSrc" alt="Card image cap">
  <div class="card-body">
    <h5 class="card-title">{{item.title}}</h5>
    <p class="card-text">{{item.activity}}</p>
    <p class="card-text"><small class="text-muted">{{item.ps}}</small></p>
  </div>
</div>
    <router-view></router-view>
    
  </div>
</template>
<script>
export default {
  name: "activity",

  data() {
    return {
       items:[
         {
           imgSrc:'../../../static/remen.jpg',
           title:'热门活动1',
           activity:'六一儿童节活动，买一送八',
           ps:'本活动解释权最终不解释'
         },
         {           
           imgSrc:'../../../static/pizza1.jpg',
           title:'热门活动2',
           activity:'母亲节活动，买一送十',
           ps:'本活动解释权最终不解释'
         
         }
       ]
    }
  }
};
</script>
<style scoped>
.card-group{
  width: 100% ;
  
}

</style>