<template>
  <div class="app">
    <h1>{{ msg }}</h1>
    <h2>{{stName}}</h2>
    <school :getScN="getScN"/>
    <student v-on:xk="getStN" @demo="a"/>
    <!--    <student ref="student"/>-->
  </div>
</template>

<script>
import school from './components/school'
import Student from './components/student.vue'

export default {
  components: {
    school,
    Student
  },
  data() {
    return {
      msg: 'xxxxx',
      stName:''
    }
  },
  methods: {
    getScN(name) {
      console.log(name)
    },
    getStN(name) {
      console.log(name)
      this.stName=name
    },
    a(){
      console.log('a')
    }
  },
  mounted() {
    // this.$refs.student.$on('xk',this.getStN)
  }
}
</script>

<style scoped>
.app {
  background-color: #5bc0de;
  padding: 5px;
}
</style>