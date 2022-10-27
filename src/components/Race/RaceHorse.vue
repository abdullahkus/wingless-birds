<script setup>
const props = defineProps({
  horse: {
    type: Object,
    required: true,
  }
})
</script>

<template>
  <div class="relative" :style="`left: ${props.horse.positionInLane}%`">
    <img class="race__horse" src="@/assets/images/horse.gif" v-if="props.horse.running" />
    <img class="race__horse" src="@/assets/images/horse-stop.gif" v-if="!props.horse.running" />
  </div>
</template>