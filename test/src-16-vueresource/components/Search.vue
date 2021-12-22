<template>
  <section class="jumbotron">
    <h3 class="jumbotron-heading">Search Github Users</h3>
    <div>
      <input type="text" placeholder="enter the name you search" v-model="keyWord" />&nbsp;
      <button @click="searchUser">Search</button>
    </div>
  </section>
</template>

<script>
export default {
  name: "Search",
  data(){
    return{
      keyWord:'',
    }
  },
  methods:{
    searchUser(){
      this.$bus.$emit('getUser',{isLoading:true,errMsg:'',user:[],isFirst:false})
      this.$http.get(`https://api.github.com/search/users?q=${this.keyWord}`).then(
          response=>{
            console.log('success',response.data)
            this.$bus.$emit('getUser',{isLoading:false,errMsg:'',user:response.data.items})
          },
          error=>{
            this.$bus.$emit('getUser',{isLoading:false,errMsg:error.message,user:[]})
          }
      )
    }
  }
}
</script>

<style scoped>

</style>