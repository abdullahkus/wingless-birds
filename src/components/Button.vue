<script setup>

const props = defineProps({
  title: {
    type: String,
    default: "Gönder"
  },
  btnDisabled: {
    type: Boolean,
    default: false
  }
})
</script>

<template>
  <!-- :disabled="!btnDisabled" -->
  <button type="button" class="button" :disabled="props.btnDisabled">
    {{ props.title }}
  </button>
</template>