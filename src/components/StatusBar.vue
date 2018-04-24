<template>
<div class="card mt-4 border-0 bg-light mb-3">
  <div class="card-body">
    <p class="mb-0 d-inline">Completed:</p>
    <p class="mb-0 d-inline mr-3">{{todos.filter(todo => {return todo.done === true}).length}}</p>
    <p class="mb-0 d-inline">Todos:</p>
    <p class="mb-0 d-inline">{{todos.filter(todo => {return todo.done === false}).length}}</p>
  </div>
</div>
</template>

<script type = "text/javascript" >

export default {
  name: 'StatusBar',
  props: ['todos'],
  methods: {

  },
};
</script>
<style>
</style>
