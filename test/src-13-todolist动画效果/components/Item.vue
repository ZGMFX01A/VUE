<template>
    <li>
      <label>
        <input :checked="item.finish"
               type="checkbox"
               @change="handleCheck(item.id)"/>
        <span v-show="!item.isEdit">{{ item.title }}</span>
        <input v-show="item.isEdit" ref="inputEdit" :value="item.title" type="text" @blur="handleBlur(item,$event)">
      </label>
      <button class="btn btn-danger"
              @click="deleteItem(item.id)">删除
      </button>
      <button v-show="!item.isEdit" class="btn btn-edit" @click="handleEdit(item)">编辑</button>
    </li>
</template>

<script>
import pubsub from "pubsub-js";

export default {
  name: "Item",
  props: ['item'],
  methods: {
    handleCheck(id) {
      // this.checkItem(id)
      this.$bus.$emit('checkItem', id)
    },
    deleteItem(id) {
      if (confirm('确定要删除吗？')) {
        // this.deleteTodo(id)
        // this.$bus.$emit('deleteTodo',id)
        pubsub.publish('deleteTodo', id)
      }
    },
    handleEdit(item) {
      // eslint-disable-next-line no-prototype-builtins
      if (item.hasOwnProperty('isEdit')) {
        item.isEdit = true
      } else {
        this.$set(item, 'isEdit', true)
      }
      this.$nextTick(function () {
        this.$refs.inputEdit.focus()
      })
    },
    handleBlur(item, e) {
      item.isEdit = false
      if (!e.target.value.trim()) return alert("不为空")
      this.$bus.$emit('updateItem', item.id, e.target.value)
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
