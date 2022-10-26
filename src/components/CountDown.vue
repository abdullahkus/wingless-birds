<script setup>
import { onMounted, onBeforeUnmount } from 'vue';
const props = defineProps({
  count: {
    type: Number,
    required: true
  }
})
const emits = defineEmits(['update:count'])

let countdown = null

onMounted(() => {
  countdown = setInterval(() => {
    let number = props.count
    number--
    emits('update:count', number)
    if (number === 0) {
      clearInterval(countdown)
    }
  }, 1000)
}),

  onBeforeUnmount(() => clearInterval(countdown))
</script>

<template>
  <div class="count-down">
    <div class="count-down__number">{{ props.count }}</div>
  </div>
</template>