

<template>

<the-header/>


  <section class="row">
    <div class="col-6">
      <the-sidebar/>
    </div>
    <div class="col-6">
      <account-index/>

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
import {useAccountStore} from "@/pinia/compnents_pinia/stores/account.js";

export default {
  name: "piniaMain.vue",
  data() {
    return {

    }
  },

  components: {TheHeader, theSidebar, theFooter, accountIndex, accountForm},
  computed: {
    ...mapStores(useAccountStore),


  },
  methods: {

  },


}
</script>

<style scoped>

</style>