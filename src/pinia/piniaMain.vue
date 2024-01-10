

<template>

<the-header/>


    <account-form/>

  <section class="row">
    <div class="col-4">
      <the-sidebar/>
    </div>
    <div class="col-4">
      <account-index/>

    </div>
    <div class="col-4">
      <div class="d-flex justify-content-end m-4">
        <button type="button" class="btn btn-warning" @click="consoleCheck()">Edit</button>
      </div>
    </div>

  </section>

  <footer>
    <the-footer/>
  </footer>

</template>


<script>

import TheHeader from "@/pinia/compnents_pinia/TheHeader.vue";
import theSidebar from "@/pinia/compnents_pinia/TheSidebar.vue";
import theFooter from "@/pinia/compnents_pinia/TheFooter.vue";
import accountIndex from "@/pinia/compnents_pinia/AccountIndex.vue";
import accountForm from "@/pinia/compnents_pinia/AccountForm.vue";
import {mapStores} from "pinia";
import {userAccountStore} from "@/pinia/stores/account.vue";

export default {
  name: "piniaMain.vue",
  data() {
    return {

    }
  },

  components: {TheHeader, theSidebar, theFooter, accountIndex, accountForm},
  computed: {
    ...mapStores(userAccountStore),
  },
  methods: {
    consoleCheck() {
      console.log(userAccountStore.isVisible);
     },
  },


}
</script>

<style scoped>

</style>