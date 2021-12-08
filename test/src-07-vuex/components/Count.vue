<template>
  <div>
    <h1>和：{{ sum }}</h1>
    <h2>10倍：{{ bigSum }}</h2>
    <h3>我在：{{ address }}，学习：{{ subject }}</h3>
    <select v-model.number="n">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
    <button @click="add(n)">+</button>
    <button @click="reduce(n)">-</button>
    <button @click="odd(n)">当前求和为奇数再加</button>
    <button @click="wait(n)">等一等再加</button>
    <br>
    <span style="color: #5bc0de">下方列表项数:{{ persons.length }}</span>
  </div>
</template>

<script>
import {mapState, mapGetters, mapActions, mapMutations} from 'vuex'

export default {
  name: "Count",
  data() {
    return {
      n: 1
    }
  },
  computed: {

    //mapstate生成计算属性，从state中读取数据
    //mapstate对象写法
    // ...mapState({sum:'sum',address:'address',subject:'subject'})

    //mapstate数组写法
    ...mapState(['sum', 'address', 'subject', "persons"]),

    //mapGetters对象写法
    // ...mapGetters({bigSum:'bigSum'})
    //mapGetters数组写法
    ...mapGetters(['bigSum'])
  },
  methods: {
    // add(){
    //   this.$store.commit('add',this.n)
    // },
    // reduce(){
    //   this.$store.commit('reduce',this.n)
    // },
    //借助mapMutations生成对应的方法，方法中会调用commit去联系mutation
    //对象写法
    // ...mapMutations({add:'add',reduce:'reduce'}),
    //数组写法
    ...mapMutations(['add', 'reduce']),
    // odd(){
    //     this.$store.dispatch('odd',this.n)
    // },
    // wait(){
    //     this.$store.dispatch('wait',this.n)
    // }
    //借助mapActions生成对应的方法，方法中会调用dispatch去联系action
    ...mapActions({odd: 'odd', wait: 'wait'})
  },
  mounted() {
    console.log(this.$store)
  }
}
</script>

<style scoped>

</style>