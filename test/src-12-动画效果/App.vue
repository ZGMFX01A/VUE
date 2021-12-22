<template>
  <div >
    <test/>
    <test2/>
    <test3/>
  </div>
</template>

<script>

import Test from "@/components/test";
import test2 from "@/components/test2";
import test3 from "@/components/test3";
export default {
  name: 'App',
  components: {Test,test2,test3},
}
</script>

<style>
</style>