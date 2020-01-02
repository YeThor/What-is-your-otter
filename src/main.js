import Vue from "vue";
import VueRouter from "vue-router";
import App from "./App.vue";
import IntroPage from "./components/IntroPage.vue";
import QuizPage from "./components/QuizPage.vue";
import ResultPage from "./components/ResultPage.vue";

Vue.config.productionTip = false;
Vue.use(VueRouter);

const routes = [
  { path: "/", component: IntroPage },
  { name: "quiz", path: "/quiz", component: QuizPage, props: true },
  { path: "/result", component: ResultPage }
];

const router = new VueRouter({ routes });

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
