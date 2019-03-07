<template>
  <div class="address">
    <h3>{{msg}}</h3>
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  data() {
    return {
        msg:'北京-中公教育-五方桥基地'
    }
  }
};
</script>
<style lang=''>
h3{
  text-align: center;
  line-height: 60px;
}

</style>