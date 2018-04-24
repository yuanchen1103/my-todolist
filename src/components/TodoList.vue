<template>
    <div class="row mt-3">
      <Todo v-on:delete-todo="deleteTodo" v-on:complete-todo="completeTodo"
       v-for="todo in todos" :todo.sync="todo" :key="todo.value" />
    </div>
</template>

<script type = "text/javascript" >
import Todo from './Todo';

export default {
  name: 'TodoList',
  props: ['todos'],
  components: {
    Todo,
  },
  methods: {
    deleteTodo(todo) {
      const todoIndex = this.todos.indexOf(todo);
      this.todos.splice(todoIndex, 1);
    },
    completeTodo(todo) {
      const todoIndex = this.todos.indexOf(todo);
      this.todos[todoIndex].done = true;
    },
  },
};
</script>
<style>
</style>
