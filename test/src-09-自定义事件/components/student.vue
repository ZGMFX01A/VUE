<template>
  <div class="demo">
    <h1>{{ name }}</h1>
    <h2>{{ age }}</h2>
    <button @click="sendStN">APP</button>
    <button @click="unbind">-app-</button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      name: "xx",
      age: "18",
    };
  },
  methods:{
    sendStN(){
      this.$emit('xk',this.name)
      this.$emit('demo')
    },
    unbind(){
      // this.$off('xk')
    this.$off(['xk','demo'])
    }
  }
};
</script>
<style scoped>
.demo{
  background-color: #2e6da4;
  padding: 5px;
  margin-top: 30px;
}
</style>

