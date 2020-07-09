<template>
  <div class="hello">
    <div>
      <b-button>Button</b-button>
      <b-button variant="danger">Button</b-button>
      <b-button variant="success">Button</b-button>
      <b-button variant="outline-primary">Button</b-button>
      <b-icon icon="clock" animation="spin-reverse" font-scale="1"></b-icon>
      <b-badge>这是你的名字</b-badge>
    </div>
    <div>
      <b-iconstack font-scale="2" variant="white">
        <b-icon stacked icon="square-fill" variant="dark"></b-icon>
        <b-icon stacked icon="arrow-up-short" scale="0.5" shift-v="3" shift-h="-3"></b-icon>
        <b-icon stacked icon="arrow-up-short" scale="0.5" shift-v="3" shift-h="3" rotate="90"></b-icon>
        <b-icon stacked icon="arrow-up-short" scale="0.5" shift-v="-3" shift-h="3" rotate="180"></b-icon>
        <b-icon stacked icon="arrow-up-short" scale="0.5" shift-v="-3" shift-h="-3" rotate="270"></b-icon>
      </b-iconstack>
      <b-iconstack font-scale="5">
        <b-icon stacked icon="square"></b-icon>
        <b-icon stacked icon="dot" shift-h="-3" shift-v="4"></b-icon>
        <b-icon stacked icon="dot" shift-h="-3"></b-icon>
        <b-icon stacked icon="dot" shift-h="-3" shift-v="-4"></b-icon>
        <b-icon stacked icon="dot" shift-h="3" shift-v="4"></b-icon>
        <b-icon stacked icon="dot" shift-h="3"></b-icon>
        <b-icon stacked icon="dot" shift-h="3" shift-v="-4"></b-icon>
      </b-iconstack>
    </div>
    <div>
      <b-button size="sm" class="mb-2">
        <b-icon icon="gear-fill" aria-hidden="true"></b-icon>Settings
      </b-button>
      <br />
      <b-button variant="primary" class="mb-2">
        Pay now
        <b-icon icon="credit-card" aria-hidden="true"></b-icon>
      </b-button>
      <br />
      <b-button variant="outline-info" class="mb-2">
        <b-icon icon="power" aria-hidden="true"></b-icon>Logout
      </b-button>
      <br />
      <b-button size="lg" variant="info" class="mb-2">
        <b-icon icon="question-circle-fill" aria-label="Help"></b-icon>
      </b-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
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
