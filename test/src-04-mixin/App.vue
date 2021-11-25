<template>
  <div>
      <img src="./assets/logo.png" alt="logo">
      <school></school>
      <student></student>
  </div>
</template>

<script>
import school from './components/school'
import Student from './components/student.vue'
export default {
    components:{
        school,
        Student
    }
}
</script>

<style>

</style>