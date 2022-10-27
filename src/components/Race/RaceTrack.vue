<script setup>
import CountDown from '../CountDown.vue';
import RaceLanes from './RaceLanes/RaceLanes.vue';

const props = defineProps({
  isRace: {
    type: Boolean,
    required: true
  },
  count: {
    type: Number,
    required: true
  }
})
const emits = defineEmits(["update:count"])
</script>

<template>
  <div class="race__track">
    <div class="race__count-down" v-if="props.isRace && props.count > 0">
      <CountDown v-model:count="count"></CountDown>
    </div>
    <RaceLanes></RaceLanes>
  </div>
</template>