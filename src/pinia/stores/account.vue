

<template>

</template>


<script>
import {defineStore} from "pinia";

export const userAccountStore = defineStore('account', {

  state: ()=> ({
    account: {
      fullName: null,
      nickname: null,
      about: null,
    },
    isVisible: false,

  }),

  getters: {

  },

  actions: {

  }

})
</script>


<style scoped>

</style>