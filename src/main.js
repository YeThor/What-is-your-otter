import Vue from "vue";
import VueRouter from "vue-router";
import App from "./App.vue";
import IntroPage from "./components/IntroPage.vue";
import QuizPage from "./components/QuizPage.vue";
import ResultPage from "./components/ResultPage.vue";
import vuetify from "./plugins/vuetify";

Vue.config.productionTip = false;
Vue.use(VueRouter);

const routes = [
  { path: "/", component: IntroPage },
  { name: "quiz", path: "/quiz", component: QuizPage, props: true },
  { name: "result", path: "/result", component: ResultPage, props: true }
];

const router = new VueRouter({ routes, mode: "history" });

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount("#app");
