<script setup>
import { computed } from 'vue'
import { useRaceStore } from "@/stores/raceStore"

const raceStore = useRaceStore()

const leaderboard = computed(() => {
  const copyHorses = JSON.parse(JSON.stringify(raceStore.horses));
  const sortedPositionInLane = copyHorses.sort((one, two) => {
    if (one.positionInLane > two.positionInLane) {
      return -1;
    }
    if (one.positionInLane < two.positionInLane) {
      return 1;
    }
  })
  return sortedPositionInLane
})


</script>

<template>
  <div class="race__leaderboard">
    <h2 class="race__title">Leaderboard</h2>
    <ol class="race__list">
      <li v-for="horse in leaderboard" :key="horse.id" class="race__list-item">
        {{ horse.name }}
      </li>
    </ol>
  </div>
</template>