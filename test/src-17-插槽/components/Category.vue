<template>
  <div class="category">
    <h3>{{title}}分类</h3>
    <slot name="top"></slot>
    <slot name="bottom"></slot>
  </div>
</template>

<script>
export default {
  name: "Category",
  props: ['listData', 'title']
}
</script>

<style scoped>
.category {
  background-color: #5bc0de;
  width: 200px;
  height: 300px;
}

h3 {
  text-align: center;
  background-color: white;
}
</style>