<script setup>
// import { useRaceStore } from '@/stores/raceStore'

const props = defineProps({
  horse: {
    type: Object,
    required: true,
  }
})

// const raceStore = useRaceStore()

</script>

<template>
  <div :style="`position:relative; left: ${props.horse.positionInLane}%`">
    <img class="race__horse" src="@/assets/images/horse.gif" v-if="props.horse.running" />
    <img class="race__horse" src="@/assets/images/horse-stop.gif" v-if="!props.horse.running" />
  </div>
</template>