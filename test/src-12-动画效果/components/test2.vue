<template>
  <div>
    <button @click="isShow=!isShow">显示/隐藏</button>
    <transition-group appear name="test">
      <h1 v-show="!isShow" key="1">zxc</h1>
      <h1 v-show="isShow" key="2">xyz</h1>
    </transition-group>
  </div>
</template>

<script>
export default {
  name: "test",
  data() {
    return {
      isShow: true
    }
  }
}
</script>

<style scoped>
h1 {
  background-color: #5bc0de;
  transition: 0.5s
 linear;
}
.test-enter,.test-leave-to{
  transform: translateX(-100%);
}
.test-enter-to,.test-leave{
  transform: translateX(0);
}





</style>