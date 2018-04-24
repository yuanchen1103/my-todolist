<template>
  <div id="app">
    <Nav/>
    <div class="container">
      <StatusBar v-bind:todos="todos"/>
      <AddTodo v-on:add-todo="addTodo"/>
      <TodoList v-bind:todos="todos"/>
    </div>
  </div>
</template>

<script>
import TodoList from './components/TodoList';
import Nav from './components/Nav';
import StatusBar from './components/StatusBar';
import AddTodo from './components/AddTodo';

export default {
  name: 'App',
  components: {
    TodoList,
    Nav,
    StatusBar,
    AddTodo,
  },
  data() {
    return {
      todos: [{
        title: 'Todo A',
        content: 'This is Todo A',
        done: false,
      },
      {
        title: 'Todo B',
        content: 'This is Todo B',
        done: true,
      },
      {
        title: 'Todo C',
        content: 'This is Todo C',
        done: false,
      },
      {
        title: 'Todo D',
        content: 'This is Todo D',
        done: false,
      },
      {
        title: 'Todo E',
        content: 'This is Todo E',
        done: true,
      },
      ],
    };
  },
  methods: {
    addTodo(newTodo) {
      this.todos.push(newTodo);
    },
  },
};
</script>

<style lang="scss">
@import '../node_modules/bootstrap/scss/bootstrap.scss';
</style>
