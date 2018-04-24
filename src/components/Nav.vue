<template>
  <nav class="navbar navbar-dark bg-dark d-flex justify-content-between">
    <div class="container">
      <a class="navbar-brand text-white">My Todo List</a>
      <div>
        <span class="navbar-text">
          Completed:
        </span>
        <span class="navbar-text mr-3">
          {{todos.filter(todo => {return todo.done === true}).length}}
        </span>
        <span class="navbar-text">
          Todos:
        </span>
        <span class="navbar-text">
          {{todos.filter(todo => {return todo.done === false}).length}}
        </span>
      </div>

    </div>

  </nav>
</template>

<script type = "text/javascript" >
export default {
  name: 'Nav',
  props: ['todos'],
};
</script>
<style>

</style>
