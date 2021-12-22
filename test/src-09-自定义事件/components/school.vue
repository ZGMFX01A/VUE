<template>
  <div class="demo">
    <h1>{{ name }}</h1>
    <h2>{{ address }}</h2>
    <button @click="sendScN">APP</button>
  </div>
</template>
<script>
export default {
  props:['getScN'],
  data() {
    return {
      name: "XXXXXXX",
      address: "123",
    }
  },
  methods:{
    sendScN(){
      this.getScN(this.name)
    }
  }
};
</script>
<style scoped>
.demo {
  background-color: darkcyan;
  padding: 5px;
}
</style>
