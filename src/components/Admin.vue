<template>
  <div class="admin container row">
    <div class="col-7">
      品牌<input type="text" class="form-control text-succes" placeholder="请输入商品类型" v-model="newPizza.name">
      商品详情<textarea name="" id="" cols="85" rows="3" placeholder="商品详情描述" v-model="newPizza.details"></textarea>
      <h3>尺寸&品牌</h3>
      <div>
      尺寸：<select name="" id="" v-model="newPizza.size">
          <option value="">请选择尺寸</option>
          <option value="7寸">7寸</option>
          <option value="10寸">10寸</option>
          <option value="12寸">12寸</option>
          <option value="寸">15寸</option>
      </select><span class="span">价格 : <input type="text" v-model="newPizza.price"></span>
      </div>
      <div class="size">
           尺寸：<select name="" id="" v-model="newPizza.size1">
          <option value="">请选择尺寸</option>
          <option value="7寸">7寸</option>
          <option value="10寸">10寸</option>
          <option value="12寸">12寸</option>
          <option value="15寸">15寸</option>
      </select><span class="span">价格 : <input type="text" v-model='newPizza.price1'></span>
      </div>
      <button type="button" class="btn btn-primary btn-lg btn-block" @click="add()">添加</button>

    </div>
    <div class="col-5">
     <table class="table">
  <thead class="thead-dark">
    <tr>
      <th scope="col">ID</th>
      <th scope="col">菜品</th>
      <th scope="col">操作</th>
      
    </tr>
  </thead>
  <tbody>
    <tr v-for="(item,index) in items" :key='index'>
      <th scope="row">{{index+1}}</th>
      <td>{{item.name}}</td>     
      <td><button class="btn-danger" @click="del(item.id)">DELETE</button></td>
    </tr>
  </tbody>
</table>
    </div>
    <router-view></router-view>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  name: "admin",
  data() {
    return {       
        newPizza:{},
        items:[]
    }
  },
  methods: {
   add(){
       var fromData={
           name:this.newPizza.name,
           details:this.newPizza.details,
           size:this.newPizza.size,
           price:this.newPizza.price,
           size1:this.newPizza.size1,
           price1:this.newPizza.price1
       }
       axios.post('./user.json',fromData)
       .then((res)=>{
          alert('商品添加成功')
         location.reload()
       })
    
     } ,
     del(id){
         console.log(id);
         axios.delete('./user/'+id+'.json')
         .then((res)=>{
             alert('删除成功')
             location.reload()
         })
     } 
  },
  mounted(){
      axios.get('./user.json')
      .then((res)=>{
      for(var key in res.data){
        var item = res.data[key]
        console.log(key)
        item.id=key
        this.items.push(item);
        console.log(this.items)
      }
      })
  }
};
</script>
<style scoped>
.admin{
    margin-left: 80px;
}
.form-control{
    margin-bottom: 30px;
}
h3{
    margin-top: 30px;
}
.span{
    margin-left: 30px;
}
.size{
    margin-top: 40px;
}
.btn{
    margin-top: 30px;
}
</style>