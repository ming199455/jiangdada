<template>
  <div class="telphone">
    <h3>{{msg}}</h3>
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  name: "telphone",
  data() {
    return {
      msg:'400-800-8820'
    }
  }
};
</script>
<style lang=''>


</style>