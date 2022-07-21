<template>
  <div>
    <img src="./assets/logo.png" alt="logo">
    <SchoolComponent userName="cqq" v-bind:list="list"></SchoolComponent>
    <StudentComponent></StudentComponent>

  </div>
</template>

<script>
//引入组件 es6
  import SchoolComponent from './components/School'
  import StudentComponent from './components/Student'
  export default {
  name: 'App',
  data() {
    return {
        list: ['哈哈','嘻嘻']
      }
    },
    components: {
      SchoolComponent,
      StudentComponent
    }
  }
</script>
