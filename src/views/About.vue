<script lang="ts" setup>
import { ref } from "vue";

const username = ref("username");
</script>

<template>
  <div class="about">
    {{ username }}
    <h1>This is an about page</h1>
  </div>
</template>

<style module>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
