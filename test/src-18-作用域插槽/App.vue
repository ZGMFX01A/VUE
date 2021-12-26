<template>
  <div class="main">
    <Category title="游戏">
     <template scope="xxx">
       <ul>
         <li v-for="(g,index) in xxx.games" :key="index">{{g}}</li>
       </ul>
     </template>
    </Category>
    <Category title="游戏">
      <template scope="{games}">
      <ol>
        <li v-for="(g,index) in games" :key="index">{{ g }}</li>
      </ol>
      </template>
    </Category>
    <Category title="游戏">
      <template scope="{games}">
          <h3 v-for="(g,index) in games" :key="index">{{ g }}</h3>
      </template>
    </Category>

  </div>
</template>

<script>
import Category from "@/components/Category";

export default {
  components: {
    Category
  }
}
</script>

<style>
.main{
  display: flex;
  justify-content: space-around;
}
video{
  width: 100%;
}
h4{
  text-align: center;
}
</style>