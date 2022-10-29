<script setup>
import { onMounted, onBeforeUnmount } from 'vue';

const props = defineProps({
  countNumber: {
    type: Number,
    required: true
  }
})
const emits = defineEmits(['update:countNumber'])
let countdown = null

onMounted(() => {
  countdown = setInterval(() => {
    let number = props.countNumber
    number--
    emits('update:countNumber', number)
    if (number === 0) {
      clearInterval(countdown)
    }
  }, 1000)
})

onBeforeUnmount(() => clearInterval(countdown))
</script>

<template>
  <div class="count-down">
    <div class="count-down__number">{{ props.countNumber }}</div>
  </div>
</template>