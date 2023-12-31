<template>
  <div>
    <div class="container mt-4">
      <div class="row">
        <div class="col-12">
<!--          add modal-->
          <button type="button" class="btn btn-success mb-3" @click="create">Add</button>
<!--todo list items-->
          <ul id="todo-list" class="list-group">
            <li
                v-for="todoItem in todoList"
                class="list-group-item d-flex justify-content-between align-items-center"
            >
              <div>
                <input class="form-check-input" type="checkbox" id="termsCheck" @click="todoItem.completed = !todoItem.completed" :checked="todoItem.completed">
                {{todoItem.title}}
              </div>
              <div><small>{{todoItem.description}}</small></div>

              <div>
                <button class="btn btn-warning btn-sm" @click="edit(todoItem.uid)">Edit</button>
                <button class="btn btn-danger btn-sm" @click="deleteItem(todoItem.uid)">Remove</button>
              </div>
            </li>
          </ul>

<!--          todo list items end-->
        </div>
      </div>
    </div>

<!--    modal for saving data-->
    <div id="form-modal" class="modal d-block" v-if="showFormModal">
      <div class="modal-dialog">
        <div class="modal-content">
          <form id="form" action="#" method="post">
            <div class="modal-body">
              <label for="termsCheck">Is this task completed?</label>

<!--              TODO: find the way to distinguish one checkbox from another based on prev homeworks-->

              <input class="m-3 form-check-input" type="checkbox" id="termsCheck" @click="toggleCompleted(filledTodoItem)" :checked="filledTodoItem.completed">
              <input id="form-uuid" type="hidden">
              <br>
              <label for="form-title" class="form-label">Title</label>
              <input type="text" id="form-title" name="title" class="form-control" v-model="filledTodoItem.title">
              <div id="form-title-invalid-feedback" class="invalid-feedback"></div>

              <textarea class="form-control mt-2" placeholder="Description..." v-model="filledTodoItem.description"></textarea>

                                       <pre>{{filledTodoItem}}</pre>
                                       <pre>{{todoList}}</pre>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" @click="showFormModal = false">Close</button>
              <button type="button" class="btn btn-success" @click="save()">Save</button>
            </div>
          </form>
        </div>
      </div>
    </div>
<!--    end-->
<!--delete modal-->
    <div id="remove-confirmation-modal" class="modal d-block" v-if="showDeleteModal">
      <div class="modal-dialog">
        <div class="modal-content">
          <form id="form" action="#" method="post">
            <div class="modal-body">
              Are you sure?
              This item {{deletedItem.title}} will be deleted.
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" @click="showDeleteModal = false">Cancel</button>
              <button type="button" class="btn btn-success" @click="confirmedDelete()">Delete</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showFormModal: false,
      showDeleteModal: false,


      filledTodoItem: {
        uid: null,
        title: null,
        description: null,
        completed: false,
      },


      todoList: [],


      deletedItem: {},
    }
  },
  methods: {
    save() {

      this.filledTodoItem.uid = this.filledTodoItem.uid ? this.filledTodoItem.uid : this.generateUid()

      let index = this.todoList.findIndex((item) => item.uid === this.filledTodoItem.uid)

      if(index === -1) {
        this.todoList.push(this.filledTodoItem);
      } else {
        this.todoList[index] = {...this.filledTodoItem};
      }
      this.showFormModal = false;
    },

    create() {
      this.filledTodoItem = {
        uid: null,
        title: null,
        description: null,
        checked: null,
      }
      this.showFormModal = true;
    },

    edit(uid) {
      let editableItem = this.todoList.find((item) => item.uid === uid)
      this.filledTodoItem = {...editableItem}
      this.showFormModal = true;
    },

    deleteItem(uid) {
      this.deletedItem = this.todoList.find((item) => item.uid === uid)
      this.showDeleteModal = true;
    },

    confirmedDelete() {
      let index = this.todoList.findIndex((item) => item.uid === this.deletedItem.uid)

      if (index !== -1) {
        this.todoList.splice(index, 1)
      }

      this.showDeleteModal = false;
      console.log(this.showDeleteModal)
    },

    toggleCompleted(todoItem) {
      // Toggle the completed property for the specific todo item
      todoItem.completed = !todoItem.completed;
    },

    generateUid() {
      return Math.random().toString(16).slice(2)
    }
  }
};
</script>

<style>
li {
  display: flex;
  justify-content: space-between;
}
</style>
