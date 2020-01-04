<template>
  <v-container fluid>
    <v-row justify="center">
      <v-col cols="10">
        <v-row class="mb-2" justify="center">
          <p class="text-center title font-weight-bold">
            {{ quiz }}
          </p>
        </v-row>
        <v-row class="mb-2" justify="center">
          <v-btn @click="onClick(1)" outlined color="teal">
            {{ answer[0].msg }}
          </v-btn>
        </v-row>
        <v-row justify="center">
          <v-btn @click="onClick(2)" outlined color="teal">
            {{ answer[1].msg }}
          </v-btn>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
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
      const next = `${this.id}${idx}`;

      if (!quiz[next]) {
        const sudal = quiz[this.id].answer[idx - 1].result;

        this.$router.push({ name: "result", params: { sudal } });
      } else {
        this.id = next;
      }
    }
  }
};
</script>

<style scoped></style>
