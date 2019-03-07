<template>
  <div class="contact">
    <div class="card">
  <div class="card-header text-center">
   联系我们
  </div>
  <div class="card-body">
    <h5 class="card-title text-center">欢迎来到my-pizza 联系我们</h5>
    <p class="card-text text-center">这里有各种辣鸡的披萨</p>
    <p>
      <router-link to="/about/contact/address" class="btn btn-primary">地址信息</router-link>
      <router-link to="/about/contact/person" class="btn btn-primary">法人代表</router-link>
      <router-link to="/about/contact/telphone" class="btn btn-primary">联系电话</router-link>
       <router-view></router-view>     
    </p>
    
  </div>
</div>
   
  </div>
</template>
<script>
export default {
  name: "contact",

  data() {
    return {}
  }
};
</script scoped>
<style lang=''>
.btn{
  margin-left: 100px;
}
.card-body{
  height: 200px;
}
</style>