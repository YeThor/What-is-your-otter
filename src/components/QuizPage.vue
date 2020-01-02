<template>
  <div>
    <h1>Quiz Page</h1>
    <div class="quiz-box">
      <p>{{ quiz }}</p>
    </div>
    <div class="anwser-box">
      <button v-on:click="onClick('1')">
        {{ answer[0].msg }}
      </button>
      <button v-on:click="onClick('2')">
        {{ answer[1].msg }}
      </button>
    </div>
  </div>
</template>

<script>
import quiz from "../data/quiz";

export default {
  name: "QuizPage",
  props: ["initialID"],
  data: function() {
    return {
      id: this.initialID
    };
  },
  computed: {
    quiz: function() {
      return quiz[this.id].quiz;
    },
    answer: function() {
      return quiz[this.id].answer;
    }
  },
  methods: {
    onClick: function(idx) {
      const next = this.id + idx;

      if (!quiz[next]) {
        console.log("결과 페이지로 이동");
        // @TODO: 결과 페이지 이동
      } else {
        this.id = this.id + idx;
      }
    }
  }
};
</script>

<style scoped></style>
