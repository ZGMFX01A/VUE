<template>
  <div class="main">
    <Category title="美食">
      <img slot="top" src="public/favicon.ico">
      <a slot="bottom" href="www.baidu.com">123</a>
    </Category>
    <Category title="游戏">
      <ul slot="top">
        <li v-for="(g,index) in games" :key="index">{{ g }}</li>
      </ul>
      <a slot="bottom" href="www.baidu.com">456</a>
      <a slot="bottom" href="www.baidu.com">789</a>
    </Category>
    <Category title="电影">
      <video slot="top" controls src=""></video>
      <template v-slot:bottom>
        <div class="foot">
          <a href="">X</a>
          <a href="">Y</a>
          <a href="">Z</a>
        </div>
        <h4>123</h4>
      </template>
    </Category>
  </div>
</template>

<script>
import Category from "@/components/Category";

export default {
  components: {
    Category
  },
  data() {
    return {
      foods: ['火锅', '烧烤', '小龙虾'],
      games: ['红色警戒', '穿越火线', '劲舞团'],
      films: ['《教父》', '《拆弹专家》', '《你好，李焕英》']
    }
  }
}
</script>

<style>
.main,.foot{
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