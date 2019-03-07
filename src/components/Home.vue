<template>
  <div class="home container col-10">
    <div class="card bg-dark text-white">
      <div class="back">
        <p>本店有各种美味披萨</p>
        <p>欢迎拨打订购热线:400-800-8820 DHC 叮</p>
        <button type="button" class="btn btn-info " @click='Menu'>Menu</button>
      </div>
    </div>
    <router-view></router-view>
    <h3>历史订单</h3>
    <history class="his"></history>
    <h3>快递详情</h3>
    <delivery class="del"></delivery>
  </div>
</template>
<script>
import History from './about/History'
import Delivery from './about/Delivery'
export default {
  name: "home",

  data() {
    return {

    }
  },
  methods: {
    Menu(){
      this.$router.push('/menu')
    }
  },
  components:{
    'history':History,
    'delivery':Delivery
  }
};
</script scoped>
<style scoped>

.card{
 width: 100%;
  height: 857px;
  background: url('../../static/pizza.jpg') no-repeat center;
  position: relative;
}
.back{
  width: 400px;
  height: 200px;
  background:#ccc;
  opacity: 0.7;
  position:absolute;
  top:30%;
  left:30%;
}
p{
  font-size: 20px;
  text-align: center;
  color:orangered;
}
p:nth-child(1){
  padding-top: 50px;
}
.his{
  margin-top: 30px;
}
.del{
  margin-top: 30px;
}
h3{
  line-height: 30px;
}
.btn{
  margin-left: 150px;
}

</style>