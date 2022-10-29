<script setup>
import { ref, onBeforeMount, watch } from 'vue'
import CountDown from '../CountDown.vue';
import RaceLanes from './RaceLanes/RaceLanes.vue';
import { useRaceStore } from "@/stores/raceStore"

const raceStore = useRaceStore()
const props = defineProps({
  count: {
    type: Number,
    required: true
  }
})
const emits = defineEmits(["countHandler"])
const countNumber = ref()
onBeforeMount(() => {
  countNumber.value = props.count
})

watch(() => props.count, () => {
  countNumber.value = props.count
})

watch(() => countNumber.value, () => {
  emits("countHandler", countNumber.value)
})
</script>

<template>
  <div class="race__track">
    <div class="race__count-down" v-if="raceStore.isRace && countNumber > 0">
      <CountDown v-model:countNumber="countNumber"></CountDown>
    </div>
    <RaceLanes></RaceLanes>
  </div>
</template>