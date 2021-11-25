<template>
  <div>
     <school name="张三" sex="女" :age="19+10"/><hr/>
     <school name="李四" sex="男" :age="20"/>
  </div> 
</template>

<script>
import School from './components/school.vue'
export default {
    components:{
        School
    },
   
}
</script>

<style>

</style>