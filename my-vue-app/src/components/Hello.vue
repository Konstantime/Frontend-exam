<script setup>
import { ref } from "vue";
const msg = ref("Привет");
</script>

<template>
  <div>
    <h1>{{ msg }}</h1>
    <button @click="msg = 'Vue работает!'">Кликни</button>
  </div>

  <div>
    <p>Что сука съела</p>
  </div>
</template>
