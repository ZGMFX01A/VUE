<template>
  <div>
    <button @click="getMessage">获取信息</button>
    <button @click="getMessage2">获取信息</button>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  components: {},
  methods:{
    getMessage(){
      axios.get('http://localhost:8080/students/students')
      .then(response=>{
        console.log('success',response.data)
      },
      error=>{
        console.log('false',error.message)
      })
    },
    getMessage2(){
      axios.get('http://localhost:8080/cars/cars')
          .then(response=>{
                console.log('success',response.data)
              },
              error=>{
                console.log('false',error.message)
              })
    },
  }
}
</script>

<style scoped>

</style>