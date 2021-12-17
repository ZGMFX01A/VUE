<template>
  <div class="demo">
    <h1>{{ name }}</h1>
    <h2>{{ age }}</h2>
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
};
</script>
<style scoped>
.demo {
  background-color: #2e6da4;
  padding: 5px;
  margin-top: 30px;
}
</style>
