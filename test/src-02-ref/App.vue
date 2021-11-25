<template>
  <div>
      <img src="./assets/logo.png" alt="logo">
      <school ref="sch"></school>
      <h1 v-text="a" ref="title"></h1>
      <button @click="show" ref="btn">_____</button>
  </div>
</template>

<script>
import school from './components/school'
export default {
    components:{
        school
    },
    data(){
        return{
            a:'123456'
        }
    },
    methods:{
        show(){
            console.log(this.$refs.title)//真实DOM元素
            console.log(this.$refs.btn)//真实Dom元素
            console.log(this.$refs.sch)//school组件的实例对象
        }
    }
}
</script>

<style>

</style>