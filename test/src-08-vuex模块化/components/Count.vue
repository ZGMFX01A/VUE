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


    ...mapState('CountOp', ['sum', 'address', 'subject']),
    ...mapState('PersonOp', ["persons"]),


    ...mapGetters('CountOp', ['bigSum'])
  },
  methods: {

    ...mapMutations('CountOp', ['add', 'reduce']),

    ...mapActions('CountOp', {odd: 'odd', wait: 'wait'})
  },
  mounted() {
    console.log(this.$store)
  }
}
</script>

<style scoped>

</style>