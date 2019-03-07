<template>
  <div class="person">
    <h3>{{msg}}</h3>
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  data() {
    return {
         msg:'宇宙无敌最强小绿豆'
    }
  }
};
</script>
<style lang=''>


</style>