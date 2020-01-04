<template>
  <v-container fluid>
    <v-row justify="center">
      <v-col cols="10">
        <v-row justify="center">
          <v-img :src="this.sudal.url" max-width="500" min-width="250" />
        </v-row>

        <v-row justify="center">
          <v-card shaped max-width="500">
            <v-card-title class="headline"
              >당신은 {{ this.sudal.name }}이군요!</v-card-title
            >
            <v-card-text>{{ this.sudal.description }}</v-card-text>
            <v-card-actions>
              <v-btn text color="deep-purple accent-4" @click="showNote">
                창작자 노트
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
  <!-- <div>
    <h1>당신은 {{ this.sudal.name }} 입니다!</h1>
    <img :src="this.sudal.url" />
    <p>{{ this.sudal.description }}</p>
    <div class="creator">
      <p>창작자: {{ this.sudal.creator.name }}</p>
      <p>창작자 한마디: {{ this.sudal.creator.note }}</p>
    </div>
    <router-link to="/">다시 하기</router-link>
  </div> -->
</template>

<script>
export default {
  name: "ResultPage",
  props: ["sudal"],
  methods: {
    showNote: function() {
      // @TODO: 창작자 노트는 어떻게?
      alert("hi");
    }
  }
};
</script>

<style scoped></style>
