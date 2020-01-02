<template>
  <div>
    <h1>Quiz Page</h1>
    <div class="quiz-box">
      <p>{{ quiz }}</p>
    </div>
    <div class="anwser-box">
      <p>{{ answer[0].msg }}</p>
      <p>{{ answer[1].msg }}</p>
    </div>

    <router-link to="/result">결과 페이지</router-link>
  </div>
</template>

<script>
import quiz from "../data/quiz";

export default {
  name: "QuizPage",
  props: ["id"],
  computed: {
    quiz: function() {
      return quiz[this.id].quiz;
    },
    answer: function() {
      return quiz[this.id].answer;
    }
  }
};
</script>

<style scoped></style>
