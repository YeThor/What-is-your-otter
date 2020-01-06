<template>
  <v-app>
    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: "app"
};
</script>

<style>
.v-btn:hover:before {
  opacity: 0 !important;
}
</style>
