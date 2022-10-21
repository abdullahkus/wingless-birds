<script setup>

const props = defineProps({
  title: {
    type: String,
    default: "Gönder"
  }
})
</script>

<template>
  <button type="button" class="button">
    {{props.title }}
  </button>
</template>

<style lang="scss">

</style>