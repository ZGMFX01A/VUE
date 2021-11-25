<template>
  <div class="demo">
    <h1>{{ name }}</h1>
    <h2>{{ age }}</h2>
    <button @click="show">xxxx</button>
  </div>
</template>
<script>
import mixin from '@/mixin'
export default {
  data() {
    return {
      name: "xx",
      age: "18",
    };
  },
  mixins:[mixin]
};
</script>

