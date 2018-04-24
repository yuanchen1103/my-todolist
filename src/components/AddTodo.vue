<template>
<div>
  <button class="btn btn-sm btn-primary d-inline-block"
  v-if="!isAdding" v-on:click="showAddingForm">
    <i class="fas fa-plus-circle mr-2"></i>
    Add Todo
  </button>
  <div class="row" v-if="isAdding">
    <div class="col-md-3 col-sm-6">
      <div class="card mt-1">
        <div class="card-body">
          <form>
            <div class="form-group">
              <label>Title</label>
              <input type="text" class="form-control" placeholder="Enter title" v-model="titleText">
            </div>
            <div class="form-group">
              <label>Description</label>
              <textarea class="form-control" rows="3" placeholder="Enter description"
              v-model="contentText"></textarea>
              <small class="text-danger" v-if="empty">
                Please enter the title and the description
              </small>
            </div>
            <button type="button" class="btn btn-secondary btn-sm mr-2"
            v-on:click="hideAddingForm">Cancel</button>
            <button type="button" class="btn btn-primary btn-sm"
            v-on:click="sendForm">Add Todo</button>
          </form>
        </div>
      </div>
    </div>
  </div>

</div>
</template>

<script>

export default {
  name: 'AddTodo',
  data() {
    return {
      isAdding: false,
      titleText: '',
      contentText: '',
      empty: false,
    };
  },
  methods: {
    showAddingForm() {
      this.isAdding = true;
    },
    hideAddingForm() {
      this.isAdding = false;
      this.titleText = '';
      this.contentText = '';
      this.empty = false;
    },
    sendForm() {
      if (this.titleText.length > 0 && this.contentText.length > 0) {
        const title = this.titleText;
        const content = this.contentText;
        this.$emit('add-todo', {
          title,
          content,
          done: false,
        });
        this.titleText = '';
        this.contentText = '';
        this.empty = false;
        this.isAdding = false;
      } else {
        this.empty = true;
      }
    },
  },
};
</script>

<style>
</style>
