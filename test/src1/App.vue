<template>
  <div>
    <school></school>
    <student></student>
  </div>
</template>

<script>
import school from './components/school'
import Student from './components/student.vue'

export default {
  components: {
    school,
    Student
  }
}
</script>

<style scoped>
.app {
  background-color: #5bc0de;
  padding: 5px;
}
</style>