<template>
  <div class="row">
    <div v-show="info.user.length" class="card" v-for="us in info.user" :key="info.user.login">
      <a :href="us.html_url" target="_blank">
        <img :src="us.avatar_url" style='width: 100px'/>
      </a>
      <p class="card-text">{{ us.login }}</p>
    </div>
    <h1 v-show="info.isFirst">6666666</h1>
    <h1 v-show="info.isLoading"> loading.......</h1>
    <h1 v-show="info.errMsg">{info.errMsg}</h1>

  </div>
</template>

<script>
export default {
  name: "List",
  data() {
    return {
      info: {
        user: [],
        isFirst: true,
        isLoading: false,
        errMsg: ''
      }
    }
  },
  mounted() {
    this.$bus.$on('getUser', (infoObj) => {
      this.info={...this.info,...infoObj}
    })
  }
}
</script>

<style scoped>
.album {
  min-height: 50rem; /* Can be removed; just added for demo purposes */
  padding-top: 3rem;
  padding-bottom: 3rem;
  background-color: #f7f7f7;
}

.card {
  float: left;
  width: 33.333%;
  padding: .75rem;
  margin-bottom: 2rem;
  border: 1px solid #efefef;
  text-align: center;
}

.card > img {
  margin-bottom: .75rem;
  border-radius: 100px;
}

.card-text {
  font-size: 85%;
}
</style>