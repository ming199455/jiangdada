<template>
  <div class="login text-center">
    <form>
  <div class="form-group">    
    <input type="email" class="form-control" v-model="username" id="exampleInputEmail1" placeholder="请输入账号">
  </div>
  <div class="form-group">  
    <input type="password" class="form-control" v-model='password' id="exampleInputPassword1" placeholder="请输入密码">
  </div>
  <button type="submit" @click.prevent="onSubmit" class="btn btn-default  btn-success">Login</button>
</form>
    <router-view></router-view>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  name: "login",

  data() {
    return {
      username:'',
      password:''
    }
  },
  methods:{
    onSubmit(){
      axios.get('user-xx.json')
      .then((res)=>{
        var result = []
        for(var key in res.data){
          var user = res.data[key]
          result.push(user)
        }
        console.log(result)
        var trueUser = result.filter((item)=>{
          return item.username == this.username && item.password==this.password
        })
        console.log(trueUser)
        if(trueUser!=null && trueUser.length>0){
          alert('登录成功')
          this.$router.push('/admin')
        }else{
          alert('小王八羔子，别浑水摸鱼')
        }
      })
    }
  }
};
</script>
<style lang=''>
.login{
  width: 300px;
  margin: 0 auto;
  margin-top: 10%;
}

</style>