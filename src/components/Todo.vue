<template>
  <div class="col-md-3 col-sm-6">
    <div class="card mb-3" v-if="!isEditing">
      <div class="card-header d-flex justify-content-between">
        <p class="mb-0">{{todo.title}}</p>
        <small class="d-flex align-items-center">
          <i class="far fa-edit mr-2 cursor-pointer " v-if="!todo.done" v-on:click="edit"></i>
          <i class="far fa-trash-alt cursor-pointer " v-on:click="deleteTodo(todo)"></i>
        </small>
      </div>
      <div class="card-body">
        <p class="card-text">{{ todo.content }}</p>
      </div>
      <div class="card-footer">
        <button class="btn btn-sm btn-primary w-100" v-if="!todo.done"
        v-on:click="completeTodo(todo)">Complete!</button>
        <button class="btn btn-sm btn-outline-success w-100" disabled
        v-if="todo.done">
          <i class="fas fa-check mr-2"></i>
          Completed
        </button>
      </div>
    </div>

    <!-- Edit Mode -->
    <div class="card mb-3" v-if="isEditing">
      <div class="card-body">
        <form>
          <div class="form-group">
            <label>Title</label>
            <input type="text" class="form-control" placeholder="Enter title" v-model="todo.title">
          </div>
          <div class="form-group">
            <label>Description</label>
            <textarea class="form-control" rows="3" placeholder="Enter description"
            v-model="todo.content"></textarea>
          </div>
          <button type="button" class="btn btn-outline-primary btn-sm"
          v-on:click="editDone">Edit Done</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script type = "text/javascript" >

export default {
  name: 'Todo',
  props: ['todo'],
  data() {
    return {
      isEditing: false,
    };
  },
  methods: {
    edit() {
      this.isEditing = true;
    },
    editDone() {
      this.isEditing = false;
    },
    deleteTodo(todo) {
      this.$emit('delete-todo', todo);
    },
    completeTodo(todo) {
      this.$emit('complete-todo', todo);
    },
  },
};
</script>

<style>
  .cursor-pointer {
    cursor: pointer;
  }
</style>
