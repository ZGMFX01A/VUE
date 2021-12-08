<template>
  <li>
    <label>
      <input :checked="item.finish"
             type="checkbox"
             @change="handleCheck(item.id)"/>
      <span>{{ item.title }}</span>
    </label>
    <button class="btn btn-danger"
            @click="deleteItem(item.id)">删除
    </button>
  </li>
</template>

<script>
export default {
  name: "Item",
  props: ['item', 'checkItem', 'deleteTodo'],
  methods: {
    handleCheck(id) {
      this.checkItem(id)
    },
    deleteItem(id) {
      if (confirm('确定要删除吗？')) {
        this.deleteTodo(id)
      }
    }
  }
};
</script>

<style scoped>
/*item*/
li {
  list-style: none;
  height: 36px;
  line-height: 36px;
  padding: 0 5px;
  border-bottom: 1px solid #ddd;
}

li label {
  float: left;
  cursor: pointer;
}

li label li input {
  vertical-align: middle;
  margin-right: 6px;
  position: relative;
  top: -1px;
}

li button {
  float: right;
  display: none;
  margin-top: 3px;
}

li:before {
  content: initial;
}

li:last-child {
  border-bottom: none;
}

li:hover {
  background-color: aliceblue;
}

li:hover button {
  display: block;
}
</style>
