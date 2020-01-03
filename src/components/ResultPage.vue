<template>
  <div>
    <h1>당신은 {{ this.sudal.name }} 입니다!</h1>
    <img :src="url" />
    <p>{{ this.sudal.description }}</p>
    <div class="creator">
      <p>창작자: {{ this.sudal.creator.name }}</p>
      <p>창작자 한마디: {{ this.sudal.creator.note }}</p>
    </div>
    <router-link to="/">다시 하기</router-link>
  </div>
</template>

<script>
export default {
  name: "ResultPage",
  props: ["sudal"],
  computed: {
    url: function() {
      return `../assets/${this.sudal.url}`;
    }
  }
};
</script>

<style scoped></style>
