<template>
  <div id="app">
    <Nav class="fixed-top" v-bind:todos="todos"/>
    <div class="container" style="margin-top: 100px;">
      <AddTodo class="mb-3" v-on:add-todo="addTodo"/>
      <Sort class="align-self-center"/>
      <TodoList v-bind:todos="todos"/>
    </div>
    <back-to-top bottom="50px" right="20px" visibleOffset="100">
      <button type="button" class="btn btn-info btn-to-top btn-sm">
        <i class="fa fa-chevron-up"></i>
        Top
      </button>
    </back-to-top>
  </div>
</template>

<script>
import TodoList from './components/TodoList';
import Nav from './components/Nav';
import AddTodo from './components/AddTodo';
import Sort from './components/Sort';

export default {
  name: 'App',
  components: {
    TodoList,
    Nav,
    AddTodo,
    Sort,
  },
  data() {
    return {
      todos: [{
        title: 'Career',
        content: 'Tech Fresh/LINE',
        done: false,
      },
      {
        title: 'Career',
        content: 'Front-end Intern/Fitz',
        done: true,
      },
      {
        title: 'Career',
        content: 'UI/UX Intern/FunNow',
        done: true,
      },
      {
        title: 'My Skill',
        content: 'Back-end Development',
        done: false,
      },
      {
        title: 'My Skill',
        content: 'Front-end Development',
        done: true,
      },
      {
        title: 'My Skill',
        content: 'Motion Graphic',
        done: true,
      },
      {
        title: 'My Skill',
        content: 'UI/UX Design',
        done: true,
      },
      {
        title: 'My Skill',
        content: 'Graphic Design',
        done: true,
      },
      ],
    };
  },
  methods: {
    addTodo(newTodo) {
      this.todos.unshift(newTodo);
    },
  },
};
</script>

<style lang="scss">
@import '../node_modules/bootstrap/scss/bootstrap.scss';
</style>
