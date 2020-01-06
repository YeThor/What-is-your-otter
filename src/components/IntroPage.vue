<template>
  <v-container fluid>
    <v-row justify="center">
      <v-col cols="10">
        <v-row justify="center">
          <p class="text-center headline">
            당신의 수달은?
          </p>
        </v-row>
        <v-row justify="center">
          <v-col cols="8">
            <v-row justify="center">
              <v-img
                src="sudal.jpg"
                lazy-src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVQYV2M4c+bMfwAIMANkq3cY2wAAAABJRU5ErkJggg=="
                max-width="30%"
                min-width="350"
              ></v-img>
            </v-row>
          </v-col>
        </v-row>
        <v-row class="mb-3 mt-2" justify="center">
          <v-btn @click="initQuiz" outlined color="teal">
            시작하기
          </v-btn>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "IntroPage",
  props: {
    msg: String
  },
  methods: {
    initQuiz: function() {
      this.$router.push({ name: "quiz", params: { initialID: 1 } });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
