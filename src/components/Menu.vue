<template>
  <div class="menu container row">
    <div class="col-7">
      <table class="table table-striped">
        <thead>
          <tr class="text-center">
            <th scope="col">菜单</th>
            <th scope="col">数量</th>
            <th scope="col">尺寸</th>
            <th scope="col">价格</th>
          </tr>
        </thead>
        <tbody>
          <tr class="text-center" v-for="(item,index) in pizza" :key="index">
            <th>{{item.name}}</th>
            <td>
              <select name id v-model="item.size">
                <option value="7寸">7寸</option>
                <option value="12寸">12寸</option>
              </select>
            </td>
            <td>{{item.price}}</td>
            <td>
              <button class="btn btn-success" @click="add(item,item.price)">+</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="col-5">
      <table class="table table-striped" v-if='newPizza.length>0'>
        <thead>
          <tr class="text-center">
            <th scope="col">菜单</th>
            <th scope="col">数量</th>
            <th scope="col">尺寸</th>
            <th scope="col">价格</th>
          </tr>
        </thead>
        <tbody>
          <tr class="text-center" v-for="(item,index) in newPizza" :key="index">
            <td>{{item.name}}</td>
            <td>
              <button @click="jian()">-</button>
              {{item.num}}
              <button @click="jia(item)">+</button>
            </td>
            <td>{{item.size}}</td>
            <td>{{item.price}}</td>
          </tr>
        </tbody>
        <tfoot>
          <tr class="tr">
            <td colspan="4">商品总件数:{{comput1}}</td>
          </tr>
          <tr class="tr">
            <td colspan="4">商品价格:{{comput}}</td>
          </tr>
        </tfoot>
      </table>
      <table v-else>
        <tr>
          <th class="bg-info" colspan="5"><h3>空空如也，啥都没有</h3></th>
        </tr>
      </table>
    </div>
    <router-view></router-view>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      pizza: [],
      newPizza: []
    };
  },
  methods: {
    add(item, a) {
      var result = this.newPizza.filter(items => {
        return item.name == items.name && item.size == items.size;
      });
      if (result != null && result.length > 0) {
        result[0].num++;
      } else {
        this.newPizza.push({
          name: item.name,
          num: 1,
          size: item.size,
          price: item.price
        });
      }
    },
    jia(item) {
      if (item.num >= 10) {
        item.num = 10;
      } else {
        item.num++;
      }
    },
     jian() {
     this.newPizza.map((item,index)=>{
       if(item.num<=1){
         this.newPizza.splice(index,1)
       }else{
         item.num--
       }
     })
    }
  },
  computed: {
    comput() {
      return this.newPizza.reduce((prev, cur) => {
        return prev + cur.num * cur.price;
      }, 0);
    },
    comput1() {
      return this.newPizza.reduce((prev, cur) => {
        var sum = 0;
        return (sum += prev + cur.num);
      }, 0);
    }
  },
  mounted() {
    axios.get("./user.json").then(res => {
      this.pizza = res.data;
    });
  }
};
</script>
<style lang=''>
.ipt {
  width: 40px;
}
.menu {
  margin-left: 80px;
}
.tr {
  text-align: right;
}


</style>