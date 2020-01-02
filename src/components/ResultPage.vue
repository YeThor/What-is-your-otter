<template>
  <div>
    <h1>Result Page</h1>
    <p>{{ this.sudal.description }}</p>
    <router-link to="/">다시 하기</router-link>
  </div>
</template>

<script>
export default {
  name: "ResultPage",
  props: ["sudal"]
};
</script>

<style scoped></style>
