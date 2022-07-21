<template>
 <div class="demo">
    <h2>学校名：{{name}}</h2>
    <h2>地址：{{address}}</h2>
    <h3>校长：{{userName}}</h3>
    <h4>校训: {{list}}</h4>
  </div>
</template>

<script>
// 组件交互相关代码（数据、方法等）
export default {
  name: 'SchoolComponent',
  props: ['userName', 'list'],
  data(){
    return {
      name:'尚硅谷',
      address:'北京'
    }
  },
}
</script>

<style>
/* 组件的模式 */
  .demo{
    background-color: orange;
  }
</style>
