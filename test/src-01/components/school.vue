<template>
  <div class="demo">
    <h1>{{ name }}</h1>
    <h2>{{ address }}</h2>
    <button @click="show">xxxx</button>
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
  methods: {
    show() {
      alert(this.name);
    },
  },
};
</script>
<style>
.demo {
  background-color: darkcyan;
}
</style>
