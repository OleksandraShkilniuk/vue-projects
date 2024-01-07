
<template>
<button type="button" class="m-5 btn-primary btn" @click="fetchData()">Click me</button>

</template>



<script>
import axios from 'axios'
export default {
  name: "axios",
  data() {
    return {
      giphy: {
        api_token: 'cnGXlyc7W8RAXDueL3OpNruQOr7biqHE',
        url: 'https://api.giphy.com/v1/gifs',
      }
    }
  },
  methods: {

    fetchData() {
      axios({
        method: 'get',
        url: `${this.giphy.url}/trending?api_key=${this.giphy.api_token}`,
      }).then((response) => {
        console.log(response.data)
      })
          .catch((error) => {
            console.log('error',error)
          })
    },
    }
  }
</script>


<style scoped>

</style>