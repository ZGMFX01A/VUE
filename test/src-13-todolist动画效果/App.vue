<template>
  <div id="root">
    <div class="todo-container">
      <div class="todo-wrap">
        <Top @addTodo="addTodo"/>
        <List :todos="todos"/>
        <Bottom :todos="todos" @checkAllItem="checkAllItem" @clearAllItem="clearAllItem"/>
      </div>
    </div>
  </div>
</template>

<script>
import Top from "@/components/Top";
import List from "@/components/List";
import Bottom from "@/components/Bottom";
import pubsub from 'pubsub-js'

export default {
  name: 'App',
  components: {
    Top,
    List,
    Bottom,
  },
  data() {
    return {
      todos: JSON.parse(localStorage.getItem('todos')) || []
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
    deleteTodo(_, id) {
      this.todos = this.todos.filter((todo) => {
        return todo.id !== id
      })
    },
    checkAllItem(finish) {
      this.todos.forEach((item) => {
        item.finish = finish
      })
    },
    clearAllItem() {
      this.todos = this.todos.filter((item) => {
        return !item.finish
      })
    },
    updateItem(id, title) {
      this.todos.forEach((item) => {
        if (item.id === id) item.title = title
      })
    }
  },
  watch: {
    todos: {
      deep: true,
      handler(value) {
        localStorage.setItem('todos', JSON.stringify(value))
      }
    }
  },
  mounted() {
    this.$bus.$on('checkItem', this.checkItem)
    this.$bus.$on('updateItem', this.updateItem)
    this.pudId = pubsub.subscribe('deleteTodo', this.deleteTodo)
  },
  beforeDestroy() {
    this.$bus.$off('checkItem')
    this.$bus.$off('updateItem')
    pubsub.unsubscribe(this.pudId)
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

.btn-edit {
  color: #f9f9f9;
  background-color: #5bc0de;
  border: 1px solid aquamarine;
  margin-right: 5px;
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