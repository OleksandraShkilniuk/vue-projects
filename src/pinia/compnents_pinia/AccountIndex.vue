

<template>
<div class="row">
  <account-form :model-value="modalVisible" @update:model-value="toggleModal" />

  <div class="m-4">

    <h3>My account</h3>
    <p>Fullame: {{accountStore.account.fullName}}</p>
    <p>NickName: {{accountStore.account.nickname}}</p>
    <p>About: {{ accountStore.account.about }}</p>

  </div>

  <div class="d-flex  m-4">
    <button type="button" class="btn btn-warning" @click="toggleModal">Edit</button>
  </div>

</div>

</template>


<script>
import {mapStores} from "pinia";
import {useAccountStore} from "@/pinia/compnents_pinia/stores/account.js";


import accountForm from "@/pinia/compnents_pinia/AccountForm.vue";
import {isVisible} from "bootstrap/js/src/util/index.js";
export default {
  name: "AccountIndex",
  components: {accountForm},
  computed: {
    ...mapStores(useAccountStore)
  },
  data() {
    return {
      modalVisible: false,
    };
  },
  methods: {
    isVisible,
    toggleModal() {
      this.modalVisible = !this.modalVisible;
    }},
}
</script>


<style scoped>

</style>