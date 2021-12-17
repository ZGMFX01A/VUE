<template>
  <div class="demo">
    <h1>{{ name }}</h1>
    <h2>{{ address }}</h2>
  </div>
</template>
<script>
export default {
  data() {
    return {
      name: "xx",
      address: "123",
    };
  },
};
</script>
<style scoped>
.demo {
  background-color: darkcyan;
  padding: 5px;
}
</style>
