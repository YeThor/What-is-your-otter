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
            <v-expansion-panels>
              <v-expansion-panel>
                <v-expansion-panel-header class="deep-purple--text">
                  창작자 노트...
                </v-expansion-panel-header>
                <v-expansion-panel-content>
                  <p class="font-italic subtitle-2">
                    created by {{ this.sudal.creator.name }}
                  </p>
                  <p class="body-2">"{{ this.sudal.creator.note }}"</p>
                </v-expansion-panel-content>
              </v-expansion-panel>
            </v-expansion-panels>
          </v-card>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
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
