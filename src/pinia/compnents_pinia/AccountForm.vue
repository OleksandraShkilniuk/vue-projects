

<template>

  <div class="modal" :class="{ 'd-block': visible }" tabindex="-1" aria-labelledby="modal-title">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Modal title</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body row flex-column">
          <label for="fullName">Full Name:</label>
          <input
              id="fullName"
              class="m-2 form-control"
              type="text"
              v-model="accountStore.account.fullName"

          >


          <label for="nickname">Nickname:</label>
          <input
              id="nickname"
              class="m-2 form-control"
              type="text"
              v-model="accountStore.account.nickname"
          >

          <label for="about">About:</label>
          <input
              id="about"
              class="m-2 form-control"
              type="text"
            v-model="accountStore.account.about">
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" @click="closeModal">Close</button>
          <button type="button" class="btn btn-primary">Save changes</button>
        </div>
      </div>
    </div>
  </div>

</template>

<script>

import {mapStores} from "pinia";
import {useAccountStore} from "@/pinia/compnents_pinia/stores/account.js";

export default {
  name: "AccountForm",
  data() {
    return{

    }
  },

  props: {
    modelValue: {
      readable: true,
      type: Boolean,
    }

  },

  computed: {
    ...mapStores(useAccountStore),
    visible: {
      get() {
        return this.modelValue;
      },
      set(value) {
        this.$emit('update:modelValue', value)
      }

    }
  },
  methods: {
    closeModal() {
      // Emit an event to notify the parent component to close the modal
      this.visible = false;
    },
  }
}
</script>

<style scoped>

input {
  width: 60%;
}

</style>