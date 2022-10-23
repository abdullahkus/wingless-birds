<script setup>
import RaceCountdown from './RaceCountdown.vue';
import RaceLanes from './RaceLanes/RaceLanes.vue';

import { useRaceStore } from "@/stores/raceStore"

const raceStore = useRaceStore()
</script>

<template>
  <div class="race__track">
    <RaceCountdown v-if="raceStore.showCountdown"></RaceCountdown>
    <RaceLanes></RaceLanes>
  </div>
</template>

<style lang="scss">

</style>