<template>
  <div class="registry container ">
  <form>
  <div class="form-group">
    
    <input type="email" class="form-control" v-model="username" id="exampleInputEmail1" placeholder="请输入账号">
  </div>
  <div class="form-group">
   
    <input type="password" class="form-control" v-model="password" id="exampleInputPassword1" placeholder="请输入密码">
  </div>
  <div class="form-group">
   
    <input type="password" class="form-control" v-model='repassword' id="exampleInputPassword1" placeholder="请再次确认输入密码">
  </div>
  <button type="submit" @click.prevent='onSubmit' class="btn btn-default btn-block btn-lg btn-primary">Sing up</button>
</form>
    <router-view></router-view>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  name: "registry",
  data() {
    return {
        username:'',
        password:'',
        repassword:''
    }
  },
  methods:{
      onSubmit(){
        if(this.password===this.repassword){
            var formData={
                username:this.username,
                password:this.password
            }
            axios.post('./user-xx.json',formData)
            .then(res=>{
                console.log('数据抛出成功')
                this.$router.push('/login')
            })
        }
      }
  }
};
</script>
<style lang=''>
.registry{
  width: 300px;
  margin: 0 auto;
  margin-top: 10%;
}


</style>