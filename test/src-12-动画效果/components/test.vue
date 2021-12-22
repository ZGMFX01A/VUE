<template>
  <div>
    <button @click="isShow=!isShow">显示/隐藏</button>
    <transition appear><h1 v-show="isShow">zxc</h1></transition>

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
}

.v-enter-active {
  animation: test 1s;
}

.v-leave-active {
  animation: test 1s reverse;
}

@keyframes test {
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0px);
  }

}
</style>