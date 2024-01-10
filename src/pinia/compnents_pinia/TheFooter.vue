
<template>

  <div class="m-4">
    <ul>
      <li><a href="#">Home</a></li>
      <li><a href="#">News</a></li>
      <li><a href="#">Feed</a></li>
      <li><a href="#">My account</a></li>
      <li><a href="#">Settings</a></li>
    </ul>

  </div>

</template>

<script>
export default {
  name: "TheFooter"
}
</script>

<style scoped>
ul {
  padding: 0;
  margin-top: 200px;
  display: flex;
  justify-content: center;
  width: 100%;
}
li {
  display: block;
}

a {
  padding: 20px;
}

</style>