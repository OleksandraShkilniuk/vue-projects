
<template>

  <div class="row border border-success m-4">
    <div class="col-6 p-2"><a href="#">Logo</a></div>
    <div class="col-6 p-2">
      <div class="d-flex justify-content-end">
        <div class="rounded-circle"></div>
        <div class="nickname mx-2 text-success">{{accountStore.account.nickname}}</div>
      </div>
    </div>
  </div>

</template>


<script>

import {mapStores} from "pinia";
import {useAccountStore} from "@/pinia/compnents_pinia/stores/account.js";

export default {
  name: "TheHeader",

  computed: {
    ...mapStores(useAccountStore)
  }
}
</script>

<style>

a {
  text-decoration: none;
  color: darkgreen;
}

.rounded-circle {
  width: 25px;
  height: 25px;
  border-radius: 100%;
  background-color: darkgreen;
}

</style>