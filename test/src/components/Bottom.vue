<template>
  <div v-show="total" class="todo-footer">
    <label>
      <!--      <input type="checkbox" :checked="AllCheck" @change="checkAll"/>-->
      <input v-model="AllCheck" type="checkbox"/>
    </label>
    <span> <span>{{ finishTotal }}</span> / 全部{{ total }}</span>
    <button class="btn btn-danger" @click="clearAll">清除已完成任务</button>
  </div>
</template>

<script>
export default {
  name: "Bottom",
  props: ['todos'],
  computed: {
    total() {
      return this.todos.length
    },
    // finishTotal() {
    //   let i = 0
    //   this.todos.forEach((todo) => {
    //     if (todo.finish) i++
    //   })
    //   return i
    // }
    finishTotal() {
      return this.todos.reduce((pre, todo) =>
          pre + (todo.finish ? 1 : 0), 0
      )
    },
    // AllCheck(){
    //   return this.finishTotal===this.total&&this.total>0
    // }
    AllCheck: {
      get() {
        return this.finishTotal === this.total && this.total > 0
      },
      set(value) {
        // this.checkAllItem(value)
        this.$emit('checkAllItem', value)
      }
    }
  },
  methods: {
    checkAll(e) {
      this.checkAllItem(e.target.checked)
    },
    clearAll() {
      // this.clearAllItem()
      this.$emit('clearAllItem')
    }
  }
};
</script>

<style scoped>
/*footer*/
.todo-footer {
  height: 40px;
  line-height: 40px;
  padding-left: 6px;
  margin-top: 5px;
}

.todo-footer label {
  display: inline-block;
  margin-right: 20px;
  cursor: pointer;
}

.todo-footer label input {
  position: relative;
  top: -1px;
  vertical-align: middle;
  margin-right: 5px;
}

.todo-footer button {
  float: right;
  margin-top: 5px;
}
</style>
