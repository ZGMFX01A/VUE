<template>
  <div class="demo">
    <h1>{{ name |xx}}</h1>
    <h2>{{ address }}</h2>
    <input type="text" v-fbind:value="name">
   
  </div>
</template>
<script>
export default {
  data() {
    return {
      name: "zxcvbnm",
      address: "123",
    };
  },
};
</script>
<style>
.demo {
  background-color: darkcyan;
}
</style>
