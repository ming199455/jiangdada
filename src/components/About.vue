<template>
   <div class="about container row mt-5">
    <div class="col-4">
        <router-link to="/about/activity" class="mb-3 text-center list-group-item list-group-item-action list-group-item-success">热门活动</router-link>
        <router-link to="/about/contact" class="mb-3 text-center list-group-item list-group-item-action list-group-item-danger">联系我们</router-link>
        <router-link to="/about/history" class="mb-3 text-center list-group-item list-group-item-action list-group-item-warning">历史订单</router-link>
        <router-link to="/about/delivery" class="mb-3 text-center list-group-item list-group-item-action list-group-item-info">快递信息</router-link> 
    </div>
     <div class="col-8">
       <router-view />
     </div>   
  </div>
</template>
<script>
export default {
    name:'about',  
        data(){
            return{
           
            }
        }
    
}
</script>
<style lang=''>
    
</style>