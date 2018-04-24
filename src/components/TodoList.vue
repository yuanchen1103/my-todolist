<template>
  <div class="row mt-3">
    <Todo v-on:delete-todo="deleteTodo" v-if="allFilter" v-on:complete-todo="completeTodo"
      v-for="todo in showAll" :todo.sync="todo" :key="todo.value" />
      <Todo v-on:delete-todo="deleteTodo" v-if="completedFilter" v-on:complete-todo="completeTodo"
      v-for="todo in showCompleted" :todo.sync="todo" :key="todo.value" />
      <Todo v-on:delete-todo="deleteTodo" v-if="todosFilter" v-on:complete-todo="completeTodo"
      v-for="todo in showTodos" :todo.sync="todo" :key="todo.value" />
  </div>
</template>

<script type = "text/javascript" >
import Todo from './Todo';
// eslint-disable-next-line
import { bus } from '../main';

export default {
  name: 'TodoList',
  props: ['todos'],
  components: {
    Todo,
  },
  data() {
    return {
      allFilter: true,
      completedFilter: false,
      todosFilter: false,
    };
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
  computed: {
    showAll() {
      // eslint-disable-next-line
      return this.todos.filter(function (todo) {
        return todo.done === true || todo.done === false;
      });
    },
    showCompleted() {
      // eslint-disable-next-line
      return this.todos.filter(function (todo) {
        return todo.done === true;
      });
    },
    showTodos() {
      // eslint-disable-next-line
      return this.todos.filter(function (todo) {
        return todo.done === false;
      });
    },
  },
  created() {
    bus.$on('show-all', () => {
      this.allFilter = true;
      this.completedFilter = false;
      this.todosFilter = false;
    });
    bus.$on('show-completed', () => {
      this.allFilter = false;
      this.completedFilter = true;
      this.todosFilter = false;
    });
    bus.$on('show-todos', () => {
      this.allFilter = false;
      this.completedFilter = false;
      this.todosFilter = true;
    });
  },
};
</script>
<style>
</style>
