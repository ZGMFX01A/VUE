<template>
  <div>
    <ul>
      <li v-for="item in messageList" :key="item.id">
        <router-link :to="{
        path:'/home/message/detail',
        query:{id:item.id,title:item.title}
        }">{{ item.title }}
        </router-link>
        <button @click="pushShow(item)">push查看</button>
        <button @click="replaceShow(item)">replace查看</button>
      </li>
    </ul>
    <hr>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "Message",
  data() {
    return {
      messageList: [
        {
          id: '001', title: '消息001'
        },
        {
          id: '002', title: '消息002'
        },
        {
          id: '003', title: '消息003'
        },
        {
          id: '004', title: '消息004'
        },
      ]
    }
  },
  methods: {
    pushShow(item) {
      this.$router.push({
        path: '/home/message/detail',
        query: {id: item.id, title: item.title}
      })
    },
    replaceShow(item) {
      this.$router.replace({
        path: '/home/message/detail',
        query: {id: item.id, title: item.title}
      })
    },
  }
}
</script>

<style scoped>

</style>