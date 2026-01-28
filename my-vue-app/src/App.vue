<script setup>
import { ref } from "vue";
import BaseInput from "./components/BaseInput.vue";

const firstName = ref("Alex");
</script>

<template>
  <main>
    <BaseInput v-model="firstName" />
    <p>{{ firstName }}</p>
  </main>
</template>

<style>
main {
  font-size: 56px;
  color: rgb(68, 14, 248);
}

body {
  background-color: rgb(34, 31, 42);
}

.btn {
  background-color: rgb(198, 188, 224);
  border: 8px solid green;
  font-size: 20px;
  margin: 1%;
  width: 90px;
  height: 50px;
}
</style>
