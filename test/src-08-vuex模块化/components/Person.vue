<template>
  <div>
    <hr>
    <input v-model="name" type="text">
    <button @click="addP">+</button>
    <ul>
      <li v-for="p in persons" :key="p.id">
        {{ p.name }}
      </li>
    </ul>
  </div>
</template>

<script>
import {mapState} from "vuex";
import {nanoid} from "nanoid";

export default {
  name: "Person",
  data() {
    return {
      name: ''
    }
  },
  computed: {
    ...mapState('PersonOp', ['persons'])
  },
  methods: {
    addP() {
      const person = {id: nanoid(), name: this.name}
      this.$store.commit('PersonOp/addP', person)
      this.name = ''
    }
  }
}
</script>

<style scoped>

</style>