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
    ...mapState(['persons'])
  },
  methods: {
    addP() {
      const person = {id: nanoid(), name: this.name}
      this.$store.commit('addP', person)
      this.name = ''
    }
  }
}
</script>

<style scoped>

</style>