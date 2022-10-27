<script setup>
import { computed } from 'vue'
import { useRaceStore } from "@/stores/raceStore"

const raceStore = useRaceStore()

const leaderboard = computed(() => {
  // deep copy so that the store does not change
  const copyHorses = JSON.parse(JSON.stringify(raceStore.horses));

  // horses that did not finish the race
  const notFinishedHorse = copyHorses.filter((horse) => horse.numberOf === null)
  if (!notFinishedHorse) return

  const sortedPositionInLane = notFinishedHorse.sort((firstHorse, secondHorse) => {
    if (firstHorse.positionInLane > secondHorse.positionInLane) {
      return -1;
    }
    if (firstHorse.positionInLane < secondHorse.positionInLane) {
      return 1;
    }
  })
  return sortedPositionInLane
})

const finished = computed(() => {
  // deep copy so that the store does not change
  const copyHorses = JSON.parse(JSON.stringify(raceStore.horses));

  // horses finishing the race
  const finishedHorses = copyHorses.filter((horse) => horse.numberOf)
  let finishedNumberOf

  if (finishedHorses.length > 0) {
    finishedNumberOf = finishedHorses.sort((firstHorse, secondHorse) => {
      if (firstHorse.numberOf < secondHorse.numberOf) {
        return -1;
      }
      if (firstHorse.numberOf > secondHorse.numberOf) {
        return 1;
      }
    })
  } else {
    return
  }
  return finishedNumberOf
})
</script>

<template>
  <div class="race__leaderboard">
    <h2 class="race__title">Leaderboard</h2>
    <ol class="race__list">
      <li v-for="horse in finished" :key="horse.id" class="race__list-item race__list-item--finished">
        {{ horse.name }}
      </li>
      <li v-for="horse in leaderboard" :key="horse.id" class="race__list-item">
        {{ horse.name }}
      </li>
    </ol>
  </div>
</template>