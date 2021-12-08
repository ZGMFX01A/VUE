<template>
  <div id="root">
    <div class="todo-container">
      <div class="todo-wrap">
        <Top :addTodo="addTodo"/>
        <List :checkItem="checkItem" :deleteTodo="deleteTodo" :todos="todos"/>
        <Bottom :todos="todos"/>
      </div>
    </div>
  </div>
</template>

<script>
import Top from "@/components/Top";
import List from "@/components/List";
import Bottom from "@/components/Bottom";

export default {
  name: 'App',
  components: {
    Top,
    List,
    Bottom,
  },
  data() {
    return {
      todos: [
        {id: '001', title: '吃饭', finish: true},
        {id: '020', title: '睡觉', finish: true},
        {id: '003', title: '游戏', finish: false}
      ]
    }
  },
  methods: {
    addTodo(item) {
      this.todos.unshift(item)
    },
    checkItem(id) {
      this.todos.forEach((todo) => {
        if (todo.id === id) todo.finish = !todo.finish
      });
    },
    deleteTodo(id) {
      this.todos = this.todos.filter((todo) => {
        return todo.id !== id
      })
    }
  }
}
</script>

<style>
/*base*/
body {
  background: #fff;
}

.btn {
  display: inline-block;
  padding: 4px 12px;
  margin-bottom: 0;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2), 0 1px 2px rgba(0, 0, 0, 0.05);
  border-radius: 4px;
}

.btn-danger {
  color: #fff;
  background-color: #da4f49;
  border: 1px solid #bd362f;
}

.btn-danger:hover {
  color: #fff;
  background-color: #bd362f;
}

.btn:focus {
  outline: none;
}

.todo-container {
  width: 600px;
  margin: 0 auto;
}

.todo-container .todo-wrap {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}

/*main*/
.todo-main {
  margin-left: 0px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding: 0px;
}

.todo-empty {
  height: 40px;
  line-height: 40px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding-left: 5px;
  margin-top: 10px;
}
</style>