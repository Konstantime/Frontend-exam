<script setup>
const props = defineProps({
  modelValue: {
    type: String,
    default: "",
  },
});

const emit = defineEmits(["update:modelValue"]);

function onInput(event) {
  emit("update:modelValue", event.target.value);
}
</script>

<template>
  <input :value="modelValue" @input="onInput" type="text" />
</template>
