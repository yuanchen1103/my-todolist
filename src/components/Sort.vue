<template>
  <div class="btn-group btn-group-sm" role="group" aria-label="Basic example">
    <button type="button" class="btn btn-light border"
    :class="{active: allActive}" @click="showAll">All</button>
    <button type="button" class="btn btn-light border"
    :class="{active: completedActive}" @click="showCompleted">Completed</button>
    <button type="button" class="btn btn-light border"
    :class="{active: todosActive}" @click="showTodos">Todos</button>
  </div>
</template>

<script>
// eslint-disable-next-line
import { bus } from '../main';

export default {
  name: 'Sort',
  data() {
    return {
      allActive: true,
      completedActive: false,
      todosActive: false,
    };
  },
  methods: {
    showAll() {
      this.allActive = true;
      this.completedActive = false;
      this.todosActive = false;
      bus.$emit('show-all', null);
    },
    showCompleted() {
      this.allActive = false;
      this.completedActive = true;
      this.todosActive = false;
      bus.$emit('show-completed', null);
    },
    showTodos() {
      this.allActive = false;
      this.completedActive = false;
      this.todosActive = true;
      bus.$emit('show-todos', null);
    },
  },
};
</script>

<style>
</style>
