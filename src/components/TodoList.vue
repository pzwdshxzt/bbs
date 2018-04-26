<template id="todolist">
  <div>
    <input v-model:value=inputValue /><button @click="addTodoList">提交</button>
    <el>
        <li v-for="(list,index) of lists" key="index">{{list}}    <span  @click="deleteTodo(index)">&nbsp;&nbsp;&nbsp;&nbsp;X</span></li>
    </el>
  </div>
</template>

<script>
export default {
  props: ["m"],
  data() {
    return {
      inputValue: "",
      lists: []
    };
  },
  mounted() {},
  methods: {
    addTodoList() {
      if(this.inputValue===''){
        alert("不能为空")
        return
      }
      this.lists.push(this.inputValue);
      this.inputValue = "";
    },
    deleteTodo(index) {
      this.lists.splice(index, 1);
    }
  }
};
</script>

<style type="text/css">

</style>