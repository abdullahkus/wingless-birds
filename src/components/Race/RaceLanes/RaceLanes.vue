<script setup>
import RaceLane from './RaceLane.vue';
import { useRaceStore } from "@/stores/raceStore"
const raceStore = useRaceStore()
</script>

<template>
  <div class="race__lanes">
    <div class="race__lane" :class="[(horse.id % 2) ? 'race__lane--dark' : 'race__lane--light']"
      v-for="horse in raceStore.horses" :key="horse.id">
      <RaceLane :horse="horse"></RaceLane>
    </div>
  </div>
</template>