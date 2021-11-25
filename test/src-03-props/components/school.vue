<template>
  <div class="demo">
    <h1>{{msg}}</h1>
    <h1>姓名：{{ name }}</h1>
    <h2>性别：{{ sex }}</h2>
    <h3>年龄：{{ age1 }}</h3>
    <button @click="addAge">+</button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      age1:this.age,
      msg:'0000000000'
    };
  },
  methods:{
    addAge(){
      this.age1++
    }
  },
  // props:['name','sex','age'] 简单接收
  

  // props:{
  //   name:String,
  //   age:Number,
  //   sex:String
  // }接收的同时对数据进行类型限制

  props:{
    name:{
      type:String,
      required:true
    },
    age:{
      type:Number,
      default:99
    },
    sex:{
      type:String,
      required:true
    }
  }
};
</script>
