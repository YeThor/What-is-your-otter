<template>
  <div class="content">
    {{ msg }}
    <h1>나에게 가장 어울리는 수달은?</h1>
    <button v-on:click="onclick">시작하기</button>
  </div>
</template>

<script>
export default {
  name: "IntroPage",
  props: {
    msg: String
  },
  methods: {
    onclick: function() {
      let a = 1;
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
