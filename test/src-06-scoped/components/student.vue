<template>
  <div class="test">
    <h1>{{ name }}</h1>
    <h2>{{ age }}</h2>
    
  </div>
</template>
<script>

export default {
  data() {
    return {
      name: "yy",
      age: "18",
    };
  },
};
</script>
<style scoped>
.test{
  background-color: blue;
}
</style>
