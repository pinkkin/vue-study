<template>
 <div>
    <h2>学生名：{{name}}</h2>
    <h2>年龄：{{age}}</h2>
  </div>
</template>

<script>
// 组件交互相关代码（数据、方法等）
export default {
  name:'StudentComponent',
  data(){
    return {
      name:'张三',
      age:18
    }
  }, methods: {

  }
}
</script>
