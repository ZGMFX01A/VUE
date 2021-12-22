<template>
  <ul class="todo-main">
    <transition-group name="item" appear>
    <Item v-for="todo in todos" :key="todo.id" :item="todo"/>
    </transition-group>
  </ul>
</template>

<script>
import Item from "@/components/Item";

export default {
  name: "List",
  components: {
    Item,
  },
  props: ['todos']
};
</script>

<style scoped>
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
.item-enter-active {
  animation: item 1s;
}

.item-leave-active {
  animation: item 1s reverse;
}

@keyframes item {
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0px);
  }
}
</style>
