

<template>

  <button class="btn-primary" @click="check()">click me</button>

  <div :class="{ 'modal': !isVisible, 'modal d-block': isVisible }" tabindex="-1" aria-labelledby="modal-title">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Modal title</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body row flex-column">
          <label for="fullName">Full Name:</label>
          <input id="fullName" class="m-2 form-control" type="text">


          <label for="nickname">Nickname:</label>
          <input id="nickname" class="m-2 form-control" type="text">

          <label for="about">About:</label>
          <input id="about" class="m-2 form-control" type="text">
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          <button type="button" class="btn btn-primary">Save changes</button>
        </div>
      </div>
    </div>
  </div>

</template>

<script>

import {mapStores} from "pinia";
import {userAccountStore} from "@/pinia/stores/account.vue";

export default {
  name: "AccountForm",
  data() {
    return{
      isVisible: userAccountStore().isVisible,
    }
  },

  computed: {
    ...mapStores(userAccountStore),
  },
  methods: {
    check() {
      alert(this.isVisible)
    }
  }
}
</script>

<style scoped>

input {
  width: 60%;
}

</style>